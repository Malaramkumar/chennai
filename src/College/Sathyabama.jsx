import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at Sathyabama University?",
    answer: "Yes, applicants must appear for the Written Entrance Examination and an Oral Presentation (Interview) as part of the admission process."
  },
  {
    question: "What qualifications are required to apply for a PhD at Sathyabama University?",
    answer: "Candidates must possess a Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with at least 55% marks or an equivalent CGPA."
  },
  {
    question: "Is work experience required for a PhD at Sathyabama University?",
    answer: "Work experience is mandatory for candidates applying to the part-time Ph.D. program, as they must be employed."
  },
  {
    question: "Does Sathyabama University offer both Full-Time and Part-Time PhD programs?",
    answer: "Yes, Sathyabama offers PhD programs in both Full-Time and Part-Time modes to suit different types of candidates."
  },
  {
    question: "What is the application timeline for PhD admissions?",
    answer: "PhD applications are accepted in two cycles: January Session (opens and closes in September) and July Session (opens and closes in February)."
  },
  {
    question: "What documents are required for PhD admission?",
    answer: "Required documents include the completed application form, UG & PG certificates and mark sheets, research proposal, photographs, ID proof, and NOC from employer (for part-time candidates)."
  },
  {
    question: "How much is the PhD program fee at Sathyabama University?",
    answer: "The fee is ₹30,000 per semester for Full-Time, ₹25,000 per semester for Part-Time, plus ₹25,000 for the first Doctoral Committee Meeting, ₹2,000 for Processing, and ₹10,000 for the Comprehensive Exam."
  },
  {
    question: "Are there any scholarships available for PhD students?",
    answer: "Yes, Sathyabama offers research fellowships such as the Sathyabama Research Fellowships and other scholarship options."
  },
  {
    question: "How many PhD scholars enroll annually at Sathyabama?",
    answer: "Over 1,000 PhD scholars enroll every year, showing strong research activity at the university."
  },
  {
    question: "Why choose Sathyabama University for PhD studies?",
    answer: "With experienced faculty, modern research facilities, and diverse disciplines, Sathyabama is a premier destination for PhD aspirants in Chennai."
  }
];


const universityData = {
  fullName: 'Sathyabama Institute of Science and Technology ',
  shortName: 'Sathyabama University',
  phdEntranceExam: 'Written Entrance Examination and Oral Presentation (Interview) ',
  qualificationRequired:'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc.) with a minimum of 55% marks or an equivalent CGPA ',
  workExperience:'For part-time Ph.D., candidates should be employed ',
  modeOfPhd: 'Full-Time / Part-Time ',
  documentsRequired: [
    "Completed online application form", 
    "Attested copies of UG and PG degree certificates and mark sheets",
"Research proposal",
"Passport-size photographs",
"Government-issued ID proof",
"No Objection Certificate (NOC) from employer (for part-time candidates)",


  ],
  applicationTimeline: 'January Session (opens and closes in September) / July Session (opens and closes in February) ',
  approxFee:
    '₹30,000 per semester (Full-Time) / ₹25,000 per semester (Part-Time) + ₹25,000 (First Doctoral Committee (DC) Meeting Fee) + ₹2,000 (Processing Fee) + ₹10,000 (Comprehensive Exam Fee) ',
  scholarshipAvailability: 'Sathyabama Research Fellowships and Other Scholarships ',
  
};

const Subheading = () => {
  return (
    <div className="main">
      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar Box */}
          <div className="side-box left-box">
            <h3>About Sathyabama University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Sathyabama Institute of Science and Technology was established in 1987.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs commenced in the early 2000s to foster research excellence.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 1,000 scholars enroll yearly, indicating strong research growth.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Chennai Sathyabama Institute of Science and Technology is favored for its quality faculty, cutting-edge facilities, and diverse research areas, making it a top PhD destination.</li>
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
                <li>Sathyabama University Ph.D. admission eligibility</li>
<li>Sathyabama Institute Ph.D. entrance exam details</li>
<li>Sathyabama Ph.D. application form download</li>
<li>Sathyabama Ph.D. part-time program requirements</li>
<li>Sathyabama Ph.D. scholarship opportunities</li>
<li>Sathyabama Ph.D. fee structure</li>
<li>Sathyabama Ph.D. admission notification</li>
<li>Sathyabama Ph.D. required documents list</li>
<li>Sathyabama Ph.D. work experience criteria</li>
<li>Sathyabama Ph.D. full-time and part-time modes</li>

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
