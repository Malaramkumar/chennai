import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PRIST University?",
    answer: "Yes, appearing for the PhD entrance exam is mandatory for all applicants at PRIST University."
  },
  {
    question: "What qualifications are required for PhD admission at PRIST?",
    answer: "Applicants must have a Master’s degree such as ME, M.Tech, M.Sc, M.A, MBA, or MCA with at least 55% marks or a CGPA of 6.0/10."
  },
  {
    question: "Is work experience mandatory for PhD applicants at PRIST University?",
    answer: "Professional experience may be mandatory, especially for part-time PhD applicants."
  },
  {
    question: "What modes of PhD study are available at PRIST University?",
    answer: "PRIST University offers both Full-Time and Part-Time PhD programs."
  },
  {
    question: "What documents are required to apply for a PhD at PRIST University?",
    answer: "Applicants must submit a completed application form, passport-sized photographs, ID proof, UG & PG certificates, experience certificate (if applicable), NOC from employer (for part-time), research proposal, qualifying exam scores (e.g., UGC-NET, GATE), migration/transfer certificate, and application fee demand draft."
  },
  {
    question: "When is the PhD admission application period at PRIST?",
    answer: "Applications typically open in June and close in August. Entrance exams and interviews follow the application period."
  },
  {
    question: "Is there any financial support or scholarship available for PhD students?",
    answer: "Yes, PRIST University provides scholarships and fellowships to eligible PhD students."
  },
  {
    question: "What is the annual tuition fee for a PhD at PRIST University?",
    answer: "The approximate annual tuition fee is ₹90,000."
  },
  {
    question: "How many PhD students graduate annually from PRIST University?",
    answer: "Approximately 30–50 PhD scholars complete their degrees annually, depending on research progress."
  },
  {
    question: "Why choose PRIST University for PhD studies?",
    answer: "PRIST University offers a supportive research environment, experienced guides, interdisciplinary opportunities, and strong academic infrastructure."
  }
];


const universityData = {
  fullName: 'PhD Admission in Ponnaiyah Ramajayam Institute of Science & Technology',
  shortName: 'PRIST University',
  phdEntranceExam: 'Mandatory for all applicants',
  qualificationRequired:
    'Master’s Degree (e.g., ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Completed Application Form',
    'Passport-sized Photographs',
    'Photo ID Proof (Aadhaar, Passport, etc.)',
    'UG & PG Degree Certificates and Mark Sheets',
    'Experience Certificate (for Part-Time applicants)',
    'No Objection Certificate (NOC) from Employer (for Part-Time applicants)',
    'Research Proposal or Statement of Purpose',
    'Proof of Qualifying Exam Scores (UGC-NET, CSIR-NET, GATE, etc.)',
    'Migration/Transfer Certificate',
    'Demand Draft for Application Fee',
  ],
  applicationTimeline: `Application Start Date: June\nApplication End Date: August\nEntrance Examination & Interview: Shortly after application period\nSession Commencement: Following the selection process`,
  approxFee: 'Annual Tuition Fee: Approximately ₹90,000',
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
           <h3>About Ponnaiyah Ramajayam Institute of Science & Technology (PRIST)</h3>
<ul>
  <li><b>Year of Establishment:</b> Ponnaiyah Ramajayam Institute of Science & Technology (PRIST) was established in 1985 as an institute and became a Deemed-to-be University in 2008.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs at PRIST University were initiated shortly after it attained Deemed-to-be University status in 2008.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Approximately 30–50 scholars successfully complete their PhD annually, based on research progress and submission timelines.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PRIST offers a supportive research environment with experienced guides, modern infrastructure, and interdisciplinary opportunities.</li>
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
                <span className="detail-value" style={{whiteSpace: 'pre-wrap'}}>
                  {universityData.applicationTimeline}
                </span>
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
              <li>Recognized for quality research and academic excellence</li>
              <li>Experienced research guides across multiple disciplines</li>
              <li>Regular admission cycles with transparent selection process</li>
              <li>Encourages research publications and collaboration</li>
              <li>Offers support for both fresh and employed research scholars</li>
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
