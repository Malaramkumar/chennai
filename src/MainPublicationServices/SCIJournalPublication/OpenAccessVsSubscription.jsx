
import React from "react";
import { useNavigate } from "react-router-dom";
import "./OpenAccessVsSubscription.scss";

const OpenAccessVsSubscription = () => {
  const navigate = useNavigate();

  return (
    <div className="OpenAccessVsSubscription-container">
      {/* Left Side - Empty */}
      <div className="OpenAccessVsSubscription-left"></div>

      {/* Main Section */}
      <div className="OpenAccessVsSubscription-main">
        <h1>Open Access & Subscription SCI Journals – We Guide Your Path</h1>
        <p>Make the Right Publishing Choice for Your Research Visibility, Budget, and Goals</p>
        <p>
          Choosing between Open Access (OA) and Subscription-based SCI journals is more than a financial decision — it’s a strategic move that affects your research visibility, impact, and reach. Each model has distinct advantages, costs, and implications that many researchers overlook.
        </p>
        <p>
          At Narpavi Research Institute, we help you understand the pros, cons, and publishing requirements of both models. Whether you're working with funding, a tight budget, or aiming for global exposure, we tailor your publication pathway to your needs.
        </p>

        <section>
          <h2>Understanding the Difference: Open Access vs Subscription SCI Journals</h2>
          <table className="OpenAccessVsSubscription-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Open Access SCI Journals</th>
                <th>Subscription SCI Journals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reader Access</td>
                <td>Free for all (global access)</td>
                <td>Access only through paid subscriptions</td>
              </tr>
              <tr>
                <td>Author Cost (APC)</td>
                <td>Usually required (can range from $500–$5000)</td>
                <td>Usually no fee (or minimal)</td>
              </tr>
              <tr>
                <td>Citation Impact</td>
                <td>Higher visibility and shareability</td>
                <td>Restricted reach may limit exposure</td>
              </tr>
              <tr>
                <td>Speed of Publication</td>
                <td>Often faster review and release cycles</td>
                <td>Moderate to slow, varies by journal</td>
              </tr>
              <tr>
                <td>Indexing & Impact Factor</td>
                <td>Fully SCI-indexed</td>
                <td>Fully SCI-indexed</td>
              </tr>
              <tr>
                <td>Retention of Copyright</td>
                <td>Authors retain rights (CC licenses)</td>
                <td>Rights often transferred to publisher</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Funded projects, visibility-focused researchers</td>
                <td>Budget-restricted authors, niche fields</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>How We Help You Make the Right Choice</h2>
          <ol>
            <li>
              <strong>Journal Type Matching</strong><br />
              We evaluate your manuscript goals, field norms, and funding availability to recommend SCI journals that are either open access, subscription-based, or offer a hybrid option.
            </li>
            <li>
              <strong>APC Guidance & Budget Planning</strong><br />
              We provide transparent APC estimates and, where applicable, help you apply for fee waivers, discounts, or institutional funding. Our experience with hundreds of journals gives us the insight to avoid hidden costs.
            </li>
            <li>
              <strong>Visibility vs Budget Optimization</strong><br />
              Some high-quality subscription journals accept free submissions, while others publish in Q1 OA journals with high APCs. We analyze impact factor vs cost trade-offs to give you the best exposure within your budget.
            </li>
            <li>
              <strong>Author Communication & Licensing Support</strong><br />
              We communicate with journal editors on your behalf (when permitted), helping with waiver requests, copyright licenses, and Creative Commons (CC-BY, CC-BY-NC) selections for OA journals.
            </li>
            <li>
              <strong>Formatting & Submission Portal Support</strong><br />
              OA journals often have specific metadata and formatting requirements. We ensure your manuscript, figures, author bios, and declarations are compliant with both OA and subscription platforms.
            </li>
          </ol>
        </section>

        <section>
          <h2>Who Needs This Service?</h2>
          <ul>
            <li>Researchers with grant-funded projects requiring OA</li>
            <li>First-time SCI authors confused between OA and subscription</li>
            <li>Scholars needing to maximize citations and global reach</li>
            <li>Researchers with tight publication budgets</li>
            <li>Academic departments preparing institutional submissions</li>
          </ul>
        </section>

        <section>
          <h2>Cost vs Visibility – Which Journal Is Right for You?</h2>
          <table className="OpenAccessVsSubscription-table">
            <thead>
              <tr>
                <th>Publishing Goal</th>
                <th>Best Choice</th>
                <th>Our Service Helps With</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High visibility & open global access</td>
                <td>Open Access SCI Journal</td>
                <td>Journal selection + APC guidance</td>
              </tr>
              <tr>
                <td>Low-cost or free publication</td>
                <td>Subscription Journal</td>
                <td>Zero-cost options & matching</td>
              </tr>
              <tr>
                <td>Institutional/funder compliance</td>
                <td>Open Access or Hybrid</td>
                <td>Licensing & funding support</td>
              </tr>
              <tr>
                <td>Balanced visibility & cost</td>
                <td>Hybrid SCI Journal</td>
                <td>Trade-off analysis</td>
              </tr>
              <tr>
                <td>Early-career reputation building</td>
                <td>Either (based on field)</td>
                <td>Personalized strategy consultation</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Real Author Experiences</h2>
          <ul>
            <li>
              <em>“I had no idea Open Access would cost $3,000. Narpavi guided me to an alternative with the same impact factor but no fees!”</em><br />
              — Dr. Alina V., Clinical Researcher
            </li>
            <li>
              <em>“They helped me claim a full APC waiver and get published in a top-tier OA journal.”</em><br />
              — Professor Rajesh M., Biotechnology
            </li>
          </ul>
        </section>

        <section>
          <h2>Get Expert Guidance on Open Access & Subscription Journals</h2>
          <p>
            Choosing the wrong journal model could cost you money, time, and visibility. Let our publication experts help you navigate this critical decision with clarity and confidence.
          </p>
          <p>
            <strong>Reach out now for a personalized SCI journal selection and APC strategy session.</strong>
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="OpenAccessVsSubscription-right">
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
            <button onClick={() => navigate("/publication-services/ethical-sci-publication")}>
              Ethical & Compliant SCI Publication
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/publication-services/conference-paper-publication-services/national-conference-paper-support")}>
              National Conference Paper Publication Support
            </button>
          </li>
        </ul>

        <h3>Keywords</h3>
        <div className="OpenAccessVsSubscription-tags">
          <span>Open Access SCI Publication</span>
          <span>Open access SCI journal submission</span>
          <span>Publish open access in SCI journals</span>
          <span>High-impact OA journals</span>
          <span>Open access publication support</span>
          <span>Publish in Free SCI Journals</span>
          <span>Free SCI journals to publish</span>
          <span>No-cost SCI publication</span>
          <span>Zero APC SCI-indexed journals</span>
          <span>How to publish in SCI without fee</span>
          <span>APC Guidance Service</span>
          <span>Article processing charge support</span>
          <span>APC waiver help</span>
          <span>Affordable SCI publication options</span>
          <span>SCI journal publication cost guidance</span>
        </div>
      </div>
    </div>
  );
};

export default OpenAccessVsSubscription;
