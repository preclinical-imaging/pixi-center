// Shared UI primitives: tokens via CSS vars, simple, neat.
// Usage: load AFTER React via <script type="text/babel" src="ui.jsx"></script>.

const PixiMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    {/* Open C ring — navy */}
    <path d="M50 8a42 42 0 1 0 42 42h-12a30 30 0 1 1-30-30Z" fill="#1E3C87" />
    {/* Green crescent inside */}
    <circle cx="36" cy="50" r="14" fill="#3CB44B" />
    <circle cx="40" cy="50" r="10" fill="#FFFFFF" />
    {/* Yellow half disc */}
    <path d="M58 38a12 12 0 0 1 0 24Z" fill="#FFC30F" />
  </svg>
);

const Logo = ({ size = 28, showWordmark = true }) => (
  <img
    src={(window.__resources && window.__resources.logoWide) || "../assets/pixi-logo-wide.png"}
    alt="PIXI Center"
    style={{ height: size, width: "auto", display: "block" }}
  />
);

// --- Lucide-style icons (1.5 stroke) ---
const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { flexShrink: 0 },
  };
  const paths = {
    search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    flask: <><path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3" /><path d="M7 14h10" /></>,
    library: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    bell: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    folder: <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    list: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></>,
    chevronDown: <><polyline points="6 9 12 15 18 9" /></>,
    chevronRight: <><polyline points="9 18 15 12 9 6" /></>,
    close: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    home: <><path d="M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" /></>,
    activity: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
    queue: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    play: <><polygon points="5 3 19 12 5 21 5 3" /></>,
    zoomIn: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></>,
    zoomOut: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><line x1="8" y1="11" x2="14" y2="11" /></>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
    moreHorizontal: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    sliders: <><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>,
    check: <><polyline points="20 6 9 17 4 12" /></>,
  };
  return <svg {...props}>{paths[name] || null}</svg>;
};

// --- Button ---
const Button = ({ children, variant = "secondary", size = "md", icon, onClick, type = "button", disabled }) => {
  const sizes = {
    sm: { h: 28, px: 10, fs: 13, gap: 6, ic: 14 },
    md: { h: 36, px: 14, fs: 14, gap: 8, ic: 16 },
    lg: { h: 44, px: 18, fs: 15, gap: 10, ic: 18 },
  };
  const s = sizes[size];
  const variants = {
    primary: { bg: "var(--pixi-navy)", color: "#fff", border: "transparent", hover: "var(--pixi-navy-deep)" },
    secondary: { bg: "#fff", color: "var(--pixi-ink)", border: "var(--border-default)", hover: "var(--pixi-cloud)" },
    ghost: { bg: "transparent", color: "var(--pixi-ink)", border: "transparent", hover: "var(--pixi-cloud)" },
    danger: { bg: "#fff", color: "var(--danger)", border: "#F0BBB6", hover: "var(--danger-bg)" },
  };
  const v = variants[variant];
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: s.gap,
        height: s.h, padding: `0 ${s.px}px`,
        fontFamily: "var(--font-sans)", fontSize: s.fs, fontWeight: 500,
        borderRadius: 6, border: `1px solid ${v.border}`,
        background: hover && !disabled ? v.hover : v.bg,
        color: v.color,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background 120ms",
        whiteSpace: "nowrap",
      }}
    >
      {icon && <Icon name={icon} size={s.ic} />}
      {children}
    </button>
  );
};

// --- Badge / status pill ---
const Badge = ({ children, tone = "neutral", dot }) => {
  const tones = {
    success: { bg: "var(--pixi-green-soft)", color: "var(--pixi-green-deep)", dot: "var(--pixi-green)" },
    warn:    { bg: "var(--pixi-yellow-soft)", color: "#8C6A00", dot: "var(--pixi-yellow)" },
    info:    { bg: "var(--pixi-navy-soft)", color: "var(--pixi-navy)", dot: "var(--pixi-navy)" },
    danger:  { bg: "var(--danger-bg)", color: "var(--danger)", dot: "var(--danger)" },
    neutral: { bg: "var(--pixi-cloud)", color: "var(--pixi-graphite)", dot: "var(--pixi-steel)" },
    outline: { bg: "#fff", color: "var(--fg-2)", dot: "var(--pixi-steel)", border: "var(--border-default)" },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      height: 22, padding: "0 10px",
      fontSize: 12, fontWeight: 600,
      borderRadius: 999, background: t.bg, color: t.color,
      border: t.border ? `1px solid ${t.border}` : "1px solid transparent",
      whiteSpace: "nowrap",
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.dot }} />}
      {children}
    </span>
  );
};

// --- Avatar ---
const Avatar = ({ initials, size = 28, color }) => {
  const colors = ["#1E3C87", "#3D3F44", "#2F8E3B", "#8C6A00"];
  const c = color || colors[(initials.charCodeAt(0) || 0) % colors.length];
  return (
    <span style={{
      width: size, height: size, borderRadius: "50%",
      background: c, color: "#fff",
      fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: size * 0.38,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>{initials}</span>
  );
};

const AvatarStack = ({ people, max = 4, size = 24 }) => {
  const shown = people.slice(0, max);
  const overflow = people.length - shown.length;
  return (
    <span style={{ display: "inline-flex" }}>
      {shown.map((p, i) => (
        <span key={i} style={{ marginLeft: i ? -8 : 0, border: "2px solid #fff", borderRadius: "50%", display: "inline-flex" }}>
          <Avatar initials={p} size={size} />
        </span>
      ))}
      {overflow > 0 && (
        <span style={{ marginLeft: -8, border: "2px solid #fff", borderRadius: "50%", display: "inline-flex" }}>
          <Avatar initials={`+${overflow}`} size={size} color="#9DA1AA" />
        </span>
      )}
    </span>
  );
};

// --- Field (text input + label) ---
const Field = ({ label, value, onChange, placeholder, error, type = "text" }) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-2)" }}>{label}</span>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          height: 36, padding: "0 12px", borderRadius: 6,
          border: `1px solid ${error ? "var(--danger)" : focus ? "var(--pixi-navy)" : "var(--border-default)"}`,
          boxShadow: focus ? "0 0 0 3px rgba(30,60,135,.20)" : "none",
          background: "#fff",
          fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-1)",
          outline: "none",
        }}
      />
      {error && <span style={{ fontSize: 12, color: "var(--danger)" }}>{error}</span>}
    </label>
  );
};

// --- Eyebrow / label ---
const Eyebrow = ({ children, mono }) => (
  <div style={{
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: 11, fontWeight: 600,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--fg-3)",
  }}>{children}</div>
);

Object.assign(window, { PixiMark, Logo, Icon, Button, Badge, Avatar, AvatarStack, Field, Eyebrow });
