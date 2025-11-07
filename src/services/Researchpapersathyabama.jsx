import "./Phdservices.scss";

const faqs = [
  {
    question: "Which indexing databases are accepted by Sathyabama University for PhD publications?",
    answer:
      "Sathyabama University accepts journals indexed in SCI, Scopus, Web of Science, IEEE Xplore, PubMed, ESCI, DBLP, and Google Scholar, depending on the discipline."
  },
  {
    question: "Is Scopus-indexed publication mandatory for PhD students at Sathyabama?",
    answer:
      "While it may not be mandatory for all, many departments strongly encourage or require Scopus-indexed journals for higher research credibility and recognition."
  },
  {
    question: "Does Sathyabama University provide any publication support for PhD students?",
    answer:
      "Yes, the university often supports students by organizing workshops, funding conference papers, and recommending quality journals for publication."
  },
  {
    question: "Can I publish in international journals as a Sathyabama PhD student?",
    answer:
      "Absolutely. The university encourages international publications in reputed journals to increase global research visibility."
  },
  {
    question: "How can I find suitable journals accepted by my department?",
    answer:
      "You should consult your research guide, departmental research coordinator, or the official PhD regulations issued by Sathyabama University."
  }
];

const SathyabamaResearch = () => {
  return (
    <div className="phd-guidance-container">
      <h1 className="title">Research Paper Publication Services for PhD Students from Sathyabama University</h1>
      <p>
        Sathyabama Institute of Science and Technology (formerly known as Sathyabama University) is known for its focus on research and academic excellence. The university encourages its faculty and students to publish research papers in journals indexed by reputed databases. While indexing preferences might vary between different departments and disciplines within the university, here are some common indexing databases that researchers at Sathyabama might consider:
      </p>
      <ol>
        <li><strong>SCI (Science Citation Index):</strong> Journals indexed in SCI are well-regarded for their impact and quality. Researchers often aim to publish in SCI journals to increase the visibility and credibility of their work.</li>
        <li><strong>Scopus:</strong> Scopus is a multidisciplinary abstract and citation database that covers various subject areas. It's a valuable database for researchers looking to publish in reputable journals.</li>
        <li><strong>Web of Science:</strong> In addition to SCI, Web of Science includes other citation indexes like Social Sciences Citation Index (SSCI) and Arts & Humanities Citation Index (AHCI), which cover a wide range of disciplines.</li>
        <li><strong>IEEE Xplore:</strong> For researchers in engineering, technology, and computer science, IEEE Xplore offers access to a vast collection of technical literature.</li>
        <li><strong>PubMed:</strong> If the research is related to medical and life sciences, publishing in journals indexed by PubMed can be beneficial.</li>
        <li><strong>Emerging Sources Citation Index (ESCI):</strong> Part of Web of Science, ESCI includes journals that are being evaluated for possible inclusion in the SCI.</li>
        <li><strong>DBLP:</strong> For researchers in computer science and related areas, DBLP is a reputable indexing database.</li>
        <li><strong>Google Scholar:</strong> Although not a traditional indexing database, Google Scholar is widely used for research discovery. Journals indexed by Google Scholar can enhance the visibility of research.</li>
      </ol>
      <p>
        Please note that indexing preferences and recommendations might have changed since my last update in September 2021. Therefore, I recommend visiting the official website of Sathyabama Institute of Science and Technology and checking with the respective departments or research offices for the most up-to-date information on the indexing databases that the university emphasizes or requires for publishing research papers. Always refer to the official guidelines and recommendations provided by your university to ensure compliance.
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

export default SathyabamaResearch;
