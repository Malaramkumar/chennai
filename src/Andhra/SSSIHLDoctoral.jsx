import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does SSSIHL offer PhD programs in Engineering & Technology?",
    answer: "Yes, PhD admissions are available in Engineering, Sciences, Humanities, Management & Commerce at SSSIHL across its various campuses."
  },
  {
    question: "What is the eligibility for PhD at SSSIHL?",
    answer: "Eligibility includes a Master’s degree in the relevant discipline with ≥55% marks (50% for SC/ST/OBC/PwD) or a 4‑year NEP Honours degree with CGPA ≥7.5/10. National‑level exam qualifiers (GATE, UGC‑NET, CSIR‑NET, or JEST) may be exempted from entrance test." },
  {
    question: "Does SSSIHL conduct its own entrance exam?",
    answer: "Candidates with GATE/UGC‑NET/CSIR‑NET/JEST credentials are shortlisted directly for interview. Others must take the institute’s Research Aptitude Assessment Test prior to interview." },
  {
    question: "Is PhD admission fee‑based?",
    answer: "No tuition, admissions, or examination fees—education at SSSIHL is free of charge. Only hostel boarding & lodging charges apply for selected candidates." },
  {
    question: "What is the application deadline?",
    answer: "Applications for the 2025‑26 PhD session close on **June 15, 2025**." }
];

const universityData = {
  fullName: "PhD Admission at Sri Sathya Sai Institute of Higher Learning",
  shortName: "SSSIHL",
  phdEntranceExam: "Institute Research Aptitude Test / GATE / UGC‑NET / CSIR‑NET / JEST + Interview",
  qualificationRequired: "Master’s degree with ≥55% or 4‑year NEP Honours with CGPA ≥7.5; relaxations for reserved categories",
  workExperience: "Not mandatory; freshers are welcome",
  modeOfPhd: "Full‑Time (mandatory residential Gurukula system)",
  documentsRequired: [
    "PG/Master’s certificate and marksheet",
    "National test scorecard (if applicable)",
    "Research proposal / SoP",
    "Government ID (Aadhaar, PAN, etc.)"
  ],
  applicationTimeline: "Rolling admissions all year for direct‑interview candidates; other applicants—2 cycles per academic year",
  approxFee: "Education is entirely free (no tuition, admission, or other academic fees)",
  scholarshipAvailability: "Not applicable—education funded by institution via Gurukula system"
};

const SSSIHLDoctoral = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">

          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About SSSIHL</h3>
            <ul>
              <li><b>Established:</b> 1981</li>
              <li><b>Type:</b> Deemed-to-be University (non‑profit)</li>
              <li><b>Location:</b> Prasanthi Nilayam, Anantapur & other campuses</li>
              <li><b>Campus System:</b> Residential Gurukula model</li>
              <li><b>Eligibility Highlights:</b> For direct interview, candidates must qualify national eligibility tests; otherwise, entrance test applies</li>
              <li><b>Fee Structure:</b> Tuition and admission fees are waived; only hostel lodging charges apply</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="andhra-university-details-container">
            <div className="andhra-phdimg" />
            <h2 className="andhra-university-title">{universityData.fullName}</h2>
            <div className="andhra-details-grid">
              {Object.entries(universityData).map(([key, value]) => (
                key !== "shortName" &&
                <div className="andhra-detail-item" key={key}>
                  <span className="andhra-detail-label">
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .replace("Phd", "PhD")}
                  </span>
                  {Array.isArray(value) ? (
                    <ul className="andhra-detail-list">
                      {value.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="andhra-detail-value">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <section className="andhra-alluniversityfaq-section">
              <h2>FAQs – SSSIHL PhD Admission</h2>
              <div className="andhra-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="andhra-side-box andhra-right-box">
            <h3>All Andhra Universities List</h3>
            <ul>
              <li><a href="/andhra/phd-admission-in-sssihl">SSSIHL</a></li>
              <li><a href="/andhra/phd-admission-in-nit-andhra-pradesh">NIT Andhra Pradesh</a></li>
              <li><a href="/andhra/phd-admission-in-central-university-of-andhra-pradesh">Central University AP</a></li>
              <li><a href="/andhra/phd-admission-in-central-tribal-university-of-andhra-pradesh">Central Tribal University AP</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Merit-based, tuition‑free Gurukula education system</li>
              <li>Multiple campuses including Prasanthi Nilayam, Anantapur</li>
              <li>Rolling admissions for direct interview candidates</li>
              <li>Residential and values-based learning environment</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SSSIHLDoctoral;
