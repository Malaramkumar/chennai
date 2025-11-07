import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";
const faqs = [
  {
    question: "Is PhD admission open at JNTUA Anantapur?",
    answer: "Yes, JNTUA Anantapur regularly invites applications for PhD admission in Engineering, Science, Management, and other fields based on availability."
  },
  {
    question: "What is the selection process for PhD at JNTUA?",
    answer: "Candidates must appear for the JNTUA PhD Entrance Exam followed by an interview. Exemptions are given to GATE/NET qualified candidates."
  },
  {
    question: "Can working professionals apply for a PhD at JNTUA?",
    answer: "Yes, part-time PhD programs are available for faculty and industry professionals with relevant experience and employer NOC."
  },
  {
    question: "Does JNTUA provide any scholarships?",
    answer: "Yes, eligible full-time scholars can avail UGC/CSIR fellowships or project assistantships based on department availability."
  },
  {
    question: "What is the minimum qualification required?",
    answer: "A Master’s degree in the relevant field with at least 55% marks is required (50% for SC/ST/OBC)."
  }
];

const universityData = {
  fullName: "PhD Admission in JNTUA Anantapur – Jawaharlal Nehru Technological University",
  shortName: "JNTUA",
  phdEntranceExam: "JNTUA PhD Entrance Test / GATE / NET / SET + Interview",
  qualificationRequired: "Master’s degree with minimum 55% in relevant discipline",
  workExperience: "Required for part-time applicants (minimum 2 years)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG and UG Degree Certificates & Marksheets",
    "Valid GATE/NET/SET scorecard (if applicable)",
    "Aadhaar Card or Photo ID Proof",
    "Research Proposal",
    "Experience Certificate (for part-time)",
    "Employer’s NOC (for part-time)",
    "Community/Caste Certificate (if applicable)"
  ],
  applicationTimeline: "Usually announced in January or July",
  approxFee: "₹35,000 – ₹65,000 per year",
  scholarshipAvailability: "Yes, for full-time scholars through various schemes"
};

const JNTUAAnantapur = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About JNTUA Anantapur</h3>
            <ul>
              <li><b>Established:</b> 1946 (Engineering College), became JNTUA in 2008</li>
              <li><b>Type:</b> State Technical University</li>
              <li><b>Location:</b> Anantapur, Andhra Pradesh</li>
              <li><b>NAAC Accreditation:</b> A Grade</li>
              <li><b>Recognized By:</b> UGC, AICTE</li>
              <li><b>PhD Disciplines:</b> Engineering, Science, Pharmacy, Management</li>
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
              <h2>FAQs – JNTUA Anantapur PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-jntua-anantapur">JNTUA Anantapur</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
              <li><a href="/andhra/phd-admission-in-dravidian-university">Dravidian University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Premier Technical University in Rayalaseema</li>
              <li>Strong focus on Engineering & Applied Sciences</li>
              <li>Recognized Research Centers</li>
              <li>Part-time PhD for Faculty and Industry Professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JNTUAAnantapur;
