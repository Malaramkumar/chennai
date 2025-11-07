import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Osmania University?",
    answer: "Candidates must have a Master’s degree (M.A., M.Sc., M.Tech., M.E., etc.) with at least 55% marks. Relaxation is provided for reserved categories as per government norms."
  },
  {
    question: "Is a PhD entrance exam required at Osmania University?",
    answer: "Yes, Osmania University conducts a PhD entrance exam. Candidates with UGC-NET/JRF/CSIR/GATE are exempted from the entrance."
  },
  {
    question: "Which disciplines offer PhD at Osmania University?",
    answer: "PhD programs are available in Arts, Science, Engineering, Management, Commerce, and Social Sciences."
  },
  {
    question: "Does Osmania University offer part-time PhD?",
    answer: "Yes, part-time and full-time options are available depending on department norms and candidate eligibility."
  },
  {
    question: "What is the application period for PhD at Osmania University?",
    answer: "PhD admissions generally begin between May and July every year."
  }
];

const universityData = {
  fullName: "PhD Admission in Osmania University, Hyderabad",
  shortName: "Osmania University",
  phdEntranceExam: "OU PhD Entrance Test / UGC-NET / CSIR / GATE",
  qualificationRequired: "Master’s degree in relevant field with 55% marks",
  workExperience: "Preferred for part-time PhD applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificate & Marksheets",
    "UG Marksheets",
    "Research Proposal",
    "Caste Certificate (if applicable)",
    "Entrance Test Scorecard (if applicable)",
    "ID Proof"
  ],
  applicationTimeline: "Usually opens between May and July",
  approxFee: "₹40,000 – ₹80,000 per year",
  scholarshipAvailability: "Available through university or government schemes"
};

const OsmaniaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Osmania University, Hyderabad</h3>
            <ul>
              <li><b>Established:</b> 1918</li>
              <li><b>Type:</b> Public State University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Accreditation:</b> NAAC A+</li>
              <li><b>Approved By:</b> UGC, AICTE</li>
              <li><b>Research Areas:</b><br />Arts, Science, Engineering, Law, Commerce, Social Sciences</li>
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
              <h2>FAQs – Osmania University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-mgu-nalgonda">MGU Nalgonda</a></li>
              <li><a href="/telangana/phd-admission-in-satavahana-university">Satavahana University</a></li>
              <li><a href="/telangana/phd-admission-in-palamuru-university">Palamuru University</a></li>
              <li><a href="/telangana/phd-admission-in-telangana-university">Telangana University</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-chaitanya-university">Chaitanya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>One of the Oldest Indian Universities (Est. 1918)</li>
              <li>Strong Research Culture in Arts, Science & Engineering</li>
              <li>UGC, AICTE Approved & NAAC A+ Accredited</li>
              <li>Located in Hyderabad City</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsmaniaUniversity;
