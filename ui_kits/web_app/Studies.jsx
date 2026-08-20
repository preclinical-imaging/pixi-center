// Studies — library view. Card grid + table toggle.

const STUDIES = [
  {
      id: "Cancers2021",
      title: "Deep Learning Segmentation of Triple-Negative Breast Cancer (TNBC) Patient Derived Tumor Xenograft (PDX) and Sensitivity of Radiomic Pipeline to Tumor Probability Boundary",
      area: "Lung Cancer",
      status: "success",
      statusLabel: "Public",
      subjects: 40,
      scans: 80,
      modalities: ["MR"],
      day: "D 14 / 28",
      lead: "KS",
      institution: "WashU",
      team: ["EH","JP","RA","MK","TC"],
      updated: "2 h ago",
      url: "/xnat/data/projects/Cancers2021"
  },
  { id: "Mouse-Astrocytoma", title: "Mouse Astrocytoma (TCIA)", area: "Astrocytoma • Glioblastoma",
    status: "success", statusLabel: "Public",
    subjects: 48, scans: 284, modalities: ["MR"], day: "D 21 / 21",
    lead: "JP", institution: "National Cancer Institute", team: ["JP","EH","RA"],
    updated: "yesterday", url: "/xnat/data/projects/Mouse-Astrocytoma" },
  { id: "Molecubes_decay", title: "Molecubes - Test Send", area: "Phantom • Testing",
    status: "warn", statusLabel: "Protected",
    subjects: 1, scans: 2, modalities: ["PET","CT"], day: "D 28 / 28",
    lead: "RA", institution: "CCIRR", team: ["RA","EH","MK"],
    updated: "Apr 28", url: "/xnat/data/projects/Molecubes_decay" },
  { id: "Breast-08", title: "FFNP Imaging of ER+ve breast tumors", area: "Breast Cancer",
    status: "warn", statusLabel: "Protected",
    subjects: 13, scans: 15, modalities: ["PET"], day: "—",
    lead: "MK", institution: "WashU", team: ["KS"],
    updated: "Apr 22", url: "/xnat/data/projects/Breast-08" },
  { id: "Mouse-Mammary", title: "Mouse Mammary (TCIA)", area: "Breast Cancer",
    status: "success", statusLabel: "Public",
    subjects: 32, scans: 204, modalities: ["MR"], day: "D 7 / 14",
    lead: "TC", institution: "National Cancer Institute", team: ["TC","EH"],
    updated: "3 d ago", url: "/xnat/data/projects/Mouse-Mammary" },
  { id: "PXI-2411-D", title: "Radiolabeled antibody — biodistribution", area: "Breast Cancer",
    status: "danger", statusLabel: "Failed QC",
    subjects: 6, scans: 18, modalities: ["PET","CT"], day: "D 4 / 14",
    lead: "EH", institution: "CAMI", team: ["EH","RA","JP"],
    updated: "5 d ago" },
];

const StudyCard = ({ study, onOpen }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={() => onOpen(study)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "left", padding: 18, gap: 14,
        background: "#fff",
        border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
        borderRadius: 8, cursor: "pointer",
        display: "flex", flexDirection: "column",
        boxShadow: hover ? "var(--shadow-sm)" : "none",
        transition: "box-shadow 120ms, border-color 120ms",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <Eyebrow mono>{study.id} · {study.area}</Eyebrow>
          <div style={{
            marginTop: 6,
            fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600,
            letterSpacing: "-0.01em", color: "var(--fg-1)",
            lineHeight: 1.25,
          }}>{study.title}</div>
        </div>
        <Badge tone={study.status} dot>{study.statusLabel}</Badge>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
        paddingTop: 12, borderTop: "1px solid var(--border-subtle)",
      }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 3 }}>Subjects</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--fg-1)" }}>{study.subjects}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 3 }}>Scans</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--fg-1)" }}>{study.scans}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 5 }}>Modalities</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {study.modalities.map(m => (
              <span key={m} style={{
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
                color: "var(--pixi-navy)", background: "var(--pixi-navy-soft)",
                borderRadius: 4, padding: "2px 6px", lineHeight: 1.4,
              }}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
          color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
        }}>{study.institution}</span>
        <div style={{ fontSize: 12, color: "var(--fg-3)" }}>updated {study.updated}</div>
      </div>
    </button>
  );
};

