import "./SelfPublishedBookISBNPublication.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What is Self-Published Book ISBN Publication Support?",
    answer: "Self-Published Book ISBN Publication Support by Narpavi Research Institute assists independent authors and small presses in securing ISBNs for self-published books, ensuring global legitimacy, visibility, and retail-ready catalog integration."
  },
  {
    question: "What types of publications are supported for self-published ISBNs?",
    answer: "We support ISBN allocation for paperback and hardcover editions, eBooks (PDF, EPUB, mobi), bundled print-plus-digital versions, and author editions or marketing copies."
  },
  {
    question: "What services are included in the self-published ISBN process?",
    answer: "Our services include ISBN acquisition, metadata encoding, barcode generation, integration into retail and library catalogs, and ongoing support for updates and discoverability."
  }
];

const SelfPublishedBookISBNPublicationSupport = () => {
  return (
    <div className="SelfPublishedBookISBNPublicationSupport">
      <Sidebar />
      <div className="SelfPublishedBookISBNPublicationSupport-main">
        <div className="SelfPublishedBookISBNPublicationSupport-grid">
          {/* Left: Keywords */}
          <div className="SelfPublishedBookISBNPublicationSupport-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Self-Published Book ISBN Publication Support</li>
              <li>Independent Author ISBN Service</li>
              <li>ISBN for Self-Publishing India</li>
              <li>Print and eBook ISBN Self-Publishing</li>
              <li>Barcode generation ISBN</li>
              <li>Narpavi Research Institute ISBN</li>
              <li>Retails ISBN Service</li>
              <li>Metadata for self-publishers</li>
              <li>ISBN catalogue listing India</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="SelfPublishedBookISBNPublicationSupport-center">
            <h1>Self-Published Book ISBN Publication Support</h1>

            <section className="SelfPublishedBookISBNPublicationSupport-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our Self-Published Book ISBN Publication Support empowers independent authors and small presses to navigate the ISBN process with professionalism and ease. We ensure your self-published book gains legitimacy, visibility, and access to bookstores, libraries, and online retailers worldwide.
              </p>
              <p>
                From ISBN acquisition to metadata encoding and barcode generation, our services provide a seamless, retail-ready publishing experience while maintaining your creative control.
              </p>
            </section>

            <section className="SelfPublishedBookISBNPublicationSupport-advantages">
              <h2>Distinctive Advantages of Self-Published ISBN Assistance</h2>
              <p>
                Our services are tailored to meet the needs of self-publishers, offering:
              </p>
              <ul>
                <li>Legitimate ISBN allocation recognized globally</li>
                <li>Guidance on print and eBook version ISBNs</li>
                <li>Barcode generation for retail distribution</li>
                <li>Metadata support for discoverability in online listings</li>
                <li>Compliance with publishing standards</li>
              </ul>
            </section>

            <section className="SelfPublishedBookISBNPublicationSupport-comparative-table">
              <h2>Comparative Table: Direct vs. Assisted ISBN Support</h2>
              <div className="SelfPublishedBookISBNPublicationSupport-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Self-Help ISBN Process</th>
                      <th>Narpavi Self-Published ISBN Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>ISBN Allocation</td><td>Lengthy, complex fees</td><td>Handled end-to-end within days</td></tr>
                    <tr><td>Barcode Generation</td><td>Manual or excluded</td><td>Comprehensive barcode package included</td></tr>
                    <tr><td>Metadata Preparation</td><td>Basic or incomplete</td><td>Fully structured metadata for discoverability</td></tr>
                    <tr><td>Multi-format ISBNs (print/eBook)</td><td>Often separate processes</td><td>Coordinated simultaneous assignment</td></tr>
                    <tr><td>Integration into Retail Channels</td><td>Requires manual setup</td><td>Catalog and retailer submission handled by experts</td></tr>
                    <tr><td>Visibility & Listing</td><td>Limited</td><td>Internationally recognized via ISBN registry systems</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="SelfPublishedBookISBNPublicationSupport-workflow">
              <h2>Step-By-Step Self-Publishing ISBN Workflow</h2>
              <p>
                Our structured workflow ensures a smooth and professional ISBN process:
              </p>
              <ul>
                <li>Individual author consultation</li>
                <li>Manuscript submission and metadata build</li>
                <li>ISBN application for print and digital editions</li>
                <li>Barcode generation per ISBN</li>
                <li>Embedding ISBN/barcode into cover and print layout</li>
                <li>Listing with libraries, retailers, digital platforms</li>
                <li>Continued support and updates</li>
              </ul>
            </section>

            <section className="SelfPublishedBookISBNPublicationSupport-types">
              <h2>Versatile ISBN Types We Support</h2>
              <ul>
                <li>Paperback and hardcover editions</li>
                <li>eBook (PDF, EPUB, mobi)</li>
                <li>Bundled print-plus-digital version ISBNs</li>
                <li>Author editions and marketing copies</li>
              </ul>
            </section>

            <section className="SelfPublishedBookISBNPublicationSupport-closing">
              <h2>Closing Statement</h2>
              <p>
                With Self-Published Book ISBN Publication Support from Narpavi Research Institute, independent authors gain access to a fully legitimate, professionally managed ISBN issuance process. Our services ensure your book meets retail and academic standards, achieving global visibility in bookstores, libraries, and online platforms.
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
          <div className="SelfPublishedBookISBNPublicationSupport-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/book-isbn-publication-support">Book ISBN Publication Support</a></li>
              <li><a href="/academic-book-isbn-publication-support">Academic Book ISBN Publication Support</a></li>
              <li><a href="/ugc-care-journal-publication">UGC Care Journal Publication</a></li>
              <li><a href="/ugc-care-open-access-publication">UGC Care Open Access Journal Publication</a></li>
              <li><a href="/journal-selection-assistance">Review Article Journal Selection Assistance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfPublishedBookISBNPublicationSupport;