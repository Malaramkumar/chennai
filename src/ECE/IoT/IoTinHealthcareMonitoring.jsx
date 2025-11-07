import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the IoT in Healthcare Monitoring Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s IoT in Healthcare Monitoring Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in wearable sensors, real-time patient monitoring, predictive analytics, and telemedicine using IoT devices, cloud platforms, AI/ML, and edge computing."
  },
  {
    question: "What types of IoT in Healthcare Monitoring Systems projects are supported?",
    answer: "We support B.Tech projects (basic vital monitoring, wearable sensors), M.Tech projects (AI-driven analytics, cloud-edge integration), and Ph.D. projects (predictive diagnostics, secure telemedicine frameworks) for applications in patient monitoring, chronic disease management, and smart hospitals."
  },
  {
    question: "Which technologies are used in IoT in Healthcare Monitoring Systems project development?",
    answer: "Our stack includes Arduino, ESP32, MQTT/HTTP protocols, AWS IoT, Azure IoT, Python (TensorFlow, PyTorch), wearable sensors, edge/fog computing, and mobile/web dashboards for real-time monitoring and secure data management."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like AI-powered patient monitoring, secure IoT platforms, and edge-enabled healthcare systems, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware-software integration, wearable sensor deployment, AI/cloud implementation, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEIoTHealthcareMonitoringProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>IoT Healthcare Projects</li>
              <li>IEEE IoT Healthcare 2023–2025</li>
              <li>Smart Health Monitoring</li>
              <li>Wearable IoT Devices</li>
              <li>Predictive Health Analytics</li>
              <li>Telemedicine IoT</li>
              <li>Edge IoT in Healthcare</li>
              <li>Cloud-Based Health Monitoring</li>
              <li>AI-Driven Patient Monitoring</li>
              <li>Narpavi Research Institute Healthcare IoT</li>
              <li>Remote Patient Monitoring Projects</li>
              <li>Smart Hospital IoT Solutions</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>IoT in Healthcare Monitoring Systems – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the IoT in Healthcare Monitoring Systems – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop innovative, IEEE-aligned (2023–2025) solutions in wearable sensors, real-time patient monitoring, predictive analytics, and telemedicine using IoT devices, cloud platforms, and AI algorithms.
              </p>
              <p>
                With expertise in Arduino, ESP32, MQTT/HTTP, AWS IoT, Azure IoT, and AI/ML frameworks, we deliver cutting-edge healthcare IoT systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech IoT in Healthcare Monitoring Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on basic healthcare monitoring systems using wearable sensors, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Wearable sensors for heart rate, temperature, or blood oxygen</li>
                <li>Microcontroller-based systems using Arduino or ESP32</li>
                <li>Basic cloud integration for real-time data monitoring</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IoT deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IoT in Healthcare Monitoring Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced healthcare IoT systems with AI-driven analytics and cloud-edge integration.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Anomaly detection in vital signs using AI/ML</li>
                <li>Patient alert systems with cloud-edge integration</li>
                <li>Security protocols for sensitive health data</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IoT solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. IoT in Healthcare Monitoring Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in predictive diagnostics and secure telemedicine frameworks.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>AI-assisted monitoring for predictive diagnostics</li>
                <li>Secure telemedicine frameworks with IoT</li>
                <li>Advanced architectures for cloud-edge integration</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for healthcare IoT</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IoT in Healthcare Monitoring Technologies vs. Industry Applications</h2>
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
                      <td>Wearable Sensors & IoT Devices</td>
                      <td>Patient Vital Monitoring</td>
                      <td>Continuous, non-invasive health tracking</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, ESP32, Sensor modules</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>MQTT & HTTP Protocols</td>
                      <td>Real-Time Health Data Transfer</td>
                      <td>Reliable low-latency communication</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Mosquitto, HTTP libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Cloud Platforms (AWS, Azure IoT)</td>
                      <td>Remote Patient Data Management</td>
                      <td>Scalable storage and secure access</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IoT, Azure IoT Hub</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI & ML Algorithms</td>
                      <td>Predictive Health Analytics</td>
                      <td>Early detection of abnormalities and risk factors</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python (TensorFlow, PyTorch)</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Edge Computing & Fog Nodes</td>
                      <td>Local Processing for Critical Alerts</td>
                      <td>Low latency response for urgent healthcare events</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>EdgeX Foundry, Node-RED</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Mobile & Web Dashboards</td>
                      <td>Healthcare Management Interfaces</td>
                      <td>User-friendly visualization and patient control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>React Native, Node.js</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned IoT in Healthcare Monitoring Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Powered IoT System for Real-Time Patient Vital Monitoring (2023)</li>
                <li>Secure Cloud-Integrated IoT Platform for Remote Healthcare (2023)</li>
                <li>Edge-Enabled IoT for Predictive Hospital Monitoring and Alerts (2024)</li>
                <li>IoT-Based Wearable Device Network for Chronic Disease Management (2024)</li>
                <li>Multi-Sensor IoT Framework for Intensive Care Units (2025)</li>
                <li>AI-Assisted Telemedicine Platform Using IoT and Edge Computing (2025)</li>
                <li>Predictive Analytics of Patient Data Using Fog-Enabled IoT (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, an Indian-based global center, supports IoT in Healthcare Monitoring Systems projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                The institute provides full hardware-software integration, wearable sensor deployment, AI and cloud guidance, and IEEE-compliant project documentation. Each project ensures practical usability, academic excellence, and industrial relevance.
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
              <li><a href="/biomedical-signal-processing-project-development">Biomedical Signal Processing Project Development</a></li>
              <li><a href="/iot-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
              <li><a href="/machine-learning-embedded-platforms-project-development">Machine Learning in Embedded Platforms Project Development</a></li>
              <li><a href="/embedded-system-security-cryptography-project-development">Embedded System Security and Cryptography Project Development</a></li>
              <li><a href="/ai-driven-signal-enhancement-project-development">AI-Driven Signal Enhancement Techniques Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEIoTHealthcareMonitoringProjectDevelopmentCenter;