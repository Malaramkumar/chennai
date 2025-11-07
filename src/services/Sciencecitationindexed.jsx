import "./Phdservices.scss";
const faqs = [
  {
    question: "What is an SCI journal?",
    answer: "SCI (Science Citation Index) journals are peer-reviewed publications indexed in Clarivate’s Web of Science database and are recognized globally for their academic impact."
  },
  {
    question: "How do I find suitable SCI journals for my research?",
    answer: "You can use tools like Web of Science, Scopus, or journal finder platforms to filter journals by field, impact factor, and scope."
  },
  {
    question: "Do SCI journals charge publication fees?",
    answer: "Some SCI journals are open access and charge publication fees (APC), while others are subscription-based and may not charge authors. Always check the journal’s website."
  },
  {
    question: "Can I get help in writing and submitting to SCI journals?",
    answer: "Yes, there are professional services that help with manuscript writing, formatting, submission, and responding to peer-review comments."
  },
  {
    question: "How long does the SCI publication process take?",
    answer: "The peer-review and acceptance process may take anywhere from 2 to 6 months or more, depending on the journal’s review policies and the number of revisions required."
  }
];

const SciPublicationGuide = () => {
  return (
    <div className="phd-guidance-container">
      <h1 className="title">Science Citation Indexed - SCI Paper Publication Services</h1>
      <p>
        Publishing a research paper in a Science Citation Indexed (SCI) journal involves a series of steps that require careful planning and preparation. Here's a general guide to help you through the process:
      </p>
      <ol>
        <li>
          <strong>Select a Suitable Journal:</strong>
          <ul>
            <li>Start by identifying potential SCI journals that align with your research topic and scope. Use tools like Web of Science, Scopus, or databases specific to your field.</li>
            <li>Read the journal's aims, scope, and recent publications to ensure your research fits within their focus.</li>
          </ul>
        </li>
        <li>
          <strong>Prepare Your Manuscript:</strong>
          <ul>
            <li>Write your research manuscript following the journal's specific guidelines, including formatting, word limits, and citation style.</li>
            <li>Structure your paper with sections like Introduction, Methodology, Results, Discussion, Conclusion, and References.</li>
            <li>Ensure your paper is well-written, clear, and logically organized.</li>
          </ul>
        </li>
        <li>
          <strong>Review and Revise:</strong> Seek feedback from colleagues or mentors to improve the quality of your manuscript. Revise and refine your paper multiple times to eliminate errors and enhance clarity.
        </li>
        <li>
          <strong>Check for Ethical Considerations:</strong> Ensure your research follows ethical guidelines and standards, including proper citation of sources, avoidance of plagiarism, and adherence to research ethics.
        </li>
        <li>
          <strong>Formatting and Submission:</strong>
          <ul>
            <li>Format your manuscript according to the journal's guidelines (font, margins, headings, figures, tables, etc.).</li>
            <li>Create a cover letter addressing the editor, explaining the significance of your research, and highlighting its fit with the journal's scope.</li>
          </ul>
        </li>
        <li>
          <strong>Online Submission:</strong> Most journals have online submission systems. Create an account if needed and submit your manuscript, cover letter, and any required supplementary files.
        </li>
        <li>
          <strong>Peer Review Process:</strong> The submitted manuscript will undergo peer review, where experts in the field assess the quality, validity, and significance of your research. Be prepared for potential revisions based on reviewer feedback. Address each comment and suggestion in a detailed response letter.
        </li>
        <li>
          <strong>Revisions and Resubmission:</strong> Revise your manuscript according to the feedback received from reviewers and the editor. Clearly explain the changes you've made in your response letter.
        </li>
        <li>
          <strong>Acceptance and Publication:</strong> If your paper is accepted, the journal will provide instructions for finalizing your manuscript and submitting any remaining materials. Pay any publication fees (if applicable) and sign any required copyright agreements.
        </li>
        <li>
          <strong>Proofreading and Pre-Publication:</strong> Carefully proofread your final version for any errors in grammar, spelling, or formatting. Review the proofs provided by the journal for accuracy before publication.
        </li>
        <li>
          <strong>Publication:</strong> Once your paper is published, it will be accessible to the scientific community and indexed in databases like Web of Science or Scopus. Promote your publication through social media, academic networks, and your institution's channels.
        </li>
      </ol>
      <p>
        Remember that the publication process can be competitive and time-consuming. It's important to have patience, perseverance, and a commitment to producing high-quality research. Also, each journal may have specific requirements, so carefully read and follow their guidelines throughout the process.
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

export default SciPublicationGuide;
