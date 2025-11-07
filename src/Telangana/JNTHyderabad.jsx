import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at JNTU Hyderabad?",
    answer: "PhD admissions at JNTU Hyderabad are generally announced between May and July each year."
  },
  {
    question: "What is the eligibility for PhD admission at JNTUH?",
    answer: "A Master’s degree in Engineering/Technology/Management/Pharmacy/Science with at least 55% marks (50% for reserved categories)."
  },
  {
    question: "Is an entrance test required for PhD at JNTU Hyderabad?",
    answer: "Yes, the university conducts a written test and interview. Candidates with valid UGC-NET/JRF/GATE may be exempted."
  },
  {
    question: "Is part-time PhD allowed at JNTUH?",
    answer: "Yes, part-time PhD is available for working professionals with NOC and required experience."
  },
  {
    question: "Are fellowships available for PhD at JNTU Hyderabad?",
    answer: "Limited university fellowships and external funding options are available for eligible candidates."
  }
];

const universityData = {
  fullName: "PhD Admission in Jawaharlal Nehru Technological University, Hyderabad (JNTUH)",
  shortName: "JNTU Hyderabad",
  phdEntranceExam: "University Written Test / UGC-NET / JRF / GATE",
  qualificationRequired: "Master’s Degree in relevant field with 55% marks",
  workExperience: "Required for part-time candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Marksheets and Certificates",
    "UGC-NET/JRF/GATE Scorecard (if applicable)",
    "Work Experience Certificate (for part-time)",
    "NOC from Employer",
    "Research Proposal",
    "Caste Certificate (if applicable)"
  ],
  applicationTimeline: "May – July (tentative)",
  approxFee: "₹40,000 – ₹60,000 per annum",
  scholarshipAvailability: "University Fellowships / External Funding (limited)"
};

const JNTHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About JNTU Hyderabad</h3>
            <ul>
              <li><b>Established:</b> 1972</li>
              <li><b>Type:</b> State Technical University</li>
              <li><b>Accreditation:</b> NAAC ‘A’ Grade</li>
              <li><b>Specialization:</b><br /> Engineering, Technology, Management, and Pharmacy</li>
              <li><b>Research Strength:</b><br /> Strong R&D infrastructure, research centers, and tech innovation focus</li>
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
              <h2>FAQs – JNTU Hyderabad PhD Admission</h2>
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
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Technical Research Excellence</li>
              <li>Multiple Part-Time Options</li>
              <li>Accredited and Recognized by AICTE & NAAC</li>
              <li>Focused on Engineering and Applied Sciences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JNTHyderabad;
