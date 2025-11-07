import React from "react";
import "./SCIvsScopu.scss"
import Side from "../Sidebar";

const faqs = [
  {
    question: "What is the main difference between SCI and Scopus indexing?",
    answer:
      "SCI indexing, maintained by Clarivate Analytics, is more selective and includes only high-impact journals primarily in science and engineering. Scopus, maintained by Elsevier, covers a broader range of disciplines and includes journals, conference papers, and book series with moderately strict quality criteria.",
  },
  {
    question: "Which indexing is better for engineering research?",
    answer:
      "Both are valuable. SCI is preferred for high-impact, rigorous research and is often required for academic promotions or Ph.D. submissions. Scopus is better for interdisciplinary or fast-tracked publications and covers a wider range of engineering subfields and regional journals.",
  },
  {
    question: "Is Scopus indexing accepted for Ph.D. thesis submissions and promotions?",
    answer:
      "Yes, in many institutions globally, Scopus-indexed journals are accepted. However, some premier universities and government-funded institutions specifically require SCI/SCIE-indexed publications for doctoral submission and faculty promotion.",
  },
  {
    question: "Do SCI journals have a faster publication process compared to Scopus?",
    answer:
      "No. SCI journals usually have a longer review and publication timeline due to their rigorous peer-review standards. Scopus journals, while still peer-reviewed, often have a relatively faster publication process.",
  },
  {
    question: "Can I publish conference papers in SCI journals?",
    answer:
      "Rarely. SCI indexing focuses mainly on journals. Conference proceedings are generally not indexed in SCI. Scopus, on the other hand, regularly indexes conference papers and proceedings.",
  },
 
];


const SCIvsScopus = () => {
  return (
    <div className="scivsscopus-layout">
      {/* Left Sidebar */}
      <div className="scivsscopus-left-sidebar">

       
        <Side />
      </div>

      {/* Main Content */}
      <div className="scivsscopus-main-content">
        <h1>📊 Comparison Between SCI Indexing and Scopus Indexing</h1>

        <section>
          <p>
            Understanding the difference between SCI indexing and Scopus indexing is critical for researchers, academicians, and postgraduate students aiming to publish in high-impact journals. This section breaks down their features, scope, and credibility to help you choose the right platform for your engineering research publication.
          </p>
        </section>

        <section>
          <h2>🔍 What is SCI Indexing?</h2>
          <ul>
            <li>SCI (Science Citation Index) is maintained by Clarivate via Web of Science.</li>
            <li>Covers high-impact journals in science, engineering, and technology.</li>
            <li>Includes SCI, SCI-Expanded (SCIE), and SSCI for social sciences.</li>
          </ul>
          <p><strong>Keywords:</strong> SCI indexed journals, SCI engineering journals, Science Citation Index</p>
        </section>

        <section>
          <h2>🔍 What is Scopus Indexing?</h2>
          <ul>
            <li>Scopus is a citation database managed by Elsevier.</li>
            <li>Indexes over 25,000 active journals across all disciplines.</li>
            <li>Includes conference papers, book series, and trade journals.</li>
            <li>Provides metrics like CiteScore, SNIP, and SJR.</li>
          </ul>
          <p><strong>Keywords:</strong> Scopus indexed journals, Scopus engineering database, Elsevier Scopus indexing</p>
        </section>

        <section className="comparison-table">
          <h2>⚖️ SCI vs Scopus: Comparison Table</h2>
          <table>
            <thead>
              <tr>
                <th>Criteria</th>
                <th>SCI Indexing</th>
                <th>Scopus Indexing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maintained By</td>
                <td>Clarivate Analytics (Web of Science)</td>
                <td>Elsevier</td>
              </tr>
              <tr>
                <td>Coverage</td>
                <td>Selective, high-quality journals</td>
                <td>Broad, includes journals, books, and conferences</td>
              </tr>
              <tr>
                <td>Fields Covered</td>
                <td>Science, Engineering, Tech</td>
                <td>Multidisciplinary (STEM + humanities)</td>
              </tr>
              <tr>
                <td>Journal Selection Criteria</td>
                <td>Highly stringent</td>
                <td>Moderately strict</td>
              </tr>
              <tr>
                <td>Citation Metrics</td>
                <td>Impact Factor, h-index</td>
                <td>CiteScore, SNIP, SJR, h-index</td>
              </tr>
              <tr>
                <td>Number of Journals</td>
                <td>~9,000 (SCI & SCIE)</td>
                <td>~25,000+</td>
              </tr>
              <tr>
                <td>Access Platform</td>
                <td>Web of Science</td>
                <td>Scopus</td>
              </tr>
              <tr>
                <td>Reputation</td>
                <td>Higher for promotions/Ph.D.</td>
                <td>Recognized internationally</td>
              </tr>
              <tr>
                <td>Inclusion of Conferences</td>
                <td>Rarely</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Publishing Timeframes</td>
                <td>Longer</td>
                <td>Often faster</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📌 When Should You Choose SCI Over Scopus?</h2>
          <ul>
            <li>Targeting high-impact publishing.</li>
            <li>University/department requires SCI for Ph.D. or promotion.</li>
            <li>Your research is in pure/applied sciences or engineering.</li>
          </ul>
          <p><strong>Keywords:</strong> SCI journal eligibility, SCI for PhD, high-impact engineering journals</p>
        </section>

        <section>
          <h2>📌 When is Scopus a Better Choice?</h2>
          <ul>
            <li>Working on interdisciplinary research.</li>
            <li>Want broader audience and quicker publication.</li>
            <li>Publishing conference proceedings or regional journals.</li>
          </ul>
          <p><strong>Keywords:</strong> Scopus conference papers, Scopus multidisciplinary indexing, fast publishing engineering journals</p>
        </section>

        <section>
          <h2>🔑 Key Takeaways</h2>
          <ul>
            <li>SCI journals are more selective and carry more prestige.</li>
            <li>Scopus offers wider access, multidisciplinary coverage, and faster turnaround.</li>
            <li>Both are credible depending on your academic goal.</li>
          </ul>
        </section>

        <section className="comparison-table">
          <h2>✅ Final Recommendation</h2>
          <table>
            <thead>
              <tr>
                <th>If You Want To…</th>
                <th>Choose This Indexing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Publish in a top-tier, high-impact journal</td>
                <td>SCI Indexing</td>
              </tr>
              <tr>
                <td>Reach a broad, multidisciplinary audience</td>
                <td>Scopus Indexing</td>
              </tr>
              <tr>
                <td>Get faster publication and flexibility</td>
                <td>Scopus Indexing</td>
              </tr>
              <tr>
                <td>Meet research grant or tenure requirements</td>
                <td>SCI Indexing (often mandatory)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <p className="conclusion">
          Choosing between SCI indexing and Scopus indexing depends on your engineering research objective, journal reputation needs, and institutional criteria. Both are credible, but SCI is often preferred for Ph.D. defense and promotions, while Scopus supports faster, wider publishing.
        </p>
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
                </section>
      </div>

      {/* Right Sidebar */}
      <div className="scivsscopus-right-sidebar"></div>
    </div>
  );
};

export default SCIvsScopus;
