import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Telangana University?",
    answer: "Candidates should possess a Master’s degree with at least 55% marks (50% for SC/ST/OBC/PwD) in a relevant discipline."
  },
  {
    question: "Is an entrance exam required for PhD at Telangana University?",
    answer: "Yes, the university conducts a PhD entrance test. UGC-NET/JRF qualified candidates may be exempted."
  },
  {
    question: "What disciplines are available for PhD at Telangana University?",
    answer: "PhD is offered in disciplines such as English, Economics, Chemistry, Commerce, Biotechnology, and others under Arts & Science."
  },
  {
    question: "Is a research proposal mandatory during the application?",
    answer: "Yes, applicants are usually required to submit a brief research proposal or SOP."
  },
  {
    question: "When does the admission process generally begin?",
    answer: "Admissions usually begin between May and July each year."
  }
];

const universityData = {
  fullName: "PhD Admission in Telangana University",
  shortName: "Telangana University",
  phdEntranceExam: "University PhD Entrance / UGC-NET",
  qualificationRequired: "Master’s degree with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificate",
    "Marksheets (UG & PG)",
    "PhD Entrance Exam Scorecard (if applicable)",
    "Caste Certificate (if applicable)",
    "Government ID Proof",
    "Research Proposal or SOP"
  ],
  applicationTimeline: "May – July (Tentative)",
  approxFee: "₹20,000 – ₹30,000 per year",
  scholarshipAvailability: "Available for eligible candidates"
};

const TelanganaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Telangana University</h3>
            <ul>
              <li><b>Established:</b> 2006</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Nizamabad, Telangana</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Arts, Science, Commerce, Social Sciences</li>
              <li><b>Research Areas:</b><br /> English, Chemistry, Biotechnology, Economics, Commerce, Public Administration</li>
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
              <h2>FAQs – Telangana University PhD Admission</h2>
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
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>State Public University</li>
              <li>Located in Nizamabad, Telangana</li>
              <li>UGC-Recognized Research Programs</li>
              <li>Multi-disciplinary PhD Options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelanganaUniversity;
