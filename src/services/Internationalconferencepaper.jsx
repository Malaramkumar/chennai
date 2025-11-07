import "./Phdservices.scss";
const faqs = [
  {
    question: "What is an international conference paper?",
    answer: "An international conference paper is a research paper presented at a conference that includes participants from multiple countries, focusing on academic or scientific advancements."
  },
  {
    question: "How do I submit a paper to an international conference?",
    answer: "You must identify a suitable conference, review its call for papers, follow the formatting and submission guidelines, and submit your paper before the deadline through their official portal."
  },
  {
    question: "What happens after I submit my paper?",
    answer: "Your paper typically undergoes a peer review process where experts assess its originality, quality, and relevance. You may receive feedback or revision requests before final acceptance."
  },
  {
    question: "Can my international conference paper be published?",
    answer: "Yes. If accepted, your paper may be included in the official conference proceedings, which may be published in print or digitally and indexed in academic databases."
  },
  {
    question: "Can I later publish my conference paper in a journal?",
    answer: "Yes, but you must significantly expand or revise the content. Most journals require that the journal article adds new findings beyond the original conference version."
  }
];

const InternationalConferencePublication = () => {
  return (
    <div className="phd-guidance-container">
      <h2 className="title">International Conference Paper Publication Services</h2>
      <p>
        Publishing a paper in an international conference involves a series of steps to ensure the submission, review, and presentation of your research work. Here's a general guide on how to publish a paper in an international conference:
      </p>
      <ol>
        <li><strong>Choose the Right Conference:</strong> Identify international conferences that align with your research area or topic of interest. Look for conferences with a reputation for quality and relevance to your field.</li>
        <li><strong>Review Conference Guidelines:</strong> Carefully read the conference's call for papers and submission guidelines. Take note of the submission deadline, formatting requirements, and any specific themes or topics the conference is focusing on.</li>
        <li><strong>Prepare Your Paper:</strong> Write your research paper following the conference guidelines and addressing the specified theme or topics. Ensure that your paper presents a clear research question, methodology, results, and conclusions.</li>
        <li><strong>Perform a Thorough Review:</strong> Before submitting your paper, conduct a thorough review and editing to ensure clarity, coherence, and adherence to academic writing standards.</li>
        <li><strong>Register and Submit:</strong> Register as an author on the conference website (if required) and submit your paper through the online submission system before the deadline. Upload all necessary documents and ensure all required information is provided.</li>
        <li><strong>Peer Review Process:</strong> After submission, your paper will undergo a peer review process. Reviewers, who are experts in the field, will assess the quality, originality, and relevance of your research. You may receive feedback to improve your paper before final acceptance.</li>
        <li><strong>Revise and Finalize:</strong> If your paper is accepted with minor revisions, make the necessary changes and finalize the paper according to the conference guidelines. If major revisions are required, address the reviewers' feedback thoroughly.</li>
        <li><strong>Prepare for Presentation:</strong> If your paper is accepted, you will be notified of the presentation format (oral presentation, poster presentation, etc.). Prepare your presentation slides or poster, and practice your delivery to ensure clarity and adherence to the allocated time.</li>
        <li><strong>Attend the Conference:</strong> Register as a participant and attend the conference on the specified dates. Participate in the conference sessions, network with other researchers, and engage in discussions related to your research area.</li>
        <li><strong>Publish in Conference Proceedings:</strong> After the conference, if your paper is included in the proceedings, you will have the opportunity to have your work published and available in the conference proceedings.</li>
      </ol>
      <p>
        Keep in mind that the acceptance of papers in international conferences is competitive, and not all submissions will be accepted. Ensure that your research follows ethical guidelines and academic integrity principles throughout the process. Additionally, consider expanding your research into journal publications to reach a wider audience and increase its impact in the academic community.
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

export default InternationalConferencePublication;
