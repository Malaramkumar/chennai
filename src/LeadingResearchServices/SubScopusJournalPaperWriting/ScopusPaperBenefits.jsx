import React from "react";
import "./ScopusPaperBenefits.scss";
import Side from "../Sidebar";

const ScopusPaperBenefits = () => {
  return (
    <div className="spb-layout">
      {/* Left Sidebar */}
      <div className="spb-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="spb-main-content">
        <h1>Benefits of Writing a Research Paper for Scopus Journals (Engineering Streams)</h1>
        <p>
          Publishing in Scopus-indexed journals offers significant benefits for engineering researchers —
          from academic visibility to faster career growth. Explore the detailed benefits and comparisons below.
        </p>

        <h2>Why Publish in Scopus Journals? Key Benefits at a Glance</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Description</th>
                <th>Impact on Researchers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Global Visibility</td>
                <td>Research reaches an international scholarly community</td>
                <td>Increases citations and collaborations</td>
              </tr>
              <tr>
                <td>Academic Credibility</td>
                <td>Rigorous peer review and quality standards</td>
                <td>Enhances reputation and trustworthiness</td>
              </tr>
              <tr>
                <td>Higher Citation Rates</td>
                <td>Indexed journals have wider academic reach</td>
                <td>Boosts h-index and academic influence</td>
              </tr>
              <tr>
                <td>Career Advancement</td>
                <td>Recognized by universities and funding bodies</td>
                <td>Improves promotion and grant opportunities</td>
              </tr>
              <tr>
                <td>Networking Opportunities</td>
                <td>Connects with global experts and research groups</td>
                <td>Facilitates collaboration and knowledge exchange</td>
              </tr>
              <tr>
                <td>Compliance with Funding</td>
                <td>Meets publication criteria for grants and programs</td>
                <td>Eases project approvals and requirements</td>
              </tr>
              <tr>
                <td>Interdisciplinary Exposure</td>
                <td>Accessible across various fields</td>
                <td>Broadens research impact</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Comparison Table: Scopus vs. Non-Indexed Publications</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Scopus Journal Publication</th>
                <th>Non-Indexed Publications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visibility & Reach</td>
                <td>Global, multidisciplinary audience</td>
                <td>Local or limited reach</td>
              </tr>
              <tr>
                <td>Peer Review Quality</td>
                <td>Strict, multi-stage review</td>
                <td>Variable quality</td>
              </tr>
              <tr>
                <td>Citation Potential</td>
                <td>High</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Impact on Career</td>
                <td>Significant for promotions and grants</td>
                <td>Minimal recognition</td>
              </tr>
              <tr>
                <td>Networking</td>
                <td>Wider research community</td>
                <td>Limited exposure</td>
              </tr>
              <tr>
                <td>Funding Compliance</td>
                <td>Widely accepted</td>
                <td>Rarely accepted</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Chart: Career Progression Rate</h2>
        <pre className="ascii-chart">
Career Progression Rate
|
|          ********************
|          *  Scopus Journals  *
|          ********************
|              ****************
|              * Non-Indexed  *
|              ****************
|______________________________
     Years of Research Experience
        </pre>

        <h2>Specific Benefits in Engineering Streams</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Engineering Discipline</th>
                <th>Benefits from Scopus Publication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mechanical Engineering</td>
                <td>Material science updates, automation advances</td>
              </tr>
              <tr>
                <td>Electrical & Electronics</td>
                <td>High citation impact in IoT and smart grid topics</td>
              </tr>
              <tr>
                <td>Civil Engineering</td>
                <td>Sustainable design and infrastructure recognition</td>
              </tr>
              <tr>
                <td>Computer Engineering</td>
                <td>Visibility in AI, ML, and cybersecurity fields</td>
              </tr>
              <tr>
                <td>Chemical Engineering</td>
                <td>Trust in environmental and process innovations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How Narpavi Helps</h2>
        <p>
          Narpavi Research Institute assists engineering scholars to:
        </p>
        <ul>
          <li>✅ Select high-impact Scopus journals</li>
          <li>✅ Write high-quality, original manuscripts</li>
          <li>✅ Format as per journal submission guidelines</li>
          <li>✅ Handle review and revision processes</li>
        </ul>

        <p>
          👉 <strong>Contact us now</strong> to begin your Scopus publication journey!
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="spb-right-sidebar">
        <h3>SEO Keywords</h3>
        <ul>
          <li>Benefits of Scopus journal</li>
          <li>Engineering Scopus publications</li>
          <li>Academic career growth Scopus</li>
          <li>Scopus vs non-indexed journals</li>
          <li>Why publish in Scopus?</li>
        </ul>
      </div>
    </div>
  );
};

export default ScopusPaperBenefits;
