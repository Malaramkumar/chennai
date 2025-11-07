import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at Periyar University?",
    answer:
      "Yes, a mandatory Common Entrance Test (CET) conducted by Periyar University is required for admission into PhD programs."
  },
  {
    question: "What qualifications are required for PhD at Periyar University?",
    answer:
      "A Master’s Degree (such as M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with at least 55% marks or CGPA 6.0/10 is required."
  },
  {
    question: "Is work experience mandatory for applying to PhD at Periyar University?",
    answer:
      "Work experience is required for Part-Time and Executive PhD programs. It is not mandatory for Full-Time PhD."
  },
  {
    question: "What are the available modes of pursuing a PhD at Periyar University?",
    answer:
      "PhD can be pursued in Full-Time, Part-Time, Executive, and Distance modes."
  },
  {
    question: "What documents are required for PhD admission at Periyar University?",
    answer:
      "Required documents include a completed online application form, joining report, research proposal, research fellowship documents (if applicable), eligibility/recognition/migration certificates, permission order, and online fee receipt."
  },
  {
    question: "What is the application timeline for PhD at Periyar University?",
    answer:
      "The deadline for online submission is June 27, 2025. Hard copies must be submitted by June 30, 2025. The CET will be held on January 25, 2025, and hall tickets are available from January 21, 2025."
  },
  {
    question: "What is the approximate fee structure for the PhD program at Periyar University?",
    answer:
      "The fee is approximately ₹50,500 for General, ₹35,600 for SC/ST, and ₹34,200 for PH candidates (for 3 years)."
  },
  {
    question: "Are scholarships or fellowships available at Periyar University?",
    answer:
      "Yes, fellowships and scholarships are available for eligible PhD candidates."
  },
  {
    question: "Why should I consider Periyar University for my PhD?",
    answer:
      "Periyar University is known for its strong research culture, interdisciplinary opportunities, affordable fees, and support for scholars through scholarships and fellowships. It’s located in a vibrant academic environment in Salem, Tamil Nadu."
  }
];


const universityData = {
  fullName: 'PhD Admission in Salem Periyar University',
  shortName: 'Periyar University',
  phdEntranceExam: 'YES (Mandatory Common Entrance Test conducted by the University)',
  qualificationRequired: 'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience: 'Required for Part-Time and Executive PhD programs',
  modeOfPhd: 'Full-Time / Part-Time / Executive PhD / Distance',
  documentsRequired: [
    "Completed online application form",
    "Joining Report",
    "Research Proposal (within 500 words)",
    "Research Fellowship Documents (if applicable)",
    "Eligibility Certificate (if PG degree is from outside Periyar University)",
    "Recognition Certificate (if applicable)",
    "Migration Certificate (for candidates from other states)",
    "Permission Order from the University",
    "Online Fee Payment Receipt"
  ],
  applicationTimeline: 'Online Deadline: June 27, 2025 | Hard Copy Submission: June 30, 2025 | CET: January 25, 2025 | Hall Ticket: January 21, 2025',
  approxFee: 'General: ₹50,500 | SC/ST: ₹35,600 | PH: ₹34,200 (for 3 years)',
  scholarshipAvailability: 'Yes (Fellowships and Scholarships available)',
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Periyar University</h3>
           <ul>
  <li><b>Year of Establishment:</b> Periyar University was established in 1997.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began soon after to strengthen research initiatives.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 1,200 scholars enroll annually, showing steady research growth.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Salem Periyar University is preferred for its dedicated research centers, supportive faculty, and comprehensive academic programs, making it a premier choice for doctoral studies.</li>
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
              <li>PhD offered in Full-Time, Part-Time, Executive, and Distance modes</li>
              <li>University-conducted CET is mandatory for admission</li>
              <li>Affordable fee structure with scholarships for SC/ST and PH</li>
              <li>Supports interdisciplinary and applied research</li>
              <li>Located in Salem, Tamil Nadu with a vibrant academic environment</li>
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
