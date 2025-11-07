import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does SAHE offer a PhD in Engineering?",
    answer: "Yes, SAHE (formerly VRSEC) offers PhD programs in disciplines such as CSE, ECE, EEE, Civil, Mechanical, IT, and AI/ML."
  },
  {
    question: "What is the eligibility for PhD at SAHE?",
    answer: "Candidates must have a Master's degree in relevant discipline with minimum 55% marks (5% relaxation for reserved categories)."
  },
  {
    question: "Is there an entrance test for PhD admission?",
    answer: "Yes, SAHE conducts a written test and interview. GATE/NET qualified candidates may be exempted from the written test."
  },
  {
    question: "Is work experience necessary for part-time PhD?",
    answer: "Yes, for part-time mode, applicants should be employed in teaching, research, or industry with a minimum of 2 years of experience."
  },
  {
    question: "Does SAHE provide any financial assistance for PhD?",
    answer: "Yes, eligible full-time PhD scholars in Engineering can receive ₹25,000/month stipend under HTRA, along with fee waivers in some cases."
  }
];

const universityData = {
  fullName: "PhD Admission at Siddhartha Academy of Higher Education (SAHE), Vijayawada",
  shortName: "SAHE",
  phdEntranceExam: "SAHE Written Test + Interview (GATE/NET qualified candidates may get exemption)",
  qualificationRequired: "Master’s degree with minimum 55%; 5% relaxation for reserved categories",
  workExperience: "Required for part-time mode (minimum 2 years in teaching/research/industry)",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate & Undergraduate degree certificates",
    "Entrance exam scorecard (GATE/NET if applicable)",
    "Experience certificate (for part-time)",
    "Research proposal or SOP",
    "Government-issued ID (Aadhaar/PAN)",
    "Caste/Community certificate (if applicable)"
  ],
  applicationTimeline: "Admissions open in January and July cycles each year",
  approxFee: "₹60,000–₹70,000 per year (Engineering PhD)",
  scholarshipAvailability: "Stipend of ₹25,000/month for eligible full-time scholars; teaching assistant roles available"
};

const SiddharthaPhD = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />
      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About SAHE (VRSEC)</h3>
            <ul>
              <li><b>Established:</b> 1977 (as VRSEC); Deemed-to-be University since 2024</li>
              <li><b>Type:</b> Deemed University (Private)</li>
              <li><b>Location:</b> Kanuru, Vijayawada, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC, AICTE, NAAC “A+” Grade</li>
              <li><b>PhD Disciplines:</b> CSE, ECE, EEE, Civil, Mechanical, IT, AI/ML, Sciences, Management</li>
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
              <h2>FAQs – SAHE PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-vignan-university">VFSTR University</a></li>
              <li><a href="/andhra/phd-admission-in-nit-andhra-pradesh">NIT Andhra Pradesh</a></li>
              <li><a href="/andhra/phd-admission-in-central-university-of-andhra-pradesh">Central University AP</a></li>
              <li><a href="/andhra/phd-admission-in-central-tribal-university-of-andhra-pradesh">CTUAP</a></li>
              <li><a href="/andhra/phd-admission-in-siddhartha-academy-vijayawada">Siddhartha Academy (SAHE)</a></li>
            </ul>
            <h3>Key Highlights</h3>
            <ul>
              <li>Legacy institution with modern research facilities</li>
              <li>Recently upgraded to Deemed University status</li>
              <li>HTRA ₹25,000/month for full-time PhD scholars</li>
              <li>Wide range of disciplines with experienced faculty</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SiddharthaPhD;
