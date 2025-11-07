   import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Is PhD admission open at KLEF?",
    answer: "Yes, KLEF invites applications for PhD programs in Engineering, Management, and other fields, typically twice a year."
  },
  {
    question: "What is the selection process for PhD at KLEF?",
    answer: "Candidates must clear the KLEF PhD Entrance Test (KLURAT) followed by an interview. GATE/NET/JRF/MPhil qualified candidates are exempt from the entrance test."
  },
  {
    question: "Can working professionals apply for a PhD at KLEF?",
    answer: "Yes, part-time PhD programs are available for working professionals with a minimum of 2 years of relevant experience and an employer’s NOC."
  },
  {
    question: "Does KLEF provide any scholarships for PhD scholars?",
    answer: "Yes, full-time PhD scholars may receive fellowships or stipends based on eligibility and availability, such as UGC/CSIR or university-specific schemes."
  },
  {
    question: "What is the minimum qualification required for PhD at KLEF?",
    answer: "A Master’s degree in the relevant field with at least 55% marks (50% for SC/ST/OBC candidates) is required."
  }
];

const universityData = {
  fullName: "PhD Admission in Koneru Lakshmaiah Education Foundation (KLEF) – KL University",
  shortName: "KLEF (KL University)",
  phdEntranceExam: "KLURAT / GATE / NET / JRF / MPhil + Interview",
  qualificationRequired: "Master’s degree with minimum 55% in relevant discipline (50% for SC/ST/OBC)",
  workExperience: "Required for part-time applicants (minimum 2 years)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG and UG Degree Certificates & Marksheets",
    "Valid GATE/NET/JRF/MPhil scorecard (if applicable)",
    "Aadhaar Card or Photo ID Proof",
    "Research Proposal",
    "Experience Certificate (for part-time)",
    "Employer’s NOC (for part-time)",
    "Community/Caste Certificate (if applicable)"
  ],
  applicationTimeline: "Typically announced in June and December",
  approxFee: "₹40,000 – ₹70,000 per year",
  scholarshipAvailability: "Yes, for full-time scholars through UGC/CSIR or university schemes"
};

const KLEFPhDAdmission = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About KLEF (KL University)</h3>
            <ul>
              <li><b>Established:</b> 1980, deemed university in 2009</li>
              <li><b>Type:</b> Deemed-to-be University</li>
              <li><b>Location:</b> Vaddeswaram, Guntur, Andhra Pradesh</li>
              <li><b>NAAC Accreditation:</b> A++ Grade</li>
              <li><b>Recognized By:</b> UGC, AICTE</li>
              <li><b>PhD Disciplines:</b> Engineering, Management, Sciences, Humanities</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="andhra-university-details-container">
            <img src="/images/klef-campus.jpg" alt="KLEF Campus" className="andhra-phdimg" />
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
              <h2>FAQs – KLEF PhD Admission</h2>
              <div className="andhra-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i} aria-expanded="false">
                    <summary role="button" aria-controls={`faq-${i}`}>{faq.question}</summary>
                    <p id={`faq-${i}`}>{faq.answer}</p>
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
              <li><a href="/andhra/phd-admission-in-klef">KLEF (KL University)</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Top-Ranked Deemed University in Andhra Pradesh</li>
              <li>Strong Industry Linkages for Engineering & Management</li>
              <li>Advanced Research Facilities</li>
              <li>Flexible PhD Options for Professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KLEFPhDAdmission;    