import "./Phdservices.scss";
const faqs = [
  {
    question: "What is a PhD synopsis?",
    answer:
      "A PhD synopsis is a concise summary of your proposed research, including the research problem, objectives, methodology, and expected outcomes."
  },
  {
    question: "How long should a PhD synopsis be?",
    answer:
      "Typically, a synopsis is around 1,500 to 3,000 words, but it may vary based on university requirements."
  },
  {
    question: "What are the components of a good synopsis?",
    answer:
      "A well-written synopsis includes the title, introduction, literature review, research gap, objectives, methodology, timeline, and references."
  },
  {
    question: "Is the synopsis the same as the research proposal?",
    answer:
      "They are similar, but a synopsis is often shorter and more focused. It's commonly submitted before registering the thesis formally."
  },
  {
    question: "Can I get expert help in writing my synopsis?",
    answer:
      "Yes, many academic support services offer help in drafting, reviewing, and refining your PhD synopsis to meet university standards."
  }
];

const PhdSynopsisHelp = () => {
  return (
    <section className="phd-guidance-container">
      <h1 className="title">PhD Research Synopsis Writing Services Help</h1>
      <p>
        Writing a synopsis can be a challenging task, but with a structured
        approach, you can effectively summarize your story or concept. Here are
        some steps to help you write a synopsis:
      </p>
      <ol>
        <li>
          <strong>Understand the Purpose:</strong> A synopsis provides a concise
          overview of your story or concept, highlighting the key plot points,
          characters, and themes. It should convey the main narrative arc and
          generate interest in your work.
        </li>
        <li>
          <strong>Start with a Hook:</strong> Begin your synopsis with a
          compelling opening that grabs the reader's attention and sets the
          tone for the story. It could be an intriguing question, a vivid
          description, or a thought-provoking statement.
        </li>
        <li>
          <strong>Introduce the Main Characters:</strong> Briefly introduce the
          main characters and their roles in the story. Mention their names,
          relevant characteristics, and their goals or motivations.
        </li>
        <li>
          <strong>Outline the Plot:</strong> Provide a clear and concise summary
          of the major events and plot points in your story. Focus on the main
          conflict, turning points, and climax. Avoid excessive detail or
          subplots that aren't crucial to the main storyline.
        </li>
        <li>
          <strong>Highlight the Themes and Tone:</strong> Discuss the underlying
          themes and tone of your story. What ideas or messages are you
          conveying? Is it a suspenseful thriller, a heartwarming romance, or a
          thought-provoking drama? Briefly touch upon the emotional journey and
          atmosphere of the story.
        </li>
        <li>
          <strong>Maintain a Logical Flow:</strong> Ensure that your synopsis
          flows smoothly from one paragraph to the next. Use clear transitions
          to guide the reader through the synopsis, making it easy to follow the
          narrative.
        </li>
        <li>
          <strong>Keep it Concise:</strong> Aim for a concise synopsis that
          captures the essence of your story without unnecessary details. Stick
          to the main plot and avoid lengthy descriptions or tangents. Most
          synopses range from one to three pages, depending on the industry and
          guidelines provided.
        </li>
        <li>
          <strong>Edit and Revise:</strong> After completing the initial draft,
          review your synopsis for clarity, coherence, and accuracy. Trim any
          redundant or irrelevant information and refine your language to make
          it engaging and polished.
        </li>
        <li>
          <strong>Seek Feedback:</strong> Share your synopsis with trusted
          friends, writing groups, or industry professionals to get their
          feedback. They can provide valuable insights and help you identify
          areas for improvement.
        </li>
        <li>
          <strong>Tailor to Submission Guidelines:</strong> If you're writing a
          synopsis for a specific submission or query, make sure to adhere to
          the guidelines provided by publishers, literary agents, or contest
          organizers. Follow any specific length or formatting requirements they
          may have.
        </li>
      </ol>
      <p>
        Remember that writing a synopsis is a skill that takes practice. Be open
        to revisions and iterate on your synopsis as necessary to create a
        compelling and accurate summary of your story or concept.
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

export default PhdSynopsisHelp;
