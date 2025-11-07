import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What distinguishes Underwater Wireless Sensor Networks from terrestrial WSNs?",
    answer: "UWSNs require acoustic communication, pressure-tolerant nodes, and adaptive routing to function in harsh underwater environments, unlike terrestrial WSNs that use RF communication."
  },
  {
    question: "What are the key applications of Underwater Wireless Sensor Networks?",
    answer: "Applications include ocean pollution monitoring, tsunami and earthquake alerts, oil and gas pipeline monitoring, naval surveillance, marine biodiversity studies, and underwater robotics."
  },
  {
    question: "What tools and platforms are used for UWSN project development?",
    answer: "Common platforms are Arduino, Raspberry Pi, ESP32, hydrophone sensors, and cloud dashboards for B.Tech projects; advanced simulators like NS3-UAN, Aqua-Sim, MATLAB, OMNeT++ with AI optimization for higher research levels."
  },
  {
    question: "What challenges are unique to UWSNs?",
    answer: "Challenges include sensor fouling and bio-corrosion, deployment difficulties in deep-sea environments, limited bandwidth of acoustic channels, high energy consumption, and secure communication in dynamic waters."
  },
  {
    question: "What support does Narpavi Research Institute provide for UWSN projects?",
    answer: "The institute offers sensor integration, AI-based analysis, secure communication protocol design, project development assistance, and publication support for IEEE transactions."
  }
];

const UWSNProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Underwater Wireless Sensor Network Projects</li>
              <li>UWSN IEEE Projects</li>
              <li>Acoustic Communication in UWSN</li>
              <li>Tsunami Detection UWSN</li>
              <li>Ocean Monitoring Sensor Networks</li>
              <li>Marine Biodiversity Tracking with UWSN</li>
              <li>IoT-Enabled UWSN Projects</li>
              <li>Blockchain in Underwater WSN</li>
              <li>AUV-Integrated UWSN Systems</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Underwater Wireless Sensor Networks (UWSN) – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> offers specialized IEEE-aligned (2023–2025) project development for B.Tech, M.Tech, and Ph.D. scholars in Underwater Wireless Sensor Networks, focusing on marine research, environmental monitoring, and defense applications.
              </p>
              <p>
                UWSNs require sophisticated technologies like acoustic communication and AI-driven optimization to operate effectively in challenging underwater environments marked by pressure, corrosion, and limited bandwidth.
              </p>
            </section>
            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – UWSN Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>UWSN Role</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ocean Pollution Monitoring</td>
                      <td>Deploying chemical/biological underwater sensors</td>
                      <td>Real-time water quality assessment</td>
                      <td>Sensor fouling and bio-corrosion</td>
                    </tr>
                    <tr>
                      <td>Tsunami &amp; Earthquake Alerts</td>
                      <td>Ocean pressure & seismic sensors</td>
                      <td>Early warnings, coastal safety</td>
                      <td>Deep-sea deployment challenges</td>
                    </tr>
                    <tr>
                      <td>Oil &amp; Gas Pipeline Monitoring</td>
                      <td>Acoustic sensor networks</td>
                      <td>Prevent leakage, ensure structural safety</td>
                      <td>Long-term durability</td>
                    </tr>
                    <tr>
                      <td>Naval Surveillance</td>
                      <td>UWSN for target detection</td>
                      <td>Enhances maritime defense</td>
                      <td>Secure communication in dynamic waters</td>
                    </tr>
                    <tr>
                      <td>Marine Biodiversity Study</td>
                      <td>Sensor-based tracking of aquatic species</td>
                      <td>Supports ecosystem preservation</td>
                      <td>Limited bandwidth in acoustic channels</td>
                    </tr>
                    <tr>
                      <td>Underwater Robotics</td>
                      <td>WSN-enabled Autonomous Underwater Vehicles (AUVs)</td>
                      <td>Coordinated exploration & mapping</td>
                      <td>High energy consumption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Focus on underwater sensing and monitoring like IoT-integrated water quality and fish habitat monitoring using Arduino, Raspberry Pi, ESP32, hydrophone sensors, and cloud dashboards.
              </p>
            </section>
            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Emphasis on energy-efficient routing, secure communication, and hybrid acoustic-optical communication using simulators like NS3-UAN, Aqua-Sim, MATLAB, OMNeT++, including AI optimization.
              </p>
            </section>
            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Advanced research includes blockchain-enabled secure communication, AI-driven AUV collaboration, digital twin modeling, and 5G/6G-assisted smart maritime IoT, targeting IEEE Transactions publications.
              </p>
            </section>
            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Low-Cost IoT-Based UWSN for Water Quality Monitoring (2023)</li>
                <li>Energy-Efficient Routing in UWSN for Tsunami Prediction (2023)</li>
                <li>Hybrid Acoustic–Optical Communication in UWSN (2024)</li>
                <li>Secure Blockchain-Enabled UWSN for Offshore Monitoring (2024)</li>
                <li>AI-Assisted AUV and UWSN Integration for Marine Biodiversity Study (2024)</li>
                <li>Fog-Enabled UWSN for Oil and Gas Pipeline Monitoring (2025)</li>
                <li>Digital Twin Modeling of Underwater Ecosystems Using UWSN (2025)</li>
              </ul>
            </section>
            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute specializes in UWSN project development, sensor integration, AI analysis, secure protocols, and IEEE publication support for academic and industrial impact.
              </p>
            </section>
            {/* FAQs */}
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
          {/* Right: Related Services */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/energy-efficient-routing-wsn-project-development">Energy-Efficient Routing in WSN Project Development</a></li>
              <li><a href="/adaptive-nonlinear-control-systems-project-development">Adaptive and Nonlinear Control Systems Project Development</a></li>
              <li><a href="/secure-iot-architectures-project-development">Secure IoT Architectures Project Development</a></li>
              <li><a href="/edge-fog-computing-iot-project-development">Edge and Fog Computing in IoT Project Development</a></li>
              <li><a href="/control-in-cyber-physical-systems-project-development">Control in Cyber-Physical Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UWSNProjectDevelopmentCenter;
