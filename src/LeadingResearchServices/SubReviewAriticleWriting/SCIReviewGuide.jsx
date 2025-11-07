import React from "react";
import "./SCIReviewGuide.scss";

const faqs = [
  {
    question: "How many references are included in an SCI review article?",
    answer: "Our SCI-standard review articles include 100–200+ citations from peer-reviewed, high-impact sources relevant to your field."
  },
  {
    question: "Do you ensure SCI journal formatting?",
    answer: "Yes. We strictly follow journal-specific formatting guidelines such as APA, IEEE, Vancouver, or Springer templates."
  },
  {
    question: "Can I request revisions after receiving the draft?",
    answer: "Absolutely. We provide unlimited revisions until submission or approval, based on your feedback."
  },
  {
    question: "Is Turnitin plagiarism reporting included?",
    answer: "Yes. Every SCI review article is run through Turnitin and Grammarly before delivery to ensure originality and language clarity."
  }
];

const SCIReviewGuide = () => {
  return (
    <div className="sci-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about">Why SCI Journals?</a></li>
          <li><a href="#writing">Our Writing Approach</a></li>
          <li><a href="#domains">Domains We Cover</a></li>
          <li><a href="#structure">SCI Review Structure</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Review Article Writing Services for SCI-Indexed Journals</h1>
        <p>
          At Narpavi Research Institute, we deliver expertly crafted review articles tailored to meet the scholarly, analytical, and formatting standards of top-tier SCI journals like Springer, Elsevier, and Nature.
        </p>

        <section id="about">
          <h2>🎯 What Makes SCI Review Articles Unique?</h2>
          <ul>
            <li>📈 High impact factors and global reputation</li>
            <li>📝 Rigorous peer-review and editorial filtering</li>
            <li>🔬 Expectation of critical depth and academic integrity</li>
            <li>📊 Preference for structured, evidence-backed content</li>
          </ul>
          <p>
            To be accepted in SCI-indexed journals, your article must demonstrate a deep understanding of existing literature and provide critical insights and research directions.
          </p>
        </section>

        <section id="writing">
          <h2>✍️ How We Write SCI Review Articles</h2>
          <ul>
            <li>🔍 Topic selection based on trending gaps</li>
            <li>📚 Literature collection from 100–200+ SCI-recognized sources</li>
            <li>📂 Thematic structuring for conceptual clarity</li>
            <li>🔎 Comparative analysis of methods, results, contradictions</li>
            <li>🧾 Journal-specific formatting (APA, IEEE, etc.)</li>
            <li>✅ Plagiarism check and QA via Turnitin and Grammarly</li>
          </ul>
        </section>

        <section id="domains">
          <h2>🧠 Subject Areas We Cover</h2>
          <ul>
            <li>🧬 Life Sciences & Healthcare: Biomedical, Pharma, Clinical</li>
            <li>⚙️ Engineering: AI, IoT, Mechanical, Civil, Robotics</li>
            <li>💻 Computer Science & Analytics</li>
            <li>🌱 Environment & Renewable Energy</li>
            <li>📈 Management, Economics, and Social Sciences</li>
            <li>🧪 Interdisciplinary Applied Research</li>
          </ul>
        </section>

        <section id="structure">
          <h2>📊 Structured for SCI Success</h2>
          <table className="structure-table">
            <thead>
              <tr><th>Element</th><th>Our Deliverables</th></tr>
            </thead>
            <tbody>
              <tr><td>Literature Depth</td><td>100–200+ citations from SCI sources</td></tr>
              <tr><td>Plagiarism</td><td>100% original + Turnitin report</td></tr>
              <tr><td>Formatting</td><td>APA, IEEE, Vancouver, Springer formats</td></tr>
              <tr><td>Flow</td><td>Thematically organized with logical transitions</td></tr>
              <tr><td>Gaps</td><td>Clearly highlighted future research directions</td></tr>
              <tr><td>Tone</td><td>Academic, critical, and concise</td></tr>
              <tr><td>Delivery</td><td>7–12 working days</td></tr>
            </tbody>
          </table>
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
          <li><a href="#">Journal Selection & Submission</a></li>
          <li><a href="#">SCI Paper Editing Support</a></li>
          <li><a href="#">Literature Gap Identification</a></li>
          <li><a href="#">Proposal to Review Conversion</a></li>
        </ul>

        <div className="cta-box">
          <h4>Need SCI Journal Support?</h4>
          <p>We’ll craft a journal-ready, impactful review article for SCI publication.</p>
          <a href="#" className="cta-button">Start Your SCI Review Project</a>
        </div>
      </aside>
    </div>
  );
};

export default SCIReviewGuide;
