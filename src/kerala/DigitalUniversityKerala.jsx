import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  { question: "When are PhD admissions open at Digital University Kerala?", answer: "Admissions are usually announced annually around June–July on the official DUK portal." },
  { question: "What PhD program types are offered?", answer: "They offer Full‑time regular, Part‑time regular, and Industry‑regular PhD programs." },
  { question: "What is the eligibility criteria?", answer: "Master’s degree with ≥ 55% marks. Qualifying UGC‑NET/JRF/GATE may exempt candidates from the written test." },
  { question: "What doctoral research areas are available?", answer: "Research spans CS & Engineering, Digital Sciences, Electronic Systems, Informatics, and Digital Humanities." },
  { question: "Are fellowships available?", answer: "Yes—fellowships, scholarships, and fee waivers are offered, with stipends between ₹20–30 k/month." }
];

const universityData = {
  fullName: "PhD Admission at Kerala University of Digital Sciences, Innovation & Technology (Digital University Kerala)",
  shortName: "Digital University Kerala",
  phdEntranceExam: "DUAT / UGC‑NET / GATE / CSIR‑NET",
  qualificationRequired: "Master’s degree ≥ 55% (50% for reserved)",
  workExperience: "Required for part-time & industry programs",
  modeOfPhd: "Full‑time / Part‑time / Industry‑regular",
  documentsRequired: [
    "PG degree certificate & transcripts",
    "UG degree certificate & transcripts",
    "Entrance scorecard (if applicable)",
    "DUAT/interview call letter",
    "Employer NOC (for part-time)",
    "Research proposal",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "June–July annually (check DUK website)",
  approxFee: "₹25,000 – ₹60,000 per year",
  scholarshipAvailability: "Fellowship & fee waivers; ₹20k–₹35k/month stipend"
};

const vacancyList = [
  "Computer Science & Engineering",
  "Electronic Systems & Automation",
  "Digital Sciences",
  "Informatics",
  "Digital Humanities & Liberal Arts"
];

const DigitalUniversityKerala = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Digital University Kerala (DUK)</h3>
          <ul>
            <li><b>Established:</b> 2020 (upgraded from IIITM-K)</li>
            <li><b>First PhD Cycle:</b><br /> Since 2021</li>
            <li><b>Research Structure:</b><br /> Multi‑school format with modern labs at Technocity, Thiruvananthapuram</li>
            <li><b>Why Choose DUK:</b><br /> Kerala’s first digital-only university, with strong industry and global linkages</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>

          <div className="kerala-details-grid">
            {Object.entries(universityData)
              .filter(([key]) => key !== "fullName")
              .map(([key, val], i) => (
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
                    }[key]}
                  </span>
                  {Array.isArray(val) ? (
                    <ul className="kerala-detail-list">
                      {val.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="kerala-detail-value">{val}</span>
                  )}
                </div>
              ))}
            <div className="kerala-detail-item">
              <span className="kerala-detail-label">Research Schools & Vacancies</span>
              <ul className="kerala-detail-list">
                {vacancyList.map((s, idx) => <li key={idx}>{s}</li>)}
              </ul>
            </div>
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
            <li>State's first fully-digital university</li>
            <li>Based at Technopark Phase IV, Technocity</li>
            <li>Multiple research domains & innovation ecosystem</li>
            <li>Strong alumni placements & global MoUs</li>
            <li>Digital Science Park on-campus coming by 2026</li>
          </ul>
        </div>

      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (DUK)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
    </section>
  </div>
);

export default DigitalUniversityKerala;
