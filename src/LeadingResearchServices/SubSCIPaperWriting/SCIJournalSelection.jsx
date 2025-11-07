import React from "react";
import "./SCIJournalSelection.scss";
import Side from "../Sidebar";

const faqs = [
  {
    question: "🔍 How do I verify if a journal is SCI-indexed?",
    answer:
      "You can check the journal’s status on the Web of Science Master Journal List by searching the journal name or ISSN."
  },
  {
    question: "📊 What is a good impact factor (IF) for engineering journals?",
    answer:
      "Impact factors vary by field. In engineering, anything above 3 is considered good. Top-tier journals may have IF > 8."
  },
  {
    question: "📅 How long does the SCI journal review process usually take?",
    answer:
      "Most SCI journals take 6–12 weeks for the first decision, but it depends on the journal's review pipeline and frequency."
  },
  {
    question: "💰 Are SCI journals free or paid?",
    answer:
      "Some SCI journals are open access (may charge APC), while others are subscription-based. Choose based on your need and budget."
  },
  {
    question: "🧭 Where can I find a list of SCI journals for my field?",
    answer:
      "Use tools like the Journal Citation Reports (JCR), publisher portals (Elsevier, Springer), or Clarivate’s Master Journal List."
  }
];

const SCIJournalSelection = () => {
  return (
    <div className="scijournal-layout">
      {/* Left Sidebar */}
      
      <aside className="scijournal-left-sidebar">
        <Side />
      </aside>

      {/* Main Content */}
      <main className="scijournal-main-content">
        <h1>📘 Identifying the Right SCI-Indexed Journal for Your Engineering Topic</h1>
        <p>
          Choosing the right SCI-indexed journal is the first and most important step toward getting your engineering research manuscript published successfully. A poor match can lead to desk rejection, even if your research is strong. This guide will help you understand how to select the best SCI journal for your topic, with practical tips, a comparison table, and key decision-making metrics.
        </p>

        <section>
          <h2>🎯 Why Journal Selection Matters in SCI Publishing</h2>
          <p>
            Publishing in an SCI (Science Citation Index) journal offers high visibility, but only if you select a journal aligned with your subject scope, technical depth, and target audience.
          </p>
          <p><strong>Keywords:</strong> SCI journal selection for engineering, how to choose SCI journal, best SCI journal for research paper, engineering SCI journal finder</p>
        </section>

        <section>
          <h2>🛠️ Factors to Consider When Choosing an SCI Journal</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Selection Criteria</th>
                  <th>What to Look For</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scope and Aims</td>
                  <td>Ensure the journal covers your engineering sub-field</td>
                  <td>Prevents desk rejection</td>
                </tr>
                <tr>
                  <td>Impact Factor (IF)</td>
                  <td>Choose journals with a balanced IF for your career stage</td>
                  <td>Determines reach and credibility</td>
                </tr>
                <tr>
                  <td>Publication Frequency</td>
                  <td>Monthly or quarterly releases</td>
                  <td>Affects review and publication speed</td>
                </tr>
                <tr>
                  <td>Acceptance Rate</td>
                  <td>Low rate = high prestige, high rate = higher chances</td>
                  <td>Balances difficulty and success chance</td>
                </tr>
                <tr>
                  <td>Review Time</td>
                  <td>Check average time from submission to decision</td>
                  <td>Helps with academic or graduation deadlines</td>
                </tr>
                <tr>
                  <td>Indexing Confirmation</td>
                  <td>Must be in Clarivate’s Web of Science (SCI/SCIE)</td>
                  <td>Ensures academic and institutional validity</td>
                </tr>
                <tr>
                  <td>Open Access vs Paid</td>
                  <td>Decide based on your budget and audience need</td>
                  <td>Open access increases citation potential</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>📊 Comparison Table: Sample SCI Journals for Engineering Domains</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Engineering Field</th>
                  <th>SCI Journal Name</th>
                  <th>IF (2024)</th>
                  <th>Publisher</th>
                  <th>Avg. Review Time</th>
                  <th>Access Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td className="journal-name">International Journal of Heat and Mass Transfer</td>
                  <td>6.1</td>
                  <td>Elsevier</td>
                  <td>6–9 weeks</td>
                  <td>Subscription</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td className="journal-name">IEEE Transactions on Industrial Electronics</td>
                  <td>8.2</td>
                  <td>IEEE</td>
                  <td>8–12 weeks</td>
                  <td>Subscription</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td className="journal-name">Construction and Building Materials</td>
                  <td>5.4</td>
                  <td>Elsevier</td>
                  <td>4–6 weeks</td>
                  <td>Hybrid</td>
                </tr>
                <tr>
                  <td>Computer Engineering</td>
                  <td className="journal-name">ACM Transactions on Embedded Computing Systems</td>
                  <td>2.9</td>
                  <td>ACM</td>
                  <td>10–14 weeks</td>
                  <td>Subscription</td>
                </tr>
                <tr>
                  <td>Environmental Engineering</td>
                  <td className="journal-name">Journal of Hazardous Materials</td>
                  <td>13.6</td>
                  <td>Elsevier</td>
                  <td>6–8 weeks</td>
                  <td>Open/Hybrid</td>
                </tr>
                <tr>
                  <td>Chemical Engineering</td>
                  <td className="journal-name">Chemical Engineering Journal</td>
                  <td>15.1</td>
                  <td>Elsevier</td>
                  <td>6–10 weeks</td>
                  <td>Hybrid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>📈 Visual Chart: Journal Selection Decision Flow</h2>
          
{/* <pre>
Start
  ↓
Define your engineering research domain
  ↓
Check SCI journal database (Web of Science)
  ↓
Shortlist based on:
   - Scope match
   - Recent articles
   - IF & review time
  ↓
Compare Open Access vs Paid
  ↓
Check manuscript formatting & past issues
  ↓
Submit!
          </pre> */}

        </section>

        <section>
          <h2>🧭 Tools to Help You Identify SCI Journals</h2>
          <ul>
            <li><a href="http://mjl.clarivate.com" target="_blank" rel="noopener noreferrer">Web of Science Master Journal List</a></li>
            <li><a href="https://jcr.clarivate.com" target="_blank" rel="noopener noreferrer">Journal Citation Reports (JCR)</a></li>
            <li>Publisher Portals – Elsevier, Springer, IEEE, Taylor & Francis, Wiley</li>
            <li>Journal Suggester Tools – Based on title/abstract matching</li>
          </ul>
        </section>

        <section>
          <h2>✅ Summary: How to Choose the Right SCI Journal</h2>
          <ul>
            <li>Confirm the journal is SCI-indexed</li>
            <li>Match scope with your topic</li>
            <li>Check impact factor and ranking</li>
            <li>Review recent articles</li>
            <li>Decide between Open Access and Subscription</li>
            <li>Analyze time-to-publication</li>
          </ul>
        </section>

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
      </main>

      {/* Right Sidebar */}
      <aside className="scijournal-right-sidebar"></aside>
    </div>
  );
};

export default SCIJournalSelection;
