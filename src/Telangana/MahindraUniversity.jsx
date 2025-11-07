import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Mahindra University offer PhD programs?",
    answer: "Yes, Mahindra University offers PhD programs in Engineering, Management, and interdisciplinary research areas."
  },
  {
    question: "What is the eligibility for PhD admission at Mahindra University?",
    answer: "A Master’s degree (M.Tech, MBA, M.E. or equivalent) with a minimum of 60% or equivalent CGPA is required. Final-year candidates may also apply."
  },
  {
    question: "Is there an entrance exam for PhD at Mahindra University?",
    answer: "Yes, admission is based on a written test conducted by the university followed by a personal interview."
  },
  {
    question: "Does Mahindra University offer part-time PhD?",
    answer: "Yes, both full-time and part-time PhD options are available for working professionals and researchers."
  },
  {
    question: "Are scholarships or assistantships available?",
    answer: "Yes, full-time scholars may be eligible for stipends or research assistantships based on merit."
  }
];

const universityData = {
  fullName: "PhD Admission in Mahindra University, Hyderabad",
  shortName: "Mahindra University",
  phdEntranceExam: "University Entrance Test + Interview",
  qualificationRequired: "M.Tech / M.E / MBA or equivalent with 60%",
  workExperience: "Required for part-time PhD",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate and Marksheets",
    "Bachelor’s Degree Certificate",
    "Caste Certificate (if applicable)",
    "Government Photo ID Proof",
    "Updated Resume",
    "Statement of Purpose",
    "Experience Certificate (for part-time)"
  ],
  applicationTimeline: "Twice a year – typically in January and July",
  approxFee: "₹75,000 – ₹1,20,000 per year",
  scholarshipAvailability: "Available for full-time scholars through assistantship"
};

const MahindraUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Mahindra University</h3>
            <ul>
              <li><b>Established:</b> 2020</li>
              <li><b>Type:</b> Private University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Engineering, AI/ML, Robotics, Management, Data Science, Sustainability</li>
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
              <h2>FAQs – Mahindra University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-mahindra-university">Mahindra University</a></li>
              <li><a href="/telangana/phd-admission-in-ifhe-hyderabad">IFHE Hyderabad</a></li>
              <li><a href="/telangana/phd-admission-in-malla-reddy-university">Malla Reddy University</a></li>
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-bits-hyderabad">BITS Hyderabad</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Interdisciplinary PhD Tracks</li>
              <li>Research with Global Collaborations</li>
              <li>Modern Research Infrastructure</li>
              <li>Industry-Aligned Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahindraUniversity;
