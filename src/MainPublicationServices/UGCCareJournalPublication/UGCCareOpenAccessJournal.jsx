import "./UGCCareOpenAccessJournal.scss";
import Sidebar from "../PublicationServicesSidebar";

const faqs = [
  {
    question: "What are UGC Care Open Access Journal Publication Services?",
    answer: "UGC Care Open Access Journal Publication Services support researchers in publishing in UGC-CARE approved open access journals, ensuring maximum accessibility, global readership, and compliance with ethical open access policies."
  },
  {
    question: "Which journals are targeted for open access publication?",
    answer: "We target UGC-CARE listed open access journals (Group I and Group II) known for high visibility and ethical standards, selected based on your research’s discipline and goals."
  },
  {
    question: "What services are included in the open access publication process?",
    answer: "Our services include journal evaluation, manuscript preparation for accessibility, support with author publishing fees, licensing and copyright guidance, and post-publication impact monitoring."
  }
];

const UGCCareOpenAccessJournalPublicationServices = () => {
  return (
    <div className="UGCCareOpenAccessJournalPublication">
      <Sidebar />
      <div className="UGCCareOpenAccessJournalPublication-main">
        <div className="UGCCareOpenAccessJournalPublication-grid">
          {/* Left: Keywords */}
          <div className="UGCCareOpenAccessJournalPublication-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ugc care open access journal publication services</li>
              <li>open access ugc care journal support</li>
              <li>open access publishing in ugc care journals</li>
              <li>public access academic research ugc</li>
              <li>ugc care open journal publication</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="UGCCareOpenAccessJournalPublication-center">
            <h1>UGC Care Open Access Journal Publication Services</h1>

            <section className="UGCCareOpenAccessJournalPublication-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our UGC Care Open Access Journal Publication Services are designed to help researchers publish in UGC-CARE approved open access journals, maximizing accessibility, global readership, and citation potential. As open science gains momentum, we ensure your research reaches a wide audience while adhering to UGC-CARE standards.
              </p>
              <p>
                Our services include journal matchmaking, manuscript formatting, guidance on author charges, and compliance with open access ethical policies, ensuring a seamless publication process.
              </p>
            </section>

            <section className="UGCCareOpenAccessJournalPublication-features">
              <h2>Key Features</h2>
              <p>
                Our UGC Care Open Access Journal Publication Services are tailored to enhance the visibility and impact of your research. Key features include:
              </p>
              <ul>
                <li>Evaluation of UGC-CARE open access journals with high visibility and ethical standards</li>
                <li>Manuscript Preparation for Accessibility, including abstract clarity, searchable keywords, and data availability statements</li>
                <li>Support with Author Publishing Fees (APCs) if required</li>
                <li>Licensing and Copyright Guidance as per journal policy (CC BY or equivalent)</li>
                <li>Post-Publication Monitoring for impact tracking and readership metrics</li>
              </ul>
              <p>
                These services ensure your research is both accessible and impactful within the UGC-CARE framework.
              </p>
            </section>

            <section className="UGCCareOpenAccessJournalPublication-comparative-table">
              <h2>Comparative Table: Open Access vs. Subscription UGC-CARE Journals</h2>
              <div className="UGCCareOpenAccessJournalPublication-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Open Access UGC Care Journals</th>
                      <th>Subscription UGC Care Journals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Public Accessibility</td><td>Free to All Readers</td><td>Restricted to Subscribers</td></tr>
                    <tr><td>Citation and Readership Impact</td><td>Higher</td><td>Moderate</td></tr>
                    <tr><td>APC Charges</td><td>Applicable</td><td>Rare or No Charges</td></tr>
                    <tr><td>UGC-CARE Recognition</td><td>Yes</td><td>Yes</td></tr>
                    <tr><td>Ideal Authors</td><td>Public Policy, Interdisciplinary Work</td><td>Traditional Academic Fields</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="UGCCareOpenAccessJournalPublication-importance">
              <h2>Importance of Open Access Services</h2>
              <p>
                Our UGC Care Open Access Journal Publication Services amplify your research’s global reach, strengthen citation metrics, and enhance institutional reputation. By publishing in open access UGC-CARE journals, your work achieves broader societal impact while meeting academic standards.
              </p>
              <p>
                Narpavi Research Institute ensures your manuscript is publication-ready with professional formatting and compliance with open access policies, delivering maximum visibility.
              </p>
            </section>

            <section className="UGCCareOpenAccessJournalPublication-benefits">
              <h2>Benefits for Researchers</h2>
              <p>
                Choosing our open access services offers significant advantages:
              </p>
              <ul>
                <li>Full open access exposure in UGC-CARE journals</li>
                <li>Enhanced visibility across academic and public audiences</li>
                <li>Ethical compliance and license assistance</li>
                <li>Post-publication performance insights</li>
              </ul>
              <p>
                Our services deliver visibility, impact, and compliance in a comprehensive package tailored for open access publishing.
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
          <div className="UGCCareOpenAccessJournalPublication-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/ugc-care-journal-publication">UGC Care Journal Publication</a></li>
              <li><a href="/ugc-care-fast-track-publication">UGC Care Fast Track Journal Publication</a></li>
              <li><a href="/ugc-care-peer-reviewed-publication">UGC Care Peer-Reviewed Journal Publication</a></li>
              <li><a href="/ugc-care-science-technology-publication">UGC Care Science and Technology Journal Publication</a></li>
              <li><a href="/ugc-care-arts-humanities-publication">UGC Care Arts and Humanities Journal Publication</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGCCareOpenAccessJournalPublicationServices;