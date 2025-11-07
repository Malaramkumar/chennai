import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at SNS College of Technology?",
    answer: "Yes, a PhD entrance exam is mandatory, typically conducted by Anna University, followed by an interview."
  },
  {
    question: "What are the minimum eligibility criteria for a PhD at SNS Tech?",
    answer: "Applicants must have a Master's degree such as M.E., M.Tech., M.Sc., M.A., MBA, or MCA with at least 55% marks or CGPA of 6.0/10."
  },
  {
    question: "Is work experience necessary for applying to a PhD program?",
    answer: "Work experience is generally required for part-time PhD applicants, along with a No Objection Certificate from the employer."
  },
  {
    question: "Does SNS College of Technology offer full-time and part-time PhD modes?",
    answer: "Yes, the institution offers both full-time and part-time PhD programs to suit different candidate needs."
  },
  {
    question: "What documents are required for PhD admission at SNS Tech?",
    answer: "Essential documents include PG and UG certificates, photo ID, experience and NOC (for part-time), entrance exam scorecard, research proposal, and others."
  },
  {
    question: "When can I apply for the PhD program?",
    answer: "There are two admission sessions annually: January (applications open in October) and July (applications open in April)."
  },
  {
    question: "Is there any financial support or scholarship available?",
    answer: "Yes, scholarships and fellowships are available as per university norms and research project funding."
  },
  {
    question: "Why should I choose SNS College of Technology for my PhD?",
    answer: "SNS Tech offers a robust research environment with NAAC A++ accreditation, experienced mentors, modern labs, and active research funding including MeitY grants."
  }
];


const universityData = {
  fullName: 'PhD Admission in Coimbatore SNS College of Technology',
  shortName: 'SNS Tech',
  phdEntranceExam: 'YES',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'For part-time PhD, professional experience may be mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Duly filled PhD application form',
    'Master’s degree certificate and mark sheets (PG qualification)',
    'Undergraduate degree certificate and mark sheets',
    'Proof of date of birth (10th or 12th certificate)',
    'Caste/category certificate (if applicable, e.g., SC/ST/OBC)',
    'No Objection Certificate (NOC) from employer (for part-time candidates)',
    'Experience certificate (if applicable, for part-time candidates)',
    'Research proposal or synopsis (if required)',
    'Passport size photographs',
    'Photo ID proof (Aadhar card, passport, voter ID, etc.)',
    'Entrance exam score card (if applicable)',
    'Transfer Certificate (TC) or Migration Certificate (if applicable)',
  ],
  applicationTimeline: `**January Session:**  
- Application Start Date: Typically in October  
- Application End Date: Typically in November  
- Entrance Examination: Conducted by Anna University, followed by an interview  
- Commencement of Classes: Usually in January  

**July Session:**  
- Application Start Date: Typically in April  
- Application End Date: Typically in May  
- Entrance Examination: Conducted by Anna University, followed by an interview  
- Commencement of Classes: Usually in July`,
  approxFee: 'Total Program Fee: Approximately ₹1,50,000 for the entire duration of the Ph.D. program.',
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
          
            <h3>About SNS College of Technology (SNSCT)</h3>
<ul>
  <li><b>Year of Establishment:</b> Founded in 2002 by the SNS Charitable Trust, SNSCT is a well-established private, autonomous institution with strong technical credentials.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs were launched shortly after autonomy, offering research across five engineering and technology disciplines.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Each year, SNSCT admits around 70–100 PhD scholars, with around 5 research programs in CSE, ECE, Mechanical, Civil, and Business Management.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>SNSCT is a top choice for doctoral studies thanks to its NAAC 'A++' accreditation, autonomous status till 2027–28, design‑thinking pedagogy, well‑equipped labs, dedicated faculty mentors, and recent research funding (e.g., ₹16 lakh MeitY grant).</li>
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
              <li>Anna University-affiliated PhD research programs</li>
              <li>Well-defined selection through entrance & interview</li>
              <li>Focus on real-world problem solving and innovation</li>
              <li>Industry-academic partnerships for research</li>
              <li>Facilities for both full-time and part-time scholars</li>
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
