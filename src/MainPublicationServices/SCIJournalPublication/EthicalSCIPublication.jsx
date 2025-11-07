
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EthicalSCIPublication.scss";

const EthicalSCIPublication = () => {
  const navigate = useNavigate();

  return (
    <div className="EthicalSCIPublication-container">
      {/* Left Side - Empty */}
      <div className="EthicalSCIPublication-left"></div>

      {/* Main Section */}
      <div className="EthicalSCIPublication-main">
        <h1>Ethical & Compliant SCI Publication – Our Guaranteed Standards</h1>
        <p>Ensure Integrity, Originality, and Compliance in Every Step of Your SCI Publishing Journey</p>
        <p>
          Publishing in a Science Citation Indexed (SCI) journal demands more than scientific quality — it requires unwavering ethical standards. Journals today are equipped with advanced plagiarism detectors, strict authorship policies, and increasingly vigilant editorial boards.
        </p>
        <p>
          At Narpavi Research Institute, we ensure that your manuscript adheres to the highest standards of publication ethics, helping you avoid retractions, delays, or blacklisting. From plagiarism checks to authorship validation and COPE-compliant formatting — we’re your ethical publishing partner.
        </p>

        <section>
          <h2>Why Ethics Are Non-Negotiable in SCI Publishing</h2>
          <p>Many high-quality papers are rejected or retracted due to ethical violations that could have been prevented. These include:</p>
          <ul>
            <li>Unintentional or excessive plagiarism</li>
            <li>Authorship conflicts or ghostwriting</li>
            <li>Duplicate submissions or salami slicing</li>
            <li>Incorrect citation or data manipulation</li>
            <li>Undeclared conflicts of interest</li>
          </ul>
          <p>SCI journals strictly follow guidelines set by COPE (Committee on Publication Ethics), ICMJE, and WAME, and expect the same from authors.</p>
        </section>

        <section>
          <h2>Our Ethical Compliance Services – What We Offer</h2>
          <ol>
            <li>
              <strong>Plagiarism Detection & Correction</strong><br />
              We scan your manuscript using Turnitin/iThenticate and provide a detailed report, highlighting all matching content. Our editorial team rewrites or cites correctly to reduce similarity while preserving your voice and research integrity.
            </li>
            <li>
              <strong>Ethical Authorship & Contribution Guidance</strong><br />
              We help clarify author roles and ensure accurate author order based on ICMJE recommendations. Whether you’re facing disputes or unclear contribution roles, we guide you on maintaining transparent authorship practices.
            </li>
            <li>
              <strong>Compliance with Journal & COPE Guidelines</strong><br />
              Every manuscript is reviewed to meet COPE standards and specific journal ethics requirements. We ensure inclusion of:
              <ul>
                <li>Ethics approval for human/animal studies</li>
                <li>Conflict of interest declarations</li>
                <li>Proper funding acknowledgments</li>
                <li>Data availability statements</li>
              </ul>
            </li>
            <li>
              <strong>Retraction Risk Assessment</strong><br />
              If you're submitting a revised or previously rejected manuscript, we assess retraction risks and flag any ethical vulnerabilities before submission.
            </li>
          </ol>
        </section>

        <section>
          <h2>Comparison Table: Our Ethical Support vs Others</h2>
          <table className="EthicalSCIPublication-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Narpavi Research Institute</th>
                <th>Freelancers</th>
                <th>AI Tools</th>
                <th>In-House Teams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Advanced plagiarism scan (Turnitin/iThenticate)</td>
                <td>✅ Yes</td>
                <td>⚠️ Not always</td>
                <td>⚠️ Limited</td>
                <td>❌ Rarely</td>
              </tr>
              <tr>
                <td>Human-led plagiarism correction</td>
                <td>✅ Expert Editors</td>
                <td>⚠️ Variable</td>
                <td>❌ AI rewriting</td>
                <td>❌ Not standard</td>
              </tr>
              <tr>
                <td>COPE-compliant formatting check</td>
                <td>✅ Detailed</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>⚠️ Partial</td>
              </tr>
              <tr>
                <td>Ethical authorship support</td>
                <td>✅ Based on ICMJE</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>⚠️ Minimal</td>
              </tr>
              <tr>
                <td>Research integrity advisory</td>
                <td>✅ Available</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ Not offered</td>
              </tr>
              <tr>
                <td>Retraction risk assessment</td>
                <td>✅ Included</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Who Should Use Our Ethics & Compliance Support?</h2>
          <ul>
            <li>Researchers submitting to high-impact or Q1 SCI journals</li>
            <li>Authors from institutions with zero-tolerance for plagiarism</li>
            <li>Early-career scholars unfamiliar with COPE or ICMJE norms</li>
            <li>International collaborators needing authorship clarity</li>
            <li>Anyone revising or resubmitting a previously flagged manuscript</li>
          </ul>
        </section>

        <section>
          <h2>Ethical Publishing Is a Long-Term Investment</h2>
          <p>
            Reputation damage from retractions or ethical flags is not easily reversed. Journals may blacklist authors, and your university or funder could impose disciplinary actions.
          </p>
          <p>Our service provides the confidence to submit knowing your manuscript is:</p>
          <ul>
            <li>Original</li>
            <li>Ethically authored</li>
            <li>Properly cited</li>
            <li>Transparent and traceable</li>
          </ul>
        </section>

        <section>
          <h2>Let Us Help You Publish With Confidence</h2>
          <p>
            Protect your research and your reputation. Our editorial and compliance experts work behind the scenes to ensure your manuscript is journal-ready and ethically sound from start to finish.
          </p>
          <p>
            <strong>Reach out today for a confidential ethics review or to learn more about our full SCI publication support services.</strong>
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="EthicalSCIPublication-right">
        <h3>Related Services</h3>
        <ul>
          <li>
            <button onClick={() => navigate("/publication-services/sci-journal-support")}>
              SCI Journal Publication Support
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/sci-journal-targeting")}>
              SCI Journal Targeting Service
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/sci-publishing-timelines")}>
              SCI Publishing Timelines Support
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/elsevier-conference-paper-support")}>
              Elsevier Conference Paper Publication Support
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/national-conference-paper-support")}>
              National Conference Paper Publication Support
            </button>
          </li>
        </ul>

        <h3>Keywords</h3>
        <div className="EthicalSCIPublication-tags">
          <span>Ethical Publishing</span>
          <span>Ethical SCI publication practices</span>
          <span>How to avoid ethical violations in research</span>
          <span>Responsible research publishing</span>
          <span>Retraction-free publishing support</span>
          <span>COPE-Compliant Research Services</span>
          <span>COPE guidelines for authors</span>
          <span>COPE-compliant manuscript editing</span>
          <span>Ethical compliance in journal submission</span>
          <span>Journal ethics checklist service</span>
          <span>Plagiarism-Free SCI Support</span>
          <span>Plagiarism removal for research papers</span>
          <span>Turnitin check and similarity correction</span>
          <span>Reduce plagiarism in SCI papers</span>
          <span>Plagiarism-free publishing services</span>
        </div>
      </div>
    </div>
  );
};

export default EthicalSCIPublication;
