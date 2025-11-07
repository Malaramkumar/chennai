import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at SASTRA University?",
    answer: "Yes, SASTRA University requires candidates to take the PhD entrance exam (e.g., SRET). However, those with qualifications like UGC NET, CSIR NET, or GATE may be exempted."
  },
  {
    question: "What qualifications are required to apply for a PhD at SASTRA?",
    answer: "Applicants must hold a Master's degree (e.g., M.E., M.Tech., M.Sc., M.A., MBA, MCA) with at least 55% marks or a CGPA of 6.0 on a 10-point scale."
  },
  {
    question: "Does SASTRA offer part-time PhD programs?",
    answer: "Yes, both Full-Time and Part-Time PhD programs are available. For part-time candidates, relevant professional experience may be required."
  },
  {
    question: "What is the application timeline for PhD at SASTRA?",
    answer: "Admissions are typically offered twice a year. For January 2025, applications start from October 24, 2023. The July 2025 session is expected to open in March 2025."
  },
  {
    question: "What are the documents required for PhD admission?",
    answer: "Documents include degree certificates, marksheets, entrance exam scorecard or exemption proof, research proposal, ID proof, NOC (for employed candidates), experience certificate, and photographs."
  },
  {
    question: "Is there a scholarship or financial aid available?",
    answer: "Yes, SASTRA offers scholarships or fellowships to eligible candidates based on merit and program availability."
  },
  {
    question: "How many scholars are enrolled in PhD programs at SASTRA?",
    answer: "Currently, over 2,000 research scholars are pursuing their PhD, reflecting the university's strong research ecosystem."
  },
  {
    question: "Why should I choose SASTRA for PhD studies?",
    answer: "SASTRA is recognized for its academic excellence, cutting-edge research, experienced faculty, and state-of-the-art infrastructure, making it a premier choice for doctoral studies."
  }
];


const universityData = {
  fullName: 'SASTRA DEEMED UNIVERSITY',
  shortName: 'SASTRA',
  phdEntranceExam: 'YES',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'For part-time PhD, professional experience may be mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Duly filled Ph.D. Application Form (online or offline)',
    'Master’s Degree Certificate (in the relevant discipline)',
    'Mark Sheets of Master’s Degree (all semesters/years)',
    'Undergraduate Degree Certificate and Mark Sheets',
    'Transfer Certificate (TC) from the last attended institution',
    'Conduct/Character Certificate',
    'Research Proposal or Synopsis (detailing your intended research)',
    'No Objection Certificate (NOC) – for employed candidates (especially part-time applicants)',
    'Experience Certificate (if applicable, especially for part-time candidates)',
    'Entrance Exam Scorecard (e.g., SRET, UGC NET, CSIR NET, GATE) or exemption proof if applicable',
    'Community/Category Certificate (SC/ST/OBC, if applicable)',
    'Date of Birth Proof (Birth Certificate / 10th Mark Sheet)',
    'ID Proof (Aadhar card, Passport, or any government-issued ID)',
    'Passport-size Photographs (recent)',
  ],
  applicationTimeline: `**January 2025 Session:**  
- Application Start Date: October 24, 2023  
- Application End Date: Refer to the official website for exact closing date  
  
**July 2025 Session:**  
- Expected Start: March 2025  
- Expected End: May 2025`,
  approxFee: 'Annual tuition fee of approximately ₹3,05,000',
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
            <h3>About SASTRA University</h3>
            <ul>
  <li><b>Year of Establishment:</b> SASTRA University was established in 1984 as Shanmugha Engineering College.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs commenced in the early 2000s to foster research excellence.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Currently, over 2,000 scholars are enrolled, demonstrating significant research engagement.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Thanjavur SASTRA University is sought after for its world-class faculty, state-of-the-art facilities, and strong industry connections, making it a premier choice for doctoral studies.</li>
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
              <li>Biannual admissions for research flexibility</li>
              <li>Entrance exams like SRET, GATE, UGC/CSIR NET accepted</li>
              <li>Well-defined research proposal mandatory</li>
              <li>Structured and transparent admission process</li>
              <li>Comprehensive documentation and eligibility checks</li>
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
