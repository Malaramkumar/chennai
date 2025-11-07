import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Adikavi Nannaya University?",
    answer: "Candidates must have a postgraduate degree (M.Tech/M.E/M.Sc/MBA/M.Com) with at least 55% marks or equivalent CGPA."
  },
  {
    question: "Does Adikavi Nannaya University conduct its own PhD entrance exam?",
    answer: "Yes, the university conducts its own PhD entrance test. UGC-NET/GATE qualified candidates may be exempted."
  },
  {
    question: "What are the research areas available for PhD?",
    answer: "PhD is offered in disciplines like Computer Science, Electronics, Mechanical, Civil Engineering, and Business Management."
  },
  {
    question: "Is work experience required for applying?",
    answer: "No, prior work experience is not mandatory for admission into the PhD program."
  },
  {
    question: "When does the PhD admission process start?",
    answer: "Generally, PhD admissions start in June or July and conclude by September."
  }
];

const universityData = {
  fullName: "PhD Admission in Adikavi Nannaya University",
  shortName: "Adikavi Nannaya University (AKNU)",
  phdEntranceExam: "AKNU PhD Entrance Test / UGC-NET / GATE",
  qualificationRequired: "Postgraduate degree with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "Entrance Exam Scorecard (if applicable)",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Research Proposal"
  ],
  applicationTimeline: "June – September (Tentative)",
  approxFee: "₹35,000 – ₹60,000 per year",
  scholarshipAvailability: "Available for eligible candidates"
};

const AdikaviNannaya = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Adikavi Nannaya University</h3>
            <ul>
              <li><b>Established:</b> 2006</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Rajamahendravaram, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Engineering, Management, Science, Arts</li>
              <li><b>Research Areas:</b><br />CSE, ECE, Mechanical, Civil, Business Management, Tourism</li>
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
              <h2>FAQs – Adikavi Nannaya University PhD Admission</h2>
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
              {/* Add more as needed */}
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>State University in Andhra Pradesh</li>
              <li>Engineering & Management Research Programs</li>
              <li>Constituent Colleges & Research Departments</li>
              <li>Dedicated Research Centers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdikaviNannaya;
