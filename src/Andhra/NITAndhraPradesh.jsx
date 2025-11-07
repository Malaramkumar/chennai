import "./Andhra.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Which disciplines does NIT Andhra Pradesh offer PhD programs in?",
    answer: "PhD programs are offered in Engineering, Sciences, and Humanities. Popular departments include ECE, CSE, EEE, Mechanical, Civil, and Chemistry."
  },
  {
    question: "What is the selection process for PhD at NIT Andhra Pradesh?",
    answer: "Selection is based on GATE/UGC-NET/CSIR-NET scores followed by written test and/or interview conducted by the institute."
  },
  {
    question: "Is full-time or part-time PhD available?",
    answer: "NIT AP offers both full-time and part-time PhD programs for eligible candidates."
  },
  {
    question: "Are institute fellowships available for full-time scholars?",
    answer: "Yes, NIT AP provides institute fellowships (₹31,000–₹35,000/month) for eligible full-time scholars as per MHRD norms."
  },
  {
    question: "What is the fee structure for PhD programs?",
    answer: "The annual fee is approximately ₹20,000 – ₹35,000 depending on the department and category."
  }
];

const universityData = {
  fullName: "PhD Admission in National Institute of Technology – Andhra Pradesh",
  shortName: "NIT AP",
  phdEntranceExam: "GATE / UGC-NET / CSIR-NET + Institute-level test/interview",
  qualificationRequired: "Master’s degree in relevant discipline with minimum 60% marks (55% for SC/ST)",
  workExperience: "Not mandatory for full-time; relevant experience required for part-time",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "PG and UG Marksheets & Certificates",
    "Valid GATE/UGC-NET/CSIR-NET Scorecard",
    "Research Proposal / SoP",
    "ID Proof (Aadhaar, PAN, etc.)",
    "Experience Certificate (for part-time)"
  ],
  applicationTimeline: "Twice a year – typically April-May and October-November",
  approxFee: "₹20,000 – ₹35,000 per year",
  scholarshipAvailability: "Yes, Institute and MHRD fellowships for full-time scholars"
};

const NITAndhraPradesh = () => {
  return (
    <div className="andhra-main">
      <Subsidebar />

      <div className="andhra-university-details-wrapper">
        <div className="andhra-content-layout">
          {/* Left Sidebar */}
          <div className="andhra-side-box andhra-left-box">
            <h3>About NIT Andhra Pradesh</h3>
            <ul>
              <li><b>Established:</b> 2015</li>
              <li><b>Type:</b> Institute of National Importance</li>
              <li><b>Location:</b> Tadepalligudem, West Godavari District</li>
              <li><b>Recognized By:</b> Ministry of Education, Govt. of India</li>
              <li><b>PhD Disciplines:</b> Engineering, Sciences, Management, Humanities</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="andhra-university-details-container">
            <div className="andhra-phdimg" />
            <h2 className="andhra-university-title">{universityData.fullName}</h2>
            <div className="andhra-details-grid">
              {Object.entries(universityData).map(([key, value]) => (
                key !== "fullName" && key !== "shortName" &&
                <div className="andhra-detail-item" key={key}>
                  <span className="andhra-detail-label">
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .replace("Phd", "PhD")}
                  </span>
                  {Array.isArray(value) ? (
                    <ul className="andhra-detail-list">
                      {value.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="andhra-detail-value">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <section className="andhra-alluniversityfaq-section">
              <h2>FAQs – NIT Andhra Pradesh PhD Admission</h2>
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
              <li><a href="/andhra/phd-admission-in-nit-andhra-pradesh">NIT Andhra Pradesh</a></li>
              <li><a href="/andhra/phd-admission-in-jntuk-kakinada">JNTUK Kakinada</a></li>
              <li><a href="/andhra/phd-admission-in-sri-krishnadevaraya-university">Sri Krishnadevaraya University</a></li>
              <li><a href="/andhra/phd-admission-in-central-university-of-andhra-pradesh">Central University of AP</a></li>
              <li><a href="/andhra/phd-admission-in-andhra-university">Andhra University</a></li>
            </ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>Institute of National Importance</li>
              <li>Located in West Godavari region</li>
              <li>GATE/UGC-NET based selection</li>
              <li>Fellowships & Hostel for full-time researchers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NITAndhraPradesh;
