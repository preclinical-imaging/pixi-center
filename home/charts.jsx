//Houses chart elements used in multiple locations

const DISEASE_CHART_DEFAULTS = {
  "barColor": "#1E3C87",
  "barCount": 7,
  "sortByCount": true,
  "showValues": true
};

function summarizeDiseaseAreas(studies) {
  const totals = new Map();
  for (const study of studies) {
    if (!study.area) continue;
    totals.set(study.area, (totals.get(study.area) || 0) + (Number(study.subjects) || 0));
  }
  return [...totals.entries()].map(([area, count]) => ({ area, count }));
}

const DiseaseAreaChart = ({ diseaseAreas }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const sorted = React.useMemo(() => {
    const out = [...diseaseAreas];
    return DISEASE_CHART_DEFAULTS.sortByCount
      ? out.sort((a, b) => b.count - a.count)
      : out.sort((a, b) => a.area.localeCompare(b.area));
  }, [diseaseAreas]);

  const rows = sorted.slice(0, Math.max(3, Math.min(8, DISEASE_CHART_DEFAULTS.barCount)));
  const max = Math.max(1, ...diseaseAreas.map(d => d.count));

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
    </div>
  );
};

Object.assign(window, { DiseaseAreaChart, summarizeDiseaseAreas});