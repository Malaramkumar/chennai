import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is there an entrance exam for PhD at Bharath University?",
    answer: "Yes, Bharath University conducts an entrance exam for PhD admission. However, candidates with UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE, or M.Phil. are exempted."
  },
  {
    question: "What is the minimum qualification required for applying?",
    answer: "A Master's degree such as M.E., M.Tech., M.Sc., M.A., M.C.A., or MBA with a minimum of 55% marks or equivalent CGPA from a recognized university is required."
  },
  {
    question: "Can I apply for a part-time PhD program at BIHER?",
    answer: "Yes, BIHER offers both full-time and part-time PhD programs. For part-time, you must be currently employed and submit a No Objection Certificate (NOC) from your employer."
  },
  {
    question: "What documents are required for PhD admission?",
    answer: "You need to submit the completed application form, UG & PG degree certificates, research proposal, passport-size photos, ID proof, and NOC if employed."
  },
  {
    question: "What is the application timeline at Bharath University?",
    answer: "There are two sessions: January (opens/closes in January) and July (opens/closes in June)."
  },
  {
    question: "How much is the annual PhD fee at BIHER?",
    answer: "The PhD fee ranges from ₹35,000 to ₹75,000 per year depending on the discipline and program type."
  },
  {
    question: "Are scholarships or fellowships available for PhD students?",
    answer: "Yes, scholarships are offered based on merit, financial need, or government criteria."
  },
  {
    question: "Does BIHER assist with research proposal preparation?",
    answer: "While BIHER provides guidelines for preparing a research proposal, students are expected to draft and submit it themselves during application."
  },
  {
    question: "Can I change my research topic after admission?",
    answer: "Changing your research topic post-admission is possible but requires approval from the university's research committee."
  }
];


const universityData = {
  fullName: 'PhD Admission in Chennai Bharath Institute of Higher Education and Research',
  shortName: 'Bharath University',
  phdEntranceExam:
    'Required (Exemptions: Qualified in UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE / Hold an M.Phil. degree)',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or equivalent CGPA from a recognized university',
  workExperience: 'For part-time Ph.D., candidates should be employed',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed application form',
    'Attested copies of UG and PG degree certificates and mark sheets',
    'Research proposal',
    'Passport-size photographs',
    'Government-issued ID proof',
    'No Objection Certificate (NOC) from employer (for part-time candidates)',
  ],
  applicationTimeline:
    'January Session (opens and closes in January) / July Session (opens and closes in June)',
  approxFee: 'Ranges from ₹35,000 to ₹75,000 per year',
  scholarshipAvailability:
    'Merit-Based Scholarships / Need-Based Scholarships / Government Scholarships',
  searchKeywords: [
    'BIHER Ph.D. admission eligibility',
    'Bharath University Ph.D. entrance exam details',
    'BIHER Ph.D. application form download',
    'Bharath University Ph.D. part-time program requirements',
    'BIHER Ph.D. scholarship opportunities',
    'Bharath University Ph.D. fee structure',
    'BIHER Ph.D. admission notification',
    'Bharath University Ph.D. required documents list',
    'BIHER Ph.D. work experience criteria',
    'Bharath University Ph.D. full-time and part-time modes',
  ],
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About {universityData.shortName}</h3>
           <ul>
  <li><b>Year of Establishment:</b> Bharath Institute of Higher Education and Research (BIHER) was established in 1984.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began in the early 2000s to boost academic research.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 900 PhD scholars enroll each year, ensuring strong research output.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Bharath Institute of Higher Education and Research is ideal for its advanced research centers, reputed faculty, and focus on innovation—making it a top choice for doctoral studies.</li>
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
            <h3>Search Keywords for PhD Admission Information</h3>
            <ul>
              {universityData.searchKeywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
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
