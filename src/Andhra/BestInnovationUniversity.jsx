import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does BEST Innovation University offer PhD programs?",
    answer: "Yes, the university offers PhD programs in various domains including Technology, Management, and interdisciplinary innovation areas."
  },
  {
    question: "What is the eligibility for PhD at BEST Innovation University?",
    answer: "Candidates must have a Master’s degree in a relevant field with at least 55% marks. A 5% relaxation is available for reserved categories."
  },
  {
    question: "Is there an entrance exam for PhD at BEST?",
    answer: "Yes, the university conducts a written test and interview. GATE/NET qualified candidates may be exempted from the written test."
  },
  {
    question: "Is part-time PhD available?",
    answer: "Yes, BEST Innovation University offers part-time PhD for working professionals with relevant industry or academic experience."
  },
  {
    question: "Are any scholarships or stipends provided?",
    answer: "Yes, full-time scholars may receive stipends or assistantships based on merit, availability of research grants, and university norms."
  }
];

const universityData = {
  fullName: "PhD Admission at B.E.S.T Innovation University, Anantapur",
  shortName: "BEST",
  phdEntranceExam: "University Written Test + Interview; GATE/NET holders may be exempted",
  qualificationRequired: "Master’s degree in relevant field with minimum 55% marks (5% relaxation for reserved categories)",
  workExperience: "Preferred for part-time applicants (minimum 2 years in academia/industry/R&D)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate and Undergraduate certificates with transcripts",
    "Entrance exam scorecard (GATE/NET, if applicable)",
    "Experience certificate (for part-time applicants)",
    "Research proposal or Statement of Purpose",
    "Government ID proof (Aadhaar/PAN)",
    "Caste certificate (if applicable)"
  ],
  applicationTimeline: "Twice a year — January and July admission cycles",
  approxFee: "₹50,000 – ₹60,000 per year (varies by department)",
  scholarshipAvailability: "Stipends for eligible full-time PhD scholars; support via research projects and teaching assistantships"
};

const BestInnovationUniversityPhD = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />
      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About BEST Innovation University</h3>
            <ul>
              <li><b>Established:</b> 2019</li>
              <li><b>Type:</b> Private State University</li>
              <li><b>Location:</b> Gorantla, Anantapur district, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC</li>
              <li><b>PhD Disciplines:</b> Technology, Management, Innovation, Interdisciplinary Sciences</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="andhra-university-details-container">
            <div className="andhra-phdimg" />
            <h2 className="andhra-university-title">{universityData.fullName}</h2>
            <div className="andhra-details-grid">
              {Object.entries(universityData).map(([key, value]) => (
                key !== "shortName" &&
                <div className="andhra-detail-item" key={key}>
                  <span className="andhra-detail-label">
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .replace("Phd", "PhD")}
                  </span>
                  {Array.isArray(value) ? (
                    <ul className="andhra-detail-list">
                      {value.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="andhra-detail-value">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <section className="andhra-alluniversityfaq-section">
              <h2>FAQs – BEST University PhD Admission</h2>
              <div className="andhra-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="andhra-side-box andhra-right-box">
            <h3>All Andhra Universities List</h3>
            <ul>
              <li><a href="/andhra/phd-admission-in-mohan-babu-university">Mohan Babu University</a></li>
              <li><a href="/andhra/phd-admission-in-siddhartha-academy-vijayawada">Siddhartha Academy (SAHE)</a></li>
              <li><a href="/andhra/phd-admission-in-vignan-university">VFSTR University</a></li>
              <li><a href="/andhra/phd-admission-in-central-tribal-university-of-andhra-pradesh">CTUAP</a></li>
              <li><a href="/andhra/phd-admission-in-best-innovation-university">BEST Innovation University</a></li>
            </ul>
            <h3>Key Highlights</h3>
            <ul>
              <li>Focus on innovation, interdisciplinary research, and entrepreneurship</li>
              <li>Full-time & part-time PhD options with faculty mentorship</li>
              <li>Stipends and assistantships based on eligibility</li>
              <li>Emerging university with modern research focus</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BestInnovationUniversityPhD;
