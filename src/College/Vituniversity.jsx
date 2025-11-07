import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is VITREE mandatory for all PhD applicants?",
    answer: "Yes, the VIT Research Entrance Examination (VITREE) is generally required, but candidates with a 4-year Bachelor’s degree and at least 75% marks may be exempted."
  },
  {
    question: "What academic qualifications are needed for PhD admission at VIT?",
    answer: "Applicants must hold a Master’s degree (M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 60% marks or equivalent CGPA. Direct Ph.D. applicants must have a 4-year Bachelor’s degree with 75% marks or equivalent CGPA."
  },
  {
    question: "Is work experience required for part-time PhD at VIT?",
    answer: "Yes, candidates applying for part-time PhD must be employed and submit a No Objection Certificate (NOC) from their employer."
  },
  {
    question: "What are the available modes of PhD at VIT?",
    answer: "PhD at VIT is available in Full-Time, Part-Time, and Direct PhD formats."
  },
  {
    question: "What is the VIT PhD application timeline?",
    answer: "VIT offers two admission sessions: January (applications open in September and close in November) and July (applications open in January and close in March)."
  },
  {
    question: "What documents are required for applying?",
    answer: "Applicants need to submit the completed online application, academic transcripts, proof of VITREE score or exemption, research proposal, photographs, ID proof, and NOC for part-time candidates."
  },
  {
    question: "What is the annual fee for PhD programs at VIT?",
    answer: "The tuition fee is ₹43,000 per annum, with an additional ₹10,000 thesis submission fee. Fees may vary based on specific programs."
  },
  {
    question: "Does VIT provide any scholarships or financial support?",
    answer: "Yes, internal full-time scholars are eligible for a fellowship of ₹20,000/month for three years. Other scholarships like Adi Dravidar Tribal Welfare and merit/need-based scholarships are also available."
  },
  {
    question: "How many scholars enroll in PhD programs at VIT each year?",
    answer: "Over 1,500 PhD scholars enroll annually, reflecting VIT’s growing emphasis on research excellence."
  },
  {
    question: "Why choose VIT for a PhD program?",
    answer: "VIT offers world-class faculty, cutting-edge research facilities, interdisciplinary research opportunities, and strong placement support, making it a premier choice for PhD aspirants."
  }
];


const universityData = {
  fullName: 'PhD Admission in Vellore Institute of Technology',
  shortName: 'VIT University',
  phdEntranceExam: 'VIT Research Entrance Examination (VITREE) (Exemptions: Candidates with a 4-year Bachelor’s  degree (with 75% marks))',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 60% marks or equivalent CGPA / Direct Ph.D. (A 4-year Bachelor’s degree with 75% marks or equivalent CGPA) ',
  workExperience:'For part-time Ph.D., candidates should be employed ',
  modeOfPhd: 'Full-Time / Part-Time / Direct ',
  documentsRequired: [
    "Completed online application form", 
    "Academic transcripts (Bachelor’s and Master’s degrees)",
    "Proof of qualifying examination (VITREE score or exemption proof)",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "NOC from employer (for part-time candidates)",
  ],
  applicationTimeline: 'January Session (Opens in September and closes in November), July Session (Opens in January and closes in March) ',
  approxFee:
    '₹43,000 per annum (tuition fee) + ₹10,000 (Thesis Submission Fee) Fees may vary based on the program and are subject to change',
  scholarshipAvailability: 'Internal Full-Time Scholars (Eligible for a fellowship of ₹20,000 per month for three years) / Government Scholarships (Adi Dravidar Tribal Welfare Scholarship) / Other Scholarships (merit-based and need-based scholarships)',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About VIT University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Vellore Institute of Technology (VIT) was established in 1984.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>VIT started its PhD programs in the early 2000s to promote research excellence.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 1,500 scholars enroll annually, reflecting steady research growth.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Vellore Institute of Technology is sought after for its world-class faculty, cutting-edge facilities, and multidisciplinary research, making it a premier choice.</li>
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
                <li>VIT Ph.D. admission eligibility</li>
                <li>VIT Vellore Ph.D. entrance exam VITREE details</li>
                <li>VIT Ph.D. application form download</li>
                <li>VIT Ph.D. part-time program requirements</li>
                <li>VIT Ph.D. scholarship opportunities</li>
                <li>VIT Ph.D. fee structure</li>
                <li>VIT Ph.D. admission notification</li>
                <li>VIT Ph.D. required documents list</li>
                <li>VIT Ph.D. work experience criteria</li>
                <li>VIT Ph.D. full-time and part-time modes</li>
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
