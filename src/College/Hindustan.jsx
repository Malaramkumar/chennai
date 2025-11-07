import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is the entrance exam mandatory for a PhD at Hindustan University?",
    answer: "Yes, a PhD entrance exam is required unless you have qualified in UGC-NET, CSIR-NET, or GATE."
  },
  {
    question: "What qualifications are needed to apply for a PhD at HITS?",
    answer: "You need a Master’s Degree such as M.E., M.Tech., M.Sc., M.A., M.C.A., or MBA with at least 55% marks or equivalent CGPA from a recognized university."
  },
  {
    question: "Can working professionals apply for a part-time PhD at Hindustan University?",
    answer: "Yes, part-time PhD candidates must be employed and submit a No Objection Certificate from their employer."
  },
  {
    question: "What documents are required for the PhD application at HITS?",
    answer: "You need to submit a completed application form, UG and PG certificates, research proposal, passport-size photos, ID proof, and an NOC (for part-time candidates)."
  },
  {
    question: "What is the application timeline for the PhD program at HITS?",
    answer: "Applications are typically accepted in January and July sessions."
  },
  {
    question: "How much is the PhD fee at Hindustan University?",
    answer: "The tuition fee is approximately ₹40,000 per annum."
  },
  {
    question: "Are scholarships available for PhD students at Hindustan University?",
    answer: "Yes, scholarships include Research Fellowships for full-time scholars, Merit-Based Scholarships, Sports Scholarships, and Corporate Scholarships like the KEB Hana Bank Scholarship."
  }
];


const universityData = {
  fullName: 'Hindustan Institute of Technology and Science (HITS), Chennai',
  shortName: 'Hindustan University',
  phdEntranceExam: 'Required (Exemptions: Have qualified in UGC-NET, CSIR-NET, or GATE)',
  qualificationRequired: 'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or equivalent CGPA from a recognized university',
  workExperience: 'For part-time Ph.D., candidates should be employed',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed application form',
    'Attested copies of UG and PG degree certificates and mark sheets',
    'Research proposal',
    'Passport-size photographs',
    'Government-issued ID proof',
    'No Objection Certificate (NOC) from employer (for part-time candidates)'
  ],
  applicationTimeline: 'January Session (opens and closes in January) / July Session (opens and closes in June)',
  approxFee: '₹40,000 per annum (Tuition Fee)',
  scholarshipAvailability: 'Research Fellowship (Full-Time: stipends are provided based on merit) / Merit-Based Scholarships (Dr. KCG Verghese Merit Cum Means Scholarship and Dr. Elizabeth Verghese Founder Chancellor Scholarship) / Sports Scholarship / Corporate Scholarships (KEB Hana Bank Scholarship, providing up to $10,000)'
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Hindustan University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Established in 1985, Hindustan Institute of Technology & Science (HITS) is a reputed institution fostering innovation and learning.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began in the early 2000s to advance research contributions and academic excellence.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Nearly 700 PhD scholars enroll and graduate annually across diverse disciplines and research areas.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Hindustan Institute of Technology & Science is preferred for its cutting-edge labs, global collaborations, and a strong focus on research-driven education.</li>
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
              <li>HITS Chennai Ph.D. admission eligibility</li>
              <li>Hindustan University Ph.D. entrance exam details</li>
              <li>HITS Chennai Ph.D. application form download</li>
              <li>Hindustan Institute of Technology and Science Ph.D. part-time program requirements</li>
              <li>HITS Chennai Ph.D. scholarship opportunities</li>
              <li>Hindustan University Ph.D. fee structure</li>
              <li>HITS Chennai Ph.D. admission notification</li>
              <li>Hindustan University Ph.D. required documents list</li>
              <li>HITS Chennai Ph.D. work experience criteria</li>
              <li>Hindustan University Ph.D. full-time and part-time modes</li>
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
