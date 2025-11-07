import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at IIIT Sri City?",
    answer: "Candidates must have a Master’s degree (M.Tech/M.E/M.Sc) in relevant disciplines with minimum 60% marks or equivalent CGPA."
  },
  {
    question: "Does IIIT Sri City conduct its own PhD entrance exam?",
    answer: "IIIT Sri City shortlists candidates through GATE/UGC-NET/CSIR-NET scores followed by a departmental interview."
  },
  {
    question: "What are the research areas available at IIIT Sri City?",
    answer: "PhD research is offered in CSE, ECE, AI/ML, Data Science, and related interdisciplinary domains."
  },
  {
    question: "Is work experience necessary for PhD admission?",
    answer: "Work experience is not mandatory but preferred for part-time PhD applicants."
  },
  {
    question: "When do PhD admissions usually begin at IIIT Sri City?",
    answer: "PhD applications usually open in April/May and the selection process concludes by July."
  }
];

const universityData = {
  fullName: "PhD Admission in IIIT Sri City",
  shortName: "IIIT Sri City",
  phdEntranceExam: "GATE / UGC-NET / Institute Interview",
  qualificationRequired: "Master’s degree with minimum 60% marks",
  workExperience: "Preferred for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Academic Transcripts",
    "GATE/NET Scorecard",
    "Photo ID Proof",
    "Caste Certificate (if applicable)",
    "Research Statement"
  ],
  applicationTimeline: "April – July (Tentative)",
  approxFee: "₹40,000 – ₹80,000 per year",
  scholarshipAvailability: "Yes, for full-time scholars with valid score"
};

const IIITSriCity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About IIIT Sri City</h3>
            <ul>
              <li><b>Established:</b> 2013</li>
              <li><b>Type:</b> Institute of National Importance</li>
              <li><b>Location:</b> Sri City, Andhra Pradesh</li>
              <li><b>Recognized By:</b> MHRD, Government of India</li>
              <li><b>Faculties:</b> Engineering, Interdisciplinary Sciences</li>
              <li><b>Research Areas:</b><br />CSE, ECE, AI, ML, Data Science</li>
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
              <h2>FAQs – IIIT Sri City PhD Admission</h2>
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
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Institute of National Importance</li>
              <li>Modern Interdisciplinary Research</li>
              <li>Specialized in AI, Data Science, IoT</li>
              <li>GATE/NET-based Fellowships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IIITSriCity;
