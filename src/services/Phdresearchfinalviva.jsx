import "./Phdservices.scss";
const faqs = [
  {
    question: "What is the purpose of a PhD viva?",
    answer:
      "The PhD viva is an oral examination where you defend your thesis in front of examiners. It's designed to assess your understanding, originality, and contribution to your field."
  },
  {
    question: "How can I best prepare for the PhD viva?",
    answer:
      "Thoroughly review your thesis, anticipate potential questions, conduct mock vivas, and stay updated on related literature. Practice explaining your methodology and key findings clearly."
  },
  {
    question: "What kind of questions are asked in the viva?",
    answer:
      "Questions can range from basic concepts and literature background to detailed queries on your methodology, results, and the impact of your findings."
  },
  {
    question: "Should I prepare a presentation for the viva?",
    answer:
      "Some universities require a brief presentation summarizing your research. Even if not mandatory, preparing slides can help structure your thoughts and improve clarity."
  },
  {
    question: "How long does the viva typically last?",
    answer:
      "A PhD viva can last anywhere between 1 to 3 hours depending on the subject, examiner style, and depth of discussion."
  },
  {
    question: "What happens after the viva?",
    answer:
      "You may be asked to make minor or major revisions to your thesis. Once approved, you can submit the final version for awarding the degree."
  }
];

const PhdVivaHelp = () => {
  return (
    <section className="phd-guidance-container">
      <h1 className="title">
        PhD Research Final Viva Preparation Help Services
      </h1>
      <p>
        Preparing for the final viva of your Ph.D. is a significant milestone in your academic journey. Here are some tips to help you get ready for the viva:
      </p>
      <ol>
        <li>
          <strong>Know your research thoroughly:</strong> Understand your full Ph.D. work, including the research problem, objectives, methodology, results, and conclusions.
        </li>
        <li>
          <strong>Review your thesis:</strong> Read through it multiple times to refresh your memory and anticipate potential questions.
        </li>
        <li>
          <strong>Anticipate possible questions:</strong> Think of both general and specific questions examiners might ask.
        </li>
        <li>
          <strong>Practice with mock viva:</strong> Rehearse with colleagues, friends, or mentors to simulate the real experience.
        </li>
        <li>
          <strong>Understand related literature:</strong> Know how your work fits into the broader academic context.
        </li>
        <li>
          <strong>Know your contributions:</strong> Be clear about your unique contributions to the field.
        </li>
        <li>
          <strong>Be ready for criticism:</strong> Accept feedback constructively and show critical thinking.
        </li>
        <li>
          <strong>Relax and stay confident:</strong> It's okay to not know everything—stay calm and focus on your strengths.
        </li>
        <li>
          <strong>Prepare presentation slides:</strong> If needed, prepare concise slides summarizing your research.
        </li>
        <li>
          <strong>Be aware of institutional procedures:</strong> Learn your university’s viva rules and format.
        </li>
        <li>
          <strong>Get adequate rest:</strong> Avoid cramming and ensure you’re well-rested before the viva.
        </li>
        <li>
          <strong>Ask for advice:</strong> Talk to supervisors or peers for helpful tips and reassurance.
        </li>
      </ol>
      <p>
        Remember, the viva is your opportunity to showcase your research and hard work. Embrace it confidently and professionally.
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

export default PhdVivaHelp;
