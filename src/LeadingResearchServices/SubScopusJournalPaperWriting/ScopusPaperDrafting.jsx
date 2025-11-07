import React from "react";
import "./ScopusPaperDrafting.scss";
import Side from "../Sidebar";

const ScopusPaperDrafting = () => {
  return (
    <div className="spd-layout">
      {/* Left Sidebar */}
      <div className="spd-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="spd-main-content">
        <h1>Need Help in Complete Drafting Your Scopus Paper?</h1>
        <p>
          Writing a research paper that meets the rigorous standards of Scopus-indexed journals can be challenging. From conceptualizing your study to preparing a polished manuscript ready for submission, every step requires expertise and precision. At <strong>Narpavi Research Institute</strong>, we provide comprehensive support to help you draft a high-quality Scopus paper with confidence.
        </p>

        <h2>Why Choose Narpavi for Your Scopus Paper Drafting?</h2>
        <ul>
          <li><strong>Topic Selection & Refinement:</strong> Identify impactful research gaps and finalize a compelling title and objectives.</li>
          <li><strong>In-depth Literature Review:</strong> Craft a strong foundation based on recent, relevant, and indexed sources.</li>
          <li><strong>Methodology Design:</strong> Develop robust methods tailored to your research goals.</li>
          <li><strong>Data Analysis & Interpretation:</strong> Present your findings clearly and accurately.</li>
          <li><strong>Manuscript Writing:</strong> Structure your paper according to journal-specific guidelines, ensuring clarity, coherence, and scientific rigor.</li>
          <li><strong>Referencing & Citations:</strong> Format references precisely using APA, IEEE, Elsevier, or other styles.</li>
          <li><strong>Plagiarism & Quality Checks:</strong> Guarantee originality with detailed plagiarism reports and language polishing.</li>
          <li><strong>Formatting & Submission:</strong> Prepare your manuscript for seamless submission, including cover letters and supplementary documents.</li>
          <li><strong>Revision Support:</strong> Receive unlimited rounds of editing based on reviewer feedback until acceptance.</li>
        </ul>

        <h2>How Our Process Works</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>What We Do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Initial Consultation</td>
                <td>Understand your research and target journal</td>
              </tr>
              <tr>
                <td>2. Draft Preparation</td>
                <td>Write and develop all manuscript sections</td>
              </tr>
              <tr>
                <td>3. Quality Assurance</td>
                <td>Perform technical review and plagiarism check</td>
              </tr>
              <tr>
                <td>4. Formatting & Styling</td>
                <td>Align paper with journal guidelines</td>
              </tr>
              <tr>
                <td>5. Submission Assistance</td>
                <td>Help with journal submission and follow-up</td>
              </tr>
              <tr>
                <td>6. Revision Support</td>
                <td>Edit and improve paper post-review</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Benefits of Complete Drafting Support</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Save Time & Effort</td>
                <td>Focus on your research while we handle writing</td>
              </tr>
              <tr>
                <td>Increase Acceptance Chances</td>
                <td>Professional, compliant manuscripts</td>
              </tr>
              <tr>
                <td>Improve Writing Quality</td>
                <td>Clarity, coherence, and scientific accuracy</td>
              </tr>
              <tr>
                <td>Meet Deadlines</td>
                <td>Timely delivery aligned with submission schedules</td>
              </tr>
              <tr>
                <td>Reduce Stress</td>
                <td>Expert guidance at every stage</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Ready to Draft Your Scopus Paper with Expert Help?</h2>
        <p>
          Don’t let the complexities of academic writing hold you back. Partner with <strong>Narpavi</strong> to transform your research into a publishable Scopus paper.
          <br /><br />
          👉 <strong>Contact us now</strong> for a free consultation and get started!
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="spd-right-sidebar">
        <h3>SEO Keywords</h3>
        <ul>
          <li>Scopus paper writing help</li>
          <li>Scopus paper drafting support</li>
          <li>Scopus journal publication service</li>
          <li>Engineering research paper support</li>
          <li>Research manuscript preparation</li>
        </ul>
      </div>
    </div>
  );
};

export default ScopusPaperDrafting;
