import '../pages/Subheading.scss';
import Subsidebar from '../pages/Subsidebar';

const faqs = [
  {
    question: "Is the PhD entrance exam compulsory at Vinayaka Mission’s Research Foundation?",
    answer: "Yes, the entrance exam is mandatory unless you are exempted through qualifying national-level exams like UGC-NET, CSIR-NET, GATE, SLET, etc."
  },
  {
    question: "What is the minimum academic qualification required?",
    answer: "You must have a Master’s degree (like M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with at least 55% marks or a 6.0 CGPA on a 10-point scale."
  },
  {
    question: "Can working professionals apply for part-time PhD?",
    answer: "Yes, part-time PhD is open to working professionals, provided they have relevant experience and submit an NOC from their employer."
  },
  {
    question: "When can I apply for the PhD program?",
    answer: "VMRF conducts admissions in two sessions: April and October. Applications start 1–2 months in advance, with entrance exams and interviews held in April and October respectively."
  },
  {
    question: "What documents are required for the application?",
    answer: "Documents include UG/PG certificates, ID proof, passport photos, research proposal, experience certificate (for part-time), and proof of qualifying exam (if applicable)."
  },
  {
    question: "How much is the annual tuition fee?",
    answer: "Annual fees are ₹50,000 for full-time, ₹75,000 for external part-time, and ₹25,000 for internal part-time PhD candidates."
  },
  {
    question: "Is financial assistance or fellowship available?",
    answer: "Yes, VMRF offers fellowships and financial support to eligible full-time research scholars, typically ranging from ₹25,000 to ₹30,000 per month."
  },
  {
    question: "What are the key advantages of doing PhD at VMRF?",
    answer: "VMRF offers NAAC A-grade infrastructure, experienced mentors, interdisciplinary opportunities, and research labs across medicine, pharmacy, engineering, and arts."
  }
];

const universityData = {
  fullName: 'PhD Admission in Salem Vinayaka Mission’s Research Foundation',
  shortName: 'VMRF',
  phdEntranceExam: 'Mandatory for all applicants. Some may be exempt if qualified through national-level exams like UGC-NET, CSIR-NET, GATE, SLET, etc.',
  qualificationRequired:
    'Master’s Degree (e.g., M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with 55% marks or CGPA 6.0/10',
  workExperience:
    'Professional experience is required for part-time Ph.D. applicants',
  modeOfPhd: 'Full-Time / Part-Time',
  documentsRequired: [
    'Filled Application Form (downloaded from VMRF official website)',
    'Photo ID Proof (Aadhaar / Passport / PAN / Voter ID)',
    '2 to 4 recent Passport Size Photographs',
    'UG & PG Degree Certificates (Provisional/Degree + Consolidated Mark Sheets)',
    'M.Phil. Certificate (if applicable)',
    'Experience Certificate (for Part-Time applicants)',
    'No Objection Certificate (NOC) from employer (for employed applicants)',
    'Category Certificate (SC/ST/OBC/Minority, if applicable)',
    'Proof of Qualifying Exam (UGC-NET / CSIR-NET / GATE / Fellowship etc., if exempted)',
    'Research Proposal or Statement of Purpose (2–3 pages)',
    'Migration/Transfer Certificate from last university attended',
    'Demand Draft or Online Payment Receipt (₹1,000 in favor of "VMRF(DU)PHD", payable at Salem)',
  ],
  applicationTimeline: `🔸 April Session:\nApplication Start: Feb/March\nDeadline: Late March or Early April\nExam & Interview: April\nStart: May\n\n🔸 October Session:\nApplication Start: Aug/Sept\nDeadline: Late Sept or Early Oct\nExam & Interview: October\nStart: November`,
  approxFee:
    `🎓 Annual Tuition Fees:\nFull-Time: ₹50,000/year\nPart-Time (External): ₹75,000/year\nPart-Time (Internal): ₹25,000/year`,
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
            <h3>About Vinayaka Mission’s Research Foundation (VMRF)</h3>
<ul>
  <li><b>Year of Establishment:</b> Originally founded in 1982 as a pharmacy college, it became a Deemed‑to‑be University in 2001.</li>
  <li><b>Year of PhD Admission Establishment:</b><br/>PhD programmes were introduced shortly after achieving deemed status, spanning medicine, engineering, management, arts & science and more.</li>
  <li><b>Annual PhD Enrolment and Exit Details:</b><br/>The university admits roughly 70–120 PhD scholars each year across disciplines like Engineering, Health Sciences, Pharmacy, Arts & Management.</li>
  <li><b>Why this University is a Premier Choice for PhD Studies:</b><br/>VMRF‑DU offers A‑grade NAAC accreditation, multi‑disciplinary faculty, research fellowships (₹25–30k/month), and access to well‑equipped labs across its constituent colleges.</li>
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
              <li>UGC-recognized research degrees across diverse disciplines</li>
              <li>Dedicated research coordinators and faculty mentors</li>
              <li>Affordable tuition with fellowships for eligible scholars</li>
              <li>Strong focus on community-based and applied research</li>
              <li>Flexible schedules for part-time and employed researchers</li>
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
