import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PSG College of Technology?",
    answer: "Yes, the PhD entrance exam is mandatory. However, candidates who have qualified in national-level exams like GATE, UGC-NET, JRF, or SET may be exempted."
  },
  {
    question: "What qualifications are required to apply for a PhD at PSG?",
    answer: "Applicants should have a Master’s degree (M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with at least 55% marks or a CGPA of 6.0 on a 10-point scale."
  },
  {
    question: "Can I apply for a part-time PhD program at PSG while working?",
    answer: "Yes, PSG College of Technology offers part-time PhD programs. Work experience and a No Objection Certificate from your employer may be required."
  },
  {
    question: "When does the PhD admission process typically begin?",
    answer: "The admission process usually begins in July, with applications closing in August. Entrance exams are generally conducted in September, followed by interviews in October."
  },
  {
    question: "What documents are needed for PhD admission at PSG?",
    answer: "Required documents include degree certificates, marksheets, ID proof, research proposal, entrance exam proof (if exempted), photographs, and fee payment proof, among others."
  },
  {
    question: "Is financial assistance or a fellowship available?",
    answer: "Yes, PSG College of Technology offers scholarships or fellowships based on eligibility and availability."
  },
  {
    question: "What are the research areas offered for PhD at PSG?",
    answer: "Research is available in engineering, technology, management, applied sciences, and interdisciplinary areas. Specific availability depends on departments and guides."
  },
  {
    question: "What is the annual PhD enrollment at PSG?",
    answer: "Around 80–100 PhD candidates are admitted annually across various disciplines."
  }
];


const universityData = {
  fullName: 'PhD Admission in PSG College of Technology, Coimbatore',
  shortName: 'PSG',
  phdEntranceExam:
    'Mandatory. Applicants who qualify national-level exams (e.g., GATE, UGC-NET, JRF, SET) may be exempt. Selection may involve a written test and interview.',
  qualificationRequired:
    'Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with 55% of marks or CGPA 6.0/10',
  workExperience:
    'For part-time Ph.D., professional experience may be mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed Application Form (Online or Offline as applicable)',
    'Proof of Age (Birth Certificate / Class 10/12 Mark Sheet / Passport)',
    'Master’s Degree Certificate and all semester/year mark sheets',
    'Bachelor’s Degree Certificate and Mark Sheets',
    '10th and 12th Standard Mark Sheets',
    'Experience Certificate (for Part-Time applicants)',
    'No Objection Certificate (NOC) from Employer (for Part-Time)',
    'Employer’s consent letter (if employed)',
    'Research Proposal or Synopsis (500–1000 words)',
    'Community/Category Certificate (if applicable)',
    'Proof of Entrance Exam Qualification (GATE/NET/JRF etc., if exempted)',
    'Identity Proof (Aadhaar, Passport, Voter ID, or Driving License)',
    '3–5 recent Passport Size Photographs',
    'Proof of application fee payment (Demand Draft or Online Receipt)',
    'Any other relevant certificates (publications, awards, etc.)',
  ],
  applicationTimeline: `Application Start: Likely in July 2025\n
Application End: Expected by August 2025\n
Entrance Exam: Typically September 2025\n
Interview & Selection: Usually in October 2025\n
Program Commencement: Generally November 2025`,
  approxFee:
    'Tuition Fee: ₹14,000 per year\nTotal Duration: 3 years\nTotal Tuition Fee: ₹42,000 (for standard full-time program)',
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
            <h3>About PSG College of Technology</h3>
<ul>
  <li><b>Year of Establishment:</b> PSG College of Technology was established in 1951 by the PSG & Sons’ Charities Trust in Coimbatore, Tamil Nadu.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs at PSG College of Technology began in collaboration with Anna University in the early 2000s.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>PSG College of Technology enrolls around 80–100 PhD scholars each year across various disciplines.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PSG College of Technology is renowned for its cutting-edge research facilities, industry collaborations, and high-caliber faculty.</li>
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
              <li>GATE/NET/JRF qualified applicants may get direct interview</li>
              <li>Recognized for excellence in engineering and management research</li>
              <li>Collaborative projects with national research bodies</li>
              <li>Supportive environment for funded research and publications</li>
              <li>Affordable fee structure for high-quality research</li>
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
