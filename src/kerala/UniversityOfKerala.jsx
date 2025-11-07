import "../kerala/Kerala.scss";
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "What is the eligibility for PhD admission at the University of Kerala?",
    answer: "Candidates must have a Master’s Degree in the relevant subject with at least 55% marks. Relaxation of 5% is provided for SC/ST/OBC (non-creamy layer)/PWD categories."
  },
  {
    question: "Is the University of Kerala PhD entrance compulsory?",
    answer: "Yes, unless the candidate is NET/JRF/GATE qualified or has an MPhil degree from a recognized university."
  },
  {
    question: "What is the mode of PhD offered?",
    answer: "Both Full-time and Part-time modes are available."
  },
  {
    question: "Does the university provide scholarships?",
    answer: "Yes. Fellowships are available through UGC-JRF, KSCSTE, and University funds."
  },
  {
    question: "What is the typical PhD application timeline?",
    answer: "Usually June–July or Nov–Dec. Exact dates are notified on the official website."
  }
];

const universityData = {
  fullName: 'PhD Admission in University of Kerala',
  shortName: 'Kerala University',
  phdEntranceExam: 'University Entrance / NET / JRF / GATE / KSCSTE / MPhil',
  qualificationRequired: 'Master’s Degree with minimum 55% marks (50% for reserved categories)',
  workExperience: 'Not mandatory (unless applying part-time)',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'PG Degree Certificates and Mark Sheets',
    'UG Degree Certificates',
    'Entrance Exam Scorecard (NET/JRF/MPhil etc.)',
    'Caste/Community Certificate',
    'Research Proposal (tentative)',
    'No Objection Certificate (for part-time applicants)'
  ],
  applicationTimeline: 'June–July or November–December (Varies each year)',
  approxFee: '₹15,000 – ₹30,000 annually',
  scholarshipAvailability: 'Available through UGC, KSCSTE, and internal funding'
};

const UniversityOfKerala = () => {
  return (
    <div className="kerala-main">
      <Subsidebar />

      <div className="kerala-university-details-wrapper">
        <div className="kerala-content-layout">
          {/* Left Sidebar */}
          <div className="kerala-side-box kerala-left-box">
            <h3>About University of Kerala</h3>
            <ul>
              <li><b>Year of Establishment:</b> 1937</li>
              <li><b>Year of PhD Admission Establishment:</b><br /> Since 1957</li>
              <li><b>Annual PhD Enrolment and Exit Details:</b><br /> Over 300 enrolments per year</li>
              <li><b>Why this University is a Premier Choice for PhD Studies:</b><br /> Offers quality research infrastructure, NAAC A++ grade, interdisciplinary centers, and renowned faculty.</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="kerala-university-details-container">
            <div className="kerala-phdimg" />
            <h2 className="kerala-university-title">{universityData.fullName}</h2>
            <div className="kerala-details-grid">
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Popularly Known As</span>
                <span className="kerala-detail-value">{universityData.shortName}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">PhD Entrance Exam</span>
                <span className="kerala-detail-value">{universityData.phdEntranceExam}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Qualification Required</span>
                <span className="kerala-detail-value">{universityData.qualificationRequired}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Work Experience</span>
                <span className="kerala-detail-value">{universityData.workExperience}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Mode of PhD</span>
                <span className="kerala-detail-value">{universityData.modeOfPhd}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Application Timeline</span>
                <span className="kerala-detail-value">{universityData.applicationTimeline}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Approx. Fee</span>
                <span className="kerala-detail-value">{universityData.approxFee}</span>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Documents Required</span>
                <ul className="kerala-detail-list">
                  {universityData.documentsRequired.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="kerala-detail-item">
                <span className="kerala-detail-label">Scholarship/Fellowship</span>
                <span className="kerala-detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="kerala-side-box kerala-right-box">
             <h3>All Kerala Universities List</h3>
 <ul>
  <li><a href="/kerala/phd-admission-amrita-vishwa-vidyapeetham-amritapuri-campus">Amrita Vishwa Vidyapeetham, Amritapuri</a></li>
  <li><a href="/kerala/phd-admission-in-university-of-kerala">University of Kerala</a></li>
  <li><a href="/kerala/phd-admission-at-mahatma-gandhi-university">Mahatma Gandhi University, Kottayam</a></li>
  <li><a href="/kerala/phd-admission-at-indian-institute-of-technology">IIT Palakkad</a></li>
  <li><a href="/kerala/phd-admission-at-national-institute-of-technology">NIT Calicut</a></li>
  <li><a href="/kerala/phd-admission-at-cochin-university-of-science-and-technology">CUSAT, Kochi</a></li>
  <li><a href="/kerala/phd-admission-at-central-university-of-kerala">Central University of Kerala</a></li>
  <li><a href="/kerala/phd-admission-at-kannur-university">Kannur University</a></li>
  <li><a href="/kerala/phd-admission-at-chinmaya-vishwa-vidyapeeth">Chinmaya Vishwa Vidyapeeth (CVV)</a></li>
  <li><a href="/kerala/phd-admission-at-digital-university-kerala">Digital University Kerala</a></li>
  <li><a href="/kerala/phd-admission-in-amrita-vishwa-vidyapeetham-kochi-campus">Amrita Vishwa Vidyapeetham, Kochi</a></li>
  <li><a href="/kerala/phd-admission-at-apj-abdul-kalam-technological-university">APJ Abdul Kalam Technological University</a></li>
  <li><a href="/kerala/phd-admission-at-iim-kozhikode">IIM Kozhikode</a></li>
</ul>

            <h3>Key Highlights</h3>
            <ul>
              <li>NAAC A++ Accreditation</li>
              <li>Recognized Supervisors in 30+ Fields</li>
              <li>Digital Thesis Repository</li>
              <li>Foreign University Collaborations</li>
              <li>Affordable Fee Structure</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="kerala-alluniversityfaq-section">
        <h2>FAQs – University of Kerala PhD Admission</h2>
        <div className="kerala-faq-items">
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
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }),
          }}
        />
      </section>
    </div>
  );
};

export default UniversityOfKerala;
