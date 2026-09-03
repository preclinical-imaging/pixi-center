// Studies — library view. Card grid + table toggle.

const STUDIES = [
  {
      id: "Cancers2021",
      title: "Deep Learning Segmentation of Triple-Negative Breast Cancer (TNBC) Patient Derived Tumor Xenograft (PDX) and Sensitivity of Radiomic Pipeline to Tumor Probability Boundary",
      area: "Breast Cancer",
      location: "Mammary Glands",
      status: "success",
      statusLabel: "Public",
      subjects: 40,
      scans: 80,
      modalities: ["MR"],
      size: "497 MB",
      lead: "KS",
      institution: "WashU",
      team: ["EH","JP","RA","MK","TC"],
      updated: "2 h ago",
      url: "/xnat/data/projects/Cancers2021",
      abstract: "Preclinical imaging is critical in the development of translational strategies to detect diseases and monitor response to therapy. The National Cancer Institute Co-Clinical Imaging Resource Program was launched, in part, to develop best practices in preclinical imaging. In this context, the objective of this work was to develop a 1-hour, multiparametric magnetic resonance image-acquisition pipeline with triple-negative breast cancer patient-derived xenografts (PDXs). The 1-hour, image-acquisition pipeline includes T1- and T2-weighted scans, quantitative T1, T2, and apparent diffusion coefficient (ADC) parameter maps, and dynamic contrast-enhanced (DCE) time-course images. Quality-control measures used phantoms. The triple-negative breast cancer PDXs used for this study averaged 174 ± 73 μL in volume, with region of interest–averaged T1, T2, and ADC values of 1.9 ± 0.2 seconds, 62 ± 3 milliseconds, and 0.71 ± 0.06 μm2/ms (mean ± SD), respectively. Specific focus was on assessing the within-subject test–retest coefficient-of-variation (CVWS) for each of the magnetic resonance imaging metrics. Determination of PDX volume via manually drawn regions of interest is highly robust, with ∼1% CVWS. Determination of T2 is also robust with a ∼3% CVWS. Measurements of T1 and ADC are less robust with CVWS values in the 6%–11% range. Preliminary DCE test–retest time-course determinations, as quantified by area under the curve and Ktrans from 2-compartment exchange (extended Tofts) modeling, suggest that DCE is the least robust protocol, with ∼30%–40% CVWS.",
      dataCitation: "Ge X, Quirk JD, Engelbach JA, Bretthorst GL, Li S, Shoghi KI, Garbow JR, Ackerman JJH. Test–Retest Performance of a 1-Hour Multiparametric MR Image Acquisition Pipeline With Orthotopic Triple-Negative Breast Cancer Patient-Derived Tumor Xenografts. <i>Tomography</i>. 2019; 5(3):320-331.",
      doi: "10.18383/j.tom.2019.00012",
      resources: [
        {
            filename: "Cancers2021 Data Summary",
            filepath: "/files/Cancers2021/Cancers-2021_data_summary.xlsx",
            icon: "xls"
        },
        {
            filename: "Cancers2021 Publication PDF",
            filepath: "/files/Cancers2021/cancers-13-03795.pdf",
            icon: "pdf"
        },
          {
              filename: "Supplementary Material",
              filepath: "/files/Cancers2021/cancers-13-03795-s001.zip",
              icon: "zip"
          }
      ]
  },
  {
      id: "JNM2019",
      title: "Preclinical PERCIST and 25% of SUV max Threshold: Precision Imaging of Response to Therapy in Co-clinical 18 F-FDG PET Imaging of Triple-Negative Breast Cancer Patient-Derived Tumor Xenografts",
      area: "Breast Cancer",
      status: "warn",
      statusLabel: "Protected",
      subjects: 69,
      scans: 138,
      modalities: ["PET","CT"],
      day: "D 4 / 14",
      lead: "EH",
      institution: "WashU",
      team: ["EH","RA","JP"],
      updated: "5 d ago",
      size: "38.9 GB",
      abstract: "Numerous recent works highlight the limited utility of established tumor cell lines in recapitulating the heterogeneity of tumors in patients. More realistic preclinical cancer models are thought to be provided by transplantable, patient-derived xenografts (PDXs). The inter- and intratumor heterogeneity of PDXs, however, presents several challenges in developing optimal quantitative pipelines to assess response to therapy. The objective of this work was to develop and optimize image metrics for 18F-FDG PET to assess response to combination docetaxel and carboplatin therapy in a co-clinical trial involving triple-negative breast cancer PDXs. We characterized the reproducibility of standardized uptake value (SUV) metrics to assess response to therapy, and we optimized a preclinical PERCIST paradigm to complement clinical standards. Considerations in this effort included variability in tumor growth rate and tumor size, solid tumors versus tumor heterogeneity and a necrotic phenotype, and optimal selection of tumor slices versus whole tumor.",
      dataCitation: "Madhusudan A. Savaikar, Timothy Whitehead, Sudipta Roy, Lori Strong, Nicole Fettig, Tina Prmeau, Jingqin Luo, Shunqiang Li, Richard L. Wahl and Kooresh I. Shoghi. Journal of Nuclear Medicine June 2020, 61 (6) 842-849;",
      url: "/xnat/data/projects/JNM2019",
      doi: "10.2967/jnumed.119.234286",
      resources: [
          {
              filename: "Full Publication",
              filepath: "/files/JNM2019/JNM2019_pub.pdf",
              icon: "pdf"
          },
          {
              filename: "Supplemental Data",
              filepath: "/files/JNM2019/JNM2019_234286_Supplemental_Data.pdf",
              icon: "pdf"
          },
          {
              filename: "Summary of the Animal IDs, Groups, and Study Design",
              filepath: "/files/JNM2019/suv25-manuscript-datasheet.xlsx",
              icon: "xls"
          }
      ]
  },
  {
      id: "EBM2020",
      title: "Optimal co-clinical radiomics: Sensitivity of radiomic features to tumour volume, image noise and resolution in co-clinical T1-weighted and T2-weighted magnetic resonance imaging.",
      area: "Breast Cancer",
      status: "warn",
      statusLabel: "Protected",
      subjects: 30,
      scans: 60,
      modalities: ["PET","CT"],
      size: "497 MB",
        day: "D 4 / 14",
        lead: "EH",
        institution: "WashU",
        team: ["EH","RA","JP"],
        updated: "5 d ago",
        abstract: "Radiomics analyses has been proposed to interrogate the biology of tumour as well as to predict/assess response to therapy in vivo. The objective of this work was to assess the sensitivity of radiomics features to noise, resolution, and tumour volume in the context of a co-clinical trial.",
        dataCitation: "Sudipta Roy, Timothy D. Whitehead, James D. Quirk, Amber Salter, Foluso O. Ademuyiwa, Shunqiang Li, Hongyu An, Kooresh I. Shoghi, Optimal co-clinical radiomics: Sensitivity of radiomic features to tumour volume, image noise and resolution in co-clinical T1-weighted and T2-weighted magnetic resonance imaging, eBioMedicine, Volume 59, 2020",
        url: "/xnat/data/projects/EBM2020",
        doi: "10.1016/j.ebiom.2020.102963",
        resources: [
            {
                filename: "Full Publication",
                filepath: "/files/EBM2020/1-s2.0-S235239642030339X-main.pdf",
                icon: "pdf"
            },
            {
              filename: "Summary of the Animal IDs, Groups, and Study Design",
              filepath: "/files/EBM2020/EBioMedicine-data.xlsx",
              icon: "xls"
            }
        ]
  },
  {
      id: "Tomo2019",
      title: "Test-Retest Performance of a 1-Hour Multiparametric MR Image Acquisition Pipeline With Orthotopic Triple-Negative Breast Cancer Patient-Derived Tumor Xenografts",
      area: "Breast Cancer",
      status: "warn",
      statusLabel: "Protected",
      subjects: 13,
      scans: 26,
      modalities: ["MR"],
      size: "1.2 GB",
      institution: "WashU",
      abstract: "Preclinical imaging is critical in the development of translational strategies to detect diseases and monitor response to therapy. The National Cancer Institute Co-Clinical Imaging Resource Program was launched, in part, to develop best practices in preclinical imaging. In this context, the objective of this work was to develop a 1-hour, multiparametric magnetic resonance image-acquisition pipeline with triple-negative breast cancer patient-derived xenografts (PDXs). The 1-hour, image-acquisition pipeline includes T1- and T2-weighted scans, quantitative T1, T2, and apparent diffusion coefficient (ADC) parameter maps, and dynamic contrast-enhanced (DCE) time-course images. Quality-control measures used phantoms. The triple-negative breast cancer PDXs used for this study averaged 174  73 L in volume, with region of interest–averaged T1, T2, and ADC values of 1.9  0.2 seconds, 62  3 milliseconds, and 0.71  0.06 m2/ms (mean SD), respectively. Specific focus was on assessing the within-subject test–retest coefficient-of-variation (CVWS) for each of the magnetic resonance imaging metrics. Determination of PDX volume via manually drawn regions of interest is highly robust, with 1% CVWS. Determination of T2 is also robust with a 3% CVWS. Measurements of T1 and ADC are less robust with CVWS values in the 6%–11% range. Preliminary DCE test–retest time-course determinations, as quantified by area under the curve and Ktrans from 2-compartment exchange (extended Tofts) modeling, suggest that DCE is the least robust protocol, with 30%–40% CVWS",
      dataCitation: "",
      url: "/xnat/data/projects/Tomo2019",
      doi: "10.18383/j.tom.2019.00012",
      resources: []
  },
  {
      id: "Mouse-Astrocytoma",
      title: "Mouse Astrocytoma (TCIA)",
      area: "Brain Cancer / Glioma",
      status: "success",
      statusLabel: "Public",
      subjects: 48,
      scans: 284,
      modalities: ["MR"],
      day: "D 21 / 21",
      lead: "JP",
      institution: "National Cancer Institute",
      team: ["JP","EH","RA"],
      updated: "yesterday",
      url: "/xnat/data/projects/Mouse-Astrocytoma",
      size: "500 MB",
      abstract: "This collection consists of magnetic resonance images (MRI) of genetically engineered mouse models (GEMMs) of high grade astrocytoma, including glioblastoma multiforme (GBM). In these GEMMs, the most commonly disregulated networks in GBM -- RB, KRAS and/or PI3K signaling -- are perturbed at the genetic level. These genetic aberrations induce development of high grade astrocytoma in the mouse with properties similar to that of human disease. MRI was used to perform a qualitative and quantitative phenotypic characterization of the different genotypes and molecular subtypes. Additionally, mouse MRI images were compared human GBM imaging parameters using the VASARI lexicon. The MRI data contained herein includes anatomic T2 weighted images and dynamic contrast enhanced MRI.",
      dataCitation: "",
      doi: "10.7937/K9TCIA.2017.SGW7CAQW",
      resources: []
  },
  {
        id: "Mouse-Mammary",
        title: "Mouse Mammary (TCIA)",
        area: "Breast Cancer",
        status: "success",
        statusLabel: "Public",
        subjects: 32,
        scans: 205,
        modalities: ["MR"],
        day: "D 21 / 21",
        lead: "JP",
        institution: "National Cancer Institute",
        team: ["JP","EH","RA"],
        updated: "yesterday",
        url: "/xnat/data/projects/Mouse-Mammary",
        size: "500 MB",
        abstract: "This collection consists of magnetic resonance images (MRI) of genetically engineered mouse models (GEMMs) of breast cancer. These images were acquired as part of a Department of Defense (DOD) Breast Cancer Research Program (BCRP) Postdoctoral Award W81XWH-12-1-0307 entitled “Investigating Ductal Carcinoma in Situ Using Noninvasive Imaging of Genetically Engineered Mouse Models A particular emphasis of this project was to study the earliest stages of breast cancer—preinvasive ductal carcinoma in situ (DCIS)—and to interrogate the underlying genetic events that influence progression into invasive disease. In particular, we focused on the role of perturbed Rb, p53 and BRCA1 functionality and how these pathways, acting alone and in combination, can influence the development and progression of DCIS. GEMMs serve as an excellent model system wherein genetic changes can be controlled and manipulated over time. In vivo MRI is a superb technique for noninvasively tracking and characterizing these microscopic early stage cancers as they develop, change and transition into lethal invasive disease.",
        dataCitation: "",
        doi: "10.7937/K9/TCIA.2015.9P42KSE6",
        resources: []
    },
    {
        id: "PDMR-292921-168-R",
        title: "Imaging characterization of a metastatic patient derived model of adenocarcinoma pancreas",
        area: "Pancreatic Cancer",
        status: "warn",
        statusLabel: "Protected",
        subjects: 19,
        scans: 154,
        lead: "",
        team: [],
        updated: "",
        day: "",
        modalities: ["MR","SR"],
        institution: "National Cancer Institute",
        url: "/xnat/data/projects/PDMR-292921-168-R",
        size: "",
        abstract: "Pre-clinical animal models of spontaneous metastatic cancer are infrequent; the few that exist are resource intensive because determination of the presence of metastatic disease, metastatic burden, and response to therapy normally require multiple timed cohorts with animal sacrifice and extensive pathological examination. We identified and characterized a patient derived xenograft model with metastatic potential, adenocarcinoma pancreas xenograft 292921-168-R. In this study we performed a detailed imaging characterization (workflow below) of this model, which develops spontaneous lung metastases, details are provided in the attached standard operating procedures. Tumors in half of the mice were resected in the range 200-300 mm3 size; tumors in the other half were allowed to grow until it was necessary to euthanize them because of tumor size.",
        dataCitation: "Tatum J., Kalen J., Ileva L.V., Riffle L.A., Saito K., Patel N., Jacobs P., Sanders C., James A., Difilippantonio S., Thang L., Hollingshead M.G., Phillips J., Evrard Y., Clunie D., Liu Y., Suloway C., Smith K.E., Wagner U., Freymann J.B., Kirby J., Doroshow, J. (2020). Imaging characterization of a metastatic patient derived model of adenocarcinoma pancreas: (PDMR-292921-168-R) [Dataset]. The Cancer Imaging Archive",
        doi: "10.7937/TCIA.2020.PCAK-8Z10",
        resources: [
            {
                filename: "Study Design",
                filepath: "/files/PDMR-292921-168-R/Flow-Chart-Pancreas.png",
                icon: "png"
            }
        ]
    },
    {
        id: "PDMR-425362-245-T",
        title: "Imaging characterization of a metastatic patient derived model of melanoma",
        area: "Skin Cancer",
        status: "warn",
        statusLabel: "Protected",
        subjects: 20,
        scans: 190,
        lead: "",
        team: [],
        updated: "",
        day: "",
        modalities: ["MR","SR"],
        institution: "National Cancer Institute",
        url: "/xnat/data/projects/PDMR-425362-245-T",
        size: "",
        abstract: "Pre-clinical animal models of spontaneous metastatic cancer are infrequent; the few that exist are resource intensive because determination of the presence of metastatic disease, metastatic burden, and response to therapy normally require multiple timed cohorts with animal sacrifice and extensive pathological examination. We identified and characterized a patient derived xenograft model with metastatic potential, melanoma xenograft 425362-245-T. In this study we performed a detailed imaging characterization (workflow below) of this model, which develops spontaneous lung metastases, details are provided in the attached standard operating procedures. Tumors in half of the mice were resected in the range 200-300 cm3 size; tumors in the other half were allowed to grow until it was necessary to euthanize them because of tumor size.",
        dataCitation: "Tatum, J. L., Kalen, J. D., Jacobs, P. M., Ileva, L. V., Riffle, L. A., Keita, S., Patel, N., Sanders, C., James, A., Difilippantonio, S., Thang, L., Hollingshead, M. G., Phillips, J., Edmondson, E., Evrard, Y., Clunie, D. A., Liu, Y., Smith, K. E., Wagner, U., … Doroshow, J. H. (2020). Imaging characterization of a metastatic patient derived model of melanoma: (PDMR-425362-245-T) [Data set]. The Cancer Imaging Archive",
        doi: "10.7937/TCIA.2020.7YRS-7J97",
        resources: []
    }
];

