// App shell — wires sidebar + topbar + view + inspector

const App = () => {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || { showCrumbs: true });
  const [nav, setNav] = React.useState(
    () => (typeof location !== "undefined" && location.hash === "#cohorts") ? "cohorts" : "studies"
  );
  const [openStudy, setOpenStudy] = React.useState(null);
  const [openSubject, setOpenSubject] = React.useState(null);

  const onNavigate = (n) => {
    setNav(n);
    setOpenStudy(null);
    setOpenSubject(null);
  };

  const onOpenStudy = (s) => { setOpenStudy(s); setNav("studies"); setOpenSubject(null); };

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
          onNavigate={(c) => c.to && setOpenStudy(null)}
          onNewStudy={() => alert("Submit dataset (mock)")}
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

const HomeView = ({ onOpenStudy }) => (
  <div style={{ padding: "24px 32px", fontFamily: "var(--font-sans)", maxWidth: 1100 }}>
    <Eyebrow>Workspace · Oncology — preclinical</Eyebrow>
    <h1 style={{ margin: "6px 0 24px", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em" }}>
      Welcome back, Eri.
    </h1>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
      {[
        ["Active studies", "8", "var(--pixi-navy)"],
        ["Subjects in flight", "146", "var(--fg-1)"],
        ["Awaiting review", "12", "#8C6A00"],
        ["Failed QC", "2", "var(--danger)"],
      ].map(([l, v, c]) => (
        <div key={l} style={{
          background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 16,
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 6 }}>{l}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: c, fontVariantNumeric: "tabular-nums" }}>{v}</div>
        </div>
      ))}
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600 }}>Recent studies</h2>
      <Button variant="ghost" size="sm" icon="arrowRight">View all</Button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
      {STUDIES.slice(0, 4).map(s => <StudyCard key={s.id} study={s} onOpen={onOpenStudy} />)}
    </div>
  </div>
);

Object.assign(window, { App, HomeView });
