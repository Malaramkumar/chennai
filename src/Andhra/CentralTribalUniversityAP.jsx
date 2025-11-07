import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Central Tribal University of Andhra Pradesh offer PhD programs?",
    answer: "Yes, the university offers PhD programs in Arts, Languages, and Social Sciences. New disciplines may be added based on faculty availability."
  },
  {
    question: "What is the PhD admission process at CTUAP?",
    answer: "Admission is based on a university-conducted entrance test or UGC-NET/CUET scores, followed by an interview."
  },
  {
    question: "Are there any fellowships available for PhD scholars?",
    answer: "Yes, eligible full-time research scholars can apply for UGC JRF and other central government fellowships."
  },
  {
    question: "Can I apply for a PhD without NET?",
    answer: "Yes, candidates can appear for the university’s entrance exam if they do not have a UGC-NET/CUET score."
  },
  {
    question: "Is there any reservation for tribal candidates?",
    answer: "Yes, reservations are provided as per Government of India norms, including special focus on tribal students."
  }
];

const universityData = {
  fullName: "PhD Admission in Central Tribal University of Andhra Pradesh – Vizianagaram",
  shortName: "CTUAP",
  phdEntranceExam: "University Entrance Exam / CUET / UGC-NET + Interview",
  qualificationRequired: "Master’s degree in relevant Arts/Science stream with at least 55% (50% for SC/ST/OBC)",
  workExperience: "Not mandatory for full-time PhD",
  modeOfPhd: "Full-Time",
  documentsRequired: [
    "PG and UG Marksheets & Certificates",
    "Entrance Test or NET Scorecard (if applicable)",
    "Research Proposal or Statement of Purpose",
    "Government ID (Aadhaar, PAN, etc.)",
    "Caste/Tribe Certificate (if applicable)"
  ],
  applicationTimeline: "Generally announced between May–June or November–December",
  approxFee: "₹10,000 – ₹18,000 per year",
  scholarshipAvailability: "Yes, UGC fellowships and tribal student schemes available"
};

const CentralTribalUniversityAP = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About Central Tribal University of Andhra Pradesh</h3>
            <ul>
              <li><b>Established:</b> 2019</li>
              <li><b>Type:</b> Central University</li>
              <li><b>Location:</b> Vizianagaram, Andhra Pradesh</li>
              <li><b>NAAC Accreditation:</b> To be accredited</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>PhD Disciplines:</b> Arts, Languages, Social Sciences, Tribal Studies</li>
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
              <h2>FAQs – CTUAP PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-central-university-of-andhra-pradesh">Central University of Andhra Pradesh</a></li>
              <li><a href="/andhra/phd-admission-in-central-tribal-university-of-andhra-pradesh">Central Tribal University of Andhra Pradesh</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Focused on Tribal Studies & Inclusive Research</li>
              <li>Located in Vizianagaram district of Andhra Pradesh</li>
              <li>Support for socially and economically disadvantaged communities</li>
              <li>Fellowship opportunities for full-time scholars</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralTribalUniversityAP;
