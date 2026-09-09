// Sidebar — left navigation. 240px wide. Logo at top, sections, user footer.

const SidebarItem = ({ icon, label, active, count, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        width: "100%", height: 34, padding: "0 10px",
        background: active ? "var(--pixi-navy-soft)" : hover ? "var(--pixi-cloud)" : "transparent",
        color: active ? "var(--pixi-navy)" : "var(--fg-1)",
        border: "none", borderRadius: 6,
        fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: active ? 600 : 500,
        cursor: "pointer", textAlign: "left",
      }}
    >
      <Icon name={icon} size={18} />
      <span style={{ flex: 1 }}>{label}</span>
      {count != null && (
        <span style={{
          fontSize: 11, color: "var(--fg-3)", fontFamily: "var(--font-mono)",
          background: active ? "#fff" : "var(--pixi-cloud)",
          padding: "1px 6px", borderRadius: 4,
        }}>{count}</span>
      )}
    </button>
  );
};

const SidebarSection = ({ title, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 18 }}>
    {title && (
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "var(--fg-3)",
        padding: "0 10px", marginBottom: 4,
      }}>{title}</div>
    )}
    {children}
  </div>
);

const Sidebar = ({ active, onNavigate }) => {
  const { studies } = useStudies();
  return (
    <aside style={{
      width: 240, height: "100%",
      background: "#fff",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex", flexDirection: "column",
      flexShrink: 0,
    }}>
      <div style={{ padding: "16px 14px", borderBottom: "1px solid var(--border-subtle)" }}>
        <a href="/"><Logo size={24} /></a>
      </div>
      <div style={{ flex: 1, padding: "8px 10px", overflow: "auto" }}>
        <SidebarSection>
          <SidebarItem icon="home" label="Dashboard" active={active === "home"} onClick={() => onNavigate("home")} />
          <SidebarItem icon="library" label="Datasets" active={active === "studies"} count={studies.length} onClick={() => onNavigate("studies")} />
          <SidebarItem icon="layers" label="Cohort Browser" active={active === "cohorts"} onClick={() => onNavigate("cohorts")} />
        </SidebarSection>
      </div>

{/*       <div style={{ */}
{/*         padding: 12, borderTop: "1px solid var(--border-subtle)", */}
{/*         display: "flex", alignItems: "center", gap: 10, */}
{/*       }}> */}
{/*         <Avatar initials="WH" size={32} /> */}
{/*         <div style={{ flex: 1, minWidth: 0 }}> */}
{/*           <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-1)" }}>Will Horton</div> */}
{/*           <div style={{ fontSize: 11, color: "var(--fg-3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>XNAT Works · Research</div> */}
{/*         </div> */}
{/*         <button style={{ */}
{/*           background: "transparent", border: "none", padding: 4, cursor: "pointer", */}
{/*           color: "var(--fg-3)", display: "inline-flex", borderRadius: 4, */}
{/*         }}> */}
{/*           <Icon name="settings" size={16} /> */}
{/*         </button> */}
{/*       </div> */}
    </aside>
  );
};

Object.assign(window, { Sidebar });
