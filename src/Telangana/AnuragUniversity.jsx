import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Anurag University?",
    answer: "Candidates must have a Master’s degree (M.Tech/M.E/M.Sc) with a minimum of 55% marks or equivalent CGPA."
  },
  {
    question: "Is there an entrance exam for PhD at Anurag University?",
    answer: "Yes, candidates need to qualify in Anurag University’s entrance exam or hold a valid UGC-NET/GATE score."
  },
  {
    question: "What are the research domains at Anurag University?",
    answer: "Research is offered in Engineering fields such as Computer Science, ECE, Mechanical, Civil, and allied areas."
  },
  {
    question: "Does Anurag University provide fellowships for PhD?",
    answer: "Yes, selected candidates may receive stipends/fellowships based on merit or funding projects."
  },
  {
    question: "When does the PhD admission process at Anurag University start?",
    answer: "Typically, the process begins in May/June and continues till August."
  }
];

const universityData = {
  fullName: "PhD Admission in Anurag University",
  shortName: "Anurag University",
  phdEntranceExam: "Anurag PhD Entrance / UGC-NET / GATE",
  qualificationRequired: "Master’s degree with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "Entrance Exam Scorecard (if applicable)",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Research Proposal/Synopsis"
  ],
  applicationTimeline: "May – August (Tentative)",
  approxFee: "₹50,000 – ₹70,000 per year",
  scholarshipAvailability: "Available for meritorious scholars"
};

const AnuragUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />
      
      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Anurag University</h3>
            <ul>
              <li><b>Established:</b> 2020 (formerly Anurag Group of Institutions)</li>
              <li><b>Type:</b> Private University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Engineering, Pharmacy, Management</li>
              <li><b>Research Areas:</b><br />Computer Science, Electronics, Mechanical, Civil Engineering, Artificial Intelligence</li>
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
              <h2>FAQs – Anurag University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-telangana-university">Telangana University</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Private University</li>
              <li>Located in Hyderabad, Telangana</li>
              <li>Focused on Engineering & Technology</li>
              <li>Modern Research Labs & Funding Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnuragUniversity;
