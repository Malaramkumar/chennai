import "./PrintAndEBookISBNPublication.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What is Print and eBook ISBN Publication Support?",
    answer: "Print and eBook ISBN Publication Support by Narpavi Research Institute provides a streamlined process for authors and publishers to secure unique ISBNs for both print (paperback/hardcover) and digital (PDF, EPUB, MOBI) editions, ensuring global market coverage and discoverability."
  },
  {
    question: "What formats are supported for ISBN allocation?",
    answer: "We support ISBN allocation for paperback, hardcover, eBook formats (EPUB, PDF, MOBI), and bundled print-plus-digital editions with linked metadata."
  },
  {
    question: "What services are included in the dual-format ISBN process?",
    answer: "Our services include consultation, metadata preparation, simultaneous ISBN assignment for print and eBook, barcode generation for print, embedding ISBN/barcode into files, catalog submissions, and post-publication metadata updates."
  }
];

const PrintAndEBookISBNPublicationSupport = () => {
  return (
    <div className="PrintAndEBookISBNPublicationSupport">
      <Sidebar />
      <div className="PrintAndEBookISBNPublicationSupport-main">
        <div className="PrintAndEBookISBNPublicationSupport-grid">
          {/* Left: Keywords */}
          <div className="PrintAndEBookISBNPublicationSupport-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Print and eBook ISBN Publication Support</li>
              <li>Dual-format ISBN Service</li>
              <li>ISBN for Print & Digital Editions</li>
              <li>Barcode & ISBN Print</li>
              <li>eBook ISBN India</li>
              <li>Narpavi Research Institute ISBN Support</li>
              <li>Cross-format metadata ISBN</li>
              <li>ISBN bundle service</li>
              <li>EPUB ISBN</li>
              <li>Paperback ISBN India</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="PrintAndEBookISBNPublicationSupport-center">
            <h1>Print and eBook ISBN Publication Support</h1>

            <section className="PrintAndEBookISBNPublicationSupport-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our Print and eBook ISBN Publication Support offers a comprehensive solution for authors and publishers releasing books in both print (paperback/hardcover) and digital (PDF, EPUB, MOBI) formats. We provide unique ISBNs and barcodes for each format, ensuring seamless market coverage and global discoverability.
              </p>
              <p>
                Our coordinated process eliminates the complexity of separate registrations and metadata duplication, delivering a professional and efficient publishing experience.
              </p>
            </section>

            <section className="PrintAndEBookISBNPublicationSupport-advantages">
              <h2>Key Advantages of Dual-Format ISBN Solutions</h2>
              <p>
                Our dual-format ISBN services simplify the publishing process while maximizing reach:
              </p>
              <ul>
                <li>Single streamlined application process for multiple formats</li>
                <li>Accurate metadata linking between editions</li>
                <li>Retail-grade barcodes embedded in print</li>
                <li>Separate ISBN for each format for discoverability</li>
              </ul>
            </section>

            <section className="PrintAndEBookISBNPublicationSupport-comparative-table">
              <h2>Comparative Table: Separate vs. Integrated ISBN Workflow</h2>
              <div className="PrintAndEBookISBNPublicationSupport-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Separate ISBN Setup</th>
                      <th>Combined Print & eBook ISBN Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>ISBN Allocation Process</td><td>Two independent workflows</td><td>One unified process managed by experts</td></tr>
                    <tr><td>Metadata Linkage</td><td>Often missing</td><td>Full cross-edition metadata linking ensured</td></tr>
                    <tr><td>Barcode Printing</td><td>Print only</td><td>Barcode support built into print ISBN formatting</td></tr>
                    <tr><td>Discoverability Across Platforms</td><td>Fragmented</td><td>Integrated presence in both online and print markets</td></tr>
                    <tr><td>Administrative Overhead</td><td>Duplicate effort</td><td>Simplified single coordination</td></tr>
                    <tr><td>Time to Completion</td><td>3–4 weeks</td><td>3–5 working days via Narpavi Institute workflow</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="PrintAndEBookISBNPublicationSupport-workflow">
              <h2>Printing & eBook Publishing Flow</h2>
              <p>
                Our streamlined workflow ensures efficiency and professionalism:
              </p>
              <ul>
                <li>Consultation and format specification</li>
                <li>Metadata preparation for both print and digital versions</li>
                <li>ISBN assignment for print and eBook simultaneously</li>
                <li>Barcode generation for print format</li>
                <li>Embedding ISBN/barcode into finalized files</li>
                <li>Digital delivery and catalog submissions</li>
                <li>Post-publication metadata updates if needed</li>
              </ul>
            </section>

            <section className="PrintAndEBookISBNPublicationSupport-formats">
              <h2>Formats We Support</h2>
              <ul>
                <li>Paperback: ISBN + barcode</li>
                <li>Hardcover: ISBN + barcode</li>
                <li>eBook formats including EPUB, PDF, MOBI</li>
                <li>Bundled editions (print + digital with metadata links)</li>
              </ul>
            </section>

            <section className="PrintAndEBookISBNPublicationSupport-affirmation">
              <h2>Final Affirmation</h2>
              <p>
                Choosing Print and eBook ISBN Publication Support from Narpavi Research Institute ensures professional ease and global readiness for authors and publishers. Our services deliver seamless ISBN assignment and metadata integration across multiple formats, maximizing your book’s reach in both print and digital markets.
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
          <div className="PrintAndEBookISBNPublicationSupport-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/book-isbn-publication-support">Book ISBN Publication Support</a></li>
              <li><a href="/academic-book-isbn-publication-support">Academic Book ISBN Publication Support</a></li>
              <li><a href="/self-published-book-isbn-publication-support">Self-Published Book ISBN Publication Support</a></li>
              <li><a href="/ugc-care-journal-publication">UGC Care Journal Publication</a></li>
              <li><a href="/ugc-care-open-access-publication">UGC Care Open Access Journal Publication</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintAndEBookISBNPublicationSupport;