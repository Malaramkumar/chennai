import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does PhD admission open at University of Hyderabad?",
    answer: "Admissions are usually announced between March and May every year. Check the official university portal for updates."
  },
  {
    question: "What is the eligibility for PhD at University of Hyderabad?",
    answer: "A Master’s degree with at least 55% marks (50% for reserved categories) in relevant disciplines."
  },
  {
    question: "Is there an entrance test for PhD at UoH?",
    answer: "Yes, the university conducts an entrance exam followed by an interview. UGC-NET/JRF candidates may be exempted from the test."
  },
  {
    question: "Is full-time and part-time PhD both available?",
    answer: "Yes, UoH offers both full-time and part-time PhD options depending on the department."
  },
  {
    question: "Are scholarships available for PhD students?",
    answer: "Yes, UGC fellowships, institutional scholarships, and project-based financial support are available."
  }
];

const universityData = {
  fullName: "PhD Admission in University of Hyderabad (UoH)",
  shortName: "University of Hyderabad",
  phdEntranceExam: "University Entrance / UGC-NET / JRF",
  qualificationRequired: "Master’s Degree with 55% marks (50% for SC/ST/OBC)",
  workExperience: "Not mandatory for full-time, required for part-time",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificates and Marksheets",
    "UGC-NET/JRF Certificate (if applicable)",
    "Research Proposal",
    "Experience Certificate (for part-time)",
    "NOC (if employed)",
    "Caste Certificate (if applicable)"
  ],
  applicationTimeline: "Generally March–May every year",
  approxFee: "₹20,000 – ₹30,000 annually",
  scholarshipAvailability: "Available via UGC, CSIR, and internal projects"
};

const UniversityOfHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About University of Hyderabad</h3>
            <ul>
              <li><b>Established:</b> 1974</li>
              <li><b>Type:</b> Central University</li>
              <li><b>Rankings:</b><br /> NIRF Top 10 (Universities Category)</li>
              <li><b>Known For:</b><br /> Research in sciences, humanities, social sciences, and interdisciplinary programs.</li>
              <li><b>Campus:</b><br /> 2,000+ acres with advanced research labs and a strong academic ecosystem.</li>
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
              <h2>FAQs – University of Hyderabad PhD Admission</h2>
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
              <li>Top-ranked Central University</li>
              <li>Wide range of interdisciplinary PhD programs</li>
              <li>High research output & international collaborations</li>
              <li>UGC/CSIR Fellowship Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityOfHyderabad;
