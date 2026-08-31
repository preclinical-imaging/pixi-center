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
// created on first run.

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const ROOT = path.resolve(__dirname, "..", "..");
const DB_PATH = path.join(__dirname, "submissions.db");
const PORT = process.env.PORT || 8787;

// --- Database setup ------------------------------------------------------

const db = new DatabaseSync(DB_PATH);

// One column per form field, plus id / status / url.
// The three multiselect fields (diseaseSites, histologicDiagnoses, modalities)
// hold arrays client-side; they're stored as JSON-encoded TEXT.
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    status TEXT NOT NULL DEFAULT 'pending',
    url TEXT,
    contactName TEXT,
    contactEmail TEXT,
    contactPhone TEXT,
    title TEXT,
    identifier TEXT,
    institutions TEXT,
    abstract TEXT,
    doi TEXT,
    diseaseSites TEXT,
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
  "title", "identifier", "institutions", "abstract", "doi",
  "diseaseSites", "histologicDiagnoses", "modalities", "format",
  "subjects", "scans", "diskSpace",
];
const ARRAY_FIELDS = new Set(["diseaseSites", "histologicDiagnoses", "modalities"]);

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
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
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
