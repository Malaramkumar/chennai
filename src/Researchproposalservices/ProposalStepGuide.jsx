import React from "react";
import { Helmet } from "react-helmet";
import "./ProposalStepGuide.scss"
const faqs = [
  {
    question: "What should be included in a strong engineering proposal?",
    answer: "A strong proposal includes a clear title, background context, SMART objectives, technical methodology, expected impact, timeline, budget (if needed), and references."
  },
  {
    question: "How do I write SMART research objectives?",
    answer: "SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound. Break complex goals into achievable milestones with defined timelines."
  },
  {
    question: "What tools should I mention in the methodology?",
    answer: "Mention engineering tools relevant to your domain — e.g., MATLAB, ANSYS, Python, Simulink, CAD, CAE, microcontrollers, sensors, or lab equipment."
  }
];

const EngineeringProposalStepGuide = () => {
  return (
    <section className="step-guide">
      <Helmet>
        <title>Step-by-Step Engineering Proposal Writing Guide | Narpavi</title>
        <meta
          name="description"
          content="A comprehensive guide to writing engineering research proposals. Learn key sections, SMART objectives, methodology, and more."
        />
        <meta
          name="keywords"
          content="engineering proposal writing, PhD proposal help, methodology for research, engineering research guidance, Narpavi proposal support"
        />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <div className="container">
        <h1>🛠 Step-by-Step Guide for Research Proposal Writing</h1>
        <h2>For Engineering Scholars & PhD Applicants</h2>

        <p className="intro">
          Engineering research proposals aren't just documents — they are blueprints for innovation. Whether you're working on AI systems, renewable energy, or materials engineering, a strong proposal can set your research apart and secure approvals, funding, or admission.
        </p>

        <div className="section">
          <h3>🔧 Section 1: What Is a Research Proposal?</h3>
          <p>
            A research proposal is a structured plan that outlines what you want to research, why it's important, and how you intend to carry it out. It should:
          </p>
          <ul>
            <li>Address a real-world engineering problem</li>
            <li>Demonstrate technical feasibility</li>
            <li>Prove your understanding of the field</li>
          </ul>
        </div>

        <div className="section">
          <h3>📐 Section 2: Core Components – Explained</h3>
          <ol>
            <li>
              <strong>📌 Title:</strong> Be clear and specific.
              <br />
              <em>Example:</em> “Performance Optimization of Solar-Powered EV Charging Stations Using AI-Based Load Prediction”
            </li>
            <li>
              <strong>📚 Introduction & Context:</strong> What problem exists in society or industry and why is it urgent?
              <br />
              <em>Tip:</em> Reference government missions or industry stats.
            </li>
            <li>
              <strong>🎯 Research Objectives:</strong> Make them SMART.
              <br />
              <em>Example:</em> To develop a predictive model for energy demand in microgrids using MATLAB simulations.
            </li>
            <li>
              <strong>🛠️ Methodology:</strong> Include tools, simulations, design platforms, and validation methods.
            </li>
            <li>
              <strong>📊 Expected Results & Impact:</strong> Focus on performance, applications, and societal benefits.
            </li>
            <li>
              <strong>🧠 Innovation & Research Gap:</strong> Show what's novel and why it matters.
            </li>
            <li>
              <strong>⏱️ Timeline:</strong> Use Gantt-style phase chart:
              <ul>
                <li>Month 1: Topic Finalization</li>
                <li>Months 2–3: Literature Review</li>
                <li>Months 4–6: Methodology Development</li>
                <li>Months 7–10: Implementation</li>
                <li>Months 11–12: Testing & Analysis</li>
              </ul>
            </li>
            <li>
              <strong>💵 Budget & Tools (Optional):</strong> Hardware, software licenses, consumables, etc.
            </li>
            <li>
              <strong>📎 References:</strong> Use IEEE or APA style. Prefer high-quality journals and conferences.
            </li>
          </ol>
        </div>

        <div className="section">
          <h3>📌 Quick Checklist for Engineering Proposals</h3>
          <ul>
            <li>✅ Clear and technical title</li>
            <li>✅ Practical engineering relevance</li>
            <li>✅ Visuals: system diagrams/workflows</li>
            <li>✅ Identified research gap</li>
            <li>✅ Clear objectives, tools, and outcomes</li>
            <li>✅ Timeline and budget (if required)</li>
            <li>✅ Properly formatted references</li>
          </ul>
        </div>

        <div className="section cta">
          <h3>📥 Need Help Drafting Yours?</h3>
          <p>
            We offer engineering-focused research proposal writing from topic selection to formatting — for IITs, NITs, and universities across India.
          </p>
          <p>📞 <strong>Talk to an Expert Today!</strong></p>
        </div>

        <section className="alluniversityfaq-section">
          <h2>FAQs on Engineering Research Proposals</h2>
          <div className="faq-items">
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default EngineeringProposalStepGuide;
