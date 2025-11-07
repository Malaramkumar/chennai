import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at SREC?",
    answer:
      "Yes, a PhD entrance exam is mandatory. Exams like TANCET and GATE are commonly accepted under Anna University guidelines."
  },
  {
    question: "What are the qualifications required to apply for a PhD at SREC?",
    answer:
      "Candidates must have a Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA) with at least 55% marks or a CGPA of 6.0 on a 10-point scale."
  },
  {
    question: "Can I pursue a PhD part-time while working?",
    answer:
      "Yes, SREC offers part-time PhD options. However, professional experience and a No Objection Certificate (NOC) from your employer are typically required."
  },
  {
    question: "When should I apply for PhD admission at SREC?",
    answer:
      "For the July 2025 session, applications open on March 17, 2025, and close by April 5, 2025. The last date to submit hardcopies is April 12, 2025. For the January session, admissions are held from January 27 to 31, 2025."
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Key documents include PG and UG certificates, mark sheets, entrance exam scorecard, research proposal, experience certificate (if applicable), NOC, caste certificate, ID proof, and recent photos."
  },
  {
    question: "Does SREC offer any scholarships or fellowships for PhD scholars?",
    answer:
      "Yes, financial assistance is available based on eligibility and Anna University norms."
  },
  {
    question: "What is the fee structure for PhD at SREC?",
    answer:
      "The total first-year fee is approximately ₹47,500."
  },
  {
    question: "What makes SREC a good choice for PhD studies?",
    answer:
      "SREC is known for its strong research ecosystem, experienced faculty, modern labs, and active support for scholars through a dedicated PhD cell."
  }
];


const universityData = {
  fullName: 'PhD Admission in Sri Ramakrishna Engineering College, Coimbatore',
  shortName: 'SREC',
  phdEntranceExam: 'YES',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'For part-time PhD, professional experience may be mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed Application Form (as per Anna University format)',
    'Ph.D. Entrance Exam Scorecard (TANCET / GATE, if applicable)',
    'Postgraduate Degree Certificate (M.E./M.Tech. or equivalent)',
    'Postgraduate Mark Sheets / Consolidated Statement of Marks',
    'Undergraduate Degree Certificate',
    'Undergraduate Mark Sheets',
    'Transfer Certificate (TC)',
    'Conduct/Character Certificate',
    'Research Proposal / Statement of Purpose (SOP)',
    'Work Experience Certificate (for part-time applicants)',
    'No Objection Certificate (NOC) from employer (for part-time applicants)',
    'Community / Caste Certificate (if applicable)',
    'Proof of Date of Birth (Birth Certificate / 10th Mark Sheet)',
    'Passport-size Photographs (recent)',
    'Aadhaar Card or any valid Government ID proof',
  ],
  applicationTimeline: `**July 2025 Session:**  
- Start of Online Application & Fee Payment: March 17, 2025  
- Closure of Online Application & Fee Payment: April 5, 2025 (5:30 PM)  
- Last Date to Submit Hardcopy of Application: April 12, 2025 (5:30 PM)  
  
**January 2025 Session:**  
- Admission Dates: January 27 to 31, 2025`,
  approxFee: 'Total First-Year Fee: Approximately ₹47,500',
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
            
            <h3>About Sri Ramakrishna Engineering College (SREC), Coimbatore</h3>
<ul>
  <li><b>Year of Establishment:</b> Sri Ramakrishna Engineering College (SREC), Coimbatore was established in 1994 by the SNR Sons Charitable Trust.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>SREC began offering PhD programs in the early 2000s under the affiliation of Anna University.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Approximately 30–50 scholars complete their PhD each year, supported by experienced guides and active research projects.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>Sri Ramakrishna Engineering College is known for its research-focused environment, expert faculty, and advanced laboratories.</li>
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
              <li>Admissions via Anna University PhD framework</li>
              <li>Recognized entrance exams: TANCET, GATE</li>
              <li>Structured proposal submission process</li>
              <li>Dedicated Ph.D. research cell and faculty advisors</li>
              <li>Hostel, transport and infrastructure support for research scholars</li>
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
