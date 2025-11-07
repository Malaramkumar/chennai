import "./AcademicBookISBNPublication.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What is Academic Book ISBN Publication Support?",
    answer: "Academic Book ISBN Publication Support by Narpavi Research Institute provides a streamlined process for scholars, research groups, and institutions to secure ISBNs for academic publications, ensuring compliance with global standards and institutional guidelines."
  },
  {
    question: "What types of academic publications are supported?",
    answer: "We support ISBN allocation for research monographs, textbooks, course books, edited scholarly volumes, conference proceedings, and institutional theses or technical reports."
  },
  {
    question: "What services are included in the academic ISBN publication process?",
    answer: "Our services include academic consultation, metadata structuring, ISBN application, formatting and proofing, catalog submission to global databases, optional DOI assignment, and post-publication support."
  }
];

const AcademicBookISBNPublicationSupport = () => {
  return (
    <div className="AcademicBookISBNPublicationSupport">
      <Sidebar />
      <div className="AcademicBookISBNPublicationSupport-main">
        <div className="AcademicBookISBNPublicationSupport-grid">
          {/* Left: Keywords */}
          <div className="AcademicBookISBNPublicationSupport-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Academic Book ISBN Publication Support</li>
              <li>Academic ISBN Service India</li>
              <li>Research Book ISBN Registration</li>
              <li>UGC compliant ISBN</li>
              <li>Institutional ISBN support India</li>
              <li>Narpavi Research Institute ISBN</li>
              <li>Academic Publishing ISBN</li>
              <li>Peer-reviewed book ISBN</li>
              <li>Academic metadata structuring</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="AcademicBookISBNPublicationSupport-center">
            <h1>Academic Book ISBN Publication Support</h1>

            <section className="AcademicBookISBNPublicationSupport-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our Academic Book ISBN Publication Support offers a robust and streamlined process for scholars, research groups, and academic institutions to secure ISBNs for peer-reviewed monographs, research compilations, and educational texts. We ensure your academic work achieves credibility and global discoverability.
              </p>
              <p>
                Our expert team handles metadata structuring, ISBN application, catalog submission, and compliance with UGC, AICTE, and NAAC guidelines, delivering a seamless publishing experience.
              </p>
            </section>

            <section className="AcademicBookISBNPublicationSupport-benefits">
              <h2>Key Benefits of Academic Book ISBN Publication Support</h2>
              <p>
                Our services are designed to enhance the academic value and visibility of your publication. Key benefits include:
              </p>
              <ul>
                <li>Academic-grade ISBN allocation process</li>
                <li>Comprehensive metadata and classification integration</li>
                <li>Seamless submission to national and international bibliographic databases</li>
                <li>Turnaround in days, not weeks, through expert coordination</li>
              </ul>
            </section>

            <section className="AcademicBookISBNPublicationSupport-comparative-table">
              <h2>Comparative Table: DIY vs. Expert Academic ISBN Support</h2>
              <div className="AcademicBookISBNPublicationSupport-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Self-Managed ISBN Process</th>
                      <th>Academic ISBN Support by Narpavi Institute</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Institutional Metadata Accuracy</td><td>Often manual, inconsistent</td><td>Standardised, verified for academic indexing</td></tr>
                    <tr><td>Catalogue Visibility</td><td>Limited to local repositories</td><td>Worldwide indexing via Bowker, ISBN agencies, DOI</td></tr>
                    <tr><td>Compliance with Academic Norms</td><td>Uncertain</td><td>Fully compliant with UGC, NAAC, AICTE standards</td></tr>
                    <tr><td>Specialist Editorial Assistance</td><td>None</td><td>Formatting, proofing, and technical support included</td></tr>
                    <tr><td>Issuance Speed</td><td>2–4 weeks</td><td>3–5 working days with expert coordination</td></tr>
                    <tr><td>Post-publication Updates</td><td>Tedious</td><td>Supported via Narpavi Institute’s centralized system</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="AcademicBookISBNPublicationSupport-workflow">
              <h2>Academic Workflow – Proven and Certified</h2>
              <p>
                Our structured workflow ensures efficiency and compliance at every stage:
              </p>
              <ul>
                <li>Academic intake & consultation</li>
                <li>Manuscript review with academic metadata draft</li>
                <li>ISBN application via verified channels</li>
                <li>ISBN integration into academic text formats</li>
                <li>Proofing, layout design, indexing metadata alignment</li>
                <li>Final delivery, catalogue registration, optional DOI</li>
                <li>Post-publication updates, credits, and indexing assistance</li>
              </ul>
            </section>

            <section className="AcademicBookISBNPublicationSupport-domains">
              <h2>Domain-Specific ISBN Support</h2>
              <p>
                Narpavi Research Institute specializes in supporting a range of academic publications:
              </p>
              <ul>
                <li>Research monographs</li>
                <li>Textbooks & course books</li>
                <li>Edited scholarly volumes</li>
                <li>Conference proceedings</li>
                <li>Institutional theses & technical reports</li>
              </ul>
            </section>

            <section className="AcademicBookISBNPublicationSupport-affirmation">
              <h2>Final Affirmation</h2>
              <p>
                The Academic Book ISBN Publication Support from Narpavi Research Institute ensures your academic work is formally recognized, catalogued, and discoverable across institutional and global channels. Our services enhance credibility and reach, delivering a seamless and professional ISBN publication process.
              </p>
            </section>

            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, index) => (
                  <details key={index}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((faq) => ({
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

          {/* Right: Subpage Links */}
          <div className="AcademicBookISBNPublicationSupport-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/book-isbn-publication-support">Book ISBN Publication Support</a></li>
              <li><a href="/ugc-care-journal-publication">UGC Care Journal Publication</a></li>
              <li><a href="/ugc-care-open-access-publication">UGC Care Open Access Journal Publication</a></li>
              <li><a href="/ugc-care-arts-humanities-publication">UGC Care Arts and Humanities Journal Publication</a></li>
              <li><a href="/ugc-care-science-technology-publication">UGC Care Science and Technology Journal Publication</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicBookISBNPublicationSupport;