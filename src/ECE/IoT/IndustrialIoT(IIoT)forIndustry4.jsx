import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Industrial IoT (IIoT) for Industry 4.0 Project Development Center offer?",
    answer: "Narpavi Research Institute’s Industrial IoT (IIoT) for Industry 4.0 Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in smart manufacturing, predictive maintenance, industrial automation, and real-time analytics using OPC UA, MQTT, edge computing, AI/ML, and cloud platforms."
  },
  {
    question: "What types of IIoT for Industry 4.0 projects are supported?",
    answer: "We support B.Tech projects (sensor-actuator interfacing, basic analytics), M.Tech projects (real-time analytics, predictive maintenance), and Ph.D. projects (AI-driven smart factories, secure cloud-edge systems) for applications in manufacturing, robotics, and energy optimization."
  },
  {
    question: "Which technologies are used in IIoT for Industry 4.0 project development?",
    answer: "Our stack includes Arduino, ESP32, OPC UA, MQTT, AWS IoT, Azure IoT, Python (TensorFlow, PyTorch), PLC/SCADA, and edge/fog computing platforms for industrial automation, analytics, and secure communication."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like AI-driven predictive maintenance, secure IIoT communication, and edge computing, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware-software integration, edge-cloud deployment, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEIndustrialIoTIndustry4ProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Industrial IoT Projects</li>
              <li>IIoT Industry 4.0 2023–2025</li>
              <li>Smart Factory IoT</li>
              <li>Predictive Maintenance IIoT</li>
              <li>Edge Computing for Industry</li>
              <li>Cloud-Integrated IIoT</li>
              <li>AI Industrial Automation</li>
              <li>IEEE IIoT Projects</li>
              <li>Narpavi Research Institute IIoT</li>
              <li>Multi-Sensor Industrial IoT</li>
              <li>Real-Time IoT Analytics</li>
              <li>Fog Computing for Industry 4.0</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Industrial IoT (IIoT) for Industry 4.0 – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Industrial IoT (IIoT) for Industry 4.0 – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop innovative, IEEE-aligned (2023–2025) solutions in smart manufacturing, predictive maintenance, industrial automation, and real-time analytics using OPC UA, MQTT, edge computing, and AI/ML.
              </p>
              <p>
                With expertise in Arduino, ESP32, PLC/SCADA, cloud platforms (AWS IoT, Azure IoT), and AI frameworks, we deliver robust IIoT systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Industrial IoT (IIoT) for Industry 4.0 Project Development</h2>
              <p>
                For undergraduate students, our center focuses on small-scale industrial simulations and sensor-actuator interfacing, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Sensor-actuator interfacing using Arduino or ESP32</li>
                <li>Basic real-time analytics with MQTT or HTTP protocols</li>
                <li>Data visualization through dashboards</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IIoT deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Industrial IoT (IIoT) for Industry 4.0 Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced IIoT systems with real-time analytics and predictive maintenance.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Multi-sensor networks for industrial automation</li>
                <li>Edge computing for real-time data processing</li>
                <li>AI-based anomaly detection and predictive maintenance</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IIoT solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Industrial IoT (IIoT) for Industry 4.0 Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in AI-driven smart factories and secure IIoT systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>AI-driven smart factory frameworks</li>
                <li>Secure cloud-edge integration with blockchain</li>
                <li>Real-time predictive maintenance models</li>
                <li>Distributed system deployment for Industry 4.0</li>
                <li>Publication support for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IIoT Technologies vs. Industry Applications</h2>
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
                      <td>OPC UA & MQTT Protocols</td>
                      <td>Industrial Machine Communication</td>
                      <td>Reliable and standardized data exchange</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Mosquitto, OPC UA libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Edge Computing & Fog Nodes</td>
                      <td>Real-Time Industrial Analytics</td>
                      <td>Low-latency decision making, high-speed processing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>EdgeX Foundry, Node-RED</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>PLC & SCADA Integration</td>
                      <td>Factory Automation</td>
                      <td>Seamless control of industrial processes</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Siemens TIA Portal, Ignition SCADA</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI & ML for Predictive Maintenance</td>
                      <td>Manufacturing Equipment Monitoring</td>
                      <td>Predict faults, reduce downtime</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python (TensorFlow, PyTorch)</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Industrial Sensors & Actuators</td>
                      <td>Robotics, Conveyor Systems</td>
                      <td>Precise control and operational efficiency</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Sensor modules, actuators</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Cloud IIoT Platforms (AWS, Azure IoT)</td>
                      <td>Remote Monitoring, Big Data Analytics</td>
                      <td>Scalable storage and global monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IoT, Azure IoT Hub</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned IIoT Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Predictive Maintenance System for Smart Manufacturing Using IIoT (2023)</li>
                <li>Real-Time Edge Computing Framework for Industrial IoT Monitoring (2023)</li>
                <li>Secure IIoT Communication Architecture Using Blockchain in Industry 4.0 (2024)</li>
                <li>Multi-Sensor IIoT Network for Industrial Automation and Fault Detection (2024)</li>
                <li>Cloud-Integrated IIoT Platform for Energy Optimization in Factories (2025)</li>
                <li>AI-Driven Digital Twin Framework for Industrial IoT Systems (2025)</li>
                <li>Real-Time Process Control in Smart Manufacturing Using Fog-Enabled IIoT (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, an Indian-based global center, supports Industrial IoT (IIoT) for Industry 4.0 projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                The institute provides hardware-software integration, edge-cloud computing support, AI-based analytics guidance, and IEEE-compliant documentation. Every project is designed for academic excellence, industrial relevance, and practical implementation.
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
              <li><a href="/industrial-automation-project-development">Industrial Automation Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEIndustrialIoTIndustry4ProjectDevelopmentCenter;