import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';
const faqs = [
  {
    question: "Is an entrance exam mandatory for PhD admission at SCSVMV?",
    answer: "Yes, candidates are required to take a PhD entrance exam conducted by the university or recognized bodies."
  },
  {
    question: "What qualifications are needed for applying to the PhD program?",
    answer: "You need a Master’s degree such as ME, M.Tech, M.Sc, M.A, MBA, or MCA with a minimum of 55% marks or CGPA of 6.0/10."
  },
  {
    question: "Does SCSVMV offer both full-time and part-time PhD modes?",
    answer: "Yes, full-time (3 years) and part-time (4–6 years) PhD modes are available to suit academic or working candidates."
  },
  {
    question: "What documents are needed for the PhD application?",
    answer: "You must submit academic transcripts, a research proposal, entrance exam scorecard (if any), CV, photographs, ID proof, and experience/NOC for part-time applicants."
  },
  {
    question: "Are scholarships or fellowships available?",
    answer: "Yes, SCSVMV offers scholarships and fellowships based on merit, research grants, and other university norms."
  }
];


const universityData = {
  fullName: 'PhD Admission in Kanchipuram Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya',
  shortName: 'SCSVMV',
  phdEntranceExam: 'Mandatory',
  qualificationRequired:
    'Master’s Degree (e.g., ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience may be mandatory for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time: 3 years / Part-Time: 4–6 years',
  documentsRequired: [
    'Completed Application Form (online or offline)',
    'Master’s Degree Certificate and Mark Sheets',
    'UG Degree Certificate and Mark Sheets',
    'Research Proposal / Statement of Purpose (SOP)',
    'Curriculum Vitae (CV) / Resume',
    'Entrance Exam Score Card (if applicable, e.g., UGC NET, CSIR NET, GATE)',
    'Passport-sized Photographs (usually 4 copies)',
    'Transfer Certificate (TC) or Migration Certificate (if applicable)',
    'Character Certificate from the last studied institution',
    'No Objection Certificate (NOC) from employer (for part-time candidates)',
    'Caste/Community Certificate (if applicable)',
    'Proof of Identity (Aadhaar Card / Passport / Voter ID)',
    'Proof of Address',
    'Experience Certificate (mandatory for part-time candidates)',
  ],
  applicationTimeline: `January Session:
- Application Start: December of the previous year
- Application End: January
- Entrance Exam & Interview: Typically in January
- Admission Notification: Released in December

July Session:
- Application Start: June
- Application End: July
- Entrance Exam & Interview: Typically in July
- Admission Notification: Released in June`,
  approxFee: `Admission Fee: ₹2,000
Course Fee: ₹40,000 (first year)
Doctoral Committee Fee: ₹15,000 (first year)
Laboratory / Library Fee: ₹2,000 (first year)
**Total Fees: ₹59,000 (first year)**`,
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
            <h3>About Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)</h3>
<ul>
  <li><b>Year of Establishment:</b> Established in 1993, SCSVMV is known for its blend of traditional values and modern academic excellence.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs were launched early on, fostering a strong research culture across faculties.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Around 60–90 PhD scholars are admitted annually in streams like Engineering, Science, Management, and Sanskrit.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Kanchipuram SCSVMV is sought for its experienced guides, serene campus, and research-friendly environment.</li>
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
              <li>Two admission cycles per year: January & July</li>
              <li>Balanced focus on tradition and innovation in research</li>
              <li>Recognized doctoral committee and guides</li>
              <li>Ideal for working professionals via part-time mode</li>
              <li>Located in spiritual and historic town of Kanchipuram</li>
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
