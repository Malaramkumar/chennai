import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is a PhD entrance exam mandatory at Madurai Kamaraj University?",
    answer: "Yes, MKU conducts a dedicated entrance exam (MKU CET) for PhD admissions, which is generally mandatory unless you're exempt under specific criteria."
  },
  {
    question: "What is the eligibility criteria for applying to a PhD at MKU?",
    answer: "Applicants must have a Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with at least 55% marks or a CGPA of 6.0/10."
  },
  {
    question: "Does MKU offer part-time PhD options?",
    answer: "Yes, MKU offers both full-time and part-time PhD programs. Professional work experience is generally required for part-time applicants."
  },
  {
    question: "What are the documents required for PhD admission at MKU?",
    answer: "Key documents include degree certificates, mark sheets, NOC (for part-time candidates), a research proposal, ID proof, and proof of fee payment, among others."
  },
  {
    question: "How often does MKU conduct PhD admissions?",
    answer: "MKU conducts two admission cycles per year: January–February and July–August, with specific timelines for applications, entrance tests, and interviews."
  },
  {
    question: "What is the approximate fee structure for PhD at MKU?",
    answer: "For Science and Professional disciplines, the fee is around ₹1,13,650. For Arts and Humanities disciplines, it's approximately ₹25,000 per year."
  },
  {
    question: "Are scholarships or fellowships available for PhD scholars?",
    answer: "Yes, MKU offers scholarships and fellowships to eligible PhD scholars, supporting research across disciplines."
  },
  {
    question: "Why choose MKU for PhD studies?",
    answer: "MKU is known for its strong research ecosystem, experienced faculty, multidisciplinary departments, and consistent academic excellence since its establishment in 1966."
  },
  {
    question: "Do I need to submit a research proposal when applying?",
    answer: "Yes, a brief synopsis or research proposal is required during the application process to outline your intended research direction."
  }
];

const universityData = {
  fullName: 'Madurai Kamaraj University',
  shortName: 'MKU',
  phdEntranceExam: 'YES',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience: 'Professional work experience is generally mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Application Form (duly filled and signed)',
    'Passport Size Photographs (Recent, usually 2-3 copies)',
    'Postgraduate Degree Certificate',
    'Postgraduate Mark Sheets (All semesters/years)',
    'Undergraduate Degree Certificate',
    'Undergraduate Mark Sheets',
    'Community Certificate (if applicable - SC/ST/OBC)',
    'No Objection Certificate (NOC) from employer (for part-time/working candidates)',
    'Research Proposal/Synopsis (brief outline of intended research)',
    'Transfer/Migration Certificate (if applicable)',
    'NET/SET/GATE Certificate (if exempted from entrance test)',
    'Proof of Payment of Application/Registration Fees',
    'ID Proof (Aadhar Card, Passport, Voter ID, etc.)',
    'Experience Certificate (for part-time candidates, if required)',
    'Any other certificates mentioned in the official notification',
  ],
  applicationTimeline: `Ph.D. Admission Timeline at MKU

1. First Session (Typically in January–February)
- Application Start Date: Usually in December
- Application Deadline: Typically by mid-January
- Entrance Test: Conducted in February
- Interviews and Final Selection: Shortly after the test

2. Second Session (Typically in July–August)
- Application Start Date: Usually in June
- Application Deadline: Typically by mid-July
- Entrance Test: Conducted in August
- Interviews and Final Selection: Shortly after the test`,
  approxFee: `1. Science and Professional Disciplines: ₹1,13,650  
2. Arts and Humanities Disciplines: ~₹25,000 per year`,
  scholarshipAvailability: 'Yes',
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Madurai Kamaraj University</h3>
           <ul>
  <li><b>Year of Establishment:</b> Madurai Kamaraj University (MKU) was established in 1966.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began in the 1970s to promote advanced research.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 1,800 scholars enroll annually, showcasing strong research momentum.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Madurai Kamaraj University is highly regarded for its renowned faculty, extensive research departments, and legacy of academic excellence—making it a top choice for scholars.</li>
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
                <span className="detail-value">
                  <pre style={{ whiteSpace: 'pre-wrap' }}>{universityData.applicationTimeline}</pre>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span className="detail-value">
                  <pre style={{ whiteSpace: 'pre-wrap' }}>{universityData.approxFee}</pre>
                </span>
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
              <li>Two admission cycles per year</li>
              <li>Dedicated entrance exam for PhD (MKU CET)</li>
              <li>Recognized for its academic and research contributions</li>
              <li>PhD options in Full-Time and Part-Time modes</li>
              <li>Financial aid and fellowships available</li>
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
