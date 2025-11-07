import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Is PhD admission open at Kakatiya University?",
    answer: "PhD admissions at Kakatiya University are typically announced once a year. Check the university's official website for current notifications."
  },
  {
    question: "What is the eligibility for PhD at Kakatiya University?",
    answer: "Candidates must have a Master's degree in relevant disciplines with at least 55% marks. Relaxations apply for reserved categories."
  },
  {
    question: "Is there an entrance exam for PhD at Kakatiya University?",
    answer: "Yes, the university conducts an entrance test followed by an interview. UGC-NET/JRF qualified candidates may be exempted from the written test."
  },
  {
    question: "Are part-time PhD programs offered?",
    answer: "Yes, part-time PhD is available for working professionals with relevant experience and a No Objection Certificate (NOC) from their employer."
  },
  {
    question: "Are fellowships available for PhD scholars?",
    answer: "Yes, eligible full-time PhD candidates may receive UGC fellowships or university financial assistance."
  }
];

const universityData = {
  fullName: "PhD Admission in Kakatiya University, Warangal",
  shortName: "Kakatiya University",
  phdEntranceExam: "Kakatiya University Entrance / UGC-NET / JRF",
  qualificationRequired: "Master’s Degree with 55% marks (50% for reserved categories)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG Degree Certificates and Marksheets",
    "UGC-NET/JRF Certificate (if applicable)",
    "Research Proposal",
    "Statement of Purpose (SOP)",
    "Experience Certificate (for part-time)",
    "No Objection Certificate (if employed)"
  ],
  applicationTimeline: "Usually released between April and July",
  approxFee: "₹15,000 – ₹25,000 per year",
  scholarshipAvailability: "Available via UGC/University Fellowships"
};

const KakatiyaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Kakatiya University</h3>
            <ul>
              <li><b>Year of Establishment:</b> 1976</li>
              <li><b>PhD Programs Started:</b><br /> Early 1980s</li>
              <li><b>Annual PhD Enrolments:</b><br /> Around 100+ across Arts, Science, Commerce, and Education</li>
              <li><b>Why Choose Kakatiya:</b><br /> Renowned for research in regional literature, social sciences, and fundamental sciences.</li>
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
              <h2>FAQs – Kakatiya University PhD Admission</h2>
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
              <li>Recognized UGC Research Center</li>
              <li>Affordable Tuition and Regional Focus</li>
              <li>PhD Options Across Arts, Science, and Commerce</li>
              <li>Strong Regional Language Research</li>
              <li>NET/JRF Exemption Available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KakatiyaUniversity;
