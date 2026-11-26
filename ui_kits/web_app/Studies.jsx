// Studies — library view. Card grid + table toggle.

const NAV_HEIGHT = 64;
const FILTER_DRAWER_WIDTH = 280;

const FACET_DEFS = [
  { key: "protectionLevel", label: "Access" },
  { key: "modalities",  label: "Modality", multi: true },
  { key: "areaOfStudy", label: "Disease Area" },
  { key: "scanners",     label: "Scanners", multi: true },
  { key: "institution", label: "Institution" },
];

const PIXI_STUDIES_SS = { facet: "pixi.studiesFacets", picked: "pixi.studiesPicked"}
const EMPTY_SET = new Set();

const studyHas = (study, facet, option) =>
  facet.multi ? study[facet.key].includes(option) : study[facet.key] === option;

function buildFacets(studies) {
  return FACET_DEFS.map(facetDef => {
    const filterOptions = new Set();
    for (const study of studies) {
      const facetValue = study[facetDef.key];
      if (facetDef.multi) {
        facetValue.forEach(option => filterOptions.add(option));
      }
      else if (facetValue) {
        filterOptions.add(facetValue);
      }
    }
    return { ...facetDef, options: [...filterOptions].sort((a, b) => a.localeCompare(b)) };
  }).filter(facet => facet.options.length > 0);
}

// sessionStorage <-> { facetKey: Set } so filters survive opening a study
// and coming back (Studies unmounts when a study is open).
function loadFacetSelection() {
  try {
    const storedSelection = JSON.parse(sessionStorage.getItem(PIXI_STUDIES_SS.facet) || "{}");
    const result = {};
    for (const facetKey of Object.keys(storedSelection)) {
      if (Array.isArray(storedSelection[facetKey])) {
        result[facetKey] = new Set(storedSelection[facetKey]);
      }
    }
    return result;
  } catch { return {}; }
}
function saveFacetSelection(selection) {
  try {
    const storedSelection = {};
    for (const facetKey of Object.keys(selection)) {
      if (selection[facetKey].size) {
        storedSelection[facetKey] = [...selection[facetKey]];
      }
    }
    sessionStorage.setItem(PIXI_STUDIES_SS.facet, JSON.stringify(storedSelection));
  } catch {}
}

function loadPicked() {
  try {
    const storedIds = JSON.parse(sessionStorage.getItem(PIXI_STUDIES_SS.picked) || "[]");
    return new Set(Array.isArray(storedIds) ? storedIds : []);
  } catch { 
    return new Set(); 
  }
}
function savePickedData(picked) {
  try { 
    sessionStorage.setItem(PIXI_STUDIES_SS.picked, JSON.stringify([...picked])); 
  } catch {}
}

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
          <Eyebrow>{study.id} · {study.areaOfStudy}</Eyebrow>
          <div style={{
            marginTop: 6,
            fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", color: "var(--fg-1)",
            lineHeight: 1.25,
          }}>{study.title}</div>
        </div>
        <Badge tone={study.protectionLevel} dot>{study.protectionLevel}</Badge>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
        paddingTop: 12, borderTop: "1px solid var(--border-subtle)",
      }}>
        <div>
          <div className=".pixi-stat-label--num">Subjects</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--fg-1)" }}>{study.subjects}</div>
        </div>
        <div>
          <div className=".pixi-stat-label--num">Sessions</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--fg-1)" }}>{study.sessions}</div>
        </div>
        <div>
          <div className=".pixi-stat-label--tags">Modalities</div>
          <td><ModalitiesTag modalities={study.modalities} size = "small" /></td>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        {study.institution && (<span style={{
            display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
            fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
            color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
          }}>{study.institution}</span>
        )}
        <div style={{ fontSize: 12, color: "var(--fg-3)" }}>updated {study.updated}</div>
      </div>
    </button>
  );
};

