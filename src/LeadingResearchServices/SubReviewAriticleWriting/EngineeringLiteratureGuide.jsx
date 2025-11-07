import React from "react";
import "./EngineeringLiteratureGuide.scss";
import Side from "../Sidebar";

const faqs = [
  {
    question: "What is the difference between a literature article and a research article?",
    answer: "A literature article reviews and synthesizes existing research without presenting new experimental data, while a research article presents original findings."
  },
  {
    question: "Which databases do you use for sourcing articles?",
    answer: "We use IEEE Xplore, Springer, Elsevier, Scopus, Web of Science, and domain-specific databases depending on the topic."
  },
  {
    question: "Do you provide journal-specific formatting?",
    answer: "Yes. We format the article as per journal submission guidelines, including IEEE, APA, or Harvard citation styles."
  },
  {
    question: "Is the article plagiarism-free?",
    answer: "Absolutely. Every article is checked using Turnitin and Grammarly for originality, grammar, and academic tone."
  }
];

const EngineeringLiteratureGuide = () => {
  return (
    <div className="eng-lit-page-container">
      <Side />
      <div className="eng-lit-layout">
        {/* Left Sidebar */}
        <aside className="eng-lit-left-sidebar">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#overview">What Is a Literature Article?</a></li>
            <li><a href="#framework">Writing Framework</a></li>
            <li><a href="#domains">Engineering Domains</a></li>
            <li><a href="#journals">Target Journals</a></li>
            <li><a href="#narpavi-edge">Why Narpavi?</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="eng-lit-main-content">
          <h1>Literature Article Writing Services for Engineering</h1>
          <p>
            At Narpavi Research Institute, we craft technical, structured, and scholarly literature articles tailored for top-tier engineering journals.
          </p>

          <section id="overview">
            <h2>🛠 What Is a Literature Article in Engineering?</h2>
            <ul>
              <li>📚 Synthesizes scholarly findings from journals, patents, and conferences</li>
              <li>🧠 Identifies technical gaps and future research areas</li>
              <li>🔬 Compares systems, frameworks, and methodologies</li>
              <li>💡 Highlights innovation trends in core and emerging domains</li>
            </ul>
          </section>

          <section id="framework">
            <h2>🧩 Our Engineering Literature Writing Framework</h2>
            <table className="eng-lit-framework-table">
              <thead>
                <tr><th>Stage</th><th>What We Deliver</th></tr>
              </thead>
              <tbody>
                <tr><td>1. Topic Definition</td><td>Based on research gaps and emerging technologies</td></tr>
                <tr><td>2. Source Collection</td><td>From IEEE Xplore, Scopus, Web of Science, etc.</td></tr>
                <tr><td>3. Thematic Structuring</td><td>Grouped by application, algorithm, or timeline</td></tr>
                <tr><td>4. Technical Critique</td><td>Deep evaluation of models, systems, and approaches</td></tr>
                <tr><td>5. Gap Identification</td><td>Pinpointing open challenges and future directions</td></tr>
                <tr><td>6. Drafting & Formatting</td><td>Formatted per journal requirements (APA, IEEE, etc.)</td></tr>
                <tr><td>7. QA & Proofreading</td><td>Grammarly-polished, Turnitin-verified, reviewer-ready</td></tr>
              </tbody>
            </table>
          </section>

          <section id="domains">
            <h2>🔧 Engineering Domains We Specialize In</h2>
            <ul>
              <li>⚙️ Mechanical Engineering – CAD, fluid mechanics, smart materials</li>
              <li>🔌 Electrical & Electronics – Renewable energy, circuits, automation</li>
              <li>💻 Computer Science – AI, ML, blockchain, cloud computing</li>
              <li>🛰 Electronics & Communication – IoT, VLSI, antennas, 5G</li>
              <li>🏗 Civil Engineering – Smart structures, geotechnical systems</li>
              <li>🚀 Robotics, Mechatronics, Aerospace & Automotive systems</li>
            </ul>
          </section>

          <section id="journals">
            <h2>📈 Where Your Literature Article Can Be Published</h2>
            <ul>
              <li>🧾 Scopus journals – Elsevier, MDPI, Springer, T&F</li>
              <li>📊 SCI/SCIE-indexed journals – IEEE, Springer Nature, Wiley</li>
              <li>⚡ IEEE Journals & Conference Proceedings</li>
              <li>📚 UGC CARE-compliant academic journals</li>
            </ul>
          </section>

          <section id="narpavi-edge">
            <h2>🌟 Narpavi’s Edge in Engineering Literature Writing</h2>
            <ul>
              <li>📌 SEO keyword-optimized for academic visibility</li>
              <li>🧠 Drafted by domain-qualified PhD/M.Tech experts</li>
              <li>📚 100–150+ peer-reviewed references per article</li>
              <li>✍️ Technically accurate with high-level analysis</li>
              <li>🧾 Reviewer-ready formatting with zero plagiarism</li>
              <li>🔁 Unlimited revisions till submission approval</li>
              <li>⏳ Turnaround: 7–10 working days</li>
            </ul>
          </section>

          <section className="eng-lit-cta-box">
            <h4>Get Engineering Literature Help</h4>
            <p>Publish a journal-ready, technically accurate review article with Narpavi’s expert team.</p>
            <a href="#" className="eng-lit-cta-button">Start Your Article Now</a>
          </section>

          <section id="faq" className="eng-lit-faq-section">
            <h2>❓ Frequently Asked Questions</h2>
            <div className="eng-lit-faq-list">
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="eng-lit-right-sidebar">
          <h3>Related Services</h3>
          <ul>
            <li><a href="#">Thesis-to-Article Conversion</a></li>
            <li><a href="#">Technical Paper Formatting</a></li>
            <li><a href="#">IEEE Conference Paper Support</a></li>
            <li><a href="#">Proposal Literature Section Writing</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default EngineeringLiteratureGuide;
