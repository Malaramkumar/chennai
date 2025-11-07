import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Does VFSTR offer a PhD in Engineering?",
    answer: "Yes, VFSTR offers PhD programs in various engineering disciplines such as CSE, ECE, Mechanical, Civil, Chemical, and Biotechnology." 
  },
  {
    question: "What is the eligibility criteria for PhD at VFSTR?",
    answer: "Candidates need a Master’s degree with minimum 55% marks (5% relaxation for reserved categories). For Engineering, first-class both in B.Tech and M.Tech is preferred." 
  },
  {
    question: "Is an entrance test mandatory?",
    answer: "Yes, VFSTR conducts its own written test (AARAT) followed by an interview. However, GATE/UGC‑NET/CSIR‑NET/CAT qualified candidates are exempted from the written test." 
  },
  {
    question: "How is selection made under PhD program?",
    answer: "Selection is weighted: academic performance (UG and PG), experience, publications, written test (15%), and interview (25%)." 
  },
  {
    question: "Are there any scholarships for PhD scholars?",
    answer: "Yes — full‑time Engineering scholars receive ₹25,000/month stipend (HTRA), plus tuition waiver for faculty pursuing part‑time research." 
  }
];

const universityData = {
  fullName: "PhD Admission at Vignan's Foundation for Science, Technology & Research, Guntur",
  shortName: "VFSTR",
  phdEntranceExam: "VFSTR written test (AARAT) + Interview; GATE/UGC-NET/CSIR‑NET/CAT may exempt written test",
  qualificationRequired: "Master’s degree with at least 55% (relaxable by 5% for reserved categories); Engineering requires First Class",
  workExperience: "Preferred but not mandatory; industry/R&D professionals with ≥5 yrs experience may get written‑test exemption",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG & UG Certificates and Marksheets",
    "National entrance exam scorecard (if applicable)",
    "Research proposal / Statement of Purpose",
    "Experience certificate (for part-time applicants)",
    "ID Proof (Aadhaar/PAN)",
    "Caste/Category certificate (if applicable)"
  ],
  applicationTimeline: "Rolling admissions throughout the year; written tests twice annually (Dec/Jan & Jul/Aug)" ,
  approxFee: "₹60,000 per year (tuition) typical for Engineering PhD",
  scholarshipAvailability: "₹25,000/month HTRA stipend for full‑time Engineering scholars; tuition waivers available for part‑time faculty fellows"
};

const VignanUniversityPhD = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />
      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About VFSTR University</h3>
            <ul>
              <li><b>Established:</b> 1997 / Deemed-to‑be University since 2009</li>
              <li><b>Type:</b> Deemed University (Private)</li>
              <li><b>Location:</b> Vadlamudi, near Guntur, Andhra Pradesh</li>
              <li><b>Recognized By:</b> UGC, AICTE, NAAC “A+” Grade</li>
              <li><b>PhD Disciplines:</b> Engineering, Sciences, Management, Humanities</li>
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
              <h2>FAQs – VFSTR PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
            </ul>
            <h3>Key Highlights</h3>
            <ul>
              <li>Deemed University with strong Engineering research focus</li>
              <li>Rolling admissions & semi-annual test cycles</li>
              <li>HTRA stipend ₹25,000/month for full-time Engineering scholars</li>
              <li>Experienced R&D-driven faculty and well-equipped labs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VignanUniversityPhD;
