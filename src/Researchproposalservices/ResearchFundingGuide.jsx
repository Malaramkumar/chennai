import React from "react";
import { Helmet } from "react-helmet";
import "./ResearchFundingGuide.scss"

const faqs = [
  {
    question: "What makes a proposal suitable for funding?",
    answer: "A fundable proposal includes a strong problem statement, innovative approach, clear budget, timeline, and aligns with the funding body's priorities."
  },
  {
    question: "Should I use visuals in the proposal?",
    answer: "Yes. Visuals like Gantt charts, diagrams, and flowcharts help communicate technical details effectively and increase proposal clarity."
  },
  {
    question: "How detailed should the budget be?",
    answer: "Break down costs transparently — include equipment, software, manpower, travel, and contingencies. Ensure alignment with project goals."
  }
];

const ResearchFundingGuide = () => {
  return (
    <section className="funding-guide">
      <Helmet>
        <title>Writing Research Proposals for Funding | Narpavi Research Institute</title>
        <meta
          name="description"
          content="A complete step-by-step guide for writing engineering research proposals that secure funding. Learn problem framing, budgeting, timelines, and more."
        />
        <meta
          name="keywords"
          content="PhD research funding, engineering proposals, research grants, proposal writing help, Narpavi funding support"
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
        <h1>📑 Writing Research Proposals for Funding</h1>
        <h2>Turn Your Vision into a Funded Reality</h2>

        <div className="section">
          <h3>🎯 Start with a Strong Problem Statement</h3>
          <p>
            Clearly define the real-world problem your research addresses. Use data, current trends, or gaps in technology to highlight urgency and relevance.<br />
            ✅ Funders fund solutions, not just curiosity.
          </p>
        </div>

        <div className="section">
          <h3>💡 Propose a Unique, Practical Solution</h3>
          <p>
            Describe your research idea and why it’s innovative. What makes your approach different from existing methods? What’s the engineering value proposition?<br />
            ⚙️ Tip: Use visuals (diagrams, schematics, flowcharts) to communicate complex systems simply.
          </p>
        </div>

        <div className="section">
          <h3>🔬 Demonstrate Technical and Scientific Soundness</h3>
          <p>
            Outline your methodology with clarity:
            <ul>
              <li>What experiments or models will you use?</li>
              <li>What tools or technologies will be involved?</li>
              <li>How will success be measured?</li>
            </ul>
            📌 Include milestones and expected outcomes.
          </p>
        </div>

        <div className="section">
          <h3>💰 Detail a Realistic Budget</h3>
          <p>
            Break down your funding request:
            <ul>
              <li>Equipment & materials</li>
              <li>Software/tools/licenses</li>
              <li>Personnel or assistants</li>
              <li>Travel or fieldwork</li>
              <li>Contingencies</li>
            </ul>
            📌 Keep it transparent, justified, and aligned with your scope.
          </p>
        </div>

        <div className="section">
          <h3>📅 Include a Clear Timeline</h3>
          <p>
            Use a Gantt chart or roadmap to show how your research will unfold over weeks or months.
            <ul>
              <li>What will happen when</li>
              <li>How long each phase takes</li>
              <li>Key deliverables at each stage</li>
            </ul>
          </p>
        </div>

        <div className="section">
          <h3>🌍 Highlight Impact</h3>
          <p>
            Show how your research aligns with broader goals — sustainability, digital transformation, smart systems, etc. Will it benefit industry, society, policy, or global challenges like climate change or health tech?
          </p>
        </div>

        <div className="section">
          <h3>📚 Cite Relevant Work & Demonstrate Expertise</h3>
          <p>
            Include a short literature review to prove you’re building on existing knowledge. Emphasize your qualifications and institutional backing.<br />
            🔍 Funders trust researchers who show both vision and credibility.
          </p>
        </div>

        <div className="section">
          <h3>✍️ Write with Clarity and Conviction</h3>
          <p>
            Keep your tone professional and easy to follow. Avoid jargon overload. Be persuasive but factual.
          </p>
        </div>

        <div className="section">
          <h3>📌 Align with the Funder’s Mission</h3>
          <p>
            Before submitting, tailor your proposal to match the funding agency’s priorities or grant theme. Use keywords from their guidelines.
          </p>
        </div>

        <div className="section">
          <h3>🤝 How Narpavi Research Institute Can Help</h3>
          <p>
            Whether you're a student, academic, or innovator — our experts guide you from topic selection to proposal review. We support structuring, writing, and aligning with funding expectations.
          </p>
          <p>
            🚀 Let’s turn your ideas into impactful, funded research. <br /> 📞 Contact us today.
          </p>
        </div>

        <section className="alluniversityfaq-section">
          <h2>FAQs on Research Proposal Funding</h2>
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

export default ResearchFundingGuide;
