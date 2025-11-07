import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at IFHE Hyderabad?",
    answer: "Candidates must hold a Master’s degree (e.g., MBA, M.Tech, M.Sc, etc.) with at least 60% marks or equivalent CGPA."
  },
  {
    question: "Are there part-time PhD options at IFHE Hyderabad?",
    answer: "Yes, IFHE Hyderabad offers both full-time and part-time PhD programs."
  },
  {
    question: "Does IFHE Hyderabad conduct an entrance test for PhD?",
    answer: "Yes, IFHE conducts its own entrance test and interview for PhD admissions. UGC-NET qualified candidates may be exempted from the entrance test."
  },
  {
    question: "Are fellowships available for PhD students?",
    answer: "Limited fellowships are available for meritorious full-time research scholars."
  },
  {
    question: "What is the research focus at IFHE Hyderabad?",
    answer: "Focus areas include management, finance, law, technology, and interdisciplinary research in emerging areas."
  }
];

const universityData = {
  fullName: "PhD Admission in ICFAI Foundation for Higher Education (IFHE) Hyderabad",
  shortName: "IFHE Hyderabad",
  phdEntranceExam: "IFHE PhD Entrance / UGC-NET",
  qualificationRequired: "Master’s degree with 60% marks",
  workExperience: "Preferred for part-time PhD",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Mark Sheets (UG & PG)",
    "UGC-NET Scorecard (if applicable)",
    "Statement of Purpose (SOP)",
    "Work Experience Certificate (for part-time)",
    "ID & Address Proof"
  ],
  applicationTimeline: "May – July & November – December",
  approxFee: "₹1,00,000 – ₹1,50,000 per year",
  scholarshipAvailability: "Merit-based fellowships for full-time scholars"
};

const IFHEHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About IFHE Hyderabad</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> Deemed to be University</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Specializations:</b><br /> Management, Finance, Law, Engineering, Technology</li>
              <li><b>Research Areas:</b><br /> Strategic Management, Corporate Law, Data Science, FinTech, etc.</li>
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
              <h2>FAQs – IFHE Hyderabad PhD Admission</h2>
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
            <h3>All Telangana Universities List</h3>
            <ul>
              <li><a href="/telangana/phd-admission-in-iiit-hyderabad">IIIT Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-iit-hyderabad">IIT Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-kakatiya-university">Kakatiya University</a></li>
              <li><a href="/telangana/phd-admission-in-university-of-hyderabad">University of Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-jntu-hyderabad">JNTU Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-nit-warangal">NIT Warangal</a></li>
              <li><a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-mgu-nalgonda">MGU Nalgonda</a></li>
              <li><a href="/telangana/phd-admission-in-satavahana-university">Satavahana University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Private Deemed University</li>
              <li>Industry-Aligned Research</li>
              <li>Flexible Part-Time PhD Options</li>
              <li>Management and Technology Research</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFHEHyderabad;
