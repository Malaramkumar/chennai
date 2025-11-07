import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What roles do WSNs play in environmental and disaster monitoring?",
    answer: "WSNs enable early detection, real-time monitoring, and management of natural disasters and environmental hazards using sensor data, IoT integration, and AI-based predictive models."
  },
  {
    question: "Which applications benefit from WSN environmental and disaster monitoring?",
    answer: "Key applications include flood monitoring, forest fire detection, earthquake prediction, air quality monitoring, landslide detection, and tsunami warning systems."
  },
  {
    question: "What are the common tools used in project development for WSN disaster monitoring?",
    answer: "Tools include Arduino, ESP32, LoRa modules for sensor deployment, alongside cloud platforms like ThingSpeak, AWS IoT, and Blynk for data integration, as well as NS3, Contiki Cooja, MATLAB, and OMNeT++ for simulation."
  },
  {
    question: "What are the challenges in deploying WSNs for disaster monitoring?",
    answer: "Challenges include sensor durability in harsh environments, network coverage in dense forests, deployment costs, real-time data transmission in remote areas, and underwater sensor resilience."
  },
  {
    question: "How does Narpavi Research Institute support research in this field?",
    answer: "Narpavi Research Institute provides full support in sensor integration, IoT platform connectivity, AI analytics, secure communications, and guidance for IEEE-standard publications."
  }
];

const WSNNvironmentDisasterMonitoringProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Wireless Sensor Network Environmental Monitoring Projects</li>
              <li>Disaster Detection WSN</li>
              <li>Flood Monitoring WSN IoT</li>
              <li>Forest Fire Detection with IoT</li>
              <li>Landslide Detection WSN Projects</li>
              <li>Earthquake Prediction Using WSN</li>
              <li>Tsunami Warning IoT–WSN Projects</li>
              <li>AI-Driven Disaster Management Systems</li>
              <li>IEEE WSN Environmental Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>WSN for Environmental and Disaster Monitoring – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the <em>Excellence in WSN for Environmental and Disaster Monitoring</em>, delivering IEEE-aligned project solutions (2023–2025) for B.Tech, M.Tech, and Ph.D. scholars focused on real-time sensing and AI-powered disaster resilience.
              </p>
              <p>
                Wireless Sensor Networks support early detection, monitoring, and management of natural disasters and environmental hazards via IoT integration and big data analytics. Energy-efficient sensor deployment, adaptive routing, and AI models enhance sustainable disaster response.
              </p>
            </section>
            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – WSN Applications in Environmental & Disaster Monitoring</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>WSN Role</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Flood Monitoring</td>
                      <td>Water level sensors with real-time alerts</td>
                      <td>Early warnings, reduced damage</td>
                      <td>Sensor durability in harsh conditions</td>
                    </tr>
                    <tr>
                      <td>Forest Fire Detection</td>
                      <td>Temperature &amp; smoke sensors with IoT alerts</td>
                      <td>Quick response, saves ecosystems</td>
                      <td>Network coverage in dense forests</td>
                    </tr>
                    <tr>
                      <td>Earthquake Prediction</td>
                      <td>Seismic sensor networks</td>
                      <td>Early prediction, evacuation assistance</td>
                      <td>Accuracy and deployment cost</td>
                    </tr>
                    <tr>
                      <td>Air Quality Monitoring</td>
                      <td>Gas &amp; particulate sensors</td>
                      <td>Pollution control, health awareness</td>
                      <td>Energy-efficient long-term sensing</td>
                    </tr>
                    <tr>
                      <td>Landslide Detection</td>
                      <td>Soil moisture &amp; vibration sensors</td>
                      <td>Preventive evacuation, infrastructure safety</td>
                      <td>Real-time data transmission in remote areas</td>
                    </tr>
                    <tr>
                      <td>Tsunami Warning Systems</td>
                      <td>Oceanic pressure sensor nodes</td>
                      <td>Coastal safety, global warning networks</td>
                      <td>Harsh underwater environment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Focus on real-time environmental sensing with IoT. Example projects include flood monitoring using WSN/IoT and air quality monitoring. Tools: Arduino, ESP32, LoRa modules, and cloud platforms like ThingSpeak, AWS IoT, Blynk.
              </p>
            </section>
            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Advanced projects on energy-efficient protocols, fog-enabled landslide monitoring, and hybrid IoT–WSN disaster management. Simulators: MATLAB, NS3, Contiki Cooja, OMNeT++, with field deployment models.
              </p>
            </section>
            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Cutting-edge AI predictive disaster models, blockchain-secured WSN alerts, UAV-supported monitoring, and digital twins providing resilient, scalable IEEE-standard publication research.
              </p>
            </section>
            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled WSN for Real-Time Flood Monitoring (2023)</li>
                <li>Energy-Efficient Forest Fire Detection Using WSN (2023)</li>
                <li>Hybrid IoT–WSN Framework for Air Quality Monitoring (2024)</li>
                <li>Fog-Assisted Landslide Detection System Using WSN (2024)</li>
                <li>UAV-Integrated WSN for Disaster Management Applications (2024)</li>
                <li>Blockchain-Secured WSN for Earthquake Early Warning (2025)</li>
                <li>AI-Powered Digital Twin for Tsunami Prediction Using WSN (2025)</li>
              </ul>
            </section>
            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers advanced research support in WSN for environmental and disaster monitoring, covering sensor integration, cloud platforms, AI analytics, secure communication, and IEEE publication support.
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

export default WSNNvironmentDisasterMonitoringProject;
