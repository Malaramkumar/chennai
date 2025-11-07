import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is a PhD entrance exam mandatory at Kalasalingam University?",
    answer: "Yes, the PhD entrance exam is mandatory unless stated otherwise in specific cases."
  },
  {
    question: "What qualifications are required to apply for a PhD at KARE?",
    answer: "A Master's degree such as ME, M.Tech, M.Sc, MA, MBA, or MCA with at least 55% marks or a CGPA of 6.0/10 is required."
  },
  {
    question: "Is work experience required for PhD admission?",
    answer: "Work experience may be mandatory for candidates applying for a part-time PhD program."
  },
  {
    question: "What is the duration of the PhD program at Kalasalingam University?",
    answer: "Full-time PhD: Minimum 3 years and maximum 6 years.\nPart-time PhD: Minimum 4 years and maximum 8 years."
  },
  {
    question: "What documents are required for PhD admission?",
    answer: "Documents include academic certificates, entrance exam scorecard, research proposal, CV, ID proof, photographs, TC, caste certificate (if applicable), and experience certificate for part-time applicants."
  },
  {
    question: "When does the application process for the PhD program start?",
    answer: "For the June 2025 intake, applications start on March 3, 2025, and close on May 10, 2025."
  },
  {
    question: "What is the annual fee for the PhD program at KARE?",
    answer: "The approximate fee is ₹1,00,000 per year for both full-time and part-time PhD programs."
  },
  {
    question: "Are scholarships available for PhD students at Kalasalingam University?",
    answer: "Yes, scholarships and fellowships are available for eligible PhD students."
  }
];


const universityData = {
  fullName: 'Kalasalingam Academy of Research and Education, Krishnankoil',
  shortName: 'KARE',
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g. ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% of marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. candidates',
  modeOfPhd:
    'Full-Time Ph.D.: Minimum 3 years, maximum 6 years.\nPart-Time Ph.D.: Minimum 4 years, maximum 8 years.',
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
  applicationTimeline: `June 2025 Intake:
- Application Start Date: March 3, 2025
- Application End Date: May 10, 2025`,
  approxFee: '₹1,00,000 per year (Full-Time / Part-Time)',
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
            <h3>About Choose KARE</h3>
          <ul>
  <li><b>Year of Establishment:</b> Established in 1984, Kalasalingam University is known for its academic excellence and rural innovation focus.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD admissions started in 2009, marking a commitment to structured research development.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 200 scholars enroll and graduate yearly, contributing to focused research outcomes.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Krishnankoil Kalasalingam Academy of Research and Education is sought for its strong research culture and expert faculty.</li>
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
                <span className="detail-value" style={{ whiteSpace: 'pre-wrap' }}>
                  {universityData.modeOfPhd}
                </span>
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
            <h3>Highlights</h3>
            <ul>
              <li>State-of-the-art labs and research facilities</li>
              <li>Ranked in top institutions for innovation</li>
              <li>Regular workshops and seminars for scholars</li>
              <li>Support for journal publication and patents</li>
              <li>Dedicated guidance by expert faculty</li>
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
