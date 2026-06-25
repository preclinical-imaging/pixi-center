# PIXI Center Design System

A design system for **PIXI Center** — a collaborative platform for preclinical researchers (in vivo imaging, biodistribution studies, animal model research, and translational science workflows).

This system is built around a calm, monochrome scientific foundation (black, white, and light gray) accented with the three colors lifted directly from the PIXI Center logo: **navy**, **green**, and **yellow**. The result reads as modern lab software — quiet, instrument-grade, trustworthy — with just enough color to mark status, highlight findings, and carry brand recognition.

> **Note on sources.** The only artifact provided was `uploads/pixi-center-logo.png`. There is no codebase, Figma file, or product screenshots to reference, so the visual language, content tone, and UI kit below are inferred from the logo + product description (preclinical research collaboration). **Please review and flag anything that doesn't match the actual product** — see *Caveats* at the bottom.

---

## Index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← agent skill descriptor
├── colors_and_type.css        ← all CSS variables (color, type, spacing, radii, shadows, motion)
├── assets/                    ← logos & brand marks
│   ├── pixi-center-logo.png   ← full color, on light bg
│   └── pixi-mark.svg          ← isolated "C" mark
├── fonts/                     ← (Google Fonts via CDN — see Type)
├── preview/                   ← cards rendered in the Design System tab
└── ui_kits/
    └── web_app/               ← PIXI Center collaboration web app
        ├── README.md
        ├── index.html         ← interactive click-thru prototype
        └── *.jsx              ← component recreations
```

---

## Brand at a glance

**PIXI Center** is a collaborative platform for **preclinical researchers** — scientists working with animal models, imaging studies (PET/SPECT/CT/MRI/optical), pharmacokinetics, and biodistribution data before a compound or device reaches human trials. The audience is technical: PhD-level scientists, lab managers, study directors, regulatory specialists.

The brand voice should match the audience: **precise, evidence-based, collaborative, never gimmicky.** Software for serious work that treats its users as experts.

---

## Content Fundamentals

**Voice.** Clear, factual, collaborative. Treat the reader as a peer scientist — no hand-holding, no marketing flourish, no "magic." Lead with the noun ("Study," "Cohort," "Imaging session"), let verbs be precise ("Assign," "Annotate," "Reconstruct," "Export").

**Tense & person.** Second person ("you") in instructional copy and tooltips. First-person plural ("we") only in announcements from the PIXI team. Avoid "I" outside testimonials.

**Casing.**
- **Sentence case** for buttons, headings, menu items, dialogs. ("Create new study", not "Create New Study").
- **Title Case** is reserved for **proper nouns** of features and product surfaces ("Imaging Workbench", "Study Library").
- **UPPERCASE with letter-spacing** for short eyebrow labels and table headers ("STUDY", "SUBJECTS", "STATUS").
- **Code / IDs** stay in monospace, exact case ("PXI-2412-A").

**Numbers & units.** Always include units. Use SI by default (mg/kg, mL, μm, MBq). Significant figures matter — show what the instrument reports, don't round silently. Use thin-space or comma thousands ("12,400 events", "n = 24").

**Tone examples — do this:**
- "12 subjects assigned. 3 awaiting baseline scan."
- "Reconstruction queued — typical wait is 4–6 minutes."
- "Reviewer required before this cohort can be locked."
- "No imaging data yet. Upload DICOM, NIfTI, or vendor-native files to begin."

**Tone — avoid this:**
- ~~"Let's get those subjects sorted! 🐭"~~ (gimmicky, emoji)
- ~~"Awesome! Your study is live."~~ ("awesome" — too casual)
- ~~"Click here to magically reconstruct your data."~~ ("magically" — undersells expertise)

**Emoji.** **Not used.** PIXI Center is scientific software; emoji read as unserious. The only acceptable visual accents are the brand colors (green for positive/complete, yellow for in-progress/attention, navy for primary/info) and a tight icon set.

**Disclosure & rigor.** When showing a result, also show its provenance: who, when, what method, what version. Empty states should *teach the next step*, not apologize. Errors should name the cause and the fix.

---

## Visual Foundations

### Color
- **Foundation: monochrome.** Surfaces are white or near-white (`#FFFFFF`, `#F7F8F9`). Text is near-black (`#1A1B1E`). Borders and dividers are warm grays (`#E4E6EA`, `#C9CCD2`). The interface should be readable as a black-and-white printout.
- **Accents are sparing.** Navy is the only "interactive" color (links, primary buttons, focus rings). Green = success / data complete. Yellow = warning / attention / in-progress. Saturated brand colors should never exceed ~10% of the visible pixels on any screen.
- **No gradients on UI surfaces.** No bluish-purple gradients. No glassmorphism. The only acceptable gradient is a subtle protection scrim over photography.
- **Color of imagery.** When photographic imagery is used (rare — most surfaces are data and chrome), prefer **cool, slightly desaturated** clinical/lab tones. Avoid warm "lifestyle" stock photography.

### Typography
- **Display & Headings:** *Inter Tight* — a modern sans with tight, slightly compressed metrics that reads as engineered/scientific. Used for h1–h5, page titles, big numbers in dashboards.
- **Body & UI:** *Inter* — neutral, highly legible at small sizes. Used for body, labels, table cells, buttons.
- **Mono:** *JetBrains Mono* — for IDs (e.g., `PXI-2412-A`), code, file paths, exact numeric readouts.
- **Scale is modular** (12 / 13 / 14 / 16 / 18 / 20 / 24 / 30 / 38 / 48 / 64). Never invent a one-off size.
- **Tracking** is tightened on display sizes (`-0.02em`) and widened on uppercase eyebrows (`+0.12em`).

