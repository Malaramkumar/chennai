import './Phdservices.scss';

const faqs = [
  {
    question: "What is Anna University's Annexure list?",
    answer: "It is a curated list of journals approved by Anna University for academic paper publications. Papers published in these journals are considered for faculty promotions and academic credit."
  },
  {
    question: "How can I find journals listed in the Annexure?",
    answer: "You can find the updated Annexure list on Anna University's official website or through their Centre for Research portal."
  },
  {
    question: "Is Scopus or SCI journal mandatory for Anna University publications?",
    answer: "Not always. Journals in the Annexure list may include Scopus, SCI, or UGC CARE journals, depending on the latest approved list by the university."
  },
  {
    question: "Can I submit to international journals for Annexure credit?",
    answer: "Yes, as long as the international journal appears in the Annexure list maintained by Anna University."
  },
  {
    question: "How long does the review process take?",
    answer: "It varies by journal, but typically it can take anywhere between 1 to 6 months depending on the review workflow and revisions required."
  }
];

const AnnaUniversityPublication = () => {
  return (
    <div className="phd-guidance-container">
   
      <h2 className="title">Anna University Annexure Paper Publication Services</h2>
      <p>
        Anna University in India maintains a list of approved journals that are eligible for inclusion in their Annexure. Getting acceptance for a research paper in one of these journals requires careful preparation and adherence to the university's guidelines. Here's how you can increase your chances of acceptance:
      </p>

      <ol>
        <li><strong>Choose a Relevant Journal:</strong> Select a journal from Anna University's approved Annexure list that aligns closely with your research area.</li>
        <li><strong>Read and Understand the Journal's Guidelines:</strong> Carefully review the journal’s submission, formatting, and citation requirements.</li>
        <li><strong>Quality of Research and Originality:</strong> Ensure your findings are original and significant to the academic community.</li>
        <li><strong>Write a Strong Introduction:</strong> Introduce the research topic, problem, and objectives clearly.</li>
        <li><strong>Robust Methodology:</strong> Explain your research design, data collection, and analysis methods in detail.</li>
        <li><strong>Clear Results and Discussion:</strong> Present results with clarity and support your interpretations with references.</li>
        <li><strong>Citations and References:</strong> Follow the specified style and cite all referenced works accurately.</li>
        <li><strong>Proofreading and Editing:</strong> Eliminate all grammatical and structural errors with thorough editing.</li>
        <li><strong>Cover Letter:</strong> Include a brief note highlighting the importance of your research and its fit for the journal.</li>
        <li><strong>Address Reviewer Comments:</strong> Respond to feedback constructively and revise your paper accordingly.</li>
        <li><strong>Ethical Considerations:</strong> Follow all ethical norms, including avoiding plagiarism and proper attribution.</li>
        <li><strong>Patience and Persistence:</strong> Prepare for multiple rounds of revisions and wait patiently through peer reviews.</li>
        <li><strong>Resubmission and Rejection:</strong> If rejected, use feedback to improve your paper and submit to another Annexure-listed journal.</li>
      </ol>

      <p>
        Remember that each journal has its own criteria for acceptance, and the selection process can be competitive. By producing high-quality research and following the journal's guidelines, you increase your chances of acceptance for publication in journals listed in Anna University's Annexure.
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

export default AnnaUniversityPublication;
