// Inspector — right-hand drawer for subject metadata.

const Inspector = ({ subject, onClose }) => {
  if (!subject) return null;
  return (
    <aside style={{
      position: "absolute", top: 0, right: 0, bottom: 0, width: 360,
      background: "#fff", borderLeft: "1px solid var(--border-subtle)",
      display: "flex", flexDirection: "column",
      boxShadow: "0 8px 16px rgba(16,24,40,.06), 0 16px 40px rgba(16,24,40,.08)",
      fontFamily: "var(--font-sans)", zIndex: 50,
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)",
      }}>
        <div>
          <Eyebrow mono>Subject</Eyebrow>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em", marginTop: 2 }}>{subject.id}</div>
        </div>
        <button onClick={onClose} style={{
          width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent",
          cursor: "pointer", color: "var(--fg-3)", display: "inline-flex", alignItems: "center", justifyContent: "center",
        }}><Icon name="close" size={16} /></button>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 18 }}>
        <Badge tone={subject.status} dot>{subject.statusLabel}</Badge>

        <Section title="Identity">
          <KV2 label="Subject ID" value={subject.id} mono />
          <KV2 label="Cohort" value={subject.cohort} />
          <KV2 label="Sex" value={subject.sex === "F" ? "Female" : "Male"} />
          <KV2 label="Strain" value="C57BL/6J" />
          <KV2 label="DOB" value="2026-01-12" mono />
        </Section>

        <Section title="Measurements">
          <KV2 label="Mass" value={`${subject.mass.toFixed(1)} g`} mono />
          <KV2 label="Day" value={`${subject.day} / 28`} />
          <KV2 label="Last scan" value="2026-04-26 14:21" mono />
          <KV2 label="Tracer activity" value="12,478.06 MBq" mono />
        </Section>

        <Section title="Latest scan" subtitle="PET / CT · day 14">
          <div style={{
            aspectRatio: "1 / 1",
            borderRadius: 8, border: "1px solid var(--border-subtle)",
            background: "linear-gradient(135deg, #1A1B1E 0%, #3D3F44 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--pixi-steel)", fontSize: 12,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <Icon name="image" size={24} color="var(--pixi-steel)" />
              <span>imaging viewer placeholder</span>
            </div>
            <div style={{
              position: "absolute", bottom: 8, left: 10,
              fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--pixi-steel)",
            }}>slice 124 / 248 · 0.4 mm</div>
          </div>
          <Button variant="secondary" size="sm" icon="image">Open in workbench</Button>
        </Section>

        <Section title="Notes">
          <div style={{
            background: "var(--pixi-paper)", border: "1px solid var(--border-subtle)",
            borderRadius: 6, padding: 12, fontSize: 13, color: "var(--fg-2)", lineHeight: 1.5,
          }}>
            Vehicle cohort. No adverse events at day 14. Slight elevation in baseline activity vs. day 7 — flag for reviewer.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--fg-3)" }}>
            <Avatar initials="EH" size={20} /> E. Hoshino · Apr 26
          </div>
        </Section>
      </div>

      <div style={{
        padding: 12, borderTop: "1px solid var(--border-subtle)",
        display: "flex", gap: 8, justifyContent: "flex-end",
      }}>
        <Button variant="secondary" size="sm">Edit</Button>
        <Button variant="primary" size="sm" icon="check">Mark reviewed</Button>
      </div>
    </aside>
  );
};

const Section = ({ title, subtitle, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div>
      <Eyebrow>{title}</Eyebrow>
      {subtitle && <div style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 2 }}>{subtitle}</div>}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{children}</div>
  </div>
);

const KV2 = ({ label, value, mono }) => (
  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13, padding: "4px 0" }}>
    <span style={{ color: "var(--fg-3)" }}>{label}</span>
    <span style={{ color: "var(--fg-1)", fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)", fontWeight: 500, textAlign: "right" }}>{value}</span>
  </div>
);

Object.assign(window, { Inspector });
