import "./EditedVolumeISBNPublication.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What is Edited Volume ISBN Publication Support?",
    answer: "Edited Volume ISBN Publication Support by Narpavi Research Institute provides specialized assistance for edited volumes, anthologies, and multi-chapter compilations, ensuring accurate ISBN assignment, metadata structuring, and global catalog integration."
  },
  {
    question: "What types of edited volumes are supported for ISBN allocation?",
    answer: "We support ISBN allocation for edited monographs, research compendiums, conference proceedings, thematic anthologies, festschriften, and multi-editor academic volumes."
  },
  {
    question: "What services are included in the edited volume ISBN process?",
    answer: "Our services include editor consultation, metadata collection for contributors, ISBN application, barcode generation, metadata validation, catalog submission, and post-release indexing support."
  }
];

const EditedVolumeISBNPublicationSupport = () => {
  return (
    <div className="EditedVolumeISBNPublicationSupport">
      <Sidebar />
      <div className="EditedVolumeISBNPublicationSupport-main">
        <div className="EditedVolumeISBNPublicationSupport-grid">
          {/* Left: Keywords */}
          <div className="EditedVolumeISBNPublicationSupport-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Edited Volume ISBN Publication Support</li>
              <li>ISBN for Edited Books</li>
              <li>Anthology ISBN Service</li>
              <li>Multi-author Book ISBN</li>
              <li>Metadata for Edited Volume</li>
              <li>Narpavi Research Institute ISBN</li>
              <li>Conference Volume ISBN India</li>
              <li>Academic anthology ISBN</li>
              <li>Volume editor ISBN Support</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EditedVolumeISBNPublicationSupport-center">
            <h1>Edited Volume ISBN Publication Support</h1>

            <section className="EditedVolumeISBNPublicationSupport-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our Edited Volume ISBN Publication Support is tailored for edited volumes, anthologies, and multi-chapter compilations. We provide meticulous ISBN assignment, metadata structuring, and contributor indexing to ensure citation stability and discoverability in academic and retail channels.
              </p>
              <p>
                Our process ensures accurate recording of main titles, subtitles, editor credits, and chapter metadata, aligning with global publishing standards and library classification norms.
              </p>
            </section>

            <section className="EditedVolumeISBNPublicationSupport-benefits">
              <h2>Benefits of Expert Edited Volume ISBN Support</h2>
              <p>
                Our services are designed to enhance the professionalism and visibility of edited works:
              </p>
              <ul>
                <li>Reliable ISBN issuance for edited works</li>
                <li>Precise metadata for editors, contributors, and chapters</li>
                <li>Correct catalog representation of multi-author volumes</li>
                <li>Alignment with library classification norms</li>
              </ul>
            </section>

            <section className="EditedVolumeISBNPublicationSupport-comparative-table">
              <h2>Comparative Table: Simple Book vs. Edited Volume ISBN Workflow</h2>
              <div className="EditedVolumeISBNPublicationSupport-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Simple Book ISBN Process</th>
                      <th>Edited Volume ISBN Support by Narpavi Institute</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Metadata for multiple contributors</td><td>Often generic</td><td>Detailed editor/contributor information encoding</td></tr>
                    <tr><td>Title/Subtitle Handling</td><td>Single title only</td><td>Comprehensive title, subtitle, edition metadata</td></tr>
                    <tr><td>Chapter Indexing</td><td>None</td><td>Contributor names, affiliations, chapters properly catalogued</td></tr>
                    <tr><td>ISBN Assignment</td><td>Single ISBN</td><td>Single ISBN with detailed metadata for entire volume</td></tr>
                    <tr><td>Publication Recognition</td><td>Limited</td><td>Enhanced visibility in academic and retail systems</td></tr>
                    <tr><td>Library Pre-classification</td><td>Ad hoc</td><td>Subject metadata aligned with Dewey/LCC systems</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EditedVolumeISBNPublicationSupport-workflow">
              <h2>Structured Workflow for Edited Volume ISBN</h2>
              <p>
                Our streamlined workflow ensures precision and efficiency:
              </p>
              <ul>
                <li>Volume intake and editor consultation</li>
                <li>Collection of metadata for each contributor</li>
                <li>Drafting metadata including institution, ORCID, chapter titles</li>
                <li>Coordinated ISBN application with full volume details</li>
                <li>Production of barcode-embedded cover and title page</li>
                <li>Final proofing, metadata validation, and catalog submission</li>
                <li>Post-release indexing assistance</li>
              </ul>
            </section>

            <section className="EditedVolumeISBNPublicationSupport-scenarios">
              <h2>Scenarios We Support</h2>
              <ul>
                <li>Edited monographs & research compendiums</li>
                <li>Conference edited proceedings</li>
                <li>Thematic anthologies and festschriften</li>
                <li>Multi-editor academic volumes</li>
              </ul>
            </section>

            <section className="EditedVolumeISBNPublicationSupport-affirmation">
              <h2>Final Affirmation</h2>
              <p>
                With Edited Volume ISBN Publication Support from Narpavi Research Institute, your edited works achieve polished, professional ISBN management. Our precise metadata structuring ensures accurate international cataloging and discoverability, making your volume a recognized contribution to academic and retail channels.
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
          <div className="EditedVolumeISBNPublicationSupport-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/book-isbn-publication-support">Book ISBN Publication Support</a></li>
              <li><a href="/academic-book-isbn-publication-support">Academic Book ISBN Publication Support</a></li>
              <li><a href="/self-published-book-isbn-publication-support">Self-Published Book ISBN Publication Support</a></li>
              <li><a href="/print-and-ebook-isbn-publication-support">Print and eBook ISBN Publication Support</a></li>
              <li><a href="/ugc-care-journal-publication">UGC Care Journal Publication</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditedVolumeISBNPublicationSupport;