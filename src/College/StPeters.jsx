import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "What are the eligibility criteria for PhD admission at St. Peter's Institute?",
    answer: "Candidates must have a Master’s degree (e.g., M.Tech, M.Sc, M.A, MBA, etc.) with at least 55% marks or a CGPA of 6.0/10."
  },
  {
    question: "Is work experience required for applying to the PhD program?",
    answer: "Professional experience is usually required for part-time PhD applicants, and an experience certificate is mandatory."
  },
  {
    question: "What is the mode and duration of the PhD program?",
    answer: "St. Peter’s Institute offers both Full-Time (minimum 3 years) and Part-Time (minimum 4 years) PhD programs."
  },
  {
    question: "When can I apply for the PhD program?",
    answer: "There are two admission sessions each year:\n• January Session: Applications open in January and close by April\n• July Session: Applications open in July and close by October"
  },
  {
    question: "Is there an entrance exam for PhD admission?",
    answer: "Yes, an entrance exam is mandatory for all applicants unless exempted under specific conditions."
  },
  {
    question: "What documents are required for PhD admission?",
    answer: "You need academic certificates, ID proof, photographs, research proposal, experience certificate (for part-time), NOC (for working candidates), qualifying exam scorecard (if any), caste certificate (if applicable), and fee payment proof."
  },
  {
    question: "What is the approximate fee structure for PhD at St. Peter’s Institute?",
    answer: "The annual fee ranges from ₹54,000 to ₹60,000. The per-semester fee is approximately ₹27,000 to ₹30,000."
  },
  {
    question: "Are scholarships or fellowships available?",
    answer: "Yes, the institute offers scholarships or financial aid depending on eligibility and availability."
  },
  {
    question: "Why should I choose St. Peter's Institute for my PhD?",
    answer: "The university offers strong research support, experienced faculty, dedicated research centers, and is ideal for working professionals seeking part-time PhDs."
  }
];


const universityData = {
  fullName: "PhD Admission in Chennai St. Peter’s Institute of Higher Education and Research",
  shortName: "St. Peter's University",
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g., M.Tech, M.Sc, M.A, MBA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time: 3 years / Part-Time: 4 years',
  documentsRequired: [
    'Completed Application Form (downloaded or online submission)',
    'Proof of Identity: Aadhaar Card / Passport / Voter ID / Driving License',
    'Passport-sized Photographs (usually 3–4 copies)',
    'UG Degree Certificate and Mark Sheets',
    'PG Degree Certificate and Mark Sheets',
    'Transfer Certificate (TC) or Migration Certificate (if applicable)',
    'Character Certificate from the last studied institution',
    'Research Proposal / Statement of Purpose (SOP)',
    'Experience Certificate (mandatory for part-time Ph.D. candidates)',
    'No Objection Certificate (NOC) from employer (for employed part-time candidates)',
    'Qualifying Exam Score Card: UGC-NET / CSIR-NET / GATE (if applicable)',
    'Caste/Community Certificate (if applicable)',
    'Demand Draft / Payment Proof of the application fee',
  ],
  applicationTimeline: `January Session: Applications open in January and close by April\nJuly Session: Applications open in July and close by October`,
  approxFee:
    'Approx. Annual Fee: ₹54,000 – ₹60,000\nApprox. Fee Per Semester: ₹27,000 – ₹30,000',
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
           <h3>About St. Peter’s Institute of Higher Education and Research</h3>
<ul>
  <li><b>Year of Establishment:</b> Established in 2008, St. Peter’s Institute is recognized for its commitment to advanced education and innovation.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs were introduced soon after establishment to promote academic and industrial research.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Approximately 80–120 PhD scholars enroll each year across Engineering, Science, Management, and Humanities.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai St. Peter’s Institute is preferred for its dedicated research centers, expert faculty, and industry-linked projects.</li>
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
              <li>Admits students twice a year – January and July sessions</li>
              <li>Strong focus on applied and interdisciplinary research</li>
              <li>Well-structured application process and support system</li>
              <li>Ideal for working professionals pursuing part-time research</li>
              <li>Urban campus with good research infrastructure</li>
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
