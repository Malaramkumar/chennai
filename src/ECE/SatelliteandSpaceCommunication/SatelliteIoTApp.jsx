import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What are Satellite IoT (Sat-IoT) Applications?",
    answer: "Sat-IoT combines satellites in LEO, MEO, and GEO orbits with IoT networks to provide global, uninterrupted connectivity, especially in remote and disaster-prone areas."
  },
  {
    question: "What projects are pursued by B.Tech students in Sat-IoT?",
    answer: "Projects include IoT sensors with satellite uplink simulations, asset tracking via LEO satellites, weather monitoring systems, and energy-efficient IoT device design using Arduino, Raspberry Pi, MATLAB, and ThingsBoard."
  },
  {
    question: "What advanced designs do M.Tech projects focus on?",
    answer: "M.Tech research involves LEO-based Sat-IoT systems for remote areas, AI-enabled smart agriculture, disaster management via satellite networks, and satellite-enabled vehicular IoT using MATLAB, NS3, Python, and LoRaWAN."
  },
  {
    question: "What research areas are emphasized in Ph.D. Sat-IoT projects?",
    answer: "Ph.D. research includes security protocols, energy-aware architectures, machine learning optimizations, and hybrid terrestrial-satellite network interoperability with IEEE journal publications."
  },
  {
    question: "Which tools and platforms support Sat-IoT projects?",
    answer: "Tools such as NS3, MATLAB, Python, STK, TensorFlow, LoRaWAN, MQTT, and ThingsBoard are primarily used for simulation, AI, and network deployment."
  }
];

const SatelliteIoTApplicationsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Satellite IoT Projects</li>
              <li>Sat-IoT Applications</li>
              <li>LEO IoT Communication</li>
              <li>Smart Agriculture with Sat-IoT</li>
              <li>Disaster Management IoT via Satellites</li>
              <li>Hybrid Satellite-Terrestrial IoT</li>
              <li>AI in Satellite IoT</li>
              <li>Secure Sat-IoT Systems</li>
              <li>IEEE Satellite IoT Research</li>
              <li>Narpavi Research Institute IoT Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Satellite IoT (Sat-IoT) Applications – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> offers expert guidance and project support in Satellite IoT systems, focusing on global IoT connectivity, hybrid networks, AI-powered applications, and energy-efficient designs aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Students and researchers explore applications from smart agriculture and logistics to disaster management and military surveillance using Sat-IoT technologies.
              </p>
            </section>

            {/* Comparative Technology–Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LEO Sat-IoT</td>
                      <td>Low latency IoT coverage</td>
                      <td>Smart agriculture, logistics</td>
                      <td>NS3, MATLAB</td>
                    </tr>
                    <tr>
                      <td>MEO/GEO Sat-IoT</td>
                      <td>Wide coverage IoT connectivity</td>
                      <td>Military, maritime</td>
                      <td>STK, Python</td>
                    </tr>
                    <tr>
                      <td>Sat-IoT Security</td>
                      <td>Cryptographic protocols</td>
                      <td>Critical IoT networks</td>
                      <td>MATLAB, NS3</td>
                    </tr>
                    <tr>
                      <td>AI in Sat-IoT</td>
                      <td>Predictive analytics & fault detection</td>
                      <td>Smart cities, disaster management</td>
                      <td>TensorFlow, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Hybrid Networks</td>
                      <td>Sat-IoT + terrestrial IoT</td>
                      <td>Universal IoT access</td>
                      <td>LoRaWAN, MQTT</td>
                    </tr>
                    <tr>
                      <td>Energy Optimization</td>
                      <td>Battery-efficient IoT nodes</td>
                      <td>Remote environmental monitoring</td>
                      <td>Python, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Satellite IoT</h2>
              <p>
                Focus on IoT sensors with satellite uplink simulation, asset tracking with LEO satellites, weather monitoring via satellite, and energy-efficient IoT device design using Arduino, Raspberry Pi, MATLAB, and ThingsBoard.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Satellite IoT</h2>
              <p>
                In-depth design of LEO-based Sat-IoT systems, AI-driven smart agriculture, disaster management systems, and satellite-enabled vehicular IoT using MATLAB, NS3, Python, and LoRaWAN.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Satellite IoT</h2>
              <p>
                Research on security protocols, energy-aware architectures, ML-based Sat-IoT optimization, and interoperability of hybrid terrestrial-satellite IoT networks with publications in IEEE journals.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>LEO Satellite IoT for Global Asset Tracking (2023)</li>
                <li>Smart Agriculture Monitoring with Sat-IoT and AI (2023)</li>
                <li>Secure Satellite IoT Architectures for Disaster Recovery (2024)</li>
                <li>Hybrid Satellite-Terrestrial IoT Networks for Global Coverage (2024)</li>
                <li>Machine Learning for Satellite-Enabled IoT Optimization (2025)</li>
                <li>Energy-Aware Sat-IoT Architectures for Smart Cities (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a leader in Satellite IoT project support, driving innovation in global connectivity and AI-enabled applications for next-generation IoT systems aligned with IEEE standards.
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
                    "mainEntity": faqs.map(faq => ({
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

export default SatelliteIoTApplicationsProject;
