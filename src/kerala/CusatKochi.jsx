import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at CUSAT?",
    answer: "CUSAT typically opens PhD admissions once a year, around May–June. Notifications are released on the official CUSAT website."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "A Master’s degree with at least 55% marks (50% for SC/ST/OBC/PWD). NET/JRF/GATE/UGC-NET are accepted for exemptions from the entrance test."
  },
  {
    question: "Is there a PhD entrance test?",
    answer: "Yes, CUSAT conducts its own entrance exam followed by an interview. NET/GATE qualified candidates may be exempted from the written test."
  },
  {
    question: "Can working professionals apply for part-time PhD?",
    answer: "Yes, part-time PhD options are available for Indian nationals with consistent work experience and a No Objection Certificate."
  },
  {
    question: "Are scholarships available?",
    answer: "Yes. Fellowships like UGC-JRF, CSIR-JRF, and CUSAT internal scholarships are provided to eligible candidates."
  }
];

const universityData = {
  fullName: "PhD Admission at Cochin University of Science and Technology (CUSAT), Kochi",
  shortName: "CUSAT",
  phdEntranceExam: "CUSAT Entrance Test / NET / GATE / JRF",
  qualificationRequired: "Master’s degree ≥ 55% (50% for reserved categories)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate degree certificate & mark sheets",
    "Undergraduate degree certificate & mark sheets",
    "Entrance exam scorecard (if applicable)",
    "Employer’s NOC (for part-time)",
    "Research proposal",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "May–June annually (refer official notification)",
  approxFee: "₹25,000 – ₹50,000 per year",
  scholarshipAvailability: "UGC-JRF, CSIR-JRF, CUSAT internal fellowships"
};

const CusatKochi = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Cochin University of Science and Technology (CUSAT)</h3>
          <ul>
            <li><b>Year of Establishment:</b> 1971</li>
            <li><b>PhD Programs Started:</b><br /> Since 1975</li>
            <li><b>Annual PhD Enrolments:</b><br /> 200+ researchers across disciplines</li>
            <li><b>Why Choose CUSAT:</b><br /> Premier science and technology university with strong research labs and industry reputation.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>
          <div className="kerala-details-grid">
            {Object.entries(universityData)
              .filter(([key]) => key !== "fullName")
              .map(([key, val], idx) => (
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
                  {Array.isArray(val) ? (
                    <ul className="kerala-detail-list">
                      {val.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="kerala-detail-value">{val}</span>
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
            <li>Premier Tech University</li>
            <li>Strong Science & Engineering Focus</li>
            <li>Well-equipped Research Laboratories</li>
            <li>High National & International Collaboration</li>
            <li>Industry-integrated Programs</li>
          </ul>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (CUSAT)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON‑LD Schema */}
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

export default CusatKochi;
