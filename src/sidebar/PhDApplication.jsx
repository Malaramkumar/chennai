import React from 'react';
import './PhDApplication.scss';
import Subsidebar from "../pages/Subsidebar"

const faqs = [
  {
    question: "What documents are mandatory for a PhD application?",
    answer: "UG & PG degree certificates, mark sheets, resume, SOP, and NOC (if employed) are typically required."
  },
  {
    question: "Can Narpavi help with university portal registration?",
    answer: "Yes, we provide full support for portal registration, form filling, and document upload."
  },
  {
    question: "What happens if I miss the application deadline?",
    answer: "You’ll need to wait for the next admission cycle. We track deadlines to ensure you don’t miss out."
  }
];

const suggestedKeywords = [
  "PhD application filling guide",
  "PhD admission form help",
  "PhD application Tamil Nadu",
  "How to apply for PhD",
  "University PhD portal registration",
  "PhD admission assistance India",
  "Required documents for PhD",
  "Timeline for PhD application process",
  "PhD entrance application tips",
  "Best PhD guidance center Tamil Nadu"
];

const PhDApplicationGuide = () => {
  return (
    <div className="phd-application">
        <Subsidebar/>
      <section className="applicationhero">
        <h1>Step-by-Step Guide to PhD Application Filling</h1>
        <p>Begin Your PhD Journey with Confidence</p>
      </section>

      <section className="applicationcontent">
        <p>
          Filling out a PhD application might seem simple, but one small mistake can lead to rejection or delay. With over <strong>14+ years</strong> of experience, Narpavi Research Institute has helped 1000+ scholars apply successfully.
        </p>

        <h2>Step-by-Step Application Process</h2>
        <ul>
          <li>📌 <strong>Step 1:</strong> Choose Your University & Research Area</li>
          <li>🖥️ <strong>Step 2:</strong> Register on the University Portal</li>
          <li>📝 <strong>Step 3:</strong> Fill in Application Details Carefully</li>
        </ul>

        <h2>📄 Common Documents Required</h2>
        <p>Ensure these are scanned in PDF format (usually &lt; 1MB each):</p>

        <ul>
          <li>UG & PG degree certificates and mark sheets</li>
          <li>Transfer and Conduct Certificates</li>
          <li>Community certificate (if applicable)</li>
          <li>Passport-size photo and signature</li>
          <li>Updated resume or CV</li>
          <li>Research Proposal / SOP</li>
          <li>Experience certificates (for part-time)</li>
          <li>No Objection Certificate (if employed)</li>
        </ul>
        <p className="applicationnote">✅ Narpavi helps review and prepare every document before upload to avoid errors.</p>

        <h2>🗓️ Application Timeline Overview</h2>
        <table>
          <thead>
            <tr><th>Activity</th><th>Approximate Timeline</th></tr>
          </thead>
          <tbody>
            <tr><td>Notification Release</td><td>Jan–Mar or Aug–Oct</td></tr>
            <tr><td>Application Deadline</td><td>3–4 weeks post notification</td></tr>
            <tr><td>Exam/Interview Date</td><td>1–2 months after deadline</td></tr>
            <tr><td>Result Announcement</td><td>15–30 days after interview</td></tr>
          </tbody>
        </table>

        <h2>🎯 Why Choose Narpavi?</h2>
        <ul>
          <li>University-wise portal support</li>
          <li>Document preparation & review</li>
          <li>One-on-one consultation</li>
          <li>Timely reminders & deadline tracking</li>
        </ul>

        <p className="applicationclosing">
          The PhD application process doesn’t have to be overwhelming. With Narpavi, your forms, documents, and timelines are handled with care and expertise — so you can focus on your research journey ahead.
        </p>
      </section>

      <section className="applicationfaq-section">
        <h2>📘 FAQs on PhD Application</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* SEO: FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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

      <aside className="applicationkeywords">
        <h3>🔑 Suggested Keywords</h3>
        <ul>
          {suggestedKeywords.map((keyword, index) => (
            <li key={index}>🔹 {keyword}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default PhDApplicationGuide;
