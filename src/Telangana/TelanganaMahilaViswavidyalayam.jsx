import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Telangana Mahila Viswavidyalayam offer PhD programs?",
    answer: "Yes, Telangana Mahila Viswavidyalayam offers PhD programs in Arts, Humanities, Social Sciences, and Science disciplines."
  },
  {
    question: "What is the eligibility for PhD admission?",
    answer: "A Master’s degree in the relevant discipline with a minimum of 55% marks (or equivalent CGPA) is required. Relaxation applies for reserved categories."
  },
  {
    question: "Is there an entrance exam for PhD at Telangana Mahila Viswavidyalayam?",
    answer: "Yes, applicants must qualify the university’s PhD entrance test followed by an interview process."
  },
  {
    question: "Are PhD programs offered in a full-time or part-time mode?",
    answer: "Yes, both full-time and part-time PhD programs are offered to eligible candidates."
  },
  {
    question: "Is financial support available for PhD scholars?",
    answer: "Scholarships or fellowships may be available based on merit and specific departmental norms."
  }
];

const universityData = {
  fullName: "PhD Admission in Telangana Mahila Viswavidyalayam, Hyderabad",
  shortName: "Telangana Women’s University",
  phdEntranceExam: "University Entrance Test + Interview",
  qualificationRequired: "Master’s degree in relevant discipline with 55%",
  workExperience: "Preferred for part-time candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificates and Marksheets",
    "Undergraduate Certificates",
    "Aadhar or Government Photo ID",
    "Research Proposal (SOP)",
    "Experience Certificate (if any)",
    "No Objection Certificate (for employed applicants)",
    "Recommendation Letters"
  ],
  applicationTimeline: "Typically in June–July and November–December",
  approxFee: "₹25,000 – ₹45,000 per year",
  scholarshipAvailability: "Yes, available based on merit and availability"
};

const TelanganaMahilaViswavidyalayam = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Telangana Mahila Viswavidyalayam</h3>
            <ul>
              <li><b>Established:</b> 2022 (Upgraded from Women’s College)</li>
              <li><b>Type:</b> State Public University for Women</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Social Sciences, English, Telugu, Education, Psychology, Women’s Studies, Life Sciences, Physical Sciences</li>
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
              <h2>FAQs – Telangana Mahila Viswavidyalayam PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-university-of-hyderabad">University of Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-telangana-womens-university">Telangana Mahila Viswavidyalayam</a></li>
              <li><a href="/telangana/phd-admission-in-kakatiya-university">Kakatiya University</a></li>
              <li><a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-woxsen-university">Woxsen University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Focus on Women Empowerment through Research</li>
              <li>State-supported Infrastructure</li>
              <li>Strong Arts & Science Research Base</li>
              <li>Located in Educational Hub of Hyderabad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelanganaMahilaViswavidyalayam;
