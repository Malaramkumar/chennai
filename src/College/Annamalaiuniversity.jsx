import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at Annamalai University?",
    answer:
      "Yes, it is mandatory unless you are exempted by qualifying in exams like UGC-JRF, NET, SLET, SET, GATE, CSIR, ICHR, ICPR, ICSSR, or if you hold an M.Phil. degree.",
  },
  {
    question: "What is the minimum qualification required to apply for a PhD?",
    answer:
      "A Master's Degree (M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or a CGPA of 5.5 on a 10-point scale is required.",
  },
  {
    question: "Is work experience required for a PhD at Annamalai University?",
    answer:
      "Yes, work experience is needed if you are applying for a part-time PhD program.",
  },
  {
    question: "What are the available modes of PhD at Annamalai University?",
    answer:
      "PhD is offered in Full-Time and Part-Time (Internal and External) modes.",
  },
  {
    question: "What is the application timeline for PhD admission?",
    answer:
      "PhD admissions are held twice a year: in December/January and June/July. Applications usually open a month in advance.",
  },
  {
    question: "What is the approximate fee structure for PhD?",
    answer:
      "The tuition fee ranges from ₹30,000 to ₹50,000 per annum, plus an application fee of ₹1000. Fees may vary by department.",
  },
  {
    question: "What scholarships or fellowships are available?",
    answer:
      "Scholarships include Post-Matric Scholarship, Research Incentive, DST-PURSE Fellowship, and other state or merit-based scholarships.",
  },
  {
    question: "What documents are required for the application?",
    answer:
      "You need degree certificates, mark sheets, community and experience certificates (if applicable), NOC (if employed), entrance score proof, research proposal, and photos.",
  },
  {
    question: "Can I apply for a PhD without clearing the entrance exam?",
    answer:
      "Yes, if you have cleared national-level exams like UGC-JRF, NET, or hold an M.Phil., you may be exempted from the entrance test.",
  },
];


const universityData = {
  fullName: 'PhD Admission in Chidambaram Annamalai University',
  shortName: 'AU Chidambaram',
  phdEntranceExam: 'Mandatory (Exemptions: Have qualified in UGC-JRF, NET, SLET, SET, GATE, CSIR, ICHR, ICPR, ICSSR / Hold an M.Phil. degree)',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or a CGPA of 5.5 out of 10.00 is required',
  workExperience:'Needed for part-time Ph.D. candidates',
  modeOfPhd: 'Full-Time / Part-Time (Internal / External)',
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
  applicationTimeline: 'December/January Session (Opens in November and closes in December) or June/July Session (Opens in May and closes in June)',
  approxFee:
    '₹30,000–₹50,000 per annum (tuition fee) + ₹1000 (application fee) and this varies by department',
  scholarshipAvailability: 'Post-Matric Scholarship / Research Incentive / DST-PURSE Fellowship / Government of Tamil Nadu Scholarships / Ishan Uday for North Eastern Region students and Minority Scholarships based on merit and means.',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Annamalai University</h3>
          <ul>
  <li><b>Year of Establishment:</b> Founded in 1929 by Rajah Sir S. R. M. Annamalai Chettiar, Annamalai University has a rich academic legacy.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began decades ago through its Centre for Research, enabling academic excellence.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 2,200 scholars in main campuses and 13,000+ in affiliated colleges reflect strong research output.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chidambaram Annamalai University is valued for expert faculty, vast research scope, and strong academic legacy—making it a top doctoral destination.</li>
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
             <li>Annamalai University Ph.D. admission eligibility</li>
<li>Annamalai University Ph.D. entrance exam and interview details</li>
<li>Annamalai University Ph.D. application form download</li>
<li>Annamalai University Ph.D. part-time program requirements</li>
<li>Annamalai University Ph.D. scholarship opportunities</li>
<li>Annamalai University Ph.D. fee structure 2025</li>
<li>Annamalai University Ph.D. admission notification 2025</li>
<li>Annamalai University Ph.D. required documents list</li>
<li>Annamalai University Ph.D. work experience criteria</li>
<li>Annamalai University Ph.D. full-time and part-time modes</li> 
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