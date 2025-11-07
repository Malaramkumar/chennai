import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Is PhD admission open at the Central University of Andhra Pradesh?",
    answer: "Yes, the university periodically announces PhD admissions in Engineering and other disciplines as per UGC guidelines."
  },
  {
    question: "What is the selection process for PhD at CUAP?",
    answer: "Selection is based on CUET-PG/UGC-NET scores followed by a personal interview conducted by the respective department."
  },
  {
    question: "Are part-time PhD options available at CUAP?",
    answer: "Currently, CUAP offers full-time PhD programs. Part-time modes may be introduced in the future."
  },
  {
    question: "Does CUAP offer any fellowships?",
    answer: "Yes, UGC fellowships such as JRF and institutional assistantships are available for eligible full-time scholars."
  },
  {
    question: "What is the eligibility requirement?",
    answer: "A Master's degree in Engineering/Technology with at least 55% marks (50% for SC/ST/OBC) is required."
  }
];

const universityData = {
  fullName: "PhD Admission in Central University of Andhra Pradesh – CUAP",
  shortName: "CUAP",
  phdEntranceExam: "CUET-PG / UGC-NET + Departmental Interview",
  qualificationRequired: "Master’s degree in Engineering/Technology with minimum 55%",
  workExperience: "Not mandatory (only full-time offered currently)",
  modeOfPhd: "Full-Time",
  documentsRequired: [
    "PG and UG Certificates and Marksheets",
    "Valid CUET-PG / UGC-NET scorecard",
    "ID Proof (Aadhaar, PAN, etc.)",
    "Statement of Purpose / Research Proposal",
    "Caste/Category Certificate (if applicable)"
  ],
  applicationTimeline: "Typically announced in April–May or November–December",
  approxFee: "₹15,000 – ₹25,000 per year",
  scholarshipAvailability: "Yes, through UGC fellowships and institutional support"
};

const CentralUniversityAP = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About Central University of Andhra Pradesh</h3>
            <ul>
              <li><b>Established:</b> 2018</li>
              <li><b>Type:</b> Central University</li>
              <li><b>Location:</b> Anantapur, Andhra Pradesh</li>
              <li><b>NAAC Accreditation:</b> Awaiting first cycle</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>PhD Disciplines:</b> Engineering, Science, Social Sciences, Languages</li>
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
              <h2>FAQs – CUAP PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-central-university-of-andhra-pradesh">Central University of Andhra Pradesh</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>New-generation Central University in Anantapur</li>
              <li>Focus on interdisciplinary research and innovation</li>
              <li>UGC and CUET aligned admission processes</li>
              <li>UGC fellowships for eligible candidates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralUniversityAP;
