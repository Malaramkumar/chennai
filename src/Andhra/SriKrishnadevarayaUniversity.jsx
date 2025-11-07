import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Sri Krishnadevaraya University?",
    answer:
      "Candidates must have a postgraduate degree (M.Tech/M.Sc/MA/M.Com) with a minimum of 55% marks or equivalent CGPA. Reserved category candidates get a 5% relaxation."
  },
  {
    question: "Does SKU conduct its own PhD entrance exam?",
    answer:
      "Yes, SKU conducts its own PhD entrance test. Candidates with UGC-NET, CSIR-NET, or GATE are exempt from the written test."
  },
  {
    question: "Which departments offer PhD at SKU?",
    answer:
      "PhD programs are offered in Engineering, Chemistry, Physics, Biotechnology, Management, Commerce, English, and other Arts & Science disciplines."
  },
  {
    question: "Is part-time PhD allowed?",
    answer:
      "Yes, SKU offers both full-time and part-time PhD programs for eligible candidates."
  },
  {
    question: "When is the PhD application cycle at SKU?",
    answer:
      "PhD admissions typically begin between June and August every year through the official portal."
  }
];

const universityData = {
  fullName: "PhD Admission in Sri Krishnadevaraya University",
  shortName: "Sri Krishnadevaraya University (SKU)",
  phdEntranceExam: "SKU PhD Entrance Test / UGC-NET / CSIR-NET / GATE",
  qualificationRequired: "Postgraduate degree in relevant field with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificate",
    "Academic Transcripts",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Research Proposal",
    "Scorecard of NET/GATE (if applicable)"
  ],
  applicationTimeline: "June – August (Tentative)",
  approxFee: "₹30,000 – ₹50,000 per year",
  scholarshipAvailability: "Available for full-time research scholars"
};

const SriKrishnadevarayaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Sri Krishnadevaraya University</h3>
            <ul>
              <li><b>Established:</b> 1981</li>
              <li><b>Type:</b> Public State University</li>
              <li><b>Location:</b> Anantapur, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Engineering, Science, Commerce, Arts</li>
              <li><b>Research Areas:</b><br />Engineering, Chemistry, Physics, English, Management, Biotechnology</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="telangana-university-details-container">
            <div className="telangana-phdimg" />
            <h2 className="telangana-university-title">{universityData.fullName}</h2>
            <div className="telangana-details-grid">
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Popularly Known As</span>
                <span className="telangana-detail-value">{universityData.shortName}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">PhD Entrance Exam</span>
                <span className="telangana-detail-value">{universityData.phdEntranceExam}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Qualification Required</span>
                <span className="telangana-detail-value">{universityData.qualificationRequired}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Work Experience</span>
                <span className="telangana-detail-value">{universityData.workExperience}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Mode of PhD</span>
                <span className="telangana-detail-value">{universityData.modeOfPhd}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Application Timeline</span>
                <span className="telangana-detail-value">{universityData.applicationTimeline}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Approx. Fee</span>
                <span className="telangana-detail-value">{universityData.approxFee}</span>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Documents Required</span>
                <ul className="telangana-detail-list">
                  {universityData.documentsRequired.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Scholarship/Fellowship</span>
                <span className="telangana-detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>

            <section className="telangana-alluniversityfaq-section">
              <h2>FAQs – Sri Krishnadevaraya University PhD Admission</h2>
              <div className="telangana-faq-items">
                {faqs.map((faq, index) => (
                  <details key={index}>
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
                    "mainEntity": faqs.map((faq) => ({
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
          <div className="telangana-side-box telangana-right-box">
            <h3>All Andhra Pradesh Universities List</h3>
            <ul>
              <li><a href="/andhra/phd-admission-in-jntukakinada">JNTU Kakinada</a></li>
              <li><a href="/andhra/phd-admission-in-jntu-anantapur">JNTUA Anantapur</a></li>
              <li><a href="/andhra/phd-admission-in-andhra-university">Andhra University</a></li>
              <li><a href="/andhra/phd-admission-in-krishna-university">Krishna University</a></li>
              <li><a href="/andhra/phd-admission-in-rgukt-nuzvid">RGUKT Nuzvid</a></li>
              <li><a href="/andhra/phd-admission-in-adikavi-nannaya">Adikavi Nannaya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Public State University with NAAC Accreditation</li>
              <li>Research programs in Arts, Sciences, and Engineering</li>
              <li>Located in Anantapur, Andhra Pradesh</li>
              <li>Fellowships available for qualified full-time scholars</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SriKrishnadevarayaUniversity;
