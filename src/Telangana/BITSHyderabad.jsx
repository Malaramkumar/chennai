import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does BITS Hyderabad offer PhD programs?",
    answer: "Yes, BITS Hyderabad offers full-time and part-time PhD programs in various disciplines of Engineering, Science, and interdisciplinary areas."
  },
  {
    question: "What is the eligibility for PhD at BITS Hyderabad?",
    answer: "A Master’s degree (M.E./M.Tech./M.Sc./M.Phil) with minimum 60% aggregate or equivalent CGPA. Exceptional candidates with B.E./B.Tech may also apply."
  },
  {
    question: "Is there an entrance exam for PhD admission at BITS Hyderabad?",
    answer: "Yes, BITS Pilani conducts a PhD entrance test and interview for eligible applicants. GATE/NET-qualified candidates may get exemptions."
  },
  {
    question: "What is the mode of PhD offered by BITS Hyderabad?",
    answer: "Both full-time and part-time (for working professionals) PhD options are available."
  },
  {
    question: "Are fellowships available for PhD students?",
    answer: "Yes, full-time PhD students may receive institute fellowships subject to academic performance and availability."
  }
];

const universityData = {
  fullName: "PhD Admission in BITS Hyderabad - Birla Institute of Technology and Science",
  shortName: "BITS Hyderabad",
  phdEntranceExam: "BITS PhD Admission Test / NET / GATE",
  qualificationRequired: "M.E. / M.Tech / M.Sc. with 60% or CGPA 6.0+; Exceptional B.E./B.Tech candidates may apply",
  workExperience: "Required for part-time PhD",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificates & Marksheets",
    "UG Marksheets and Certificates",
    "Research Proposal",
    "Valid ID Proof",
    "GATE/NET Scorecard (if applicable)",
    "No Objection Certificate (for part-time applicants)"
  ],
  applicationTimeline: "PhD admissions usually open twice a year – June-July and Dec-Jan",
  approxFee: "₹50,000 – ₹1,00,000 per year (varies by department)",
  scholarshipAvailability: "Institute fellowship available for full-time PhD scholars"
};

const BITSHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About BITS Hyderabad</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> Deemed University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Parent Institute:</b> BITS Pilani</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Engineering, Computer Science, Physics, Chemistry, Mathematics, Management</li>
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
              <h2>FAQs – BITS Hyderabad PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-rgukt-basar">RGUKT Basar</a></li>
              <li><a href="/telangana/phd-admission-in-bits-hyderabad">BITS Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-chaitanya-university">Chaitanya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Part of BITS Pilani Group</li>
              <li>Highly Research-Oriented Culture</li>
              <li>Fellowships & On-Campus Research Labs</li>
              <li>Located in Hyderabad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BITSHyderabad;
