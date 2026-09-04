// SubmitDataset — dataset proposal submission form.
// The "Primary Disease Area of Study" option list is a curated sample pulled from
// the live TCIA proposal form (tcia-streamlit.duckdns.org/proposal), which backs
// this field with a large controlled vocabulary (NCIt histology terms). This kit
// seeds the same searchable-multiselect behavior with a representative subset
// rather than the full multi-thousand-term list.

const HISTOLOGIC_DIAGNOSIS_OPTIONS = [
  "Adenocarcinoma",
  "Alzheimer's Disease",
  "Amyotrophic Lateral Sclerosis (ALS)",
  "Breast Cancer",
  "Brain Cancer / Glioma",
  "Carcinoma",
  "Cervical Cancer",
  "Colon Cancer",
  "Diabetes",
  "Esophageal Cancer",
  "Heart Disease",
  "Kidney Disease",
  "Leukemia",
  "Lung Cancer",
  "Lymphoma",
  "Mesothelioma",
  "Melanoma / Skin Cancer",
  "Parkinson's Disease",
  "Sarcoma"
];

const IMAGING_MODALITY_OPTIONS = ["MR", "PET", "CT", "Ultrasound", "Mammogram", "X-Ray", "Whole Slide Image"];
const IMAGING_FORMAT_OPTIONS = ["NIFTI", "DICOM", "Inveon", "BLI", "Other"];

const EMPTY_FORM = {
  contactName: "", contactEmail: "", contactPhone: "",
  title: "", authors: "", identifier: "", institutions: "", abstract: "", doi: "",
  histologicDiagnoses: [], modalities: [], format: "",
  subjects: "", scans: "", diskSpace: "",
};

const FormSection = ({ title, children }) => (
  <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 24, marginBottom: 16 }}>
    <h2 style={{
      margin: 0, fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
      letterSpacing: "-0.01em", color: "var(--fg-1)",
    }}>{title}</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 16 }}>
      {children}
    </div>
  </div>
);

const Row = ({ children, cols = 3 }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16 }}>{children}</div>
);

const SubmitDataset = ({ onSubmitted }) => {
  const [form, setForm] = React.useState(EMPTY_FORM);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);
  const set = (key) => (v) => setForm(f => ({ ...f, [key]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const result = await res.json();
      onSubmitted?.(form, result);
    } catch (err) {
      setSubmitError("Couldn't save this submission — make sure the local server is running (node ui_kits/web_app/server.js).");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "24px 32px 64px", fontFamily: "var(--font-sans)" }}>
      <div style={{ maxWidth: 880 }}>
        <Eyebrow>Workspace · Oncology — preclinical</Eyebrow>
        <h1 style={{
          margin: "6px 0 8px", fontFamily: "var(--font-display)",
          fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em",
        }}>Submit a dataset</h1>
        <p style={{ margin: "0 0 24px", fontSize: 14, color: "var(--fg-2)", lineHeight: 1.5 }}>
          Propose a new dataset for inclusion in the PIXI Center library. Fields marked with an asterisk (*) are required.
        </p>

        <form onSubmit={handleSubmit}>
          <FormSection title="Contact">
{/*             <Callout>After completing this form, a copy of the proposal will be sent to the points of contact listed below.</Callout> */}
            <Row cols={3}>
              <Field label="Contact Name" required value={form.contactName} onChange={set("contactName")} placeholder="Jane Doe" />
              <Field label="Contact Email" required type="email" value={form.contactEmail} onChange={set("contactEmail")} placeholder="jane.doe@example.edu" />
              <Field label="Contact Phone" required type="tel" value={form.contactPhone} onChange={set("contactPhone")} placeholder="+1-555-555-5555" />
            </Row>
          </FormSection>

          <FormSection title="Publication Details">
            <Field label="Dataset Title" required value={form.title} onChange={set("title")} placeholder="Descriptive title for the dataset" />
            <Field label="Authors" value={form.authors} onChange={set("authors")} placeholder="e.g. Doe J, Smith A, Lee K" />
            <Row cols={3}>
              <Field label="Dataset Identifier" required value={form.identifier} onChange={set("identifier")} placeholder="e.g. PXI-2411-D" />
              <Field label="Institution(s)" required value={form.institutions} onChange={set("institutions")} placeholder="e.g. Washington University in St. Louis" />
              <Field label="DOI" value={form.doi} onChange={set("doi")} placeholder="10.7937/xxxx" />
            </Row>
            <TextArea
              label="Abstract" required rows={5}
              value={form.abstract} onChange={set("abstract")}
              placeholder="Provide a brief overview of the dataset, under 1000 characters."
              helper="Include subject count, imaging types, supporting data, and potential research applications."
            />
          </FormSection>

          <FormSection title="Data Collection Details">
            <Row cols={3}>
              <MultiSelect
                label="Primary Disease Area of Study"
                options={HISTOLOGIC_DIAGNOSIS_OPTIONS}
                value={form.histologicDiagnoses}
                onChange={set("histologicDiagnoses")}
              />
              <MultiSelect
                label="Imaging Modalities"
                options={IMAGING_MODALITY_OPTIONS}
                value={form.modalities}
                onChange={set("modalities")}
              />
              <Select
                label="Imaging Format"
                options={IMAGING_FORMAT_OPTIONS}
                value={form.format}
                onChange={set("format")}
              />
            </Row>
            <Row cols={3}>
              <Field label="Number of Subjects" type="number" value={form.subjects} onChange={set("subjects")} placeholder="e.g. 40" />
              <Field label="Number of Scans" type="number" value={form.scans} onChange={set("scans")} placeholder="e.g. 80" />
              <Field label="Required Disk Space" value={form.diskSpace} onChange={set("diskSpace")} placeholder="e.g. 12 GB" />
            </Row>
          </FormSection>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 14 }}>
            {submitError && (
              <span style={{ fontSize: 13, color: "var(--danger)" }}>{submitError}</span>
            )}
            <Button type="submit" variant="primary" size="lg" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SubmitDatasetThanks = ({ onBack }) => (
  <div style={{ padding: "24px 32px 64px", fontFamily: "var(--font-sans)" }}>
    <div style={{
      maxWidth: 560, margin: "64px auto 0", textAlign: "center",
      background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: "48px 40px",
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%", background: "var(--pixi-green-soft)",
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
      }}>
        <Icon name="check" size={26} color="var(--pixi-green-deep)" />
      </div>
      <h1 style={{
        margin: "0 0 12px", fontFamily: "var(--font-display)",
        fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em",
      }}>Proposal submitted</h1>
      <p style={{ margin: "0 0 28px", fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)" }}>
        Thank you for submitting your dataset proposal. PIXI Center administrators will be in touch to
        discuss next steps and data uploads.
      </p>
      <Button variant="primary" onClick={onBack}>Back to Studies</Button>
    </div>
  </div>
);

Object.assign(window, { SubmitDataset, SubmitDatasetThanks });
