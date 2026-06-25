/* @ds-bundle: {"format":3,"namespace":"PIXICenterDesignSystem_019e02","components":[],"sourceHashes":{"home/Home.jsx":"187c3c49e3e5","home/ui.jsx":"c8f850bc5a20","ui_kits/web_app/App.jsx":"a10c7832bf4e","ui_kits/web_app/CohortBrowser.jsx":"7845b9d6f5ec","ui_kits/web_app/Inspector.jsx":"2be654995c2c","ui_kits/web_app/Sidebar.jsx":"4aace96bac17","ui_kits/web_app/Studies.jsx":"bc017144ce6c","ui_kits/web_app/StudyDetail.jsx":"c6dc482be487","ui_kits/web_app/Topbar.jsx":"86c9733dcf6b","ui_kits/web_app/Workbench.jsx":"9061066691cf","ui_kits/web_app/tweaks-panel.jsx":"a1107c630a56","ui_kits/web_app/ui.jsx":"ca7452f64f72"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PIXICenterDesignSystem_019e02 = window.PIXICenterDesignSystem_019e02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// home/Home.jsx
try { (() => {
// Home page for PIXI Center — public-facing.
// Uses tokens from ../../colors_and_type.css and primitives from ui.jsx.

const NAV = [{
  label: "Datasets",
  href: "../ui_kits/web_app/index.html"
}, {
  label: "Cohort Browser",
  href: "../ui_kits/web_app/index.html#cohorts"
}, {
  label: "About",
  href: "#"
}];
const TopNav = () => {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)",
      height: 64,
      display: "flex",
      alignItems: "center",
      padding: "0 40px",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 16
    }
  }, NAV.map(({
    label,
    href
  }) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    onMouseEnter: () => setHover(label),
    onMouseLeave: () => setHover(null),
    style: {
      padding: "8px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: hover === label ? "var(--pixi-navy)" : "var(--fg-1)",
      textDecoration: "none",
      borderRadius: 6,
      background: hover === label ? "var(--pixi-cloud)" : "transparent",
      transition: "background 120ms, color 120ms"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Log in"));
};
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 48,
    alignItems: "center",
    padding: "72px 40px 56px",
    maxWidth: 1320,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
  mono: true
}, "Preclinical research \xB7 open data"), /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: "14px 0 18px",
    fontFamily: "var(--font-display)",
    fontSize: 56,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    color: "var(--fg-1)",
    textWrap: "balance"
  }
}, "A shared workbench for ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--pixi-navy)"
  }
}, "preclinical"), " imaging research."), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "0 0 28px",
    fontFamily: "var(--font-sans)",
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 560,
    textWrap: "pretty"
  }
}, "PIXI Center hosts curated preclinical imaging datasets, compute, and a peer-to-peer knowledge base \u2014 built so investigators, study directors, and core facilities can share methods and reproduce results across institutions."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 12,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "lg",
  icon: "arrowRight"
}, "Browse datasets"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "lg"
}, "Learn more")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 24,
    marginTop: 36,
    paddingTop: 20,
    borderTop: "1px solid var(--border-subtle)"
  }
}, [["Datasets", "412"], ["Subjects", "12,840"], ["Institutions", "37"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 26,
    fontWeight: 600,
    letterSpacing: "-0.01em",
    fontVariantNumeric: "tabular-nums",
    color: "var(--fg-1)"
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginTop: 2
  }
}, l))))), /*#__PURE__*/React.createElement(HeroVisual, null));

// Imaging-themed hero visual: a clinical "slice viewer" composition rendered in
// CSS — flagged as a placeholder for a real photograph or screenshot.
const HeroVisual = () => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: "5 / 4",
    background: "var(--pixi-ink)",
    borderRadius: 12,
    border: "1px solid var(--border-default)",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 24px 60px rgba(16,24,40,.10), 0 8px 20px rgba(16,24,40,.06)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 36,
    background: "rgba(10,10,11,.7)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    gap: 8,
    color: "rgba(255,255,255,.7)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#FFC30F",
    flexShrink: 0
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}, "PXI-2412-A \xB7 M-018 \xB7 d14"), /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto",
    flexShrink: 0
  }
}, "PET/CT \xB7 124/248")), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: "36px 0 36px 0",
    background: "radial-gradient(circle at 50% 50%, #2a2c31 0%, #14151a 55%, #0A0A0B 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: "70%",
    aspectRatio: "1/1"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background: "radial-gradient(circle at 45% 40%, #6B6E76 0%, #3D3F44 38%, #1A1B1E 78%)",
    filter: "blur(0.5px)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: "32%",
    top: "38%",
    width: "18%",
    aspectRatio: "1/1",
    borderRadius: "50%",
    background: "radial-gradient(circle, #FFC30F 0%, rgba(255,195,15,.45) 50%, transparent 75%)",
    mixBlendMode: "screen"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: "55%",
    top: "48%",
    width: "14%",
    aspectRatio: "1/1",
    borderRadius: "50%",
    background: "radial-gradient(circle, #3CB44B 0%, rgba(60,180,75,.4) 55%, transparent 80%)",
    mixBlendMode: "screen"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 1,
    background: "rgba(255,255,255,.12)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 1,
    background: "rgba(255,255,255,.12)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: "28%",
    top: "30%",
    width: "42%",
    height: "34%",
    border: "1px dashed rgba(255,195,15,.7)",
    borderRadius: 4
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
    background: "rgba(10,10,11,.7)",
    backdropFilter: "blur(8px)",
    borderTop: "1px solid rgba(255,255,255,.08)",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    gap: 8,
    color: "rgba(255,255,255,.7)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    flexShrink: 0
  }
}, "SUV 6.21"), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 30,
    height: 3,
    borderRadius: 2,
    background: "rgba(255,255,255,.1)",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "50%",
    background: "#FFC30F",
    borderRadius: 2
  }
})), /*#__PURE__*/React.createElement("span", {
  style: {
    flexShrink: 0
  }
}, "0.40 mm")));

// ---------- Section 1: What can I find ----------

const FindCard = ({
  icon,
  title,
  body
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "#fff",
      border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
      borderRadius: 10,
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      boxShadow: hover ? "var(--shadow-sm)" : "none",
      transition: "box-shadow 120ms, border-color 120ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      background: "var(--pixi-navy-soft)",
      color: "var(--pixi-navy)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--fg-1)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)"
    }
  }, body));
};
const FindSection = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "72px 40px 32px",
    maxWidth: 1320,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Overview"), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: "8px 0 0",
    fontFamily: "var(--font-display)",
    fontSize: 38,
    fontWeight: 600,
    letterSpacing: "-0.015em",
    color: "var(--fg-1)",
    textWrap: "balance"
  }
}, "What can I find in PIXI Center?")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(FindCard, {
  icon: "layers",
  title: "Preclinical datasets",
  body: "Curated imaging studies \u2014 PET, CT, MRI, optical \u2014 with subject metadata, protocols, and reconstruction parameters preserved end-to-end."
}), /*#__PURE__*/React.createElement(FindCard, {
  icon: "activity",
  title: "Compute resources",
  body: "Reproducible analysis environments with shared GPU compute, ROI workflows, and reconstruction pipelines that run next to the data."
}), /*#__PURE__*/React.createElement(FindCard, {
  icon: "library",
  title: "Knowledge base",
  body: "Method notes, protocol templates, and validated SOPs from contributing investigators and core facilities, citable by version."
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    marginTop: 36
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "lg",
  icon: "arrowRight"
}, "About PIXI Center")));

// ---------- Section 2: Recent datasets ----------

