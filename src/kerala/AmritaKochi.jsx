import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at Amrita Kochi campus?",
    answer: "Admissions generally open twice a year in January and July. Specific dates are announced on Amrita’s official PhD admission portal."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "A Master’s degree with ≥60 % marks (or equivalent CGPA). Valid GATE/UGC-NET/CSIR-NET scores exempt entrance test."
  },
  {
    question: "Is there an entrance exam and interview?",
    answer: "Yes. Amrita conducts its own written test and personal interview. NET/JRF/GATE-qualified candidates may bypass the entrance exam."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes, professionals with relevant work experience can apply under part-time mode, subject to NOC from their organization."
  },
  {
    question: "Does Amrita Kochi offer fellowships?",
    answer: "Yes, selected full-time candidates receive fellowships based on merit and department recommendations."
  }
];

const universityData = {
  fullName: "PhD Admission in Amrita Vishwa Vidyapeetham – Kochi Campus",
  shortName: "Amrita Kochi",
  phdEntranceExam: "Amrita Entrance Test / NET / GATE / CSIR-NET",
  qualificationRequired: "Master’s degree with ≥60% marks (or equivalent CGPA)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate degree certificates & transcripts",
    "Undergraduate degree certificates",
    "Entrance test scorecard (if applicable)",
    "Employer NOC (for part-time)",
    "Statement of Purpose",
    "Proof of work experience (for part-time)"
  ],
  applicationTimeline: "January and July cycles (Check official site)",
  approxFee: "₹30,000–₹60,000 per year",
  scholarshipAvailability: "Available based on performance and department recommendations"
};

const AmritaKochi = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">
        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About Amrita Vishwa Vidyapeetham – Kochi</h3>
          <ul>
            <li><b>Year of Establishment:</b> 2001</li>
            <li><b>PhD Programs Started:</b><br /> Since 2005</li>
            <li><b>Annual PhD Enrolments:</b><br /> 80+ scholars across Kochi campus</li>
            <li><b>Why Choose This Campus:</b><br /> Strong focus on biomedical sciences, allied health, and interdisciplinary research.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>
          <div className="kerala-details-grid">
            {Object.entries(universityData).filter(([key]) => key !== 'fullName').map(([key, value], i) => (
              <div className="kerala-detail-item" key={i}>
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
                    {value.map((doc, idx) => <li key={idx}>{doc}</li>)}
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
            <li>NAAC A++ & IoE status</li>
            <li>Focus on Biomedical & Health Sciences</li>
            <li>Global Research Collaborations</li>
            <li>Strong Industry Partnerships</li>
            <li>State‑of‑the‑art lab facilities</li>
          </ul>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – Amrita PhD Admission (Kochi)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON‑LD for FAQ */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        }) }}
      />
    </section>
  </div>
);

export default AmritaKochi;
