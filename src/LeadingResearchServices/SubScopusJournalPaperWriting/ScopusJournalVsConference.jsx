import React from "react";
import "./ScopusJournalVsConference.scss";
import Side from "../Sidebar";

const ScopusJournalVsConference = () => {
  return (
    <div className="sjc-layout">
      {/* Left Sidebar */}
      <div className="sjc-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="sjc-main-content">
        <h1>Comparison between Scopus Indexing through Journals vs. Conferences</h1>
        <p>
          Scopus is one of the most trusted abstract and citation databases, indexing high-quality research globally.
          Researchers often ask: <strong>Should I publish in a journal or a conference indexed in Scopus?</strong> Both serve distinct purposes with unique advantages.
        </p>

        <h2>Scopus Indexing via Journals</h2>
        <ul>
          <li>✅ Rigorous peer-review and editorial processes</li>
          <li>✅ In-depth, full-length research with revisions</li>
          <li>✅ Categorized by quartiles (Q1–Q4) for prestige and impact</li>
          <li>✅ Higher academic recognition and long-term citations</li>
        </ul>

        <h2>Scopus Indexing via Conferences</h2>
        <ul>
          <li>📌 Includes papers presented at conferences or symposiums</li>
          <li>📌 Shorter, preliminary findings with faster review</li>
          <li>📌 Good for rapid dissemination and peer interaction</li>
          <li>📌 Often published as proceedings with ISSN/ISBN</li>
        </ul>

        <h2>Key Differences Table</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Scopus Journals</th>
                <th>Scopus Conferences</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Publication Type</td>
                <td>Full-length articles</td>
                <td>Conference papers/abstracts</td>
              </tr>
              <tr>
                <td>Peer Review Rigor</td>
                <td>Thorough with revisions</td>
                <td>Faster, less extensive</td>
              </tr>
              <tr>
                <td>Publication Frequency</td>
                <td>Monthly, quarterly</td>
                <td>Event-based (e.g., annual)</td>
              </tr>
              <tr>
                <td>Depth of Content</td>
                <td>Comprehensive studies</td>
                <td>Focused or early-stage work</td>
              </tr>
              <tr>
                <td>Impact & Citations</td>
                <td>Higher</td>
                <td>Moderate to low</td>
              </tr>
              <tr>
                <td>Indexing Format</td>
                <td>Journals (with quartile ranking)</td>
                <td>Proceedings (ISBN/ISSN)</td>
              </tr>
              <tr>
                <td>Audience Reach</td>
                <td>Wider academic reach</td>
                <td>Targeted peer audience</td>
              </tr>
              <tr>
                <td>Cost & Access</td>
                <td>Subscription/Open Access</td>
                <td>Often Open Access</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Which Should You Choose?</h2>
        <ul>
          <li>📘 For high-impact, in-depth research → <strong>Go for Scopus Journals</strong></li>
          <li>💡 For innovative or early-stage work → <strong>Choose Scopus Conferences</strong></li>
          <li>🤝 For networking and exposure → <strong>Conferences offer direct engagement</strong></li>
          <li>📈 For long-term citations → <strong>Journals are more impactful</strong></li>
        </ul>

        <h2>How Narpavi Helps You Publish in Scopus</h2>
        <p>
          Whether it’s a <strong>Scopus-indexed journal</strong> or <strong>conference paper</strong>, we help you:
        </p>
        <ul>
          <li>🎯 Select the right journal or conference based on your research</li>
          <li>🧠 Write and format your manuscript as per target venue</li>
          <li>📤 Manage submission and indexing requirements</li>
        </ul>

        <p>
          👉 <strong>Contact Narpavi for expert guidance and Scopus publication support!</strong>
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="sjc-right-sidebar">
        <h3>SEO Keywords</h3>
        <ul>
          <li>Scopus journal vs conference</li>
          <li>Difference between Scopus indexing types</li>
          <li>Conference paper Scopus index</li>
          <li>Journal publication Scopus impact</li>
          <li>How to publish in Scopus-indexed venues</li>
        </ul>
      </div>
    </div>
  );
};

export default ScopusJournalVsConference;
