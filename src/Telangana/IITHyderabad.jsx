import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does PhD admission open at IIT Hyderabad?",
    answer:
      "PhD admissions at IIT Hyderabad are usually announced twice a year — for the July and December sessions. Check the official portal for deadlines."
  },
  {
    question: "What is the eligibility for PhD admission at IIT Hyderabad?",
    answer:
      "Candidates should hold a Master’s degree in Engineering/Technology or a relevant field. Exceptional B.Tech graduates from IITs with a CGPA above 8.0 may also apply."
  },
  {
    question: "Is GATE required for PhD at IIT Hyderabad?",
    answer:
      "Yes, GATE or equivalent national exam qualification is typically required unless exempted based on academic performance."
  },
  {
    question: "Are fellowships available for PhD students?",
    answer:
      "Yes, eligible full-time scholars receive stipends via MHRD/AICTE/UGC fellowships."
  },
  {
    question: "Does IIT Hyderabad offer part-time or external PhD?",
    answer:
      "Yes, both part-time and external registration options are available for working professionals and industry researchers."
  }
];

const universityData = {
  fullName: "PhD Admission in Indian Institute of Technology Hyderabad (IIT-H)",
  shortName: "IIT Hyderabad",
  phdEntranceExam: "IIT-H Written Test / GATE / UGC-NET / JRF",
  qualificationRequired:
    "Master’s Degree in Engineering/Technology or exceptional B.Tech from IITs",
  workExperience: "Needed for part-time/external category",
  modeOfPhd: "Full-Time / Part-Time / External",
  documentsRequired: [
    "UG & PG Degree Certificates and Marksheets",
    "Valid GATE/NET Scorecard (if applicable)",
    "Research Statement",
    "No Objection Certificate (for part-time/external candidates)",
    "Resume/CV"
  ],
  applicationTimeline: "April–May for July intake, Oct–Nov for Dec intake",
  approxFee: "₹25,000 – ₹50,000 per semester",
  scholarshipAvailability: "Yes, fellowships available for full-time scholars"
};

const IITHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About IIT Hyderabad</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> 2008
              </li>
              <li>
                <b>PhD Programs Started:</b>
                <br /> Since inception
              </li>
              <li>
                <b>Annual PhD Enrolments:</b>
                <br /> 100+ scholars across STEM disciplines
              </li>
              <li>
                <b>Why Choose IIT-H:</b>
                <br /> Modern research infrastructure, high-end labs, interdisciplinary centers,
                and global faculty.
              </li>
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
              <h2>FAQs – IIT Hyderabad PhD Admission</h2>
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
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer
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
              <li>
                <a href="/telangana/phd-admission-in-iiit-hyderabad">IIIT Hyderabad</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-iit-hyderabad">IIT Hyderabad</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-kakatiya-university">Kakatiya University</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-university-of-hyderabad">
                  University of Hyderabad
                </a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-jntu-hyderabad">JNTU Hyderabad</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-nit-warangal">NIT Warangal</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-mgu-nalgonda">MGU Nalgonda</a>
              </li>
              <li>
                <a href="/telangana/phd-admission-in-satavahana-university">
                  Satavahana University
                </a>
              </li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Globally Ranked Institute</li>
              <li>Focus on Innovation and AI</li>
              <li>Multiple Funding Opportunities</li>
              <li>Modern Campus & Research Parks</li>
              <li>Strong Industry Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IITHyderabad;
