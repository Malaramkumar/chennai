import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at RGUKT Nuzvid?",
    answer:
      "Applicants must have a postgraduate degree (M.Tech/M.E/M.Sc) with at least 55% marks or equivalent CGPA. Reserved category candidates get 5% relaxation."
  },
  {
    question: "Does RGUKT Nuzvid conduct its own PhD entrance exam?",
    answer:
      "Yes, RGUKT may conduct a written entrance test followed by interview. UGC-NET/GATE qualified candidates may be exempted from the written exam."
  },
  {
    question: "What are the research areas available?",
    answer:
      "PhD is offered in Engineering, Computer Science, Electronics, Physics, and related interdisciplinary areas."
  },
  {
    question: "Is part-time PhD available at RGUKT?",
    answer:
      "Yes, RGUKT offers both full-time and part-time PhD modes depending on the department and supervisor availability."
  },
  {
    question: "When is the PhD admission cycle at RGUKT?",
    answer:
      "PhD admissions are generally announced between June and August through the official website."
  }
];

const universityData = {
  fullName: "PhD Admission in RGUKT Nuzvid",
  shortName: "RGUKT Nuzvid",
  phdEntranceExam: "RGUKT PhD Entrance Test / UGC-NET / GATE",
  qualificationRequired: "Postgraduate degree in relevant field with 55% marks",
  workExperience: "Not mandatory for full-time; preferred for part-time",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Research Proposal",
    "Entrance Exam Scorecard (if applicable)"
  ],
  applicationTimeline: "June – August (Tentative)",
  approxFee: "₹40,000 – ₹65,000 per year",
  scholarshipAvailability: "Available for full-time research scholars"
};

const RGUKTNuzvid = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About RGUKT Nuzvid</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Nuzvid, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Engineering, Sciences, Technology</li>
              <li><b>Research Areas:</b><br />Computer Science, Electronics, Physics, Applied Mathematics</li>
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
              <h2>FAQs – RGUKT Nuzvid PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya">Sri Krishnadevaraya University</a></li>
              <li><a href="/andhra/phd-admission-in-adikavi-nannaya">Adikavi Nannaya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Premier engineering-focused university in AP</li>
              <li>Interdisciplinary PhD research encouraged</li>
              <li>UGC-recognized & government funded</li>
              <li>Multiple campuses under RGUKT system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGUKTNuzvid;