const Check = ({ checked }) => (
  <span style={{
    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
    border: `1.5px solid ${checked ? "var(--pixi-navy)" : "var(--border-strong)"}`,
    background: checked ? "var(--pixi-navy)" : "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    transition: "background 120ms, border-color 120ms",
  }}>
    {checked && <Icon name="check" size={12} color="#fff" />}
  </span>
);

const FacetSection = ({ facet, selected, onToggle, counts }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
      color: "var(--fg-3)", padding: "0 4px 6px",
    }}>{facet.label}</div>
    {facet.options.map(option => {
      const isSelected = selected.has(option);
      return (
        <button key={option} onClick={() => onToggle(facet.key, option)}
          style={{
            display: "flex", alignItems: "center", gap: 9,
            padding: "6px 4px", border: "none", background: "transparent",
            cursor: "pointer", textAlign: "left", borderRadius: 5,
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--pixi-cloud)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <Check checked={isSelected} />
          <span style={{ flex: 1, fontSize: 13, color: isSelected ? "var(--fg-1)" : "var(--fg-2)", fontWeight: isSelected ? 600 : 400, textTransform: facet.key === "protectionLevel" ? "capitalize" : "none"}}>{option}</span>
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-3)" }}>{counts[facet.key + "\u0000" + option] || 0}</span>
        </button>
      );
    })}
  </div>
);

