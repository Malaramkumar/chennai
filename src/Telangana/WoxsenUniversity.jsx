import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Woxsen University offer PhD programs?",
    answer: "Yes, Woxsen University offers PhD programs in Management, Engineering, and related interdisciplinary areas."
  },
  {
    question: "What is the eligibility for PhD admission at Woxsen University?",
    answer: "Candidates must have a Master’s degree (MBA, M.Tech, M.E. or equivalent) with at least 55% marks or equivalent CGPA."
  },
  {
    question: "Is there an entrance exam for PhD at Woxsen University?",
    answer: "Yes, applicants must qualify the university's entrance test followed by a personal interview."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes, Woxsen offers both full-time and part-time PhD programs catering to working professionals."
  },
  {
    question: "Does Woxsen provide research fellowships?",
    answer: "Yes, limited research fellowships are offered to meritorious full-time PhD scholars."
  }
];

const universityData = {
  fullName: "PhD Admission in Woxsen University, Hyderabad",
  shortName: "Woxsen University",
  phdEntranceExam: "University Entrance Test + Interview",
  qualificationRequired: "Master’s degree in relevant field with 55%",
  workExperience: "Preferred for part-time PhD applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate & Marksheets",
    "Undergraduate Degree Certificate",
    "Photo ID Proof (Aadhar, Passport etc.)",
    "Updated CV / Resume",
    "Statement of Purpose (SOP)",
    "Experience Certificate (for part-time candidates)",
    "Two Recommendation Letters"
  ],
  applicationTimeline: "Bi-annual intake – January & July",
  approxFee: "₹1,00,000 – ₹1,50,000 per year",
  scholarshipAvailability: "Available for full-time PhD scholars based on merit"
};

const WoxsenUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Woxsen University</h3>
            <ul>
              <li><b>Established:</b> 2014 (Declared Private University in 2020)</li>
              <li><b>Type:</b> Private University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Management, Marketing, AI/ML, Data Science, Business Analytics, Engineering Innovation</li>
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
              <h2>FAQs – Woxsen University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-university-of-hyderabad">University of Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-woxsen-university">Woxsen University</a></li>
              <li><a href="/telangana/phd-admission-in-mahindra-university">Mahindra University</a></li>
              <li><a href="/telangana/phd-admission-in-malla-reddy-university">Malla Reddy University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-bits-hyderabad">BITS Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Global Industry Collaborations</li>
              <li>Advanced Research Infrastructure</li>
              <li>Publication-Oriented Mentorship</li>
              <li>Hybrid Learning for Professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoxsenUniversity;
