import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at Dr. MGR University?",
    answer:
      "Yes, candidates must appear for the SIMATS Entrance Test. However, those who have qualified in UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE, or hold an M.Phil. degree are exempt."
  },
  {
    question: "What is the minimum qualification required for PhD at Dr. MGR ERI?",
    answer:
      "A Master’s degree (such as M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or an equivalent CGPA from a recognized university is required."
  },
  {
    question: "Can I pursue a PhD part-time at Dr. MGR University?",
    answer:
      "Yes, part-time Ph.D. programs are available. Candidates must be employed and provide a No Objection Certificate (NOC) from their employer."
  },
  {
    question: "What is the mode of PhD programs offered at Dr. MGR University?",
    answer: "Dr. MGR University offers Ph.D. programs in both Full-Time and Part-Time modes."
  },
  {
    question: "What documents are required for PhD admission at Dr. MGR ERI?",
    answer:
      "You will need a completed online application, UG and PG certificates, a research proposal, passport-size photos, a government-issued ID, and an NOC if applying part-time."
  },
  {
    question: "When does the PhD application process begin at Dr. MGR University?",
    answer:
      "The application process typically begins in January and closes in April each year."
  },
  {
    question: "What is the fee structure for PhD programs at Dr. MGR ERI?",
    answer:
      "The tuition fee is approximately ₹75,000 per annum, and the registration fee is ₹10,000."
  },
  {
    question: "Are scholarships available for PhD students at Dr. MGR University?",
    answer:
      "Yes, the university offers merit-based, need-based, and government scholarships to eligible candidates."
  },
  {
    question: "Why should I consider Dr. MGR University for my PhD?",
    answer:
      "With strong interdisciplinary research, modern infrastructure, and an industry-aligned curriculum, Dr. MGR University is a preferred choice for Ph.D. aspirants."
  }
];


const universityData = {
  fullName: 'PhD Admission in Chennai Dr. M.G.R. Educational and Research Institute ',
  shortName: 'Dr. MGR University',
  phdEntranceExam: 'SIMATS Entrance Test (Exemptions: Have qualified in UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE / Hold an M.Phil. degree)',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or equivalent CGPA from a recognized university ',
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
  applicationTimeline: 'Opens in January and closes in April',
  approxFee:
    '₹75,000 per annum (Tuition Fee) + ₹10,000 (Registration Fee) ',
  scholarshipAvailability: 'Merit-Based Scholarships / Need-Based Scholarships / Government Scholarships ',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About MGR University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Dr. M.G.R. Educational and Research Institute was established in 1988.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began in the early 2000s to enhance research development.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 1,000 scholars enroll annually, highlighting strong academic output.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Dr. M.G.R. Educational and Research Institute is valued for its modern infrastructure, interdisciplinary research, and industry-aligned curriculum—making it a top doctoral destination.</li>
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
                <li>Dr. MGR University Ph.D. admission eligibility</li>
<li>Dr. MGR ERI Ph.D. entrance exam details</li>
<li>Dr. MGR Ph.D. application form download</li>
<li>Dr. MGR ERI Ph.D. part-time program requirements</li>
<li>Dr. MGR Ph.D. scholarship opportunities</li>
<li>Dr. MGR ERI Ph.D. fee structure</li>
<li>Dr. MGR Ph.D. admission notification</li>
<li>Dr. MGR ERI Ph.D. required documents list</li>
<li>Dr. MGR Ph.D. work experience criteria</li>
<li>Dr. MGR ERI Ph.D. full-time and part-time modes</li>

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