const Studies = ({ onOpenStudy, view, onViewChange }) => {
  const { studies, error } = useStudies();

  const [selection, setSelection] = React.useState(loadFacetSelection);
  const [showFilters, setShowFilters] = React.useState(() => Object.keys(loadFacetSelection()).length > 0);
  React.useEffect(() => saveFacetSelection(selection), [selection]);

  React.useEffect(() => {
    if (!showFilters) return;
    const onKeyDown = (event) => { 
      if (event.key === "Escape") setShowFilters(false); 
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showFilters]);

  const facets = React.useMemo(() => buildFacets(studies), [studies]);
  const selectionFor = (key) => selection[key] || EMPTY_SET;

  const toggleFacet = (key, option) => setSelection(prevState => {
    const nextState = { ...prevState, [key]: new Set(prevState[key] || []) };
    nextState[key].has(option) ? nextState[key].delete(option) : nextState[key].add(option);
    return nextState;
  });

  const clearFacets = () => setSelection({});
  const activeCount = facets.reduce((total, facet) => total + selectionFor(facet.key).size, 0);

  const filtered = studies.filter(study =>
    facets.every(facet => {
      const chosen = selectionFor(facet.key);
      if (chosen.size === 0) return true;
      return [...chosen].some(option => studyHas(study, facet, option));
    })
  );

  const [picked, setPicked] = React.useState(loadPicked);
  React.useEffect(() => savePickedData(picked), [picked]);

  const allShownPicked = filtered.length > 0 && filtered.every(study => picked.has(study.id));

  const toggleAllShown = () => setPicked(prevPicked => {
    const nextPicked = new Set(prevPicked);
    if (allShownPicked) filtered.forEach(study => nextPicked.delete(study.id));
    else filtered.forEach(study => nextPicked.add(study.id));
    return nextPicked;
  });
  const togglePick = (id) => setPicked(prevPicked => {
    const nextPicked = new Set(prevPicked);
    nextPicked.has(id) ? nextPicked.delete(id) : nextPicked.add(id);
    return nextPicked;
  });

  const pickedStudies = studies.filter(study => picked.has(study.id));
  const pickedSubjects = pickedStudies.reduce((total, study) => total + (Number(study.subjects) || 0), 0);


  // Counts are performed over the full study list (they don't shrink as you filter).
  const counts = React.useMemo(() => {
    const countsByOption = {};
    facets.forEach(facet => facet.options.forEach(option => {
      countsByOption[facet.key + "\u0000" + option] = studies.filter(study => studyHas(study, facet, option)).length;
    }));
    return countsByOption;
  }, [studies, facets]);

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <div style={{ padding: "24px 32px"}}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 8 }}>
          <div>
            <h1 className="pixi-app-title" style={{ marginTop: 6}}>Datasets</h1>
          </div>
        </div>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 12, padding: "8px 0", marginBottom: 8,
        }}>

          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {!error && (
              <React.Fragment>
                <span style={{ fontSize: 16, fontWeight: 600 }}>
                  {filtered.length} dataset{filtered.length === 1 ? "" : "s"}
                </span>
                {facets.flatMap(facet => [...selectionFor(facet.key)].map(option => (
                  <button key={facet.key + option} onClick={() => toggleFacet(facet.key, option)} style={{
                    display: "inline-flex", alignItems: "center", gap: 6, height: 24, padding: "0 6px 0 10px",
                    borderRadius: 999, border: "1px solid var(--pixi-navy-line)",
                    background: "var(--pixi-navy-soft)", color: "var(--pixi-navy)",
                    fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, cursor: "pointer",
                    textTransform: facet.key === "protectionLevel" ? "capitalize" : "none"
                  }}>
                    {option}
                    <Icon name="close" size={12} />
                  </button>
                )))}
              </React.Fragment>
            )}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{
              display: "inline-flex", borderRadius: 6,
              border: "1px solid var(--border-subtle)", overflow: "hidden",
            }}>
              <button onClick={() => onViewChange("grid")} style={{
                width: 36, border: "none", cursor: "pointer",
                background: view === "grid" ? "var(--pixi-cloud)" : "#fff",
                color: view === "grid" ? "var(--pixi-ink)" : "var(--fg-3)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}><Icon name="grid" size={14} /></button>
              <button onClick={() => onViewChange("list")} style={{
                width: 36, border: "none", cursor: "pointer",
                borderLeft: "1px solid var(--border-subtle)",
                background: view === "list" ? "var(--pixi-cloud)" : "#fff",
                color: view === "list" ? "var(--pixi-ink)" : "var(--fg-3)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}><Icon name="list" size={14} /></button>
            </div>
            <Button variant="secondary" icon="sliders" size="md" onClick={() => setShowFilters(isOpen => !isOpen)}>{activeCount ? `Filters (${activeCount})` : "Filters"}</Button>
          </div>
        </div>

        {facets.length > 0 && (
          <aside aria-hidden={!showFilters} style={{
            position: "fixed", top: NAV_HEIGHT, right: 0, bottom: 0, width: FILTER_DRAWER_WIDTH,
            zIndex: 20, background: "#fff", borderLeft: "1px solid var(--border-subtle)",
            boxShadow: showFilters ? "var(--shadow-sm)" : "none",
            display: "flex", flexDirection: "column",
            transform: showFilters ? "translateX(0)" : "translateX(100%)",
            visibility: showFilters ? "visible" : "hidden",
            transition: `transform 200ms ease, box-shadow 200ms ease, visibility 0s linear ${showFilters ? "0s" : "200ms"}`,
          }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)",
            }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Filters</span>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button onClick={clearFacets} disabled={activeCount === 0} style={{
                  background: "transparent", border: "none", cursor: activeCount ? "pointer" : "default",
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500,
                  color: activeCount ? "var(--pixi-navy)" : "var(--fg-4)",
                }}>Clear all</button>
                <button onClick={() => setShowFilters(false)} aria-label="Close filters" style={{
                  background: "transparent", border: "none", cursor: "pointer", display: "inline-flex", padding: 0,
                }}><Icon name="close" size={16} /></button>
              </div>
            </div>
            <div style={{ flex: 1, overflow: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 22 }}>
              {facets.map(facet => (
                <FacetSection key={facet.key} facet={facet} selected={selectionFor(facet.key)} onToggle={toggleFacet} counts={counts} />
              ))}
            </div>
          </aside>
        )}

        {error ? (
          <div style={{ padding: 24, color: "var(--danger)", fontSize: 14 }}>
            Couldn't load studies from PIXI backend.
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 48, textAlign: "center", color: "var(--fg-3)" }}>
            <Icon name="search" size={24} color="var(--pixi-mist)" />
            <div style={{ marginTop: 10, fontWeight: 600, color: "var(--fg-2)" }}>No datasets match these filters</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Remove a filter to widen the search.</div>
          </div>
        ) : view === "grid" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {filtered.map(study => <StudyCard key={study.id} study={study} onOpen={onOpenStudy} />)}
          </div>
        ) : (
          <StudiesList
            rows={filtered} onOpen={onOpenStudy}
            picked={picked} onTogglePick={togglePick}
            allPicked={allShownPicked} onToggleAll={toggleAllShown}
          />
        )}
      </div>
      <Footer />
      {pickedStudies.length > 0 && (
        <div style={{
          position: "fixed", left: 32, bottom: 20, zIndex: 30,
          right: showFilters && facets.length > 0 ? FILTER_DRAWER_WIDTH + 32 : 32,
          background: "var(--pixi-ink)", color: "#fff", borderRadius: 10,
          boxShadow: "0 8px 16px rgba(16,24,40,.10), 0 16px 40px rgba(16,24,40,.18)",
          display: "flex", alignItems: "center", gap: 16, padding: "12px 16px",
        }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>
            {pickedStudies.length} dataset{pickedStudies.length === 1 ? "" : "s"} selected
          </span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>· {pickedSubjects} subjects</span>
          <div style={{ flex: 1 }} />
          <button onClick={() => setPicked(new Set())} style={{
            height: 34, padding: "0 14px", borderRadius: 6, cursor: "pointer",
            background: "transparent", border: "1px solid rgba(255,255,255,.22)", color: "#fff",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
          }}>Clear</button>
          <button onClick={() => alert(`Added ${pickedStudies.length} datasets (${pickedSubjects} subjects) to working set (mock)`)} style={{
            height: 34, padding: "0 16px", borderRadius: 6, cursor: "pointer",
            background: "var(--pixi-green)", border: "1px solid transparent", color: "#fff",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <Icon name="plus" size={16} /> 
          </button>
        </div>
      )}

    </div>
  );
};

const StudiesList = ({ rows, onOpen, picked, onTogglePick, allPicked, onToggleAll}) => (
  <div style={{
    background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8,
    overflow: "hidden",
  }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 13 }}>
      <thead>
        <tr>
          <th style={{
            width: 44, padding: "10px 14px", textAlign: "left",
            background: "var(--pixi-paper)", borderBottom: "1px solid var(--border-subtle)",
          }}>
            <button onClick={onToggleAll}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "inline-flex" }}>
              <Check checked={allPicked} />
            </button>
          </th>
          {["Study","Area","Status","Subjects","Updated","Institution"].map((header, index) => (
            <th key={index} style={{
              textAlign: index >= 3 && index <= 4 ? "right" : "left", padding: "10px 14px",
              fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--fg-3)", background: "var(--pixi-paper)",
              borderBottom: "1px solid var(--border-subtle)",
            }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(study => {
          const isPicked = picked.has(study.id);
          return (
            <tr key={study.id} onClick={() => onOpen(study)} style={{ cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--pixi-paper)"}
                onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
              <td className="pixi-td" style={{ paddingLeft: 16 }}
                  onClick={e => { e.stopPropagation(); onTogglePick(study.id); }}>
                <span style={{ display: "inline-flex" }}><Check checked={isPicked} /></span>
              </td>
              <td className="pixi-td">
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{study.id}</span>
                  <span style={{ fontWeight: 600, color: "var(--fg-1)" }}>{study.title}</span>
                </div>
              </td>
              <td className="pixi-td" style={{ color: "var(--fg-2)" }}>{study.areaOfStudy}</td>
              <td className="pixi-td"><Badge tone={study.protectionLevel} dot>{study.protectionLevel}</Badge></td>
              <td className="pixi-td" style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{study.subjects}</td>
              <td className="pixi-td" style={{ textAlign: "right", color: "var(--fg-3)" }}>{study.updated}</td>
              <td className="pixi-td">{study.institution && (<span style={{
                display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
                fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
                color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
              }}>{study.institution}</span>)}</td>
            </tr>
            )
        })}
      </tbody>
    </table>
  </div>
);

Object.assign(window, { Studies });