import React from "react";
import "./Proposal.scss";
import Subsidebar from "../pages/Subsidebar"

const faqs = [
  {
    question: "What is a PhD research proposal?",
    answer: "A PhD research proposal is a detailed plan outlining what you intend to study, why it is important, and how you will do it."
  },
  {
    question: "How long should a PhD research proposal be?",
    answer: "Most proposals range between 1,500 and 3,000 words, depending on university guidelines."
  },
  {
    question: "Do you help with plagiarism checks?",
    answer: "Yes, every proposal we deliver undergoes plagiarism screening and proper citation checks."
  }
];

const ProposalGuide = () => {
  return (
    <section className="proposal-wrapper">
      <Subsidebar/>
      <h1 className="proposal-title">How to Draft a Winning PhD Research Proposal</h1>
      <p className="proposal-subtitle">
        Crafted with Expertise | Trusted by 1000+ Scholars | Backed by 14+ Years of Excellence at Narpavi Research Institute
      </p>

      <div className="proposal-section">
        <h2>🎓 Your PhD Journey Starts with a Strong Proposal</h2>
        <p>
          Your PhD research proposal is more than just paperwork — it is your first impression on the admission committee and your potential guide...
        </p>
      </div>

      <div className="proposal-section">
        <h2>🧱 Structure of a PhD Research Proposal</h2>
        <p>
          A well-structured PhD research proposal typically includes eight essential components...
        </p>
      </div>

      <div className="proposal-section">
        <h2>⚠️ Common Mistakes to Avoid in PhD Research Proposals</h2>
        <ul className="proposal-list">
          <li>Vague Objectives – Avoid unclear goals or broad themes.</li>
          <li>Weak Literature Review – Don’t copy-paste from journals without analysis.</li>
          <li>Overly Ambitious Scope – Be realistic about what can be achieved.</li>
          <li>No Clarity in Methodology – Avoid generic methods without justification.</li>
          <li>Grammar or Formatting Errors – Poorly written proposals are instantly rejected.</li>
        </ul>
        <p>🚫 Avoid these traps — our experienced editors will proofread and polish your proposal to perfection.</p>
      </div>

      <div className="proposal-highlight">
        <h3>Why Choose Narpavi Research Institute?</h3>
        <ul className="proposal-list">
          <li>Domain Experts from Science, Engineering, Commerce, Arts & More</li>
          <li>100% Custom Proposal Drafting</li>
          <li>Alignment with University Guidelines (Anna University, Madras University, etc.)</li>
          <li>Proposal Writing + Review + Plagiarism Check</li>
        </ul>
        <p>
          We don’t just write — we strategize, refine, and mentor every scholar toward academic excellence.
        </p>
      </div>

      <div className="proposal-keywords">
        <h4>🔍 Suggested Keywords</h4>
        <ul>
          <li>PhD research proposal writing</li>
          <li>How to write PhD proposal</li>
          <li>PhD proposal Tamil Nadu</li>
          <li>PhD admission research proposal help</li>
          <li>PhD proposal format India</li>
          <li>Common mistakes in research proposal</li>
          <li>Research proposal structure for PhD</li>
          <li>PhD proposal guidance service</li>
          <li>Winning PhD proposal strategy</li>
          <li>Best PhD proposal writers in India</li>
        </ul>
      </div>

       <section className="proposalfaq-section">
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

    </section>
  );
};

export default ProposalGuide;
