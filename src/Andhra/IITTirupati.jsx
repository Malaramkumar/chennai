import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at IIT Tirupati?",
    answer: "Candidates must have a Master’s degree in a relevant field with at least 60% marks or 6.5 CGPA."
  },
  {
    question: "Does IIT Tirupati accept GATE or NET for PhD admission?",
    answer: "Yes, candidates with GATE, UGC-NET, CSIR-NET, or equivalent qualifications are eligible."
  },
  {
    question: "What research areas are available at IIT Tirupati?",
    answer: "PhD programs are offered in Engineering, Sciences, and Humanities & Social Sciences."
  },
  {
    question: "Are fellowships available for PhD students?",
    answer: "Yes, eligible full-time PhD students receive fellowships as per MHRD/Institute norms."
  },
  {
    question: "What is the admission timeline for PhD at IIT Tirupati?",
    answer: "PhD admissions are typically conducted in May-June and November-December cycles."
  }
];

const universityData = {
  fullName: "PhD Admission in IIT Tirupati",
  shortName: "Indian Institute of Technology (IIT) Tirupati",
  phdEntranceExam: "GATE / UGC-NET / CSIR-NET / Institute Written Test",
  qualificationRequired: "Master’s degree with minimum 60% marks or 6.5 CGPA",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "Entrance Exam Scorecard",
    "Photo ID Proof",
    "Category Certificate (if applicable)",
    "Statement of Purpose / Research Proposal"
  ],
  applicationTimeline: "May – June and November – December",
  approxFee: "₹20,000 – ₹30,000 per semester",
  scholarshipAvailability: "Available for eligible full-time scholars"
};

const IITTirupati = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About IIT Tirupati</h3>
            <ul>
              <li><b>Established:</b> 2015</li>
              <li><b>Type:</b> Institute of National Importance</li>
              <li><b>Location:</b> Tirupati, Andhra Pradesh</li>
              <li><b>Recognized By:</b> Ministry of Education, Govt. of India</li>
              <li><b>Faculties:</b> Engineering, Sciences, Humanities</li>
              <li><b>Research Areas:</b><br />CSE, Electrical, Mechanical, Civil, Chemistry, Physics, Mathematics, Humanities</li>
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
              <h2>FAQs – IIT Tirupati PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-nit-warangal">NIT Warangal</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Institute of National Importance</li>
              <li>Advanced Research Labs</li>
              <li>Interdisciplinary PhD Options</li>
              <li>Government Funded Fellowships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IITTirupati;
