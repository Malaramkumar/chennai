import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Aurora Higher Education & Research Academy offer PhD programs?",
    answer: "Yes, Aurora HER Academy offers PhD programs in Engineering and Computer Applications with a research-focused curriculum."
  },
  {
    question: "What is the eligibility for PhD admission at Aurora HER Academy?",
    answer: "A Master’s degree in the relevant field (e.g. M.Tech, M.E., MCA, M.Sc.) with a minimum of 55% aggregate marks is required."
  },
  {
    question: "Is there an entrance exam for PhD at Aurora HER Academy?",
    answer: "Yes, candidates must qualify the entrance test conducted by the university followed by a personal interview."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes, part-time PhD options are available for working professionals who meet the necessary eligibility criteria."
  },
  {
    question: "Does Aurora offer any scholarships for PhD scholars?",
    answer: "Limited financial support or stipends may be offered based on merit and department policies."
  }
];

const universityData = {
  fullName: "PhD Admission in Aurora Higher Education & Research Academy, Hyderabad",
  shortName: "Aurora HER Academy",
  phdEntranceExam: "University Written Test + Interview",
  qualificationRequired: "Master’s in Engineering/Computer Applications with 55%",
  workExperience: "Preferred for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificates and Marksheets",
    "Undergraduate Degree Certificates",
    "Government-issued Photo ID",
    "Updated Resume",
    "Research Proposal or SOP",
    "Experience Letter (for part-time)",
    "2 Letters of Recommendation"
  ],
  applicationTimeline: "Twice a year – January and July cycles",
  approxFee: "₹60,000 – ₹90,000 per year",
  scholarshipAvailability: "Yes, based on merit and research output"
};

const AuroraHERAHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Aurora HER Academy</h3>
            <ul>
              <li><b>Established:</b> 2000</li>
              <li><b>Type:</b> Private Research Institution</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Approved By:</b> AICTE, UGC</li>
              <li><b>Research Areas:</b><br />Computer Science, Electronics, Information Technology, AI, Data Science, Software Engineering</li>
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
              <h2>FAQs – Aurora HER Academy PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-aurora-hyderabad">Aurora HER Academy</a></li>
              <li><a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-woxsen-university">Woxsen University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-university-of-hyderabad">University of Hyderabad</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Strong Academic-Industry Interface</li>
              <li>Focus on Applied Research</li>
              <li>Experienced Research Mentors</li>
              <li>Modern Tech Infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuroraHERAHyderabad;
