import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Is PhD admission available at RGUKT Basar?",
    answer: "Yes, RGUKT Basar offers PhD programs primarily in Engineering and interdisciplinary research areas."
  },
  {
    question: "What are the eligibility criteria for PhD at RGUKT Basar?",
    answer: "A Master’s degree in the relevant field with at least 55% marks. Relaxation applies to reserved categories as per norms."
  },
  {
    question: "Is there an entrance exam for PhD at RGUKT Basar?",
    answer: "Yes, candidates must qualify the university’s PhD entrance test or possess valid scores in UGC-NET/JRF/CSIR/GATE."
  },
  {
    question: "Are part-time PhD programs offered at RGUKT Basar?",
    answer: "Yes, part-time PhD is available for working professionals meeting eligibility criteria."
  },
  {
    question: "What is the research focus of RGUKT Basar?",
    answer: "RGUKT emphasizes Engineering, Technology, and interdisciplinary applied research areas."
  }
];

const universityData = {
  fullName: "PhD Admission in Rajiv Gandhi University of Knowledge Technologies, Basar",
  shortName: "RGUKT Basar",
  phdEntranceExam: "RGUKT PhD Entrance Test / UGC-NET / CSIR / GATE",
  qualificationRequired: "Master’s degree in Engineering/Technology or related disciplines with 55% marks",
  workExperience: "Preferred for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate & Marksheets",
    "UG Marksheets",
    "Research Proposal",
    "ID Proof",
    "Caste Certificate (if applicable)",
    "Scorecard of UGC-NET/JRF/GATE (if applicable)"
  ],
  applicationTimeline: "Usually announced between June and August",
  approxFee: "₹30,000 – ₹60,000 per year",
  scholarshipAvailability: "Available through university or external fellowships"
};

const RGUKTBasar = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About RGUKT Basar</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Basar, Telangana</li>
              <li><b>Specialization:</b> Engineering and Technology</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Engineering, Computer Science, Applied Sciences</li>
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
              <h2>FAQs – RGUKT Basar PhD Admission</h2>
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
              <li>Focused on Rural Talent Development in Engineering</li>
              <li>UGC Recognized, State-Government Funded</li>
              <li>Research-Driven Curriculum and Facilities</li>
              <li>Located in Basar, Telangana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGUKTBasar;