const RECENT = [{
  id: "PXI-2412-A",
  title: "GLP-1 receptor agonist · Q2 cohort",
  area: "Cardio · biodistribution",
  status: "warn",
  statusLabel: "In progress",
  subjects: 24,
  scans: 96,
  modalities: ["CT", "PET", "MR"],
  institution: "WUSTL",
  updated: "2 h ago"
}, {
  id: "PXI-2402-B",
  title: "Tumor microenvironment · BALB/c",
  area: "Oncology · preclinical",
  status: "info",
  statusLabel: "Reviewing",
  subjects: 18,
  scans: 72,
  modalities: ["PET", "CT"],
  institution: "MIT",
  updated: "yesterday"
}, {
  id: "PXI-2403-A",
  title: "Anti-PD1 efficacy — pilot",
  area: "Oncology · preclinical",
  status: "success",
  statusLabel: "Complete",
  subjects: 12,
  scans: 48,
  modalities: ["PET", "CT"],
  institution: "CAMI",
  updated: "Apr 28"
}, {
  id: "PXI-2410-A",
  title: "89Zr-DFO antibody dosimetry",
  area: "Imaging · methods",
  status: "warn",
  statusLabel: "In progress",
  subjects: 8,
  scans: 24,
  modalities: ["PET", "CT"],
  institution: "WUSTL",
  updated: "3 d ago"
}];
const DatasetCard = ({
  s
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: 18,
      background: "#fff",
      border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
      borderRadius: 8,
      boxShadow: hover ? "var(--shadow-sm)" : "none",
      transition: "box-shadow 120ms, border-color 120ms",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    mono: true
  }, s.id), /*#__PURE__*/React.createElement(Badge, {
    tone: s.status,
    dot: true
  }, s.statusLabel)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.25,
      color: "var(--fg-1)"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)",
      marginTop: 4
    }
  }, s.area))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10,
      paddingTop: 10,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 2
    }
  }, "Subjects"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums"
    }
  }, s.subjects)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 2
    }
  }, "Scans"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums"
    }
  }, s.scans)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 4
    }
  }, "Modalities"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, s.modalities.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      color: "var(--pixi-navy)",
      background: "var(--pixi-navy-soft)",
      borderRadius: 4,
      padding: "2px 6px",
      lineHeight: 1.3
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 8px",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: "var(--fg-2)",
      background: "var(--pixi-cloud)",
      borderRadius: 4
    }
  }, s.institution), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)"
    }
  }, "updated ", s.updated)));
};
const RecentSection = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "32px 40px 72px",
    maxWidth: 1320,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: "1 1 auto",
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Studies \xB7 recent"), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: "8px 0 0",
    fontFamily: "var(--font-display)",
    fontSize: 38,
    fontWeight: 600,
    letterSpacing: "-0.015em",
    color: "var(--fg-1)",
    whiteSpace: "nowrap"
  }
}, "Recent datasets")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: "var(--fg-3)",
    maxWidth: 380,
    flex: "0 1 380px"
  }
}, "A live slice of the Studies library. Sign in to see datasets shared with your institution.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16
  }
}, RECENT.map(s => /*#__PURE__*/React.createElement(DatasetCard, {
  key: s.id,
  s: s
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "lg",
  icon: "arrowRight"
}, "Browse datasets")));

// ---------- Section 3: Areas of research (word cloud) ----------

const TERMS = [{
  t: "Triple-negative breast cancer",
  w: 5
}, {
  t: "Glioblastoma",
  w: 6
}, {
  t: "Pancreatic adenocarcinoma",
  w: 4
}, {
  t: "Hepatocellular carcinoma",
  w: 5
}, {
  t: "Tumor microenvironment",
  w: 6
}, {
  t: "Immuno-oncology",
  w: 5
}, {
  t: "Anti-PD1",
  w: 3
}, {
  t: "CAR-T",
  w: 4
}, {
  t: "Radiotheranostics",
  w: 4
}, {
  t: "89Zr immunoPET",
  w: 5
}, {
  t: "Biodistribution",
  w: 6
}, {
  t: "Pharmacokinetics",
  w: 4
}, {
  t: "Tumor-bearing mice",
  w: 3
}, {
  t: "Patient-derived xenografts",
  w: 4
}, {
  t: "Metastasis",
  w: 5
}, {
  t: "Apoptosis imaging",
  w: 3
}, {
  t: "Hypoxia",
  w: 3
}, {
  t: "Angiogenesis",
  w: 4
}, {
  t: "Lymphoma",
  w: 3
}, {
  t: "Prostate adenocarcinoma",
  w: 4
}, {
  t: "Theranostic pairs",
  w: 3
}, {
  t: "Melanoma",
  w: 3
}, {
  t: "Ovarian cancer",
  w: 3
}];

// Sizes mapped from weight 1–6 → fontSize / weight / color tier.
const termStyle = w => {
  const sizes = {
    6: 36,
    5: 28,
    4: 22,
    3: 17,
    2: 14,
    1: 12
  };
  const weights = {
    6: 700,
    5: 700,
    4: 600,
    3: 500,
    2: 500,
    1: 500
  };
  // 3 color tiers — navy / ink / slate — assigned semi-randomly by weight
  const colors = {
    6: "var(--pixi-navy)",
    5: "var(--fg-1)",
    4: "var(--fg-1)",
    3: "var(--fg-2)",
    2: "var(--fg-3)",
    1: "var(--fg-3)"
  };
  return {
    fontFamily: "var(--font-display)",
    fontSize: sizes[w] || 16,
    fontWeight: weights[w] || 500,
    color: colors[w] || "var(--fg-2)",
    letterSpacing: w >= 5 ? "-0.015em" : "-0.005em",
    lineHeight: 1,
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 120ms",
    whiteSpace: "nowrap"
  };
};
const ResearchAreas = () => {
  // Stable shuffle so weights interleave visually
  const ordered = React.useMemo(() => {
    const out = [...TERMS];
    // simple deterministic shuffle by index parity
    return out.map((x, i) => ({
      x,
      k: (i * 9301 + 49297) % 233280 / 233280
    })).sort((a, b) => a.k - b.k).map(o => o.x);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pixi-paper)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "72px 40px",
      maxWidth: 1320,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Topics in the library"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: "-0.015em",
      color: "var(--fg-1)"
    }
  }, "Areas of research"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 15,
      color: "var(--fg-2)",
      maxWidth: 620,
      lineHeight: 1.55
    }
  }, "A snapshot of cancer-research topics represented across the dataset library. Term size reflects the number of contributing studies.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      justifyContent: "center",
      gap: "18px 28px",
      padding: "32px 16px",
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: 12,
      textAlign: "center"
    }
  }, ordered.map(({
    t,
    w
  }) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: termStyle(w),
    onMouseEnter: e => e.currentTarget.style.color = "var(--pixi-navy)",
    onMouseLeave: e => {
      const colors = {
        6: "var(--pixi-navy)",
        5: "var(--fg-1)",
        4: "var(--fg-1)",
        3: "var(--fg-2)",
        2: "var(--fg-3)",
        1: "var(--fg-3)"
      };
      e.currentTarget.style.color = colors[w];
    }
  }, t)))));
};

// ---------- Footer ----------

const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: "#fff",
    padding: "40px 40px 28px",
    fontFamily: "var(--font-sans)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 32,
    flexWrap: "wrap",
    paddingBottom: 24,
    borderBottom: "1px solid var(--border-subtle)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 420
  }
}, /*#__PURE__*/React.createElement(Logo, {
  size: 22
}), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "12px 0 0",
    fontSize: 13,
    color: "var(--fg-3)",
    lineHeight: 1.55
  }
}, "PIXI Center is funded by NIH grants. Hosted in collaboration with contributing preclinical imaging core facilities.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 56,
    flexWrap: "wrap"
  }
}, [["Explore", ["Datasets", "Knowledge base", "Compute"]], ["About", ["About PIXI Center", "Contributors", "Roadmap"]], ["Contribute", ["Submit a dataset", "Documentation", "Contact"]]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
  key: title,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, title), items.map(i => /*#__PURE__*/React.createElement("a", {
  key: i,
  href: "#",
  style: {
    color: "var(--fg-1)",
    textDecoration: "none",
    fontSize: 13
  }
}, i)))))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    paddingTop: 20,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--fg-3)"
  }
}, "\xA9 2026 PIXI Center. All rights reserved."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 18,
    fontSize: 12
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: "var(--fg-3)",
    textDecoration: "none"
  }
}, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: "var(--fg-3)",
    textDecoration: "none"
  }
}, "Terms"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: "var(--fg-3)",
    textDecoration: "none"
  }
}, "Accessibility")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--fg-3)",
    padding: "4px 10px",
    border: "1px solid var(--border-subtle)",
    borderRadius: 999,
    background: "var(--pixi-paper)"
  }
}, "Funded by NIH grants"))));

// ---------- Page ----------

const HomePage = () => /*#__PURE__*/React.createElement("div", {
  className: "pixi-root",
  "data-screen-label": "PIXI Center home"
}, /*#__PURE__*/React.createElement(TopNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FindSection, null), /*#__PURE__*/React.createElement(RecentSection, null), /*#__PURE__*/React.createElement(ResearchAreas, null), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(HomePage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "home/Home.jsx", error: String((e && e.message) || e) }); }

// home/ui.jsx
try { (() => {
// Shared UI primitives: tokens via CSS vars, simple, neat.
// Usage: load AFTER React via <script type="text/babel" src="ui.jsx"></script>.

const PixiMark = ({
  size = 28
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 100 100",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M50 8a42 42 0 1 0 42 42h-12a30 30 0 1 1-30-30Z",
  fill: "#1E3C87"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "36",
  cy: "50",
  r: "14",
  fill: "#3CB44B"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "50",
  r: "10",
  fill: "#FFFFFF"
}), /*#__PURE__*/React.createElement("path", {
  d: "M58 38a12 12 0 0 1 0 24Z",
  fill: "#FFC30F"
}));
const Logo = ({
  size = 28,
  showWordmark = true
}) => /*#__PURE__*/React.createElement("img", {
  src: window.__resources && window.__resources.logoWide || "../assets/pixi-logo-wide.png",
  alt: "PIXI Center",
  style: {
    height: size,
    width: "auto",
    display: "block"
  }
});

// --- Lucide-style icons (1.5 stroke) ---
const Icon = ({
  name,
  size = 18,
  color = "currentColor"
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  };
  const paths = {
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    flask: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14h10"
    })),
    library: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M9 21V9"
    })),
    image: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 15-5-5L5 21"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 21a2 2 0 0 0 4 0"
    })),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    })),
    folder: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    })),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    })),
    list: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "6",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "18",
      r: "1"
    })),
    chevronDown: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })),
    chevronRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })),
    close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"
    })),
    activity: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })),
    queue: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    play: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    })),
    zoomIn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      y1: "8",
      x2: "11",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })),
    zoomOut: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })),
    layers: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 17 12 22 22 17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 12 12 17 22 12"
    })),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    moreHorizontal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1"
    })),
    sliders: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", props, paths[name] || null);
};

