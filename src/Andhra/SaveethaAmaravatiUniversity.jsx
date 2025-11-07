import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does Saveetha Amaravati University offer a PhD in Management?",
    answer: "Yes, SAU offers a PhD in Management covering specializations such as Marketing, Finance, HR, International Business and more."
  },
  {
    question: "What are the eligibility criteria for PhD in Management?",
    answer: "Applicants need a Master’s degree in Management or related discipline with minimum 55% marks (50% for SC/ST/OBC)."
  },
  {
    question: "Is an entrance exam mandatory?",
    answer: "Yes—SAU conducts its own entrance test followed by an interview. Candidates with valid UGC‐NET/CSIR‐NET/GATE/SLET or M.Phil or 5+ years of experience may be exempted."
  },
  {
    question: "What is the selection process?",
    answer: "Selection is based on academic performance, entrance test (if applicable), and performance in an interview."
  },
  {
    question: "Is financial assistance available?",
    answer: "Eligible full‑time PhD scholars may receive stipends or assistantships based on university norms and available research grants."
  }
];

const universityData = {
  fullName: "PhD Admission at Saveetha Amaravati University (SAU), Vijayawada",
  shortName: "SAU",
  phdEntranceExam: "University Entrance Test + Interview; exemptions for NET/GATE/SLET/M.Phil or 5+ yrs experience",
  qualificationRequired: "Master’s degree with ≥55% marks (50% for SC/ST/OBC non‑creamy layer) in relevant discipline",
  workExperience: "Not mandatory; ≥5 yrs professional or teaching/research experience may grant exemption from entrance exam",
  modeOfPhd: "Full‑Time / Part‑Time",
  documentsRequired: [
    "UG & PG certificates and mark sheets",
    "Qualifying exam scorecard (e.g. UGC‑NET/GATE/SLET/M.Phil) if applicable",
    "Experience certificate (for exemption or part‑time applicants)",
    "Research proposal / Statement of Purpose",
    "ID Proof (Aadhaar/PAN)",
    "Community / Caste certificate (if applicable)",
    "Migration certificate / Transfer certificate, photos"
  ],
  applicationTimeline: "Typically open in January and July each year; apply online via admission portal",
  approxFee: "Tuition ₹25,000 per annum (PhD full‑time / part‑time external) for Management stream" ,
  scholarshipAvailability: "Stipends or assistantships awarded based on merit, departmental funding and eligibility"
};

const SaveethaAmaravatiUniversityPhD = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />
      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About Saveetha Amaravati University</h3>
            <ul>
              <li><b>Established:</b> 2018 (State Private University)</li>
              <li><b>Type:</b> State Private University</li>
              <li><b>Location:</b> Vijayawada, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC; NAAC 'A' grade (Saveetha Group legacy applies)</li>
              <li><b>PhD Disciplines:</b> Management, Allied Health Sciences, Interdisciplinary Research</li>
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
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).replace("Phd", "PhD")}
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
              <h2>FAQs – SAU PhD Admission</h2>
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
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity": faqs.map(faq => ({
                      "@type":"Question","name":faq.question,
                      "acceptedAnswer": {"@type":"Answer","text":faq.answer}
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
              <li><a href="/andhra/phd-admission-in-best-innovation-university">BEST Innovation University</a></li>
              <li><a href="/andhra/phd-admission-in-saveetha-amaravati-university">Saveetha Amaravati University</a></li>
            </ul>
            <h3>Key Highlights</h3>
            <ul>
              <li>PhD in Management with entrance‑exemptions for NET/GATE/SLET/M.Phil or 5+ yrs experience </li>
              <li>Low tuition fee (~₹25,000/year for Management PhD stream)  </li>
              <li>Online application via SAU portal; entrance + interview rounds  </li>
              <li>University established 2018, part of Saveetha Group with NAAC ‘A’ legacy</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SaveethaAmaravatiUniversityPhD;
