import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does SR University offer PhD programs?",
    answer: "Yes, SR University offers PhD programs in Engineering and Technology disciplines with a strong focus on research and innovation."
  },
  {
    question: "What is the eligibility for PhD admission at SR University?",
    answer: "Candidates must have a Master’s degree (M.Tech, M.E., or equivalent) with at least 55% aggregate marks."
  },
  {
    question: "Is there an entrance exam for PhD at SR University?",
    answer: "Yes, candidates need to clear the university’s written test followed by an interview."
  },
  {
    question: "Does SR University allow part-time PhD?",
    answer: "Yes, part-time PhD programs are available for working professionals meeting the eligibility criteria."
  },
  {
    question: "Are any fellowships offered to PhD scholars?",
    answer: "Yes, research fellowships are provided to meritorious full-time PhD candidates based on availability."
  }
];

const universityData = {
  fullName: "PhD Admission in SR University, Telangana",
  shortName: "SR University",
  phdEntranceExam: "University Written Test + Interview",
  qualificationRequired: "Master’s in Engineering/Technology with 55%",
  workExperience: "Required for part-time mode",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificates and Marksheets",
    "UG Degree Certificates",
    "Government-issued Photo ID",
    "Updated Resume/CV",
    "Statement of Purpose (SOP)",
    "Work Experience Certificate (for part-time)",
    "Letters of Recommendation (2)"
  ],
  applicationTimeline: "Twice a year – January and July sessions",
  approxFee: "₹80,000 – ₹1,20,000 per year",
  scholarshipAvailability: "Yes, for full-time scholars with merit"
};

const SRUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About SR University</h3>
            <ul>
              <li><b>Established:</b> 2020</li>
              <li><b>Type:</b> Private University</li>
              <li><b>Location:</b> Warangal, Telangana</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Computer Science, Electronics, Electrical, Mechanical, Civil Engineering, AI & IoT</li>
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
                  {universityData.documentsRequired.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="telangana-detail-item">
                <span className="telangana-detail-label">Scholarship/Fellowship</span>
                <span className="telangana-detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>

            <section className="telangana-alluniversityfaq-section">
              <h2>FAQs – SR University PhD Admission</h2>
              <div className="telangana-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
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
              <li><a href="/telangana/phd-admission-in-sr-university">SR University</a></li>
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-woxsen-university">Woxsen University</a></li>
              <li><a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-malla-reddy-university">Malla Reddy University</a></li>
              <li><a href="/telangana/phd-admission-in-mahindra-university">Mahindra University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-university-of-hyderabad">University of Hyderabad</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Innovative Tech Incubation</li>
              <li>Modern Research Labs</li>
              <li>Flexible PhD Modes</li>
              <li>Focus on Emerging Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRUniversity;
