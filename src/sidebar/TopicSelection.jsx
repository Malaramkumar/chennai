import React from 'react';
import './TopicSelection.scss';
import Subsidebar from "../pages/Subsidebar"

const faqs = [
  {
    question: "How do I choose a PhD topic?",
    answer: "Start by reviewing recent research papers, identify gaps, and align your interests with supervisor expertise and current trends."
  },
  {
    question: "Can Narpavi suggest topics for any domain?",
    answer: "Yes, we provide domain-specific, research-worthy topics across Science, Engineering, Commerce, Arts, and more."
  },
  {
    question: "Will my topic be accepted by universities?",
    answer: "We align topics with supervisor profiles and funding trends to increase acceptance and publication chances."
  }
];

const TopicSelection = () => {
  return (
    <div className="topic-selection">
        <Subsidebar/>
      <section className="TopicSelectionhero">
        <h1>PhD Topic & Domain Selection Strategy</h1>
        <p>Start Your PhD Journey with the Right Research Direction</p>
      </section>

      <section className="TopicSelectioncontent">
        <p>
          Selecting the right PhD topic and domain is not just a requirement — it's the cornerstone of your entire doctoral journey. With over <strong>14+ years of unmatched expertise</strong>, Narpavi Research Institute has been guiding scholars across India in choosing impactful, research-worthy topics across disciplines.
        </p>
        <p>
          Whether you're pursuing PhD admission in Tamil Nadu or anywhere in India, our strategy ensures you’re aligned with <strong>emerging trends</strong>, <strong>research gaps</strong>, and <strong>supervisor expectations</strong>.
        </p>

        <h2>How to Identify Research Gaps</h2>
        <ul>
          <li><strong>Literature Review Support:</strong> Analyze current research to spot outdated or underexplored areas.</li>
          <li><strong>Trend Mapping:</strong> Discover trending domains through citation analysis and global databases.</li>
          <li><strong>Brainstorming Sessions:</strong> One-on-one idea validation and topic refinement with experts.</li>
        </ul>

        <h2>Aligning Topic with Funding Trends & Supervisor Expertise</h2>
        <ul>
          <li><strong>Supervisor Matching:</strong> We align your topic with guides' interests based on faculty profiles.</li>
          <li><strong>Funding Insights:</strong> Match your domain with themes supported by UGC, DST, CSIR, ICSSR.</li>
          <li><strong>High-Impact Areas:</strong> Focus on domains with real-world relevance and publishing scope.</li>
        </ul>

        <h2>Domain-Wise PhD Topic Suggestions</h2>
        <p>We offer custom topic ideas across:</p>
        <ul>
          <li>Science</li>
          <li>Engineering</li>
          <li>Commerce</li>
          <li>Arts & Humanities</li>
          <li>Management</li>
        </ul>

        <h2>Why Choose Narpavi for Topic & Domain Selection?</h2>
        <ul>
          <li> 14+ Years of Proven Excellence</li>
          <li> 1000+ Scholars Mentored Successfully</li>
          <li> Custom Guidance per University & Domain</li>
          <li> Industry-Academic Topic Alignment</li>
          <li> One-on-One Expert Consultations</li>
        </ul>

        <p className="TopicSelectionclosing">
          Your PhD topic selection defines your research, publications, and even career. At Narpavi, we ensure it’s strategic, relevant, and research-worthy — so you begin strong and finish successfully.
        </p>
      </section>

      <section className="TopicSelectionfaq-section">
        <h2>FAQs on Topic Selection</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* ✅ Schema Markup for SEO */}
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
      
    </div>
  );
};

export default TopicSelection;