const StudyCard = ({ study, onOpen }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={() => onOpen(study)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "left", padding: 18, gap: 14,
        background: "#fff",
        border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
        borderRadius: 8, cursor: "pointer",
        display: "flex", flexDirection: "column",
        boxShadow: hover ? "var(--shadow-sm)" : "none",
        transition: "box-shadow 120ms, border-color 120ms",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <Eyebrow mono>{study.id} · {study.area}</Eyebrow>
          <div style={{
            marginTop: 6,
            fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600,
            letterSpacing: "-0.01em", color: "var(--fg-1)",
            lineHeight: 1.25,
          }}>{study.title}</div>
        </div>
        <Badge tone={study.status} dot>{study.statusLabel}</Badge>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
        paddingTop: 12, borderTop: "1px solid var(--border-subtle)",
      }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 3 }}>Subjects</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--fg-1)" }}>{study.subjects}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 3 }}>Scans</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
            letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--fg-1)" }}>{study.scans}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 5 }}>Modalities</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {study.modalities.map(m => (
              <span key={m} style={{
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
                color: "var(--pixi-navy)", background: "var(--pixi-navy-soft)",
                borderRadius: 4, padding: "2px 6px", lineHeight: 1.4,
              }}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
          fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
          color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
        }}>{study.institution}</span>
        <div style={{ fontSize: 12, color: "var(--fg-3)" }}>updated {study.updated}</div>
      </div>
    </button>
  );
};

