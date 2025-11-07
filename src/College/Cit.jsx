import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is a PhD entrance exam mandatory at CIT?",
    answer: "Yes, Coimbatore Institute of Technology (CIT) requires candidates to appear for a PhD entrance exam as per Anna University norms."
  },
  {
    question: "What qualifications are required to apply for a PhD at CIT?",
    answer: "Candidates must have a Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with at least 55% marks or a CGPA of 6.0 on a 10-point scale."
  },
  {
    question: "Can working professionals apply for a PhD at CIT?",
    answer: "Yes, working professionals can apply for part-time PhD programs. Professional experience may be mandatory, and a No Objection Certificate (NOC) from the employer is usually required."
  },
  {
    question: "What is the mode of PhD offered at CIT?",
    answer: "PhD programs at CIT are offered in both Full-Time and Part-Time modes."
  },
  {
    question: "What documents are required for a PhD application at CIT?",
    answer: "Applicants must submit their UG and PG certificates and mark sheets, 10th and 12th documents, date of birth proof, research proposal, NOC (for part-time), and other supporting documents such as experience and caste certificates if applicable."
  },
  {
    question: "When does CIT open PhD applications?",
    answer: "PhD applications are typically open twice a year: in October-November for the January session, and in March-April for the July session, in line with Anna University’s schedule."
  },
  {
    question: "What is the approximate fee for PhD at CIT?",
    answer: "The approximate annual fee is ₹28,170, totaling around ₹84,510 for a standard 3-year program."
  },
  {
    question: "Are scholarships or fellowships available for PhD scholars at CIT?",
    answer: "Yes, CIT offers scholarships and fellowships for eligible PhD scholars, including government and research funding agency support."
  },
  {
    question: "What makes CIT a preferred choice for PhD?",
    answer: "CIT is known for its strong academic environment, experienced faculty, research-driven culture, and recognition as an Anna University-approved research center with active industry collaborations."
  }
];


const universityData = {
  fullName: 'PhD Admission in Coimbatore Institute of Technology, Coimbatore',
  shortName: 'CIT',
  phdEntranceExam: 'YES',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with 55% of marks or CGPA 6.0/10',
  workExperience:
    'For part-time PhD, professional experience may be mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Master’s degree certificate and mark sheets',
    'Undergraduate degree certificate and mark sheets',
    'Class 10th and 12th mark sheets and certificates (for proof of education and date of birth)',
    'Proof of date of birth (if not available in above)',
    'Valid UGC-NET/SET/GATE scorecard (if applicable)',
    'Transfer Certificate (TC) or Migration Certificate (if applicable)',
    'Character certificate from the last institution attended',
    'Passport size photographs (usually 2-4 copies)',
    'No Objection Certificate (NOC) from employer (for part-time candidates)',
    'Experience certificate (if applicable, for part-time candidates)',
    'Caste/category certificate (if applicable)',
    'Research proposal or synopsis (if required)',
  ],
  applicationTimeline: `Applications typically open twice a year:\n
**January Session** – Announced around October-November\n
**July Session** – Announced around March-April\n
Exact dates follow Anna University Ph.D. schedule.`,
  approxFee:
    'Approximately ₹28,170 per year, totaling around ₹84,510 for a standard 3-year duration across engineering and science disciplines.',
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
            <h3>About Coimbatore Institute of Technology (CIT)</h3>
<ul>
  <li><b>Year of Establishment:</b> Coimbatore Institute of Technology (CIT) was established in 1956 as a government-aided autonomous institution.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs at CIT were introduced under the affiliation of Anna University in the early 2000s.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>CIT admits around 40–60 PhD scholars annually under Anna University’s research framework.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>CIT is renowned for its strong academic foundation, experienced faculty, and active industry-linked research. Its collaboration with Anna University and national funding agencies makes it a preferred destination for quality doctoral studies.</li>
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
              <li>Anna University-approved research center</li>
              <li>Affordable Ph.D. fee structure</li>
              <li>Research-driven academic culture</li>
              <li>Funding support and fellowships available</li>
              <li>Collaborations with industries and R&D institutions</li>
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
