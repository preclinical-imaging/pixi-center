// Workbench — imaging viewer placeholder (left toolbar + main canvas + right panel)

const Workbench = () => {
  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "var(--font-sans)" }}>
      {/* Left tool rail */}
      <div style={{
        width: 56, flexShrink: 0,
        background: "#fff", borderRight: "1px solid var(--border-subtle)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 0",
      }}>
        {["zoomIn","zoomOut","layers","sliders","activity"].map((n, i) => (
          <button key={n} style={{
            width: 36, height: 36, borderRadius: 6,
            border: "none", background: i === 0 ? "var(--pixi-navy-soft)" : "transparent",
            color: i === 0 ? "var(--pixi-navy)" : "var(--fg-2)",
            cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center",
          }}><Icon name={n} size={18} /></button>
        ))}
      </div>

      {/* Main canvas */}
      <div style={{ flex: 1, background: "var(--pixi-ink)", position: "relative", overflow: "hidden" }}>
        {/* Canvas header */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 44, zIndex: 2,
          background: "rgba(10,10,11,.72)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", padding: "0 16px", gap: 14,
          color: "#fff", fontSize: 13,
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.7)" }}>PXI-2412-A · M-018 · day 14</span>
          <span style={{ color: "rgba(255,255,255,.4)" }}>·</span>
          <span>PET / CT</span>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.7)" }}>slice 124 / 248</span>
        </div>

        {/* Canvas body — placeholder */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "radial-gradient(circle at 50% 45%, #2a2c31 0%, #0A0A0B 70%)",
        }}>
          <div style={{
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle at 45% 40%, #6B6E76 0%, #3D3F44 35%, #1A1B1E 70%)",
            border: "1px dashed rgba(255,255,255,.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "rgba(255,255,255,.4)", fontSize: 12, fontFamily: "var(--font-mono)",
          }}>
            slice viewer placeholder
          </div>
        </div>

        {/* Canvas footer */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 44, zIndex: 2,
          background: "rgba(10,10,11,.72)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", padding: "0 16px", gap: 16,
          color: "#fff", fontSize: 13,
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}>
          <button style={iconBtnDark}><Icon name="play" size={14} color="#fff"/></button>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.7)" }}>00:14 / 02:02</span>
          <div style={{ flex: 1, height: 4, borderRadius: 2, background: "rgba(255,255,255,.1)", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "12%", background: "var(--pixi-yellow)", borderRadius: 2 }} />
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.7)" }}>0.40 mm</span>
        </div>
      </div>

      {/* Right inspector panel */}
      <div style={{
        width: 280, flexShrink: 0, background: "#fff",
        borderLeft: "1px solid var(--border-subtle)",
        padding: 16, overflow: "auto",
        display: "flex", flexDirection: "column", gap: 18,
      }}>
        <div>
          <Eyebrow>Layers</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
            {[
              ["CT — anatomy", true],
              ["PET — uptake", true],
              ["ROI — liver", true],
              ["ROI — kidney", false],
              ["Annotations", false],
            ].map(([label, on]) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "6px 8px", borderRadius: 4,
                background: on ? "var(--pixi-paper)" : "transparent",
                fontSize: 13, color: on ? "var(--fg-1)" : "var(--fg-3)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%",
                  background: on ? "var(--pixi-green)" : "var(--pixi-mist)" }} />
                <span style={{ flex: 1 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow>Window / level</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
            <KV3 label="W" value="380" />
            <KV3 label="L" value="40" />
            <KV3 label="SUVmax" value="6.21" />
            <KV3 label="SUVmean" value="2.04" />
          </div>
        </div>
        <div>
          <Eyebrow>Reconstruction</Eyebrow>
          <div style={{ marginTop: 8, fontSize: 13, color: "var(--fg-2)", lineHeight: 1.6 }}>
            <div><span style={{ color: "var(--fg-3)" }}>Method</span> — OSEM 3D</div>
            <div><span style={{ color: "var(--fg-3)" }}>Iterations</span> — 4 × 16</div>
            <div><span style={{ color: "var(--fg-3)" }}>Filter</span> — Gaussian 2 mm</div>
            <div><span style={{ color: "var(--fg-3)" }}>Version</span> <span style={{ fontFamily: "var(--font-mono)" }}>v 2.4.1</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KV3 = ({ label, value }) => (
  <div style={{ background: "var(--pixi-paper)", border: "1px solid var(--border-subtle)", borderRadius: 6, padding: "8px 10px" }}>
    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>{label}</div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>{value}</div>
  </div>
);

const iconBtnDark = {
  width: 28, height: 28, borderRadius: 4,
  border: "none", background: "rgba(255,255,255,.08)",
  cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center",
};

Object.assign(window, { Workbench });