const FilterChip = ({ children, active, onClick }) => (
  <button onClick={onClick} style={{
    height: 28, padding: "0 12px", borderRadius: 999,
    border: `1px solid ${active ? "var(--pixi-navy)" : "var(--border-default)"}`,
    background: active ? "var(--pixi-navy-soft)" : "#fff",
    color: active ? "var(--pixi-navy)" : "var(--fg-2)",
    fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: active ? 600 : 500,
    cursor: "pointer",
  }}>{children}</button>
);

const Studies = ({ onOpenStudy, onSubmitDataset }) => {
  const [filter, setFilter] = React.useState("All");
  const [view, setView] = React.useState("grid");

  const filters = ["All", "In progress", "Reviewing", "Complete", "Draft"];
  const filtered = filter === "All" ? STUDIES :
    STUDIES.filter(s => s.statusLabel === filter);

  return (
    <div style={{ padding: "24px 32px", fontFamily: "var(--font-sans)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 8 }}>
        <div>
          <Eyebrow>Workspace · Oncology — preclinical</Eyebrow>
          <h1 style={{
            margin: "6px 0 0",
            fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600,
            letterSpacing: "-0.01em",
          }}>Datasets</h1>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="secondary" icon="download">Export</Button>
          <Button variant="primary" icon="plus" onClick={onSubmitDataset}>Submit dataset</Button>
        </div>
      </div>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 12, padding: "16px 0", borderBottom: "1px solid var(--border-subtle)",
        marginBottom: 20,
      }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {filters.map(f => (
            <FilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</FilterChip>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{
            display: "inline-flex", borderRadius: 6,
            border: "1px solid var(--border-subtle)", overflow: "hidden",
          }}>
            <button onClick={() => setView("grid")} style={{
              width: 32, height: 28, border: "none", cursor: "pointer",
              background: view === "grid" ? "var(--pixi-cloud)" : "#fff",
              color: view === "grid" ? "var(--pixi-ink)" : "var(--fg-3)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}><Icon name="grid" size={14} /></button>
            <button onClick={() => setView("list")} style={{
              width: 32, height: 28, border: "none", cursor: "pointer",
              borderLeft: "1px solid var(--border-subtle)",
              background: view === "list" ? "var(--pixi-cloud)" : "#fff",
              color: view === "list" ? "var(--pixi-ink)" : "var(--fg-3)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}><Icon name="list" size={14} /></button>
          </div>
          <Button variant="secondary" icon="sliders" size="md">Filters</Button>
        </div>
      </div>

      {view === "grid" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {filtered.map(s => <StudyCard key={s.id} study={s} onOpen={onOpenStudy} />)}
        </div>
      ) : (
        <StudiesList rows={filtered} onOpen={onOpenStudy} />
      )}
    </div>
  );
};

const StudiesList = ({ rows, onOpen }) => (
  <div style={{
    background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 8,
    overflow: "hidden",
  }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: 13 }}>
      <thead>
        <tr>
          {["Study","Area","Status","Subjects","Updated","Institution"].map((h, i) => (
            <th key={i} style={{
              textAlign: i >= 3 && i <= 4 ? "right" : "left",
              padding: "10px 14px",
              fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--fg-3)", background: "var(--pixi-paper)",
              borderBottom: "1px solid var(--border-subtle)",
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(s => (
          <tr key={s.id} onClick={() => onOpen(s)} style={{ cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--pixi-paper)"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
            <td style={tdStyle}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{s.id}</span>
                <span style={{ fontWeight: 600, color: "var(--fg-1)" }}>{s.title}</span>
              </div>
            </td>
            <td style={{ ...tdStyle, color: "var(--fg-2)" }}>{s.area}</td>
            <td style={tdStyle}><Badge tone={s.status} dot>{s.statusLabel}</Badge></td>
            <td style={{ ...tdStyle, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{s.subjects}</td>
            <td style={{ ...tdStyle, textAlign: "right", color: "var(--fg-3)" }}>{s.updated}</td>
            <td style={tdStyle}><span style={{
              display: "inline-flex", alignItems: "center", height: 22, padding: "0 9px",
              fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
              color: "var(--fg-2)", background: "var(--pixi-cloud)", borderRadius: 4,
            }}>{s.institution}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const tdStyle = { padding: "12px 14px", borderBottom: "1px solid var(--border-subtle)", verticalAlign: "middle" };

Object.assign(window, { Studies, STUDIES });
