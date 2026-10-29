//Generic location to pull data from source (Currently json, soon to be formal XNAT backend).

let _studiesCache = null;
let _studiesPromise = null;

function loadStudies() {
  if (!_studiesPromise) {
    _studiesPromise = fetch("/data/studies.json")
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load /data/studies.json (${res.status})`);
        return res.json();
      })
      .then(data => (_studiesCache = data));
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