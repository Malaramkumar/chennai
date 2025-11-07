import React from 'react';
import './UniversitySelection.scss';
import Subsidebar from "../pages/Subsidebar"
const faqs = [
  {
    question: "How do I choose the right PhD supervisor?",
    answer: "Look for someone whose research aligns with your interests, has a strong publication record, and is supportive of students."
  },
  {
    question: "Can I change my supervisor during the PhD?",
    answer: "Yes, but it's subject to university policy and should be approached carefully."
  }
];


const UniversitySelection = () => {
  return (
    <div className="UniversitySelection-container">
        <Subsidebar/>
      <section className="UniversitySelection-hero">
        <h1>Choosing the Right University for Your PhD</h1>
        <p>A Comprehensive Guide for Aspiring Scholars</p>
      </section>

      <section className="UniversitySelection-section">
        <h2>1. Alignment with Research Interests and Faculty Expertise</h2>
        <p>
          Your research should align with the faculty's expertise. Top Indian universities such as IISc Bangalore, IIT Madras, IIT Delhi, JNU, and IIIT-Hyderabad have world-class research clusters.
        </p>
        <ul>
          <li>🧪 IISc Bangalore – Strong interdisciplinary research</li>
          <li>🔬 IIT Madras – First data science research facility</li>
          <li>🤖 IIIT-H – AI and robotics leaders</li>
        </ul>
      </section>

      <section className="UniversitySelection-section">
        <h2>2. Research Infrastructure and Facilities</h2>
        <p>
          Well-equipped labs, modern libraries, and interdisciplinary spaces are vital. Institutions like IISc, IIT Madras, and IIIT-H lead in this area.
        </p>
      </section>

      <section className="UniversitySelection-section">
        <h2>3. Funding, Stipends, and Financial Sustainability</h2>
        <table className="UniversitySelection-table">
          <thead>
            <tr>
              <th>University</th>
              <th>Stipend Range (Monthly)</th>
              <th>Funding Type</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>IISc Bangalore</td><td>₹37,000 → ₹42,000</td><td>CSIR/UGC/Institute</td></tr>
            <tr><td>IIT Madras</td><td>₹31,000 → ₹35,000</td><td>MHRD, Assistantships</td></tr>
            <tr><td>IIIT-Hyderabad</td><td>₹30,000 – ₹40,000</td><td>Institute/Project</td></tr>
            <tr><td>Anna University</td><td>₹18,000 – ₹25,000</td><td>State/University</td></tr>
          </tbody>
        </table>
        <p>Note: Most fellowships upgrade from JRF to SRF after 2 years.</p>
      </section>

      <section className="UniversitySelection-section">
        <h2>4. Post-PhD Career Outcomes and Salary Trends</h2>
        <table className="UniversitySelection-table">
          <thead>
            <tr>
              <th>Discipline</th>
              <th>Avg. Salary (INR/year)</th>
              <th>Top Employers</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Computer Science / AI</td><td>₹15–28 LPA</td><td>Google, Microsoft, TCS R&D</td></tr>
            <tr><td>Life Sciences</td><td>₹8–15 LPA</td><td>Biocon, NCBS, Pharma</td></tr>
            <tr><td>Social Sciences</td><td>₹6–12 LPA</td><td>UNDP, RBI, Think Tanks</td></tr>
          </tbody>
        </table>
      </section>

      <section className="UniversitySelection-section">
        <h2>5. Most In-Demand PhD Degrees</h2>
        <table className="UniversitySelection-table">
          <thead>
            <tr>
              <th>University</th>
              <th>Popular Fields</th>
              <th>Reputation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>IISc Bangalore</td><td>STEM, AI, Materials</td><td>Exceptional</td></tr>
            <tr><td>IIT Bombay</td><td>Engineering, Data</td><td>Highly Reputed</td></tr>
            <tr><td>JNU Delhi</td><td>Social Sciences</td><td>Policy Impact</td></tr>
          </tbody>
        </table>
      </section>

      <section className="UniversitySelection-section">
        <h2>6. Additional Considerations</h2>
        <ul>
          <li>🌐 Global Linkages: IITs, IISc have MoUs with international universities.</li>
          <li>⏳ Duration: 4–6 years based on discipline.</li>
          <li>🏙️ Campus Ecosystem: City-based exposure in Bangalore, Chennai, Hyderabad.</li>
        </ul>
      </section>

      <section className="UniversitySelection-conclusion">
        <h3>Final Advice</h3>
        <p>
          Choosing a PhD program is about more than rankings. Consider your research interests, mentorship, financial stability, and the ecosystem. Speak with alumni and professors before applying.
        </p>
      </section>
        <section className="universityselectionfaq-section">
        <h2>FAQs on Topic Selection</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* ✅ Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
    </section>

    </div>
  );
};

export default UniversitySelection;
