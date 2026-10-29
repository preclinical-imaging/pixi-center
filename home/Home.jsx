// Home page for PIXI Center — public-facing.
// Uses tokens from /colors_and_type.css and primitives from ui.jsx.
// TopNav and Footer live in site-chrome.jsx, shared with the other pages
// data/studies.json is the single source of truth for the dataset library —
// each entry is a "dataset". Fetched once and cached for every section on
// this page that summarizes it (hero stats, disease-area chart).

let _studiesCache = null;
let _studiesPromise = null;

function loadStudiesData() {
  if (!_studiesPromise) {
    _studiesPromise = fetch("/data/studies.json")
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load /data/studies.json (${res.status})`);
        return res.json();
      })
      .then(data => (_studiesCache = data));
  }
  return _studiesPromise;
}

// Fetches once and caches, same pattern as Studies.jsx's useStudies().
const useStudiesData = () => {
  const [studies, setStudies] = React.useState(_studiesCache || []);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (_studiesCache) return;
    let cancelled = false;
    loadStudiesData()
      .then(data => { if (!cancelled) setStudies(data); })
      .catch(err => { if (!cancelled) setError(err); });
    return () => { cancelled = true; };
  }, []);

  return { studies, error };
};

const Hero = () => {
  const { studies } = useStudiesData();
  const diseaseAreas = React.useMemo(() => summarizeDiseaseAreas(studies), [studies]);
  const stats = React.useMemo(() => {
    const institutions = new Set(studies.map(study => study.institution).filter(Boolean));
    const sum = (key) => studies.reduce((total, study) => total + (Number(study[key]) || 0), 0);
    return {
      institutions: institutions.size,
      datasets: studies.length,
      subjects: sum("subjects"),
      scans: sum("scans"),
    };
  }, [studies]);

  return (
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
          <a href="../about/index.html"><Button variant="ghost" size="lg">Learn more</Button></a>
        </div>
        <div style={{
          display: "flex", gap: 24, marginTop: 36,
          paddingTop: 20, borderTop: "1px solid var(--border-subtle)",
        }}>
          {[
            ["Institutions", stats.institutions],
            ["Datasets", stats.datasets],
            ["Subjects", stats.subjects],
            ["Scans", stats.scans],
          ].map(([l, v]) => (
            <div key={l}>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600,
                letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums",
                color: "var(--fg-1)",
              }}>{v.toLocaleString()}</div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--fg-3)", marginTop: 2,
              }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <DiseaseAreaChart diseaseAreas={diseaseAreas} />
    </section>
  );
};

// Hero visual: horizontal bar chart of the most-studied areas of disease
// across the dataset library. Areas come from the unique "area" values in
// data/studies.json; each bar totals the "subjects" of every study tagged
// to that area.

function summarizeDiseaseAreas(studies) {
  const totals = new Map();
  for (const study of studies) {
    if (!study.area) continue;
    totals.set(study.area, (totals.get(study.area) || 0) + (Number(study.subjects) || 0));
  }
  return [...totals.entries()].map(([area, count]) => ({ area, count }));
}

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
      <a href="../about/index.html"><Button variant="secondary" size="lg" icon="arrowRight">About PIXI Center</Button></a>
    </div>
  </section>
);

// ---------- Section 2: Recent datasets ----------
// Cards show the first four datasets listed in data/studies.json.
const DatasetCard = ({ study }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={`../ui_kits/web_app/index.html#studies/${encodeURIComponent(study.id)}`}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
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
          <Eyebrow mono>{study.id}</Eyebrow>
          <Badge tone={study.status} dot>{study.statusLabel}</Badge>
        </div>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600,
            letterSpacing: "-0.01em", lineHeight: 1.25, color: "var(--fg-1)",
          }}>{study.title}</div>
          <div style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 4 }}>{study.area}</div>
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
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{study.subjects}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 2 }}>Scans</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{study.scans}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 4 }}>Modalities</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {study.modalities.map(modality => (
              <span key={modality} style={{
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
                color: "var(--pixi-navy)", background: "var(--pixi-navy-soft)",
                borderRadius: 4, padding: "2px 6px", lineHeight: 1.3,
              }}>{modality}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", height: 22, padding: "0 8px",
          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
          color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
        }}>{study.institution}</span>
        <span style={{ fontSize: 12, color: "var(--fg-3)" }}>updated {study.updated}</span>
      </div>
    </a>
  );
};

const RecentSection = () => {
  const { studies } = useStudiesData();
  // Most recently updated first — study.updated is an ISO "YYYY-MM-DD"
  // string, so a plain descending string compare sorts it chronologically.
  const recent = React.useMemo(
    () => [...studies].sort((a, b) => (b.updated || "").localeCompare(a.updated || "")).slice(0, 4),
    [studies]
  );

  return (
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
        {recent.map(study => <DatasetCard key={study.id} study={study} />)}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <a href="/ui_kits/web_app/index.html"><Button variant="primary" size="lg" icon="arrowRight">Browse datasets</Button></a>
      </div>
    </section>
  );
};

// ---------- Page ----------
const HomePage = () => {
  return (
    <div className="pixi-root" data-screen-label="PIXI Center home">
      <TopNav />
      <Hero />
      <FindSection />
      <RecentSection />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
