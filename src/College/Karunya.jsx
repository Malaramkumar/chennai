import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at Karunya Institute?",
    answer: "Yes, appearing for the PhD entrance exam is mandatory unless exempted under specific university norms."
  },
  {
    question: "What is the eligibility for applying to a PhD at Karunya?",
    answer: "A Master's Degree (ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with at least 55% marks or CGPA of 6.0/10 is required."
  },
  {
    question: "Does Karunya offer both full-time and part-time PhD programs?",
    answer: "Yes, Karunya offers both full-time and part-time PhD options. Full-time takes a minimum of 3 years and part-time a minimum of 4 years."
  },
  {
    question: "Is work experience required for part-time PhD?",
    answer: "Yes, professional experience may be mandatory for part-time PhD applicants."
  },
  {
    question: "What documents are required for PhD application?",
    answer: "Documents include academic certificates, entrance scorecard, research proposal, CV, ID proof, photographs, and experience certificate for part-time candidates."
  },
  {
    question: "When does the PhD application process start?",
    answer: "For the July intake, applications start on April 1, 2025. Other dates will be announced on the official admissions portal."
  },
  {
    question: "What is the approximate tuition fee?",
    answer: "The application fee is ₹1,000 (non-refundable), and the tuition fee is approximately ₹1,50,000 per year."
  },
  {
    question: "Is scholarship or fellowship available?",
    answer: "Yes, Karunya offers scholarships or fellowships to eligible PhD scholars."
  },
  {
    question: "Does Karunya support interdisciplinary research?",
    answer: "Yes, the university actively encourages multidisciplinary and socially impactful research."
  }
];


const universityData = {
  fullName: 'PhD Admission in Karunya Institute of Technology and Sciences (Deemed University)',
  shortName: 'Karunya',
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g., ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time: Minimum 3 years, Maximum 6 years / Part-Time: Minimum 4 years, Maximum 8 years',
  documentsRequired: [
    'Completed application form (online)',
    'Master’s degree certificate and mark sheets',
    'Bachelor’s degree certificate and mark sheets',
    'Entrance exam scorecard (if applicable)',
    'Research proposal or statement of purpose',
    'Curriculum Vitae (CV)',
    'Passport-sized photographs',
    'Transfer Certificate (TC)',
    'Identity proof (Aadhar Card, Passport, etc.)',
    'Caste/Community certificate (if applicable)',
    'Experience certificate (for part-time candidates)',
  ],
  applicationTimeline: `Odd Semester (July Intake):
- Application Start Date: April 1, 2025
- Application End Date: To be announced on official admissions portal
- Entrance Exam & Interview: Dates to be notified
- Enrollment & Orientation: Dates to be notified

Even Semester (January Intake):
- Application Start Date: To be announced
- Application End Date: To be announced
- Entrance Exam & Interview: To be announced
- Enrollment & Orientation: To be announced`,
  approxFee:
    'Application Fee: ₹1,000 (Non-refundable)\nTuition Fee: Approximately ₹1,50,000 per year (subject to change)',
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
            <h3>About Karunya Institute of Technology and Sciences (Deemed University)</h3>
<ul>
  <li><b>Year of Establishment:</b> Established in 1986, Karunya is a Christian minority institution focused on academic excellence and societal transformation.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs at Karunya were initiated in the early 2000s, with the establishment of the Centre for Research after it became a Deemed University in 2004.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Approximately 70–100 PhD scholars are admitted each year across various disciplines.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>Karunya offers a research-driven environment with expert faculty, advanced labs, and interdisciplinary centres.</li>
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
                <span className="detail-value" style={{ whiteSpace: 'pre-wrap' }}>
                  {universityData.applicationTimeline}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span className="detail-value" style={{ whiteSpace: 'pre-wrap' }}>
                  {universityData.approxFee}
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
              <li>Located in the scenic outskirts of Coimbatore</li>
              <li>Focus on ethical values and societal impact</li>
              <li>Vibrant research ecosystem with international exposure</li>
              <li>Tech-enabled campus and strong mentorship</li>
              <li>Encourages multidisciplinary research and innovation</li>
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
