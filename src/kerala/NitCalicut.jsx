import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does NIT Calicut open PhD admissions?",
    answer: "Usually once a year during July–August. Official notifications are available on the NIT Calicut PhD admission portal."
  },
  {
    question: "What is the eligibility criteria?",
    answer: "A Master’s degree with ≥ 60% marks (55% for reserved category). Valid GATE/UGC‑NET/JRF scores may waive the entrance test requirement."
  },
  {
    question: "Is there an entrance exam and interview process?",
    answer: "Yes. NIT Calicut conducts its own written test and interview for PhD candidates unless exempted."
  },
  {
    question: "Are part-time PhD programs available?",
    answer: "Yes. Employed candidates may apply for part-time PhD with a minimum of 2 years of experience and a No Objection Certificate."
  },
  {
    question: "Do scholarships exist for PhD scholars?",
    answer: "Yes—Institute Assistantships are provided to GATE/NET-qualified candidates; fellowships are also available via UGC/CSIR."
  }
];

const universityData = {
  fullName: "PhD Admission at National Institute of Technology (NIT) Calicut",
  shortName: "NIT Calicut",
  phdEntranceExam: "NIT Calicut Written Test / GATE / NET / JRF",
  qualificationRequired: "Master’s degree with ≥ 60% (55% for reserved categories)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate degree certificate & marksheets",
    "Undergraduate degree certificate & marksheets",
    "GATE/NET/JRF scorecard (if applicable)",
    "Written test & interview offer letter",
    "Employer’s NOC (for part-time)",
    "Research proposal",
    "Category certificate (if applicable)"
  ],
  applicationTimeline: "July–August each year",
  approxFee: "₹25,000 – ₹60,000 per year",
  scholarshipAvailability: "Institute assistantships for GATE/NET candidates; UGC/CSIR fellowships"
};

const NitCalicut = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About NIT Calicut</h3>
          <ul>
            <li><b>Established:</b> 1961 (as a Regional Engineering College), NIT status granted in 2002</li>
            <li><b>PhD Programs Started:</b><br /> Since 1980s</li>
            <li><b>Annual PhD Enrolment:</b><br /> 150+ scholars across departments</li>
            <li><b>Why Choose NITC:</b><br /> Prestigious technical research institute with excellent infrastructure, labs, and faculty.</li>
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
            <li>One of India’s top NITs</li>
            <li>Strong engineering research culture</li>
            <li>Excellent lab and computing infrastructure</li>
            <li>GATE/NET-qualified fellowships</li>
            <li>Rich industrial and academic collaborations</li>
          </ul>
        </div>

      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (NIT Calicut)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type":"Question",
          "name": f.question,
          "acceptedAnswer": { "@type":"Answer", "text": f.answer }
        }))
      }) }} />
    </section>
  </div>
);

export default NitCalicut;
