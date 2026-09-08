// Contact — public contact form, its own top-level page (same pattern as
// ../submit-dataset/SubmitDataset.jsx and ../about/About.jsx). Uses the same
// TopNav/Footer (../home/site-chrome.jsx) and form primitives
// (../home/ui.jsx).
//
// POSTs to /api/contact on the same origin (served by
// ui_kits/web_app/server.js — see that file's "Server" section; ROOT there
// is the repo root, so this page and that endpoint are same-origin
// regardless of which top-level page the fetch comes from). Every
// submission is emailed to CONTACT_TO (server-side), currently
// will@xnatworks.io.
//
// Spam prevention is two layers, both server-verified (see server.js's
// "Contact form captcha" section):
//   1. A one-time arithmetic challenge minted by GET /api/captcha and
//      checked by POST /api/contact — no third-party captcha service or
//      API key needed.
//   2. A honeypot field ("company") hidden from sighted users via CSS but
//      present in the DOM; a bot that fills in every field trips it, and
//      the server silently drops the message without erroring the request.

const FormSection = ({ title, children }) => (
  <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 24 }}>
    {title && (
      <h2 style={{
        margin: "0 0 16px", fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
        letterSpacing: "-0.01em", color: "var(--fg-1)",
      }}>{title}</h2>
    )}
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {children}
    </div>
  </div>
);

const Row = ({ children, cols = 2 }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16 }}>{children}</div>
);

const EMPTY_FORM = { name: "", email: "", institution: "", position: "", message: "" };

// Loads a fresh arithmetic challenge from the server. Returns { id, question }
// on success; the id must be echoed back on submit, the answer never is.
function loadCaptcha() {
  return fetch("/api/captcha").then(res => {
    if (!res.ok) throw new Error(`Failed to load captcha (${res.status})`);
    return res.json();
  });
}

const ContactForm = ({ onSent }) => {
  const [form, setForm] = React.useState(EMPTY_FORM);
  const [company, setCompany] = React.useState(""); // honeypot — real visitors leave this blank
  const [captcha, setCaptcha] = React.useState(null);
  const [captchaAnswer, setCaptchaAnswer] = React.useState("");
  const [captchaLoadError, setCaptchaLoadError] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);
  const set = (key) => (v) => setForm(f => ({ ...f, [key]: v }));

  const refreshCaptcha = React.useCallback(() => {
    setCaptchaLoadError(null);
    setCaptchaAnswer("");
    loadCaptcha()
      .then(setCaptcha)
      .catch(() => setCaptchaLoadError("Couldn't load the verification question — make sure the local server is running (node ui_kits/web_app/server.js)."));
  }, []);

  React.useEffect(() => { refreshCaptcha(); }, [refreshCaptcha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          company,
          captchaId: captcha?.id,
          captchaAnswer,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        // A wrong or expired answer consumes the challenge server-side —
        // mint a new one so the visitor isn't stuck retrying a dead id.
        refreshCaptcha();
        throw new Error(result.error || `Server responded ${res.status}`);
      }
      onSent?.();
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ padding: "40px 40px 96px", maxWidth: 720, margin: "0 auto" }}>
      <Eyebrow mono>Get in touch</Eyebrow>
      <h1 style={{
        margin: "14px 0 8px", fontFamily: "var(--font-display)",
        fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em",
        color: "var(--fg-1)",
      }}>Contact PIXI Center</h1>
      <p style={{ margin: "0 0 28px", fontSize: 15, color: "var(--fg-2)", lineHeight: 1.55 }}>
        Questions about datasets, contributing your own data, or the PIXI platform — send us a
        message and PIXI Center staff will follow up. Fields marked with an asterisk (*) are required.
      </p>

      <form onSubmit={handleSubmit}>
        <FormSection>
          <Row cols={2}>
            <Field label="Name" required value={form.name} onChange={set("name")} placeholder="Jane Doe" />
            <Field label="Email" required type="email" value={form.email} onChange={set("email")} placeholder="jane.doe@example.edu" />
          </Row>
          <Row cols={2}>
            <Field label="Institution" value={form.institution} onChange={set("institution")} placeholder="e.g. Washington University in St. Louis" />
            <Field label="Position" value={form.position} onChange={set("position")} placeholder="e.g. Postdoctoral Researcher" />
          </Row>
          <TextArea
            label="Message" required rows={6}
            value={form.message} onChange={set("message")}
            placeholder="How can we help?"
          />

          {/* Honeypot: off-screen, not display:none (some bots skip that),
              unreachable by tab order, and not read by screen readers —
              real visitors never see or fill it in. */}
          <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
            <label>
              Company
              <input
                type="text" tabIndex={-1} autoComplete="off"
                value={company} onChange={(e) => setCompany(e.target.value)}
              />
            </label>
          </div>

          <div style={{ paddingTop: 4, borderTop: "1px solid var(--border-subtle)" }}>
            {captchaLoadError ? (
              <div style={{ fontSize: 13, color: "var(--danger)" }}>{captchaLoadError}</div>
            ) : (
              <Field
                label={captcha ? `Verification — what is ${captcha.question}?` : "Verification — loading…"}
                required type="number"
                value={captchaAnswer} onChange={setCaptchaAnswer}
                placeholder="Your answer"
              />
            )}
          </div>
        </FormSection>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 14, marginTop: 20 }}>
          {submitError && (
            <span style={{ fontSize: 13, color: "var(--danger)" }}>{submitError}</span>
          )}
          <Button type="submit" variant="primary" size="lg" disabled={submitting || !captcha}>
            {submitting ? "Sending…" : "Send message"}
          </Button>
        </div>
      </form>
    </section>
  );
};

const ContactThanks = () => (
  <section style={{ padding: "40px 40px 96px", maxWidth: 720, margin: "0 auto" }}>
    <div style={{
      maxWidth: 560, margin: "64px auto 0", textAlign: "center",
      background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: "48px 40px",
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%", background: "var(--pixi-green-soft)",
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
      }}>
        <Icon name="check" size={26} color="var(--pixi-green-deep)" />
      </div>
      <h1 style={{
        margin: "0 0 12px", fontFamily: "var(--font-display)",
        fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em",
      }}>Message sent</h1>
      <p style={{ margin: "0 0 28px", fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)" }}>
        Thanks for reaching out. PIXI Center staff will get back to you soon.
      </p>
      <a href="../home/index.html"><Button variant="primary">Back to home</Button></a>
    </div>
  </section>
);

const ContactPage = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <div className="pixi-root" data-screen-label="PIXI Center contact">
      <TopNav />
      {sent ? <ContactThanks /> : <ContactForm onSent={() => setSent(true)} />}
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
