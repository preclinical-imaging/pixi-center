// Home page for PIXI Center — public-facing.
// Uses tokens from ../../colors_and_type.css and primitives from ui.jsx.

// ---------- Tweakable controls ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "barColor": "#1E3C87",
  "barCount": 7,
  "sortByCount": true,
  "showValues": true
}/*EDITMODE-END*/;

const NAV = [
  { label: "Datasets", href: "../ui_kits/web_app/index.html" },
  { label: "Cohort Browser", href: "../ui_kits/web_app/index.html#cohorts" },
  { label: "About", href: "#" },
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
      <a href="#" style={{ textDecoration: "none", display: "inline-flex" }}>
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

const Hero = ({ t }) => (
  <section style={{
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 48,
    alignItems: "center",
    padding: "72px 40px 56px",
    maxWidth: 1320, margin: "0 auto",
  }}>
    <div>
      <Eyebrow mono>Preclinical research · open data</Eyebrow>
      <h1 style={{
        margin: "14px 0 18px",
        fontFamily: "var(--font-display)",
        fontSize: 56, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05,
        color: "var(--fg-1)",
        textWrap: "balance",
      }}>
        A shared workbench for <span style={{color:"var(--pixi-navy)"}}>preclinical</span> imaging research.
      </h1>
      <p style={{
        margin: "0 0 28px",
        fontFamily: "var(--font-sans)",
        fontSize: 18, lineHeight: 1.55,
        color: "var(--fg-2)",
        maxWidth: 560,
        textWrap: "pretty",
      }}>
        PIXI Center hosts curated preclinical imaging datasets, compute, and a peer-to-peer
        knowledge base — built so investigators, study directors, and core facilities can
        share methods and reproduce results across institutions.
      </p>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href="/ui_kits/web_app/index.html"><Button variant="primary" size="lg" icon="arrowRight">Browse datasets</Button></a>
        <Button variant="ghost" size="lg">Learn more</Button>
      </div>
      <div style={{
        display: "flex", gap: 24, marginTop: 36,
        paddingTop: 20, borderTop: "1px solid var(--border-subtle)",
      }}>
        {[
          ["Datasets", "412"],
          ["Subjects", "12,840"],
          ["Institutions", "37"],
        ].map(([l, v]) => (
          <div key={l}>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600,
              letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums",
              color: "var(--fg-1)",
            }}>{v}</div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--fg-3)", marginTop: 2,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <HeroBarChart t={t} />
  </section>
);

// Hero visual: horizontal bar chart of the most-studied areas of disease
// across the dataset library. Areas come from the unique "area" values in
// data/studies.json; each bar totals the "subjects" of every study tagged
// to that area. Driven by the Tweaks panel.

let _diseaseAreasCache = null;
let _diseaseAreasPromise = null;

function summarizeDiseaseAreas(studies) {
  const totals = new Map();
  for (const s of studies) {
    if (!s.area) continue;
    totals.set(s.area, (totals.get(s.area) || 0) + (Number(s.subjects) || 0));
  }
  return [...totals.entries()].map(([area, count]) => ({ area, count }));
}

function loadDiseaseAreas() {
  if (!_diseaseAreasPromise) {
    _diseaseAreasPromise = fetch("/data/studies.json")
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load /data/studies.json (${res.status})`);
        return res.json();
      })
      .then(studies => (_diseaseAreasCache = summarizeDiseaseAreas(studies)));
  }
  return _diseaseAreasPromise;
}

// Fetches once and caches, same pattern as Studies.jsx's useStudies().
const useDiseaseAreas = () => {
  const [areas, setAreas] = React.useState(_diseaseAreasCache || []);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (_diseaseAreasCache) return;
    let cancelled = false;
    loadDiseaseAreas()
      .then(data => { if (!cancelled) setAreas(data); })
      .catch(err => { if (!cancelled) setError(err); });
    return () => { cancelled = true; };
  }, []);

  return { areas, error };
};

const HeroBarChart = ({ t }) => {
  const [mounted, setMounted] = React.useState(false);
  const { areas, error } = useDiseaseAreas();
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const sorted = React.useMemo(() => {
    const out = [...areas];
    return t.sortByCount
      ? out.sort((a, b) => b.count - a.count)
      : out.sort((a, b) => a.area.localeCompare(b.area));
  }, [areas, t.sortByCount]);

  const rows = sorted.slice(0, Math.max(3, Math.min(8, t.barCount)));
  const max = Math.max(1, ...areas.map(d => d.count));

  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      border: "1px solid var(--border-default)",
      padding: "28px 28px 24px",
      boxShadow: "0 24px 60px rgba(16,24,40,.10), 0 8px 20px rgba(16,24,40,.06)",
      display: "flex", flexDirection: "column", gap: 22,
    }}>
      <div>
        <Eyebrow mono>Across {areas.length} disease areas</Eyebrow>
        <h3 style={{
          margin: "10px 0 0", fontFamily: "var(--font-display)",
          fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg-1)",
        }}>
          Most studied areas of disease
        </h3>
      </div>

      {error && (
        <div style={{ fontSize: 13, color: "var(--danger)" }}>
          Couldn't load disease areas — make sure the local server is running (node ui_kits/web_app/server.js).
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {rows.map(({ area, count }, i) => {
          const pct = (count / max) * 100;
          return (
            <div key={area} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
              }}>
                <span style={{
                  fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
                  color: "var(--fg-1)", lineHeight: 1.2, minWidth: 0,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{area}</span>
                {t.showValues && (
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
                    color: "var(--fg-3)", fontVariantNumeric: "tabular-nums", flexShrink: 0,
                  }}>{count}</span>
                )}
              </div>
              <div style={{
                height: 9, borderRadius: 999, background: "var(--pixi-cloud)", overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", borderRadius: 999, background: t.barColor,
                  width: mounted ? `${pct}%` : "0%",
                  transition: `width 720ms var(--ease-out) ${i * 70}ms`,
                }} />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        fontSize: 12, color: "var(--fg-3)", lineHeight: 1.5,
        paddingTop: 14, borderTop: "1px solid var(--border-subtle)",
      }}>
        Bar length reflects the number of subjects studied within each disease area.
      </div>
    </div>
  );
};

// ---------- Section 1: What can I find ----------

const FindCard = ({ icon, title, body }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
        borderRadius: 10, padding: "26px 24px",
        display: "flex", flexDirection: "column", gap: 14,
        boxShadow: hover ? "var(--shadow-sm)" : "none",
        transition: "box-shadow 120ms, border-color 120ms",
      }}>
      <div style={{
        width: 44, height: 44, borderRadius: 8,
        background: "var(--pixi-navy-soft)",
        color: "var(--pixi-navy)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name={icon} size={22} />
      </div>
      <h3 style={{
        margin: 0, fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600,
        letterSpacing: "-0.01em", color: "var(--fg-1)",
      }}>{title}</h3>
      <p style={{
        margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)",
      }}>{body}</p>
    </div>
  );
};

const FindSection = () => (
  <section style={{ padding: "72px 40px 32px", maxWidth: 1320, margin: "0 auto" }}>
    <div style={{ marginBottom: 32 }}>
      <Eyebrow>Overview</Eyebrow>
      <h2 style={{
        margin: "8px 0 0", fontFamily: "var(--font-display)",
        fontSize: 38, fontWeight: 600, letterSpacing: "-0.015em",
        color: "var(--fg-1)", textWrap: "balance",
      }}>
        What can I find in PIXI Center?
      </h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      <FindCard
        icon="layers"
        title="Preclinical datasets"
        body="Curated imaging studies — PET, CT, MRI, optical — with subject metadata, protocols, and reconstruction parameters preserved end-to-end."
      />
      <FindCard
        icon="activity"
        title="Compute resources"
        body="Reproducible analysis environments with shared GPU compute, ROI workflows, and reconstruction pipelines that run next to the data."
      />
      <FindCard
        icon="library"
        title="Knowledge base"
        body="Method notes, protocol templates, and validated SOPs from contributing investigators and core facilities, citable by version."
      />
    </div>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
      <Button variant="secondary" size="lg" icon="arrowRight">About PIXI Center</Button>
    </div>
  </section>
);

// ---------- Section 2: Recent datasets ----------

const RECENT = [
  { id: "PXI-2412-A", title: "GLP-1 receptor agonist · Q2 cohort", area: "Cardio · biodistribution",
    status: "warn", statusLabel: "In progress",
    subjects: 24, scans: 96, modalities: ["CT","PET","MR"],
    institution: "WUSTL", updated: "2 h ago" },
  { id: "PXI-2402-B", title: "Tumor microenvironment · BALB/c", area: "Oncology · preclinical",
    status: "info", statusLabel: "Reviewing",
    subjects: 18, scans: 72, modalities: ["PET","CT"],
    institution: "MIT", updated: "yesterday" },
  { id: "PXI-2403-A", title: "Anti-PD1 efficacy — pilot", area: "Oncology · preclinical",
    status: "success", statusLabel: "Complete",
    subjects: 12, scans: 48, modalities: ["PET","CT"],
    institution: "CAMI", updated: "Apr 28" },
  { id: "PXI-2410-A", title: "89Zr-DFO antibody dosimetry", area: "Imaging · methods",
    status: "warn", statusLabel: "In progress",
    subjects: 8, scans: 24, modalities: ["PET","CT"],
    institution: "WUSTL", updated: "3 d ago" },
];

const DatasetCard = ({ s }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         textDecoration: "none", color: "inherit",
         display: "flex", flexDirection: "column", gap: 14,
         padding: 18, background: "#fff",
         border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
         borderRadius: 8,
         boxShadow: hover ? "var(--shadow-sm)" : "none",
         transition: "box-shadow 120ms, border-color 120ms",
         fontFamily: "var(--font-sans)",
       }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <Eyebrow mono>{s.id}</Eyebrow>
          <Badge tone={s.status} dot>{s.statusLabel}</Badge>
        </div>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600,
            letterSpacing: "-0.01em", lineHeight: 1.25, color: "var(--fg-1)",
          }}>{s.title}</div>
          <div style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 4 }}>{s.area}</div>
        </div>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10,
        paddingTop: 10, borderTop: "1px solid var(--border-subtle)",
      }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 2 }}>Subjects</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{s.subjects}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 2 }}>Scans</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{s.scans}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 4 }}>Modalities</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {s.modalities.map(m => (
              <span key={m} style={{
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
                color: "var(--pixi-navy)", background: "var(--pixi-navy-soft)",
                borderRadius: 4, padding: "2px 6px", lineHeight: 1.3,
              }}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", height: 22, padding: "0 8px",
          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
          color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
        }}>{s.institution}</span>
        <span style={{ fontSize: 12, color: "var(--fg-3)" }}>updated {s.updated}</span>
      </div>
    </a>
  );
};

const RecentSection = () => (
  <section style={{
    padding: "32px 40px 72px", maxWidth: 1320, margin: "0 auto",
  }}>
    <div style={{
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      gap: 24, marginBottom: 24, flexWrap: "wrap",
    }}>
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <Eyebrow>Studies · recent</Eyebrow>
        <h2 style={{
          margin: "8px 0 0", fontFamily: "var(--font-display)",
          fontSize: 38, fontWeight: 600, letterSpacing: "-0.015em",
          color: "var(--fg-1)", whiteSpace: "nowrap",
        }}>Recent datasets</h2>
      </div>
      <div style={{ fontSize: 14, color: "var(--fg-3)", maxWidth: 380, flex: "0 1 380px" }}>
        A live slice of the Studies library. Sign in to see datasets shared with your institution.
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
      {RECENT.map(s => <DatasetCard key={s.id} s={s} />)}
    </div>

    <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
      <a href="/ui_kits/web_app/index.html"><Button variant="primary" size="lg" icon="arrowRight">Browse datasets</Button></a>
    </div>
  </section>
);



// ---------- Footer ----------

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
            ["Explore", ["Datasets", "Knowledge base"]],
            ["About", ["About PIXI Center", "Contributors"]],
            ["Contribute", ["Submit a dataset", "Documentation", "Contact"]],
          ].map(([title, items]) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--fg-3)",
              }}>{title}</div>
              {items.map(i => (
                <a key={i} href="#" style={{
                  color: "var(--fg-1)", textDecoration: "none", fontSize: 13,
                }}>{i}</a>
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

// ---------- Page ----------

const HomePage = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <div className="pixi-root" data-screen-label="PIXI Center home">
      <TopNav />
      <Hero t={t} />
      <FindSection />
      <RecentSection />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Disease-area chart" />
        <TweakColor label="Bar color" value={t.barColor}
                    options={["#1E3C87", "#3CB44B", "#D9A300", "#3D3F44"]}
                    onChange={(v) => setTweak("barColor", v)} />
        <TweakSlider label="Areas shown" value={t.barCount} min={3} max={8} unit=" rows"
                     onChange={(v) => setTweak("barCount", v)} />
        <TweakRadio label="Order" value={t.sortByCount ? "count" : "az"}
                    options={["count", "az"]}
                    onChange={(v) => setTweak("sortByCount", v === "count")} />
        <TweakToggle label="Show counts" value={t.showValues}
                     onChange={(v) => setTweak("showValues", v)} />
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
