import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Satavahana University?",
    answer: "Candidates must hold a Master's degree with at least 55% marks (50% for reserved categories) in relevant disciplines."
  },
  {
    question: "Does Satavahana University conduct a PhD entrance exam?",
    answer: "Yes, the university conducts an entrance exam. UGC-NET/CSIR-NET qualified candidates may be exempted."
  },
  {
    question: "What disciplines are offered for PhD at Satavahana University?",
    answer: "PhD programs are offered in disciplines such as Chemistry, English, Commerce, Economics, Sociology, and others."
  },
  {
    question: "Are fellowships available at Satavahana University?",
    answer: "Fellowships may be available for full-time research scholars based on merit and funding."
  },
  {
    question: "When does the application process start?",
    answer: "Typically, the application process starts between May and July each year."
  }
];

const universityData = {
  fullName: "PhD Admission in Satavahana University",
  shortName: "Satavahana University",
  phdEntranceExam: "University PhD Entrance Test / UGC-NET",
  qualificationRequired: "Master’s degree with 55% marks",
  workExperience: "Not mandatory",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate",
    "Marksheets (UG & PG)",
    "PhD Entrance Test Scorecard (if applicable)",
    "Caste Certificate (if applicable)",
    "Aadhaar/ID Proof",
    "Research Proposal (SOP)"
  ],
  applicationTimeline: "May – July (Tentative)",
  approxFee: "₹20,000 – ₹35,000 per year",
  scholarshipAvailability: "Fellowship available for eligible candidates"
};

const SatavahanaUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Satavahana University</h3>
            <ul>
              <li><b>Established:</b> 2008</li>
              <li><b>Type:</b> State University</li>
              <li><b>Location:</b> Karimnagar, Telangana</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Faculties:</b> Science, Commerce, Arts, Social Sciences</li>
              <li><b>Research Areas:</b><br /> Chemistry, English, Management, Commerce, Sociology</li>
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
              <h2>FAQs – Satavahana University PhD Admission</h2>
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
              <li>State University in Telangana</li>
              <li>UGC Recognized</li>
              <li>Focus on Social Science & Science Research</li>
              <li>Affordable Fee Structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatavahanaUniversity;
