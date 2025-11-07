
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SCIPublishingTimelines.scss";

const SCIPublishingTimelines = () => {
  const navigate = useNavigate();

  return (
    <div className="SCIPublishingTimelines-container">
      {/* Left Side - Empty */}
      <div className="SCIPublishingTimelines-left"></div>

      {/* Main Section */}
      <div className="SCIPublishingTimelines-main">
        <h1>Navigating SCI Publishing Timelines</h1>
        <p>Accelerate Your SCI Journal Journey with Precision Planning and Expert Support</p>
        <p>
          Publishing in a Science Citation Indexed (SCI) journal can be a long and unpredictable process. While high-impact journals are known for rigorous peer reviews, what many researchers don’t anticipate are the avoidable delays — caused by manuscript issues, improper formatting, unclear responses to reviewers, and poor journal targeting.
        </p>
        <p>
          At Narpavi Research Institute, we don’t just help you submit — we help you publish faster. Our specialized support ensures your paper moves efficiently through each phase of the SCI publishing cycle.
        </p>

        <section>
          <h2>Average vs. Fast-Track SCI Publishing Timelines</h2>
          <table className="SCIPublishingTimelines-table">
            <thead>
              <tr>
                <th>Publication Phase</th>
                <th>Average Time (Standard Submission)</th>
                <th>With Our Fast-Track Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manuscript Drafting & Formatting</td>
                <td>3–6 weeks</td>
                <td>7–10 days</td>
              </tr>
              <tr>
                <td>Journal Selection & Submission</td>
                <td>1–2 weeks</td>
                <td>3–5 days</td>
              </tr>
              <tr>
                <td>Peer Review Response Time</td>
                <td>6–12 weeks</td>
                <td>Journal-dependent</td>
              </tr>
              <tr>
                <td>Rebuttal Preparation</td>
                <td>2–3 weeks</td>
                <td>3–5 days</td>
              </tr>
              <tr>
                <td>Final Decision & Publication</td>
                <td>2–4 months</td>
                <td>1–2 months (where fast-track is available)</td>
              </tr>
              <tr>
                <td><strong>Total Time from Start to Publication</strong></td>
                <td><strong>4–8 months</strong></td>
                <td><strong>2–3 months (best-case)</strong></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>How We Help You Accelerate the SCI Publishing Process</h2>
          <ol>
            <li>
              <strong>Fast-Track Manuscript Preparation</strong><br />
              We prioritize deadline-driven projects and offer urgent services without compromising on quality. Whether you're facing academic deadlines, funding timelines, or conference schedules — we adapt.
            </li>
            <li>
              <strong>Intelligent Journal Targeting</strong><br />
              Our data-backed journal selection ensures you submit to SCI journals that not only fit your paper but also offer faster review cycles and lower rejection rates — saving weeks or even months.
            </li>
            <li>
              <strong>Reviewer Response & Rebuttal Drafting</strong><br />
              Responding to reviewers? We provide expert-crafted rebuttal letters, address reviewer concerns precisely, and help restructure your revised manuscript — quickly and professionally.
            </li>
            <li>
              <strong>Real-Time Project Tracking & Communication</strong><br />
              We offer clear timelines and live updates so you never wonder “What’s next?” Our team provides:
              <ul>
                <li>Milestone check-ins</li>
                <li>Progress reports</li>
                <li>Real-time author support</li>
              </ul>
            </li>
            <li>
              <strong>Formatting & Submission-Ready Packages</strong><br />
              Proper formatting delays are common rejection triggers. We ensure your paper complies with every submission guideline (references, font, word limits, ethics statements) before submission.
            </li>
          </ol>
        </section>

        <section>
          <h2>How Long Does SCI Publication Take? Factors That Affect Timelines</h2>
          <table className="SCIPublishingTimelines-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Impact</th>
                <th>How We Minimize Delay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Journal backlog</td>
                <td>High</td>
                <td>We target journals with faster turnaround history</td>
              </tr>
              <tr>
                <td>Reviewer availability</td>
                <td>Moderate</td>
                <td>We submit during optimal review periods</td>
              </tr>
              <tr>
                <td>Incomplete formatting</td>
                <td>High</td>
                <td>We offer submission-ready formatting</td>
              </tr>
              <tr>
                <td>Weak rebuttals</td>
                <td>High</td>
                <td>We craft scientific rebuttal letters</td>
              </tr>
              <tr>
                <td>Ethics or similarity issues</td>
                <td>Critical</td>
                <td>We ensure plagiarism-free, COPE-compliant manuscripts</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Who Needs Our Fast-Track SCI Support?</h2>
          <ul>
            <li>Final-year PhD candidates under submission deadlines</li>
            <li>Grant-funded researchers with project deliverables</li>
            <li>Postdocs and faculty seeking timely publication for promotion</li>
            <li>Industry professionals aiming for quick visibility and indexing</li>
            <li>Researchers resubmitting after prior rejections</li>
          </ul>
        </section>

        <section>
          <h2>Our Commitment: Time-Efficient, High-Impact Publication Support</h2>
          <p>We understand that time is not a luxury — it’s often a requirement. That’s why we commit to helping you:</p>
          <ul>
            <li>Plan your publishing schedule strategically</li>
            <li>Eliminate bottlenecks at each stage</li>
            <li>Stay on track — without compromising on quality or ethics</li>
          </ul>
          <p>Your research deserves the spotlight. Let’s help you reach it faster.</p>
        </section>

        <section>
          <h2>Get Started with Fast-Track Publication Support</h2>
          <p>
            Whether you're just beginning your manuscript or responding to reviewers, our publication specialists are ready to accelerate your journey.
          </p>
          <p>
            <strong>Contact us today to request a custom timeline plan or quote for your SCI journal submission.</strong>
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="SCIPublishingTimelines-right">
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
        </ul>

        <h3>Keywords</h3>
        <div className="SCIPublishingTimelines-tags">
          <span>SCI Publication Process</span>
          <span>SCI publication workflow</span>
          <span>Steps to publish in SCI journals</span>
          <span>SCI journal submission to acceptance timeline</span>
          <span>How SCI publication works</span>
          <span>SCI Paper Publishing Time</span>
          <span>How long does SCI publication take</span>
          <span>Average review time in SCI journals</span>
          <span>SCI paper review duration</span>
          <span>Timeline for SCI journal acceptance</span>
          <span>Fast-Track SCI Publication Service</span>
          <span>Accelerated SCI journal submission</span>
          <span>Fast-track research paper publishing</span>
          <span>Urgent SCI publication support</span>
          <span>Quick publication in SCI-indexed journals</span>
        </div>
      </div>
    </div>
  );
};

export default SCIPublishingTimelines;