// --- Button ---
const Button = ({
  children,
  variant = "secondary",
  size = "md",
  icon,
  onClick,
  type = "button",
  disabled
}) => {
  const sizes = {
    sm: {
      h: 28,
      px: 10,
      fs: 13,
      gap: 6,
      ic: 14
    },
    md: {
      h: 36,
      px: 14,
      fs: 14,
      gap: 8,
      ic: 16
    },
    lg: {
      h: 44,
      px: 18,
      fs: 15,
      gap: 10,
      ic: 18
    }
  };
  const s = sizes[size];
  const variants = {
    primary: {
      bg: "var(--pixi-navy)",
      color: "#fff",
      border: "transparent",
      hover: "var(--pixi-navy-deep)"
    },
    secondary: {
      bg: "#fff",
      color: "var(--pixi-ink)",
      border: "var(--border-default)",
      hover: "var(--pixi-cloud)"
    },
    ghost: {
      bg: "transparent",
      color: "var(--pixi-ink)",
      border: "transparent",
      hover: "var(--pixi-cloud)"
    },
    danger: {
      bg: "#fff",
      color: "var(--danger)",
      border: "#F0BBB6",
      hover: "var(--danger-bg)"
    }
  };
  const v = variants[variant];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: 500,
      borderRadius: 6,
      border: `1px solid ${v.border}`,
      background: hover && !disabled ? v.hover : v.bg,
      color: v.color,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 120ms",
      whiteSpace: "nowrap"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: s.ic
  }), children);
};

// --- Badge / status pill ---
const Badge = ({
  children,
  tone = "neutral",
  dot
}) => {
  const tones = {
    success: {
      bg: "var(--pixi-green-soft)",
      color: "var(--pixi-green-deep)",
      dot: "var(--pixi-green)"
    },
    warn: {
      bg: "var(--pixi-yellow-soft)",
      color: "#8C6A00",
      dot: "var(--pixi-yellow)"
    },
    info: {
      bg: "var(--pixi-navy-soft)",
      color: "var(--pixi-navy)",
      dot: "var(--pixi-navy)"
    },
    danger: {
      bg: "var(--danger-bg)",
      color: "var(--danger)",
      dot: "var(--danger)"
    },
    neutral: {
      bg: "var(--pixi-cloud)",
      color: "var(--pixi-graphite)",
      dot: "var(--pixi-steel)"
    },
    outline: {
      bg: "#fff",
      color: "var(--fg-2)",
      dot: "var(--pixi-steel)",
      border: "var(--border-default)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 10px",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 999,
      background: t.bg,
      color: t.color,
      border: t.border ? `1px solid ${t.border}` : "1px solid transparent",
      whiteSpace: "nowrap"
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot
    }
  }), children);
};

// --- Avatar ---
const Avatar = ({
  initials,
  size = 28,
  color
}) => {
  const colors = ["#1E3C87", "#3D3F44", "#2F8E3B", "#8C6A00"];
  const c = color || colors[(initials.charCodeAt(0) || 0) % colors.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: c,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: size * 0.38,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, initials);
};
const AvatarStack = ({
  people,
  max = 4,
  size = 24
}) => {
  const shown = people.slice(0, max);
  const overflow = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i ? -8 : 0,
      border: "2px solid #fff",
      borderRadius: "50%",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: p,
    size: size
  }))), overflow > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -8,
      border: "2px solid #fff",
      borderRadius: "50%",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: `+${overflow}`,
    size: size,
    color: "#9DA1AA"
  })));
};

// --- Field (text input + label) ---
const Field = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text"
}) => {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--fg-2)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || "",
    onChange: e => onChange?.(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 36,
      padding: "0 12px",
      borderRadius: 6,
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--pixi-navy)" : "var(--border-default)"}`,
      boxShadow: focus ? "0 0 0 3px rgba(30,60,135,.20)" : "none",
      background: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg-1)",
      outline: "none"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--danger)"
    }
  }, error));
};

