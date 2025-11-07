import "./Phdservices.scss";
const faqs = [
  {
    question: "How do I find Springer-affiliated conferences?",
    answer: "You can browse Springer's official conference listings on their website or check academic databases that list upcoming Springer-sponsored events."
  },
  {
    question: "Is every accepted paper automatically published by Springer?",
    answer: "No. Even after acceptance to the conference, your paper must meet Springer’s formatting and quality criteria to be published in the proceedings."
  },
  {
    question: "Are Springer conference papers considered high-quality?",
    answer: "Yes. Springer is a reputable academic publisher, and its conference proceedings are indexed in major databases like Scopus and Web of Science."
  },
  {
    question: "Do Springer conferences charge publication fees?",
    answer: "Many Springer-affiliated conferences have registration fees that include publication costs. Always check the specific conference’s website for details."
  },
  {
    question: "Can I publish the same paper in a Springer journal after the conference?",
    answer: "Yes, but it must be substantially extended. You should cite the original conference version and ensure there is no self-plagiarism."
  }
];

const SpringerConferencePublication = () => {
  return (
    <section className="phd-guidance-container">
      <h1 className="title">Springer Conference Paper Publication Services</h1>

      <p>
        Springer is a well-known academic publisher that publishes conference proceedings across many disciplines.
        While it doesn’t offer a specific “Springer Conference Paper Publication Service” as a standalone offering,
        it plays a key role in organizing and publishing conference papers after peer review.
      </p>

      <p>
        When you submit to a conference affiliated with Springer, your paper typically goes through a formal review
        process. If accepted, the paper may be presented at the conference and later included in the Springer-published
        proceedings.
      </p>

      <ol>
        <li>
          <strong>Identify Relevant Conferences:</strong> Use Springer's conference portal or academic databases to
          find suitable conferences related to your research area.
        </li>
        <li>
          <strong>Review Conference Guidelines:</strong> Understand submission deadlines, formatting styles,
          themes, and eligibility criteria listed on the conference’s website.
        </li>
        <li>
          <strong>Prepare Your Paper:</strong> Write your paper in the required Springer format and tailor it
          to match the conference theme.
        </li>
        <li>
          <strong>Submit Your Paper:</strong> Upload your paper through the designated conference submission
          system before the deadline.
        </li>
        <li>
          <strong>Peer Review Process:</strong> The conference committee will evaluate your submission based
          on technical soundness, relevance, and originality.
        </li>
        <li>
          <strong>Conference Presentation:</strong> If accepted, you’ll present your work during the event
          alongside other researchers and practitioners.
        </li>
        <li>
          <strong>Publication in Proceedings:</strong> High-quality accepted papers will be included in the
          official conference proceedings published by Springer.
        </li>
      </ol>

      <div>
        <h2 className="title">Important Notes</h2>
        <ul>
          <li>Springer conference papers are peer-reviewed and not guaranteed publication.</li>
          <li>Always verify conference legitimacy and Springer affiliation through official links.</li>
          <li>Conference papers may serve as precursors to more in-depth journal publications.</li>
        </ul>
      </div>
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
    </section>
  );
};

export default SpringerConferencePublication;
