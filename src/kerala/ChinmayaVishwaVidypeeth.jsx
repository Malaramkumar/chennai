import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does CVV open PhD admissions?",
    answer: "CVV typically opens PhD admissions once per academic year. Notifications are announced in June–July on the official website."
  },
  {
    question: "What is the eligibility criteria?",
    answer: "A master’s degree with a minimum of 55% marks (50% for reserved categories). NET/JRF/GATE/UGC-NET are accepted for exemption."
  },
  {
    question: "Is there an entrance exam and interview?",
    answer: "Yes. CVV conducts its own entrance test followed by an interview. NET/JRF/GATE qualified candidates may be exempted from the written exam."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes, working professionals with relevant experience and a No Objection Certificate can apply for a part-time PhD."
  },
  {
    question: "Does CVV offer fellowships?",
    answer: "Yes. CVV provides scholarships and research assistantships based on merit and department approvals."
  }
];

const universityData = {
  fullName: "PhD Admission at Chinmaya Vishwa Vidyapeeth (CVV), Ernakulam",
  shortName: "CVV",
  phdEntranceExam: "CVV Entrance Test / NET / JRF / GATE",
  qualificationRequired: "Master’s degree with ≥55% marks (50% for reserved categories)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full‑Time / Part‑Time",
  documentsRequired: [
    "Postgraduate degree certificate & transcripts",
    "Undergraduate degree certificate & transcripts",
    "Entrance exam scorecard (if applicable)",
    "Employer’s NOC (for part-time)",
    "Research proposal",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "June–July each year (Check CVV admission portal)",
  approxFee: "₹25,000 – ₹45,000 per year",
  scholarshipAvailability: "Available based on merit; department-funded assistantships"
};

const ChinmayaVishwaVidypeeth = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Chinmaya Vishwa Vidyapeeth</h3>
          <ul>
            <li><b>Year of Establishment:</b> 2016</li>
            <li><b>PhD Programs Started:</b><br /> Since 2018</li>
            <li><b>Annual PhD Enrolments:</b><br /> 30–50 scholars per year</li>
            <li><b>Why Choose CVV:</b><br /> Focus on Sanskrit, Spirituality, Social Sciences with holistic education and research ethos.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>
          <div className="kerala-details-grid">
            {Object.entries(universityData)
              .filter(([k]) => k !== "fullName")
              .map(([k, v], i) => (
                <div className="kerala-detail-item" key={i}>
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
                      {v.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="kerala-detail-value">{v}</span>
                  )}
                </div>
              ))
            }
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
            <li>Unique focus on Sanskrit & Spiritual Studies</li>
            <li>Holistic & Value-Based Research</li>
            <li>Small Cohort for Mentored Learning</li>
            <li>NAAC Accredited</li>
            <li>Strong Cultural Heritage</li>
          </ul>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (CVV)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-Schema */}
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

export default ChinmayaVishwaVidypeeth;