// --- Eyebrow / label ---
const Eyebrow = ({
  children,
  mono
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, children);
Object.assign(window, {
  PixiMark,
  Logo,
  Icon,
  Button,
  Badge,
  Avatar,
  AvatarStack,
  Field,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "home/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/App.jsx
try { (() => {
// App shell — wires sidebar + topbar + view + inspector

const App = () => {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || {
    showCrumbs: true
  });
  const [nav, setNav] = React.useState(() => typeof location !== "undefined" && location.hash === "#cohorts" ? "cohorts" : "studies");
  const [openStudy, setOpenStudy] = React.useState(null);
  const [openSubject, setOpenSubject] = React.useState(null);
  const onNavigate = n => {
    setNav(n);
    setOpenStudy(null);
    setOpenSubject(null);
  };
  const onOpenStudy = s => {
    setOpenStudy(s);
    setNav("studies");
    setOpenSubject(null);
  };

  // Build crumbs
  let crumbs = [{
    label: "Oncology — preclinical"
  }];
  if (nav === "studies" && !openStudy) crumbs.push({
    label: "Studies"
  });
  if (openStudy) crumbs.push({
    label: "Studies",
    to: "studies"
  }, {
    label: openStudy.id
  });
  if (nav === "imaging") crumbs = [{
    label: "Imaging"
  }, {
    label: "Workbench"
  }];
  if (nav === "cohorts") crumbs = [{
    label: "Cohort Browser"
  }];
  if (nav === "home") crumbs = [{
    label: "Home"
  }];
  let view;
  if (nav === "imaging") view = /*#__PURE__*/React.createElement(Workbench, null);else if (nav === "cohorts") view = /*#__PURE__*/React.createElement(CohortBrowser, null);else if (openStudy) view = /*#__PURE__*/React.createElement(StudyDetail, {
    study: openStudy,
    onOpenSubject: setOpenSubject,
    onBack: () => setOpenStudy(null)
  });else if (nav === "studies") view = /*#__PURE__*/React.createElement(Studies, {
    onOpenStudy: onOpenStudy
  });else view = /*#__PURE__*/React.createElement(HomeView, {
    onOpenStudy: onOpenStudy
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "pixi-root",
    style: {
      height: "100vh",
      display: "flex",
      background: "var(--pixi-paper)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: nav,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    crumbs: crumbs,
    showCrumbs: t.showCrumbs,
    onNavigate: c => c.to && setOpenStudy(null),
    onNewStudy: () => alert("Submit dataset (mock)")
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--pixi-paper)"
    }
  }, view), /*#__PURE__*/React.createElement(Inspector, {
    subject: openSubject,
    onClose: () => setOpenSubject(null)
  })), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Top bar"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Show breadcrumbs",
    value: t.showCrumbs,
    onChange: v => setTweak("showCrumbs", v)
  })));
};
const HomeView = ({
  onOpenStudy
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "24px 32px",
    fontFamily: "var(--font-sans)",
    maxWidth: 1100
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Workspace \xB7 Oncology \u2014 preclinical"), /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: "6px 0 24px",
    fontFamily: "var(--font-display)",
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: "-0.01em"
  }
}, "Welcome back, Eri."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    marginBottom: 28
  }
}, [["Active studies", "8", "var(--pixi-navy)"], ["Subjects in flight", "146", "var(--fg-1)"], ["Awaiting review", "12", "#8C6A00"], ["Failed QC", "2", "var(--danger)"]].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    background: "#fff",
    border: "1px solid var(--border-subtle)",
    borderRadius: 8,
    padding: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 6
  }
}, l), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: c,
    fontVariantNumeric: "tabular-nums"
  }
}, v)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 600
  }
}, "Recent studies"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "sm",
  icon: "arrowRight"
}, "View all")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16
  }
}, STUDIES.slice(0, 4).map(s => /*#__PURE__*/React.createElement(StudyCard, {
  key: s.id,
  study: s,
  onOpen: onOpenStudy
}))));
Object.assign(window, {
  App,
  HomeView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/CohortBrowser.jsx
try { (() => {
// CohortBrowser — faceted browse over all available preclinical cohorts.
// Left rail = filter facets; main = selectable results table + selection bar.

const COHORTS = [{
  id: "PXI-2402-B",
  title: "Tumor microenvironment · BALB/c",
  disease: "Breast Cancer",
  modalities: ["PET", "CT"],
  scanner: "Mediso",
  institution: "MIT",
  subjects: 18
}, {
  id: "PXI-2403-A",
  title: "Anti-PD1 efficacy — pilot",
  disease: "Lung Cancer",
  modalities: ["PET", "CT"],
  scanner: "Inveon",
  institution: "CAMI",
  subjects: 12
}, {
  id: "PXI-2410-A",
  title: "89Zr-DFO antibody dosimetry",
  disease: "Lymphoma",
  modalities: ["PET", "CT"],
  scanner: "Bruker",
  institution: "WUSTL",
  subjects: 8
}, {
  id: "PXI-2411-D",
  title: "Radiolabeled antibody · biodistribution",
  disease: "Ovarian Cancer",
  modalities: ["PET", "CT"],
  scanner: "Mediso",
  institution: "CAMI",
  subjects: 6
}, {
  id: "PXI-2415-A",
  title: "Glioma BLI longitudinal",
  disease: "Brain Cancer",
  modalities: ["BLI", "MR"],
  scanner: "Bruker",
  institution: "WUSTL",
  subjects: 20
}, {
  id: "PXI-2418-C",
  title: "Orthotopic lung · SPECT",
  disease: "Lung Cancer",
  modalities: ["SPECT", "CT"],
  scanner: "Mediso",
  institution: "Torino",
  subjects: 14
}, {
  id: "PXI-2420-B",
  title: "Breast PDX · MR series",
  disease: "Breast Cancer",
  modalities: ["MR"],
  scanner: "Bruker",
  institution: "MIT",
  subjects: 16
}, {
  id: "PXI-2421-A",
  title: "Brain metastasis · dynamic PET",
  disease: "Brain Cancer",
  modalities: ["PET", "CT"],
  scanner: "Inveon",
  institution: "WUSTL",
  subjects: 10
}, {
  id: "PXI-2424-D",
  title: "Lymphoma · Inveon survey",
  disease: "Lymphoma",
  modalities: ["Inveon", "CT"],
  scanner: "Inveon",
  institution: "CAMI",
  subjects: 9
}, {
  id: "PXI-2427-A",
  title: "Ovarian · bioluminescence",
  disease: "Ovarian Cancer",
  modalities: ["BLI"],
  scanner: "Bruker",
  institution: "Torino",
  subjects: 11
}, {
  id: "PXI-2430-B",
  title: "Lung · multiparametric MR",
  disease: "Lung Cancer",
  modalities: ["MR", "CT"],
  scanner: "Bruker",
  institution: "WUSTL",
  subjects: 13
}, {
  id: "PXI-2433-C",
  title: "Breast · SPECT perfusion",
  disease: "Breast Cancer",
  modalities: ["SPECT", "CT"],
  scanner: "Mediso",
  institution: "MIT",
  subjects: 7
}, {
  id: "PXI-2436-A",
  title: "Glioblastoma · PET/MR",
  disease: "Brain Cancer",
  modalities: ["PET", "MR"],
  scanner: "Mediso",
  institution: "Torino",
  subjects: 15
}, {
  id: "PXI-2439-B",
  title: "Lymphoma · theranostic pair",
  disease: "Lymphoma",
  modalities: ["SPECT", "PET"],
  scanner: "Bruker",
  institution: "CAMI",
  subjects: 5
}];
const FACETS = [{
  key: "modalities",
  label: "Modality",
  options: ["CT", "PET", "MR", "SPECT", "Inveon", "BLI"],
  multi: true
}, {
  key: "disease",
  label: "Disease Area",
  options: ["Lung Cancer", "Breast Cancer", "Brain Cancer", "Lymphoma", "Ovarian Cancer"]
}, {
  key: "scanner",
  label: "Scanner",
  options: ["Bruker", "Mediso", "Inveon"]
}, {
  key: "institution",
  label: "Institution",
  options: ["WUSTL", "MIT", "CAMI", "Torino"]
}];
const cohortHas = (cohort, facet, opt) => facet.multi ? cohort[facet.key].includes(opt) : cohort[facet.key] === opt;
const ModTags = ({
  mods
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 4,
    flexWrap: "wrap"
  }
}, mods.map(m => /*#__PURE__*/React.createElement("span", {
  key: m,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    color: "var(--pixi-navy)",
    background: "var(--pixi-navy-soft)",
    borderRadius: 4,
    padding: "2px 6px",
    lineHeight: 1.4
  }
}, m)));
const Check = ({
  checked,
  indeterminate
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    width: 16,
    height: 16,
    borderRadius: 4,
    flexShrink: 0,
    border: `1.5px solid ${checked || indeterminate ? "var(--pixi-navy)" : "var(--border-strong)"}`,
    background: checked || indeterminate ? "var(--pixi-navy)" : "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 120ms, border-color 120ms"
  }
}, checked && /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 12,
  color: "#fff"
}), indeterminate && !checked && /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 2,
    background: "#fff",
    borderRadius: 1
  }
}));
const FacetSection = ({
  facet,
  selected,
  onToggle,
  counts
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    padding: "0 4px 6px"
  }
}, facet.label), facet.options.map(opt => {
  const on = selected.has(opt);
  const count = counts[opt] || 0;
  return /*#__PURE__*/React.createElement("button", {
    key: opt,
    onClick: () => onToggle(facet.key, opt),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "6px 4px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      borderRadius: 5,
      fontFamily: "var(--font-sans)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--pixi-cloud)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Check, {
    checked: on
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13,
      color: on ? "var(--fg-1)" : "var(--fg-2)",
      fontWeight: on ? 600 : 400
    }
  }, opt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: "var(--font-mono)",
      color: "var(--fg-3)"
    }
  }, count));
}));
const CohortBrowser = () => {
  const [sel, setSel] = React.useState(() => {
    const o = {};
    FACETS.forEach(f => o[f.key] = new Set());
    return o;
  });
  const [picked, setPicked] = React.useState(() => new Set());
  const toggle = (key, opt) => setSel(prev => {
    const next = {
      ...prev,
      [key]: new Set(prev[key])
    };
    next[key].has(opt) ? next[key].delete(opt) : next[key].add(opt);
    return next;
  });
  const clearAll = () => setSel(() => {
    const o = {};
    FACETS.forEach(f => o[f.key] = new Set());
    return o;
  });
  const activeCount = FACETS.reduce((n, f) => n + sel[f.key].size, 0);

  // Filtered cohorts: AND across categories, OR within a category.
  const filtered = COHORTS.filter(c => FACETS.every(f => {
    const s = sel[f.key];
    if (s.size === 0) return true;
    return [...s].some(opt => cohortHas(c, f, opt));
  }));

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
    if (allShownPicked) filtered.forEach(c => next.delete(c.id));else filtered.forEach(c => next.add(c.id));
    return next;
  });
  const togglePick = id => setPicked(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const pickedCohorts = COHORTS.filter(c => picked.has(c.id));
  const pickedSubjects = pickedCohorts.reduce((n, c) => n + c.subjects, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 264,
      flexShrink: 0,
      background: "#fff",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Filters"), /*#__PURE__*/React.createElement("button", {
    onClick: clearAll,
    disabled: activeCount === 0,
    style: {
      background: "transparent",
      border: "none",
      cursor: activeCount ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 500,
      color: activeCount ? "var(--pixi-navy)" : "var(--fg-4)"
    }
  }, "Clear all")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "16px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, FACETS.map(f => /*#__PURE__*/React.createElement(FacetSection, {
    key: f.key,
    facet: f,
    selected: sel[f.key],
    onToggle: toggle,
    counts: counts
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 32px 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Browse \xB7 all available data"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: "-0.01em"
    }
  }, "Cohort Browser"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "var(--fg-2)",
      maxWidth: 620,
      lineHeight: 1.5
    }
  }, "Filter the preclinical library by modality, disease area, scanner, and institution, then select the cohorts you want to pull into a working set."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      padding: "18px 0 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, filtered.length, " cohort", filtered.length === 1 ? "" : "s"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--fg-3)"
    }
  }, "\xB7 ", filtered.reduce((n, c) => n + c.subjects, 0), " subjects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginLeft: 4
    }
  }, FACETS.flatMap(f => [...sel[f.key]].map(opt => /*#__PURE__*/React.createElement("button", {
    key: f.key + opt,
    onClick: () => toggle(f.key, opt),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 6px 0 10px",
      borderRadius: 999,
      border: "1px solid var(--pixi-navy-line)",
      background: "var(--pixi-navy-soft)",
      color: "var(--pixi-navy)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, opt, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 12
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "0 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...cbHeadStyle,
      width: 44,
      paddingLeft: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleAllShown,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    checked: allShownPicked,
    indeterminate: someShownPicked && !allShownPicked
  }))), ["Cohort", "Disease area", "Modalities", "Scanner", "Institution", "Subjects"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      ...cbHeadStyle,
      textAlign: i === 5 ? "right" : "left",
      paddingRight: i === 5 ? 16 : 14
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(c => {
    const on = picked.has(c.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      onClick: () => togglePick(c.id),
      style: {
        cursor: "pointer",
        background: on ? "var(--pixi-navy-soft)" : "#fff"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--pixi-paper)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = on ? "var(--pixi-navy-soft)" : "#fff";
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...cbCellStyle,
        paddingLeft: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Check, {
      checked: on
    }))), /*#__PURE__*/React.createElement("td", {
      style: cbCellStyle
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--fg-3)"
      }
    }, c.id), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--fg-1)"
      }
    }, c.title))), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cbCellStyle,
        color: "var(--fg-2)"
      }
    }, c.disease), /*#__PURE__*/React.createElement("td", {
      style: cbCellStyle
    }, /*#__PURE__*/React.createElement(ModTags, {
      mods: c.modalities
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cbCellStyle,
        color: "var(--fg-2)"
      }
    }, c.scanner), /*#__PURE__*/React.createElement("td", {
      style: cbCellStyle
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        height: 22,
        padding: "0 9px",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: "var(--fg-2)",
        background: "var(--pixi-cloud)",
        borderRadius: 4
      }
    }, c.institution)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cbCellStyle,
        textAlign: "right",
        paddingRight: 16,
        fontVariantNumeric: "tabular-nums",
        fontFamily: "var(--font-display)",
        fontWeight: 500
      }
    }, c.subjects));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    style: {
      padding: 48,
      textAlign: "center",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 24,
    color: "var(--pixi-mist)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontWeight: 600,
      color: "var(--fg-2)"
    }
  }, "No cohorts match these filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, "Remove a filter to widen the search."))))))), picked.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      right: 32,
      bottom: 20,
      background: "var(--pixi-ink)",
      color: "#fff",
      borderRadius: 10,
      boxShadow: "0 8px 16px rgba(16,24,40,.10), 0 16px 40px rgba(16,24,40,.18)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, picked.size, " cohort", picked.size === 1 ? "" : "s", " selected"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.6)"
    }
  }, "\xB7 ", pickedSubjects, " subjects"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPicked(new Set()),
    style: {
      height: 34,
      padding: "0 14px",
      borderRadius: 6,
      cursor: "pointer",
      background: "transparent",
      border: "1px solid rgba(255,255,255,.22)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500
    }
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    onClick: () => alert(`Added ${picked.size} cohorts (${pickedSubjects} subjects) to working set (mock)`),
    style: {
      height: 34,
      padding: "0 16px",
      borderRadius: 6,
      cursor: "pointer",
      background: "var(--pixi-green)",
      border: "1px solid transparent",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " Add to working set"))));
};
const cbHeadStyle = {
  textAlign: "left",
  padding: "10px 14px",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--fg-3)",
  background: "var(--pixi-paper)",
  borderBottom: "1px solid var(--border-subtle)",
  position: "sticky",
  top: 0,
  zIndex: 1
};
const cbCellStyle = {
  padding: "12px 14px",
  borderBottom: "1px solid var(--border-subtle)",
  verticalAlign: "middle"
};
Object.assign(window, {
  CohortBrowser,
  COHORTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/CohortBrowser.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Inspector.jsx
try { (() => {
// Inspector — right-hand drawer for subject metadata.

const Inspector = ({
  subject,
  onClose
}) => {
  if (!subject) return null;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: 360,
      background: "#fff",
      borderLeft: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 8px 16px rgba(16,24,40,.06), 0 16px 40px rgba(16,24,40,.08)",
      fontFamily: "var(--font-sans)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    mono: true
  }, "Subject"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      marginTop: 2
    }
  }, subject.id)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--fg-3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: subject.status,
    dot: true
  }, subject.statusLabel), /*#__PURE__*/React.createElement(Section, {
    title: "Identity"
  }, /*#__PURE__*/React.createElement(KV2, {
    label: "Subject ID",
    value: subject.id,
    mono: true
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "Cohort",
    value: subject.cohort
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "Sex",
    value: subject.sex === "F" ? "Female" : "Male"
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "Strain",
    value: "C57BL/6J"
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "DOB",
    value: "2026-01-12",
    mono: true
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Measurements"
  }, /*#__PURE__*/React.createElement(KV2, {
    label: "Mass",
    value: `${subject.mass.toFixed(1)} g`,
    mono: true
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "Day",
    value: `${subject.day} / 28`
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "Last scan",
    value: "2026-04-26 14:21",
    mono: true
  }), /*#__PURE__*/React.createElement(KV2, {
    label: "Tracer activity",
    value: "12,478.06 MBq",
    mono: true
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Latest scan",
    subtitle: "PET / CT \xB7 day 14"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1 / 1",
      borderRadius: 8,
      border: "1px solid var(--border-subtle)",
      background: "linear-gradient(135deg, #1A1B1E 0%, #3D3F44 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pixi-steel)",
      fontSize: 12,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 24,
    color: "var(--pixi-steel)"
  }), /*#__PURE__*/React.createElement("span", null, "imaging viewer placeholder")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 8,
      left: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--pixi-steel)"
    }
  }, "slice 124 / 248 \xB7 0.4 mm")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "image"
  }, "Open in workbench")), /*#__PURE__*/React.createElement(Section, {
    title: "Notes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pixi-paper)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 6,
      padding: 12,
      fontSize: 13,
      color: "var(--fg-2)",
      lineHeight: 1.5
    }
  }, "Vehicle cohort. No adverse events at day 14. Slight elevation in baseline activity vs. day 7 \u2014 flag for reviewer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "EH",
    size: 20
  }), " E. Hoshino \xB7 Apr 26"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      gap: 8,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Edit"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "check"
  }, "Mark reviewed")));
};
const Section = ({
  title,
  subtitle,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, title), subtitle && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--fg-3)",
    marginTop: 2
  }
}, subtitle)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, children));
const KV2 = ({
  label,
  value,
  mono
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 13,
    padding: "4px 0"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-3)"
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-1)",
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontWeight: 500,
    textAlign: "right"
  }
}, value));
Object.assign(window, {
  Inspector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Inspector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Sidebar.jsx
try { (() => {
// Sidebar — left navigation. 240px wide. Logo at top, sections, user footer.

const SidebarItem = ({
  icon,
  label,
  active,
  count,
  onClick
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      height: 34,
      padding: "0 10px",
      background: active ? "var(--pixi-navy-soft)" : hover ? "var(--pixi-cloud)" : "transparent",
      color: active ? "var(--pixi-navy)" : "var(--fg-1)",
      border: "none",
      borderRadius: 6,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: active ? 600 : 500,
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-3)",
      fontFamily: "var(--font-mono)",
      background: active ? "#fff" : "var(--pixi-cloud)",
      padding: "1px 6px",
      borderRadius: 4
    }
  }, count));
};
const SidebarSection = ({
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginTop: 18
  }
}, title && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    padding: "0 10px",
    marginBottom: 4
  }
}, title), children);
const Sidebar = ({
  active,
  onNavigate
}) => {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      height: "100%",
      background: "#fff",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 14px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "8px 10px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement(SidebarSection, null, /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "home",
    label: "Home",
    active: active === "home",
    onClick: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "library",
    label: "Datasets",
    active: active === "studies",
    count: 12,
    onClick: () => onNavigate("studies")
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "layers",
    label: "Cohort Browser",
    active: active === "cohorts",
    onClick: () => onNavigate("cohorts")
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "activity",
    label: "Analysis",
    active: active === "analysis",
    onClick: () => onNavigate("analysis")
  })), /*#__PURE__*/React.createElement(SidebarSection, {
    title: "Workspaces"
  }, /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "flask",
    label: "Oncology \u2014 preclinical",
    active: active === "ws-onco",
    onClick: () => onNavigate("ws-onco")
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "flask",
    label: "Cardio \u2014 biodistribution",
    onClick: () => onNavigate("ws-cardio")
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "flask",
    label: "Shared with me",
    count: 4,
    onClick: () => onNavigate("ws-shared")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "EH",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--fg-1)"
    }
  }, "Eri Hoshino"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-3)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Stanford \xB7 Imaging Core")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "none",
      padding: 4,
      cursor: "pointer",
      color: "var(--fg-3)",
      display: "inline-flex",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 16
  }))));
};
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Studies.jsx
try { (() => {
// Studies — library view. Card grid + table toggle.

const STUDIES = [{
  id: "PXI-2412-A",
  title: "GLP-1 receptor agonist · Q2 cohort",
  area: "Lung Cancer",
  status: "warn",
  statusLabel: "In progress",
  subjects: 24,
  scans: 96,
  modalities: ["CT", "PET", "MR"],
  day: "D 14 / 28",
  lead: "EH",
  institution: "WUSTL",
  team: ["EH", "JP", "RA", "MK", "TC"],
  updated: "2 h ago"
}, {
  id: "PXI-2402-B",
  title: "Tumor microenvironment · BALB/c",
  area: "Breast Cancer · TNBC",
  status: "info",
  statusLabel: "Reviewing",
  subjects: 18,
  scans: 72,
  modalities: ["PET", "CT"],
  day: "D 21 / 21",
  lead: "JP",
  institution: "MIT",
  team: ["JP", "EH", "RA"],
  updated: "yesterday"
}, {
  id: "PXI-2403-A",
  title: "Anti-PD1 efficacy — pilot",
  area: "Glioblastoma",
  status: "success",
  statusLabel: "Complete",
  subjects: 12,
  scans: 48,
  modalities: ["PET", "CT"],
  day: "D 28 / 28",
  lead: "RA",
  institution: "CAMI",
  team: ["RA", "EH", "MK"],
  updated: "Apr 28"
}, {
  id: "PXI-2407-C",
  title: "Cardiac fibrosis · MRI longitudinal",
  area: "Heart · Cardiac",
  status: "neutral",
  statusLabel: "Draft",
  subjects: 0,
  scans: 0,
  modalities: ["MR"],
  day: "—",
  lead: "MK",
  institution: "MIT",
  team: ["MK"],
  updated: "Apr 22"
}, {
  id: "PXI-2410-A",
  title: "Gd-DTPA dosimetry · 89Zr",
  area: "Lymphoma",
  status: "warn",
  statusLabel: "In progress",
  subjects: 8,
  scans: 24,
  modalities: ["PET", "CT"],
  day: "D 7 / 14",
  lead: "TC",
  institution: "WUSTL",
  team: ["TC", "EH"],
  updated: "3 d ago"
}, {
  id: "PXI-2411-D",
  title: "Radiolabeled antibody — biodistribution",
  area: "Breast Cancer",
  status: "danger",
  statusLabel: "Failed QC",
  subjects: 6,
  scans: 18,
  modalities: ["PET", "CT"],
  day: "D 4 / 14",
  lead: "EH",
  institution: "CAMI",
  team: ["EH", "RA", "JP"],
  updated: "5 d ago"
}];
const StudyCard = ({
  study,
  onOpen
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(study),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textAlign: "left",
      padding: 18,
      gap: 14,
      background: "#fff",
      border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
      borderRadius: 8,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      boxShadow: hover ? "var(--shadow-sm)" : "none",
      transition: "box-shadow 120ms, border-color 120ms",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    mono: true
  }, study.id, " \xB7 ", study.area), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--fg-1)",
      lineHeight: 1.25
    }
  }, study.title)), /*#__PURE__*/React.createElement(Badge, {
    tone: study.status,
    dot: true
  }, study.statusLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      paddingTop: 12,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 3
    }
  }, "Subjects"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums",
      color: "var(--fg-1)"
    }
  }, study.subjects)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 3
    }
  }, "Scans"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums",
      color: "var(--fg-1)"
    }
  }, study.scans)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 5
    }
  }, "Modalities"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, study.modalities.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      color: "var(--pixi-navy)",
      background: "var(--pixi-navy-soft)",
      borderRadius: 4,
      padding: "2px 6px",
      lineHeight: 1.4
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 9px",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: "var(--fg-2)",
      background: "var(--pixi-cloud)",
      borderRadius: 4
    }
  }, study.institution), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)"
    }
  }, "updated ", study.updated)));
};
const FilterChip = ({
  children,
  active,
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    height: 28,
    padding: "0 12px",
    borderRadius: 999,
    border: `1px solid ${active ? "var(--pixi-navy)" : "var(--border-default)"}`,
    background: active ? "var(--pixi-navy-soft)" : "#fff",
    color: active ? "var(--pixi-navy)" : "var(--fg-2)",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: active ? 600 : 500,
    cursor: "pointer"
  }
}, children);
const Studies = ({
  onOpenStudy
}) => {
  const [filter, setFilter] = React.useState("All");
  const [view, setView] = React.useState("grid");
  const filters = ["All", "In progress", "Reviewing", "Complete", "Draft"];
  const filtered = filter === "All" ? STUDIES : STUDIES.filter(s => s.statusLabel === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 32px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Workspace \xB7 Oncology \u2014 preclinical"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: "-0.01em"
    }
  }, "Datasets")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Submit dataset"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "16px 0",
      borderBottom: "1px solid var(--border-subtle)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(FilterChip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      borderRadius: 6,
      border: "1px solid var(--border-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView("grid"),
    style: {
      width: 32,
      height: 28,
      border: "none",
      cursor: "pointer",
      background: view === "grid" ? "var(--pixi-cloud)" : "#fff",
      color: view === "grid" ? "var(--pixi-ink)" : "var(--fg-3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setView("list"),
    style: {
      width: 32,
      height: 28,
      border: "none",
      cursor: "pointer",
      borderLeft: "1px solid var(--border-subtle)",
      background: view === "list" ? "var(--pixi-cloud)" : "#fff",
      color: view === "list" ? "var(--pixi-ink)" : "var(--fg-3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list",
    size: 14
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "sliders",
    size: "md"
  }, "Filters"))), view === "grid" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16
    }
  }, filtered.map(s => /*#__PURE__*/React.createElement(StudyCard, {
    key: s.id,
    study: s,
    onOpen: onOpenStudy
  }))) : /*#__PURE__*/React.createElement(StudiesList, {
    rows: filtered,
    onOpen: onOpenStudy
  }));
};
const StudiesList = ({
  rows,
  onOpen
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: "1px solid var(--border-subtle)",
    borderRadius: 8,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("table", {
  style: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "var(--font-sans)",
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Study", "Area", "Status", "Subjects", "Updated", "Institution"].map((h, i) => /*#__PURE__*/React.createElement("th", {
  key: i,
  style: {
    textAlign: i >= 3 && i <= 4 ? "right" : "left",
    padding: "10px 14px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    background: "var(--pixi-paper)",
    borderBottom: "1px solid var(--border-subtle)"
  }
}, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => /*#__PURE__*/React.createElement("tr", {
  key: s.id,
  onClick: () => onOpen(s),
  style: {
    cursor: "pointer"
  },
  onMouseEnter: e => e.currentTarget.style.background = "var(--pixi-paper)",
  onMouseLeave: e => e.currentTarget.style.background = "#fff"
}, /*#__PURE__*/React.createElement("td", {
  style: tdStyle
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 2
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-3)"
  }
}, s.id), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 600,
    color: "var(--fg-1)"
  }
}, s.title))), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle,
    color: "var(--fg-2)"
  }
}, s.area), /*#__PURE__*/React.createElement("td", {
  style: tdStyle
}, /*#__PURE__*/React.createElement(Badge, {
  tone: s.status,
  dot: true
}, s.statusLabel)), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle,
    textAlign: "right",
    fontVariantNumeric: "tabular-nums"
  }
}, s.subjects), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle,
    textAlign: "right",
    color: "var(--fg-3)"
  }
}, s.updated), /*#__PURE__*/React.createElement("td", {
  style: tdStyle
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    height: 22,
    padding: "0 9px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: "var(--fg-2)",
    background: "var(--pixi-cloud)",
    borderRadius: 4
  }
}, s.institution)))))));
const tdStyle = {
  padding: "12px 14px",
  borderBottom: "1px solid var(--border-subtle)",
  verticalAlign: "middle"
};
Object.assign(window, {
  Studies,
  STUDIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Studies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/StudyDetail.jsx
try { (() => {
// StudyDetail — single study page. Header + tabs + subjects table.

const SUBJECTS = [{
  id: "M-014",
  cohort: "03 — vehicle",
  status: "success",
  statusLabel: "Scanned",
  mass: 22.4,
  day: 14,
  sex: "F"
}, {
  id: "M-015",
  cohort: "03 — vehicle",
  status: "success",
  statusLabel: "Scanned",
  mass: 23.1,
  day: 14,
  sex: "F"
}, {
  id: "M-016",
  cohort: "03 — vehicle",
  status: "warn",
  statusLabel: "Queued",
  mass: 21.8,
  day: 14,
  sex: "F"
}, {
  id: "M-017",
  cohort: "04 — 5 mg/kg",
  status: "info",
  statusLabel: "Reviewing",
  mass: 22.0,
  day: 14,
  sex: "M"
}, {
  id: "M-018",
  cohort: "04 — 5 mg/kg",
  status: "success",
  statusLabel: "Scanned",
  mass: 22.7,
  day: 14,
  sex: "M"
}, {
  id: "M-019",
  cohort: "04 — 5 mg/kg",
  status: "warn",
  statusLabel: "Queued",
  mass: 22.5,
  day: 14,
  sex: "M"
}, {
  id: "M-020",
  cohort: "05 — 15 mg/kg",
  status: "danger",
  statusLabel: "Failed QC",
  mass: 21.2,
  day: 14,
  sex: "F"
}, {
  id: "M-021",
  cohort: "05 — 15 mg/kg",
  status: "success",
  statusLabel: "Scanned",
  mass: 23.4,
  day: 14,
  sex: "F"
}];
const Tab = ({
  children,
  active,
  onClick,
  count
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    height: 38,
    padding: "0 14px",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${active ? "var(--pixi-navy)" : "transparent"}`,
    color: active ? "var(--pixi-navy)" : "var(--fg-2)",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: active ? 600 : 500,
    cursor: "pointer",
    marginBottom: -1,
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  }
}, children, count != null && /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 11,
    color: "var(--fg-3)",
    fontFamily: "var(--font-mono)",
    background: "var(--pixi-cloud)",
    padding: "1px 6px",
    borderRadius: 4
  }
}, count));
const StudyDetail = ({
  study,
  onOpenSubject,
  onBack
}) => {
  const [tab, setTab] = React.useState("subjects");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 32px 0",
      background: "#fff",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    mono: true
  }, study.id), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-4)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement(Eyebrow, null, study.area), /*#__PURE__*/React.createElement(Badge, {
    tone: study.status,
    dot: true
  }, study.statusLabel)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: "-0.01em"
    }
  }, study.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 10,
      color: "var(--fg-3)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: study.team,
    size: 20
  }), " ", study.team.length, " collaborators"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Created Apr 02, 2026"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "updated ", study.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "users"
  }, "Share"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "play"
  }, "Run analysis"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      padding: "12px 0"
    }
  }, [["Subjects", study.subjects], ["Scans", study.scans], ["Lead", study.lead]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums"
    }
  }, v))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 7
    }
  }, "Modalities"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, (study.modalities || []).map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--pixi-navy)",
      background: "var(--pixi-navy-soft)",
      borderRadius: 5,
      padding: "3px 9px",
      lineHeight: 1.4
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid transparent"
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    active: tab === "overview",
    onClick: () => setTab("overview")
  }, "Overview"), /*#__PURE__*/React.createElement(Tab, {
    active: tab === "subjects",
    onClick: () => setTab("subjects"),
    count: SUBJECTS.length
  }, "Subjects"), /*#__PURE__*/React.createElement(Tab, {
    active: tab === "imaging",
    onClick: () => setTab("imaging"),
    count: 96
  }, "Imaging"), /*#__PURE__*/React.createElement(Tab, {
    active: tab === "files",
    onClick: () => setTab("files"),
    count: 42
  }, "Files"), /*#__PURE__*/React.createElement(Tab, {
    active: tab === "activity",
    onClick: () => setTab("activity")
  }, "Activity"), /*#__PURE__*/React.createElement(Tab, {
    active: tab === "settings",
    onClick: () => setTab("settings")
  }, "Settings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 32px"
    }
  }, tab === "subjects" && /*#__PURE__*/React.createElement(SubjectsTable, {
    rows: SUBJECTS,
    onOpen: onOpenSubject
  }), tab === "overview" && /*#__PURE__*/React.createElement(Overview, {
    study: study
  }), tab !== "subjects" && tab !== "overview" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: "center",
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: 8,
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 32,
    color: "var(--pixi-mist)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontWeight: 600,
      color: "var(--fg-2)"
    }
  }, tab[0].toUpperCase() + tab.slice(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, "Tab content not part of this kit."))));
};
const Overview = ({
  study
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: "1px solid var(--border-subtle)",
    borderRadius: 8,
    padding: 20
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Protocol summary"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "10px 0 0",
    fontSize: 14,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    maxWidth: 560
  }
}, "Three cohorts (vehicle, 5 mg/kg, 15 mg/kg) of female and male C57BL/6 mice (n = 8 per cohort) receive single IV dose of compound. PET/CT imaging at baseline, day 7, and day 14. Endpoint: biodistribution analysis at day 28."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginTop: 20,
    paddingTop: 16,
    borderTop: "1px solid var(--border-subtle)"
  }
}, /*#__PURE__*/React.createElement(KV, {
  label: "Species",
  value: "Mus musculus"
}), /*#__PURE__*/React.createElement(KV, {
  label: "Strain",
  value: "C57BL/6J"
}), /*#__PURE__*/React.createElement(KV, {
  label: "Modality",
  value: "PET / CT"
}), /*#__PURE__*/React.createElement(KV, {
  label: "Tracer",
  value: "89Zr-DFO-mAb",
  mono: true
}), /*#__PURE__*/React.createElement(KV, {
  label: "Compound",
  value: "GLP-1 RA #04",
  mono: true
}), /*#__PURE__*/React.createElement(KV, {
  label: "Reviewer",
  value: "J. Park"
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: "1px solid var(--border-subtle)",
    borderRadius: 8,
    padding: 20
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Recent activity"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginTop: 12
  }
}, [["EH", "queued reconstruction for cohort 03", "2 h"], ["JP", "added comment on M-017", "yesterday"], ["RA", "uploaded 12 DICOM files", "2 d"], ["EH", "locked cohort 02", "Apr 24"]].map(([who, what, when], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: who,
  size: 24
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    fontSize: 13,
    color: "var(--fg-2)",
    lineHeight: 1.4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-1)",
    fontWeight: 600
  }
}, who), " ", what, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--fg-3)",
    marginTop: 2
  }
}, when, " ago")))))));
const KV = ({
  label,
  value,
  mono
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 3
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    color: "var(--fg-1)"
  }
}, value));
const SubjectsTable = ({
  rows,
  onOpen
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: "1px solid var(--border-subtle)",
    borderRadius: 8,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderBottom: "1px solid var(--border-subtle)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 600
  }
}, rows.length, " subjects"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "sm",
  icon: "sliders"
}, "Filter"), /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "sm",
  icon: "plus"
}, "Add subject"))), /*#__PURE__*/React.createElement("table", {
  style: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "var(--font-sans)",
    fontSize: 13
  }
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, [["Subject", "l"], ["Cohort", "l"], ["Status", "l"], ["Sex", "c"], ["Mass (g)", "r"], ["Day", "r"], ["", ""]].map(([h, a], i) => /*#__PURE__*/React.createElement("th", {
  key: i,
  style: {
    textAlign: a === "r" ? "right" : a === "c" ? "center" : "left",
    padding: "10px 16px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    background: "var(--pixi-paper)",
    borderBottom: "1px solid var(--border-subtle)"
  }
}, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => /*#__PURE__*/React.createElement("tr", {
  key: s.id,
  onClick: () => onOpen(s),
  style: {
    cursor: "pointer"
  },
  onMouseEnter: e => e.currentTarget.style.background = "var(--pixi-paper)",
  onMouseLeave: e => e.currentTarget.style.background = "#fff"
}, /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle2,
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    color: "var(--fg-1)"
  }
}, s.id), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle2,
    color: "var(--fg-2)"
  }
}, s.cohort), /*#__PURE__*/React.createElement("td", {
  style: tdStyle2
}, /*#__PURE__*/React.createElement(Badge, {
  tone: s.status,
  dot: true
}, s.statusLabel)), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle2,
    textAlign: "center",
    color: "var(--fg-2)"
  }
}, s.sex), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle2,
    textAlign: "right",
    fontVariantNumeric: "tabular-nums",
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, s.mass.toFixed(1)), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle2,
    textAlign: "right",
    fontVariantNumeric: "tabular-nums"
  }
}, s.day), /*#__PURE__*/React.createElement("td", {
  style: {
    ...tdStyle2,
    width: 32
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "chevronRight",
  size: 16,
  color: "var(--fg-4)"
})))))));
const tdStyle2 = {
  padding: "12px 16px",
  borderBottom: "1px solid var(--border-subtle)",
  verticalAlign: "middle"
};
Object.assign(window, {
  StudyDetail,
  SUBJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/StudyDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Topbar.jsx
try { (() => {
// Topbar — search, breadcrumbs, "+ New", notifications.

const Crumbs = ({
  items,
  onNavigate
}) => /*#__PURE__*/React.createElement("nav", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
    color: "var(--fg-3)"
  }
}, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, i > 0 && /*#__PURE__*/React.createElement(Icon, {
  name: "chevronRight",
  size: 14,
  color: "var(--fg-4)"
}), /*#__PURE__*/React.createElement("button", {
  onClick: () => onNavigate?.(item),
  style: {
    background: "transparent",
    border: "none",
    padding: 0,
    color: i === items.length - 1 ? "var(--fg-1)" : "var(--fg-3)",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: i === items.length - 1 ? 600 : 500,
    cursor: "pointer"
  }
}, item.label))));
const Topbar = ({
  crumbs = [],
  onNavigate,
  onNewStudy,
  showCrumbs = true
}) => {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      flexShrink: 0,
      borderBottom: "1px solid var(--border-subtle)",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      gap: 16
    }
  }, showCrumbs && /*#__PURE__*/React.createElement(Crumbs, {
    items: crumbs,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 34,
      padding: "0 12px",
      background: "var(--pixi-paper)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 6,
      width: 320
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--fg-3)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search studies, subjects, files\u2026",
    style: {
      flex: 1,
      border: "none",
      background: "transparent",
      outline: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)",
      padding: "1px 6px",
      borderRadius: 3,
      border: "1px solid var(--border-subtle)",
      background: "#fff"
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: onNewStudy
  }, "Submit dataset"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 6,
      border: "1px solid var(--border-subtle)",
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "var(--fg-2)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--pixi-yellow)"
    }
  })));
};
Object.assign(window, {
  Topbar,
  Crumbs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Workbench.jsx
try { (() => {
// Workbench — imaging viewer placeholder (left toolbar + main canvas + right panel)

const Workbench = () => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      flexShrink: 0,
      background: "#fff",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      padding: "10px 0"
    }
  }, ["zoomIn", "zoomOut", "layers", "sliders", "activity"].map((n, i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    style: {
      width: 36,
      height: 36,
      borderRadius: 6,
      border: "none",
      background: i === 0 ? "var(--pixi-navy-soft)" : "transparent",
      color: i === 0 ? "var(--pixi-navy)" : "var(--fg-2)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--pixi-ink)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 44,
      zIndex: 2,
      background: "rgba(10,10,11,.72)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: 14,
      color: "#fff",
      fontSize: 13,
      borderBottom: "1px solid rgba(255,255,255,.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,.7)"
    }
  }, "PXI-2412-A \xB7 M-018 \xB7 day 14"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.4)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "PET / CT"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,.7)"
    }
  }, "slice 124 / 248")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at 50% 45%, #2a2c31 0%, #0A0A0B 70%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "radial-gradient(circle at 45% 40%, #6B6E76 0%, #3D3F44 35%, #1A1B1E 70%)",
      border: "1px dashed rgba(255,255,255,.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,.4)",
      fontSize: 12,
      fontFamily: "var(--font-mono)"
    }
  }, "slice viewer placeholder")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 44,
      zIndex: 2,
      background: "rgba(10,10,11,.72)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: 16,
      color: "#fff",
      fontSize: 13,
      borderTop: "1px solid rgba(255,255,255,.08)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: iconBtnDark
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,.7)"
    }
  }, "00:14 / 02:02"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      background: "rgba(255,255,255,.1)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "12%",
      background: "var(--pixi-yellow)",
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,.7)"
    }
  }, "0.40 mm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      flexShrink: 0,
      background: "#fff",
      borderLeft: "1px solid var(--border-subtle)",
      padding: 16,
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Layers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginTop: 8
    }
  }, [["CT — anatomy", true], ["PET — uptake", true], ["ROI — liver", true], ["ROI — kidney", false], ["Annotations", false]].map(([label, on]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 8px",
      borderRadius: 4,
      background: on ? "var(--pixi-paper)" : "transparent",
      fontSize: 13,
      color: on ? "var(--fg-1)" : "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: on ? "var(--pixi-green)" : "var(--pixi-mist)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Window / level"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(KV3, {
    label: "W",
    value: "380"
  }), /*#__PURE__*/React.createElement(KV3, {
    label: "L",
    value: "40"
  }), /*#__PURE__*/React.createElement(KV3, {
    label: "SUVmax",
    value: "6.21"
  }), /*#__PURE__*/React.createElement(KV3, {
    label: "SUVmean",
    value: "2.04"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Reconstruction"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: "var(--fg-2)",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "Method"), " \u2014 OSEM 3D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "Iterations"), " \u2014 4 \xD7 16"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "Filter"), " \u2014 Gaussian 2 mm"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "Version"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "v 2.4.1"))))));
};
const KV3 = ({
  label,
  value
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--pixi-paper)",
    border: "1px solid var(--border-subtle)",
    borderRadius: 6,
    padding: "8px 10px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 600,
    fontVariantNumeric: "tabular-nums",
    marginTop: 2
  }
}, value));
const iconBtnDark = {
  width: 28,
  height: 28,
  borderRadius: 4,
  border: "none",
  background: "rgba(255,255,255,.08)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
Object.assign(window, {
  Workbench
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Workbench.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // Hide the toggle until the host has actually enabled the rail (the
  // __omelette_rail_enabled window message, posted only when the
  // omelette_deck_rail_enabled flag is on for this user). The initial read
  // covers TweaksPanel mounting after the message already arrived; the
  // listener covers the common case of mounting first.
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/ui.jsx
try { (() => {
// Shared UI primitives: tokens via CSS vars, simple, neat.
// Usage: load AFTER React via <script type="text/babel" src="ui.jsx"></script>.

const PixiMark = ({
  size = 28
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 100 100",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M50 8a42 42 0 1 0 42 42h-12a30 30 0 1 1-30-30Z",
  fill: "#1E3C87"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "36",
  cy: "50",
  r: "14",
  fill: "#3CB44B"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "50",
  r: "10",
  fill: "#FFFFFF"
}), /*#__PURE__*/React.createElement("path", {
  d: "M58 38a12 12 0 0 1 0 24Z",
  fill: "#FFC30F"
}));
const Logo = ({
  size = 28,
  showWordmark = true
}) => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/pixi-logo-wide.png",
  alt: "PIXI Center",
  style: {
    height: size,
    width: "auto",
    display: "block"
  }
});

// --- Lucide-style icons (1.5 stroke) ---
const Icon = ({
  name,
  size = 18,
  color = "currentColor"
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  };
  const paths = {
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    flask: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14h10"
    })),
    library: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M9 21V9"
    })),
    image: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 15-5-5L5 21"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 21a2 2 0 0 0 4 0"
    })),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    })),
    folder: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    })),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    })),
    list: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "6",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "18",
      r: "1"
    })),
    chevronDown: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })),
    chevronRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })),
    close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"
    })),
    activity: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })),
    queue: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    play: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    })),
    zoomIn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      y1: "8",
      x2: "11",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })),
    zoomOut: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })),
    layers: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 17 12 22 22 17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 12 12 17 22 12"
    })),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    moreHorizontal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1"
    })),
    sliders: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", props, paths[name] || null);
};

// --- Button ---
const Button = ({
  children,
  variant = "secondary",
  size = "md",
  icon,
  onClick,
  type = "button",
  disabled
}) => {
  const sizes = {
    sm: {
      h: 28,
      px: 10,
      fs: 13,
      gap: 6,
      ic: 14
    },
    md: {
      h: 36,
      px: 14,
      fs: 14,
      gap: 8,
      ic: 16
    },
    lg: {
      h: 44,
      px: 18,
      fs: 15,
      gap: 10,
      ic: 18
    }
  };
  const s = sizes[size];
  const variants = {
    primary: {
      bg: "var(--pixi-navy)",
      color: "#fff",
      border: "transparent",
      hover: "var(--pixi-navy-deep)"
    },
    secondary: {
      bg: "#fff",
      color: "var(--pixi-ink)",
      border: "var(--border-default)",
      hover: "var(--pixi-cloud)"
    },
    ghost: {
      bg: "transparent",
      color: "var(--pixi-ink)",
      border: "transparent",
      hover: "var(--pixi-cloud)"
    },
    danger: {
      bg: "#fff",
      color: "var(--danger)",
      border: "#F0BBB6",
      hover: "var(--danger-bg)"
    }
  };
  const v = variants[variant];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: 500,
      borderRadius: 6,
      border: `1px solid ${v.border}`,
      background: hover && !disabled ? v.hover : v.bg,
      color: v.color,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 120ms",
      whiteSpace: "nowrap"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: s.ic
  }), children);
};

// --- Badge / status pill ---
const Badge = ({
  children,
  tone = "neutral",
  dot
}) => {
  const tones = {
    success: {
      bg: "var(--pixi-green-soft)",
      color: "var(--pixi-green-deep)",
      dot: "var(--pixi-green)"
    },
    warn: {
      bg: "var(--pixi-yellow-soft)",
      color: "#8C6A00",
      dot: "var(--pixi-yellow)"
    },
    info: {
      bg: "var(--pixi-navy-soft)",
      color: "var(--pixi-navy)",
      dot: "var(--pixi-navy)"
    },
    danger: {
      bg: "var(--danger-bg)",
      color: "var(--danger)",
      dot: "var(--danger)"
    },
    neutral: {
      bg: "var(--pixi-cloud)",
      color: "var(--pixi-graphite)",
      dot: "var(--pixi-steel)"
    },
    outline: {
      bg: "#fff",
      color: "var(--fg-2)",
      dot: "var(--pixi-steel)",
      border: "var(--border-default)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 10px",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 999,
      background: t.bg,
      color: t.color,
      border: t.border ? `1px solid ${t.border}` : "1px solid transparent",
      whiteSpace: "nowrap"
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot
    }
  }), children);
};

// --- Avatar ---
const Avatar = ({
  initials,
  size = 28,
  color
}) => {
  const colors = ["#1E3C87", "#3D3F44", "#2F8E3B", "#8C6A00"];
  const c = color || colors[(initials.charCodeAt(0) || 0) % colors.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: c,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: size * 0.38,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, initials);
};
const AvatarStack = ({
  people,
  max = 4,
  size = 24
}) => {
  const shown = people.slice(0, max);
  const overflow = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i ? -8 : 0,
      border: "2px solid #fff",
      borderRadius: "50%",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: p,
    size: size
  }))), overflow > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -8,
      border: "2px solid #fff",
      borderRadius: "50%",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: `+${overflow}`,
    size: size,
    color: "#9DA1AA"
  })));
};

// --- Field (text input + label) ---
const Field = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text"
}) => {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--fg-2)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || "",
    onChange: e => onChange?.(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 36,
      padding: "0 12px",
      borderRadius: 6,
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--pixi-navy)" : "var(--border-default)"}`,
      boxShadow: focus ? "0 0 0 3px rgba(30,60,135,.20)" : "none",
      background: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg-1)",
      outline: "none"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--danger)"
    }
  }, error));
};

// --- Eyebrow / label ---
const Eyebrow = ({
  children,
  mono
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, children);
Object.assign(window, {
  PixiMark,
  Logo,
  Icon,
  Button,
  Badge,
  Avatar,
  AvatarStack,
  Field,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/ui.jsx", error: String((e && e.message) || e) }); }

})();
