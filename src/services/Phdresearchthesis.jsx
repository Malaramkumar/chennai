import "./Phdservices.scss";
const faqs = [
  {
    question: "What is the ideal length of a PhD thesis?",
    answer:
      "The ideal length varies by university and discipline, but typically ranges between 150 to 300 pages, excluding references and appendices."
  },
  {
    question: "What citation style should I use for my thesis?",
    answer:
      "The citation style depends on your department's guidelines—common styles include APA, MLA, Chicago, and IEEE."
  },
  {
    question: "How long does it take to write a PhD thesis?",
    answer:
      "Writing a PhD thesis can take anywhere from 6 months to over a year, depending on the complexity of your research and writing pace."
  },
  {
    question: "Can I get professional help with my thesis writing?",
    answer:
      "Yes, there are academic services and consultants that offer thesis writing guidance, editing, formatting, and plagiarism checking."
  },
  {
    question: "What is the difference between a thesis and a dissertation?",
    answer:
      "In many countries, 'thesis' and 'dissertation' are used interchangeably, but some distinguish them based on academic level (e.g., Master's vs. PhD)."
  }
];

const PhdThesisWriting = () => {
  return (
    <div className="phd-guidance-container">
      <h1 className="title">PhD Research Thesis Writing Services Help</h1>
      <p>
        Writing a thesis can be a challenging and time-consuming task, but with proper guidance and organization,
        you can successfully complete it. Here are some steps and tips to assist you in the process:
      </p>
      <ol>
        <li><strong>Topic Selection:</strong> Choose a topic that genuinely interests you and aligns with your area of study.</li>
        <li><strong>Research:</strong> Conduct extensive research using academic databases, books, journals, and reputable sources.</li>
        <li><strong>Thesis Statement:</strong> Formulate a clear and concise thesis statement that outlines the purpose of your paper.</li>
        <li><strong>Outline:</strong> Create a structured outline to organize your ideas and maintain logical flow.</li>
        <li><strong>Introduction:</strong> Start with an engaging introduction that sets the background and thesis statement.</li>
        <li><strong>Literature Review:</strong> Analyze existing research to establish the relevance of your work.</li>
        <li><strong>Methodology:</strong> Describe your research methods, tools, and justification for their use.</li>
        <li><strong>Results:</strong> Present findings clearly using tables, graphs, and charts where applicable.</li>
        <li><strong>Discussion:</strong> Interpret results, address limitations, and suggest future research directions.</li>
        <li><strong>Conclusion:</strong> Summarize key points, restate the thesis, and emphasize the research's significance.</li>
        <li><strong>References:</strong> Cite all sources using the correct citation style (APA, MLA, Chicago, etc.).</li>
        <li><strong>Editing and Proofreading:</strong> Thoroughly check grammar, spelling, and formatting errors.</li>
        <li><strong>Plagiarism Check:</strong> Use plagiarism detection tools to ensure originality.</li>
        <li><strong>Consistency:</strong> Maintain consistency in language, terms, and formatting throughout.</li>
        <li><strong>Seek Feedback:</strong> Get reviews from advisors, peers, or mentors for improvement.</li>
        <li><strong>Time Management:</strong> Create a timeline and break the process into manageable steps.</li>
        <li><strong>Stay Focused:</strong> Eliminate distractions and maintain concentration during writing.</li>
        <li><strong>Take Breaks:</strong> Prevent burnout by taking regular breaks for a fresh perspective.</li>
      </ol>
      <p>
        Remember, writing a thesis is a significant undertaking. Use available academic resources and don't hesitate
        to ask for help or clarification. Good luck with your thesis writing!
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

export default PhdThesisWriting;
