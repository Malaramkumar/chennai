import "./Phdservices.scss";
const faqs = [
  {
    question: "What is a Scopus-indexed journal?",
    answer: "A Scopus-indexed journal is a peer-reviewed academic journal listed in Elsevier’s Scopus database, recognized globally for its research impact."
  },
  {
    question: "How do I find suitable Scopus-indexed journals for my paper?",
    answer: "You can use the Scopus website or journal finders to search by field, topic, or ISSN to identify appropriate journals for your work."
  },
  {
    question: "Is it hard to get published in a Scopus-indexed journal?",
    answer: "Yes, it can be competitive. Strong methodology, novelty, and proper formatting are key to improving your chances of acceptance."
  },
  {
    question: "Do Scopus journals charge publication fees?",
    answer: "Some do, especially open-access ones. Others may be free but require institutional access. Always check the journal’s website."
  },
  {
    question: "Can I get help writing a Scopus-level research paper?",
    answer: "Yes, professional academic writing services and mentors can guide you with structuring, formatting, and language polishing."
  }
];

const ConferenceWritingGuide = () => {
  return (
    <div className="conference-container">
      <h2 className="conference-title">
        Writing a Paper for Scopus-Indexed Journals
      </h2>
      <p className="conference-intro">
        Writing a paper to publish in Scopus-indexed journals requires careful
        planning, diligent research, and adherence to the journal's specific
        guidelines and standards. Here's a step-by-step guide to help you in the
        process:
      </p>
      <ol className="conference-list">
        <li>
          <strong>Select a Relevant Research Topic:</strong> Choose a topic that
          aligns with your expertise and interests. Ensure it's relevant to your
          field and addresses a current issue or research gap.
        </li>
        <li>
          <strong>Conduct a Comprehensive Literature Review:</strong> Understand
          the existing body of knowledge and identify gaps your research can
          fill.
        </li>
        <li>
          <strong>Formulate Clear Research Objectives:</strong> Define the
          research questions and objectives that guide your paper.
        </li>
        <li>
          <strong>Choose the Right Journal:</strong> Target Scopus-indexed
          journals relevant to your research, considering scope, audience, and
          impact factor.
        </li>
        <li>
          <strong>Review the Journal Guidelines:</strong> Follow formatting,
          citation, and submission rules as per the chosen journal.
        </li>
        <li>
          <strong>Plan Your Research Methodology:</strong> Describe your research
          design, methods, and data analysis process.
        </li>
        <li>
          <strong>Collect and Analyze Data:</strong> Gather and evaluate data
          using appropriate tools and techniques.
        </li>
        <li>
          <strong>Organize Your Paper:</strong> Include standard sections:
          abstract, introduction, literature review, methodology, results,
          discussion, conclusion, and references.
        </li>
        <li>
          <strong>Write Clearly and Concisely:</strong> Ensure clarity and
          simplicity, avoiding excessive jargon.
        </li>
        <li>
          <strong>Emphasize Contributions:</strong> Show how your research adds
          to the field and addresses gaps.
        </li>
        <li>
          <strong>Include Proper Citations:</strong> Accurately cite all sources
          per the journal's citation style.
        </li>
        <li>
          <strong>Seek Feedback:</strong> Ask peers or mentors to review your
          draft.
        </li>
        <li>
          <strong>Review and Revise:</strong> Proofread thoroughly to eliminate
          errors.
        </li>
        <li>
          <strong>Submit to the Journal:</strong> Use the journal's submission
          system and follow all requirements.
        </li>
        <li>
          <strong>Respond to Peer Review:</strong> Address feedback and revise
          accordingly.
        </li>
      </ol>
      <p className="conference-footer">
        Remember, getting published in a Scopus-indexed journal takes effort and
        perseverance. Always adhere to ethical research standards and academic
        integrity throughout the process.
      </p>
         <section className="servicefaq-section">
  <h2>📘 FAQs on Annexure Journal Publications</h2>
  <div className="faq-items">
    {faqs.map((faq, index) => (
      <details key={index}>
        <summary>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>
    ))}
  </div>

  {/* Proper way to include JSON-LD schema in React */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
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
      })
    }}
  />
</section>
    </div>
  );
};

export default ConferenceWritingGuide;
