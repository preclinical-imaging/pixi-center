# PIXI Center

Front end for **PIXI Center**, a collaborative platform for preclinical imaging researchers (in vivo imaging, biodistribution, animal model research, translational science). The site lets visitors browse public imaging datasets, read about the project, contact the team, and propose a dataset for inclusion.

The visual language is documented in [`DESIGN.md`](DESIGN.md) and implemented in [`colors_and_type.css`](colors_and_type.css).

## Pages

| Path | Source | Purpose |
|---|---|---|
| `/home` | `home/Home.jsx` | Public landing page (`/` redirects here) |
| `/about` | `about/About.jsx` | About PIXI Center |
| `/about/data-use-terms.html` | `about/DataUseTerms.jsx` | Data use terms (CIRP Resource Sharing Policy) |
| `/contact` | `contact/Contact.jsx` | Contact form with captcha |
| `/submit-dataset` | `submit-dataset/SubmitDataset.jsx` | Dataset proposal form |
| `/ui_kits/web_app/` | `ui_kits/web_app/` | Study library, study detail, subject inspector |

## Directory layout

```
.
├── colors_and_type.css   Design tokens (color, type, spacing, radii, shadows, motion)
├── home/ about/ contact/ submit-dataset/
│                         One folder per page: index.html + a React component
├── ui_kits/web_app/      Study browser UI and the Node server (server.js)
├── utils/                Shared code: ui.jsx, charts.jsx, site-chrome.jsx, studies-data.jsx
├── files/                Downloadable files for each study
├── assets/               Logos, brand mark, file-type icons
├── preview/              Specimen cards for tokens and components
├── screenshots/          Reference screenshots
└── _adherence.oxlintrc.json   Lint rules enforcing the design system
```

`uploads/` holds the original logo source files.

## How it's built

There is no build step or package manager. Each page's `index.html` loads React 18 and Babel Standalone from unpkg (pinned, with integrity hashes), then loads the shared `utils/*.jsx` files and the page component as `text/babel` scripts. Scripts use root-absolute paths such as `/utils/ui.jsx`, so pages must be served from the repo root rather than opened from disk.

## Running locally

Requires **Node 22.5 or later** (for the built-in `node:sqlite` module). No `npm install` needed.

```
node ui_kits/web_app/server.js
```

Then open `http://localhost:8787/`. The server serves the repo root as static files and provides the API below.

| Endpoint | Purpose |
|---|---|
| `POST /api/submissions` | Stores a dataset proposal in `ui_kits/web_app/submissions.db` (SQLite, git-ignored) and sends notification email |
| `GET /api/captcha` | Issues a captcha challenge for the contact form |
| `POST /api/contact` | Validates the captcha and emails the contact form |

### Configuration

All settings are optional environment variables.

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `8787` | HTTP port |
| `SMTP_HOST` | `localhost` | SMTP relay (plain, unauthenticated, no TLS) |
| `SMTP_PORT` | `25` | SMTP port |
| `EMAIL_FROM` | `no-reply@pixi-center.local` | Sender address |
| `SUBMISSION_CC` | `info@pixi.org` | CC on dataset submissions |
| `CONTACT_TO` | `info@pixi.org` | Recipient of contact form messages |

## Linting

`_adherence.oxlintrc.json` is an [oxlint](https://oxc.rs/docs/guide/usage/linter) config that warns on hard-coded hex colors and on importing component internals. Run it with:

```
npx oxlint -c _adherence.oxlintrc.json
```

## Working with the design system

Before changing UI, read [`DESIGN.md`](DESIGN.md). In short: use tokens from `colors_and_type.css` instead of literal values, keep the interface monochrome with navy, green and yellow accents only where they carry meaning, use sentence case, and use no emoji.