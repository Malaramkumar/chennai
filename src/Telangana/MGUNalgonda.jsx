import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at MGU Nalgonda?",
    answer: "Candidates should have a Master's degree with at least 55% marks (50% for reserved categories) from a recognized university."
  },
  {
    question: "Does MGU Nalgonda require an entrance test for PhD?",
    answer: "Yes, the university conducts a PhD Entrance Test. UGC-NET/CSIR-NET qualified candidates are exempted."
  },
  {
    question: "Is a part-time PhD available at MGU Nalgonda?",
    answer: "Yes, part-time PhD options are available for working professionals."
  },
  {
    question: "What are the research areas at MGU Nalgonda?",
    answer: "Major research areas include Chemistry, Life Sciences, Physics, Economics, Political Science, and Commerce."
  },
  {
    question: "What documents are required for PhD application?",
    answer: "Academic certificates, mark sheets, entrance test scorecard, ID proof, and research proposal are typically required."
  }
];

const universityData = {
  fullName: "PhD Admission in Mahatma Gandhi University, Nalgonda",
  shortName: "MGU Nalgonda",
  phdEntranceExam: "MGU PhD Entrance / UGC-NET",
  qualificationRequired: "Master’s degree with 55% marks",
  workExperience: "Not mandatory (preferred for part-time)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificate",
    "Mark Sheets (UG & PG)",
    "Entrance Exam Scorecard (if applicable)",
    "Caste Certificate (if applicable)",
    "ID & Address Proof",
    "Research Proposal (SOP)"
  ],
  applicationTimeline: "May – July (Tentative)",
  approxFee: "₹25,000 – ₹40,000 per year",
  scholarshipAvailability: "Fellowship may be available for full-time research scholars"
};

const MGUNalgonda = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About MGU Nalgonda</h3>
            <ul>
              <li><b>Established:</b> 2007</li>
              <li><b>Type:</b> State University</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Departments:</b><br /> Sciences, Humanities, Social Sciences, Commerce</li>
              <li><b>Research Focus:</b><br /> Rural Development, Environmental Science, Nanotechnology, Public Policy</li>
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
              <h2>FAQs – MGU Nalgonda PhD Admission</h2>
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
              <li>State Public University</li>
              <li>Interdisciplinary Research Focus</li>
              <li>Affordable Fee Structure</li>
              <li>Located in Nalgonda District</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MGUNalgonda;
