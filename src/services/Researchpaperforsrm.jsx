import "./Phdservices.scss";
const faqs = [
  {
    question: "Which indexing databases are preferred by SRM University for research publication?",
    answer:
      "SRM University commonly prefers indexing databases such as SCI, Scopus, Web of Science, IEEE Xplore, and PubMed depending on the research domain."
  },
  {
    question: "Is it mandatory to publish in Scopus or SCI journals at SRM University?",
    answer:
      "While not always mandatory, SRM strongly encourages publishing in high-impact journals indexed in Scopus, SCI, or Web of Science, especially for PhD students."
  },
  {
    question: "Can I publish in Google Scholar indexed journals?",
    answer:
      "Yes, but it is advised to prioritize journals indexed in Scopus, SCI, or equivalent reputed databases for academic and institutional recognition."
  },
  {
    question: "Does SRM University provide support for publication fees?",
    answer:
      "Some departments may offer partial or full financial support for publication in reputed journals. Students should consult their research supervisor or department."
  },
  {
    question: "Are conferences accepted for PhD publication requirements?",
    answer:
      "Yes, conferences—especially those indexed in Scopus or IEEE—are often accepted. However, it depends on the department’s specific guidelines."
  }
];

const ResearchPublication = () => {
  return (
    <div className="phd-guidance-container">
      <h1 className="title">Research Paper Publication Services for PhD students from SRM University</h1>
      <p>
        SRM University (now known as SRM Institute of Science and Technology) is one of the prominent private universities in India and is known for its emphasis on research and academic excellence. The university encourages its faculty and students to publish in journals indexed by reputed databases. While indexing preferences might vary between different departments and disciplines within the university, here are some common indexing databases that researchers at SRM might consider:
      </p>
      <ol>
        <li><strong>SCI (Science Citation Index):</strong> Journals indexed in SCI are widely recognized for their impact and quality. Researchers often aim to publish in SCI journals to increase the visibility and credibility of their work.</li>
        <li><strong>Scopus:</strong> Scopus is a multidisciplinary abstract and citation database that covers various subject areas. It's a valuable database for researchers looking to publish in reputable journals.</li>
        <li><strong>Web of Science:</strong> In addition to SCI, Web of Science includes other citation indexes like Social Sciences Citation Index (SSCI) and Arts & Humanities Citation Index (AHCI), which cover a wide range of disciplines.</li>
        <li><strong>IEEE Xplore:</strong> For researchers in engineering, technology, and computer science, IEEE Xplore offers access to a vast collection of technical literature.</li>
        <li><strong>PubMed:</strong> If the research is related to medical and life sciences, publishing in journals indexed by PubMed can be beneficial.</li>
        <li><strong>Emerging Sources Citation Index (ESCI):</strong> Part of Web of Science, ESCI includes journals that are being evaluated for possible inclusion in the SCI.</li>
        <li><strong>DBLP:</strong> For researchers in computer science and related areas, DBLP is a reputable indexing database.</li>
        <li><strong>Google Scholar:</strong> Although not a traditional indexing database, Google Scholar is widely used for research discovery. Journals indexed by Google Scholar can enhance the visibility of research.</li>
      </ol>
      <p>
        It’s important to note that indexing preferences and recommendations might have changed. Therefore, we strongly recommend visiting the official website of SRM Institute of Science and Technology and checking with the respective departments or research offices for the most up-to-date information on the indexing databases that the university emphasizes or requires for publishing research papers.
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

export default ResearchPublication;
