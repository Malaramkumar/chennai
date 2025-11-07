import React from "react";
import "./ReviewArticleWriting.scss";
import { BookOpen, ListChecks, CheckCircle2, FileText } from "lucide-react";

const faqs = [
  {
    question: "What is a Review Article?",
    answer:
      "A review article summarizes and synthesizes previous research on a topic, offering critical insights, gaps, and future directions. It doesn't involve new experiments or data collection.",
  },
  {
    question: "How is a review article different from a research article?",
    answer:
      "Review articles provide an overview of existing research, while research articles present original experimental results or findings from new studies.",
  },
  {
    question: "How many references are typically included in a review article?",
    answer:
      "Our review articles include 50–150+ citations from reputed sources like PubMed, Scopus, and Web of Science to ensure academic depth and credibility.",
  },
  {
    question: "Can I choose my preferred journal formatting style?",
    answer:
      "Yes. We support various styles such as APA, IEEE, Elsevier, and Springer. Just let us know your target journal, and we’ll format accordingly.",
  },
  {
    question: "How long does it take to complete a review article?",
    answer:
      "It usually takes 7–10 working days, depending on the topic complexity and literature availability.",
  },
];

const ReviewArticleWriting = () => {
  return (
    <section className="review-article">
      <div className="container">
        <h2>📖 Review Article Writing</h2>
        <p className="intro">
          At <strong>Narpavi Research Institute</strong>, we specialize in <strong>Review Article Writing</strong> that meets the highest academic and publishing standards. Whether you're submitting to Scopus, SCI, or IEEE-indexed journals, our review articles are crafted with depth, extensive literature, and critical analysis.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <BookOpen size={28} />
            <h4>📚 Literature-Rich Content</h4>
            <p>Includes 50+ citations from PubMed, Scopus, Web of Science, and other top databases.</p>
          </div>
          <div className="feature-card">
            <ListChecks size={28} />
            <h4>🧠 Domain-Centric Analysis</h4>
            <p>Domain-specific experts ensure accuracy and scholarly insight.</p>
          </div>
          <div className="feature-card">
            <CheckCircle2 size={28} />
            <h4>🧾 Publication-Ready Formatting</h4>
            <p>Articles comply with APA, IEEE, Elsevier, and other journal formats.</p>
          </div>
          <div className="feature-card">
            <FileText size={28} />
            <h4>✍️ Customized Writing Support</h4>
            <p>From ideation to final draft, we support every phase of your article.</p>
          </div>
        </div>

        <h3>🔍 Comparative Table: Review vs Research Article</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Review Article Writing</th>
                <th>Research Article Writing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purpose</td>
                <td>Summarize and evaluate existing research</td>
                <td>Present novel findings or experiments</td>
              </tr>
              <tr>
                <td>Literature Involvement</td>
                <td>Extensive (50–150+ citations)</td>
                <td>Limited to relevant background</td>
              </tr>
              <tr>
                <td>Data/Experimentation</td>
                <td>Secondary research only</td>
                <td>Requires original data and analysis</td>
              </tr>
              <tr>
                <td>Journal Preference</td>
                <td>Scopus, SCI, Springer</td>
                <td>Scopus, SCI, IEEE, ACM</td>
              </tr>
              <tr>
                <td>Writing Time Frame</td>
                <td>7–10 working days</td>
                <td>10–15 working days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🔧 Review Article Writing Architecture</h3>
        <pre className="architecture">
CopyEdit
  +-----------------------------+
  |   Topic Identification      |
  +-------------+---------------+
                ↓
  +-----------------------------+
  | Literature Collection       |
  | (Databases, Journals)       |
  +-------------+---------------+
                ↓
  +-----------------------------+
  | Theme-Based Organization    |
  +-------------+---------------+
                ↓
  +-----------------------------+
  | Critical Analysis & Gaps    |
  +-------------+---------------+
                ↓
  +-----------------------------+
  | Structured Drafting         |
  +-------------+---------------+
                ↓
  +-----------------------------+
  | Plagiarism Check & QA       |
  +-------------+---------------+
                ↓
  +-----------------------------+
  | Journal Formatting & Submit |
  +-----------------------------+
        </pre>

        <div className="highlights">
          <h3>✅ Highlights of Our Review Article Writing Service</h3>
          <ul>
            <li>📌 SEO Optimized: “Review Article Writing” included 4+ times</li>
            <li>📈 100% Plagiarism-free, Grammarly-enhanced manuscripts</li>
            <li>🔄 Free revisions until journal acceptance</li>
            <li>🌐 Supports Engineering, Medical, Management, Tech & more</li>
          </ul>
        </div>

        <div className="cta-section">
          <p>🔗 Ready to Publish?<br />
            Let our experts transform your research idea into a publication-worthy review article.</p>
          <a href="#" className="cta-button">👉 Write a Review Article</a>
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

export default ReviewArticleWriting;
