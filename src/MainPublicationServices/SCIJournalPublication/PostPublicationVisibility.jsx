
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostPublicationVisibility.scss";

const PostPublicationVisibility = () => {
  const navigate = useNavigate();

  return (
    <div className="PostPublicationVisibility-container">
      {/* Left Side - Empty */}
      <div className="PostPublicationVisibility-left"></div>

      {/* Main Section */}
      <div className="PostPublicationVisibility-main">
        <h1>Post-Publication Visibility & Indexing – How We Support You</h1>
        <p>Your Paper Is Published — Now Let the World Discover It</p>
        <p>
          Publishing your research in a Science Citation Indexed (SCI) journal is a milestone. But what happens next determines how widely your work is read, cited, and recognized.
        </p>
        <p>
          Many researchers underestimate the importance of post-publication visibility and indexing. A published paper that isn’t properly indexed, cited, or linked to the correct author profile can miss its academic impact potential.
        </p>
        <p>
          At Narpavi Research Institute, we ensure your paper receives the global visibility it deserves — on all major platforms — with proper indexing, profile linking, and citation optimization strategies.
        </p>

        <section>
          <h2>Why Post-Publication Support Matters</h2>
          <p>Just being published doesn’t mean your research will be found.</p>
          <p>Without proper post-publication steps, you risk:</p>
          <ul>
            <li>Incomplete or delayed indexing on Web of Science, Scopus, or Google Scholar</li>
            <li>Missing DOI linking to your ORCID or institutional profile</li>
            <li>Broken citations or incorrect metadata</li>
            <li>Reduced citation count due to poor discoverability</li>
          </ul>
          <p>That’s where our expertise makes the difference.</p>
        </section>

        <section>
          <h2>Our Post-Publication Visibility Services</h2>
          <ol>
            <li>
              <strong>Indexing Status Tracking</strong><br />
              We monitor your paper's appearance on:
              <ul>
                <li>Web of Science Core Collection</li>
                <li>Scopus</li>
                <li>Google Scholar</li>
                <li>PubMed (if applicable)</li>
                <li>CrossRef</li>
              </ul>
              We also ensure that your paper is linked correctly with its journal impact factor, volume, and issue number.
            </li>
            <li>
              <strong>DOI Linking & ORCID Integration</strong><br />
              We help you link your DOI to your ORCID ID, Google Scholar, ResearchGate, and Scopus Author ID. This ensures proper attribution, avoids duplicate profiles, and increases research visibility.
            </li>
            <li>
              <strong>Metadata Correction & Optimization</strong><br />
              Incorrect metadata can block indexing or citation counts. We fix:
              <ul>
                <li>Author names and affiliations</li>
                <li>Corresponding author email & institution</li>
                <li>Funding and ethics declarations</li>
                <li>Title/abstract formatting and keyword integration</li>
              </ul>
            </li>
            <li>
              <strong>Citation Optimization</strong><br />
              We provide a custom citation strategy, including:
              <ul>
                <li>Suggested platforms for sharing (LinkedIn, ResearchGate, Academia.edu)</li>
                <li>Citation alerts and tools</li>
                <li>High-visibility academic directories</li>
                <li>Google Scholar profile setup & maintenance</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>Comparative Table: Post-Publication Visibility – With vs Without Our Support</h2>
          <table className="PostPublicationVisibility-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Without Support</th>
                <th>With Our Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indexed on time in Scopus/Web of Science</td>
                <td>⚠️ May be delayed</td>
                <td>✅ Actively monitored</td>
              </tr>
              <tr>
                <td>Correct metadata on academic databases</td>
                <td>❌ Risk of errors</td>
                <td>✅ Fully verified</td>
              </tr>
              <tr>
                <td>DOI linking to ORCID and author IDs</td>
                <td>❌ Often missing</td>
                <td>✅ Automatically synced</td>
              </tr>
              <tr>
                <td>Google Scholar citation tracking</td>
                <td>⚠️ Unreliable</td>
                <td>✅ Real-time setup</td>
              </tr>
              <tr>
                <td>Visibility across research platforms</td>
                <td>⚠️ Limited</td>
                <td>✅ Expanded & targeted</td>
              </tr>
              <tr>
                <td>Profile consistency (author name, institution)</td>
                <td>⚠️ Inconsistent</td>
                <td>✅ Unified</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Who Should Use Post-Publication Support?</h2>
          <ul>
            <li>Authors seeking career advancement, promotion, or grant visibility</li>
            <li>Researchers aiming to build citation history</li>
            <li>First-time SCI authors unsure about post-publication workflow</li>
            <li>Collaborators needing multi-author profile management</li>
            <li>Anyone who wants maximum impact for their published work</li>
          </ul>
        </section>

        <section>
          <h2>We Help You Stay Visible – Beyond Acceptance</h2>
          <p>Your journey doesn’t end at publication. Our expert team ensures that your work:</p>
          <ul>
            <li>Is indexed correctly and promptly</li>
            <li>Appears under the correct author profile(s)</li>
            <li>Gains visibility on platforms that drive citations</li>
            <li>Contributes effectively to your academic and institutional metrics</li>
          </ul>
        </section>

        <section>
          <h2>Ready to Boost Your Research Impact?</h2>
          <p>
            Let us help you go beyond publication and into recognition. With our post-publication indexing and visibility support, your research will be discovered, cited, and celebrated.
          </p>
          <p>
            <strong>Contact us now for a personalized visibility and indexing enhancement plan.</strong>
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="PostPublicationVisibility-right">
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
            <button onClick={() => navigate("/publication-services/open-access-vs-subscription")}>
              Open Access & Subscription SCI Journals
            </button>
          </li>
        </ul>

        <h3>Keywords</h3>
        <div className="PostPublicationVisibility-tags">
          <span>SCI Indexing Support</span>
          <span>Help with Web of Science indexing</span>
          <span>Scopus indexing services</span>
          <span>How to check SCI indexing status</span>
          <span>Post-publishing indexing solutions</span>
          <span>Research Paper Visibility</span>
          <span>Increase research citations</span>
          <span>Improve academic visibility</span>
          <span>Share published papers effectively</span>
          <span>Visibility services for published authors</span>
          <span>Web of Science Indexing Help</span>
          <span>Web of Science support for authors</span>
          <span>Add paper to Web of Science</span>
          <span>ORCID and DOI linking service</span>
          <span>Indexing management for SCI journals</span>
        </div>
      </div>
    </div>
  );
};

export default PostPublicationVisibility;
