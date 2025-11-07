import "./ISBNBarcodeAndMetadataPublication.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What is ISBN Barcode Generation & Metadata Structuring Support?",
    answer: "ISBN Barcode Generation & Metadata Structuring Support by Narpavi Research Institute provides a comprehensive service for securing ISBNs, generating retail-ready barcodes, and structuring detailed metadata to ensure global discoverability and academic indexing for your publication."
  },
  {
    question: "What types of publications are supported?",
    answer: "We support stand-alone monographs (academic or general), edited volumes, conference proceedings, print and digital formats (with barcode embedding for print), and multi-volume or series works."
  },
  {
    question: "What services are included in this combined ISBN process?",
    answer: "Our services include ISBN allocation, barcode generation, metadata structuring (including subject codes, author profiles, and content summaries), integration into print and digital formats, catalog submission, and ongoing metadata support."
  }
];

const ISBNBarcodeAndMetadataPublicationSupport = () => {
  return (
    <div className="ISBNBarcodeAndMetadataPublicationSupport">
      <Sidebar />
      <div className="ISBNBarcodeAndMetadataPublicationSupport-main">
        <div className="ISBNBarcodeAndMetadataPublicationSupport-grid">
          {/* Left: Keywords */}
          <div className="ISBNBarcodeAndMetadataPublicationSupport-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ISBN Barcode Generation Publication Support</li>
              <li>ISBN Metadata Structuring</li>
              <li>Barcode ISBN Service India</li>
              <li>Structured ISBN Metadata</li>
              <li>Narpavi Research Institute ISBN Barcode</li>
              <li>Catalogue Metadata ISBN</li>
              <li>Retail ISBN Barcode</li>
              <li>Academic metadata ISBN service</li>
              <li>Bibliographic metadata structuring</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ISBNBarcodeAndMetadataPublicationSupport-center">
            <h1>ISBN Barcode Generation & Metadata Structuring Publication Support</h1>

            <section className="ISBNBarcodeAndMetadataPublicationSupport-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our combined ISBN Barcode Generation & Publication Support and ISBN Metadata Structuring & Publication Support services ensure your book is fully equipped for retail, library, and academic distribution. We provide valid ISBNs, retail-ready barcodes, and enriched metadata for global discoverability.
              </p>
              <p>
                Beyond just ISBN assignment, our services include professional barcode embedding and comprehensive metadata structuring to meet the demands of modern publishing, ensuring your work is cataloged accurately and accessible worldwide.
              </p>
            </section>

            <section className="ISBNBarcodeAndMetadataPublicationSupport-advantages">
              <h2>Advantages of Barcode + Metadata ISBN Support</h2>
              <p>
                Our combined service offers a seamless publishing experience with:
              </p>
              <ul>
                <li>Retail-ready barcode suitable for scanners and distribution</li>
                <li>Structured metadata (title, author, edition, classification) for global discoverability</li>
                <li>Proper linkage to digital platforms and ISBN registries</li>
                <li>Professional support for both metadata and technical formatting</li>
              </ul>
            </section>

            <section className="ISBNBarcodeAndMetadataPublicationSupport-comparative-table">
              <h2>Comparative Table: ISBN Only vs. Full Barcode + Metadata Service</h2>
              <div className="ISBNBarcodeAndMetadataPublicationSupport-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Service Element</th>
                      <th>ISBN Only</th>
                      <th>Barcode + Metadata Support by Narpavi Institute</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>ISBN Allocation</td><td>Standalone ISBN</td><td>ISBN plus barcode for retail use</td></tr>
                    <tr><td>Barcode Generation</td><td>Absent or manual</td><td>Professionally generated and scalable</td></tr>
                    <tr><td>Metadata Structuring</td><td>Basic or missing</td><td>Rich metadata including BISAC, Dewey, classification, author profiles</td></tr>
                    <tr><td>Discoverability</td><td>Limited</td><td>Global indexing via structured metadata</td></tr>
                    <tr><td>Retail Launch Readiness</td><td>Requires extra work</td><td>Ready-to-launch ISBN and barcode package included</td></tr>
                    <tr><td>Technical Formatting</td><td>Not provided</td><td>Full integration into print/PDF/EPUB layout</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ISBNBarcodeAndMetadataPublicationSupport-workflow">
              <h2>Step-By-Step ISBN Barcode & Metadata Workflow</h2>
              <p>
                Our structured workflow ensures a professional and efficient process:
              </p>
              <ul>
                <li>Consultation and format discussion</li>
                <li>ISBN allocation and barcode design generation</li>
                <li>Complete metadata structuring (subject codes, edition, author bio, content summary)</li>
                <li>Integration of barcode into cover and spine layout</li>
                <li>Embedding metadata into digital formats and catalogue records</li>
                <li>Submission to catalogues and indexing agencies</li>
                <li>Ongoing metadata support and updates</li>
              </ul>
            </section>

            <section className="ISBNBarcodeAndMetadataPublicationSupport-types">
              <h2>Supporting All Publication Types</h2>
              <ul>
                <li>Stand-alone monographs (academic or general)</li>
                <li>Edited volumes and conference proceedings</li>
                <li>Print and digital formats (barcode embedded in print)</li>
                <li>Multi-volume or series works</li>
              </ul>
            </section>

            <section className="ISBNBarcodeAndMetadataPublicationSupport-affirmation">
              <h2>Final Statement</h2>
              <p>
                Our ISBN Barcode Generation & Publication Support combined with ISBN Metadata Structuring & Publication Support at Narpavi Research Institute delivers a complete publishing package. Your book is technically ready, accurately cataloged, and optimized for retail and academic distribution, ensuring maximum visibility and credibility.
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
          <div className="ISBNBarcodeAndMetadataPublicationSupport-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/book-isbn-publication-support">Book ISBN Publication Support</a></li>
              <li><a href="/academic-book-isbn-publication-support">Academic Book ISBN Publication Support</a></li>
              <li><a href="/self-published-book-isbn-publication-support">Self-Published Book ISBN Publication Support</a></li>
              <li><a href="/print-and-ebook-isbn-publication-support">Print and eBook ISBN Publication Support</a></li>
              <li><a href="/edited-volume-isbn-publication-support">Edited Volume ISBN Publication Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISBNBarcodeAndMetadataPublicationSupport;