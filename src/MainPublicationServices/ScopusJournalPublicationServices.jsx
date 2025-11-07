import "./ScopusJournalPublicationServices.scss";
import Sidebar from "./PublicationServicesSidebar"
 
const faqs = [
  {
    question: "How long does it take to publish in a Scopus journal?",
    answer: "Depending on the journal quartile and review process, it typically takes 1–12 months. We offer fast-track options as well."
  },
  {
    question: "Can you help with Q1 Scopus journal submissions?",
    answer: "Yes, Narpavi Research Institute provides expert support for Q1 Scopus journals including editing, peer review response, and strategic selection."
  },
  {
    question: "Do you guarantee acceptance in Scopus journals?",
    answer: "While we ensure the highest quality standards and optimized submissions, final acceptance depends on the editorial board's review."
  }
];

const ScopusJournalPublication = () => {
  return (
    <div className="ScopusJournal">
        <Sidebar />
    <div className="ScopusJournal-main">
     

      <div className="ScopusJournal-grid">
        {/* Left: Keywords */}
        <div className="ScopusJournal-left">
          <h3>🔑 Keywords</h3>
          <ul>
            <li>Scopus journal publication services</li>
            <li>Publish in Scopus journal</li>
            <li>Q1 Scopus journal help</li>
            <li>Scopus indexed journal assistance</li>
            <li>Scopus manuscript support</li>
            <li>Scopus paper formatting</li>
            <li>Academic publication in Scopus</li>
            <li>Narpavi Research Institute Scopus</li>
          </ul>
        </div>

        {/* Center: Main Content */}
        <div className="ScopusJournal-center">
          <h1>Scopus Journal Publication Services</h1>

          <section className="ScopusJournal-intro">
            <p>
              Publishing in a Scopus-indexed journal is a hallmark of academic credibility and global recognition. At <strong>Narpavi Research Institute</strong>, our specialized <strong>Scopus Journal Publication Services</strong> are crafted to meet the highest standards of scholarly publishing. We offer comprehensive, end-to-end support—from manuscript development to successful journal acceptance—ensuring your research reaches a respected audience through reputed Scopus journals.
            </p>
            <p>
With a dedicated team of academic editors, publication strategists, and peer review consultants, our services are designed to refine your manuscript, align it with the scope of your target journal, and comply with the latest Scopus publication protocols. Whether you are a PhD candidate, postdoctoral fellow, or university faculty member, we empower you to publish with confidence, precision, and speed.            </p>
          </section>

          <section className="ScopusJournal-expert-services">
            <h2>Expert-Led Services Designed for Publication Success</h2>
            <ul>
              <li>Each manuscript is thoroughly reviewed by domain experts to ensure scholarly tone, technical accuracy, and structural clarity.</li>
              <li>Advanced plagiarism screening using Turnitin/iThenticate ensures content originality and integrity.</li>
              <li>Our team manages the entire submission process, including portal login, metadata preparation, file uploads, and correspondence with journal editors.</li>
              <li>We assist with responding to peer reviewer comments and resubmissions, increasing your chances of acceptance.</li>
              <li>Fast-track publication options are available for researchers facing urgent academic or institutional deadlines.</li>
              <li>Journal selection is based on transparent criteria—impact factor, subject fit, indexing, and acceptance history.</li>
            </ul>
          </section>

          <section className="ScopusJournal-comparative-table">
            <h2>Comparative Overview of Scopus Journal Quartiles in Engineering</h2>
            <div className="ScopusJournal-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Q4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Impact Factor</td><td>Very High</td><td>High</td><td>Moderate</td><td>Low</td></tr>
                  <tr><td>Reputation</td><td>Prestigious</td><td>Respected</td><td>Regional</td><td>Low</td></tr>
                  <tr><td>Acceptance Rate</td><td>&lt; 15%</td><td>15–30%</td><td>30–50%</td><td>&gt; 50%</td></tr>
                  <tr><td>Timeline</td><td>3–12 mo</td><td>2–6 mo</td><td>1–4 mo</td><td>1–3 mo</td></tr>
                  <tr><td>Open Access Fee</td><td>₹70k–2L+</td><td>Medium</td><td>Optional</td><td>Low</td></tr>
                  <tr><td>Citations/Article</td><td>&gt;10</td><td>5–10</td><td>2–5</td><td>0–2</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="ScopusJournal-process">
            <h2>Our Streamlined Publication Process</h2>
            <ul>
              <li><strong>Evaluation:</strong> Manuscript review for originality and alignment with scopes</li>
              <li><strong>Journal Selection:</strong> Based on domain, impact, and urgency</li>
              <li><strong>Editing & Plagiarism:</strong> Language, reference, visuals, and originality checks</li>
              <li><strong>Submission:</strong> Portal login, file upload, editor communication</li>
              <li><strong>Peer Review Support:</strong> Reviewer response and revision handling</li>
              <li><strong>Post-Acceptance:</strong> DOI indexing, citation strategy</li>
            </ul>
          </section>

          <section className="ScopusJournal-domains">
            <h2>Disciplines Covered by Our Scopus Journal Publication Services</h2>
            <ul>
              <li>Engineering and Technology</li>
              <li>Medicine and Life Sciences</li>
              <li>Social Sciences and Education</li>
              <li>Management and Commerce</li>
              <li>Environmental Science and Sustainability</li>
              <li>Psychology and Humanities</li>
              <li>Data Science and Computer Applications</li>
            </ul>
          </section>

          <section className="ScopusJournal-conclusion">
            <p>
              Publishing in Scopus-indexed journals no longer needs to be a complex task. With <strong>Scopus Journal Publication Services</strong> by <strong>Narpavi Research Institute</strong>, your research finds the visibility and credibility it deserves.
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

        {/* JSON-LD Schema Markup */}
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
        <div className="ScopusJournal-right">
          <h3>🔗 Related Services</h3>
          <ul>
            <li><a href="/ieee-conference-publication">IEEE Conference Publication</a></li>
            <li><a href="/springer-conference-publication">Springer Publication Support</a></li>
            <li><a href="/ugc-care-publication">UGC Care Journal Assistance</a></li>
            <li><a href="/elsevier-publication">Elsevier Journal Support</a></li>
            <li><a href="/scopus-q1-publication">Q1 Scopus Journal Help</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ScopusJournalPublication;
