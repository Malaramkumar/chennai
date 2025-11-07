import "../kerala/Kerala.scss";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "When does IIT Palakkad open its PhD admission cycle?",
    answer: "IIT Palakkad typically opens PhD admissions twice a year—in January/February and July/August. Keep an eye on official announcements."
  },
  {
    question: "What is the eligibility criterion?",
    answer: "A Bachelor’s or Master’s degree with ≥ 60 % marks (55 % for reserved). Valid GATE/UGC-NET/JRF are accepted; GATE–JRF candidates can get a fellowship."
  },
  {
    question: "Is there an entrance test plus interview?",
    answer: "No separate entrance test is required for GATE/NET qualified candidates. Others must take an online written test followed by an interview."
  },
  {
    question: "Are part-time PhD options available?",
    answer: "Yes, working professionals with at least 2 years of experience and an NOC are eligible for part-time PhD."
  },
  {
    question: "What academic support do PhD scholars get?",
    answer: "Full-time scholars receive Institute Assistantships (₹31,000/month for 2 years), along with access to labs, travel grants, and conferences."
  }
];

const universityData = {
  fullName: "PhD Admission at Indian Institute of Technology (IIT) Palakkad",
  shortName: "IIT Palakkad",
  phdEntranceExam: "GATE / UGC-NET / JRF / IIT Palakkad Written Test",
  qualificationRequired: "Bachelor’s/Master’s with ≥ 60% (≥ 55% for reserved categories)",
  workExperience: "Required for part-time applicants",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Degree certificate & marksheets (UG & PG)",
    "GATE/NET/JRF scorecard (if applicable)",
    "Research proposal (2–3 pages)",
    "Employer NOC (for part-time)",
    "Category certificate (if applicable)"
  ],
  applicationTimeline: "Biannual: Jan/Feb & Jul/Aug cycles",
  approxFee: "₹25,000 – ₹50,000 per year (varies by department)",
  scholarshipAvailability: "Institute fellowship for GATE/NET-qualified or selected full-time candidates"
};

const IitPalakkad = () => (
  <div className="kerala-main">
    <Subsidebar />

    <div className="kerala-university-details-wrapper">
      <div className="kerala-content-layout">

        {/* Left Sidebar */}
        <div className="kerala-side-box kerala-left-box">
          <h3>About IIT Palakkad</h3>
          <ul>
            <li><b>Year of Establishment:</b> 2015</li>
            <li><b>PhD Programs Introduced:</b><br /> Since 2016</li>
            <li><b>Annual PhD Enrolments:</b><br /> 100+ scholars across various disciplines</li>
            <li><b>Why Choose IIT Palakkad:</b><br /> New IIT with growing research reputation, modern labs, and strong faculty.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="kerala-university-details-container">
          <div className="kerala-phdimg" />
          <h2 className="kerala-university-title">{universityData.fullName}</h2>
          <div className="kerala-details-grid">
            {Object.entries(universityData)
              .filter(([key]) => key !== "fullName")
              .map(([key, val], idx) => (
                <div className="kerala-detail-item" key={idx}>
                  <span className="kerala-detail-label">
                    {{
                      shortName: "Popularly Known As",
                      phdEntranceExam: "PhD Entrance Exam",
                      qualificationRequired: "Qualification Required",
                      workExperience: "Work Experience",
                      modeOfPhd: "Mode of PhD",
                      documentsRequired: "Documents Required",
                      applicationTimeline: "Application Timeline",
                      approxFee: "Approx. Fee",
                      scholarshipAvailability: "Scholarship/Fellowship"
                    }[key]}
                  </span>
                  {Array.isArray(val) ? (
                    <ul className="kerala-detail-list">
                      {val.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <span className="kerala-detail-value">{val}</span>
                  )}
                </div>
              ))
            }
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
            <li>New IIT with modern infrastructure</li>
            <li>Well-funded research labs</li>
            <li>GATE/NET–JRF fellowships available</li>
            <li>Collaborations with industry & academia</li>
            <li>Strong computer science & data sciences focus</li>
          </ul>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="kerala-alluniversityfaq-section">
      <h2>FAQs – PhD Admission (IIT Palakkad)</h2>
      <div className="kerala-faq-items">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      {/* JSON‑LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":faqs.map(f=>({
          "@type":"Question","name":f.question,
          "acceptedAnswer":{"@type":"Answer","text":f.answer}
        }))
      })}}/>
    </section>
  </div>
);

export default IitPalakkad;
