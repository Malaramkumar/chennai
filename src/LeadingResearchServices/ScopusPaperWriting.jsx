import React from "react";
import "./ScopusPaperWriting.scss";
import { CheckCircle, BookCheck, Table, FileText, RefreshCcw, PenLine } from "lucide-react";

const faqs = [
  {
    question: "What is a Scopus-indexed journal?",
    answer:
      "Scopus is one of the largest abstract and citation databases of peer-reviewed literature. A Scopus-indexed journal meets specific quality benchmarks and is recognized internationally for academic publishing.",
  },
  {
    question: "How is Scopus paper writing different from regular paper writing?",
    answer:
      "Scopus papers require strict adherence to journal scope, formatting, citation styles, and originality checks. Regular papers may not meet indexing or quality standards required for Scopus publication.",
  },
  {
    question: "Do you help with selecting the right Scopus journal?",
    answer:
      "Yes. Our team recommends journals based on domain, scope, impact, and turnaround time. We consider your research topic and indexing goals before suggesting suitable options.",
  },
  {
    question: "How many references are used in a Scopus paper?",
    answer:
      "Typically, 30+ high-quality references are included from Scopus, Web of Science, and Google Scholar to ensure credibility and depth.",
  },
  {
    question: "What is the usual turnaround time?",
    answer:
      "Our standard delivery time is 10–15 working days, but expedited options are available depending on the complexity and requirements.",
  },
];

const ScopusPaperWriting = () => {
  return (
    <section className="scopus-writing">
      <div className="container">
        <h2>📘 Scopus Journal Paper Writing</h2>
        <p className="intro">
          At <strong>Narpavi Research Institute</strong>, our <strong>Scopus Journal Paper Writing</strong> service is designed to deliver customized manuscripts that align with the strict standards of Scopus-indexed journals. From selecting a journal to final formatting, we offer full-spectrum support for researchers across all domains.
        </p>

        <h3>✅ Key Benefits of Choosing Narpavi</h3>
        <ul className="benefits-list">
          <li><CheckCircle size={18} /> Customized to journal scope and submission guidelines</li>
          <li><BookCheck size={18} /> Strong literature base: 30+ references from Scopus/Web of Science</li>
          <li><Table size={18} /> Tables, graphs, and figures as per journal norms</li>
          <li><PenLine size={18} /> Expert writing team: Technical + domain-specific</li>
          <li><RefreshCcw size={18} /> Unlimited revisions until reviewer-ready</li>
        </ul>

        <h3>📊 Scopus Journal Paper Writing vs General Paper Writing</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Scopus Journal Paper Writing</th>
                <th>General Paper Writing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indexing Compliance</td>
                <td>Fully compliant with Scopus standards</td>
                <td>Not always aligned with indexed requirements</td>
              </tr>
              <tr>
                <td>Language Quality</td>
                <td>Professional, Academic, Technical</td>
                <td>Varies; not always journal-ready</td>
              </tr>
              <tr>
                <td>Formatting</td>
                <td>Strict journal-specific templates</td>
                <td>Generic or self-chosen</td>
              </tr>
              <tr>
                <td>Reference Style</td>
                <td>APA / IEEE / MLA / Elsevier-specific</td>
                <td>Basic or inconsistent</td>
              </tr>
              <tr>
                <td>Acceptance Support</td>
                <td>High (compliance + quality)</td>
                <td>Uncertain</td>
              </tr>
              <tr>
                <td>Review/Revision Assistance</td>
                <td>Yes</td>
                <td>Often not included</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🧠 Scopus Journal Paper Writing Architecture</h3>
        <pre className="flowchart">
CopyEdit
+---------------------------+
| 1. Domain Analysis        |
+---------------------------+
            ↓
+---------------------------+
| 2. Topic Finalization     |
+---------------------------+
            ↓
+---------------------------+
| 3. Literature Review      |
|    (Scopus-based)         |
+---------------------------+
            ↓
+---------------------------+
| 4. Methodology Design     |
+---------------------------+
            ↓
+---------------------------+
| 5. Draft Writing & QA     |
+---------------------------+
            ↓
+---------------------------+
| 6. Journal Formatting     |
+---------------------------+
            ↓
+---------------------------+
| 7. Final Review & Submit  |
+---------------------------+
        </pre>

        <h3>🚀 Key Features of Our Scopus Journal Paper Writing</h3>
        <ul className="features">
          <li>📌 <strong>Scopus Journal Paper Writing</strong> keyword included 4+ times for SEO</li>
          <li>✒️ Technical writing support for Engineering, CS, Management, Medicine & Social Science</li>
          <li>📥 Includes Turnitin report, Grammarly scorecard & citation index</li>
          <li>📚 Assistance with journal selection, submission & reviewer responses</li>
        </ul>

        <div className="cta-box">
          <h4>🔗 Let’s Get Your Paper Scopus-Ready!</h4>
          <p>Tap into Narpavi's publishing expertise and let your research reach global databases with confidence.</p>
          <a href="#" className="cta-button">👉 Write My Scopus Paper</a>
        </div>
      </div>
        <section className="faq-section">
        <h2>FAQs on Topic Selection</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
          </section>
    </section>
  );
};

export default ScopusPaperWriting;
