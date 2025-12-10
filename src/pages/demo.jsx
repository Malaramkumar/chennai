import './Subheading.scss';
import Subsidebar from './Subsidebar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';


const faqs = [
  {
    question: "What is the eligibility for PhD admission at Anna University?",
    answer: "You must have a Master's Degree in a relevant discipline with at least 55% marks or 5.5 CGPA. GATE/NET/SLET/M.Phil. qualifiers may be exempted from the entrance test."
  },
  {
    question: "Is part-time PhD available at Anna University?",
    answer: "Yes, Anna University offers part-time PhD programs for working professionals in academia, industry, and government sectors."
  },
  {
    question: "What is the selection process for PhD at Anna University?",
    answer: "Selection is based on entrance exam, interview, academic record, and research proposal. Exempted candidates may be called directly for interview."
  },
  {
    question: "Does Anna University provide fellowship or stipend for PhD scholars?",
    answer: "Yes. Schemes like Anna University Research Fellowship (AURF), UGC JRF/SRF, DST-INSPIRE, and other sponsored fellowships are available."
  },
  {
    question: "How often does Anna University open PhD admissions?",
    answer: "PhD admissions are usually conducted twice a year: January and July sessions. Notifications are published on the university website."
  },
  {
    question: "Can I change my research supervisor after joining?",
    answer: "In special cases, a supervisor can be changed with prior approval from the university and a valid justification."
  },
  {
    question: "What is the minimum duration of the PhD program at Anna University?",
    answer: "The minimum duration is 3 years for full-time and 4 years for part-time candidates."
  }
];

const universityData = {
  fullName: 'PhD Admission in Anna University Chennai',
  shortName: 'Anna University Chennai',
  phdEntranceExam:
    'Written Test and Interview (Exemptions: UGC-NET, CSIR-NET, SLET, GATE / M.Phil.)',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.Com., etc.) with at least 55% marks or 5.5 CGPA on 10-point scale',
  workExperience: 'Part-time PhD typically requires relevant work experience.',
  modeOfPhd: 'Full time / Part time',
  documentsRequired: [
    'Filled online application form',
    'UG and PG degree certificates with mark sheets',
    'Community certificate (for reservation category)',
    'Experience certificate (for part-time candidates)',
    'GATE/NET/SLET/M.Phil. certificate (if applicable)',
    'NOC from employer (for employed applicants)',
    'Research proposal or area of interest',
    'Aadhaar card/ID proof',
    'Passport-size photographs',
  ],
  applicationTimeline: 'January Session (Oct–Nov) / July Session (Mar–Apr)',
  approxFee: '₹20,000 – ₹30,000 per semester + ₹900 application fee',
  scholarshipAvailability:
    'University Research Fellowship, UGC (JRF/SRF), DST-INSPIRE, CSIR, AICTE/Industry-funded fellowships',
  SearchKeywordsforPhDAdmission: [
    'Anna University PhD admission eligibility entrance exam',
    'Anna University PhD qualification and documents required',
    'Anna University PhD part time full time mode',
    'Anna University PhD fee structure and scholarships',
    'Anna University PhD application dates and process',
    'Anna University PhD work experience requirement',
    'Anna University research fellowship for PhD',
    'Anna University PhD NOC and employer requirements',
    'Anna University PhD admission portal cfr.annauniv.edu',
    'Anna University PhD syllabus entrance test pattern',
    'PhD admission in Anna University',
    'Anna University PhD 2025',
    'Anna University Chennai PhD admission',
    'PhD programs in Anna University',
    'Research admission in Anna University',
  ],
};

const Subheading = () => {
  useEffect(() => {
      document.title = "PhD Admission in Anna University Chennai";
    },[]);  

  return (
    <div className="main">
      <Helmet>
        {/* Page Title */}
        <title>PhD Admission in Anna University Chennai | Narpavitech</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get expert PhD research proposal writing services in Chennai from Narpavitech – a leading name in PhD guidance and support."
        />

        {/* Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Author */}
        <meta name="author" content="Narpavitech - PhD Project Center, Chennai" />

        {/* Language */}
        <meta name="language" content="en" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="PhD Research Proposal Writing Services in Chennai | Narpavitech" />
        <meta
          property="og:description"
          content="Get expert PhD research proposal writing services in Chennai from Narpavitech – a leading name in PhD guidance and support."
        />
        <meta property="og:url" content="https://www.narpavitech.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.narpavitech.in/images/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhD Research Proposal Writing Services in Chennai | Narpavitech" />
        <meta
          name="twitter:description"
          content="Get expert PhD research proposal writing services in Chennai from Narpavitech – a leading name in PhD guidance and support."
        />
        <meta name="twitter:image" content="https://www.narpavitech.in/images/preview.jpg" />
      </Helmet>

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">

          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Anna University</h3>
            <ul>
              <li><b>Year of Establishment:</b> Established in 1978, Anna University is a premier hub for engineering and technology.</li>
              <li><b>Year of PhD Admission Establishment:</b><br />PhD programs began decades ago via the Centre for Research, driving academic excellence.</li>
              <li><b>Annual PhD Enrolment and Exit Details:</b><br />2,200+ scholars in main campuses and 13,000+ in affiliates reflect strong PhD output.</li>
              <li><b>Why this University is a Premier Choice for PhD Studies:</b><br /> PhD Admission in Chennai Anna University offers expert faculty, vast research scope, and top-tier facilities—making it a preferred research destination.</li>
            </ul>
          </div>

          {/* Center Content */}
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
                <span className="detail-value">{universityData.applicationTimeline}</span>
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

          {/* Right Sidebar */}
          <div className="side-box right-box">
              {/* <h3>Search Keywords for PhD Admission</h3> */}
            <ul>
              {universityData.SearchKeywordsforPhDAdmission.map((keyword, idx) => (
                <li key={idx}>{keyword}</li>
              ))}
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


export default Subheading ;
