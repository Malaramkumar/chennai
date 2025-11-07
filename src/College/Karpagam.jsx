import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is the entrance exam mandatory for PhD admission at Karpagam Academy?",
    answer: "Yes, appearing for the PhD entrance exam is mandatory unless you are exempted based on UGC norms."
  },
  {
    question: "What is the minimum qualification required to apply for PhD?",
    answer: "You must hold a Master’s degree with at least 55% marks or 6.0 CGPA on a 10-point scale."
  },
  {
    question: "Can working professionals apply for part-time PhD at Karpagam?",
    answer: "Yes, part-time PhD is available, and work experience is usually mandatory for part-time candidates."
  },
  {
    question: "What documents are required during the application?",
    answer: "Documents include PG & UG certificates, entrance exam scorecard, research proposal, ID proof, TC, and caste certificate if applicable."
  },
  {
    question: "When does the PhD admission process begin?",
    answer: "Admissions generally begin in December (for January session) and in June (for July session)."
  },
  {
    question: "Is financial assistance or fellowship available?",
    answer: "Yes, eligible candidates can avail fellowships or apply for financial assistance as per university norms."
  },
  {
    question: "Does Karpagam support interdisciplinary research?",
    answer: "Yes, the university encourages interdisciplinary research and has collaborative projects with industries and institutions."
  }
];


const universityData = {
  fullName: 'PhD Admission in Karpagam Academy of Higher Education',
  shortName: 'Karpagam, Coimbatore',
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g., ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time: Minimum 3 years / Part-Time: 4–6 years',
  documentsRequired: [
    'Completed application form (online or offline)',
    'Master’s degree certificate and mark sheets',
    'Bachelor’s degree certificate and mark sheets',
    'Entrance exam scorecard (if applicable)',
    'Research proposal or statement of purpose',
    'Curriculum Vitae (CV)',
    'Passport-sized photographs',
    'Transfer Certificate (TC)',
    'Identity proof (Aadhaar Card, Passport, etc.)',
    'Caste/Community certificate (if applicable)',
    'Experience certificate (for part-time candidates)',
  ],
  applicationTimeline: `January Session:
- Application Start: December
- Application End: January
- Entrance Test: January
- Interview: February

July Session:
- Application Start: June
- Application End: July
- Entrance Test: July
- Interview: August`,
  approxFee: 'Tuition Fee: Approximately ₹1,00,000 per year',
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
           <h3>About Karpagam Academy of Higher Education</h3>
<ul>
  <li><b>Year of Establishment:</b> Established in 2008, Karpagam Academy is a growing center for higher learning and innovation.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began soon after its founding, encouraging research across diverse fields.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Each year, several scholars pursue and complete doctoral studies across key departments.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Coimbatore Karpagam Academy of Higher Education is valued for its supportive faculty, evolving research ecosystem, and quality academic resources.</li>
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
              <li>Located in the academic hub of Tamil Nadu – Coimbatore</li>
              <li>Emphasis on interdisciplinary research</li>
              <li>Strong academic and industrial collaboration</li>
              <li>Modern campus with excellent infrastructure</li>
              <li>Focus on holistic development of research scholars</li>
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
