import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at BRAOU?",
    answer: "Candidates must possess a Master’s degree in the relevant discipline with at least 55% marks or equivalent CGPA. Relaxation is applicable for reserved categories."
  },
  {
    question: "Does BRAOU conduct an entrance exam for PhD?",
    answer: "Yes, BRAOU conducts its own PhD entrance test. Candidates with UGC-NET or equivalent qualification may be exempted."
  },
  {
    question: "Which research areas are offered at BRAOU?",
    answer: "BRAOU offers research opportunities in disciplines like English, Economics, Public Administration, Sociology, and Management."
  },
  {
    question: "Is part-time PhD available at BRAOU?",
    answer: "Yes, both full-time and part-time PhD modes are available for eligible candidates."
  },
  {
    question: "What is the application timeline for BRAOU PhD?",
    answer: "The PhD application process generally begins around June/July."
  }
];

const universityData = {
  fullName: "PhD Admission in Dr. B.R. Ambedkar Open University (BRAOU)",
  shortName: "BRAOU",
  phdEntranceExam: "BRAOU PhD Entrance / UGC-NET",
  qualificationRequired: "Master’s degree with minimum 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificate",
    "Provisional Certificates",
    "Mark Sheets",
    "Entrance Scorecard (if applicable)",
    "Identity Proof",
    "Caste Certificate (if applicable)",
    "Research Proposal"
  ],
  applicationTimeline: "June – August (Tentative)",
  approxFee: "₹40,000 – ₹60,000 per year",
  scholarshipAvailability: "Limited support for full-time researchers"
};

const BRAOU = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Dr. B.R. Ambedkar Open University (BRAOU)</h3>
            <ul>
              <li><b>Established:</b> 1982</li>
              <li><b>Type:</b> State Open University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Approved By:</b> UGC, DEB</li>
              <li><b>Disciplines:</b> Arts, Science, Commerce, Social Sciences</li>
              <li><b>Research Areas:</b><br />English, Economics, Public Admin, Sociology, Management</li>
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
              <h2>FAQs – BRAOU PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-palamuru-university">Palamuru University</a></li>
              <li><a href="/telangana/phd-admission-in-telangana-university">Telangana University</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">Dr. B.R. Ambedkar Open University (BRAOU)</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>State Open University</li>
              <li>Located in Hyderabad, Telangana</li>
              <li>Focus on Arts & Social Sciences</li>
              <li>Flexible PhD modes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BRAOU;
