import React from "react";
import "./IEEEPaperWriting.scss";
import { CheckCircle, FileText, SlidersHorizontal, Presentation, UserCheck } from "lucide-react";

const IEEEPaperWriting = () => {
  return (
    <section className="ieee-paper">
      <div className="container">
        <h2>📘 IEEE Conference Paper Writing</h2>
        <p className="intro">
          Publishing in IEEE conferences is a mark of academic excellence and global credibility.
          Our <strong>IEEE Conference Paper Writing</strong> service ensures technically sound,
          plagiarism-free, and reviewer-ready manuscripts tailored for IEEE’s rigorous standards.
        </p>

        <h3>✅ Key Benefits of Choosing Narpavi</h3>
        <ul className="benefits">
          <li><CheckCircle size={18} /> Topic selection based on trending IEEE themes</li>
          <li><CheckCircle size={18} /> Abstract and title finalization</li>
          <li><CheckCircle size={18} /> Problem statement + research gap definition</li>
          <li><CheckCircle size={18} /> Real-time technical writing with algorithms & data</li>
          <li><CheckCircle size={18} /> IEEE standard formatting (2-column, references, citations)</li>
          <li><CheckCircle size={18} /> Turnitin plagiarism report</li>
          <li><CheckCircle size={18} /> Peer review & expert technical editing</li>
          <li><CheckCircle size={18} /> PowerPoint slides for IEEE conference presentation</li>
        </ul>

        <h3>📊 IEEE Paper vs Journal Article vs Technical Report</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature / Criteria</th>
                <th>IEEE Conference Paper</th>
                <th>SCI/Scopus Journal Paper</th>
                <th>General Technical Paper</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peer Review Speed</td>
                <td>Fast (2–8 weeks)</td>
                <td>Slow (3–6 months)</td>
                <td>Variable</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Recent trends, innovations</td>
                <td>In-depth validation</td>
                <td>Conceptual overview</td>
              </tr>
              <tr>
                <td>Formatting</td>
                <td>IEEE 2-column</td>
                <td>APA / Elsevier</td>
                <td>Flexible</td>
              </tr>
              <tr>
                <td>Presentation Required</td>
                <td>Yes</td>
                <td>Optional</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Acceptance Criteria</td>
                <td>Novelty, clarity, technical value</td>
                <td>Depth, rigor, originality</td>
                <td>General contribution</td>
              </tr>
              <tr>
                <td>Audience</td>
                <td>PhD students, professionals</td>
                <td>Researchers, academicians</td>
                <td>General readers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🧠 IEEE Paper Writing Workflow</h3>
        <pre className="flowchart">

[1] Topic Finalization
     ↓
[2] Literature Review (IEEE Xplore)
     ↓
[3] Problem Statement & Methodology
     ↓
[4] Simulation / Coding / Mathematical Proofs
     ↓
[5] Draft Manuscript Writing
     ↓
[6] Peer Review & Technical Editing
     ↓
[7] IEEE Template Formatting
     ↓
[8] Submission + PPT Slides for Conference
        </pre>

        <h3>🎯 Who Benefits from IEEE Paper Writing?</h3>
        <ul className="audience">
          <li><UserCheck size={18} /> PhD & Master’s students aiming for international exposure</li>
          <li><UserCheck size={18} /> Working professionals seeking career or academic shift</li>
          <li><UserCheck size={18} /> Researchers submitting to funded IEEE events</li>
          <li><UserCheck size={18} /> Institutions promoting faculty research publications</li>
        </ul>

        <h3>🌐 Popular IEEE Conferences We Support</h3>
        <ul className="conferences">
          <li>• IEEE ICC, ICASSP, IoT World Forum, TENCON</li>
          <li>• IEEE ICRA – Robotics & Automation</li>
          <li>• IEEE PES General Meeting – Power & Energy</li>
          <li>• IEEE Computer Society (BigData, CPS, VR, etc.)</li>
        </ul>

        <h3>💬 Testimonials</h3>
        <div className="testimonials">
          <blockquote>
            “My IEEE paper was accepted without revision. Exceptional technical depth and formatting!”
            <footer>— Dr. Kavita R., Researcher</footer>
          </blockquote>
          <blockquote>
            “From title to PPT – everything was perfectly done. Thanks to your IEEE Paper Writing team!”
            <footer>— S. Manikandan, Final Year M.Tech</footer>
          </blockquote>
        </div>

        <div className="cta-box">
          <h4>🚀 Let’s Write Your IEEE Conference Paper</h4>
          <p>Stand out in top IEEE events with professionally written, reviewed, and formatted papers.</p>
          <a href="#" className="cta-button">📩 Get IEEE Paper Help</a>
        </div>
      </div>
    </section>
  );
};

export default IEEEPaperWriting;
