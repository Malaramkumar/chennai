import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "What is the mode of PhD offered at SRM University?",
    answer: "SRM University offers both Full-Time and Part-Time PhD programs."
  },
  {
    question: "What entrance exams are accepted for PhD admission at SRM?",
    answer: "Candidates need to clear a Department-level Entrance Examination followed by an interview. However, those who have qualified in UGC-NET, CSIR-NET, GATE, or equivalent exams are exempt from the entrance test."
  },
  {
    question: "What is the educational qualification required for applying to a PhD at SRM?",
    answer: "You need a Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., M.C.A., MBA) with at least 55% marks or an equivalent grade. M.Phil. candidates with 55% in coursework are also eligible."
  },
  {
    question: "Is work experience necessary for part-time PhD at SRM?",
    answer: "Yes, candidates applying for part-time PhD must be employed and will need to provide a No Objection Certificate from their employer."
  },
  {
    question: "What is the application timeline for SRM PhD admissions?",
    answer: "Main intake occurs in June (application opens in March, closes by April/May). A second session is held in January (applications open in October)."
  },
  {
    question: "What documents are required for PhD application?",
    answer: "You’ll need academic transcripts, proof of qualifying exam or exemption, a research proposal, passport-size photos, ID proof, and an NOC (for part-time)."
  },
  {
    question: "How much is the fee for the PhD program at SRM?",
    answer: "₹1,05,000 per annum for Engineering & Technology; ₹70,000 per annum for Humanities, Science, and Medical disciplines."
  },
  {
    question: "Are there any scholarships or fellowships available?",
    answer: "Yes, Full-Time PhD scholars are eligible for a fellowship of ₹25,000/month. External scholarships like Aditya Birla and National Scholarship Examination are also available."
  },
  {
    question: "Why should I choose SRM for my PhD?",
    answer: "SRM University is renowned for its expert faculty, modern labs, interdisciplinary research, and robust support infrastructure, making it a top choice for PhD aspirants."
  }
];


const universityData = {
  fullName: 'PhD Admission in Chennai SRM Institute of Science and Technology',
  shortName: 'SRM University',
  phdEntranceExam: 'Department-level Entrance Examination followed by an interview (Exemptions from Entrance test: Have qualified in UGC-NET, CSIR-NET, GATE, or equivalent)',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or equivalent grade from any recognized institution / completed M.Phil. coursework with at least 55% marks ',
  workExperience:'For part-time Ph.D., candidates should be employed ',
  modeOfPhd: 'Full-Time / Part-Time ',
  documentsRequired: [
    "Completed online application form",
    "Academic transcripts (Bachelor's and Master's degrees)",
"Proof of qualifying examination (Entrance test score or exemption proof)",
"Research proposal",
"Passport-size photographs",
"Government-issued ID proof",
"NOC from employer (for part-time candidates)",
 
  ],
  applicationTimeline: 'June Session - Main Intake (Opens in March and closes in late April or early May), January Session - Occasional Intake (Opens in October and closes in late October or early November)',
  approxFee:
    '₹1,05,000 per annum (Engineering and Technology), ₹70,000 per annum (Humanities, Science, and Medical) ',
  scholarshipAvailability: 'Full-Time Ph.D. Scholars (Eligible for a fellowship of ₹25,000 per month) / External Scholarships (National Scholarship Examination, Aditya Birla Scholarships, etc.) ',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About SRM University</h3>
          <ul>
  <li><b>Year of Establishment:</b> SRM Institute of Science and Technology was established in 1985.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began in the early 2000s to enhance research and innovation.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 1,200 scholars enroll yearly, showing growing research engagement.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai SRM Institute of Science and Technology is preferred for its expert faculty, advanced labs, and diverse research fields, making it a top choice.</li>
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
                <li>SRMIST Ph.D. admission eligibility</li>
<li>SRM University Ph.D. entrance exam details</li>
<li>SRMIST Ph.D. application form download</li>
<li>SRMIST Ph.D. part-time program requirements</li>
<li>SRMIST Ph.D. scholarship opportunities</li>
<li>SRMIST Ph.D. fee structure</li>
<li>SRMIST Ph.D. admission notification</li>
<li>SRMIST Ph.D. required documents list</li>
<li>SRMIST Ph.D. work experience criteria</li>
<li>SRMIST Ph.D. full-time and part-time modes</li>
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
