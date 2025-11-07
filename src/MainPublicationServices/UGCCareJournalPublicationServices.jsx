import "./UGCCareJournalPublicationServices.scss";
import Sidebar from "./PublicationServicesSidebar";

const faqs = [
  {
    question: "What are UGC Care Journal Publication Services?",
    answer: "UGC Care Journal Publication Services provide end-to-end support for researchers to publish in journals listed under the UGC CARE (Consortium for Academic and Research Ethics) list, ensuring compliance with academic standards and university requirements."
  },
  {
    question: "Which journals are included in your UGC Care publication support?",
    answer: "We target journals from UGC CARE List Group I and Group II, carefully selected based on your manuscript’s subject area and academic goals."
  },
  {
    question: "What services are included in your UGC Care publication process?",
    answer: "Our services include verified journal selection, manuscript review and editing, plagiarism checks, formatting, submission support, revisions, and compliance with UGC norms."
  }
];

const UGCCareJournalPublicationServices = () => {
  return (
    <div className="UGCCareJournalPublication">
      <Sidebar />
      <div className="UGCCareJournalPublication-main">
        <div className="UGCCareJournalPublication-grid">
          {/* Left: Keywords */}
          <div className="UGCCareJournalPublication-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ugc care journal publication services</li>
              <li>publish in ugc care journal</li>
              <li>ugc care approved journal publication</li>
              <li>ugc care manuscript support</li>
              <li>ugc journal publication help</li>
              <li>UGC CARE India journal list publication</li>
              <li>publish paper in ugc care</li>
              <li>narpavi ugc care publication assistance</li>
              <li>journal publication for Indian researchers</li>
              <li>academic publication services India</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="UGCCareJournalPublication-center">
            <h1>UGC Care Journal Publication Services</h1>

            <section className="UGCCareJournalPublication-intro">
              <p>
                At <strong>Narpavi Research Institute</strong>, our UGC Care Journal Publication Services provide specialized support for scholars, academicians, and researchers aiming to publish in journals listed under the UGC CARE (Consortium for Academic and Research Ethics) list. These services ensure your manuscript meets the academic integrity, formatting, and citation standards required by UGC-approved journals.
              </p>
              <p>
                Tailored to the evolving standards of Indian universities and regulatory bodies, our services guarantee academic legitimacy and successful publication outcomes across disciplines like Engineering, Management, Arts, Science, Law, and Education.
              </p>
            </section>

            <section className="UGCCareJournalPublication-features">
              <h2>Comprehensive Features of Our UGC Care Journal Publication Services</h2>
              <p>
                Our UGC Care Journal Publication Services offer a complete solution from journal selection to final publication. Key features include:
              </p>
              <ul>
                <li>Verified Journal Selection from the latest UGC Care List (Group I and Group II)</li>
                <li>Manuscript Review and Editing by subject-matter experts</li>
                <li>Plagiarism Check and Removal using Turnitin and iThenticate tools</li>
                <li>Formatting and Referencing as per journal guidelines</li>
                <li>Submission and Communication Support with the journal editors</li>
                <li>Revisions and Resubmissions until acceptance</li>
                <li>Compliance with UGC Norms and University Guidelines</li>
              </ul>
              <p>
                We aim to enhance your academic portfolio by ensuring every paper meets UGC standards and aligns with your career goals.
              </p>
            </section>

            <section className="UGCCareJournalPublication-comparative-table">
              <h2>Comparative Overview: UGC Care vs. Other Indexed Journals</h2>
              <div className="UGCCareJournalPublication-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>UGC Care Journals</th>
                      <th>Scopus Indexed Journals</th>
                      <th>SCI Indexed Journals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Target Audience</td><td>Indian Universities & Colleges</td><td>International Academic Community</td><td>High-impact Global Research Community</td></tr>
                    <tr><td>Review Process Duration</td><td>Moderate</td><td>Lengthy</td><td>Rigorous and Time-Intensive</td></tr>
                    <tr><td>Acceptance Criteria</td><td>Moderate (based on quality and relevance)</td><td>Strict</td><td>Highly Selective</td></tr>
                    <tr><td>Publication Fee (Approximate)</td><td>Low to Moderate</td><td>Moderate to High</td><td>High</td></tr>
                    <tr><td>Institutional Recognition</td><td>Widely accepted in Indian academia</td><td>Globally Recognized</td><td>Globally Recognized</td></tr>
                    <tr><td>Citation Impact</td><td>Moderate</td><td>High</td><td>Very High</td></tr>
                    <tr><td>Support by Narpavi</td><td>Full Support Offered</td><td>Full Support Offered</td><td>Full Support Offered</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="UGCCareJournalPublication-support">
              <h2>End-to-End Support for Seamless UGC Care Journal Publication</h2>
              <p>
                From identifying the right journal to preparing and submitting your manuscript, our dedicated team ensures transparency, academic honesty, and efficiency. Our UGC Care Journal Publication Services align with NAAC, AICTE, and university mandates, ensuring recognition where it matters most.
              </p>
              <p>
                With multilingual editing support and cross-disciplinary expertise, we tailor each submission to meet journal-specific requirements, enhancing acceptance rates and minimizing delays.
              </p>
            </section>

            <section className="UGCCareJournalPublication-benefits">
              <h2>Benefits of Choosing Narpavi’s UGC Care Journal Publication Services</h2>
              <p>
                Our services are designed to maximize your publication success and academic impact. Key benefits include:
              </p>
              <ul>
                <li>Dedicated Research Advisor for personalized guidance</li>
                <li>Multiple Journal Recommendations based on your subject area</li>
                <li>Expert Review and Language Polishing for high-quality manuscripts</li>
                <li>Fast-track publication options wherever applicable</li>
                <li>Rejection handling and resubmission assistance</li>
                <li>Continuous progress updates until final publication</li>
              </ul>
              <p>
                By choosing Narpavi’s UGC Care Journal Publication Services, you meet mandatory requirements for promotions, thesis evaluations, and research project approvals while enhancing your academic visibility.
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
          <div className="UGCCareJournalPublication-right">
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

export default UGCCareJournalPublicationServices;