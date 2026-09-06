// About page for PIXI Center — public-facing.
// Content sourced from "About PIXI Center.md" (provided by the PIXI Center team).
// Uses tokens from ../colors_and_type.css and primitives from ../home/ui.jsx,
// with the same TopNav/Footer as the home page (../home/site-chrome.jsx).

const proseP = {
  margin: "0 0 20px",
  fontFamily: "var(--font-sans)",
  fontSize: 16,
  lineHeight: 1.65,
  color: "var(--fg-2)",
};

const AboutHeader = () => (
  <section style={{
    padding: "72px 40px 8px",
    maxWidth: 760, margin: "0 auto",
  }}>
    <Eyebrow mono>About</Eyebrow>
    <h1 style={{
      margin: "14px 0 22px",
      fontFamily: "var(--font-display)",
      fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1,
      color: "var(--fg-1)",
    }}>
      About PIXI Center
    </h1>
    <p style={{
      ...proseP,
      fontSize: 19, lineHeight: 1.55, color: "var(--fg-1)", fontWeight: 500,
    }}>
      PIXI Center is a domain-specific data management and sharing (DMS) resource to enable
      Centralized Learning in oncologic preclinical imaging.
    </p>
  </section>
);

const Mission = () => (
  <section style={{ padding: "8px 40px 56px", maxWidth: 760, margin: "0 auto" }}>
    <p style={proseP}>
      The <a href="https://pixi-documentation.readthedocs.io/en/latest/" target="_blank" rel="noreferrer"
             style={{ color: "var(--pixi-navy)" }}>
        Preclinical Imaging XNAT-Enabled Informatics (PIXI) platform
      </a> is an open-source extension of the XNAT imaging platform of imaging informatic
      research tools. XNAT offers the ability to import and control access to imaging
      modalities and clinical data, view and annotate images, run analysis pipelines and
      store results, and collaborate with sites and scientific contributors around the
      world. PIXI offers a layer of support for subject modeling and areas of study
      specific to the preclinical research world.
    </p>
    <p style={proseP}>
      Where PIXI exists to support the process of managing a preclinical research program,
      PIXI Center exists to publish the results of those preclinical research efforts, for
      the benefit of the scientific community.
    </p>
    <p style={proseP}>
      PIXI Center houses a growing collection of freely accessible preclinical datasets,
      contributed by PIXI sites around the world. Preclinical researchers can come to PIXI
      Center to search and discover preclinical imaging datasets, associated metadata, and
      linked biology related to their area of disease study. In addition, PIXI Center
      enables centralized learning to apply AI pipelines, taking advantage of the
      computational environment in PIXI.
    </p>
    <p style={{ ...proseP, marginBottom: 0 }}>
      Overall, the next development of PIXI is expected to have a profound impact on
      management of preclinical imaging datasets and associated correlative data (e.g.,
      -OMICS, spatial) as well as advanced needs in computational preclinical imaging and
      analytics to support the complexity and growing demands in preclinical cancer
      imaging which will ultimately support translational oncologic precision medicine.
    </p>
  </section>
);

const Contributing = () => (
  <section style={{
    padding: "56px 40px 80px", maxWidth: 760, margin: "0 auto",
    borderTop: "1px solid var(--border-subtle)",
  }}>
    <h2 style={{
      margin: "48px 0 20px",
      fontFamily: "var(--font-display)",
      fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em",
      color: "var(--fg-1)",
    }}>
      Contributing datasets to PIXI Center
    </h2>
    <p style={proseP}>
      The goal of PIXI Center is to support the aggregation of published preclinical
      datasets, making them widely available for public research consumption. Datasets
      are attributed to their source institution and made available under a singular data
      usage agreement. Datasets are tagged and filterable by modality, tracers and
      sequences, areas of disease study, and counts of preclinical subjects, image
      sessions, and scans.
    </p>
    <p style={proseP}>
      PIXI Center also supports the building of a custom cohort of data pulling from these
      published datasets to allow for the assembly of large datasets for analysis and
      comparison. The PIXI Center front end connects to the XNAT-powered PIXI backend
      where data is hosted.
    </p>
    <p style={proseP}>
      There are multiple ways to contribute your preclinical dataset to PIXI Center.
    </p>
    <ol style={{ ...proseP, paddingLeft: 20, margin: "0 0 20px" }}>
      <li style={{ marginBottom: 12 }}>
        If you have your own local collection of imaging and clinical data but have never
        used PIXI before, you can work with PIXI Center staff to get it imported into a
        new project in the backing PIXI application.
      </li>
      <li>
        If you already have PIXI installed at your institution, you can use the XNAT
        Project Sync (XSync) plugin to publish your dataset to PIXI Center.
      </li>
    </ol>
    <p style={{ ...proseP, marginBottom: 32 }}>
      Both methods of contributing begin with filling out an application to submit your
      dataset.
    </p>
    <a href="../ui_kits/web_app/index.html">
      <Button variant="primary" size="lg" icon="arrowRight">Browse datasets</Button>
    </a>
  </section>
);

const AboutPage = () => (
  <div className="pixi-root" data-screen-label="PIXI Center about">
    <TopNav />
    <AboutHeader />
    <Mission />
    <Contributing />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<AboutPage />);
