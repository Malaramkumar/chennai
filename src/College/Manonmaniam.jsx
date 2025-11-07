import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at MSU Tirunelveli?",
    answer:
      "Yes, MSU requires candidates to take a University-conducted Ph.D. Entrance Examination. However, candidates who have qualified for JRF, NET, or SET and have been awarded a National Fellowship are exempt."
  },
  {
    question: "What is the minimum qualification for PhD admission at MSU?",
    answer:
      "Applicants must hold a Master’s degree (such as M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks."
  },
  {
    question: "Does MSU offer part-time PhD options?",
    answer:
      "Yes, part-time Ph.D. programs are available, but candidates must be employed and submit a No Objection Certificate (NOC) from their employer."
  },
  {
    question: "What is the mode of PhD programs at MSU?",
    answer: "Ph.D. programs are offered in both Full-Time and Part-Time modes."
  },
  {
    question: "What documents are required for PhD admission at MSU?",
    answer:
      "Required documents include: application form, UG/PG certificates, research proposal, photographs, ID proof, community certificate (if applicable), NOC (for part-time), and NET/SET/GATE proof if applicable."
  },
  {
    question: "When can I apply for PhD at MSU?",
    answer:
      "MSU has two sessions: January (applications open mid-February to mid-March) and July (dates vary). Refer to the official website for updates."
  },
  {
    question: "What is the fee structure for PhD at MSU?",
    answer:
      "The annual tuition fee is ₹10,000. Additionally, there's an application fee of ₹500 for the entrance exam."
  },
  {
    question: "Are scholarships available for PhD students at MSU?",
    answer:
      "Yes, MSU offers the University Research Fellowship (URF) for full-time scholars, as well as various government-funded scholarships like UGC-JRF and CSIR-JRF."
  },
  {
    question: "Why choose MSU Tirunelveli for a PhD?",
    answer:
      "MSU is known for its dedicated research environment, experienced faculty, and a history of strong academic contributions in southern Tamil Nadu."
  }
];


const universityData = {
  fullName: 'Manonmaniam Sundaranar University',
  shortName: 'MSU Tirunelveli',
  phdEntranceExam:
    'Mandatory University-conducted Ph.D. Entrance Examination (Exemptions: JRF, NET, or SET and have been awarded a National Fellowship)',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks',
  workExperience: 'For part-time Ph.D., candidates should be employed',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed application form',
    'Attested copies of UG and PG degree certificates and mark sheets',
    'Research proposal',
    'Passport-size photographs',
    'Government-issued ID proof',
    'Community Certificate (if applicable)',
    'Service Certificate and No Objection Certificate (NOC) from employer (for part-time candidates)',
    'Proof of qualifying NET/SET/GATE (if applicable)',
  ],
  applicationTimeline:
    'January Session (opens in Mid-February and closes in Mid-March) / July Session (Dates vary; candidates are advised to check the official website for updates)',
  approxFee:
    '₹10,000 per annum (Tuition Fee) + ₹500 (Application Fee for the entrance exam)',
  scholarshipAvailability:
    'University Research Fellowship (URF): Full-Time / Government Scholarships (UGC-JRF, CSIR-JRF, and others) / State Government Scholarships',
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About MSU Tirunelveli</h3>
         <ul>
  <li><b>Year of Establishment:</b> Established in 1990, Manonmaniam Sundaranar University serves as a vital academic center in southern Tamil Nadu.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD admissions commenced in the early 1990s to promote advanced research and innovation.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 500 scholars enroll and graduate annually, contributing to the region's research ecosystem.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Tirunelveli Manonmaniam Sundaranar University is favored for its research focus, experienced faculty, and supportive academic environment.</li>
</ul>

          </div>

          {/* Main University Content */}
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

          {/* Right Sidebar */}
          <div className="side-box right-box">
            <h3>Key Highlights</h3>
            <ul>
              <li>Manonmaniam Sundaranar University Ph.D. admission eligibility</li>
              <li>MSU Tirunelveli Ph.D. entrance exam details</li>
              <li>Manonmaniam Sundaranar University Ph.D. application form download</li>
              <li>MSU Ph.D. part-time program requirements</li>
              <li>Manonmaniam Sundaranar University Ph.D. scholarship opportunities</li>
              <li>MSU Ph.D. fee structure</li>
              <li>Manonmaniam Sundaranar University Ph.D. admission notification</li>
              <li>MSU Ph.D. required documents list</li>
              <li>Manonmaniam Sundaranar University Ph.D. work experience criteria</li>
              <li>MSU Ph.D. full-time and part-time modes</li>
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
