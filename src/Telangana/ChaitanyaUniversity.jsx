import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Chaitanya University?",
    answer: "Candidates should have a Master’s degree (M.Tech, MBA, etc.) with a minimum of 55% marks or equivalent CGPA. Reserved categories may get a 5% relaxation."
  },
  {
    question: "Is an entrance exam required for PhD at Chaitanya University?",
    answer: "Yes, candidates must qualify Chaitanya’s own PhD entrance test or be exempted through UGC-NET, JRF, SLET, etc."
  },
  {
    question: "Which PhD specializations are available at Chaitanya University?",
    answer: "PhD programs are offered in Engineering and Management disciplines."
  },
  {
    question: "Does Chaitanya University offer part-time PhD?",
    answer: "Yes, both part-time and full-time PhD options are available depending on the department."
  },
  {
    question: "What is the approximate fee structure for PhD at Chaitanya University?",
    answer: "The PhD program fee ranges between ₹60,000 – ₹1,00,000 per year, depending on the department."
  }
];

const universityData = {
  fullName: "PhD Admission in Chaitanya (Deemed to be University), Warangal",
  shortName: "Chaitanya University",
  phdEntranceExam: "University Entrance / UGC-NET",
  qualificationRequired: "Master’s degree in Engineering or Management with 55% marks",
  workExperience: "Preferred for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "UG & PG Mark Sheets",
    "Research Proposal",
    "Caste Certificate (if applicable)",
    "Entrance Exam Scorecard (if applicable)",
    "ID Proof"
  ],
  applicationTimeline: "Usually opens between May and August",
  approxFee: "₹60,000 – ₹1,00,000 per year",
  scholarshipAvailability: "Limited merit-based scholarships"
};

const ChaitanyaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Chaitanya (Deemed to be University), Warangal</h3>
            <ul>
              <li><b>Established:</b> 1991 (Deemed University Status in 2019)</li>
              <li><b>Type:</b> Deemed to be University</li>
              <li><b>Location:</b> Warangal, Telangana</li>
              <li><b>Approved By:</b> UGC, AICTE</li>
              <li><b>Disciplines:</b> Engineering, Management, Science</li>
              <li><b>Research Areas:</b><br />Computer Science, ECE, Business Administration, and more</li>
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
              <h2>FAQs – Chaitanya University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-chaitanya-university">Chaitanya University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Deemed University in Warangal</li>
              <li>Engineering & Management Focus</li>
              <li>UGC & AICTE Approved</li>
              <li>Full-Time and Part-Time PhD Options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaitanyaUniversity;
