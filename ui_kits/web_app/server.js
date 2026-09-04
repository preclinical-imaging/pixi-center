#!/usr/bin/env node
// Static file server + submissions API for the PIXI Center web app UI kit.
//
// No external dependencies — persistence uses Node's built-in `node:sqlite`
// (stable since Node 22.5+; the "SQLite is an experimental feature" warning
// on startup is expected and harmless).
//
// Run:   node ui_kits/web_app/server.js
// Then:  open http://localhost:8787/ui_kits/web_app/index.html
//
// POST /api/submissions persists a row of the "Submit a dataset" form
// (see SubmitDataset.jsx) into submissions.db, in a `submissions` table
// created on first run, then emails the submission details to the form's
// "Contact Email" via a local SMTP relay (see "Email" section below).

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const net = require("node:net");
const os = require("node:os");
const { DatabaseSync } = require("node:sqlite");

const ROOT = path.resolve(__dirname, "..", "..");
const DB_PATH = path.join(__dirname, "submissions.db");
const PORT = process.env.PORT || 8787;

// --- Database setup ------------------------------------------------------

const db = new DatabaseSync(DB_PATH);

// One column per form field, plus id / status / url.
// The two multiselect fields (histologicDiagnoses, modalities) hold arrays
// client-side; they're stored as JSON-encoded TEXT.
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    status TEXT NOT NULL DEFAULT 'pending',
    url TEXT,
    contactName TEXT,
    contactEmail TEXT,
    contactPhone TEXT,
    title TEXT,
    authors TEXT,
    identifier TEXT,
    institutions TEXT,
    abstract TEXT,
    doi TEXT,
    histologicDiagnoses TEXT,
    modalities TEXT,
    format TEXT,
    subjects TEXT,
    scans TEXT,
    diskSpace TEXT
  )
`);

const FORM_FIELDS = [
  "contactName", "contactEmail", "contactPhone",
  "title", "authors", "identifier", "institutions", "abstract", "doi",
  "histologicDiagnoses", "modalities", "format",
  "subjects", "scans", "diskSpace",
];
const ARRAY_FIELDS = new Set(["histologicDiagnoses", "modalities"]);

const insertStmt = db.prepare(`
  INSERT INTO submissions (status, url, ${FORM_FIELDS.join(", ")})
  VALUES ('pending', NULL, ${FORM_FIELDS.map(f => "@" + f).join(", ")})
`);
const setUrlStmt = db.prepare(`UPDATE submissions SET url = @url WHERE id = @id`);

function slugify(s) {
  return String(s || "").trim().replace(/[^a-zA-Z0-9]+/g, "-").replace(/(^-+|-+$)/g, "");
}

function insertSubmission(body) {
  const params = {};
  for (const f of FORM_FIELDS) {
    const v = body[f];
    params[f] = ARRAY_FIELDS.has(f) ? JSON.stringify(v || []) : (v ?? null);
  }
  const info = insertStmt.run(params);
  const id = Number(info.lastInsertRowid);
  // Mirror the STUDIES.jsx convention of an XNAT project URL derived from the identifier.
  const slug = slugify(body.identifier) || String(id);
  const url = `/xnat/data/projects/${slug}`;
  setUrlStmt.run({ id, url });
  return { id, status: "pending", url };
}

// --- Email -----------------------------------------------------------------
//
// Confirms each submission by emailing its details to the form's "Contact
// Email". Talks raw SMTP over a plain TCP socket to a local relay (e.g.
// Postfix/sendmail/msmtp listening on localhost:25) — no auth, no TLS, no
// external dependency, matching the rest of this file. Point SMTP_HOST /
// SMTP_PORT elsewhere via environment variables if your relay isn't on
// localhost:25.

const SMTP_HOST = process.env.SMTP_HOST || "localhost";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 25;
const EMAIL_FROM = process.env.EMAIL_FROM || "no-reply@pixi-center.local";

// Field order/labels mirror the form in SubmitDataset.jsx.
const FIELD_LABELS = {
  contactName: "Contact Name",
  contactEmail: "Contact Email",
  contactPhone: "Contact Phone",
  title: "Dataset Title",
  authors: "Authors",
  identifier: "Dataset Identifier",
  institutions: "Institution(s)",
  abstract: "Abstract",
  doi: "DOI",
  histologicDiagnoses: "Primary Disease Area of Study",
  modalities: "Imaging Modalities",
  format: "Imaging Format",
  subjects: "Number of Subjects",
  scans: "Number of Scans",
  diskSpace: "Required Disk Space",
};

function formatSubmissionEmail(body, result) {
  const lines = FORM_FIELDS.map((f) => {
    const v = body[f];
    const shown = ARRAY_FIELDS.has(f) ? (v || []).join(", ") : (v ?? "");
    return `${FIELD_LABELS[f] || f}: ${shown || "—"}`;
  });
  const subject = `PIXI Center dataset proposal received: ${body.title || "(untitled)"}`;
  const text =
    `Thank you for submitting a dataset proposal to the PIXI Center.\n` +
    `PIXI Center administrators will be in touch to discuss next steps and data uploads.\n\n` +
    `Submission #${result.id} (status: ${result.status})\n` +
    `${"-".repeat(40)}\n` +
    lines.join("\n") + "\n";
  return { subject, text };
}

