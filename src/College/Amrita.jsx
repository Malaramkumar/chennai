import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Amrita University?",
    answer:
      "Candidates must hold a Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or equivalent CGPA from a recognized university."
  },
  {
    question: "Is an entrance exam required for PhD admission at Amrita University?",
    answer:
      "Yes, a PhD entrance exam is required. However, candidates who have qualified UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE, or hold an M.Phil. degree are exempted."
  },
  {
    question: "What are the available modes of pursuing a PhD at Amrita University?",
    answer: "PhD programs are offered in Full-Time and Part-Time modes."
  },
  {
    question: "Is work experience required for applying to a Part-Time PhD at Amrita University?",
    answer: "Yes, candidates applying for Part-Time PhD must be employed."
  },
  {
    question: "What documents are required for the PhD application?",
    answer:
      "Documents include a completed application form, attested UG/PG degree certificates and mark sheets, research proposal, passport-size photographs, government-issued ID, and a No Objection Certificate (NOC) from the employer for part-time applicants."
  },
  {
    question: "What is the PhD application timeline at Amrita University?",
    answer:
      "Applications are accepted for two sessions: January (open and close in January) and July (open and close in June)."
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer:
      "The tuition fee is approximately ₹30,000 per annum with a registration fee of ₹1,000."
  },
  {
    question: "Are scholarships or fellowships available for PhD scholars?",
    answer:
      "Yes, scholarships include: University Scholarships (₹10,000–₹30,000/month), Visvesvaraya Ph.D. Scheme (₹38,750–₹43,750/month), and International Scholarships (₹15,000–₹25,000/month)."
  }
];


const universityData = {
  fullName: 'PhD Admission in Coimbatore Amrita Vishwa Vidyapeetham',
  shortName: 'Amrita University',
  phdEntranceExam: 'Required (Exemptions: Have qualified in UGC-NET (including JRF), UGC-CSIR NET (including JRF), SLET, GATE / Hold an M.Phil. degree)',
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
  approxFee: '₹30,000 per annum (Tuition Fee) + ₹1,000 (Registration Fee)',
  scholarshipAvailability: 'University Scholarships (Full-Time: stipends range from ₹10,000 to ₹30,000 per month, based on merit) / Visvesvaraya Ph.D. Scheme (stipends of ₹38,750 per month for the first two years and ₹43,750 per month for the next three years) / International Scholarships (International students: stipends range from ₹15,000 to ₹25,000 per month)'
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Amrita University</h3>
           <ul>
  <li><b>Year of Establishment:</b> Amrita Vishwa Vidyapeetham was established in 2003.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs started in the mid-2000s to promote high-end research.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 1,000 scholars enroll and exit annually across disciplines.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Coimbatore Amrita Vishwa Vidyapeetham is highly sought after due to its global research collaborations, NAAC A++ grade, and multidisciplinary research excellence.</li>
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
              <li>Amrita University Coimbatore Ph.D. admission eligibility</li>
              <li>Amrita Vishwa Vidyapeetham Ph.D. entrance exam details</li>
              <li>Amrita Coimbatore Ph.D. application form download</li>
              <li>Amrita University Ph.D. part-time program requirements</li>
              <li>Amrita Vishwa Vidyapeetham Ph.D. scholarship opportunities</li>
              <li>Amrita University Ph.D. fee structure</li>
              <li>Amrita Coimbatore Ph.D. admission notification</li>
              <li>Amrita University Ph.D. required documents list</li>
              <li>Amrita Vishwa Vidyapeetham Ph.D. work experience criteria</li>
              <li>Amrita University Ph.D. full-time and part-time modes</li>
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
