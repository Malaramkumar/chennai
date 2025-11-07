import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does CUK open PhD admissions?",
    answer: "The Central University of Kerala typically opens PhD admissions once a year in August–September. Official notifications are released on the university's portal."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "A Master's degree with at least 55% marks (50% for reserved categories). Qualifying UGC-NET/JRF or CSIR-NET may exempt the entrance test."
  },
  {
    question: "Is there a PhD entrance exam and interview?",
    answer: "Yes, CUK conducts its own entrance test followed by an interview. NET/JRF-qualified candidates may get exemptions."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes. Professionals with at least 2 years of experience and a No Objection Certificate can apply for part-time PhD."
  },
  {
    question: "Are scholarships provided?",
    answer: "Yes. Eligible candidates receive fellowships via UGC-JRF, CSIR-JRF, and university-funded assistantships."
  }
];

const universityData = {
  fullName: "PhD Admission at Central University of Kerala (CUK), Kasaragod",
  shortName: "CUK",
  phdEntranceExam: "CUK Entrance Test / UGC-NET / JRF / CSIR-NET",
  qualificationRequired: "Master’s degree ≥ 55% (50% for reserved categories)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate degree certificate & transcripts",
    "Undergraduate degree certificate & transcripts",
    "Entrance test scorecard (if applicable)",
    "Interview call letter",
    "Employer’s NOC (for part-time)",
    "Research proposal",
    "Category certificate (if applicable)"
  ],
  applicationTimeline: "August–September annually (check CUK admission portal)",
  approxFee: "₹25,000 – ₹45,000 per year",
  scholarshipAvailability: "UGC-JRF, CSIR-JRF, and university assistantships"
};

const CentralUniversityKerala = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Central University of Kerala</h3>
          <ul>
            <li><b>Established:</b> 2009</li>
            <li><b>PhD Programs Introduced:</b><br /> Since 2010</li>
            <li><b>Annual PhD Enrolment:</b><br /> 50+ scholars across departments</li>
            <li><b>Why Choose CUK:</b><br /> Multi-disciplinary university with strong focus on research, national-level faculty, and modern infrastructure.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>
          <div className="kerala-details-grid">
            {Object.entries(universityData)
              .filter(([k]) => k !== "fullName")
              .map(([k, v], idx) => (
                <div className="kerala-detail-item" key={idx}>
                  <span className="kerala-detail-label">
                    {{
                      shortName: "Popularly Known As",
                      phdEntranceExam: "PhD Entrance Exam",
                      qualificationRequired: "Qualification Required",
                      workExperience: "Work Experience",
                      modeOfPhd: "Mode of PhD",
                      documentsRequired: "Documents Required",
                      applicationTimeline: "Application Timeline",
                      approxFee: "Approx. Fee",
                      scholarshipAvailability: "Scholarship/Fellowship"
                    }[k]}
                  </span>
                  {Array.isArray(v) ? (
                    <ul className="kerala-detail-list">
                      {v.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="kerala-detail-value">{v}</span>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="kerala-side-box kerala-right-box">
          <h3>All Kerala Universities List</h3>
          <ul>
  <li><a href="/kerala/phd-admission-amrita-vishwa-vidyapeetham-amritapuri-campus">Amrita Vishwa Vidyapeetham, Amritapuri</a></li>
  <li><a href="/kerala/phd-admission-in-university-of-kerala">University of Kerala</a></li>
  <li><a href="/kerala/phd-admission-at-mahatma-gandhi-university">Mahatma Gandhi University, Kottayam</a></li>
  <li><a href="/kerala/phd-admission-at-indian-institute-of-technology">IIT Palakkad</a></li>
  <li><a href="/kerala/phd-admission-at-national-institute-of-technology">NIT Calicut</a></li>
  <li><a href="/kerala/phd-admission-at-cochin-university-of-science-and-technology">CUSAT, Kochi</a></li>
  <li><a href="/kerala/phd-admission-at-central-university-of-kerala">Central University of Kerala</a></li>
  <li><a href="/kerala/phd-admission-at-kannur-university">Kannur University</a></li>
  <li><a href="/kerala/phd-admission-at-chinmaya-vishwa-vidyapeeth">Chinmaya Vishwa Vidyapeeth (CVV)</a></li>
  <li><a href="/kerala/phd-admission-at-digital-university-kerala">Digital University Kerala</a></li>
  <li><a href="/kerala/phd-admission-in-amrita-vishwa-vidyapeetham-kochi-campus">Amrita Vishwa Vidyapeetham, Kochi</a></li>
  <li><a href="/kerala/phd-admission-at-apj-abdul-kalam-technological-university">APJ Abdul Kalam Technological University</a></li>
  <li><a href="/kerala/phd-admission-at-iim-kozhikode">IIM Kozhikode</a></li>
</ul>


          <h3>Key Highlights</h3>
          <ul>
            <li>Central University status under the Parliament of India</li>
            <li>Multidisciplinary research centers</li>
            <li>Modern infrastructure & labs</li>
            <li>UGC/CSIR national fellowships</li>
            <li>Focus on regional development and global outreach</li>
          </ul>
        </div>

      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (Central University of Kerala)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        }) }}
      />
    </section>
  </div>
);

export default CentralUniversityKerala;
