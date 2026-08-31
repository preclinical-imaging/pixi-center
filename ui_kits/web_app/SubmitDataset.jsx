// SubmitDataset — dataset proposal submission form.
// "Primary Disease Site/Location" and "Histologic Diagnosis" option lists are a
// curated sample pulled from the live TCIA proposal form (tcia-streamlit.duckdns.org/proposal),
// which backs those two fields with large controlled vocabularies (anatomic site / NCIt
// histology terms). This kit seeds the same searchable-multiselect behavior with a
// representative subset rather than the full multi-thousand-term list.

const DISEASE_SITE_OPTIONS = [
  "alimentary part of gastrointestinal system",
  "autonomic nervous system · peripheral nervous system",
  "bile duct",
  "biliary tree",
  "bladder organ",
  "bladder organ · prostate gland",
  "bladder organ · urethra",
  "body of uterus",
  "bone element",
  "bone marrow",
  "brain",
  "brainstem",
  "breast",
  "bronchus · lung",
  "chest",
  "chest wall",
  "colon",
  "craniocervical lymph node",
  "esophagus",
  "external soft tissue zone",
  "gallbladder",
  "head · chest",
  "hematopoietic system · reticuloendothelial system",
  "inguinal lymph node",
  "kidney",
  "lip · oral cavity · pharynx",
  "liver",
  "liver · intrahepatic bile duct",
  "lung",
  "lymph node",
  "ovary",
  "pancreas",
  "pancreatic duct",
  "pelvis connective tissue",
  "prostate gland",
  "rectum",
  "renal pelvis",
  "retroperitoneal space · peritoneum",
  "skin of body",
  "spinal cord · cranial nerve · central nervous system",
  "spleen",
  "stomach",
  "testis",
  "thoracic region of vertebral column",
  "thyroid gland",
  "urethra · prostate gland",
  "uterine cervix",
  "uterus",
];

const HISTOLOGIC_DIAGNOSIS_OPTIONS = [
  "Acral Lentiginous Melanoma",
  "Acute Lymphoblastic Leukemia",
  "Acute Myelomonocytic Leukemia",
  "Adenocarcinoma",
  "Adenocarcinoma In Situ",
  "Adnexal Carcinoma",
  "Adult T-Cell Leukemia/Lymphoma",
  "Amelanotic Melanoma",
  "Anaplastic (Malignant) Meningioma",
  "Angiocentric Glioma",
  "Apocrine Carcinoma",
  "Atypical Meningioma",
  "Basal Cell Carcinoma",
  "Basaloid Squamous Cell Carcinoma",
  "Biphasic Mesothelioma",
  "Brain Low Grade Glioma",
  "Burkitt Lymphoma",
  "Carcinoma",
  "Cervical Squamous Cell Carcinoma",
  "Clear Cell Hepatocellular Carcinoma",
  "Colon Adenocarcinoma",
  "Cutaneous Nodular Melanoma",
  "Desmoplastic Melanoma",
  "Diffuse Glioma",
  "Diffuse Malignant Mesothelioma",
  "Diffuse Midline Glioma",
  "Embryonal Carcinoma",
  "Epithelioid Mesothelioma",
  "Esophageal Squamous Cell Carcinoma",
  "Ewing Sarcoma",
  "Follicular Lymphoma",
  "Germ Cell Tumor",
  "Glioblastoma",
  "Glioblastoma, IDH-Wildtype",
  "Glioma",
  "Hairy Cell Leukemia",
  "Head and Neck Squamous Cell Carcinoma",
  "Hepatocellular Carcinoma",
  "Hodgkin Lymphoma",
  "Leukemia",
  "Low Grade Glioma",
  "Lung Adenocarcinoma",
  "Lung Squamous Cell Carcinoma",
  "Lymphoma",
  "Malignant Glioma",
  "Malignant Mesothelioma",
  "Mantle Cell Lymphoma",
  "Melanoma",
  "Meningioma",
  "Mixed Germ Cell Tumor",
  "Muscle Invasive Bladder Urothelial Carcinoma",
  "Myeloid Sarcoma",
  "Neuroblastoma",
  "Papillary Carcinoma",
  "Sarcoma",
  "Sarcomatoid Carcinoma",
  "Sarcomatoid Renal Cell Carcinoma",
  "Sebaceous Carcinoma",
  "Serous Adenocarcinoma",
  "Squamous Cell Carcinoma",
  "Synovial Sarcoma",
  "Teratoma",
];

const IMAGING_MODALITY_OPTIONS = ["MR", "PET", "CT", "Ultrasound", "Mammogram", "X-Ray", "Whole Slide Image"];
const IMAGING_FORMAT_OPTIONS = ["NIFTI", "DICOM", "Inveon", "BLI", "Other"];

const EMPTY_FORM = {
  contactName: "", contactEmail: "", contactPhone: "",
  title: "", identifier: "", institutions: "", abstract: "", doi: "",
  diseaseSites: [], histologicDiagnoses: [], modalities: [], format: "",
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
  const [submitResult, setSubmitResult] = React.useState(null);
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
      setSubmitResult(result);
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
            <Callout>After completing this form, a copy of the proposal will be sent to the points of contact listed below.</Callout>
            <Row cols={3}>
              <Field label="Contact Name" required value={form.contactName} onChange={set("contactName")} placeholder="Jane Doe" />
              <Field label="Contact Email" required type="email" value={form.contactEmail} onChange={set("contactEmail")} placeholder="jane.doe@example.edu" />
              <Field label="Contact Phone" required type="tel" value={form.contactPhone} onChange={set("contactPhone")} placeholder="+1-555-555-5555" />
            </Row>
          </FormSection>

          <FormSection title="Publication Details">
            <Field label="Dataset Title" required value={form.title} onChange={set("title")} placeholder="Descriptive title for the dataset" />
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
            <Row cols={2}>
              <MultiSelect
                label="Primary Disease Site/Location"
                options={DISEASE_SITE_OPTIONS}
                value={form.diseaseSites}
                onChange={set("diseaseSites")}
              />
              <MultiSelect
                label="Histologic Diagnosis"
                options={HISTOLOGIC_DIAGNOSIS_OPTIONS}
                value={form.histologicDiagnoses}
                onChange={set("histologicDiagnoses")}
              />
            </Row>
            <Row cols={2}>
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
            {submitResult && (
              <span style={{ fontSize: 13, color: "var(--pixi-green-deep)" }}>
                Proposal saved as submission #{submitResult.id} (status: {submitResult.status}) — a confirmation copy would be emailed to your points of contact.
              </span>
            )}
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

Object.assign(window, { SubmitDataset });
