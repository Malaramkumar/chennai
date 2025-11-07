import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "Is PhD admission open at Amrita Vishwa Vidyapeetham – Amritapuri Campus?",
    answer: "Yes, PhD admissions are open twice a year — typically during January and July sessions. Check the official website for current notifications."
  },
  {
    question: "What are the eligibility criteria for Amrita PhD admission?",
    answer: "A Master’s degree with at least 60% marks (or equivalent CGPA) is required. For part-time, candidates must also have relevant work experience."
  },
  {
    question: "Is there an entrance exam for PhD at Amrita?",
    answer: "Yes, Amrita conducts its own entrance exam and interview. Candidates with UGC-NET/JRF/GATE are exempted from the written test."
  },
  {
    question: "Does Amrita provide PhD scholarships?",
    answer: "Yes, selected full-time candidates may receive scholarships based on merit and departmental recommendations."
  },
  {
    question: "Can part-time employees apply?",
    answer: "Yes, working professionals can apply under the part-time PhD program, provided they meet eligibility and provide a No Objection Certificate."
  }
];

const universityData = {
  fullName: "PhD Admission in Amrita Vishwa Vidyapeetham – Amritapuri Campus",
  shortName: "Amrita Amritapuri",
  phdEntranceExam: "Amrita Entrance / NET / JRF / GATE",
  qualificationRequired: "Master’s Degree with minimum 60% marks (or equivalent CGPA)",
  workExperience: "Mandatory for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Postgraduate Degree Certificates and Transcripts",
    "UG Degree Certificates",
    "Entrance Exam Scorecard (if applicable)",
    "Employer’s No Objection Certificate (for part-time)",
    "Statement of Purpose",
    "Research Proposal (tentative)"
  ],
  applicationTimeline: "January and July cycles (Check official site)",
  approxFee: "₹30,000 – ₹60,000 per year",
  scholarshipAvailability: "Available for full-time scholars based on performance"
};

const AmritaAmritapuri = () => {
  return (
    <div className="kerala-main">
      <Subsidebar />

      <div className="kerala-university-details-wrapper">
        <div className="kerala-content-layout">
          {/* Left Sidebar */}
          <div className="kerala-side-box kerala-left-box">
            <h3>About Amrita Vishwa Vidyapeetham – Amritapuri</h3>
            <ul>
              <li><b>Year of Establishment:</b> 2002</li>
              <li><b>PhD Programs Started:</b><br /> Since 2005</li>
              <li><b>Annual PhD Enrolments:</b><br /> 100+ researchers across all campuses</li>
              <li><b>Why Choose Amrita:</b><br /> Institute of Eminence, interdisciplinary research, global partnerships, and spiritual legacy.</li>
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

     <section className="kerala-alluniversityfaq-section">
        <h2>FAQs – Amrita PhD Admission (Amritapuri)</h2>
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
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </section>

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
              <li>IoE & NAAC A++ Accreditation</li>
              <li>Global Exchange & Dual Degree Options</li>
              <li>Top Ranked Private University (NIRF)</li>
              <li>Integrated Research Labs</li>
              <li>Amrita Vibe and Culture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmritaAmritapuri;
