import React from "react";
import "./LiteratureReviewGuide.scss";
import Side from "../Sidebar"

const faqs = [
  {
    question: "What is the difference between a literature review and a research article?",
    answer:
      "A literature review synthesizes existing research to identify patterns and gaps, while a research article presents original findings and methodologies."
  },
  {
    question: "Which referencing style should I use for my review?",
    answer:
      "This depends on your target journal or university guideline. Common styles include APA, IEEE, Harvard, and Vancouver."
  },
  {
    question: "How many sources should a literature review include?",
    answer:
      "For journal publications, it’s common to include between 50 to 150 high-quality sources from verified academic databases."
  },
  {
    question: "Can I publish a literature review as a standalone article?",
    answer:
      "Yes, many journals publish literature reviews that provide valuable insights and map intellectual developments in a field."
  }
];

const LiteratureReviewGuide = () => {
  return (
    <div className="lr-layout">
      <Side/>
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#what">What is a Literature Review?</a></li>
          <li><a href="#steps">Steps to Write</a></li>
          <li><a href="#tools">Tools & Resources</a></li>
          <li><a href="#support">Narpavi’s Help</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>How to Write a Literature Review Article</h1>
        <p>
          A literature review article is more than a summary—it's a strategic evaluation of existing research that reveals insights, identifies knowledge gaps, and builds a strong foundation for new inquiries.
        </p>

        <section id="what">
          <h2>🎯 What is a Literature Review Article?</h2>
          <p>
            A structured academic paper that synthesizes prior research on a specific topic. It:
          </p>
          <ul>
            <li>📚 Evaluates and organizes existing research</li>
            <li>🧠 Highlights major debates and perspectives</li>
            <li>🔍 Identifies research gaps</li>
            <li>✍️ Suggests future directions</li>
          </ul>
        </section>

        <section id="steps">
          <h2>🪜 Steps to Write a Literature Review Article</h2>
          <ol>
            <li><strong>Choose a Focused Topic:</strong> Clear and specific question/theme.</li>
            <li><strong>Search Academic Databases:</strong> Use Scopus, IEEE Xplore, PubMed, etc.</li>
            <li><strong>Organize by Theme:</strong> Group by theory/method, not by year.</li>
            <li><strong>Critically Analyze:</strong> Evaluate strengths, weaknesses, contradictions.</li>
            <li><strong>Identify Research Gaps:</strong> Spot missing or emerging areas.</li>
            <li><strong>Draft with Structure:</strong> Abstract, Intro, Thematic Review, Discussion, Gaps, Conclusion, References.</li>
            <li><strong>Use Referencing Tools:</strong> Zotero, Mendeley, EndNote.</li>
            <li><strong>Proofread and Check Plagiarism:</strong> Use Grammarly, Turnitin.</li>
          </ol>
        </section>

        <section id="tools">
          <h2>📊 Tools and Resources</h2>
          <table className="tool-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Zotero / Mendeley</td><td>Citation management</td></tr>
              <tr><td>Turnitin / Grammarly</td><td>Plagiarism and grammar check</td></tr>
              <tr><td>Scopus / Web of Science</td><td>Find peer-reviewed literature</td></tr>
              <tr><td>LaTeX / MS Word</td><td>Manuscript preparation</td></tr>
            </tbody>
          </table>
        </section>

        <section id="support">
          <h2>✍️ Narpavi’s Expert Help</h2>
          <ul>
            <li>🧠 Domain-matched PhD experts</li>
            <li>📚 50–150+ scholarly references</li>
            <li>✅ Journal formatting (SCI, Scopus, IEEE)</li>
            <li>🔄 Free revisions and QA</li>
            <li>🌐 Covers all fields: Engineering, Medicine, Tech, Mgmt</li>
          </ul>
          <p>
            Whether you're preparing for thesis submission or journal publishing, our team will support you through every stage.
          </p>
        </section>

        <section id="faq" className="faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <div className="cta-box">
          <h4>Need Help?</h4>
          <p>Get expert support to write a publication-ready literature review article.</p>
          <a href="#" className="cta-button">Get Support Now</a>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Related Services</h3>
        <ul>
          <li><a href="#">Research Gap Identification</a></li>
          <li><a href="#">Journal Paper Drafting</a></li>
          <li><a href="#">Thesis Literature Review</a></li>
          <li><a href="#">Turnitin Checking</a></li>
        </ul>

        
      </aside>
    </div>
  );
};

export default LiteratureReviewGuide;
