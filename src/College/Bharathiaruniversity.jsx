import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "What entrance exam is required for PhD admission at Bharathiar University?",
    answer: "Applicants must pass a Written Test and an Oral Interview. However, candidates who have qualified UGC-NET, CSIR-NET, GATE, SLET, or hold an M.Phil. degree are exempt from the Written Test."
  },
  {
    question: "What is the minimum qualification for applying to the PhD program?",
    answer: "A Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or a CGPA of 5.5 on a 10-point scale is required."
  },
  {
    question: "Can working professionals apply for a PhD?",
    answer: "Yes, for part-time PhD admission, applicants must be employed and submit a No Objection Certificate (NOC) from their employer."
  },
  {
    question: "What is the mode of PhD offered?",
    answer: "Bharathiar University offers both Full-Time and Part-Time PhD programs. Switching between modes is allowed after 18 months."
  },
  {
    question: "What documents are required for PhD application?",
    answer: "You need to submit degree certificates, mark sheets, community and experience certificates (if applicable), NOC (for employed candidates), entrance exam scorecard or exemption proof, research proposal, and photographs."
  },
  {
    question: "When can I apply for the PhD program?",
    answer: "There are two sessions: May and November/December. Applications open and close within those months respectively."
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer: "Full-Time: ₹4,950/year (tuition) + ₹1,000 (application fee); Part-Time: ₹2,475/year + ₹1,000 (application fee)."
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer: "Yes. Eligible candidates can apply for government and UGC scholarships such as the Post Matric, Indira Gandhi Single Girl Child, and Merit Scholarships."
  }
];


const universityData = {
  fullName: 'PhD Admission in Coimbatore Bharathiar University',
  shortName: 'BU Chidambaram',
  phdEntranceExam: 'Written Test and Oral Interview (Exemptions from Written Test:Have qualified in UGC-NET, CSIR-NET, GATE, SLET / Hold an M.Phil. degree)',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or a CGPA of 5.5 on a 10-point scale',
  workExperience:'For part-time Ph.D., candidates must be employed',
  modeOfPhd: 'Full-Time / Part-Time. Conversion from full-time to part-time (and vice versa) is permissible after completing 18 months in the current mode.',
  documentsRequired: [
    "Completed online application form",
    "Master’s and Bachelor’s degree certificates and mark sheets",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
    "NOC from employer (for employed candidates)",
    "Entrance exam scorecard or exemption proof (e.g., NET qualification)",
    "Research proposal outlining the intended area of study",
    "Recent passport-size photographs",
    "Any other documents specified in the application guidelines",
  ],
  applicationTimeline: 'May Session (Opens and closes in May) or November/December Session (Opens in Late November and closes in December)',
  approxFee:
    'Full-Time: ₹4,950 per annum (tuition fee) + ₹1000 (application fee), Part-Time: ₹2,475 per annum (tuition fee) + ₹1000 (application fee)',
  scholarshipAvailability: 'Government Scholarships (Post Matric Scholarship / Higher Education Special Loan Scholarship) / UGC Scholarships (Indira Gandhi Single Girl Child Scholarship / Post-Graduate Merit Scholarship for University Rank Holders / Post-Matric Scholarship for Minority Students)',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Bharathiar University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Bharathiar University was established in 1982 by the Tamil Nadu government.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began decades ago through its Centre for Research, promoting advanced studies.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 2,200 scholars enroll in main campuses, with 13,000+ in affiliated colleges, showing strong research growth.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Coimbatore Bharathiar University is valued for expert faculty, rich research options, and excellent facilities—making it a top PhD destination.</li>
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
        <li>Bharathiar University Ph.D. admission eligibility 2025</li>
        <li>Bharathiar University Ph.D. entrance exam and interview details</li>
        <li>Bharathiar University Ph.D. application form download</li>
        <li>Bharathiar University Ph.D. part-time program requirements</li>
        <li>Bharathiar University Ph.D. scholarship opportunities</li>
        <li>Bharathiar University Ph.D. fee structure 2025</li>
        <li>Bharathiar University Ph.D. admission notification 2025</li>
        <li>Bharathiar University Ph.D. required documents list</li>
        <li>Bharathiar University Ph.D. work experience criteria</li>
        <li>Bharathiar University Ph.D. full-time and part-time modes</li>
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
/* remove the bottom padding */
/* need to add the key point and tags with pop up */