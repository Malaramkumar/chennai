import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "What are the eligibility criteria for PhD admission at VISTAS?",
    answer: "Applicants must have a Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or equivalent CGPA from a recognized university."
  },
  {
    question: "Is an entrance exam mandatory for PhD admission at VISTAS?",
    answer: "Yes, the PhD entrance exam is mandatory. However, exemptions are given to candidates who have qualified UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE, or hold an M.Phil. degree."
  },
  {
    question: "Does VISTAS offer part-time PhD programs?",
    answer: "Yes, VISTAS offers both Full-Time and Part-Time PhD programs. For part-time PhD, candidates should be employed and must provide a No Objection Certificate from their employer."
  },
  {
    question: "What documents are required for PhD admission?",
    answer: "The required documents include:\n• Completed online application form\n• Attested copies of UG and PG certificates\n• Research proposal\n• Passport-size photos\n• Government-issued ID proof\n• No Objection Certificate (for part-time candidates)"
  },
  {
    question: "When can I apply for PhD admission at VISTAS?",
    answer: "PhD admissions are held in two sessions each year:\n• January Session (opens and closes in January)\n• July Session (opens and closes in June)"
  },
  {
    question: "What is the approximate fee structure for the PhD program?",
    answer: "The annual PhD program fee at VISTAS ranges from ₹35,000 to ₹75,000."
  },
  {
    question: "Are scholarships or fellowships available for PhD students at VISTAS?",
    answer: "Yes, VISTAS provides Merit-Based Scholarships, Need-Based Scholarships, and Government Scholarships to eligible PhD students."
  },
  {
    question: "Why should I choose VISTAS for pursuing a PhD?",
    answer: "VISTAS is known for its modern research facilities, experienced faculty, and interdisciplinary focus. It is a reputed institute for doctoral studies with strong academic infrastructure."
  }
];

const universityData = {
  fullName: 'PhD Admission in Chennai Vels Institute of Science, Technology & Advanced Studies',
  shortName: 'VISTAS',
  phdEntranceExam: 'Mandatory (Exemptions: Have qualified in UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE / Hold an M.Phil. degree) ',
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
  applicationTimeline: 'January Session (opens and closes in January) / July Session (opens and closes in June)',
  approxFee:
    'Ranges from ₹35,000 to ₹75,000 per year ',
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
            <h3>About VIT University</h3>
         <ul>
  <li><b>Year of Establishment:</b> Vels Institute of Science, Technology & Advanced Studies (VISTAS) was established in 1992.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs commenced in the early 2000s to foster research excellence.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 800 scholars enroll annually, reflecting growing academic engagement.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Vels Institute of Science, Technology & Advanced Studies is preferred for its modern labs, skilled faculty, and interdisciplinary focus—making it a premier destination for PhD studies.</li>
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
                <li>VISTAS Ph.D. admission eligibility</li>
                <li>Vels University Ph.D. entrance exam details</li>
                <li>VISTAS Ph.D. application form download</li>
                <li>Vels University Ph.D. part-time program requirements</li>
                <li>VISTAS Ph.D. scholarship opportunities</li>
                <li>Vels University Ph.D. fee structure</li>
                <li>VISTAS Ph.D. admission notification</li>
                <li>Vels University Ph.D. required documents list</li>
                <li>VISTAS Ph.D. work experience criteria</li>
                <li>Vels University Ph.D. full-time and part-time modes</li>
                                
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
