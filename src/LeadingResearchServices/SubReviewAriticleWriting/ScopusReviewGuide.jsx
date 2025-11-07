import React from "react";
import "./ScopusReviewGuide.scss";

const faqs = [
  {
    question: "How many references do you include in a Scopus review paper?",
    answer: "Typically 100–200+ high-quality Scopus-indexed references are included based on the journal's expectations and domain complexity."
  },
  {
    question: "Do you format the paper as per journal guidelines?",
    answer: "Yes, we follow the exact structure, referencing style, and submission guidelines of your target Scopus journal (e.g., Elsevier, Springer)."
  },
  {
    question: "Is the content plagiarism-free and Grammarly checked?",
    answer: "Absolutely. Every draft undergoes plagiarism screening and language polishing before submission."
  },
  {
    question: "How long does it take to write a Scopus-standard review article?",
    answer: "Usually 7–10 working days depending on topic complexity, journal formatting, and feedback cycles."
  }
];

const ScopusReviewGuide = () => {
  return (
    <div className="scopus-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#why">Why Scopus Journals?</a></li>
          <li><a href="#offer">Our Services</a></li>
          <li><a href="#process">Writing Process</a></li>
          <li><a href="#domains">Domains Supported</a></li>
          <li><a href="#why-narpavi">Why Narpavi?</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Review Paper Writing Services for Scopus-Indexed Journals</h1>
        <p>
          At Narpavi Research Institute, we specialize in creating publication-ready, high-impact review articles that align with Scopus journal expectations. Whether you're submitting to Elsevier, Springer, or Wiley, we ensure domain accuracy and editorial compliance.
        </p>

        <section id="why">
          <h2>🎯 Why Choose a Scopus-Indexed Journal?</h2>
          <ul>
            <li>✅ Boosts credibility, visibility, and citation potential</li>
            <li>📈 Enhances academic career and research impact</li>
            <li>🎓 Fulfills university/funding body requirements</li>
            <li>🌍 Enables global research collaborations</li>
          </ul>
        </section>

        <section id="offer">
          <h2>📚 What We Offer</h2>
          <ul>
            <li>🧠 Critical synthesis of 50–150+ peer-reviewed articles</li>
            <li>📈 Thematic or chronological structuring</li>
            <li>🔍 Gap analysis, trend identification, and conceptual clarity</li>
            <li>🧾 Journal-specific formatting (APA, IEEE, etc.)</li>
            <li>✅ Grammarly-enhanced, 100% plagiarism-free content</li>
          </ul>
        </section>

        <section id="process">
          <h2>🧪 Our Review Paper Writing Process</h2>
          <table className="process-table">
            <thead>
              <tr><th>Step</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>1. Topic Finalization</td><td>Based on research gaps and trends</td></tr>
              <tr><td>2. Literature Collection</td><td>Using Scopus, PubMed, Web of Science</td></tr>
              <tr><td>3. Organization</td><td>Thematic or chronological layout</td></tr>
              <tr><td>4. Critical Review</td><td>Comparative insights, methodologies, gaps</td></tr>
              <tr><td>5. Drafting</td><td>Following exact Scopus journal guidelines</td></tr>
              <tr><td>6. QA & Revisions</td><td>Grammar, formatting, and plagiarism check</td></tr>
            </tbody>
          </table>
        </section>

        <section id="domains">
          <h2>🧠 Domains We Support</h2>
          <ul>
            <li>⚙️ Engineering – AI, IoT, Mechanical, Electrical, Civil</li>
            <li>🩺 Medical & Life Sciences – Pharmacy, Nursing, Biotech</li>
            <li>💻 Computer Science – Data Science, Cybersecurity</li>
            <li>📚 Social Sciences – Management, Education, Psychology</li>
            <li>🌱 Environmental Studies, Policy, Energy</li>
          </ul>
        </section>

        <section id="why-narpavi">
          <h2>🌟 Why Narpavi?</h2>
          <ul>
            <li>📌 SEO-optimized content for journal discoverability</li>
            <li>📚 100–200+ Scopus-indexed references used</li>
            <li>🧠 PhD domain experts involved at every step</li>
            <li>✍️ Compliant with high-impact journal formatting</li>
            <li>🔄 Free revisions until approval</li>
            <li>⏳ 7–10 working days turnaround</li>
            <li>🌍 Trusted by researchers globally</li>
          </ul>
        </section>

        <section id="faq" className="faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-list">
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
      <aside className="right-sidebar">
        <h3>Related Services</h3>
        <ul>
          <li><a href="#">Journal Selection Assistance</a></li>
          <li><a href="#">Thesis to Review Article Conversion</a></li>
          <li><a href="#">Research Gap Identification</a></li>
          <li><a href="#">Scopus Journal Formatting</a></li>
        </ul>

        <div className="cta-box">
          <h4>Ready to Publish in Scopus?</h4>
          <p>Let our experts craft a journal-ready, citation-rich review article for you.</p>
          <a href="#" className="cta-button">Get Scopus Review Support</a>
        </div>
      </aside>
    </div>
  );
};

export default ScopusReviewGuide;
