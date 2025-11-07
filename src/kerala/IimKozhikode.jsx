import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When are PhD admissions open at IIM Kozhikode?",
    answer: "The application cycle generally opens in November, with submissions closing around January end. Interviews are held in April."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "Applicants need a PG degree (≥ 55%) or a professional qualification. A 4‑year UG with ≥ 75% also qualifies. Category-based 5% relaxation applies."
  },
  {
    question: "Is an entrance test required?",
    answer: "Candidates must have valid CAT/GATE/GMAT/GRE/UGC‑NET/JRF/IIMB Test scores not older than 3 years; IIMK conducts its own test for Economics specialization."
  },
  {
    question: "Are fellowships provided?",
    answer: "Yes—full‑time fellows receive a stipend of ₹42k–₹50k/month, along with contingency and conference grants."
  },
  {
    question: "Is part-time or practice-track PhD available?",
    answer: "Yes. Practice‑Track PhD is available for professionals with ≥ 8 years (≥ 15 years for Strategic Management) of experience."
  }
];

const universityData = {
  fullName: "PhD Admission at IIM Kozhikode (Doctoral Programme in Management)",
  shortName: "IIM Kozhikode",
  phdEntranceExam: "CAT / GATE / GMAT / GRE / UGC‑NET / JRF / IIMB Test",
  qualificationRequired: "PG degree ≥ 55% or professional qualification; 4‑yr UG ≥ 75%",
  workExperience: "Required for Practice‑Track (≥ 8 yrs; ≥ 15 yrs for Strategic Mgmt)",
  modeOfPhd: "Full‑Time Residential / Practice‑Track",
  documentsRequired: [
    "Degree certificates & transcripts",
    "Entrance scorecards (CAT/GATE/GMAT/GRE/NET/JRF/IIMB)",
    "Research proposal",
    "Work‑experience proof (for practice‑track)"
  ],
  applicationTimeline: "Applications open Nov; deadline Jan 31 2025; interviews mid‑April 2025",
  approxFee: "Fully funded; ₹42–50k/month stipend",
  scholarshipAvailability: "Stipends + contingency grants + conference funding"
};

const IimKozhikode = () => {
  return (
    <div className="kerala-main">
      <Subsidebar />

      <div className="kerala-university-details-wrapper">
        <div className="kerala-content-layout">
          {/* Left Sidebar */}
          <div className="kerala-side-box kerala-left-box">
            <h3>About IIM Kozhikode</h3>
            <ul>
              <li><b>Established:</b> 1996</li>
              <li><b>PhD Program Launched:</b><br /> Since 2007</li>
              <li><b>Campus:</b><br /> 112.5 acre hill‑top campus</li>
              <li><b>Reputation:</b><br /> Ranked 3rd among IIMs by NIRF 2024</li>
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
              <li>Fully funded residential PhD</li>
              <li>₹42–50k monthly stipend + grants</li>
              <li>Top placements in IIMs/IITs</li>
              <li>Interdisciplinary research culture</li>
              <li>Hill-top scenic campus</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="kerala-alluniversityfaq-section">
        <h2>FAQs – IIM Kozhikode PhD Admission</h2>
        <div className="kerala-faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

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
            })
          }}
        />
      </section>
    </div>
  );
};

export default IimKozhikode;
