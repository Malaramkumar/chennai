import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Alagappa University?",
    answer:
      "Candidates must hold a Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks. Reserved categories may have relaxations as per norms."
  },
  {
    question: "Is there an entrance exam for PhD at Alagappa University?",
    answer:
      "Yes, the university conducts the Pre-Registration Qualifying Entrance Examination. Candidates with valid NET (JRF/LS), SET, or GATE scores are exempted."
  },
  {
    question: "What are the modes of pursuing a PhD at Alagappa University?",
    answer:
      "PhD can be pursued in Full-Time, Part-Time, or as an Independent Research Scholar, depending on eligibility and work status."
  },
  {
    question: "What documents are required for the PhD application?",
    answer:
      "Applicants need a completed application form, UG & PG certificates, mark sheets, research proposal, ID proof, passport photos, and certificates like NOC and community certificate if applicable."
  },
  {
    question: "What is the application timeline for PhD at Alagappa University?",
    answer:
      "There are two sessions: January (applications usually open mid-February to mid-March) and July (dates vary; check the official website)."
  },
  {
    question: "Are there scholarships or fellowships available for PhD scholars?",
    answer:
      "Yes, eligible students may receive University Research Fellowships (URF), UGC/CSIR fellowships, or government/state scholarships."
  },
  {
    question: "Is work experience mandatory for part-time PhD?",
    answer:
      "Yes, part-time PhD applicants must be employed and provide a Service Certificate and No Objection Certificate (NOC) from their employer."
  },
  {
    question: "How much is the PhD fee at Alagappa University?",
    answer:
      "The approximate fee is ₹10,000 per year (tuition) and ₹500 as the entrance exam application fee."
  }
];


const universityData = {
  fullName: 'Alagappa University',
  shortName: 'AU Karaikudi',
  phdEntranceExam: 'Pre-Registration Qualifying Entrance Examination (Exemptions: Have qualified in NET (JRF/LS), SET, or GATE)',
  qualificationRequired: 'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks',
  workExperience: 'For part-time Ph.D., candidates should be employed',
  modeOfPhd: 'Full-Time / Part-Time / Independent Research Scholars',
  documentsRequired: [
    'Completed application form',
    'Attested copies of UG and PG degree certificates and mark sheets',
    'Research proposal',
    'Passport-size photographs',
    'Government-issued ID proof',
    'Community Certificate (if applicable)',
    'Service Certificate and No Objection Certificate (NOC) from employer (for part-time candidates)',
    'Proof of qualifying NET/SET/GATE (if applicable)'
  ],
  applicationTimeline: 'January Session (opens in Mid-February and closes in Mid-March) / July Session (Dates vary; candidates are advised to check the official website for updates)',
  approxFee: '₹10,000 per annum (Tuition Fee) + ₹500 (Application Fee for the entrance exam)',
  scholarshipAvailability: 'University Research Fellowship (URF): Full-Time / Government Scholarships (UGC-JRF, CSIR-JRF, and others) / State Government Scholarships'
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Alagappa University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Established in 1985, Alagappa University is known for its commitment to academic excellence and regional development.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD admissions began soon after, in the late 1980s, fostering a strong research environment.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>About 600 PhD scholars enroll and graduate yearly, reflecting steady research growth.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Karaikudi Alagappa University is popular for its strong research culture, diverse programs, and experienced faculty, making it a top choice for doctoral studies.</li>
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
              <li>Alagappa University Ph.D. admission eligibility</li>
              <li>Alagappa University Ph.D. entrance exam details</li>
              <li>Alagappa University Ph.D. application form download</li>
              <li>Alagappa University Ph.D. part-time program requirements</li>
              <li>Alagappa University Ph.D. scholarship opportunities</li>
              <li>Alagappa University Ph.D. fee structure</li>
              <li>Alagappa University Ph.D. admission notification</li>
              <li>Alagappa University Ph.D. required documents list</li>
              <li>Alagappa University Ph.D. work experience criteria</li>
              <li>Alagappa University Ph.D. full-time and part-time modes</li>
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
