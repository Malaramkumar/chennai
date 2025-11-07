import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does SRM University-AP offer PhD programs?",
    answer: "Yes, SRM University Andhra Pradesh (Guntur) offers full-time and part-time PhD programs in Engineering, Management, Science, and Humanities."
  },
  {
    question: "What is the admission process for PhD at SRM AP?",
    answer: "The process includes a written entrance test and personal interview. Candidates with NET/JRF/GATE are exempt from the entrance test."
  },
  {
    question: "Is part-time PhD allowed for working professionals?",
    answer: "Yes, SRM AP offers part-time PhD options for faculty and industry professionals with employer NOC and relevant experience."
  },
  {
    question: "Does SRM provide any fellowships?",
    answer: "Yes, SRM offers institute fellowships and project-based funding for eligible full-time PhD scholars."
  },
  {
    question: "What qualifications are required?",
    answer: "A Master’s degree in a relevant field with a minimum of 55% marks (or equivalent CGPA) is required."
  }
];

const universityData = {
  fullName: "PhD Admission in SRM University – Andhra Pradesh (Guntur Campus)",
  shortName: "SRM AP",
  phdEntranceExam: "SRM University PhD Entrance Test / UGC NET / JRF / GATE + Interview",
  qualificationRequired: "Master’s degree with minimum 55% in relevant discipline",
  workExperience: "Required for part-time applicants (minimum 2 years)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "UG & PG Certificates and Mark Sheets",
    "NET/JRF/GATE Scorecard (if applicable)",
    "Government-issued Photo ID (Aadhaar/Passport)",
    "Research Proposal",
    "Experience Certificate (for part-time)",
    "Employer’s NOC (for part-time)",
    "Caste/Community Certificate (if applicable)"
  ],
  applicationTimeline: "Typically opens twice a year – Jan and July",
  approxFee: "₹50,000 – ₹80,000 per year",
  scholarshipAvailability: "Yes, institute fellowships & project assistantships available"
};

const SRMUniversityGuntur = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">

          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About SRM University Andhra Pradesh</h3>
            <ul>
              <li><b>Established:</b> 2017</li>
              <li><b>Type:</b> Private Deemed-to-be University</li>
              <li><b>Location:</b> Guntur District, Andhra Pradesh</li>
              <li><b>NAAC Accreditation:</b> NAAC A++ (awaiting full accreditation)</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>PhD Streams:</b> Engineering, Management, Science, Humanities</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="andhra-university-details-container">
            <div className="andhra-phdimg" />
            <h2 className="andhra-university-title">{universityData.fullName}</h2>
            <div className="andhra-details-grid">
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Popularly Known As</span>
                <span className="andhra-detail-value">{universityData.shortName}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">PhD Entrance Exam</span>
                <span className="andhra-detail-value">{universityData.phdEntranceExam}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Qualification Required</span>
                <span className="andhra-detail-value">{universityData.qualificationRequired}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Work Experience</span>
                <span className="andhra-detail-value">{universityData.workExperience}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Mode of PhD</span>
                <span className="andhra-detail-value">{universityData.modeOfPhd}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Application Timeline</span>
                <span className="andhra-detail-value">{universityData.applicationTimeline}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Approx. Fee</span>
                <span className="andhra-detail-value">{universityData.approxFee}</span>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Documents Required</span>
                <ul className="andhra-detail-list">
                  {universityData.documentsRequired.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="andhra-detail-item">
                <span className="andhra-detail-label">Scholarship/Fellowship</span>
                <span className="andhra-detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>

            <section className="andhra-alluniversityfaq-section">
              <h2>FAQs – SRM University PhD Admission</h2>
              <div className="andhra-faq-items">
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
          <div className="andhra-side-box andhra-right-box">
            <h3>All Andhra Universities List</h3>
            <ul>
              <li><a href="/andhra/phd-admission-in-andhra-university">Andhra University</a></li>
              <li><a href="/andhra/phd-admission-in-jntuk-kakinada">JNTU Kakinada</a></li>
              <li><a href="/andhra/phd-admission-in-jntua-anantapur">JNTUA Anantapur</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
              <li><a href="/andhra/phd-admission-in-srm-university">SRM University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Emerging Research-Driven University</li>
              <li>International Faculty & Curriculum</li>
              <li>Interdisciplinary PhD Programs</li>
              <li>Fellowships for Full-time Researchers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRMUniversityGuntur;
