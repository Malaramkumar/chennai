import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at GITAM Visakhapatnam?",
    answer: "Candidates must have a Master’s degree (M.Tech, M.E, MBA, M.Sc, etc.) with at least 55% marks or equivalent CGPA from a recognized institution."
  },
  {
    question: "Does GITAM conduct a separate entrance exam for PhD?",
    answer: "Yes, GITAM conducts its own PhD entrance exam and interview. UGC-NET/GATE qualified candidates may be exempted."
  },
  {
    question: "What research areas are available at GITAM Visakhapatnam?",
    answer: "PhD research is available in Engineering (CSE, ECE, Mechanical, Civil), Management, Sciences, Pharmacy, and Humanities."
  },
  {
    question: "Is fellowship or stipend available for PhD scholars?",
    answer: "Yes, GITAM provides fellowships to full-time PhD scholars based on merit and availability of funded projects."
  },
  {
    question: "When does the PhD admission process usually start at GITAM?",
    answer: "PhD admission notifications are generally released in May/June and the selection process completes by August/September."
  }
];

const universityData = {
  fullName: "PhD Admission in GITAM Visakhapatnam Campus",
  shortName: "GITAM University Visakhapatnam",
  phdEntranceExam: "GITAM PhD Entrance Test / UGC-NET / GATE",
  qualificationRequired: "Postgraduate degree with minimum 55% marks",
  workExperience: "Not mandatory for full-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "Entrance Test Scorecard (if applicable)",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Research Proposal"
  ],
  applicationTimeline: "May – August (Tentative)",
  approxFee: "₹60,000 – ₹90,000 per year",
  scholarshipAvailability: "Yes, for eligible full-time candidates"
};

const GITAMVisakhapatnam = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About GITAM Visakhapatnam</h3>
            <ul>
              <li><b>Established:</b> 1980</li>
              <li><b>Type:</b> Deemed to be University</li>
              <li><b>Location:</b> Visakhapatnam, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC, AICTE, NAAC A++</li>
              <li><b>Faculties:</b> Engineering, Management, Science, Pharmacy, Law, Humanities</li>
              <li><b>Research Areas:</b><br />CSE, ECE, Mechanical, Civil, Business Management, Physics, Chemistry, Pharmacy, Law</li>
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
              <h2>FAQs – GITAM Visakhapatnam PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-jntu-hyderabad">JNTU Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
              {/* Add more if needed */}
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Deemed to be University</li>
              <li>NAAC A++ Accredited</li>
              <li>Strong Research Ecosystem</li>
              <li>PhD Across Engineering, Sciences, Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GITAMVisakhapatnam;
