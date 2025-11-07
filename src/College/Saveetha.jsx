import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "What entrance exam is required for a PhD at Saveetha University?",
    answer: "Saveetha University conducts the SIMATS Entrance Test for PhD admissions. However, candidates who have qualified in UGC-NET, CSIR-NET, GATE, or SLET are exempted."
  },
  {
    question: "What are the eligibility criteria for PhD admission at Saveetha University?",
    answer: "Candidates must hold a Master’s degree (e.g., M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or equivalent CGPA."
  },
  {
    question: "Is work experience required for a PhD at Saveetha University?",
    answer: "Yes, candidates applying for the part-time PhD program must be employed and provide a No Objection Certificate (NOC) from their employer."
  },
  {
    question: "What modes of PhD are available at Saveetha University?",
    answer: "PhD programs at Saveetha University are offered in both Full-Time and Part-Time modes."
  },
  {
    question: "When does the PhD admission cycle open at Saveetha University?",
    answer: "PhD admissions occur in two sessions: January (applications open in September) and July (applications open in March)."
  },
  {
    question: "What documents are required for PhD application at Saveetha University?",
    answer: "Applicants must submit the completed online application form, attested UG/PG certificates, research proposal, photos, ID proof, and NOC from employer (for part-time)."
  },
  {
    question: "How much is the annual tuition fee for a PhD at Saveetha University?",
    answer: "The tuition fee is approximately ₹25,000 per annum."
  },
  {
    question: "Are scholarships available for PhD students at Saveetha University?",
    answer: "Yes, SIMATS offers scholarships with 75% or 50% fee waivers, as well as sports scholarships."
  },
  {
    question: "How many PhD scholars enroll annually at Saveetha University?",
    answer: "Approximately 800 scholars enroll in the PhD program every year, showing a robust research culture."
  },
  {
    question: "Why choose Saveetha University for PhD studies?",
    answer: "Saveetha University is known for its specialized research in medical and technical fields, experienced faculty, and advanced infrastructure."
  }
];


const universityData = {
  fullName: 'Saveetha Institute of Medical and Technical Sciences',
  shortName: 'Saveetha University',
  phdEntranceExam: 'SIMATS Entrance Test (Exemptions: Have qualified in UGC-NET, CSIR-NET, GATE, or SLET) ',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or equivalent CGPA ',
  workExperience:'For part-time Ph.D., candidates should be employed ',
  modeOfPhd: 'Full-Time / Part-Time ',
  documentsRequired: [
    "Completed online application form", 
    "Attested copies of UG and PG degree certificates and mark sheets",
"Research proposal",
"Passport-size photographs",
"Government-issued ID proof",
"No Objection Certificate (NOC) from employer (for part-time candidates)",

  ],
  applicationTimeline: 'January Session (opens and closes in September) / July Session (opens and closes in March) ',
  approxFee:
    '₹25,000 per annum (Tuition Fee) ',
  scholarshipAvailability: 'SIMATS Scholarships (75% Fee Waiver, 50% Fee Waiver) / Sports Scholarships ',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Saveetha University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Saveetha Institute of Medical and Technical Sciences (SIMATS) was established in 2005.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began shortly after to promote advanced research.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 800 scholars enroll annually, reflecting steady research growth.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Saveetha Institute of Medical and Technical Sciences is preferred for its specialized medical and technical research, expert faculty, and modern facilities.</li>
</ul>

          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />
            <h2 className="university-title">{universityData.fullName}</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Popularly Known As</span>
                <span className="detail-value">{universityData.shortName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">PhD Entrance Exam</span>
                <span className="detail-value">{universityData.phdEntranceExam}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Qualification Required</span>
                <span className="detail-value">{universityData.qualificationRequired}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Work Experience</span>
                <span className="detail-value">{universityData.workExperience}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Mode of PhD</span>
                <span className="detail-value">{universityData.modeOfPhd}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Application Timeline</span>
                <span className="detail-value">{universityData.applicationTimeline}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span className="detail-value">{universityData.approxFee}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Documents Required</span>
                <ul className="detail-list">
                  {universityData.documentsRequired.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-item">
                <span className="detail-label">Scholarship/Fellowship</span>
                <span className="detail-value">{universityData.scholarshipAvailability}</span>
              </div>
             
            </div>
          </div>

          {/* Right Sidebar Box */}
          <div className="side-box right-box">
            <h3>Key Highlights</h3>
            <ul>        
                <li>Saveetha University Ph.D. admission eligibility</li>
                <li>SIMATS Ph.D. entrance exam details</li>
                <li>Saveetha Ph.D. application form download</li>
                <li>SIMATS Ph.D. part-time program requirements</li>
                <li>Saveetha Ph.D. scholarship opportunities</li>
                <li>SIMATS Ph.D. fee structure</li>
                <li>Saveetha Ph.D. admission notification</li>
                <li>SIMATS Ph.D. required documents list</li>
                <li>Saveetha Ph.D. work experience criteria</li>
                <li>SIMATS Ph.D. full-time and part-time modes</li>

            </ul>
          </div>
        </div>       
      </div>
       <section className="alluniversityfaq-section">
        <h2>FAQs on Topic Selection</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>


      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the eligibility for PhD admission at Anna University?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Master’s Degree with at least 55% marks or 5.5 CGPA is required. Candidates with GATE/NET/SLET/M.Phil. may be exempted from the written test."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for PhD admission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Essential documents include PG and UG certificates, community certificate, experience certificate (if part-time), research proposal, and ID proof."
                }
              },
              {
                "@type": "Question",
                "name": "Does Anna University provide any fellowship for PhD?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, fellowships like University Research Fellowship, UGC JRF/SRF, DST-INSPIRE, and industry-sponsored schemes are available."
                }
              }
            ]
          }),
        }}
      />
    </section>

    </div>
  );
};

export default Subheading;
