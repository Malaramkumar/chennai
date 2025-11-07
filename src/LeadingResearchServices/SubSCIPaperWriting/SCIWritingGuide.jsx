import React from "react";
import "./SCIWritingGuide.scss";
import Side from "../Sidebar"

export const faqs = [
  {
    question: "What is the IMRaD format?",
    answer:
      "IMRaD stands for Introduction, Methods, Results, and Discussion. It is the standard structure for engineering research papers published in SCI journals."
  },
  {
    question: "How long should my SCI article be?",
    answer:
      "Most SCI engineering journals recommend 6,000–8,000 words, depending on the journal scope. Always check specific author guidelines."
  },
  {
    question: "How many references should I include?",
    answer:
      "Typically, 25–40 references are ideal. At least 10 should be from recent SCI-indexed articles in the past 5 years."
  },
  {
    question: "Can I submit simulation-only research?",
    answer:
      "Yes, many engineering SCI journals accept well-validated simulation results if the methodology is reproducible and contributes new insights."
  },
  {
    question: "How long does SCI review take?",
    answer:
      "The peer-review process usually takes 2–4 months depending on the journal. Some offer fast-track options for urgent submissions."
  }
];

const SCIWritingEngineering = () => {
  return (
    <div className="sciwriting-layout">
        <Side/>
      {/* LEFT SIDEBAR */}
      <div className="sciwriting-left-sidebar">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#step1">1. Select Journal</a></li>
            <li><a href="#step2">2. Article Structure</a></li>
            <li><a href="#step3">3. Flowchart</a></li>
            <li><a href="#step4">4. Graphs & Figures</a></li>
            <li><a href="#step5">5. Checklist</a></li>
            <li><a href="#step6">6. SCI vs Non-SCI</a></li>
            <li><a href="#step7">7. Author Tips</a></li>
            <li><a href="#step8">8. Submission</a></li>
          </ul>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="sciwriting-main-content">
        <h1>How to Write a Research Article for SCI Journals – Engineering</h1>

        <section id="step1" className="step-card">
          <h3>🎯 1. Select the Right Engineering SCI Journal</h3>
          <ul>
            <li><strong>Scope Alignment:</strong> Match your field (e.g., IEEE, Elsevier)</li>
            <li><strong>Impact Factor:</strong> Aim ≥ 2.0</li>
            <li><strong>Category:</strong> Use Scopus/Web of Science filters</li>
            <li><strong>Open Access:</strong> Consider reach & cost</li>
          </ul>
        </section>

        <section id="step2" className="step-card">
          <h3>📐 2. Article Structure (IMRaD)</h3>
          <ul>
            <li><strong>Title:</strong> Concise & keyword-rich</li>
            <li><strong>Abstract:</strong> 200–250 words</li>
            <li><strong>Intro:</strong> Problem, gap, your contribution</li>
            <li><strong>Methods:</strong> Tools used (ANSYS, MATLAB)</li>
            <li><strong>Results:</strong> Graphs, tables, analysis</li>
            <li><strong>Discussion:</strong> Compare with others, validate</li>
            <li><strong>Conclusion:</strong> Key takeaway, future work</li>
            <li><strong>References:</strong> IEEE/ASME style</li>
          </ul>
        </section>

        <section id="step3" className="step-card">
          <h3>🔄 3. Writing Flowchart</h3>
          <pre className="mermaid">
{`graph TD
A[Topic Selection] --> B[Journal Selection]
B --> C[Data Collection & Experimentation]
C --> D[Methods & Results Draft]
D --> E[Write Intro & Discussion]
E --> F[Insert Figures & Tables]
F --> G[Proofreading & Review]
G --> H[Submit to Journal]`}
          </pre>
        </section>

        <section id="step4" className="step-card">
          <h3>📊 4. Engineering Graphs & Figures</h3>
          <ul>
            <li><strong>Tables:</strong> Add captions + units</li>
            <li><strong>Graphs:</strong> Use vector formats</li>
            <li><strong>Figures:</strong> 300 DPI, CAD images</li>
            <li><strong>Flowcharts:</strong> Use Lucidchart/draw.io</li>
          </ul>
        </section>

        <section id="step5" className="step-card">
          <h3>📚 5. Checklist</h3>
          <ul>
            <li>✅ Scope match</li>
            <li>✅ Simulation included</li>
            <li>✅ Reproducible methods</li>
            <li>✅ Clear tables/figures</li>
            <li>✅ Proper citations</li>
            <li>✅ Ethics declared</li>
            <li>✅ Cover letter added</li>
          </ul>
        </section>

        <section id="step6" className="step-card">
          <h3>🧪 6. SCI vs Non-SCI</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>SCI Journal</th>
                <th>Non-SCI Journal</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Review Type</td><td>Double-blind</td><td>Editorial only</td></tr>
              <tr><td>Indexing</td><td>Scopus, WoS</td><td>None/Local</td></tr>
              <tr><td>Acceptance Rate</td><td>15–25%</td><td>40–70%</td></tr>
            </tbody>
          </table>
        </section>

        <section id="step7" className="step-card">
          <h3>📢 7. Author Tips</h3>
          <ul>
            <li>Use keywords like “simulation,” “optimization”</li>
            <li>Focus on novelty</li>
            <li>Peer-review internally first</li>
          </ul>
        </section>

        <section id="step8" className="step-card">
          <h3>📥 8. Submission</h3>
          <ul>
            <li>IEEE Manuscript Central</li>
            <li>Elsevier Editorial Manager</li>
            <li>Springer Submission Portals</li>
          </ul>
          <p>Writing a research article for SCI journals in engineering requires clarity, innovation, and compliance with editorial standards. With a structured approach and keyword usage, you can maximize your paper's visibility, impact, and success.</p>
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
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="sciwriting-right-sidebar">
        <div className="sidebar-box">
          <h3>SEO Keywords</h3>
          <div className="tags">
            <span className="tag">SCI Journal</span>
            <span className="tag">Engineering Research</span>
            <span className="tag">IMRaD Format</span>
            <span className="tag">Impact Factor</span>
            <span className="tag">IEEE</span>
            <span className="tag">Elsevier</span>
            <span className="tag">Submission Tips</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCIWritingEngineering;
