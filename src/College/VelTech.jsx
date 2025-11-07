import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "What are the eligibility criteria for PhD admission at Vel Tech?",
    answer: "Candidates must possess a Master’s Degree (e.g., ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with a minimum of 55% marks or CGPA 6.0 out of 10 from a recognized institution."
  },
  {
    question: "Is the entrance exam mandatory for PhD admission at Vel Tech?",
    answer: "Yes, appearing for the PhD entrance exam is mandatory. However, candidates with NET/GATE/SET qualifications may be exempted."
  },
  {
    question: "Does Vel Tech offer both full-time and part-time PhD programs?",
    answer: "Yes, Vel Tech provides both Full-Time and Part-Time options for PhD programs."
  },
  {
    question: "Is work experience required for applying to a PhD at Vel Tech?",
    answer: "Work experience may be mandatory for part-time PhD applicants, and they must also submit a No Objection Certificate from their employer."
  },
  {
    question: "What is the application timeline for PhD admission at Vel Tech?",
    answer: `• Start Date: March 26, 2025\n• End Date: May 10, 2025\n• Online Entrance Exam: May 24, 2025\n• Interview: June 14, 2025\n• Admission: July 1, 2025`
  },
  {
    question: "What documents are required during the application?",
    answer: "Documents include application form, photo, ID proof, PG & UG certificates, research proposal, entrance scorecard (if any), work experience proof (if part-time), NOC, migration certificate, and publication list."
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer: "The entire PhD program fee ranges from ₹1.08 lakhs to ₹1.44 lakhs."
  },
  {
    question: "Are scholarships or fellowships available?",
    answer: "Yes, scholarships and fellowships are available for eligible candidates."
  },
  {
    question: "Why should I choose Vel Tech for PhD studies?",
    answer: "Vel Tech is known for its cutting-edge research facilities, strong industry collaborations, experienced faculty, and a structured PhD program across disciplines."
  }
];


const universityData = {
  fullName: 'Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology',
  shortName: 'Vels',
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g. ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time / Part-Time options available',
  documentsRequired: [
    'Completed Ph.D. Application Form (online submission)',
    'Passport-size Photograph',
    'Proof of Date of Birth (Birth Certificate / SSLC Certificate)',
    'ID Proof (Aadhaar card / Passport / Voter ID)',
    'PG Degree Certificate & Consolidated Marksheets',
    'Transfer Certificate (TC)',
    'UG Degree Certificate & Marksheets',
    'Community Certificate (if applicable)',
    'Research Proposal / Statement of Purpose (SOP)',
    'Entrance Exam Scorecard (if applicable – NET/GATE/SET etc.)',
    'Work Experience Certificate (mandatory for part-time applicants)',
    'No Objection Certificate (NOC) – for employed part-time applicants',
    'Migration Certificate (for non-Tamil Nadu candidates)',
    'Publication List (if any, with proofs)',
  ],
  applicationTimeline: `- Application Start Date: March 26, 2025
- Application End Date: May 10, 2025
- Entrance Examination (Online): May 24, 2025
- Interview (Online): June 14, 2025
- Certificate Verification & Admission: July 1, 2025`,
  approxFee:
    'Entire Ph.D. program ranges approximately from ₹1.08 lakhs to ₹1.44 lakhs',
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
            <h3>About Choose Vel Tech</h3>
          <ul>
  <li><b>Year of Establishment:</b> Established in 1997, Vel Tech University is a renowned institution known for its focus on science, engineering, and technology.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD admissions began in the early 2000s to promote research excellence across disciplines.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Approximately 350 candidates enroll and complete their PhD each year, showcasing consistent research output.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology is preferred for its cutting-edge research facilities and strong industry collaborations.</li>
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
            <h3>Highlights</h3>
            <ul>
              <li>Strong interdisciplinary research culture</li>
              <li>Global partnerships and industrial tie-ups</li>
              <li>Experienced guides and supportive environment</li>
              <li>Focus on innovation and entrepreneurship</li>
              <li>Well-structured online application process</li>
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
