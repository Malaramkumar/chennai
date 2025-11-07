 import React from "react";
import "./EngineeringTopicsForScopus.scss";
import Side from "../Sidebar";

const EngineeringTopicsForScopus = () => {
  return (
    <div className="engscopus-layout">
      {/* Left Sidebar */}
      <div className="engscopus-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="engscopus-main-content">
        <h1>2. Engineering Research Topics for Scopus Journal Papers and Articles</h1>
        <p>
          Choosing the right topic is the first step toward publishing in a Scopus-indexed engineering journal. At <strong>Narpavi Research Institute</strong>,
          we help researchers select innovative and high-impact topics that match the scope and standards of leading Scopus journals.
        </p>

        <h2>Trending Engineering Topics for Scopus Publications</h2>
        <p>Explore promising research areas currently in demand across various engineering disciplines:</p>

        <div className="engscopus-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Engineering Branch</th>
                <th>Sample Research Topics</th>
                <th>Key Focus Areas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mechanical Engineering</td>
                <td>Lightweight materials, renewable energy, robotics, heat transfer</td>
                <td>Material innovation, energy efficiency, automation</td>
              </tr>
              <tr>
                <td>Electrical & Electronics Engineering</td>
                <td>Smart grids, IoT, signal processing, power electronics</td>
                <td>Sustainable power, connectivity, communication</td>
              </tr>
              <tr>
                <td>Civil Engineering</td>
                <td>Green building, seismic design, water treatment, transportation</td>
                <td>Sustainability, resilience, infrastructure optimization</td>
              </tr>
              <tr>
                <td>Computer Engineering</td>
                <td>AI & ML applications, cybersecurity, cloud computing, computer vision</td>
                <td>Intelligent systems, data security, distributed computing</td>
              </tr>
              <tr>
                <td>Chemical Engineering</td>
                <td>Process optimization, environmental control, nanotech, biofuels</td>
                <td>Efficiency, sustainability, advanced materials</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Why Focus on These Topics?</h2>
        <p>
          The table below compares key benefits of focusing on these research areas for your Scopus journal paper:
        </p>

        <div className="engscopus-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Mechanical Engineering</th>
                <th>Electrical & Electronics</th>
                <th>Civil Engineering</th>
                <th>Computer Engineering</th>
                <th>Chemical Engineering</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High publication demand</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Alignment with Scopus journals</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Potential for original research</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Availability of quality data</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Broad interdisciplinary scope</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Need Assistance in Finalizing Your Research Topic?</h2>
        <p>
          Our experts will help you choose a topic relevant to your expertise and target journal scope, ensuring strong originality and technical depth.
        </p>
        <p>
          👉 <a href="#contact">Contact us now</a> for personalized topic consultation and start your journey toward Scopus publication!
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="engscopus-right-sidebar">
        <h3>SEO Keywords</h3>
        <ul>
          <li>Engineering Scopus journal topics</li>
          <li>Mechanical engineering Scopus ideas</li>
          <li>Scopus research areas in EEE</li>
          <li>Computer science Scopus papers</li>
          <li>Best Scopus topics 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default EngineeringTopicsForScopus;
