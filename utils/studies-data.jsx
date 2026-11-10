// Generic location to pull data from source
// Everything else (Home, Studies, etc.) reads studies through useStudies()

// GET returns a JSON array of study descriptions.
const STUDIES_ENDPOINT = "/xnat/xapi/pixiCenter/";

let _studiesCache = null;
let _studiesPromise = null;

// The API returns a bare array; tolerate a wrapped list too.
function unwrapStudyList(payload) {
  if (Array.isArray(payload)) return payload;
  for (const key of ["studies", "items", "results", "data"]) {
    if (payload && Array.isArray(payload[key])) return payload[key];
  }
  throw new Error("Unexpected response from the PIXI Center API (no study list found)");
}

function toIsoDate(parts) {
  if (!Array.isArray(parts) || parts.length < 3) return typeof parts === "string" ? parts : "";
  const [y, m, d] = parts;
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

const _entityDecoder = typeof document !== "undefined" ? document.createElement("textarea") : null;
function cleanText(s) {
  if (!s) return "";
  let out = String(s);
  if (_entityDecoder) {
    _entityDecoder.innerHTML = out;
    out = _entityDecoder.value;
  }
  return out.replace(/\r\n?/g, "\n");
}

function normalizeStudy(raw) {
  return {
    ...raw,
    id: raw.projectId ?? "",
    title: raw.projectTitle ?? "",
    areaOfStudy: raw.areaOfStudy ?? "",
    protectionLevel: String(raw.protectionLevel ?? "").trim().toLowerCase(),
    subjects: Number(raw.numberSubjects) || 0,
    sessions: Number(raw.numberSessions) || 0,
    scanners: raw.scanners ?? [],
    modalities: raw.modalities ?? [],
    sequences: raw.sequences ?? [],
    totalSize: raw.totalSize ?? "",
    lead: raw.leadInvestigator ?? "",
    institution: raw.institution ?? "",
    updated: toIsoDate(raw.lastUpdated),
    abstract: cleanText(raw.studyAbstract) ?? "",
    dataCitation: raw.dataCitation ?? "",
    doi: raw.doi ?? "",
    resources: raw.resources ?? [],
  };
}

function loadStudies() {
  if (!_studiesPromise) {
    _studiesPromise = fetch(STUDIES_ENDPOINT, {
      headers: { Accept: "application/json" },
      credentials: "same-origin", // send the XNAT session cookie if there is one
    })
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${STUDIES_ENDPOINT} (${res.status})`);
        return res.json();
      })
      .then(payload => (_studiesCache = unwrapStudyList(payload).map(normalizeStudy)))
      .catch(err => {
        _studiesPromise = null; // don't cache a failure; the next call retries
        throw err;
      });
  }
  return _studiesPromise;
}

const useStudies = () => {
  const [studies, setStudies] = React.useState(_studiesCache || []);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (_studiesCache) return;
    let cancelled = false;
    loadStudies()
      .then(data => { if (!cancelled) setStudies(data); })
      .catch(err => { if (!cancelled) setError(err); });
    return () => { cancelled = true; };
  }, []);

  return { studies, error };
};

Object.assign(window, { useStudies });