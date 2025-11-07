import "./Phdservices.scss";
const faqs = [
    {
      question: "What is Web of Science?",
      answer:
        "Web of Science (WoS) is a premier research platform that indexes scholarly journals and provides citation data across disciplines."
    },
    {
      question: "How do I check if a journal is indexed in WoS?",
      answer:
        "You can search the journal title in the official Master Journal List (MJL) on the Web of Science website."
    },
    {
      question: "Is publication in WoS journals mandatory for PhD?",
      answer:
        "It depends on your university or department requirements. Many institutions encourage or require at least one WoS-indexed publication for PhD submission."
    },
    {
      question: "What are the benefits of publishing in WoS?",
      answer:
        "Publishing in WoS journals increases the visibility, credibility, and academic value of your research. It also helps in global recognition."
    },
    {
      question: "How long does it take to publish in a WoS journal?",
      answer:
        "The peer-review and revision process can take several months, depending on the journal's workflow and the quality of the manuscript."
    }
  ];

const WebOfSciencePublication = () => {
  return (
    <section className="phd-guidance-container">
      <h1 className="title">Web of Science Paper Publication Services</h1>

      <p>
        Publishing a paper in Web of Science (WoS) indexed journals follows a similar process to other academic
        publications. WoS is a prestigious bibliographic database that includes journal articles, conference papers,
        and more. Here are the essential steps to publish in a WoS-indexed journal:
      </p>

      <ol>
        <li>
          <strong>Choose the Right Journal:</strong> Use the WoS database or Journal Citation Reports (JCR) to find
          reputable journals in your field with strong impact factors.
        </li>
        <li>
          <strong>Review Journal Guidelines:</strong> Understand the scope, formatting, citation style, and other
          requirements listed by the journal.
        </li>
        <li>
          <strong>Prepare Your Paper:</strong> Follow the journal's format while ensuring a strong research question,
          clear methodology, supported results, and insightful conclusions.
        </li>
        <li>
          <strong>Perform a Thorough Review:</strong> Proofread your manuscript and check for clarity, logic, and
          consistency before submission.
        </li>
        <li>
          <strong>Register and Submit:</strong> Create an account on the journal’s portal and submit your paper with all
          necessary documents.
        </li>
        <li>
          <strong>Peer Review Process:</strong> Experts will evaluate your work. Be prepared to receive and respond to
          reviewer feedback.
        </li>
        <li>
          <strong>Revise and Finalize:</strong> Incorporate reviewer comments and improve your paper as needed.
        </li>
        <li>
          <strong>Acceptance and Publication:</strong> Once accepted, you'll receive confirmation and your paper will be
          scheduled for publication.
        </li>
        <li>
          <strong>Copyright Transfer:</strong> You may be asked to sign an agreement to allow the journal to publish
          your work.
        </li>
        <li>
          <strong>Proofreading:</strong> Review the final galley proof for any last-minute edits before final publication.
        </li>
        <li>
          <strong>Paper Publication:</strong> After all approvals, your paper will be published in the journal.
        </li>
      </ol>

      <p>
        The entire process can span several months. Ensure your research upholds academic ethics, and always seek
        constructive feedback from peers and mentors to improve your chances of successful publication.
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
    </section>
  );
};

export default WebOfSciencePublication;
