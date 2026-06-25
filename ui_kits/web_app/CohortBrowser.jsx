// CohortBrowser — faceted browse over all available preclinical cohorts.
// Left rail = filter facets; main = selectable results table + selection bar.

const COHORTS = [
  { id: "PXI-2402-B", title: "Tumor microenvironment · BALB/c",      disease: "Breast Cancer", modalities: ["PET","CT"],     scanner: "Mediso", institution: "MIT",   subjects: 18 },
  { id: "PXI-2403-A", title: "Anti-PD1 efficacy — pilot",            disease: "Lung Cancer",   modalities: ["PET","CT"],     scanner: "Inveon", institution: "CAMI",  subjects: 12 },
  { id: "PXI-2410-A", title: "89Zr-DFO antibody dosimetry",          disease: "Lymphoma",      modalities: ["PET","CT"],     scanner: "Bruker", institution: "WUSTL", subjects: 8  },
  { id: "PXI-2411-D", title: "Radiolabeled antibody · biodistribution", disease: "Ovarian Cancer", modalities: ["PET","CT"], scanner: "Mediso", institution: "CAMI",  subjects: 6  },
  { id: "PXI-2415-A", title: "Glioma BLI longitudinal",              disease: "Brain Cancer",  modalities: ["BLI","MR"],     scanner: "Bruker", institution: "WUSTL", subjects: 20 },
  { id: "PXI-2418-C", title: "Orthotopic lung · SPECT",              disease: "Lung Cancer",   modalities: ["SPECT","CT"],   scanner: "Mediso", institution: "Torino", subjects: 14 },
  { id: "PXI-2420-B", title: "Breast PDX · MR series",               disease: "Breast Cancer", modalities: ["MR"],           scanner: "Bruker", institution: "MIT",   subjects: 16 },
  { id: "PXI-2421-A", title: "Brain metastasis · dynamic PET",       disease: "Brain Cancer",  modalities: ["PET","CT"],     scanner: "Inveon", institution: "WUSTL", subjects: 10 },
  { id: "PXI-2424-D", title: "Lymphoma · Inveon survey",             disease: "Lymphoma",      modalities: ["Inveon","CT"],  scanner: "Inveon", institution: "CAMI",  subjects: 9  },
  { id: "PXI-2427-A", title: "Ovarian · bioluminescence",            disease: "Ovarian Cancer", modalities: ["BLI"],         scanner: "Bruker", institution: "Torino", subjects: 11 },
  { id: "PXI-2430-B", title: "Lung · multiparametric MR",            disease: "Lung Cancer",   modalities: ["MR","CT"],      scanner: "Bruker", institution: "WUSTL", subjects: 13 },
  { id: "PXI-2433-C", title: "Breast · SPECT perfusion",             disease: "Breast Cancer", modalities: ["SPECT","CT"],   scanner: "Mediso", institution: "MIT",   subjects: 7  },
  { id: "PXI-2436-A", title: "Glioblastoma · PET/MR",                disease: "Brain Cancer",  modalities: ["PET","MR"],     scanner: "Mediso", institution: "Torino", subjects: 15 },
  { id: "PXI-2439-B", title: "Lymphoma · theranostic pair",          disease: "Lymphoma",      modalities: ["SPECT","PET"],  scanner: "Bruker", institution: "CAMI",  subjects: 5  },
];

const FACETS = [
  { key: "modalities",  label: "Modality",     options: ["CT","PET","MR","SPECT","Inveon","BLI"], multi: true },
  { key: "disease",     label: "Disease Area", options: ["Lung Cancer","Breast Cancer","Brain Cancer","Lymphoma","Ovarian Cancer"] },
  { key: "scanner",     label: "Scanner",      options: ["Bruker","Mediso","Inveon"] },
  { key: "institution", label: "Institution",  options: ["WUSTL","MIT","CAMI","Torino"] },
];

const cohortHas = (cohort, facet, opt) =>
  facet.multi ? cohort[facet.key].includes(opt) : cohort[facet.key] === opt;

const ModTags = ({ mods }) => (
  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
    {mods.map(m => (
      <span key={m} style={{
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
        color: "var(--pixi-navy)", background: "var(--pixi-navy-soft)",
        borderRadius: 4, padding: "2px 6px", lineHeight: 1.4,
      }}>{m}</span>
    ))}
  </div>
);

const Check = ({ checked, indeterminate }) => (
  <span style={{
    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
    border: `1.5px solid ${checked || indeterminate ? "var(--pixi-navy)" : "var(--border-strong)"}`,
    background: checked || indeterminate ? "var(--pixi-navy)" : "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    transition: "background 120ms, border-color 120ms",
  }}>
    {checked && <Icon name="check" size={12} color="#fff" />}
    {indeterminate && !checked && <span style={{ width: 8, height: 2, background: "#fff", borderRadius: 1 }} />}
  </span>
);

