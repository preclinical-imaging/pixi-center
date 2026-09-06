// Shared chrome for PIXI Center's public-facing pages (home, about, …) —
// top nav + footer, so every top-level page shares the same link set.
// Loaded before each page's own <Page>.jsx (see index.html files).

const NAV = [
  { label: "Datasets", href: "../ui_kits/web_app/index.html" },
  { label: "Cohort Browser", href: "../ui_kits/web_app/index.html#cohorts" },
  { label: "About", href: "../about/index.html" },
];

const TopNav = () => {
  const [hover, setHover] = React.useState(null);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)",
      height: 64,
      display: "flex", alignItems: "center",
      padding: "0 40px", gap: 32,
    }}>
      <a href="../home/index.html" style={{ textDecoration: "none", display: "inline-flex" }}>
        <Logo size={26} />
      </a>
      <nav style={{ display: "flex", gap: 4, marginLeft: 16 }}>
        {NAV.map(({ label, href }) => (
          <a key={label} href={href}
             onMouseEnter={() => setHover(label)}
             onMouseLeave={() => setHover(null)}
             style={{
               padding: "8px 12px",
               fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
               color: hover === label ? "var(--pixi-navy)" : "var(--fg-1)",
               textDecoration: "none",
               borderRadius: 6,
               background: hover === label ? "var(--pixi-cloud)" : "transparent",
               transition: "background 120ms, color 120ms",
             }}>
            {label}
          </a>
        ))}
      </nav>
      <div style={{ flex: 1 }} />
      <a href="/xnat/app/template/Login.vm" target="_xnat"><Button variant="secondary" size="sm">Log in to PIXI</Button></a>
    </header>
  );
};

const Footer = () => (
  <footer style={{
    background: "#fff",
    padding: "40px 40px 28px",
    fontFamily: "var(--font-sans)",
  }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", gap: 32, flexWrap: "wrap",
        paddingBottom: 24, borderBottom: "1px solid var(--border-subtle)",
      }}>
        <div style={{ maxWidth: 420 }}>
          <Logo size={22} />
          <p style={{
            margin: "12px 0 0", fontSize: 13, color: "var(--fg-3)", lineHeight: 1.55,
          }}>
            PIXI Center is funded by NIH grants. Hosted in collaboration with contributing
            preclinical imaging core facilities.
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          {[
            ["Explore", [["Datasets", "../ui_kits/web_app/index.html"], ["Knowledge base", "#"]]],
            ["About", [["About PIXI Center", "../about/index.html"], ["Contributors", "#"]]],
            ["Contribute", [["Submit a dataset", "../ui_kits/web_app/index.html"], ["Documentation", "#"], ["Contact", "#"]]],
          ].map(([title, items]) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--fg-3)",
              }}>{title}</div>
              {items.map(([label, href]) => (
                <a key={label} href={href} style={{
                  color: "var(--fg-1)", textDecoration: "none", fontSize: 13,
                }}>{label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 16, paddingTop: 20, flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 12, color: "var(--fg-3)" }}>
          © 2026 PIXI Center. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 12 }}>
          <a href="#" style={{ color: "var(--fg-3)", textDecoration: "none" }}>Privacy policy</a>
          <a href="#" style={{ color: "var(--fg-3)", textDecoration: "none" }}>Terms</a>
          <a href="#" style={{ color: "var(--fg-3)", textDecoration: "none" }}>Accessibility</a>
        </div>
        <div style={{
          fontSize: 12, color: "var(--fg-3)",
          padding: "4px 10px", border: "1px solid var(--border-subtle)",
          borderRadius: 999, background: "var(--pixi-paper)",
        }}>
          Funded by NIH grants
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { NAV, TopNav, Footer });
