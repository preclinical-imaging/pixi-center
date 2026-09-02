// StudyDetail — single study page. Header + tabs + subjects table.

const SUBJECTS = [
  { id: "M-014", cohort: "03 — vehicle", status: "success", statusLabel: "Scanned", mass: 22.4, day: 14, sex: "F" },
  { id: "M-015", cohort: "03 — vehicle", status: "success", statusLabel: "Scanned", mass: 23.1, day: 14, sex: "F" },
  { id: "M-016", cohort: "03 — vehicle", status: "warn", statusLabel: "Queued", mass: 21.8, day: 14, sex: "F" },
  { id: "M-017", cohort: "04 — 5 mg/kg", status: "info", statusLabel: "Reviewing", mass: 22.0, day: 14, sex: "M" },
  { id: "M-018", cohort: "04 — 5 mg/kg", status: "success", statusLabel: "Scanned", mass: 22.7, day: 14, sex: "M" },
  { id: "M-019", cohort: "04 — 5 mg/kg", status: "warn", statusLabel: "Queued", mass: 22.5, day: 14, sex: "M" },
  { id: "M-020", cohort: "05 — 15 mg/kg", status: "danger", statusLabel: "Failed QC", mass: 21.2, day: 14, sex: "F" },
  { id: "M-021", cohort: "05 — 15 mg/kg", status: "success", statusLabel: "Scanned", mass: 23.4, day: 14, sex: "F" },
];

const Tab = ({ children, active, onClick, count }) => (
  <button onClick={onClick} style={{
    height: 38, padding: "0 14px",
    background: "transparent", border: "none",
    borderBottom: `2px solid ${active ? "var(--pixi-navy)" : "transparent"}`,
    color: active ? "var(--pixi-navy)" : "var(--fg-2)",
    fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: active ? 600 : 500,
    cursor: "pointer", marginBottom: -1,
    display: "inline-flex", alignItems: "center", gap: 8,
  }}>
    {children}
    {count != null && <span style={{
      fontSize: 11, color: "var(--fg-3)", fontFamily: "var(--font-mono)",
      background: "var(--pixi-cloud)", padding: "1px 6px", borderRadius: 4,
    }}>{count}</span>}
  </button>
);

const StudyDetail = ({ study, onOpenSubject, onBack }) => {
  const [tab, setTab] = React.useState("overview");

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ padding: "20px 32px 0", background: "#fff", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, marginBottom: 16 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Eyebrow mono>{study.id}</Eyebrow>
              <span style={{ color: "var(--fg-4)" }}>·</span>
              <Eyebrow>{study.area}</Eyebrow>
              <Badge tone={study.status} dot>{study.statusLabel}</Badge>
            </div>
            <h1 style={{
              margin: 0, fontFamily: "var(--font-display)",
              fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em",
            }}>{study.title}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 10, color: "var(--fg-3)", fontSize: 13 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                {study.institution}
              </span>
              <span>·</span>
              <span>Created Apr 02, 2026</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href={study.url} title="Open Project in XNAT" target="_xnat"><Button variant="primary" icon="folder">View in XNAT</Button></a>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, padding: "12px 0" }}>
          {[
            ["Subjects", study.subjects],
            ["Scans", study.scans],
            ["Lead", study.lead],
          ].map(([l, v]) => (
            <div key={l}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 4 }}>{l}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600,
                letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{v}</div>
            </div>
          ))}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 7 }}>Modalities</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {(study.modalities || []).map(m => (
                <span key={m} style={{
                  fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
                  color: "var(--pixi-navy)", background: "var(--pixi-navy-soft)",
                  borderRadius: 5, padding: "3px 9px", lineHeight: 1.4,
                }}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, borderBottom: "1px solid transparent" }}>
          <Tab active={tab === "overview"} onClick={() => setTab("overview")}>Overview</Tab>
          <Tab active={tab === "subjects"} onClick={() => setTab("subjects")} count={SUBJECTS.length}>Subjects</Tab>
          <Tab active={tab === "imaging"} onClick={() => setTab("imaging")} count={96}>Imaging</Tab>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 32px" }}>
        {tab === "subjects" && <SubjectsTable rows={SUBJECTS} onOpen={onOpenSubject} />}
        {tab === "overview" && <Overview study={study} />}
        {tab !== "subjects" && tab !== "overview" && (
          <div style={{
            padding: 60, textAlign: "center", background: "#fff",
            border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--fg-3)",
          }}>
            <Icon name="layers" size={32} color="var(--pixi-mist)" />
            <div style={{ marginTop: 10, fontWeight: 600, color: "var(--fg-2)" }}>{tab[0].toUpperCase() + tab.slice(1)}</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Tab content not part of this kit.</div>
          </div>
        )}
      </div>
    </div>
  );
};

const OverviewCard = ({ eyebrow, children }) => (
  <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 20 }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    {children}
  </div>
);

