import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PMIST?",
    answer: "Yes, appearing for the PhD entrance exam is mandatory at Periyar Maniammai Institute of Science & Technology."
  },
  {
    question: "What is the minimum qualification required for PhD admission at PMIST?",
    answer: "Candidates must hold a Master’s Degree such as ME, M.Tech, M.Sc, M.A, MBA, or MCA with at least 55% marks or a CGPA of 6.0/10."
  },
  {
    question: "Is work experience mandatory for applying to a part-time PhD at PMIST?",
    answer: "Yes, professional work experience is mandatory for applicants applying for a part-time PhD program."
  },
  {
    question: "What are the available modes of pursuing PhD at PMIST?",
    answer: "PMIST offers both Full-Time and Part-Time PhD programs to cater to the needs of different candidates."
  },
  {
    question: "What documents are required for PhD application at PMIST?",
    answer: "Documents include UG/PG certificates and mark sheets, ID proof, photographs, research proposal, experience certificate (for part-time), NOC (if employed), and qualifying exam certificates like UGC-NET or GATE if applicable."
  },
  {
    question: "What is the application timeline for PhD admission at PMIST?",
    answer: "Applications usually start in April and close by June. Entrance exams and interviews follow soon after, with the session commencing post-selection."
  },
  {
    question: "Does PMIST offer scholarships or fellowships for PhD scholars?",
    answer: "Yes, PMIST provides scholarship and fellowship opportunities for eligible PhD scholars."
  },
  {
    question: "What is the annual fee structure for PhD at PMIST?",
    answer: "The annual tuition fee ranges between ₹26,500 and ₹75,500, with an average of ₹64,718."
  },
  {
    question: "How many PhD students are admitted annually at PMIST?",
    answer: "PMIST typically admits around 60 to 100 PhD students each year across various disciplines."
  },
  {
    question: "Can working professionals apply for a PhD at PMIST?",
    answer: "Yes, PMIST encourages working professionals to pursue a part-time PhD, provided they meet eligibility criteria and submit a No Objection Certificate from their employer."
  }
];


const universityData = {
  fullName: 'PhD Admission in Thanjavur Periyar Maniammai Institute of Science & Technology',
  shortName: 'PMIST',
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g., ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed Application Form (online or downloaded)',
    'Photo ID Proof (Aadhaar card, Passport, Voter ID, or Driving License)',
    'Passport-sized Photographs (typically 2–4 copies)',
    'UG Degree Certificate and Consolidated Mark Sheets',
    'PG Degree Certificate and Consolidated Mark Sheets',
    'Transfer Certificate (TC) or Migration Certificate',
    'Provisional/Degree Certificate (PG, if final degree not yet issued)',
    'Community Certificate (for SC/ST/OBC candidates, if applicable)',
    'Research Proposal / Statement of Purpose (SOP)',
    'Experience Certificate (Mandatory for Part-Time applicants)',
    'No Objection Certificate (NOC) from employer (for Part-Time applicants)',
    'Copy of Qualifying Exam Certificate (UGC-NET / CSIR-NET / GATE / SLET, if applicable)',
    'Proof of Payment of application or registration fee',
  ],
  applicationTimeline: `Application Start Date: April\nApplication End Date: June\nEntrance Examination & Interview: Shortly after application period\nSession Commencement: Following the selection process`,
  approxFee: 'Annual Tuition Fee Range: ₹26,500 – ₹75,500\nAverage Annual Fee: ₹64,718',
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
          
           <h3>About Periyar Maniammai Institute of Science & Technology (PMIST)</h3>
<ul>
  <li><b>Year of Establishment:</b> Established in 1988, PMIST is focused on empowering education with a strong social mission.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs began early to nurture research in science, technology, and social development.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Approximately 60–100 PhD scholars are admitted each year across disciplines like Engineering, Architecture, Science, and Humanities.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Thanjavur PMIST is known for its inclusive research environment, skilled faculty, and commitment to sustainable innovation.</li>
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
              <li>Encourages interdisciplinary research and innovation</li>
              <li>Transparent admission and selection process</li>
              <li>Focus on sustainable development and societal impact</li>
              <li>Digital resources and well-equipped research centers</li>
              <li>Ideal for working professionals opting for part-time PhD</li>
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
