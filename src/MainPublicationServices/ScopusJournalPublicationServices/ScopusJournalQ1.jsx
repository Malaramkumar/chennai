import React from "react";
import "./ScopusJournalQ1.scss";
import Sidebar from "../PublicationServicesSidebar"
const Q1ScopusJournal = () => {
  const faqData = [
    {
      question: "What defines a Q1 Scopus journal?",
      answer:
        "A Q1 Scopus journal belongs to the top 25% of journals in a specific subject category based on impact factor and citation metrics.",
    },
    {
      question: "Do you guarantee acceptance in Q1 journals?",
      answer:
        "We do not guarantee acceptance, but we significantly improve your manuscript’s quality and alignment with Q1 journal requirements.",
    },
    {
      question: "Is the support tailored for specific domains?",
      answer:
        "Yes, our editorial and publication support is handled by experts in your specific research field.",
    },
  ];

  return (
    <div className="ScopusJournalQ1-container">
      <Sidebar />

      <div className="ScopusJournalQ1-main">
        {/* Left Sidebar */}
        <div className="ScopusJournalQ1-left">
          <h3>Keywords</h3>
          <ul>
            <li>Q1 Scopus Journal Publication Services</li>
            <li>Top-tier Scopus journals</li>
            <li>High-impact publication</li>
            <li>Peer-reviewed manuscript</li>
            <li>Submission support</li>
            <li>Narpavi Research Institute</li>
          </ul>
        </div>

        {/* Center Content */}
        <div className="ScopusJournalQ1-center">
          <h1>Q1 Scopus Journal Publication Services</h1>
          <p>
            Publishing in top-tier journals demands precision, originality, and strategic guidance. Our Q1 Scopus Journal Publication Services are designed for researchers and scholars aiming to publish in the most prestigious journals indexed in Scopus. With the highest impact factors and strict peer-review protocols, Q1 Scopus journals are the gold standard in engineering and scientific publishing.
          </p>
          <p>
            At <strong>Narpavi Research Institute</strong>, we provide comprehensive support to help you meet the high standards of Q1 Scopus Journal Publication Services. From manuscript refinement to submission handling, every step is carefully guided by subject matter experts and experienced editors.
          </p>

          <h2>Excellence in Q1 Journal Targeting</h2>
          <ul>
            <li>Advanced subject knowledge</li>
            <li>Novel research contributions</li>
            <li>Precision in formatting, citations, and language</li>
          </ul>
          <p>
            Our team identifies suitable Q1 journals in your domain and ensures that your manuscript adheres to their formatting and technical requirements. We also assist with plagiarism removal, references formatting, and response to reviewers.
          </p>

          <h2>Comparative Overview: Q1 vs Other Quartiles</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Q1 Journals</th>
                <th>Q2 Journals</th>
                <th>Q3 Journals</th>
                <th>Q4 Journals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ranking</td>
                <td>Top 25%</td>
                <td>25%–50%</td>
                <td>50%–75%</td>
                <td>Bottom 25%</td>
              </tr>
              <tr>
                <td>Impact Factor</td>
                <td>Very High</td>
                <td>High</td>
                <td>Moderate</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Acceptance Rate</td>
                <td>&lt;15%</td>
                <td>15–25%</td>
                <td>25–35%</td>
                <td>35%+</td>
              </tr>
              <tr>
                <td>Review Process</td>
                <td>Multi-stage blind review</td>
                <td>Peer-reviewed</td>
                <td>Single/Double review</td>
                <td>Moderate peer review</td>
              </tr>
              <tr>
                <td>Publication Time</td>
                <td>4–12 months</td>
                <td>3–8 months</td>
                <td>2–6 months</td>
                <td>2–4 months</td>
              </tr>
              <tr>
                <td>Ideal For</td>
                <td>PhD, Funded Research, Global Scholars</td>
                <td>Academic Professionals</td>
                <td>Early Researchers</td>
                <td>Local/Entry-level Authors</td>
              </tr>
            </tbody>
          </table>

          <h2>Strategic Publication with Narpavi Research Institute</h2>
          <ul>
            <li>Expert journal shortlisting</li>
            <li>Language and technical editing</li>
            <li>Ethical compliance checks</li>
            <li>Peer-review response drafting</li>
            <li>Final submission support</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>
            Engaging our Q1 Scopus Journal Publication Services ensures that your work is strategically positioned for international recognition. We elevate your manuscript to meet the standards of the world’s most prestigious journals. Let <strong>Narpavi Research Institute</strong> be your publication partner in excellence.
          </p>

          {/* FAQ Section */}
          <div className="ScopusJournalQ1-faq">
            <h2>FAQs – Q1 Scopus Journal Publication Services</h2>
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="ScopusJournalQ1-right">
          <h3>Related Services</h3>
          <ul>
            <li>Q2 Scopus Journal Publication</li>
            <li>Q3 Scopus Journal Support</li>
            <li>Journal Selection Help</li>
            <li>Manuscript Formatting Services</li>
            <li>Elsevier Journal Submission</li>
            <li>Springer Conference Assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Q1ScopusJournal;
