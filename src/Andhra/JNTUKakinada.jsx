import Subsidebar from "../pages/Subsidebar";
import "../telangana/Telangana.scss";

const faqs = [
  {
    question: "Does JNTU Kakinada offer PhD programs?",
    answer: "Yes, JNTU Kakinada offers PhD programs in various disciplines such as Engineering, Science, Management, and Humanities."
  },
  {
    question: "What is the eligibility for PhD at JNTU Kakinada?",
    answer: "A Master's degree in a relevant discipline with at least 55% marks is required. SC/ST candidates may have a relaxation of 5%."
  },
  {
    question: "Is an entrance exam mandatory for PhD admission?",
    answer: "Yes, candidates must clear the JNTUK PhD Entrance Test and Interview. Exemption is available for NET/SET/GATE qualified candidates."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes, JNTUK provides part-time PhD opportunities for working professionals with relevant experience and NOC from employer."
  },
  {
    question: "Are scholarships or fellowships available?",
    answer: "Yes, fellowships such as UGC JRF, CSIR, and other project-based funding may be available based on department and merit."
  }
];

const universityData = {
  fullName: "PhD Admission in JNTU Kakinada – Jawaharlal Nehru Technological University",
  shortName: "JNTUK",
  phdEntranceExam: "JNTUK PhD Entrance Test / GATE / NET / SET + Interview",
  qualificationRequired: "Master’s degree in Engineering/Technology/Science with minimum 55%",
  workExperience: "Mandatory for part-time candidates (minimum 2 years)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG and UG Certificates with Marksheets",
    "GATE/NET/SET scorecard (if applicable)",
    "Identity Proof (Aadhar/Passport)",
    "Research Proposal",
    "Experience Certificate (for part-time)",
    "NOC from Employer (for part-time)",
    "Caste/Community Certificate (if applicable)"
  ],
  applicationTimeline: "Typically announced in Jan–Feb or Aug–Sep",
  approxFee: "₹30,000 – ₹60,000 per year",
  scholarshipAvailability: "Yes, UGC/CSIR and project-based fellowships"
};

const JNTUKakinada = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About JNTU Kakinada</h3>
            <ul>
              <li><b>Established:</b> 1946 (as Engineering College), became JNTU in 1972</li>
              <li><b>Type:</b> State Public Technical University</li>
              <li><b>Location:</b> Kakinada, Andhra Pradesh</li>
              <li><b>NAAC Accreditation:</b> A Grade</li>
              <li><b>Recognized By:</b> UGC, AICTE</li>
              <li><b>PhD Streams:</b> Engineering, Science, Pharmacy, Management, Humanities</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="andhra-university-details-container">
            <div className="andhra-phdimg" />
            <h2 className="andhra-university-title">{universityData.fullName}</h2>
            <div className="andhra-details-grid">
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Popularly Known As</span>
                <span className="andhra-detail-value">{universityData.shortName}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">PhD Entrance Exam</span>
                <span className="andhra-detail-value">{universityData.phdEntranceExam}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Qualification Required</span>
                <span className="andhra-detail-value">{universityData.qualificationRequired}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Work Experience</span>
                <span className="andhra-detail-value">{universityData.workExperience}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Mode of PhD</span>
                <span className="andhra-detail-value">{universityData.modeOfPhd}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Application Timeline</span>
                <span className="andhra-detail-value">{universityData.applicationTimeline}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Approx. Fee</span>
                <span className="andhra-detail-value">{universityData.approxFee}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Documents Required</span>
                <ul className="andhra-detail-list">
                  {universityData.documentsRequired.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Scholarship/Fellowship</span>
                <span className="andhra-detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>

            <section className="andhra-alluniversityfaq-section">
              <h2>FAQs – JNTU Kakinada PhD Admission</h2>
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
          <div className="andhra-side-box andhra-right-box">
            <h3>All Andhra Universities List</h3>
            <ul>
              <li><a href="/andhra/phd-admission-in-andhra-university">Andhra University</a></li>
              <li><a href="/andhra/phd-admission-in-jntuk-kakinada">JNTU Kakinada</a></li>
              <li><a href="/andhra/phd-admission-in-sri-venkateswara-university">Sri Venkateswara University</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
              <li><a href="/andhra/phd-admission-in-dravidian-university">Dravidian University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Renowned for Engineering and Research</li>
              <li>NAAC Accredited “A” Grade</li>
              <li>Dedicated Research Centers</li>
              <li>Part-time PhD for Industry Professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JNTUKakinada;
