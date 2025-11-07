import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at Bharathidasan University?",
    answer: "Yes, Bharathidasan University requires candidates to pass a PhD entrance exam unless exempted through qualifications such as NET, SET, or M.Phil."
  },
  {
    question: "What are the basic eligibility criteria for applying to the PhD program?",
    answer: "You must hold a Master’s degree such as M.E., M.Tech., M.Sc., M.A., MBA, or MCA with at least 55% marks or a CGPA of 6.0 on a 10-point scale."
  },
  {
    question: "Is work experience mandatory for PhD admissions?",
    answer: "Work experience is generally required for part-time PhD applicants. Full-time candidates may not need work experience."
  },
  {
    question: "What are the available modes of PhD at Bharathidasan University?",
    answer: "Both Full-Time and Part-Time modes are offered to cater to regular students and working professionals."
  },
  {
    question: "What documents must be submitted during the PhD admission process?",
    answer: "You need academic certificates (UG & PG), hall ticket, score card, research proposal, NOC (if employed), experience certificate, ID proof, and more. A detailed list is provided in the official application guide."
  },
  {
    question: "When can I apply for the PhD program at Bharathidasan University?",
    answer: "Admissions are held twice a year – typically in the February and August sessions."
  },
  {
    question: "What is the approximate fee for the PhD program?",
    answer: "The annual tuition fee ranges from ₹20,000 to ₹30,000 depending on the department. One-time admission fees and examination fees apply separately."
  },
  {
    question: "Are scholarships or fellowships available for PhD students?",
    answer: "Yes, eligible candidates can apply for various government-funded and UGC fellowships/scholarships."
  },
  {
    question: "Can I pursue a PhD while working?",
    answer: "Yes, the part-time PhD option is designed for working professionals, provided they submit a valid No Objection Certificate from their employer."
  }
];


const universityData = {
  fullName: 'Bharathidasan University, Trichy',
  shortName: 'BDU',
  phdEntranceExam: 'YES',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., MBA, MCA etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'For part-time PhD, professional experience may be mandatory',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Ph.D. Entrance Exam Hall Ticket & Score Card (if applicable)',
    'Ph.D. Admission Application Form (printout of submitted form)',
    'Postgraduate Degree Certificate (M.A./M.Sc./M.Com. or equivalent)',
    'Postgraduate Mark Sheets (all semesters)',
    'Undergraduate Degree Certificate',
    'UG Mark Sheets (all semesters)',
    'Transfer Certificate (TC) from last institution',
    'Conduct Certificate',
    'Migration Certificate (for candidates from other universities)',
    'Community Certificate (SC/ST/OBC candidates – issued by competent authority)',
    'Date of Birth Proof (Birth Certificate / SSLC / 10th Mark Sheet)',
    'No Objection Certificate (NOC) – for employed candidates (mandatory for part-time Ph.D.)',
    'Experience Certificate (if applicable, especially for part-time candidates)',
    'Research Proposal or Statement of Purpose (SOP)',
    'Passport-size Photographs (recent – usually 2 to 4 copies)',
    'Aadhar Card or Government-issued ID Proof (for verification)',
  ],
  applicationTimeline:
    'Ph.D. admissions are conducted twice a year, typically in February and August sessions.',
  approxFee: 'Annual Tuition Fee: ₹20,000 to ₹30,000 (varies by department) One-Time Admission Fee: ₹1,000 to ₹2,000  Examination Fee: ₹500 to ₹1,000 per semester  Additional Charges: May include library, lab, and misc. fees depending on department',
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
            <h3>About Bharathidasan University</h3>
            <ul>
  <li><b>Year of Establishment:</b> Bharathidasan University was established in 1982.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programs started in the mid-1980s to boost academic research.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>Over 1,500 scholars enroll annually, indicating consistent research output.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>PhD Admission in Tiruchirappalli Bharathidasan University is ideal for its experienced faculty, strong research ecosystem, and wide academic network, making it a premier PhD choice.</li>
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
                  {universityData.applicationTimeline}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span className="detail-value">
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
              <li>Twice-a-year PhD admissions (Feb & Aug)</li>
              <li>Entrance exam mandatory for most applicants</li>
              <li>Support for working professionals through part-time PhDs</li>
              <li>Fees structured for affordability and accessibility</li>
              <li>Well-supported research ecosystem</li>
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