const FilterChip = ({ children, active, onClick }) => (
  <button onClick={onClick} style={{
    height: 28, padding: "0 12px", borderRadius: 999,
    border: `1px solid ${active ? "var(--pixi-navy)" : "var(--border-default)"}`,
    background: active ? "var(--pixi-navy-soft)" : "#fff",
    color: active ? "var(--pixi-navy)" : "var(--fg-2)",
    fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: active ? 600 : 500,
    cursor: "pointer",
  }}>{children}</button>
);

const Studies = ({ onOpenStudy }) => {
  const [filter, setFilter] = React.useState("All");
  const [view, setView] = React.useState("grid");

  const filters = ["All", "In progress", "Reviewing", "Complete", "Draft"];
  const filtered = filter === "All" ? STUDIES :
    STUDIES.filter(s => s.statusLabel === filter);

  return (
    <div style={{ padding: "24px 32px", fontFamily: "var(--font-sans)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 8 }}>
        <div>
          <Eyebrow>Workspace · Oncology — preclinical</Eyebrow>
          <h1 style={{
            margin: "6px 0 0",
            fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600,
            letterSpacing: "-0.01em",
          }}>Datasets</h1>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="secondary" icon="download">Export</Button>
          <Button variant="primary" icon="plus">Submit dataset</Button>
        </div>
      </div>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "16px 0", borderBottom: "1px solid var(--border-subtle)",
        marginBottom: 20,
      }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {filters.map(f => (
            <FilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</FilterChip>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{
            display: "inline-flex", borderRadius: 6,
            border: "1px solid var(--border-subtle)", overflow: "hidden",
          }}>
            <button onClick={() => setView("grid")} style={{
              width: 32, height: 28, border: "none", cursor: "pointer",
              background: view === "grid" ? "var(--pixi-cloud)" : "#fff",
              color: view === "grid" ? "var(--pixi-ink)" : "var(--fg-3)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}><Icon name="grid" size={14} /></button>
            <button onClick={() => setView("list")} style={{
              width: 32, height: 28, border: "none", cursor: "pointer",
              borderLeft: "1px solid var(--border-subtle)",
              background: view === "list" ? "var(--pixi-cloud)" : "#fff",
              color: view === "list" ? "var(--pixi-ink)" : "var(--fg-3)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}><Icon name="list" size={14} /></button>
          </div>
          <Button variant="secondary" icon="sliders" size="md">Filters</Button>
        </div>
      </div>

      {view === "grid" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {filtered.map(s => <StudyCard key={s.id} study={s} onOpen={onOpenStudy} />)}
        </div>
      ) : (
        <StudiesList rows={filtered} onOpen={onOpenStudy} />
      )}
    </div>
  );
};

const StudiesList = ({ rows, onOpen }) => (
  <div style={{
    background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8,
    overflow: "hidden",
  }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 13 }}>
      <thead>
        <tr>
          {["Study","Area","Status","Subjects","Updated","Institution"].map((h, i) => (
            <th key={i} style={{
              textAlign: i >= 3 && i <= 4 ? "right" : "left",
              padding: "10px 14px",
              fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--fg-3)", background: "var(--pixi-paper)",
              borderBottom: "1px solid var(--border-subtle)",
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(s => (
          <tr key={s.id} onClick={() => onOpen(s)} style={{ cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--pixi-paper)"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
            <td style={tdStyle}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{s.id}</span>
                <span style={{ fontWeight: 600, color: "var(--fg-1)" }}>{s.title}</span>
              </div>
            </td>
            <td style={{ ...tdStyle, color: "var(--fg-2)" }}>{s.area}</td>
            <td style={tdStyle}><Badge tone={s.status} dot>{s.statusLabel}</Badge></td>
            <td style={{ ...tdStyle, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{s.subjects}</td>
            <td style={{ ...tdStyle, textAlign: "right", color: "var(--fg-3)" }}>{s.updated}</td>
            <td style={tdStyle}><span style={{
              display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
              fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
              color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
            }}>{s.institution}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const tdStyle = { padding: "12px 14px", borderBottom: "1px solid var(--border-subtle)", verticalAlign: "middle" };

Object.assign(window, { Studies, STUDIES });
