import "./Phdservices.scss";
const faqs = [
  {
    question: "What is PhD admission guidance?",
    answer: "PhD admission guidance involves expert support throughout the PhD registration process, including topic selection, university selection, proposal writing, and admission documentation."
  },
  {
    question: "How can Narpavi Technologies help with PhD admission?",
    answer: "Narpavi Technologies offers end-to-end PhD assistance including research topic selection, application preparation, proposal writing, plagiarism check, and complete admission support."
  },
  {
    question: "What documents are required for PhD admission?",
    answer: "Typically, you need a statement of purpose, CV, recommendation letters, transcripts, and possibly test scores like GRE or subject-specific exams."
  },
  {
    question: "Can you help me select a university and supervisor?",
    answer: "Yes, the team at Narpavi Technologies assists in selecting the right university and supervisor based on your research interests and goals."
  },
  {
    question: "Is funding assistance available?",
    answer: "Yes. We guide you through applying for assistantships, fellowships, or scholarships as part of your PhD journey."
  }
];

const PhDAdmissionGuidance= () => {
  return (
    <div className="phd-guidance-container">
        <h1 className="title">PhD Admission Guidance Help & Services</h1>
      <p>
        Your number of questions on pursuing your PhD is unanswered? You just had a thought that triggered you to pursue your PhD degree and don't know how to go about with the idea? You don't know how to make your writings with zero plagiarism? Is your analytics confusing? Worried about how to showcase your PhD paper? Your guide can't answer your silly questions? Then you must definitely go by the guidance of PhD assistance with <strong>Narpavi Technologies</strong> who has 12+ years of experience in this field.
      </p>

      <p>
        We can defend your Ph.D. research work at all stages and provide you step by step assistance in successful completion of your Ph.D. right from PhD admission to thesis submission viva process.
      </p>

      <p>
        Pursuing a Ph.D. (Doctor of Philosophy) is a significant undertaking that requires dedication, commitment, and a passion for research in a specific field. Here are the general steps involved in registering for a Ph.D.:
      </p>

      <ol>
        <li>
          <strong>Determine your research interests:</strong> Reflect on the field of study you are most interested in and the specific research questions you would like to explore. Consider your passion, strengths, and long-term goals to choose a topic that aligns with your interests.
        </li>
        <li>
          <strong>Research potential programs and universities:</strong> Look for universities and programs known for their expertise in your field of interest. Consider factors such as faculty members, research opportunities, funding availability, and location. Look into admission requirements and deadlines for each program. If you badly have no time for these requirements, our team of Narpavi Technologies will assist you in all the way of possibilities.
        </li>
        <li>
          <strong>Prepare application materials:</strong> Typically, Ph.D. applications require the following documents:
          <ul>
            <li>Statement of purpose: A personal essay outlining your research interests, career goals, and why you want to pursue a Ph.D.</li>
            <li>Curriculum vitae (CV): A detailed CV that highlights your academic background, research experience, publications, skills, and achievements.</li>
            <li>Letters of recommendation: From professors or mentors attesting to your academic ability and research potential.</li>
            <li>Transcripts: Official transcripts from academic institutions you have attended.</li>
            <li>Standardized test scores: Some programs may require tests like GRE or subject-specific exams.</li>
          </ul>
        </li>
        <li>
          <strong>Apply to Ph.D. programs:</strong> Submit your application materials before the designated deadline. Pay attention to any additional requirements or documents specific to each program.
        </li>
        <li>
          <strong>Funding and scholarships:</strong> Explore options such as assistantships, grants, scholarships, or fellowships. Many universities offer financial support for Ph.D. students.
        </li>
        <li>
          <strong>Select a supervisor/advisor:</strong> Upon acceptance, choose a faculty member as your supervisor. Make sure their expertise aligns with your research goals.
        </li>
        <li>
          <strong>Develop a research proposal:</strong> Collaborate with your advisor to develop a detailed research plan, including methodology and objectives.
        </li>
        <li>
          <strong>Coursework and comprehensive exams:</strong> Complete required coursework and pass comprehensive exams to show readiness for independent research.
        </li>
        <li>
          <strong>Conduct research and write your dissertation:</strong> Perform original research, collect and analyze data, and write a comprehensive dissertation based on your findings.
        </li>
        <li>
          <strong>Dissertation defense:</strong> Present and defend your research before a committee. A successful defense leads to the awarding of your Ph.D.
        </li>
      </ol>

      <p>
        Remember, the specific process and requirements may vary between universities and countries. It is essential to consult the guidelines and resources provided by the institutions you are applying to for accurate and up-to-date information. When you register yourself with <strong>Narpavi Technologies</strong> for PhD assistance, we take care of your complete work including PhD registration admission service.
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

export default PhDAdmissionGuidance;
