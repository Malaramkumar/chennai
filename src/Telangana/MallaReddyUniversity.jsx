import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Malla Reddy University offer PhD programs?",
    answer: "Yes, Malla Reddy University offers PhD programs in Engineering, Management, and related disciplines."
  },
  {
    question: "What is the eligibility for PhD admission at Malla Reddy University?",
    answer: "Candidates must have a Master's degree (M.Tech/M.E/MBA or equivalent) with at least 55% marks or equivalent CGPA. Relaxation is provided for SC/ST/OBC candidates."
  },
  {
    question: "Is there an entrance exam for PhD at Malla Reddy University?",
    answer: "Yes, candidates need to qualify the entrance test conducted by the university followed by an interview."
  },
  {
    question: "Is part-time PhD available at Malla Reddy University?",
    answer: "Yes, the university offers both full-time and part-time PhD programs."
  },
  {
    question: "Are there any fellowships available?",
    answer: "Fellowships may be available for full-time research scholars based on merit and university policies."
  }
];

const universityData = {
  fullName: "PhD Admission in Malla Reddy University, Hyderabad",
  shortName: "Malla Reddy University",
  phdEntranceExam: "University-level Entrance Test + Interview",
  qualificationRequired: "M.Tech / MBA / M.E / M.Sc. with 55% or equivalent CGPA",
  workExperience: "Required for part-time PhD",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificate & Marksheets",
    "Bachelor’s Degree Certificate",
    "Caste Certificate (if applicable)",
    "Photo ID Proof",
    "Research Proposal",
    "Experience Certificate (for part-time)"
  ],
  applicationTimeline: "Typically opens in June-July and Nov-Dec sessions",
  approxFee: "₹60,000 – ₹90,000 per year",
  scholarshipAvailability: "Merit-based scholarships for full-time scholars"
};

const MallaReddyUniversity = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About Malla Reddy University</h3>
            <ul>
              <li><b>Established:</b> 2020</li>
              <li><b>Type:</b> Private University</li>
              <li><b>Location:</b> Hyderabad, Telangana</li>
              <li><b>Approved By:</b> UGC</li>
              <li><b>Research Areas:</b><br />Engineering, Management, Applied Sciences, Artificial Intelligence, Data Science</li>
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
              <h2>FAQs – Malla Reddy University PhD Admission</h2>
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
              <li><a href="/telangana/phd-admission-in-osmania-university">Osmania University</a></li>
              <li><a href="/telangana/phd-admission-in-malla-reddy-university">Malla Reddy University</a></li>
              <li><a href="/telangana/phd-admission-in-braou">BRAOU</a></li>
              <li><a href="/telangana/phd-admission-in-anurag-university">Anurag University</a></li>
              <li><a href="/telangana/phd-admission-in-bits-hyderabad">BITS Hyderabad</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Focus on Emerging Tech Areas</li>
              <li>Modern Research Labs & Facilities</li>
              <li>Industry Partnerships</li>
              <li>Full-Time & Part-Time Options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MallaReddyUniversity;
