import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Krishna University?",
    answer:
      "Candidates must have a postgraduate degree (MA/M.Sc/M.Com/MBA) with at least 55% marks or equivalent CGPA. Relaxation is given to reserved categories."
  },
  {
    question: "Does Krishna University conduct its own PhD entrance exam?",
    answer:
      "Yes, Krishna University conducts its own PhD entrance test. UGC-NET/GATE qualified candidates are exempted from the written test."
  },
  {
    question: "What are the available research disciplines for PhD?",
    answer:
      "PhD is offered in disciplines including English, Telugu, Chemistry, Physics, Biotechnology, Commerce, and Management."
  },
  {
    question: "Is prior work experience required for PhD admission?",
    answer: "No, work experience is not mandatory for applying to the PhD program."
  },
  {
    question: "When does the PhD admission process typically start?",
    answer:
      "PhD admission notifications are usually released between June and August on the official website."
  }
];

const universityData = {
  fullName: "PhD Admission in Krishna University",
  shortName: "Krishna University",
  phdEntranceExam: "Krishna University PhD Entrance Test / UGC-NET / GATE",
  qualificationRequired: "Postgraduate degree with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Entrance Exam Scorecard (if applicable)",
    "Research Proposal"
  ],
  applicationTimeline: "June – August (Tentative)",
  approxFee: "₹30,000 – ₹55,000 per year",
  scholarshipAvailability: "Yes, for qualified candidates"
};

const KrishnaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Krishna University</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Machilipatnam, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Science, Arts, Commerce, Management</li>
              <li><b>Research Areas:</b><br />English, Telugu, Chemistry, Biotechnology, Commerce, Management</li>
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
              <h2>FAQs – Krishna University PhD Admission</h2>
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
            <h3>All Andhra Pradesh Universities List</h3>
            <ul>
              <li><a href="/andhra/phd-admission-in-jntukakinada">JNTU Kakinada</a></li>
              <li><a href="/andhra/phd-admission-in-jntu-anantapur">JNTUA Anantapur</a></li>
              <li><a href="/andhra/phd-admission-in-andhra-university">Andhra University</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya">Sri Krishnadevaraya University</a></li>
              <li><a href="/andhra/phd-admission-in-svu">SV University</a></li>
              <li><a href="/andhra/phd-admission-in-adikavi-nannaya">Adikavi Nannaya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>State University in Andhra Pradesh</li>
              <li>Arts, Science, Commerce, Management Disciplines</li>
              <li>Recognized by UGC</li>
              <li>Online Application Facility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KrishnaUniversity;
