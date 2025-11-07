import React from "react";
import "./SystematicReviewGuide.scss";

const faqs = [
  {
    question: "What is a PRISMA-compliant systematic review?",
    answer: "It's a systematic review that follows the PRISMA guidelines to ensure transparency, reproducibility, and quality in reporting research findings."
  },
  {
    question: "Is protocol registration mandatory?",
    answer: "While not always required, registering your protocol (e.g., in PROSPERO) increases credibility and prevents research duplication."
  },
  {
    question: "Can Narpavi help with meta-analysis too?",
    answer: "Yes. Our team includes statisticians who handle quantitative synthesis, subgroup analysis, and bias control."
  },
  {
    question: "How long does it take to complete a systematic review?",
    answer: "Typically, 12–15 working days depending on scope, domain, and data complexity."
  }
];

const SystematicReviewGuide = () => {
  return (
    <div className="sr-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#what">What is a Systematic Review?</a></li>
          <li><a href="#prisma">PRISMA-Based Process</a></li>
          <li><a href="#expertise">Our Expertise</a></li>
          <li><a href="#formatting">Formatting & Compliance</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Systematic Review Article Writing</h1>
        <p>
          At Narpavi Research Institute, we craft PRISMA-compliant systematic review articles with precision, clarity, and scholarly depth—tailored for submission to journals like BMJ, Springer, and Elsevier.
        </p>

        <section id="what">
          <h2>🔍 What Makes a Review ‘Systematic’?</h2>
          <p>
            A systematic review is a methodologically driven synthesis of all relevant studies on a well-defined research question.
          </p>
          <ul>
            <li>✅ Clear objectives and inclusion/exclusion criteria</li>
            <li>🔬 Structured data extraction and quality assessment</li>
            <li>📊 Synthesis supported by meta-analysis</li>
            <li>📈 Evidence-based outputs for clinical or academic use</li>
          </ul>
        </section>

        <section id="prisma">
          <h2>📑 PRISMA-Based Review Articles: A Gold Standard</h2>
          <ul>
            <li>📘 Protocol registration (e.g., PROSPERO)</li>
            <li>🔍 Search across 6–12 databases (PubMed, Scopus, Cochrane)</li>
            <li>🧾 Screening, selection, and quality appraisal (CASP, GRADE)</li>
            <li>📊 Meta-analysis or narrative synthesis</li>
            <li>🗺 PRISMA flow diagram for visualizing selection</li>
          </ul>
        </section>

        <section id="expertise">
          <h2>💼 Narpavi’s Expertise in Medical & Social Sciences</h2>
          <ul>
            <li>🏥 Public Health, Medicine, Clinical Trials</li>
            <li>🧠 Psychology, Behavioral & Social Sciences</li>
            <li>📊 Health Policy, Development Studies, Education</li>
          </ul>
          <p>
            Our team includes PhDs, clinicians, epidemiologists, and statisticians. We also support meta-analytic modeling and bias detection.
          </p>
        </section>

        <section id="formatting">
          <h2>📈 Journal-Specific Formatting & Compliance</h2>
          <p>
            We format your systematic review for top publishers like BMJ, Springer, Elsevier, and Wiley—compliant with Vancouver, AMA, or APA styles.
          </p>
          <ul>
            <li>🧾 Evidence-structured templates</li>
            <li>📚 100–200 sources curated per project</li>
            <li>🔁 Free revisions until journal acceptance</li>
            <li>⏱ Delivery: 12–15 working days</li>
          </ul>
        </section>

        <section id="faq" className="faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Related Services</h3>
        <ul>
          <li><a href="#">Meta-Analysis Support</a></li>
          <li><a href="#">Medical Manuscript Editing</a></li>
          <li><a href="#">Evidence-Based Literature Review</a></li>
          <li><a href="#">Thesis Systematic Chapter</a></li>
        </ul>

        <div className="cta-box">
          <h4>Need Systematic Review Help?</h4>
          <p>Get PRISMA-compliant support for high-impact publication.</p>
          <a href="#" className="cta-button">Start Your Review Now</a>
        </div>
      </aside>
    </div>
  );
};

export default SystematicReviewGuide;
