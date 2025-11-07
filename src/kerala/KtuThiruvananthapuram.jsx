import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at KTU?",
    answer: "KTU generally opens PhD admissions once every academic year. Notifications are usually released in July–August. Check the official KTU website for dates."
  },
  {
    question: "What is the eligibility criteria?",
    answer: "A Master’s degree in relevant field with at least 60% marks (55% for reserved categories). NET/JRF/GATE certificates are accepted."
  },
  {
    question: "Is an entrance exam required?",
    answer: "Yes, KTU conducts its own PhD entrance test followed by a personal interview. Candidates with NET/GATE/JRF may be exempted from the written exam."
  },
  {
    question: "Can working professionals apply for part‑time PhD at KTU?",
    answer: "Yes. Part‑time PhD is allowed for employed candidates with a No Objection Certificate and relevant work experience."
  },
  {
    question: "Are fellowships available?",
    answer: "Yes. UGC‑JRF, KSCSTE fellowships and institutional assistantships are available based on performance and funding."
  }
];

const universityData = {
  fullName: "PhD Admission at APJ Abdul Kalam Technological University, Thiruvananthapuram",
  shortName: "KTU",
  phdEntranceExam: "KTU Entrance Test / NET / GATE / JRF",
  qualificationRequired: "Master’s degree with ≥60% marks (55% for reserved category)",
  workExperience: "Required for part‑time applicants",
  modeOfPhd: "Full‑Time / Part‑Time",
  documentsRequired: [
    "Postgraduate degree certificate & marksheets",
    "Undergraduate degree certificate & marksheets",
    "Entrance scorecard (if applicable)",
    "Employer’s NOC (for part‑time)",
    "Research proposal",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "July–August each year (check official notification)",
  approxFee: "₹20,000 – ₹40,000 per year",
  scholarshipAvailability: "UGC-JRF, KSCSTE and institutional fellowships"
};

const KtuThiruvananthapuram = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About APJ Abdul Kalam Technological University (KTU)</h3>
          <ul>
            <li><b>Year of Establishment:</b> 2014</li>
            <li><b>PhD Programs Started:</b><br /> Since 2015</li>
            <li><b>Annual PhD Enrolments:</b><br /> 150+ scholars enrolled annually</li>
            <li><b>Why Choose KTU:</b><br /> State technical university with robust engineering research, good labs, and industry linkages.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>
          <div className="kerala-details-grid">
            {Object.entries(universityData).filter(([key]) => key !== 'fullName').map(([key, value], idx) => (
              <div className="kerala-detail-item" key={idx}>
                <span className="kerala-detail-label">
                  {{
                    shortName: "Popularly Known As",
                    phdEntranceExam: "PhD Entrance Exam",
                    qualificationRequired: "Qualification Required",
                    workExperience: "Work Experience",
                    modeOfPhd: "Mode of PhD",
                    applicationTimeline: "Application Timeline",
                    approxFee: "Approx. Fee",
                    scholarshipAvailability: "Scholarship/Fellowship",
                    documentsRequired: "Documents Required"
                  }[key]}
                </span>
                {Array.isArray(value) ? (
                  <ul className="kerala-detail-list">
                    {value.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <span className="kerala-detail-value">{value}</span>
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
            <li>Kerala's Technical University</li>
            <li>Strong Engineering Research</li>
            <li>Well-equipped Labs</li>
            <li>Industry Collaborations</li>
            <li>Focused on Innovation & Startups</li>
          </ul>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (KTU)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json"
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

export default KtuThiruvananthapuram;
