import "../telangana/Telangana.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Is PhD admission open at IIIT Hyderabad?",
    answer: "Yes, PhD admissions at IIIT Hyderabad are generally open twice a year. Refer to the official website for updated timelines and notifications."
  },
  {
    question: "What is the eligibility for IIIT Hyderabad PhD admission?",
    answer: "Applicants must have a Master’s degree in Engineering, Science, or related fields with a strong academic record. Exceptional B.Tech graduates may also be considered."
  },
  {
    question: "Is there an entrance exam for PhD at IIIT Hyderabad?",
    answer: "Yes, IIIT-H conducts a written entrance test followed by an interview. Candidates with valid GATE/UGC-NET/JRF scores may be exempted."
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer: "Yes, full-time scholars may receive financial assistance through institute fellowships or government schemes."
  },
  {
    question: "Can working professionals apply for part-time PhD?",
    answer: "Yes, part-time PhD options are available. A No Objection Certificate (NOC) from the employer is required."
  }
];

const universityData = {
  fullName: "PhD Admission in International Institute of Information Technology, Hyderabad (IIIT-H)",
  shortName: "IIIT Hyderabad",
  phdEntranceExam: "IIIT-H Entrance / GATE / UGC-NET / JRF",
  qualificationRequired: "Master’s Degree in Engineering/Science or exceptional B.Tech with research interest",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "UG & PG Degree Certificates and Transcripts",
    "GATE/NET Scorecard (if applicable)",
    "Statement of Purpose (SOP)",
    "Research Proposal (tentative)",
    "No Objection Certificate (for part-time)"
  ],
  applicationTimeline: "Typically during May–June and Nov–Dec",
  approxFee: "₹50,000 – ₹80,000 per year",
  scholarshipAvailability: "Available for full-time PhD scholars"
};

const IIITHyderabad = () => {
  return (
    <div className="telangana-main">
      <Subsidebar />

      <div className="telangana-university-details-wrapper">
        <div className="telangana-content-layout">
          {/* Left Sidebar */}
          <div className="telangana-side-box telangana-left-box">
            <h3>About IIIT Hyderabad</h3>
            <ul>
              <li><b>Year of Establishment:</b> 1998</li>
              <li><b>PhD Programs Started:</b><br /> Since early 2000s</li>
              <li><b>Annual PhD Enrolments:</b><br /> 50+ scholars in tech and interdisciplinary fields</li>
              <li><b>Why Choose IIIT-H:</b><br /> Research-intensive environment, global collaboration, deep tech innovation, and strong placement record.</li>
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
              <h2>FAQs – IIIT Hyderabad PhD Admission</h2>
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
              <li>Research-led Curriculum</li>
              <li>AI/ML & Blockchain Innovation Hubs</li>
              <li>GATE/UGC-NET Exemption for Top Candidates</li>
              <li>Cutting-Edge Labs & Tech Focus</li>
              <li>Top Placement Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IIITHyderabad;
