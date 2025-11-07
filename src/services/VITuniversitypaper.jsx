import "./Phdservices.scss";
const faqs = [
  {
    question: "Which indexing databases are accepted by VIT for PhD publications?",
    answer: "VIT accepts SCI, Scopus, IEEE Xplore, PubMed, ESCI, ACM, INSPEC, DBLP, ERIC, and Google Scholar as credible indexing databases."
  },
  {
    question: "Is Scopus-indexed publication mandatory at VIT?",
    answer: "While not mandatory for all departments, Scopus-indexed publications are highly recommended and often considered during evaluations."
  },
  {
    question: "How can I verify if a journal is indexed?",
    answer: "You can verify the indexing status of a journal by searching it on official indexing websites like Scopus, Web of Science, or IEEE."
  },
  {
    question: "Can I publish in Google Scholar-indexed journals?",
    answer: "Yes, but it's advisable to prioritize journals indexed in databases like Scopus or SCI for higher academic credibility."
  },
  {
    question: "What kind of support is available for paper writing and submission?",
    answer: "There are services that offer help with journal selection, manuscript editing, formatting, submission, and response to reviewers."
  }
];

const VitPublication = () => {
  return (
    <section className="phd-guidance-container">
      <h1 className="title">VIT University Paper Publication Services</h1>

      <p>
        VIT University Vellore, now known as Vellore Institute of Technology (VIT), encourages the publication of
        research papers in reputed, indexed journals. While exact requirements may differ by department, these
        are the most commonly accepted indexing databases affiliated with VIT standards:
      </p>

      <ol>
        <li>
          <strong>SCI (Science Citation Index):</strong> Maintained by Web of Science, SCI journals are recognized
          for high-quality, impactful research across scientific fields.
        </li>
        <li>
          <strong>Scopus:</strong> A multidisciplinary citation database widely accepted for academic indexing.
        </li>
        <li>
          <strong>IEEE Xplore:</strong> Ideal for papers in engineering, technology, and computer science disciplines.
        </li>
        <li>
          <strong>PubMed:</strong> Recommended for life sciences and medical research papers.
        </li>
        <li>
          <strong>Emerging Sources Citation Index (ESCI):</strong> Journals under evaluation for SCI inclusion,
          still considered credible.
        </li>
        <li>
          <strong>ACM Digital Library:</strong> Excellent for computer science and information technology research.
        </li>
        <li>
          <strong>INSPEC:</strong> Valuable for physics, electrical engineering, and computing disciplines.
        </li>
        <li>
          <strong>DBLP:</strong> Popular in computer science, especially for database research.
        </li>
        <li>
          <strong>ERIC (Education Resources Information Center):</strong> Best suited for education-related research.
        </li>
        <li>
          <strong>Google Scholar:</strong> While not a traditional indexer, it's widely used for discovery and
          visibility of research work.
        </li>
      </ol>

      <p>
        Before selecting a journal for submission, it's crucial to verify the indexing status of the journal through the respective database's official website. Additionally, consider discussing with your advisors, mentors, or colleagues to get insights into the most suitable indexing options for your specific field of research.
      </p>

      <p>
       Remember that the quality and significance of your research are paramount, regardless of the indexing database. Choose a journal that aligns with your research area and provides the best platform to showcase your work to the relevant academic community.
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

export default VitPublication;
