import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at CVV?",
    answer: "CVV typically opens admissions once a year around June–July. Notifications are posted on the official CVV admissions portal."
  },
  {
    question: "What is the eligibility criteria?",
    answer: "A Master’s degree with minimum 55% marks (50% for reserved categories). UGC-NET/JRF/GATE-qualified candidates may get exemptions from the entrance exam."
  },
  {
    question: "Is there an entrance test plus interview?",
    answer: "Yes, CVV conducts an internal written test followed by an interview for non-NET/GATE candidates."
  },
  {
    question: "Are part-time PhDs allowed?",
    answer: "Yes. Working professionals with at least 2 years’ experience and an employer's NOC may apply."
  },
  {
    question: "Does CVV offer research fellowships?",
    answer: "Yes—UGC-JRF, internal assistantships, and university scholarships are available based on merit."
  }
];

const universityData = {
  fullName: "PhD Admission at Chinmaya Vishwa Vidyapeeth (CVV), Ernakulam",
  shortName: "CVV",
  phdEntranceExam: "CVV Written Test / UGC-NET / GATE / JRF",
  qualificationRequired: "Master’s degree ≥ 55% (50% for reserved)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate degree certificate & transcripts",
    "Undergraduate degree certificate & transcripts",
    "Entrance scorecard (if applicable)",
    "Interview call letter",
    "Employer’s NOC (for part-time)",
    "Research proposal",
    "Caste/community certificate (if applicable)"
  ],
  applicationTimeline: "June–July annually (check official CVV portal)",
  approxFee: "₹20,000 – ₹45,000 per year",
  scholarshipAvailability: "UGC-JRF, internal assistantships, university scholarships"
};

const CvvErnakulam = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Chinmaya Vishwa Vidyapeeth (CVV)</h3>
          <ul>
            <li><b>Established:</b> 2016</li>
            <li><b>PhD Programs Launched:</b><br /> Since 2018</li>
            <li><b>Annual PhD Enrolments:</b><br /> 30–50 scholars</li>
            <li><b>Why Choose CVV:</b><br /> Focus on Sanskrit, Indic studies and interdisciplinary research with cultural emphasis.</li>
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
            <li>Specialized in Indic knowledge & Sanskrit</li>
            <li>Interdisciplinary research options</li>
            <li>Cultural immersion & modern pedagogy</li>
            <li>Small cohort with focused mentoring</li>
            <li>Supportive assistantships & scholarships</li>
          </ul>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (CVV, Ernakulam)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type":"Question",
            "name": f.question,
            "acceptedAnswer": {"@type":"Answer","text": f.answer}
          }))
        })
      }} />
    </section>
  </div>
);

export default CvvErnakulam;
