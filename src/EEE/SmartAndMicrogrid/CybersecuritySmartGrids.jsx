import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Cybersecurity in Smart Grids Project Development Center offer?",
    answer: "Narpavi Research Institute’s Cybersecurity in Smart Grids Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on cyber-physical security, intrusion detection, secure IoT-SCADA communication, blockchain-based transaction systems, and AI-assisted threat mitigation."
  },
  {
    question: "What types of cybersecurity projects in smart grids are supported?",
    answer: "We support B.Tech projects (secure smart meters, intrusion detection basics), M.Tech projects (AI-based intrusion detection, blockchain-based transaction protocols), and Ph.D. projects (deep learning-based threat prediction, secure distributed control systems) for residential, industrial, and utility-scale grids."
  },
  {
    question: "Which technologies are used in cybersecurity project development?",
    answer: "We use MATLAB/Simulink, Python, NS-3 for network simulation, IoT security platforms (MQTT, TLS, ZigBee), FPGA/DSP controllers, HIL test setups, and AI frameworks like TensorFlow and PyTorch for anomaly detection and predictive threat analysis."
  },
  {
    question: "How are smart grid cybersecurity projects aligned with IEEE standards?",
    answer: "Projects align with IEEE Transactions (2023–2025) focusing on secure communication protocols, blockchain for energy data security, AI-driven intrusion detection, anomaly detection, and industrial cybersecurity standards for power systems."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We provide IEEE-compliant topic guidance, algorithm design and threat modeling, simulation & HIL prototyping, secure IoT integration, technical documentation, and guidance for IEEE, Scopus, and SCI publication."
  }
];

const EEECybersecuritySmartGridsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* Left Column: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Cybersecurity in Smart Grids Projects</li>
              <li>IEEE Smart Grid Security Projects 2023–2025</li>
              <li>B.Tech Smart Grid Protection Projects</li>
              <li>M.Tech AI-Based Cybersecurity</li>
              <li>Ph.D Blockchain Energy Security</li>
              <li>IoT-Based Grid Security</li>
              <li>Narpavi Research Institute</li>
              <li>Intrusion Detection for Smart Grids</li>
              <li>Secure SCADA Research</li>
              <li>Predictive Cyber Threat Detection</li>
            </ul>
          </div>

          {/* Center Column: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Cybersecurity in Smart Grids – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> introduces the Cybersecurity in Smart Grids Project Development Center, helping B.Tech, M.Tech, and Ph.D. scholars tackle IEEE-aligned (2023–2025) challenges in intrusion detection, blockchain-based monitoring, secure SCADA/IoT communication, and AI-driven threat analysis.</p>
              <p>Students get hands-on with simulation environments, HIL testbeds, IoT-securing techniques, blockchain protocols, and predictive cyber attack defense strategies for smart grids and microgrids.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Grid Cybersecurity Project Development</h2>
              <ul>
                <li>Introduction to smart grid cybersecurity and intrusion detection basics</li>
                <li>Review IEEE (2023–2025) on smart meter security and IoT protocols</li>
                <li>Simulation using MATLAB, Python, NS-3 networking</li>
                <li>Prototype secure smart meters, SCADA subsystems</li>
                <li>IoT-enabled security monitoring and dashboards</li>
                <li>IEEE-formatted reports & academic presentations</li>
              </ul>
              <p>Focus: fundamentals of cybersecurity in smart metering and basic IDS implementation.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Grid Cybersecurity Project Development</h2>
              <ul>
                <li>Detailed IEEE Transactions study (2023–2025) on IDS, blockchain-based systems</li>
                <li>Develop AI/ML intrusion detection & anomaly prediction algorithms</li>
                <li>Simulations of threat mitigation with reliability and latency impact</li>
                <li>FPGA/DSP secure prototyping with IoT integration</li>
                <li>Testing in smart meters, microgrid SCADA systems</li>
                <li>IEEE journal-ready report prep and validation</li>
              </ul>
              <p>Focus: advanced simulations, AI anomaly prediction, and blockchain-secure system implementation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Smart Grid Cybersecurity Project Development</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) in smart grid threat detection & secure comms</li>
                <li>Deep learning-based threat prediction algorithms</li>
                <li>Blockchain-enabled secure energy transactions</li>
                <li>IoT + HIL-enabled lab-scale cybersecurity validation platforms</li>
                <li>Resilient grid security standards & patented algorithms</li>
              </ul>
              <p>Focus: ground-breaking industrial-grade cybersecurity innovations with patents & publications.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Cybersecurity in Smart Grids vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Intrusion Detection Systems (IDS)</td>
                      <td>Utility/Industrial smart grids</td>
                      <td>AI-assisted anomaly detection, real-time threat response</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Python</td>
                    </tr>
                    <tr>
                      <td>Blockchain-Based Energy Transactions</td>
                      <td>Smart meters, P2P energy trading</td>
                      <td>Secure tamper-proof blockchain records</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python (Hyperledger, Ethereum)</td>
                    </tr>
                    <tr>
                      <td>Secure SCADA & IoT Integration</td>
                      <td>Microgrids, SCADA systems</td>
                      <td>Encrypted protocols, operational resilience</td>
                      <td>B.Tech/M.Tech</td>
                      <td>NS-3, MQTT, Zigbee</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Based Threat Prediction</td>
                      <td>Smart grids</td>
                      <td>Predictive anomaly detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PyTorch, TensorFlow</td>
                    </tr>
                    <tr>
                      <td>Communication Protocol Security</td>
                      <td>Utility/Microgrids</td>
                      <td>Data encryption & authentication</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, IoT-Sec libraries</td>
                    </tr>
                    <tr>
                      <td>Resilient Microgrid Control</td>
                      <td>Industrial/Remote microgrids</td>
                      <td>Adaptive self-healing control</td>
                      <td>Ph.D.</td>
                      <td>MATLAB/Simulink, FPGA-based systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute has emerged as an international hub for EEE project development.
                Through the Cybersecurity in Smart Grids Project Development Center, we empower scholars to research, develop, and publish 
                cutting-edge IEEE-based security frameworks for modern electricity networks. From topic ideation to full prototyping,
                we support innovation and global recognition.
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

              {/* JSON-LD FAQ Schema */}
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

          {/* Right Column: Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/smart-metering-demand-response-project-development">Smart Metering & Demand Response</a></li>
              <li><a href="/grid-integration-of-renewables-project-development">Grid Integration of Renewables</a></li>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage with Renewables</a></li>
              <li><a href="/iot-eee-project-development">IoT in EEE Project Development</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EEECybersecuritySmartGridsProjectDevelopmentCenter;
