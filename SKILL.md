---
name: pixi-center-design
description: Use this skill to generate well-branded interfaces and assets for PIXI Center (a collaborative platform for preclinical researchers), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `DESIGN.md` in this skill for the full design guidelines (voice, color, type, spacing, motion, iconography), then explore the other available files. Read `README.md` for project structure and how the site runs.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- Tokens: `colors_and_type.css` (colors, type, spacing, radii, shadows, motion).
- Logo: `assets/pixi-center-logo.png`, `assets/pixi-mark.svg`.
- Voice: precise, factual, peer-to-peer scientific. No emoji. Sentence case for UI.
- Color: monochrome foundation; navy / green / yellow accents only when they earn the pixels.
- Type: Inter Tight (headings), Inter (body/UI), JetBrains Mono (IDs, code, numeric readouts).
- Icons: Lucide, 1.5 px stroke, `currentColor`.
- Pages: `home/`, `about/`, `contact/`, `submit-dataset/`; each has `index.html` + a React component. Shared code is in `utils/`.
- UI kit: `ui_kits/web_app/`: study library, study detail, inspector. `index.html` runs the click-thru.
- Lint: `_adherence.oxlintrc.json` flags hard-coded hex colors and component-internal imports.