> ⚠️ **Font substitution flag.** No font files were provided. *Inter Tight*, *Inter*, and *JetBrains Mono* (all Google Fonts) are used as a strong default for "modern scientific software." If PIXI Center has licensed a different family (e.g., GT America, Söhne, Founders Grotesk, IBM Plex), please supply the files and I'll swap them in.

### Spacing & layout
- **4 px grid.** All spacing is a multiple of 4 (`--sp-1` … `--sp-24`).
- **Generous whitespace** around data tables and headers; tight whitespace inside dense lists and sidebars.
- **Container widths:** content max 1200 px, reading max 720 px, tables full-width.
- **Fixed elements:** top app bar (56 px), left sidebar (240 px collapsed → 64 px), right inspector panel (360 px) when active. Modals center, toasts dock bottom-right.

### Borders, corners, shadows
- **Hairlines, not heavy strokes.** 1 px borders in `--border-subtle` (#E4E6EA) by default.
- **Corner radii** are restrained: `--r-sm` (6 px) for inputs/buttons, `--r-md` (8 px) for cards, `--r-lg` (12 px) for modals. **No pill-shaped CTAs.** Nothing more rounded than 12 px except status pills (which use `--r-pill`).
- **Shadows are minimal.** Cards default to a hairline border, not a shadow. Elevation is reserved for floating things (popovers, dropdowns, modals) and uses small soft shadows — never heavy or colored.
- **No "rounded card with colored left border" pattern.** It reads as legacy Bootstrap. Status is conveyed via a small colored dot or pill, not a border bar.

### Backgrounds & imagery
- **Surfaces are flat.** White cards on `--bg-sunken` (#F7F8F9). No textures, no patterns, no hand-drawn illustrations.
- **Hero imagery,** when used at all, is photographic and clinical (microscopy, instruments, lab benches). Always paired with a subtle dark protection scrim if text overlays it.
- **Empty states** use a small monochrome line illustration or the PIXI mark in `--pixi-mist` — never colorful spot illustrations.

### Motion
- **Subtle and short.** 120 ms for hover/state, 180 ms for layout, 320 ms for entering modals.
- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` (standard) for most things; `cubic-bezier(0.16, 1, 0.3, 1)` for reveal.
- **No bounces, no spring overshoots.** This is scientific software; movement is informational, not playful.
- Fades and small translates only. No flips, no scale-in-from-zero on cards.

### Interaction states
- **Hover** on a button: background darkens by ~one step (`--pixi-navy` → `--pixi-navy-deep`). Hover on a list row: background tints to `--pixi-cloud`. Hover on a link: underline appears.
- **Press** state: same color as hover, plus a subtle inner shadow. **No scale shrink** on press — feels too playful for this product.
- **Focus** is visible and high-contrast: `0 0 0 3px rgba(30, 60, 135, 0.20)` ring + 1 px solid border in `--border-focus`. Keyboard-focus must always be visible (a11y).
- **Disabled** drops opacity to ~50% and removes the focus ring.

### Transparency & blur
- **Transparency** is used only for: scrim overlays on hero imagery, the modal backdrop (`rgba(10, 10, 11, 0.40)`), and disabled-state opacity.
- **Backdrop blur** appears only on the modal backdrop and on a sticky table header when content scrolls beneath it. Never used decoratively.

### Iconography
See **ICONOGRAPHY** below.

---

## Iconography

PIXI Center uses **Lucide** (https://lucide.dev) — open-source, MIT, ~1,400 icons, consistent 1.5 px stroke, neutral geometric style. It pairs cleanly with Inter and reads as scientific/instrumental rather than playful.

- **Stroke weight:** 1.5 px (Lucide default). Never filled icons in primary UI.
- **Sizes:** 16 / 18 / 20 / 24. Buttons use 16 px; nav/sidebar uses 18 px; section headers and empty states use 24 px.
- **Color:** inherit from `currentColor` so icons match their text. Default `--fg-3`. Never apply gradients or multi-color treatment.
- **Usage:** every icon must accompany a text label in primary navigation. Icon-only buttons are reserved for toolbar actions and must have an `aria-label` + tooltip.
- **No emoji.** No unicode pictographs. No inline PNG icons. Use Lucide via the CDN or the Lucide React package.
- **Status dots:** a 6 px solid circle in `--success` / `--warning` / `--info` / `--danger` is the canonical status indicator — used in lists, tables, and headers. They are *not* icons.
- **The PIXI mark itself** (the open "C" enclosing a green crescent and yellow dot) is a brand asset, not an icon — only used for the logo lockup, app launcher tile, and favicon.

> ⚠️ **Substitution flag.** Without seeing the live product, I'm assuming PIXI Center does *not* already have a custom icon font. If it does, please share the SVG sprite or the icon source and I'll replace Lucide with the real set.

---

## Caveats & open questions

See *Caveats* at the bottom of this doc and the asks at the end of the chat.

---

## See also

- `colors_and_type.css` — every token in code form, ready to copy into a project.
- `preview/` — the rendered cards on the Design System tab.
- `ui_kits/web_app/` — interactive prototype of the collaboration app, built from this system.
- `SKILL.md` — agent skill descriptor (use this with Claude Code).