const Overview = ({ study }) => (
  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <OverviewCard eyebrow="Protocol summary">
        <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 560 }}>
          Three cohorts (vehicle, 5 mg/kg, 15 mg/kg) of female and male C57BL/6 mice (n = 8 per cohort)
          receive single IV dose of compound. PET/CT imaging at baseline, day 7, and day 14.
          Endpoint: biodistribution analysis at day 28.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
          <KV label="Species" value="Mus musculus" />
          <KV label="Disease" value={study.area || ""} />
          <KV label="Location" value={study.location || ""} />
          <KV label="Modalities" value={(study.modalities || []).join(", ")} mono />
          <KV label="Tracer" value="" mono />
          <KV label="Total Data" value={study.size || ""} mono />
        </div>
      </OverviewCard>

      <OverviewCard eyebrow="Abstract">
        <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)" }}>
          {study.abstract || (
            "Patient-derived tumor xenograft (PDX) models are widely used to study tumor heterogeneity " +
            "and treatment response in triple-negative breast cancer. This collection provides longitudinal " +
            "MR imaging of PDX-bearing mice alongside a deep-learning segmentation pipeline, and evaluates the " +
            "sensitivity of derived radiomic features to the probability threshold used to define the tumor boundary."
          )}
        </p>
      </OverviewCard>

      <OverviewCard eyebrow="Data Citation">
        <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.6, color: "var(--fg-2)", fontStyle: "italic" }}>
          {study.dataCitation || `${study.lead || "Author, A."} (2021) ${study.title} [Data set]. PIXI Center. `}
          {!study.dataCitation && (
            <span style={{ fontFamily: "var(--font-mono)", fontStyle: "normal" }}>{study.doi || "10.7937/pixi.2021.example"}</span>
          )}
        </p>
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border-subtle)" }}>
          <KV
            label="DOI"
            mono
            value={
              <a href={`https://doi.org/${study.doi || "10.7937/pixi.2021.example"}`} target="_blank" rel="noreferrer"
                 style={{ color: "var(--pixi-navy)", textDecoration: "none" }}>
                {study.doi || "10.7937/pixi.2021.example"}
              </a>
            }
          />
        </div>
      </OverviewCard>
    </div>
    <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 20 }}>
      <Eyebrow>Resource files</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
        {(study.resources || []).map((file, i) => (
          <a key={i} href={file.filepath} download
             style={{
               display: "flex", gap: 10, alignItems: "center",
               padding: "8px 10px", margin: "0 -10px", borderRadius: 6,
               color: "var(--fg-2)", textDecoration: "none",
             }}
             onMouseEnter={e => e.currentTarget.style.background = "var(--pixi-paper)"}
             onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <img src={`../../assets/file-${file.icon}.svg`} alt="" width={20} height={20} style={{ flexShrink: 0 }} />
            <span style={{ flex: 1, fontSize: 13, color: "var(--fg-1)", lineHeight: 1.4 }}>{file.filename}</span>
            <Icon name="download" size={14} color="var(--fg-3)" />
          </a>
        ))}
        {(!study.resources || study.resources.length === 0) && (
          <div style={{ fontSize: 13, color: "var(--fg-3)" }}>No resource files.</div>
        )}
      </div>
    </div>
  </div>
);

const KV = ({ label, value, mono }) => (
  <div>
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
      textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 3 }}>{label}</div>
    <div style={{ fontSize: 14, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)", color: "var(--fg-1)" }}>{value}</div>
  </div>
);

const SubjectsTable = ({ rows, onOpen }) => (
  <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 16px", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ fontSize: 13, fontWeight: 600 }}>{rows.length} subjects</div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="secondary" size="sm" icon="sliders">Filter</Button>
        <Button variant="secondary" size="sm" icon="plus">Add subject</Button>
      </div>
    </div>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 13 }}>
      <thead>
        <tr>
          {[["Subject","l"],["Cohort","l"],["Status","l"],["Sex","c"],["Mass (g)","r"],["Day","r"],["",""]].map(([h, a], i) => (
            <th key={i} style={{
              textAlign: a === "r" ? "right" : a === "c" ? "center" : "left",
              padding: "10px 16px",
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
            <td style={{ ...tdStyle2, fontFamily: "var(--font-mono)", fontWeight: 500, color: "var(--fg-1)" }}>{s.id}</td>
            <td style={{ ...tdStyle2, color: "var(--fg-2)" }}>{s.cohort}</td>
            <td style={tdStyle2}><Badge tone={s.status} dot>{s.statusLabel}</Badge></td>
            <td style={{ ...tdStyle2, textAlign: "center", color: "var(--fg-2)" }}>{s.sex}</td>
            <td style={{ ...tdStyle2, textAlign: "right", fontVariantNumeric: "tabular-nums", fontFamily: "var(--font-display)", fontWeight: 500 }}>{s.mass.toFixed(1)}</td>
            <td style={{ ...tdStyle2, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{s.day}</td>
            <td style={{ ...tdStyle2, width: 32 }}>
              <Icon name="chevronRight" size={16} color="var(--fg-4)" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const tdStyle2 = { padding: "12px 16px", borderBottom: "1px solid var(--border-subtle)", verticalAlign: "middle" };

Object.assign(window, { StudyDetail, SUBJECTS });
