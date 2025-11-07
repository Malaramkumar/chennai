import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Palamuru University?",
    answer: "Applicants must possess a Master's degree with at least 55% marks (50% for SC/ST/OBC/PWD candidates) in the relevant discipline."
  },
  {
    question: "Does Palamuru University conduct a PhD entrance exam?",
    answer: "Yes, a university-level entrance exam is conducted. However, UGC-NET/JRF qualified candidates are usually exempted."
  },
  {
    question: "Which faculties offer PhD at Palamuru University?",
    answer: "PhD is offered in faculties like Chemistry, English, Commerce, Political Science, and other Arts & Science subjects."
  },
  {
    question: "Is a research proposal required at the time of application?",
    answer: "Yes, a brief research proposal or Statement of Purpose (SOP) is typically required."
  },
  {
    question: "When does the PhD admission process usually start?",
    answer: "The admission process generally starts around June or July each year."
  }
];

const universityData = {
  fullName: "PhD Admission in Palamuru University",
  shortName: "Palamuru University",
  phdEntranceExam: "University PhD Entrance / UGC-NET",
  qualificationRequired: "Master’s degree with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Marksheets (UG & PG)",
    "Entrance Exam Scorecard (if applicable)",
    "Caste Certificate (if applicable)",
    "ID Proof (Aadhaar, PAN, etc.)",
    "Research Proposal or SOP"
  ],
  applicationTimeline: "June – July (Tentative)",
  approxFee: "₹25,000 – ₹35,000 per year",
  scholarshipAvailability: "Limited fellowships available"
};

const PalamuruUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Palamuru University</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Mahbubnagar, Telangana</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Arts, Science, Commerce, Management</li>
              <li><b>Research Areas:</b><br /> Chemistry, Commerce, Political Science, English, Public Administration</li>
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
              <h2>FAQs – Palamuru University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-palamuru-university">Palamuru University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>State Government University</li>
              <li>Located in Mahbubnagar</li>
              <li>Research-oriented Faculty</li>
              <li>Affordable Research Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalamuruUniversity;
