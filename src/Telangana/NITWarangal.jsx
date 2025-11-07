import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does NIT Warangal open PhD admissions?",
    answer: "PhD admissions at NIT Warangal are typically announced in May-June and November-December cycles."
  },
  {
    question: "What is the eligibility for PhD at NIT Warangal?",
    answer: "A Master’s degree (M.Tech/M.E./M.Sc./MCA/MA/MBA) in relevant disciplines with minimum 60% marks or 6.5 CGPA."
  },
  {
    question: "Does NIT Warangal offer part-time PhD?",
    answer: "Yes, part-time and sponsored PhD programs are available for working professionals with a minimum of 2 years experience."
  },
  {
    question: "Is there a written test for PhD at NIT Warangal?",
    answer: "Yes, candidates are shortlisted based on written test and interview. UGC-NET/GATE holders may get direct interview calls."
  },
  {
    question: "Are fellowships available?",
    answer: "Yes, institute fellowships and externally funded scholarships (CSIR, DST, UGC) are available."
  }
];

const universityData = {
  fullName: "PhD Admission in National Institute of Technology, Warangal",
  shortName: "NIT Warangal",
  phdEntranceExam: "Written Test / GATE / UGC-NET / JRF",
  qualificationRequired: "Master’s degree with at least 60% marks",
  workExperience: "Required for part-time/sponsored candidates",
  modeOfPhd: "Full-Time / Part-Time / Sponsored",
  documentsRequired: [
    "PG Marksheets and Certificates",
    "UGC-NET/GATE Scorecard (if applicable)",
    "Work Experience Certificate (for part-time/sponsored)",
    "Sponsorship Certificate (if applicable)",
    "Research Proposal",
    "Caste Certificate (if applicable)"
  ],
  applicationTimeline: "May – June & Nov – Dec",
  approxFee: "₹30,000 – ₹50,000 per year",
  scholarshipAvailability: "Institute Fellowships & External Scholarships"
};

const NITWarangal = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About NIT Warangal</h3>
            <ul>
              <li><b>Established:</b> 1959</li>
              <li><b>Type:</b> Institute of National Importance</li>
              <li><b>Accreditation:</b> Autonomous under MHRD</li>
              <li><b>Specialization:</b><br /> Engineering, Technology, Science, and Management</li>
              <li><b>Research Focus:</b><br /> Advanced engineering research, funded projects, innovation hubs</li>
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
              <h2>FAQs – NIT Warangal PhD Admission</h2>
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
              <li>Premier Engineering Institute (NIT)</li>
              <li>Government Funded Fellowships</li>
              <li>Research Centers & National Projects</li>
              <li>Top Ranked for Engineering Research</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NITWarangal;
