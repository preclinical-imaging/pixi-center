// App shell — wires sidebar + topbar + view + inspector

// Maps a #hash to a nav section — shared by the initial page load and the
// hashchange listener below, so a link that only changes the hash (no full
// page reload — e.g. the address bar, or back/forward) still navigates.
function navFromHash(hash) {
  if (hash === "#cohorts") return "cohorts";
  return "studies";
}

const App = () => {
  const { studies } = useStudies();
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || { showCrumbs: true });
  const [nav, setNav] = React.useState(
    () => (typeof location !== "undefined") ? navFromHash(location.hash) : "studies"
  );
  const [openStudy, setOpenStudy] = React.useState(null);
  const [openSubject, setOpenSubject] = React.useState(null);

  const onNavigate = (n) => {
    setNav(n);
    setOpenStudy(null);
    setOpenSubject(null);
  };

  const onOpenStudy = (s) => {
//       if (s.url) {
//         window.open(s.url);
//       } else {
        setOpenStudy(s); setNav("studies"); setOpenSubject(null);
//       }
  };

  // Deep-link support: the public Home page's "Recent datasets" cards link
  // here as index.html#study/<id> — open that study's detail view once the
  // study list has loaded.
  React.useEffect(() => {
    const match = typeof location !== "undefined" && location.hash.match(/^#study\/(.+)$/);
    if (!match || !studies.length) return;
    const study = studies.find(s => s.id === decodeURIComponent(match[1]));
    if (study) onOpenStudy(study);
  }, [studies]);

  // A #hash-only change (address bar edit, back/forward, an in-page link)
  // doesn't reload the document, so it wouldn't otherwise reach the nav
  // state set up above on mount — listen for it explicitly.
  React.useEffect(() => {
    const onHashChange = () => {
      if (/^#study\//.test(location.hash)) return; // handled by the effect above
      setOpenStudy(null);
      setOpenSubject(null);
      setNav(navFromHash(location.hash));
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Build crumbs
  let crumbs = [{ label: "Oncology — preclinical" }];
  if (nav === "studies" && !openStudy) crumbs.push({ label: "Studies" });
  if (openStudy) crumbs.push({ label: "Studies", to: "studies" }, { label: openStudy.id });
  if (nav === "imaging") crumbs = [{ label: "Imaging" }, { label: "Workbench" }];
  if (nav === "cohorts") crumbs = [{ label: "Cohort Browser" }];
  if (nav === "home") crumbs = [{ label: "Home" }];

  let view;
  if (nav === "imaging") view = <Workbench />;
  else if (nav === "cohorts") view = <CohortBrowser />;
  else if (openStudy) view = <StudyDetail study={openStudy} onOpenSubject={setOpenSubject} onBack={() => setOpenStudy(null)} />;
  else if (nav === "studies") view = <Studies onOpenStudy={onOpenStudy} />;
  else view = <HomeView onOpenStudy={onOpenStudy} />;

  return (
    <div className="pixi-root" style={{
      height: "100vh", display: "flex",
      background: "var(--pixi-paper)", position: "relative", overflow: "hidden",
    }}>
      <Sidebar active={nav} onNavigate={onNavigate} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}>
        <Topbar
          crumbs={crumbs}
          showCrumbs={t.showCrumbs}
          onNavigate={(c) => { if (c.to) { setOpenStudy(null); setNav(c.to); } }}
        />
        <main style={{ flex: 1, overflow: "auto", background: "var(--pixi-paper)" }}>
          {view}
        </main>
        <Inspector subject={openSubject} onClose={() => setOpenSubject(null)} />
      </div>
      <TweaksPanel>
        <TweakSection label="Top bar" />
        <TweakToggle
          label="Show breadcrumbs"
          value={t.showCrumbs}
          onChange={(v) => setTweak("showCrumbs", v)}
        />
      </TweaksPanel>
    </div>
  );
};

// ---------- Data Snapshot: summary stats + charts ----------

// Disease-area bar chart — a copy of home/Home.jsx's HeroBarChart (same
// summarizeDiseaseAreas() aggregation and the same visual treatment), adapted
// to read the `studies` this page already has via useStudies() instead of
// fetching its own copy, and to run with the public page's tweak defaults
// baked in (see Home.jsx's TWEAK_DEFAULTS) rather than a live Tweaks panel.
function summarizeDiseaseAreas(studies) {
  const totals = new Map();
  for (const s of studies) {
    if (!s.area) continue;
    totals.set(s.area, (totals.get(s.area) || 0) + (Number(s.subjects) || 0));
  }
  return [...totals.entries()].map(([area, count]) => ({ area, count }));
}

const DISEASE_CHART_DEFAULTS = { barColor: "#1E3C87", barCount: 7, sortByCount: true, showValues: true };

const DiseaseAreaChart = ({ studies }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const areas = React.useMemo(() => summarizeDiseaseAreas(studies), [studies]);
  const sorted = React.useMemo(() => {
    const out = [...areas];
    return DISEASE_CHART_DEFAULTS.sortByCount
      ? out.sort((a, b) => b.count - a.count)
      : out.sort((a, b) => a.area.localeCompare(b.area));
  }, [areas]);

  const rows = sorted.slice(0, Math.max(3, Math.min(8, DISEASE_CHART_DEFAULTS.barCount)));
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
                {DISEASE_CHART_DEFAULTS.showValues && (
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
                  height: "100%", borderRadius: 999, background: DISEASE_CHART_DEFAULTS.barColor,
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

// Scans-by-modality pie chart — each study's scan count is split evenly
// across the modalities it lists (data/studies.json has no finer per-scan
// breakdown), then summed per modality across the library.
function summarizeScansByModality(studies) {
  const totals = new Map();
  for (const s of studies) {
    if (!s.modalities || !s.modalities.length) continue;
    const share = (Number(s.scans) || 0) / s.modalities.length;
    for (const m of s.modalities) totals.set(m, (totals.get(m) || 0) + share);
  }
  return [...totals.entries()].map(([modality, count]) => ({ modality, count }));
}

// Fixed modality → color assignment, so a slice's color always identifies
// the same modality rather than shifting with its rank in the data.
const MODALITY_COLORS = { MR: "#2a78d6", SR: "#eb6834", CT: "#1baf7a", PET: "#eda100" };
const MODALITY_COLOR_FALLBACK = "var(--pixi-slate)";

function polarPoint(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutSlicePath(cx, cy, rOuter, rInner, startAngle, endAngle) {
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  const p1 = polarPoint(cx, cy, rOuter, endAngle);
  const p2 = polarPoint(cx, cy, rOuter, startAngle);
  const p3 = polarPoint(cx, cy, rInner, startAngle);
  const p4 = polarPoint(cx, cy, rInner, endAngle);
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 0 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 1 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

const ScansByModalityChart = ({ studies }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const slices = React.useMemo(() => {
    const totals = summarizeScansByModality(studies).sort((a, b) => b.count - a.count);
    const total = totals.reduce((sum, d) => sum + d.count, 0) || 1;
    let angle = 0;
    return totals.map(({ modality, count }) => {
      const startAngle = angle;
      angle += (count / total) * 360;
      return {
        modality, count, pct: count / total,
        startAngle, endAngle: angle,
        color: MODALITY_COLORS[modality] || MODALITY_COLOR_FALLBACK,
      };
    });
  }, [studies]);

  const total = slices.reduce((sum, d) => sum + d.count, 0);
  const size = 200, cx = size / 2, cy = size / 2, rOuter = 92, rInner = 56;

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
        <Eyebrow mono>Across {slices.length} modalities</Eyebrow>
        <h3 style={{
          margin: "10px 0 0", fontFamily: "var(--font-display)",
          fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg-1)",
        }}>
          Scans by modality
        </h3>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
             style={{ flexShrink: 0, opacity: mounted ? 1 : 0, transition: "opacity 480ms var(--ease-out)" }}>
          {slices.map(s => (
            <path key={s.modality} d={donutSlicePath(cx, cy, rOuter, rInner, s.startAngle, s.endAngle)}
                  fill={s.color} stroke="#fff" strokeWidth={2} />
          ))}
          <text x={cx} y={cy - 6} textAnchor="middle" style={{
            fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600,
            letterSpacing: "-0.02em", fill: "var(--fg-1)",
          }}>{Math.round(total).toLocaleString()}</text>
          <text x={cx} y={cy + 14} textAnchor="middle" style={{
            fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase", fill: "var(--fg-3)",
          }}>Scans</text>
        </svg>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: "1 1 140px", minWidth: 140 }}>
          {slices.map(s => (
            <div key={s.modality} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color, flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--fg-1)", flex: 1,
              }}>{s.modality}</span>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
                color: "var(--fg-3)", fontVariantNumeric: "tabular-nums", flexShrink: 0,
              }}>{Math.round(s.count).toLocaleString()} · {(s.pct * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        fontSize: 12, color: "var(--fg-3)", lineHeight: 1.5,
        paddingTop: 14, borderTop: "1px solid var(--border-subtle)",
      }}>
        Scans are split evenly across a study's listed modalities when more than one is recorded.
      </div>
    </div>
  );
};

const HomeView = ({ onOpenStudy }) => {
  const { studies } = useStudies();

  // Same counts, computed the same way, as the public home page's hero
  // stats (see home/Home.jsx's Hero component).
  const stats = React.useMemo(() => {
    const institutions = new Set(studies.map(s => s.institution).filter(Boolean));
    const sum = (key) => studies.reduce((total, s) => total + (Number(s[key]) || 0), 0);
    return {
      datasets: studies.length,
      subjects: sum("subjects"),
      scans: sum("scans"),
      institutions: institutions.size,
    };
  }, [studies]);

  return (
    <div style={{ padding: "24px 32px", fontFamily: "var(--font-sans)", maxWidth: 1100 }}>
      <Eyebrow>Workspace · Oncology — preclinical</Eyebrow>
      <h1 style={{ margin: "6px 0 24px", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em" }}>
        Site Dashboard
      </h1>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600 }}>Data Snapshot</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
          {[
            ["Datasets", stats.datasets],
            ["Subjects", stats.subjects],
            ["Scans", stats.scans],
            ["Institutions", stats.institutions],
          ].map(([l, v]) => (
            <div key={l} style={{
              background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 16,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 6 }}>{l}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--fg-1)", fontVariantNumeric: "tabular-nums" }}>{v.toLocaleString()}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <DiseaseAreaChart studies={studies} />
          <ScansByModalityChart studies={studies} />
        </div>
      </section>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600 }}>Recent studies</h2>
        <Button variant="ghost" size="sm" icon="arrowRight">View all</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {studies.slice(0, 4).map(s => <StudyCard key={s.id} study={s} onOpen={onOpenStudy} />)}
      </div>
    </div>
  );
};

Object.assign(window, { App, HomeView, DiseaseAreaChart, ScansByModalityChart });
