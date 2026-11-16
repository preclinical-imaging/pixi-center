# PIXI Center — Web app UI kit

A high-fidelity, click-thru recreation of the PIXI Center collaborative web app for preclinical researchers. Built using the tokens in `../../colors_and_type.css`.

## Surfaces

- **Studies** — list / library of all studies the user has access to (default landing).
- **Study detail** — a single study with cohorts, subjects, sessions, files, collaborators.
- **Inspector / drawer** — right-hand panel for subject metadata (opens in-context).

## Components

| File | What |
|---|---|
| `App.jsx` | Top-level shell — sidebar + topbar + routed view |
| `Studies.jsx` | Study library (cards + table view toggle) |
| `StudyDetail.jsx` | Single-study page (subjects table, sidebar tabs) |
| `Inspector.jsx` | Right drawer panel for subject metadata |
| `SubmitDataset.jsx` | Dataset proposal form (Contact / Publication Details / Data Collection Details) |