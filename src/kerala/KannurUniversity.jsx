import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What are the eligibility criteria for PhD at Kannur University?",
    answer: "Master’s degree with at least 55% marks (50% for SC/ST/OBC/PWD). NET/JRF or university entrance test followed by interview."
  },
  {
    question: "When are PhD admissions open?",
    answer: "Typically once a year around June–July. Exact dates and application details are posted on the official portal."
  },
  {
    question: "Is a research proposal required?",
    answer: "Yes, candidates must submit a tentative research proposal along with application."
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer: "Yes, eligible candidates receive support via UGC-JRF, KSCSTE fellowships, and university-funded assistantships."
  },
  {
    question: "Can part-time PhD candidates apply?",
    answer: "Yes, part-time is permitted with a No Objection Certificate from employer and relevant work experience."
  }
];

const universityData = {
  fullName: "PhD Admission at Kannur University",
  shortName: "Kannur University",
  phdEntranceExam: "Kannur Univ Entrance Test / NET / GATE / JRF",
  qualificationRequired: "Master’s degree with ≥ 55% (≥ 50% for reserved categories)",
  workExperience: "Required for part-time candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG degree & transcript",
    "UG degree & transcript",
    "Entrance test scorecard (if applicable)",
    "Research proposal",
    "Employer’s NOC (for part-time)",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "June–July annually (check official notification)",
  approxFee: "₹20,000 – ₹40,000 per year",
  scholarshipAvailability: "UGC-JRF, KSCSTE and university fellowships"
};

const courseList = [
  "PhD in Sciences (e.g., Zoology, Chemistry, Biotechnology)",
  "PhD in Arts & Humanities (e.g., English, History)",
  "PhD in Social Sciences (e.g., Economics, Sociology)",
  "PhD in Professional Studies (e.g., Education, Journalism)",
];

const KannurUniversity = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Kannur University</h3>
          <ul>
            <li><b>Year of Establishment:</b> 1996</li>
            <li><b>PhD Programs Started:</b><br /> Since 2000</li>
            <li><b>Annual PhD Enrolments:</b><br /> 100+ scholars</li>
            <li><b>Why Choose KU:</b><br /> Wide disciplinary coverage, strong research programs, and rural & tribal focus.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>

          <div className="kerala-details-grid">
            {Object.entries(universityData).filter(([k]) => k !== "fullName").map(([k, v], idx) => (
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

            {/* Courses section */}
            <div className="kerala-detail-item">
              <span className="kerala-detail-label">Available PhD Courses</span>
              <ul className="kerala-detail-list">
                {courseList.map((c, i) => <li key={i}>{c}</li>)}
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
            <li>Wide disciplinary PhD options</li>
            <li>Strong rural & tribal research</li>
            <li>UGC-JRF & KSCSTE fellowships</li>
            <li>Research across arts, science & tech</li>
            <li>Comprehensive academic infrastructure</li>
          </ul>
        </div>

      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (Kannur University)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-LD Schema for FAQ */}
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

export default KannurUniversity;
