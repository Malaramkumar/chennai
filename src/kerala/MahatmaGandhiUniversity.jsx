import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What are the eligibility criteria for PhD at MGU?",
    answer:
      "A Master’s degree with ≥ 55% (50% for SC/ST/OBC/PWD). Valid NET/JRF/GATE scores may exempt you from the university entrance test."
  },
  {
    question: "When is the PhD admission window?",
    answer:
      "Typically once a year during July–August. Official notifications and dates are published on the MGU PhD portal."
  },
  {
    question: "Is a research proposal required during application?",
    answer:
      "Yes. Applicants must submit a 2–3 page research proposal outlining objectives and methodology."
  },
  {
    question: "Are fellowships available?",
    answer:
      "Yes. UGC‑JRF, KSCSTE, DST‑INSPIRE fellowships and MGU‑internal assistantships are available."
  },
  {
    question: "Is part-time PhD allowed at MGU?",
    answer:
      "Yes, working professionals with NOC and ≥ 2 years’ experience can apply for part‑time PhD."
  },
];

const universityData = {
  fullName: "PhD Admission at Mahatma Gandhi University (MGU), Kottayam",
  shortName: "MGU",
  phdEntranceExam: "MGU Entrance Test / NET / JRF / GATE",
  qualificationRequired: "Master’s degree ≥ 55% (50% for reserved categories)",
  workExperience: "Required for part‑time scholars",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG degree & mark sheets",
    "UG degree & mark sheets",
    "Entrance test scorecard (if applicable)",
    "Research proposal",
    "NOC from employer (for part‑time)",
    "Caste/Community certificate (if applicable)"
  ],
  applicationTimeline: "July–August annually (check official MGU site)",
  approxFee: "₹20,000 – ₹40,000 per year",
  scholarshipAvailability: "UGC-JRF, KSCSTE, DST-INSPIRE and university fellowships"
};

const MahatmaGandhiUniversity = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Mahatma Gandhi University, Kottayam</h3>
          <ul>
            <li><b>Established:</b> 1983</li>
            <li><b>PhD Programs Launched:</b><br /> 1985 onwards</li>
            <li><b>Annual PhD Enrolment:</b><br /> 200+ scholars</li>
            <li><b>Why Choose MGU:</b><br /> NAAC A++ grade, interdisciplinary research centres, and national–level faculty.</li>
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
            <li>NAAC A++ Accredited</li>
            <li>Large Interdisciplinary Centers</li>
            <li>Strong Humanities and Social Sciences Profile</li>
            <li>UGC and Government-funded Fellowships</li>
            <li>Robust Collaborations and Research Networks</li>
          </ul>
        </div>

      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (Mahatma Gandhi University)</h2>
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

export default MahatmaGandhiUniversity;
