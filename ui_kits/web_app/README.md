# PIXI Center — Dataset browser app

Built using the tokens in `/colors_and_type.css`.

## Surfaces

- **Studies** — list / library of all studies accessible by the front end.
- **Study detail** — a single study with cohorts, subjects, sessions, files, collaborators.

## Components

| File | What |
|---|---|
| `App.jsx` | Top-level shell — sidebar + topbar + routed view |
| `Studies.jsx` | Study library (cards + table view toggle) |
| `StudyDetail.jsx` | Single-study page (subjects table, sidebar tabs) |
