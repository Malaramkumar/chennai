import React from "react";
import "./WriteFreeScopusArticle.scss";
import Side from "../Sidebar";

const WriteFreeScopusArticle = () => {
  return (
    <div className="free-scopus-layout">
      {/* Left Sidebar */}
      <div className="free-scopus-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="free-scopus-main-content">
        <h1>How to Write a Research Article to Publish in Scopus for Free</h1>
        <p>
          Publishing your research in a <strong>Scopus-indexed journal</strong> is a significant achievement that boosts your academic profile.
          While many journals charge publication fees, it is possible to write and publish a research article for free by targeting the right journals and following strategic steps.
        </p>

        <h2>Understanding Scopus Journal Quartiles: Q1, Q2, Q3, Q4</h2>
        <p>Scopus classifies journals into four quartiles based on impact and citation metrics:</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Quartile</th>
                <th>Description</th>
                <th>Impact & Prestige</th>
                <th>Typical APCs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>Top 25% journals with highest impact</td>
                <td>Highest prestige and visibility</td>
                <td>High or moderate APCs, some free options</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>Next 25% journals</td>
                <td>Good visibility and quality</td>
                <td>Mix of free and paid journals</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>Middle 25% journals</td>
                <td>Moderate impact</td>
                <td>Many free or low-cost journals</td>
              </tr>
              <tr>
                <td>Q4</td>
                <td>Bottom 25% journals</td>
                <td>Lower impact and citations</td>
                <td>Mostly free or very low APCs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Tip:</strong> Focus your writing efforts on journals in Q3 and Q4 where free publication options are more common.</p>

        <h2>Free vs Paid Publishing: What to Consider</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free Publishing</th>
                <th>Paid Publishing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>APCs</td>
                <td>None or waived</td>
                <td>$500 – $3000+</td>
              </tr>
              <tr>
                <td>Journal Impact</td>
                <td>Usually Q3/Q4 journals</td>
                <td>Often Q1/Q2 journals</td>
              </tr>
              <tr>
                <td>Speed of Publication</td>
                <td>Can be slower</td>
                <td>Faster with priority</td>
              </tr>
              <tr>
                <td>Open Access</td>
                <td>Sometimes available</td>
                <td>Usually available</td>
              </tr>
              <tr>
                <td>Acceptance Rate</td>
                <td>Higher in lower quartiles</td>
                <td>More competitive</td>
              </tr>
              <tr>
                <td>Indexing Quality</td>
                <td>Indexed, lower citations</td>
                <td>Indexed, high citations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Writing Tips for Free Scopus Publication</h2>
        <ul>
          <li>🎯 <strong>Select the Right Journal:</strong> Focus on Q3/Q4 journals that are fee-free or waive APCs.</li>
          <li>🧠 <strong>Originality & Quality:</strong> Ensure your research is unique, structured, and methodologically strong.</li>
          <li>📋 <strong>Follow Journal Guidelines:</strong> Adhere to all formatting and referencing requirements strictly.</li>
          <li>📚 <strong>Use Strong Literature Support:</strong> Reference recent Scopus-indexed sources.</li>
          <li>✍️ <strong>Clear Academic English:</strong> Ensure high language clarity and readability.</li>
          <li>✅ <strong>Plagiarism Check:</strong> Use tools like Turnitin or iThenticate before submission.</li>
        </ul>

        <h2>How Narpavi Can Support Your Journey</h2>
        <p>
          At <strong>Narpavi Research Institute</strong>, we assist researchers at every stage — from selecting free-to-publish Scopus journals to crafting and submitting a polished manuscript.
          Our editorial support ensures your article meets academic standards without the burden of publication fees.
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="free-scopus-right-sidebar">
        <h3>SEO Keywords</h3>
        <ul>
          <li>How to publish in Scopus for free</li>
          <li>Free Scopus journal submission</li>
          <li>Write research article without APC</li>
          <li>Q3 Q4 Scopus journal tips</li>
          <li>Free Scopus publication support</li>
        </ul>
      </div>
    </div>
  );
};

export default WriteFreeScopusArticle;
