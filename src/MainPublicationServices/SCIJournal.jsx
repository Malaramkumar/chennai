
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SCIJournal.scss";
import Sidebar from "./PublicationServicesSidebar"

const SCIJournal = () => {
  const navigate = useNavigate();

  return (
    <div className="SCIJournalSupport-container">
      <Sidebar/>
      {/* Left Side - Empty */}
      <div className="SCIJournalSupport-left"></div>

      {/* Main Section */}
      <div className="SCIJournalSupport-main">
        <h1>SCI Journal Publication Services</h1>
        <p>Publish with Confidence in Top-Tier SCI Journals</p>
        <p>
          Struggling to get published in SCI-indexed journals? You're not alone. Many researchers face barriers such as language quality, formatting errors, peer-review rejections, and plagiarism issues. At Narpavi Research Institute, we specialize in end-to-end SCI journal publication services tailored for researchers, scientists, and academics worldwide.
        </p>
        <p>
          Whether you're submitting for the first time or re-submitting after a rejection, our expert team provides the tools, support, and editorial excellence needed to help your research get accepted by leading Science Citation Index (SCI) journals.
        </p>

        <section>
          <h2>Our Core SCI Journal Publication Services</h2>
          <ol>
            <li>
              <strong>SCI Journal Manuscript Writing</strong><br />
              Our experienced subject-matter experts craft high-quality, publication-ready manuscripts aligned with your research goals and target journal’s scope and standards.
              <ul>
                <li>Field-specific academic writers (PhD/MS level)</li>
                <li>Structured formatting per journal requirements</li>
                <li>Compliance with SCI publication standards</li>
              </ul>
            </li>
            <li>
              <strong>Advanced Peer Review & Technical Editing</strong><br />
              We simulate a real peer-review process to help pre-identify issues before submission.
              <ul>
                <li>Scientific accuracy check</li>
                <li>Reviewer-style critique</li>
                <li>Logical flow & evidence-based argumentation enhancement</li>
              </ul>
            </li>
            <li>
              <strong>Plagiarism Check & Correction</strong><br />
              Avoid accidental plagiarism risks with our cutting-edge tools and editors.
              <ul>
                <li>Plagiarism scanning via Turnitin or iThenticate</li>
                <li>Paraphrasing & citation correction</li>
                <li>Uniqueness report with before/after comparison</li>
              </ul>
            </li>
            <li>
              <strong>Journal Selection & Submission Support</strong><br />
              Maximize your chances of acceptance by choosing the right SCI journal from our curated database.
              <ul>
                <li>Journal shortlist based on impact factor, scope & turnaround time</li>
                <li>Scope-match verification</li>
                <li>Online submission handling</li>
              </ul>
            </li>
            <li>
              <strong>Rebuttal Letter & Revision Assistance</strong><br />
              Address reviewers’ comments with professional rebuttals and resubmissions.
              <ul>
                <li>Structured response to reviewers</li>
                <li>Scientific counter-arguments</li>
                <li>Manuscript revisions with tracked changes</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>Comparative Table: Why Choose Our SCI Publication Services?</h2>
          <table className="SCIJournalSupport-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Narpavi Research Institute</th>
                <th>General Freelancers</th>
                <th>AI Writing Tools</th>
                <th>University Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SCI-specific writing experts</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>⚠️ Limited</td>
              </tr>
              <tr>
                <td>End-to-end publication support</td>
                <td>✅ Full service</td>
                <td>❌ Limited</td>
                <td>❌ None</td>
                <td>⚠️ Partial</td>
              </tr>
              <tr>
                <td>Plagiarism correction</td>
                <td>✅ With report</td>
                <td>❌ Manual fix</td>
                <td>⚠️ Risky</td>
                <td>⚠️ Incomplete</td>
              </tr>
              <tr>
                <td>Peer-reviewed editing</td>
                <td>✅ Expert level</td>
                <td>⚠️ Not peer-style</td>
                <td>❌ Not offered</td>
                <td>⚠️ Academic only</td>
              </tr>
              <tr>
                <td>Rebuttal & resubmission support</td>
                <td>✅ Yes</td>
                <td>❌ Rarely</td>
                <td>❌ No</td>
                <td>⚠️ Optional</td>
              </tr>
              <tr>
                <td>Turnaround Time</td>
                <td>⚡ 7–15 days</td>
                <td>⏱️ Varies</td>
                <td>⚡ Fast</td>
                <td>🐢 Often delayed</td>
              </tr>
              <tr>
                <td>Confidentiality</td>
                <td>🔐 100% guaranteed</td>
                <td>❌ Not assured</td>
                <td>❌ Risky</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>Pricing Transparency</td>
                <td>💡 Flat & fair</td>
                <td>❓ Unclear</td>
                <td>💲 Subscription-based</td>
                <td>🎓 Subsidized/none</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Who We Serve</h2>
          <p>We collaborate with:</p>
          <ul>
            <li>Independent researchers</li>
            <li>PhD and postgraduate scholars</li>
            <li>Professors and academic staff</li>
            <li>Research institutions</li>
            <li>International science organizations</li>
          </ul>
        </section>

        <section>
          <h2>Ready to Publish in an SCI Journal?</h2>
          <p>
            Let us help you transform your research into a world-class publication. Our proven process, technical accuracy, and academic rigor ensure your work meets the highest scientific standards.
          </p>
          <p>
            <strong>Contact us today for a free consultation and customized quote</strong>
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="SCIJournalSupport-right">
        <h3>Related Services</h3>
        <ul>
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
            <button onClick={() => navigate("/publication-services/ethical-sci-publication")}>
              Ethical & Compliant SCI Publication
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/open-access-vs-subscription")}>
              Open Access & Subscription SCI Journals
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/post-publication-visibility")}>
              Post-Publication Visibility & Indexing
            </button>
          </li>
        </ul>

        <h3>Keywords</h3>
        <div className="SCIJournalSupport-tags">
          <span>SCI journal publication services</span>
          <span>How to publish in SCI journals</span>
          <span>SCI-indexed journal editing</span>
          <span>Peer-reviewed journal writing help</span>
          <span>Plagiarism removal for research paper</span>
          <span>Rebuttal letter writing services</span>
          <span>SCI manuscript editing and submission</span>
          <span>SCI article writing company</span>
          <span>Research paper editing for SCI journals</span>
          <span>Journal selection services for SCI papers</span>
        </div>
      </div>
    </div>
  );
};

export default SCIJournal;
