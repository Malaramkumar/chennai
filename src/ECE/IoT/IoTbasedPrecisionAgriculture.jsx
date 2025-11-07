import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the IoT-based Precision Agriculture Project Development Center offer?",
    answer: "Narpavi Research Institute’s IoT-based Precision Agriculture Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in smart farming, crop monitoring, irrigation optimization, and predictive analytics using IoT sensors, drones, edge computing, and AI/ML."
  },
  {
    question: "What types of IoT-based Precision Agriculture projects are supported?",
    answer: "We support B.Tech projects (sensor-based crop monitoring), M.Tech projects (drone imaging, predictive analytics), and Ph.D. projects (AI-enhanced farm optimization, autonomous drones) for applications in soil monitoring, pest detection, and yield forecasting."
  },
  {
    question: "Which technologies are used in IoT-based Precision Agriculture project development?",
    answer: "Our stack includes Arduino, ESP32, MQTT/CoAP protocols, AWS IoT, Azure IoT, Python (TensorFlow, PyTorch), drones, edge computing platforms, and dashboards for real-time farm monitoring and analytics."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like AI-driven irrigation, drone-based crop monitoring, and edge-enabled farm analytics, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, sensor-drone integration, AI/cloud implementation, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEIoTPrecisionAgricultureProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>IoT Precision Agriculture Projects</li>
              <li>Smart Farming IoT 2023–2025</li>
              <li>AI in Agriculture</li>
              <li>Drone-Based Crop Monitoring</li>
              <li>Edge IoT for Agriculture</li>
              <li>Cloud-Integrated Smart Farm</li>
              <li>Predictive Farming Analytics</li>
              <li>IEEE Agriculture IoT Projects</li>
              <li>Narpavi Research Institute Smart Farming</li>
              <li>IoT Crop Monitoring System</li>
              <li>Precision Agriculture Sensors</li>
              <li>IoT-Based Farm Optimization</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>IoT-based Precision Agriculture – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the IoT-based Precision Agriculture – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop innovative, IEEE-aligned (2023–2025) solutions in smart farming, crop monitoring, irrigation optimization, and predictive analytics using IoT sensors, drones, edge computing, and AI.
              </p>
              <p>
                With expertise in Arduino, ESP32, MQTT/CoAP, AWS IoT, Azure IoT, and AI/ML frameworks, we deliver cutting-edge precision agriculture systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech IoT-based Precision Agriculture Project Development</h2>
              <p>
                For undergraduate students, our center focuses on basic precision agriculture systems using sensor-based monitoring, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Sensor-based monitoring of soil moisture, temperature, or humidity</li>
                <li>Microcontroller programming using Arduino or ESP32</li>
                <li>Dashboard visualization for real-time data</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IoT deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IoT-based Precision Agriculture Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced smart farming solutions with drone imaging and predictive analytics.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Drone-based imaging for crop health assessment</li>
                <li>Edge computing for real-time data analytics</li>
                <li>AI-driven anomaly detection and irrigation optimization</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IoT solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. IoT-based Precision Agriculture Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in AI-enhanced smart farming and autonomous systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>AI-enhanced IoT systems for farm optimization</li>
                <li>Autonomous drone frameworks for crop monitoring</li>
                <li>Multi-sensor integration with edge-cloud architectures</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for precision agriculture</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IoT-based Precision Agriculture Technologies vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT Soil and Environmental Sensors</td>
                      <td>Real-Time Soil & Weather Monitoring</td>
                      <td>Accurate data for irrigation and fertilization</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, ESP32, Sensor modules</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Drone-based Imaging & Data Capture</td>
                      <td>Crop Health Assessment</td>
                      <td>High-resolution mapping and early pest detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>DJI SDK, OpenCV</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>MQTT & CoAP Communication Protocols</td>
                      <td>Field Data Transmission</td>
                      <td>Low-latency, efficient IoT data exchange</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Mosquitto, CoAP libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Edge Computing & Analytics</td>
                      <td>On-Site Decision Making</td>
                      <td>Real-time processing for irrigation and crop control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>EdgeX Foundry, Node-RED</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI & ML for Crop Predictions</td>
                      <td>Yield Forecasting and Disease Detection</td>
                      <td>Predictive modeling for better farm management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python (TensorFlow, PyTorch)</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Cloud Platforms (AWS, Azure IoT)</td>
                      <td>Centralized Farm Data Management</td>
                      <td>Scalable storage and global farm monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IoT, Azure IoT Hub</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned IoT-based Precision Agriculture Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Based Smart Irrigation System with AI-Driven Water Management (2023)</li>
                <li>Drone-Enabled Crop Health Monitoring Using IoT Sensors (2023)</li>
                <li>Edge Computing Framework for Real-Time Precision Agriculture (2024)</li>
                <li>Multi-Sensor IoT Network for Soil Nutrient and Moisture Analysis (2024)</li>
               
                  <td>AI-Powered Predictive Pest and Disease Detection in Smart Farms (2025)</td>
                  <td>Cloud-Integrated IoT Platform for Autonomous Agricultural Monitoring (2025)</td>
                  <td>Energy-Efficient IoT Deployment for Large-Scale Farm Analytics (2025)</td>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, an Indian-based global center, supports IoT-based Precision Agriculture projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                The institute provides sensor integration, drone technology, AI-guided analytics, edge-cloud system support, and IEEE-standard documentation. Each project ensures academic excellence, practical usability, and industry relevance.
              </p>
            </section>

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

          {/* Right: Subpage Links */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/iot-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
              <li><a href="/machine-learning-embedded-platforms-project-development">Machine Learning in Embedded Platforms Project Development</a></li>
              <li><a href="/embedded-system-security-cryptography-project-development">Embedded System Security and Cryptography Project Development</a></li>
              <li><a href="/fpga-system-prototyping-project-development">FPGA-Based System Prototyping Project Development</a></li>
              <li><a href="/signal-processing-project-development">Signal Processing Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEIoTPrecisionAgricultureProjectDevelopmentCenter;