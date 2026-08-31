// Topbar — search, breadcrumbs, "+ New", notifications.

const Crumbs = ({ items, onNavigate }) => (
  <nav style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--fg-3)" }}>
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && <Icon name="chevronRight" size={14} color="var(--fg-4)" />}
        <button
          onClick={() => onNavigate?.(item)}
          style={{
            background: "transparent", border: "none", padding: 0,
            color: i === items.length - 1 ? "var(--fg-1)" : "var(--fg-3)",
            fontFamily: "var(--font-sans)", fontSize: 13,
            fontWeight: i === items.length - 1 ? 600 : 500,
            cursor: "pointer",
          }}>{item.label}</button>
      </React.Fragment>
    ))}
  </nav>
);

const Topbar = ({ crumbs = [], onNavigate, onNewStudy, showCrumbs = true }) => {
  return (
    <header style={{
      height: 56, flexShrink: 0,
      borderBottom: "1px solid var(--border-subtle)",
      background: "#fff",
      display: "flex", alignItems: "center",
      padding: "0 24px", gap: 16,
    }}>
      {showCrumbs && <Crumbs items={crumbs} onNavigate={onNavigate} />}
      <div style={{ flex: 1 }} />
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        height: 34, padding: "0 12px",
        background: "var(--pixi-paper)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 6, width: 320,
      }}>
        <Icon name="search" size={16} color="var(--fg-3)" />
        <input
          placeholder="Search studies, subjects, files…"
          style={{
            flex: 1, border: "none", background: "transparent", outline: "none",
            fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-1)",
          }}
        />
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--fg-3)",
          padding: "1px 6px", borderRadius: 3,
          border: "1px solid var(--border-subtle)", background: "#fff",
        }}>⌘K</span>
      </div>
      <Button variant="primary" icon="plus" onClick={onNewStudy}>Submit dataset</Button>
    </header>
  );
};

Object.assign(window, { Topbar, Crumbs });