const FacetSection = ({ facet, selected, onToggle, counts }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
      color: "var(--fg-3)", padding: "0 4px 6px",
    }}>{facet.label}</div>
    {facet.options.map(opt => {
      const on = selected.has(opt);
      const count = counts[opt] || 0;
      return (
        <button key={opt} onClick={() => onToggle(facet.key, opt)}
          style={{
            display: "flex", alignItems: "center", gap: 9,
            padding: "6px 4px", border: "none", background: "transparent",
            cursor: "pointer", textAlign: "left", borderRadius: 5,
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--pixi-cloud)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <Check checked={on} />
          <span style={{ flex: 1, fontSize: 13, color: on ? "var(--fg-1)" : "var(--fg-2)", fontWeight: on ? 600 : 400 }}>{opt}</span>
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-3)" }}>{count}</span>
        </button>
      );
    })}
  </div>
);

const CohortBrowser = () => {
  const [sel, setSel] = React.useState(() => {
    const o = {}; FACETS.forEach(f => o[f.key] = new Set()); return o;
  });
  const [picked, setPicked] = React.useState(() => new Set());

  const toggle = (key, opt) => setSel(prev => {
    const next = { ...prev, [key]: new Set(prev[key]) };
    next[key].has(opt) ? next[key].delete(opt) : next[key].add(opt);
    return next;
  });

  const clearAll = () => setSel(() => {
    const o = {}; FACETS.forEach(f => o[f.key] = new Set()); return o;
  });

  const activeCount = FACETS.reduce((n, f) => n + sel[f.key].size, 0);

  // Filtered cohorts: AND across categories, OR within a category.
  const filtered = COHORTS.filter(c =>
    FACETS.every(f => {
      const s = sel[f.key];
      if (s.size === 0) return true;
      return [...s].some(opt => cohortHas(c, f, opt));
    })
  );

  // Counts per option (over full dataset).
  const counts = React.useMemo(() => {
    const out = {};
    FACETS.forEach(f => f.options.forEach(opt => {
      out[opt] = COHORTS.filter(c => cohortHas(c, f, opt)).length;
    }));
    return out;
  }, []);

  const allShownPicked = filtered.length > 0 && filtered.every(c => picked.has(c.id));
  const someShownPicked = filtered.some(c => picked.has(c.id));

  const toggleAllShown = () => setPicked(prev => {
    const next = new Set(prev);
    if (allShownPicked) filtered.forEach(c => next.delete(c.id));
    else filtered.forEach(c => next.add(c.id));
    return next;
  });
  const togglePick = (id) => setPicked(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const pickedCohorts = COHORTS.filter(c => picked.has(c.id));
  const pickedSubjects = pickedCohorts.reduce((n, c) => n + c.subjects, 0);

  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "var(--font-sans)" }}>
      {/* Filter rail */}
      <div style={{
        width: 264, flexShrink: 0, background: "#fff",
        borderRight: "1px solid var(--border-subtle)",
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 18px", borderBottom: "1px solid var(--border-subtle)",
        }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Filters</span>
          <button onClick={clearAll} disabled={activeCount === 0} style={{
            background: "transparent", border: "none", cursor: activeCount ? "pointer" : "default",
            fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500,
            color: activeCount ? "var(--pixi-navy)" : "var(--fg-4)",
          }}>Clear all</button>
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 22 }}>
          {FACETS.map(f => (
            <FacetSection key={f.key} facet={f} selected={sel[f.key]} onToggle={toggle} counts={counts} />
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, position: "relative" }}>
        <div style={{ padding: "20px 32px 0" }}>
          <Eyebrow>Browse · all available data</Eyebrow>
          <h1 style={{ margin: "6px 0 0", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em" }}>
            Cohort Browser
          </h1>
          <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--fg-2)", maxWidth: 620, lineHeight: 1.5 }}>
            Filter the preclinical library by modality, disease area, scanner, and institution, then select the cohorts you want to pull into a working set.
          </p>

          {/* Result toolbar + active chips */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
            padding: "18px 0 14px",
          }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>
              {filtered.length} cohort{filtered.length === 1 ? "" : "s"}
            </span>
            <span style={{ fontSize: 13, color: "var(--fg-3)" }}>
              · {filtered.reduce((n, c) => n + c.subjects, 0)} subjects
            </span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginLeft: 4 }}>
              {FACETS.flatMap(f => [...sel[f.key]].map(opt => (
                <button key={f.key + opt} onClick={() => toggle(f.key, opt)} style={{
                  display: "inline-flex", alignItems: "center", gap: 6, height: 24, padding: "0 6px 0 10px",
                  borderRadius: 999, border: "1px solid var(--pixi-navy-line)",
                  background: "var(--pixi-navy-soft)", color: "var(--pixi-navy)",
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, cursor: "pointer",
                }}>
                  {opt}
                  <Icon name="close" size={12} />
                </button>
              )))}
            </div>
          </div>
        </div>

        {/* Results table */}
        <div style={{ flex: 1, overflow: "auto", padding: "0 32px 96px" }}>
          <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 13 }}>
              <thead>
                <tr>
                  <th style={{ ...cbHeadStyle, width: 44, paddingLeft: 16 }}>
                    <button onClick={toggleAllShown} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "inline-flex" }}>
                      <Check checked={allShownPicked} indeterminate={someShownPicked && !allShownPicked} />
                    </button>
                  </th>
                  {["Cohort","Disease area","Modalities","Scanner","Institution","Subjects"].map((h, i) => (
                    <th key={h} style={{ ...cbHeadStyle, textAlign: i === 5 ? "right" : "left", paddingRight: i === 5 ? 16 : 14 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => {
                  const on = picked.has(c.id);
                  return (
                    <tr key={c.id} onClick={() => togglePick(c.id)} style={{ cursor: "pointer", background: on ? "var(--pixi-navy-soft)" : "#fff" }}
                        onMouseEnter={e => { if (!on) e.currentTarget.style.background = "var(--pixi-paper)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = on ? "var(--pixi-navy-soft)" : "#fff"; }}>
                      <td style={{ ...cbCellStyle, paddingLeft: 16 }}>
                        <span style={{ display: "inline-flex" }}><Check checked={on} /></span>
                      </td>
                      <td style={cbCellStyle}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{c.id}</span>
                          <span style={{ fontWeight: 600, color: "var(--fg-1)" }}>{c.title}</span>
                        </div>
                      </td>
                      <td style={{ ...cbCellStyle, color: "var(--fg-2)" }}>{c.disease}</td>
                      <td style={cbCellStyle}><ModTags mods={c.modalities} /></td>
                      <td style={{ ...cbCellStyle, color: "var(--fg-2)" }}>{c.scanner}</td>
                      <td style={cbCellStyle}>
                        <span style={{
                          display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
                          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
                          color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
                        }}>{c.institution}</span>
                      </td>
                      <td style={{ ...cbCellStyle, textAlign: "right", paddingRight: 16, fontVariantNumeric: "tabular-nums", fontFamily: "var(--font-display)", fontWeight: 500 }}>{c.subjects}</td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr><td colSpan={7} style={{ padding: 48, textAlign: "center", color: "var(--fg-3)" }}>
                    <Icon name="search" size={24} color="var(--pixi-mist)" />
                    <div style={{ marginTop: 10, fontWeight: 600, color: "var(--fg-2)" }}>No cohorts match these filters</div>
                    <div style={{ fontSize: 13, marginTop: 4 }}>Remove a filter to widen the search.</div>
                  </td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection action bar */}
        {picked.size > 0 && (
          <div style={{
            position: "absolute", left: 32, right: 32, bottom: 20,
            background: "var(--pixi-ink)", color: "#fff", borderRadius: 10,
            boxShadow: "0 8px 16px rgba(16,24,40,.10), 0 16px 40px rgba(16,24,40,.18)",
            display: "flex", alignItems: "center", gap: 16, padding: "12px 16px",
          }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>
              {picked.size} cohort{picked.size === 1 ? "" : "s"} selected
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>· {pickedSubjects} subjects</span>
            <div style={{ flex: 1 }} />
            <button onClick={() => setPicked(new Set())} style={{
              height: 34, padding: "0 14px", borderRadius: 6, cursor: "pointer",
              background: "transparent", border: "1px solid rgba(255,255,255,.22)", color: "#fff",
              fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
            }}>Clear</button>
            <button onClick={() => alert(`Added ${picked.size} cohorts (${pickedSubjects} subjects) to working set (mock)`)} style={{
              height: 34, padding: "0 16px", borderRadius: 6, cursor: "pointer",
              background: "var(--pixi-green)", border: "1px solid transparent", color: "#fff",
              fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <Icon name="plus" size={16} /> Add to working set
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const cbHeadStyle = {
  textAlign: "left", padding: "10px 14px",
  fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
  color: "var(--fg-3)", background: "var(--pixi-paper)",
  borderBottom: "1px solid var(--border-subtle)", position: "sticky", top: 0, zIndex: 1,
};
const cbCellStyle = { padding: "12px 14px", borderBottom: "1px solid var(--border-subtle)", verticalAlign: "middle" };

Object.assign(window, { CohortBrowser, COHORTS });
