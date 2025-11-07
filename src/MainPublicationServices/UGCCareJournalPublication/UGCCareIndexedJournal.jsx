import "./UGCCareIndexedJournal.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What are UGC Care Indexed Journal Publication Services?",
    answer: "UGC Care Indexed Journal Publication Services provide comprehensive support for researchers to publish in journals officially listed under the UGC-CARE (Consortium for Academic and Research Ethics) index, ensuring compliance with academic standards and enhancing API scores and institutional recognition."
  },
  {
    question: "Which journals are targeted in your UGC Care indexed publication support?",
    answer: "We target journals from UGC-CARE List Group I, Group II, and new entries, selected based on your manuscript’s subject area and alignment with academic goals."
  },
  {
    question: "What services are included in your UGC Care indexed publication process?",
    answer: "Our services include journal mapping, subject-expert editing, plagiarism screening, reference normalization, manuscript formatting, submission coordination, and revision management."
  }
];

const UGCCareIndexedJournalPublicationServices = () => {
  return (
    <div className="UGCCareIndexedJournalPublication">
      <Sidebar />
      <div className="UGCCareIndexedJournalPublication-main">
        <div className="UGCCareIndexedJournalPublication-grid">
          {/* Left: Keywords */}
          <div className="UGCCareIndexedJournalPublication-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ugc care indexed journal publication services</li>
              <li>ugc care indexed journal help</li>
              <li>ugc care group i journal support</li>
              <li>ugc indexed journal publishing</li>
              <li>publish in ugc care indexed journal</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="UGCCareIndexedJournalPublication-center">
            <h1>UGC Care Indexed Journal Publication Services</h1>

            <section className="UGCCareIndexedJournalPublication-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our UGC Care Indexed Journal Publication Services are designed to assist scholars in publishing their research in journals officially recognized under the UGC-CARE (Consortium for Academic and Research Ethics) list. We streamline the process from journal identification to final acceptance, ensuring alignment with academic mandates across Indian universities.
              </p>
              <p>
                Our services enhance your manuscript’s quality and compliance, contributing to API scores, thesis credits, and promotion applications while ensuring credibility and academic legitimacy.
              </p>
            </section>

            <section className="UGCCareIndexedJournalPublication-features">
              <h2>In-depth Features of UGC Care Indexed Journal Publication Services</h2>
              <p>
                Our UGC Care Indexed Journal Publication Services provide a comprehensive solution to meet peer-review standards and UGC norms. Key features include:
              </p>
              <ul>
                <li>Journal Mapping and Selection in the latest UGC-CARE list, covering Group I, Group II, and new entries</li>
                <li>Subject-Expert Editing and Language Polishing to meet peer review standards</li>
                <li>Plagiarism Screening and Correction using Turnitin/iThenticate</li>
                <li>Reference / Citation Normalization as per journal or style guidelines</li>
                <li>Manuscript Formatting and Layout aligned with UGC-CARE indexed journal specifications</li>
                <li>Submission Coordination and Follow-Up through the editorial workflow until acceptance</li>
                <li>Revision Management ensuring timely resubmission and editing refinement</li>
              </ul>
              <p>
                These services are calibrated to increase acceptance likelihood and uphold UGC publication standards across various disciplines.
              </p>
            </section>

            <section className="UGCCareIndexedJournalPublication-comparative-table">
              <h2>Comparative Table: UGC-CARE Indexed vs. Other Local Journals</h2>
              <div className="UGCCareIndexedJournalPublication-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>UGC Care Indexed Journals</th>
                      <th>Local or Non-Indexed Journals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Recognition by Indian Universities</td><td>High</td><td>Minimal to None</td></tr>
                    <tr><td>API / Academic Credit Validity</td><td>Full</td><td>Often Not Recognized</td></tr>
                    <tr><td>Peer-Review Standard</td><td>Formal and Rigorous</td><td>Informal or Non-existent</td></tr>
                    <tr><td>Research Quality Expectation</td><td>High</td><td>Variable</td></tr>
                    <tr><td>Manuscript Preparation Support</td><td>Comprehensive</td><td>Limited Support</td></tr>
                    <tr><td>Timeline Reliability</td><td>Structured</td><td>Unpredictable</td></tr>
                    <tr><td>Institutional Acceptance Rate</td><td>Significantly Higher</td><td>Uncertain</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="UGCCareIndexedJournalPublication-value">
              <h2>Value Proposition of UGC Care Indexed Journal Publication Services</h2>
              <p>
                With Narpavi Research Institute’s UGC Care Indexed Journal Publication Services, your research is elevated to meet indexed-level standards. We enhance manuscript clarity, ensure adherence to journal specifications, and improve academic presentation to reduce rejection risks.
              </p>
              <p>
                Our services align your manuscript with journals that match your subject domain and institutional requirements, ensuring seamless recognition for academic promotions and evaluations.
              </p>
            </section>

            <section className="UGCCareIndexedJournalPublication-benefits">
              <h2>Researcher Benefits</h2>
              <p>
                Choosing our UGC Care Indexed Journal Publication Services offers significant advantages for researchers:
              </p>
              <ul>
                <li>Verified indexing in the official UGC-CARE list</li>
                <li>Seamless documentation for academic promotions</li>
                <li>Peer-review standard compliance with international practices</li>
                <li>Professional editing that upholds academic rigor</li>
                <li>Transparent process updates at every step</li>
              </ul>
              <p>
                By partnering with Narpavi Research Institute, you navigate the publishing process with clarity, credibility, and confidence, achieving impactful academic outcomes.
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
          <div className="UGCCareIndexedJournalPublication-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/scopus-journal-publication">Scopus Journal Publication</a></li>
              <li><a href="/sci-journal-publication">SCI Journal Support</a></li>
              <li><a href="/narrative-review-publication">Narrative Review Publication</a></li>
              <li><a href="/systematic-review-publication">Systematic Review Publication</a></li>
              <li><a href="/journal-selection-assistance">Review Article Journal Selection Assistance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGCCareIndexedJournalPublicationServices;