import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at University of Calicut?",
    answer: "PhD admissions are typically announced once a year in June–July. Check the official Calicut University portal for updates."
  },
  {
    question: "What is the eligibility criteria?",
    answer: "A Master's degree with at least 55% marks (50% for reserved categories). Valid NET/JRF/GATE scores may exempt entrance."
  },
  {
    question: "Is there an entrance exam and interview process?",
    answer: "Yes. The university conducts its own written test followed by an interview unless exempted by NET/GATE/JRF."
  },
  {
    question: "Are part-time PhD positions available?",
    answer: "Yes. Part-time PhD is open to professionals with a minimum of 2 years of work experience and NOC."
  },
  {
    question: "Does University of Calicut offer fellowships?",
    answer: "Yes, UGC-JRF, KSCSTE, and university assistantships are available based on merit."
  }
];

const universityData = {
  fullName: "PhD Admission at University of Calicut, Malappuram",
  shortName: "Calicut University",
  phdEntranceExam: "University Entrance Test / NET / GATE / JRF",
  qualificationRequired: "Master’s degree ≥ 55% (50% for reserved categories)",
  workExperience: "Required for part-time candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG degree & transcripts",
    "UG degree & transcripts",
    "Entrance test scorecard (if applicable)",
    "Research proposal",
    "Employer’s NOC (for part-time)",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "June–July annually (see official portal)",
  approxFee: "₹20,000 – ₹40,000 per annum",
  scholarshipAvailability: "UGC-JRF, KSCSTE & University assistantships"
};

const UnivCalicut = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About University of Calicut</h3>
          <ul>
            <li><b>Established:</b> 1968</li>
            <li><b>PhD Programs Launched:</b><br /> Since 1980s</li>
            <li><b>Annual PhD Enrolment:</b><br /> 150+ researchers</li>
            <li><b>Why Choose CU:</b><br /> Largest university in Kerala with robust campus and research facilities.</li>
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
            <li>Kerala’s largest teaching-cum-affiliating university</li>
            <li>Wide range of research disciplines</li>
            <li>Strong infrastructure across multiple campuses</li>
            <li>UGC-JRF/KSCSTE fellowships available</li>
            <li>Focus on regional & global collaboration</li>
          </ul>
        </div>

      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (University of Calicut)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }) }} />
    </section>
  </div>
);
 export default UnivCalicut;``
