import React from "react";
import "./Phdservices.scss";
const faqs = [
  {
    question: "What is a PhD research proposal?",
    answer: "A PhD research proposal is a document outlining your intended research topic, objectives, methodology, and significance. It helps universities evaluate the feasibility and academic merit of your study."
  },
  {
    question: "Can I get help with writing my research proposal?",
    answer: "Yes, services like Narpavi Technologies offer guidance, editing, formatting, and methodology support to help you write a compelling and structured proposal."
  },
  {
    question: "Will the research proposal be original and plagiarism-free?",
    answer: "Yes, professional services ensure the content is original, well-cited, and plagiarism-checked, but the core idea should always come from the student."
  },
  {
    question: "Do I need to attend workshops if I use Narpavi Technologies' services?",
    answer: "No, Narpavi Technologies provides complete guidance and writing support, so attending external workshops is not necessary."
  },
  {
    question: "Is it ethical to use research proposal writing services?",
    answer: "Yes, it is ethical if the services are used for support, editing, and guidance—not for submitting someone else's work as your own."
  }
];

const ResearchProposal = () => {
  return (
    <div className="phd-guidance-container">
        <h1 className="title"> Research Proposal Writing Help & Services</h1>
      <p>
        Research proposal writing services in the context of Ph.D. studies generally refer to assistance or support provided by various organizations or individuals to help Ph.D. candidates in preparing and refining their research proposals. These services can be beneficial for students who are seeking guidance, feedback, or even full assistance in developing a strong and well-structured research proposal. <strong>Narpavi Technologies</strong> offers research proposal writing services for Ph.D. pursuers across the globe.
      </p>

      <p>Here are some common services offered by Narpavi Technologies:</p>

      <ol>
        <li>
          <strong>Research Proposal Writing:</strong> Narpavi Technologies offers assistance in writing research proposals. We can help you articulate your research question, outline the research methodology, and define the significance and objectives of your study.
        </li>
        <li>
          <strong>Proposal Editing and Proofreading:</strong> These services involve reviewing and editing your existing research proposal to enhance its clarity, coherence, and overall quality. This ensures that the proposal adheres to the required format and academic standards.
        </li>
        <li>
          <strong>Proposal Review and Feedback:</strong> Narpavi Technologies offers constructive feedback and suggestions on your research proposal. This can be useful in refining your proposal and ensuring that it aligns with the requirements of the Ph.D. program and research objectives.
        </li>
        <li>
          <strong>Formatting and Presentation:</strong> Ensuring that your research proposal follows the appropriate formatting guidelines is crucial. Our services can assist in formatting your proposal, including proper citation styles, headers, footers, and reference lists.
        </li>
        <li>
          <strong>Research Proposal Workshops and Seminars:</strong> Some institutions or research centers conduct workshops or seminars specifically focused on guiding Ph.D. students in the process of writing effective research proposals. But if you register yourself with <strong>Narpavi Technologies</strong> for research proposal writing services, you never have to attend these kinds of workshops and seminars.
        </li>
        <li>
          <strong>Research Methodology Guidance:</strong> Developing a sound research methodology is essential for any research proposal. Our services will offer specialized guidance on research design, data collection, and analysis methods.
        </li>
        <li>
          <strong>Access to Research Resources:</strong> Narpavi Technologies might give you access to academic databases, research journals, and other resources that can be instrumental in conducting a comprehensive literature review for your proposal.
        </li>
      </ol>

      <p>
        It's important to note that while research proposal services can be helpful, candidates should approach research proposal writers with caution and ensure that they maintain academic integrity throughout the process. Seeking assistance is acceptable, but the actual content and ideas presented in the proposal should be the candidate's original work. Hence, our team maintains the confidentiality of the work kept secret throughout your journey with us.
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

export default ResearchProposal;
