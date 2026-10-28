# PIXI Center — Web app UI kit

A high-fidelity, click-thru recreation of the PIXI Center collaborative web app for preclinical researchers. Built using the tokens in `../../colors_and_type.css`.

## Surfaces

- **Studies** — list / library of all studies the user has access to (default landing).
- **Study detail** — a single study with cohorts, subjects, scans, files, collaborators.
- **Inspector / drawer** — right-hand panel for subject metadata (opens in-context).

## Components

| File | What |
|---|---|
| `App.jsx` | Top-level shell — sidebar + topbar + routed view |
| `Studies.jsx` | Study library (cards + table view toggle) |
| `StudyDetail.jsx` | Single-study page (subjects table, sidebar tabs) |
| `Inspector.jsx` | Right drawer panel for subject metadata |
| `SubmitDataset.jsx` | Dataset proposal form (Contact / Publication Details / Data Collection Details) |
| `server.js` | Static file server + `POST /api/submissions`, persisted to `submissions.db` via SQLite |

## Run

Open `index.html` directly for click-thru browsing — everything except dataset submission is fake state in React. Click between Studies → a study → a subject row to open the inspector. 

To exercise the "Submit a dataset" form's real persistence, run the bundled server instead (requires Node 22.5+, for the built-in `node:sqlite` module — no `npm install` needed):

```
node ui_kits/web_app/server.js
```

Then open `http://localhost:8787/ui_kits/web_app/index.html`. Submitting the form writes a row to `ui_kits/web_app/submissions.db` (a `submissions` table, created on first run, with one column per form field plus `id`, `status`, and `url`).
