import React from 'react';
import './Q2Scopus.scss';
import Sidebar from "../PublicationServicesSidebar"

const Q2Scopus = () => {
  const keywords = [
    'Q2 Scopus Journal Publication Services',
    'Scopus Q2 publication support',
    'Q2 engineering journals',
    'publish in Q2 Scopus',
    'Scopus Q2 submission services',
    'Narpavi Research Institute publication help',
    'moderate-impact Scopus journals',
  ];

  const subLinks = [
    { title: 'Q1 Scopus Journal Publication', path: '/q1-scopus-journal-publication' },
    { title: 'Q3 Scopus Journal Publication', path: '/q3-scopus-journal-publication' },
    { title: 'Q4 Scopus Journal Publication', path: '/q4-scopus-journal-publication' },
    { title: 'Scopus Journal Selection Help', path: '/scopus-journal-selection' },
    { title: 'Manuscript Formatting Services', path: '/scopus-manuscript-formatting' },
  ];

  const faqs = [
    {
      question: "What is the typical acceptance rate of Q2 Scopus journals?",
      answer: "Q2 Scopus journals have an average acceptance rate between 15% and 25%, depending on the discipline and journal scope.",
    },
    {
      question: "Can Narpavi Research Institute assist with Q2 reviewer comments?",
      answer: "Yes, we help in interpreting reviewer feedback and crafting effective responses for Q2 Scopus journal submissions.",
    },
  ];

  return (
    <div className="Q2Scopus-container">
      <Sidebar />
      <div className="Q2Scopus-wrapper">
        <div className="Q2Scopus-left">
          <h3>Keywords</h3>
          <ul>
            {keywords.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="Q2Scopus-center">
          <h1>Q2 Scopus Journal Publication Services</h1>
          <p>Publishing in Q2 Scopus journals offers researchers the opportunity to gain high visibility and academic recognition within their field. These journals are known for their strong peer-review process, moderate impact factors, and global readership. Our tailored Q2 Scopus Journal Publication Services help you secure publication in reputed journals that strike the right balance between quality and accessibility.</p>
          <p>At <strong>Narpavi Research Institute</strong>, we guide you through every stage of the publication process, ensuring your manuscript aligns with the technical, structural, and ethical standards of Q2 Scopus journals.</p>

          <h2>Balanced Reach with Q2 Journal Publishing</h2>
          <ul>
            <li>Mid-career researchers</li>
            <li>Funded academic projects</li>
            <li>Domain-specific contributions</li>
          </ul>
          <p>These journals accept work with solid methodologies, structured argumentation, and clear novelty. We help you polish every element — from abstract to references — making your paper submission-ready for reputable Q2 Scopus journals.</p>

          <h2>Comparative Overview: Q2 vs Other Quartiles</h2>
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
                <td>Structured peer review</td>
                <td>Basic review format</td>
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
                <td>Best For</td>
                <td>Advanced & Global Researchers</td>
                <td>Academicians and Professionals</td>
                <td>M.Tech/PhD Candidates</td>
                <td>Entry-level Authors</td>
              </tr>
            </tbody>
          </table>

          <h2>Comprehensive Support from Narpavi Research Institute</h2>
          <ul>
            <li>Journal shortlisting based on research scope</li>
            <li>Manuscript formatting and technical alignment</li>
            <li>Detailed plagiarism and grammar checks</li>
            <li>Reviewer comment handling</li>
            <li>Submission and follow-up assistance</li>
          </ul>
          <p>We provide complete project ownership, giving you peace of mind from draft to publication. Narpavi Research Institute ensures that your research reaches a high-impact audience without compromising on timelines or quality.</p>

          <h2>Boost Your Academic Profile</h2>
          <p>Publishing in a Q2 Scopus journal with our support enhances your CV, strengthens your academic credibility, and positions your work in globally circulated journals. Trust Narpavi Research Institute for your Q2 Scopus Journal Publication Services and take a confident step toward scholarly recognition.</p>

          <div className="Q2Scopus-faq">
            <h2>FAQs</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="Q2Scopus-right">
          <h3>Related Links</h3>
          <ul>
            {subLinks.map((link, index) => (
              <li key={index}><a href={link.path}>{link.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Q2Scopus;
