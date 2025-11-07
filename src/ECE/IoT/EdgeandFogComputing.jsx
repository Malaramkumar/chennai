import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Edge and Fog Computing in IoT Project Development Center offer?",
    answer: "Narpavi Research Institute’s Edge and Fog Computing in IoT Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in low-latency IoT systems, distributed analytics, and edge-based AI for applications in smart manufacturing, healthcare, and smart cities."
  },
  {
    question: "What types of Edge and Fog Computing in IoT projects are supported?",
    answer: "We support B.Tech projects (real-time sensor data processing), M.Tech projects (edge analytics, cloud-edge integration), and Ph.D. projects (AI-enhanced distributed architectures, IoT security) for applications in industrial IoT, healthcare monitoring, and smart grids."
  },
  {
    question: "Which technologies are used in Edge and Fog Computing in IoT project development?",
    answer: "Our stack includes Arduino, ESP32, MQTT/CoAP protocols, OpenFog, AWS IoT, Azure IoT, Python (TensorFlow, PyTorch), edge nodes, and containerization tools like Docker for low-latency IoT systems and distributed analytics."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like edge-enabled IoT platforms, fog computing for smart cities, and AI-enhanced edge analytics, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware-software integration, edge-cloud deployment, AI analytics implementation, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEEdgeFogComputingIoTProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Edge Computing IoT Projects</li>
              <li>Fog Computing IoT 2023–2025</li>
              <li>Real-Time IoT Analytics</li>
              <li>Distributed IoT Systems</li>
              <li>Smart City IoT Edge</li>
              <li>Healthcare IoT Edge Computing</li>
              <li>Cloud-Edge IoT Hybrid</li>
              <li>AI at Edge IoT</li>
              <li>IEEE Edge IoT Projects</li>
              <li>Narpavi Research Institute IoT Edge Solutions</li>
              <li>Predictive Maintenance IoT</li>
              <li>Low-Latency IoT Applications</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Edge and Fog Computing in IoT – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Edge and Fog Computing in IoT – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop innovative, IEEE-aligned (2023–2025) solutions in low-latency IoT systems, distributed analytics, and AI-enhanced edge computing for smart manufacturing, healthcare, and smart cities.
              </p>
              <p>
                With expertise in edge nodes, MQTT/CoAP, OpenFog, AWS IoT, Azure IoT, and AI/ML frameworks, we deliver high-performance IoT systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Edge and Fog Computing in IoT Project Development</h2>
              <p>
                For undergraduate students, our center focuses on entry-level edge computing IoT systems, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Real-time sensor data collection using microcontrollers</li>
                <li>Local processing with lightweight analytics algorithms</li>
                <li>Prototype development for IoT applications</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IoT deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Edge and Fog Computing in IoT Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced IoT systems with edge and fog computing for real-time applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Edge analytics for real-time healthcare or industrial monitoring</li>
                <li>Hybrid cloud-edge architectures for scalability</li>
                <li>AI-driven predictive maintenance and energy optimization</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IoT solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Edge and Fog Computing in IoT Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in low-latency IoT architectures and AI-enhanced analytics.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Low-latency distributed architectures for IoT</li>
                <li>AI-enhanced analytics at the edge</li>
                <li>Secure edge computing frameworks for IoT</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for distributed IoT systems</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Edge and Fog Computing in IoT Technologies vs. Industry Applications</h2>
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
                      <td>Edge Computing Nodes</td>
                      <td>Smart Manufacturing, IoT Sensor Networks</td>
                      <td>Low-latency real-time processing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, ESP32, EdgeX Foundry</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Fog Computing Frameworks (OpenFog)</td>
                      <td>Healthcare Monitoring, Smart Cities</td>
                      <td>Distributed analytics with improved reliability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OpenFog, Node-RED</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>MQTT & CoAP Protocols</td>
                      <td>IoT Device Communication</td>
                      <td>Efficient, lightweight, and scalable data transfer</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Mosquitto, CoAP libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI & ML at Edge</td>
                      <td>Predictive Maintenance, Energy Management</td>
                      <td>Real-time anomaly detection without cloud dependency</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python (TensorFlow, PyTorch)</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Cloud-Edge Hybrid Architecture</td>
                      <td>Industrial IoT, Transportation</td>
                      <td>Scalable, secure, and cost-efficient solutions</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IoT, Azure IoT Hub</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Containerization & Microservices</td>
                      <td>Smart Grids, Retail IoT</td>
                      <td>Flexible deployment and easy scaling</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Docker, Kubernetes</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Edge and Fog Computing in IoT Project Titles (2023–2025)</h2>
              <ul>
                <li>Edge-Enabled IoT Platform for Real-Time Industrial Monitoring (2023)</li>
                <li>Fog Computing Architecture for Smart Healthcare IoT Systems (2023)</li>
                <li>Low-Latency Edge Analytics for Autonomous Vehicles (2024)</li>
                <li>Distributed Fog Nodes for Smart City Sensor Networks (2024)</li>
                <li>AI-Enhanced Edge Computing for Predictive Maintenance (2025)</li>
                <li>Hybrid Cloud-Edge IoT System for Energy Optimization (2025)</li>
                <li>Containerized Microservices for Scalable Fog-IoT Deployments (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, an Indian-based global center, supports Edge and Fog Computing in IoT projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                The institute provides hardware and software integration, AI-enhanced analytics, cloud-edge deployment guidance, and IEEE-compliant project documentation. Each project ensures academic excellence, practical usability, and industrial relevance.
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
              <li><a href="/industrial-iot-industry-4.0-project-development">Industrial IoT (IIoT) for Industry 4.0 Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEEdgeFogComputingIoTProjectDevelopmentCenter;