// Node reports a refused/unreachable connection as an AggregateError whose
// own .message is empty (the useful text is nested in .errors[]) — pull out
// something readable regardless of which shape a socket error takes.
function describeError(err) {
  if (err && err.errors && err.errors.length) return err.errors.map((e) => e.message).join("; ");
  if (err && err.message) return err.message;
  return String(err);
}

// Minimal SMTP client: connect, EHLO, MAIL FROM, RCPT TO, DATA, QUIT.
// Resolves once the message has been accepted by the relay; rejects on any
// SMTP error response, socket error, or 10s timeout.
function sendEmail({ to, subject, text }) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host: SMTP_HOST, port: SMTP_PORT });
    let buffer = "";
    let pending = null;

    const timer = setTimeout(() => {
      socket.destroy();
      reject(new Error(`SMTP connection to ${SMTP_HOST}:${SMTP_PORT} timed out`));
    }, 10000);

    const finish = (err) => {
      clearTimeout(timer);
      socket.destroy();
      if (err) reject(err); else resolve();
    };

    // Wait for one full (possibly multi-line) SMTP response, e.g. a
    // continuation "250-..." followed by a final "250 ..." line.
    const expect = (code) => new Promise((res, rej) => {
      pending = (response) => {
        const lines = response.trim().split("\r\n");
        const got = Number(lines[lines.length - 1].slice(0, 3));
        if (got !== code) rej(new Error(`SMTP error (expected ${code}): ${lines[lines.length - 1]}`));
        else res(response);
      };
    });

    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split("\r\n").filter(Boolean);
      const last = lines[lines.length - 1];
      if (!last || !/^\d{3} /.test(last)) return; // multi-line response not finished yet
      const response = buffer;
      buffer = "";
      if (pending) { const p = pending; pending = null; p(response); }
    });
    socket.on("error", (err) => finish(new Error(describeError(err))));

    (async () => {
      await expect(220); // greeting
      socket.write(`EHLO ${os.hostname()}\r\n`);
      await expect(250);
      socket.write(`MAIL FROM:<${EMAIL_FROM}>\r\n`);
      await expect(250);
      socket.write(`RCPT TO:<${to}>\r\n`);
      await expect(250);
      socket.write(`DATA\r\n`);
      await expect(354);

      const message =
        `From: PIXI Center <${EMAIL_FROM}>\r\n` +
        `To: <${to}>\r\n` +
        `Subject: ${subject}\r\n` +
        `Content-Type: text/plain; charset=utf-8\r\n\r\n` +
        text.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..") + // dot-stuffing
        `\r\n.\r\n`;
      socket.write(message);
      await expect(250);

      socket.write("QUIT\r\n");
      finish();
    })().catch(finish);
  });
}

// --- Static file serving --------------------------------------------------

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".jsx": "text/babel",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function serveStatic(req, res) {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath === "/") reqPath = "/index.html";
  const filePath = path.join(ROOT, reqPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      try {
        resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

// --- Server ----------------------------------------------------------------

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/submissions") {
    try {
      const body = await readJsonBody(req);
      const result = insertSubmission(body);

      // The submission is already saved at this point — treat email as
      // best-effort so an unreachable/misconfigured SMTP relay doesn't turn
      // into a failed submission. Failures are logged and surfaced in the
      // response for visibility, not raised as a request error.
      let emailSent = false;
      let emailError = null;
      if (body.contactEmail) {
        try {
          const { subject, text } = formatSubmissionEmail(body, result);
          await sendEmail({ to: body.contactEmail, subject, text });
          emailSent = true;
        } catch (err) {
          emailError = err.message;
          console.error(`Failed to email submission #${result.id} to ${body.contactEmail}: ${err.message}`);
        }
      } else {
        emailError = "No contactEmail provided";
      }

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ...result, emailSent, emailError }));
    } catch (err) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }
  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }
  res.writeHead(405);
  res.end("Method not allowed");
});

server.listen(PORT, () => {
  console.log(`PIXI Center web app  →  http://localhost:${PORT}/ui_kits/web_app/index.html`);
  console.log(`Submissions DB       →  ${DB_PATH}`);
});
