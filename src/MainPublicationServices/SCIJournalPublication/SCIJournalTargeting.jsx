
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SCIJournalTargeting.scss";

const SCIJournalTargeting = () => {
  const navigate = useNavigate();

  return (
    <div className="SCIJournalTargeting-container">
      {/* Left Side - Empty */}
      <div className="SCIJournalTargeting-left"></div>

      {/* Main Section */}
      <div className="SCIJournalTargeting-main">
        <h1>Choosing the Right SCI Journal</h1>
        <p>Maximize Acceptance by Submitting to the Right SCI-Indexed Journal</p>
        <p>
          Selecting the wrong journal is one of the top reasons research papers get rejected — even when the science is solid. Submitting your work to a journal outside its scope or beyond your field’s current visibility can delay publication by months or lead to repeated rejection.
        </p>
        <p>
          At Narpavi Research Institute, our SCI Journal Targeting Service combines data-driven analysis with subject expertise to help you submit to journals where your research has the highest chance of success. We do the work — so your paper lands exactly where it belongs.
        </p>

        <section>
          <h2>Why Journal Selection Matters in SCI Publishing</h2>
          <p>Even a technically sound, innovative manuscript may be rejected if:</p>
          <ul>
            <li>It doesn't match the scope of the journal</li>
            <li>The impact factor is mismatched with your research depth</li>
            <li>The topic is too niche or too broad for the readership</li>
            <li>The journal has excessive backlog or slow review cycles</li>
            <li>The journal is not indexed or turns out to be predatory</li>
          </ul>
          <p>That’s why journal targeting is not guesswork — it’s a strategy. And we’ve perfected it.</p>
        </section>

        <section>
          <h2>Our SCI Journal Targeting Strategy – What Sets Us Apart</h2>
          <ol>
            <li>
              <strong>Scope and Discipline Alignment</strong><br />
              We match your manuscript with journals that explicitly publish in your research area — increasing relevance and reducing immediate desk rejections.
            </li>
            <li>
              <strong>Impact Factor & Quartile Analysis</strong><br />
              Based on your preferences, field benchmarks, and publication goals, we help you target journals with optimal visibility and reasonable acceptance thresholds.
            </li>
            <li>
              <strong>Indexing & Authenticity Verification</strong><br />
              We verify if the journal is truly SCI-indexed (Web of Science Core Collection) and not predatory. You get a curated list of legitimate, peer-reviewed journals only.
            </li>
            <li>
              <strong>Turnaround Time & APC Evaluation</strong><br />
              We assess average review timelines, acceptance rates, and article processing charges (APCs) to help you make cost-effective, deadline-sensitive decisions.
            </li>
            <li>
              <strong>Personalized Journal Shortlist</strong><br />
              You receive a custom shortlist of 3–5 SCI journals, complete with:
              <ul>
                <li>Journal title, link & scope description</li>
                <li>Impact factor & quartile rank</li>
                <li>Publishing model (Open Access / Subscription)</li>
                <li>Time to first decision & publication</li>
                <li>Submission portal & formatting style</li>
                <li>Known acceptance/rejection insights</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>Comparative Table: Our Journal Targeting vs Others</h2>
          <table className="SCIJournalTargeting-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Narpavi Research Institute</th>
                <th>Manual Self-Search</th>
                <th>Freelancers</th>
                <th>AI-based Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SCI-indexed verification</td>
                <td>✅ Yes</td>
                <td>❌ Risky</td>
                <td>⚠️ Inconsistent</td>
                <td>⚠️ Limited</td>
              </tr>
              <tr>
                <td>Scope match accuracy</td>
                <td>✅ High (field expert)</td>
                <td>⚠️ Guesswork</td>
                <td>⚠️ Generic</td>
                <td>❌ No context</td>
              </tr>
              <tr>
                <td>Impact factor filtering</td>
                <td>✅ Per quartile</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>⚠️ Basic only</td>
              </tr>
              <tr>
                <td>APC / fee transparency</td>
                <td>✅ Included</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ Not provided</td>
              </tr>
              <tr>
                <td>Turnaround time info</td>
                <td>✅ Included</td>
                <td>❌ No</td>
                <td>⚠️ Rarely</td>
                <td>❌ Absent</td>
              </tr>
              <tr>
                <td>Personalized shortlist</td>
                <td>✅ Custom 3–5</td>
                <td>❌ None</td>
                <td>⚠️ May offer 1–2</td>
                <td>⚠️ Random</td>
              </tr>
              <tr>
                <td>Submission format advice</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Predatory journal screening</td>
                <td>✅ Guaranteed</td>
                <td>❌ None</td>
                <td>⚠️ Uncertain</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Based on your manuscript</td>
                <td>✅ 100%</td>
                <td>❌ Title-based</td>
                <td>⚠️ Generic</td>
                <td>❌ Algorithmic only</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Ideal for:</h2>
          <ul>
            <li>First-time SCI authors</li>
            <li>Researchers unsure about target journals</li>
            <li>Scholars seeking fast acceptance without risking rejections</li>
            <li>Funded projects needing high-impact journals</li>
            <li>PhD and academic publishing with deadlines</li>
          </ul>
        </section>

        <section>
          <h2>Avoid Predatory or Fake SCI Journals</h2>
          <p>
            Many so-called SCI journals are not truly indexed or may be blacklisted due to unethical publishing practices. Submitting to these can damage your academic reputation, waste fees, and risk your research being trapped.
          </p>
          <p>We use trusted databases like:</p>
          <ul>
            <li>Web of Science (Clarivate)</li>
            <li>Journal Citation Reports (JCR)</li>
            <li>DOAJ & Scopus (for additional cross-checks)</li>
            <li>COPE-member verification</li>
          </ul>
        </section>

        <section>
          <h2>What You’ll Receive</h2>
          <ul>
            <li>Curated list of 3–5 best-match SCI journals</li>
            <li>Detailed comparison table with selection rationale</li>
            <li>Formatting checklist for each journal</li>
            <li>Submission portal links</li>
            <li>Final recommendation from a senior publishing expert</li>
          </ul>
        </section>

        <section>
          <h2>Ready to Target the Right SCI Journal?</h2>
          <p>
            Don’t risk submitting your valuable research to the wrong journal. Let our expert team guide your SCI publication journey with precision, strategy, and ethics.
          </p>
          <p>
            <strong>Contact us today to request a free journal suitability consultation or inquire about our full SCI Publication Support Package.</strong>
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="SCIJournalTargeting-right">
        <h3>Related Services</h3>
        <ul>
          <li>
            <button onClick={() => navigate("/publication-services/sci-journal-support")}>
              SCI Journal Publication Support
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/elsevier-conference-paper-support")}>
              Elsevier Conference Paper Publication Support
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/springer-conference-paper-assistance")}>
              Springer Conference Paper Publication Assistance
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/national-conference-paper-support")}>
              National Conference Paper Publication Support
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/fast-track-conference-paper-services")}>
              Fast-Track Conference Paper Publication Services
            </button>
          </li>
        </ul>

        <h3>Keywords</h3>
        <div className="SCIJournalTargeting-tags">
          <span>Best SCI journals for my paper</span>
          <span>SCI journal targeting service</span>
          <span>How to find SCI-indexed journals</span>
          <span>SCI journal selection help</span>
          <span>Submit to the right SCI journal</span>
          <span>Avoid rejection in SCI journals</span>
          <span>Predatory journal check</span>
          <span>SCI journal shortlisting service</span>
          <span>Custom SCI publication guidance</span>
          <span>Find right SCI-indexed journal</span>
        </div>
      </div>
    </div>
  );
};

export default SCIJournalTargeting;
