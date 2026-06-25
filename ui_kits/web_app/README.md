# PIXI Center — Web app UI kit

A high-fidelity, click-thru recreation of the PIXI Center collaborative web app for preclinical researchers. Built using the tokens in `../../colors_and_type.css`.

> **Inferred from product description.** No codebase or Figma was provided, so the surface choices below are educated guesses for a preclinical-research collaboration tool. Treat this as a *draft* of the visual language, not a faithful recreation.

## Surfaces

- **Studies** — list / library of all studies the user has access to (default landing).
- **Study detail** — a single study with cohorts, subjects, scans, files, collaborators.
- **Imaging Workbench** — a viewer-style screen for a single imaging session (placeholder image where the slice viewer would go — copy in real screenshots when available).
- **Inspector / drawer** — right-hand panel for subject metadata (opens in-context).

## Components

| File | What |
|---|---|
| `App.jsx` | Top-level shell — sidebar + topbar + routed view |
| `Sidebar.jsx` | Left nav, with logo, sections, user footer |
| `Topbar.jsx` | Search, "+ New", notifications, avatar |
| `Studies.jsx` | Study library (cards + table view toggle) |
| `StudyDetail.jsx` | Single-study page (subjects table, sidebar tabs) |
| `Workbench.jsx` | Imaging workbench placeholder |
| `Inspector.jsx` | Right drawer panel for subject metadata |
| `ui.jsx` | Shared primitives: Button, Badge, Avatar, Icon, Field |

## Run

Open `index.html`. Click between Studies → a study → a subject row to open the inspector. The "Imaging" sidebar item swaps in the Workbench placeholder. Everything is fake state in React.
