import React from "react";
import "./ScopusPaperServices.scss";
import Side from "../Sidebar";

const faqs = [
  {
    question: "Why are Scopus journal standards important?",
    answer:
      "Scopus journals are globally recognized and require high-quality, original, and well-structured research papers. Adhering to these standards increases your chances of acceptance."
  },
  {
    question: "Do you provide plagiarism and grammar reports?",
    answer:
      "Yes. Every paper includes a Turnitin or iThenticate plagiarism report and a Grammarly language check scorecard."
  },
  {
    question: "Can you help with specific journal formatting like Elsevier or Springer?",
    answer:
      "Absolutely. We format manuscripts according to journal-specific guidelines including APA, IEEE, Elsevier, and Springer templates."
  },
  {
    question: "What is the typical turnaround time?",
    answer:
      "Standard delivery is 10–15 working days. Expedited options are available based on urgency."
  },
  {
    question: "Do you assist with journal submission and reviewer comments?",
    answer:
      "Yes, we offer optional support for submitting to the journal and responding to reviewer feedback."
  }
];

const ScopusPaperServices = () => {
  return (
    <div className="scopus-layout">
      {/* Left Sidebar */}
      <div className="scopus-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="scopus-main-content">
        <h1>Scopus Journal Research Paper Writing Services</h1>
        <p>
          At <strong>Narpavi Research Institute</strong>, we deliver research paper writing services
          aligned with <strong>Scopus journal standards</strong>. Whether you're a PhD scholar,
          academic researcher, or industry expert, our team ensures your manuscript meets
          the expectations of top Scopus-indexed journals.
        </p>

        <h2 id="why-scopus">🧠 Why Scopus Standards Matter</h2>
        <p>Scopus journals are among the most prestigious and widely indexed academic publications. Submitting to a Scopus journal requires more than good writing — it demands:</p>
        <ul>
          <li>✔ Robust methodology and evidence-based results</li>
          <li>✔ Compliance with formatting and referencing rules</li>
          <li>✔ Scientifically sound language and structure</li>
          <li>✔ Original content aligned with current research trends</li>
        </ul>
        <p>At Narpavi, we bridge this gap by offering tailored research paper writing services that match these standards from start to finish.</p>
        <h2 id="what-included">✍️ What’s Included</h2>
        <p>We follow a proven, multi-step approach to ensure your paper is publication-ready:
</p>
        <ol>
          <li><strong>Topic & Domain Analysis:</strong> Trend-aligned title, hypothesis framing</li>
          <li><strong>Literature Review:</strong> 30+ citations from Scopus/Web of Science/IEEE</li>
          <li><strong>Methodology & Results:</strong> Customized approach, charts, tables</li>
          <li><strong>Academic Writing:</strong> Domain-specific tone, zero grammar issues</li>
          <li><strong>Formatting:</strong> APA, IEEE, Elsevier, or journal-specific styles</li>
          <li><strong>Plagiarism-Free:</strong> Report from Turnitin/iThenticate + Grammarly</li>
          <li><strong>Final Review:</strong> Unlimited revisions and journal submission support</li>
        </ol>
        <p>At Narpavi, we bridge this gap by offering tailored research paper writing services that match these standards from start to finish.</p>

        <h2 id="domains">🔍 Domains We Support</h2>
        <p>Our subject-matter experts cover a wide range of disciplines:</p>
        <ul>
          <li>🧪 Engineering & Technology</li>
          <li>🧬 Medical & Life Sciences</li>
          <li>💻 Computer Science & AI</li>
          <li>📊 Management & Business</li>
          <li>🌍 Social Sciences & Humanities</li>
        </ul>

        <h2 id="features">✅ Key Features</h2>
        <ul>
          <li>✔ 100% Original & Scopus-Compliant</li>
          <li>✔ Technical Accuracy + Strong Citations</li>
          <li>✔ Fast Turnaround: 10–15 Days</li>
          <li>✔ Unlimited Revisions</li>
          <li>✔ Plagiarism & Grammarly Reports</li>
        </ul>

        <h2>📈 Why Choose Narpavi?</h2>
        <ul>
          <li>📘 1,000+ Scopus-ready papers delivered</li>
          <li>🧑‍🔬 PhD-qualified subject matter experts</li>
          <li>🏆 High acceptance rates in top journals</li>
          <li>🔁 End-to-end service — from writing to submission</li>
        </ul>

        <h2>🚀 Get Started</h2>
        <p>
          Let our experts craft a Scopus-standard research paper while you focus on your core research.
          <br />
          👉 <a href="#consultation">Request a Free Consultation</a> <br />
          👉 <a href="#order">Order Your Scopus Paper</a>
        </p>

        <section id="faq" className="alluniversityfaq-section">
          <h2>📌 FAQs on Topic Selection</h2>
          <div className="scopus-faq-items">
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
      <div className="scopus-right-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#why-scopus">Why Scopus?</a></li>
          <li><a href="#what-included">What's Included</a></li>
          <li><a href="#domains">Domains Supported</a></li>
          <li><a href="#features">Key Features</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ScopusPaperServices;
