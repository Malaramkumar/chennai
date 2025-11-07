import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Secure IoT Architectures Project Development Center offer?",
    answer: "Narpavi Research Institute’s Secure IoT Architectures Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in secure IoT solutions, including encryption, blockchain, AI-driven intrusion detection, and secure cloud-edge frameworks for smart grids, healthcare, and smart cities."
  },
  {
    question: "What types of Secure IoT Architectures projects are supported?",
    answer: "We support B.Tech projects (encrypted sensor networks, authentication), M.Tech projects (blockchain-enabled IoT, secure edge computing), and Ph.D. projects (AI-driven intrusion detection, quantum-resistant cryptography) for applications in industrial IoT, smart homes, and critical infrastructure."
  },
  {
    question: "Which technologies are used in Secure IoT Architectures project development?",
    answer: "Our stack includes TLS/SSL, HTTPS, blockchain, lightweight cryptography (ECC, AES), IAM, secure firmware updates, intrusion detection systems, Arduino, ESP32, and cloud platforms like AWS IoT and Azure IoT for secure IoT systems."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like blockchain-enabled IoT, lightweight cryptography, and AI-driven security, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware-software integration, blockchain and cryptography implementation, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECESecureIoTArchitecturesProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Secure IoT Projects</li>
              <li>IoT Security 2023–2025</li>
              <li>Blockchain IoT</li>
              <li>Lightweight Cryptography IoT</li>
              <li>AI Intrusion Detection IoT</li>
              <li>Edge Security IoT</li>
              <li>Quantum-Resistant IoT</li>
              <li>Narpavi Research Institute IoT Security</li>
              <li>IEEE IoT Security Projects</li>
              <li>Industrial IoT Security Solutions</li>
              <li>Smart City IoT Security</li>
              <li>Secure Healthcare IoT</li>
              <li>IoT Authentication & Encryption</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Secure IoT Architectures – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Secure IoT Architectures – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop robust, cyber-secure IoT solutions aligned with IEEE Transactions (2023–2025). Our projects integrate encryption, authentication, blockchain, and secure cloud-edge frameworks for applications in smart grids, healthcare, and smart cities.
              </p>
              <p>
                With expertise in TLS/SSL, blockchain, lightweight cryptography, and AI-driven security, we deliver high-performance, secure IoT systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Secure IoT Architectures Project Development</h2>
              <p>
                For undergraduate students, our center focuses on basic secure IoT solutions, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Encrypted sensor networks using lightweight cryptography</li>
                <li>Authentication mechanisms for IoT devices</li>
                <li>Secure data transmission and local storage protection</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IoT security deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Secure IoT Architectures Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced IoT security solutions with blockchain and edge computing.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Blockchain-enabled IoT for secure data management</li>
                <li>Secure edge computing for real-time applications</li>
                <li>Anomaly detection for industrial IoT security</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IoT security solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Secure IoT Architectures Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in cutting-edge IoT security architectures.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>AI-driven intrusion detection systems</li>
                <li>Quantum-resistant cryptography for IoT</li>
                <li>Distributed secure systems with multi-layer architectures</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for IoT security</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Secure IoT Architectures Technologies vs. Industry Applications</h2>
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
                      <td>TLS/SSL & HTTPS Protocols</td>
                      <td>IoT Device Communication</td>
                      <td>Ensures encrypted and secure data exchange</td>
                      <td>B.Tech/M.Tech</td>
                      <td>OpenSSL, HTTPS libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Blockchain-Based IoT Security</td>
                      <td>Smart Cities, Supply Chain Monitoring</td>
                      <td>Immutable and tamper-proof transaction records</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Ethereum, Hyperledger</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Lightweight Cryptography (ECC, AES)</td>
                      <td>Wearables, Healthcare IoT</td>
                      <td>Fast and energy-efficient encryption</td>
                      <td>B.Tech/M.Tech</td>
                      <td>TinyECC, AES libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Identity and Access Management (IAM)</td>
                      <td>Industrial IoT, Smart Homes</td>
                      <td>Secure user/device authentication</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IAM, OAuth</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Secure Firmware Update Mechanisms</td>
                      <td>IoT Devices & Gateways</td>
                      <td>Protection against malicious code injection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OTA frameworks, Secure Boot</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Intrusion Detection Systems (IDS)</td>
                      <td>Critical IoT Infrastructure</td>
                      <td>Early detection and mitigation of security breaches</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Snort, AI-based IDS</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Secure IoT Architectures Project Titles (2023–2025)</h2>
              <ul>
                <li>Blockchain-Enabled IoT Security Framework for Smart Grids (2023)</li>
                <li>Lightweight Cryptography for Energy-Constrained IoT Devices (2023)</li>
                <li>AI-Powered Intrusion Detection in Industrial IoT Systems (2024)</li>
                <li>Quantum-Resistant Secure Protocols for IoT Networks (2024)</li>
                <li>Edge-Integrated IoT Security Architecture for Healthcare Systems (2025)</li>
                <li>Multi-Layered Authentication and Access Control in IoT (2025)</li>
                <li>Secure Firmware Update and Device Management for IoT Ecosystems (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, an Indian-based global center, supports Secure IoT Architecture projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                The institute provides hardware-software integration, blockchain and cryptography expertise, cloud-edge security solutions, and IEEE-standard documentation. Projects ensure academic excellence, practical deployment, and industrial relevance.
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
              <li><a href="/embedded-system-security-cryptography-project-development">Embedded System Security and Cryptography Project Development</a></li>
              <li><a href="/iot-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
              <li><a href="/machine-learning-embedded-platforms-project-development">Machine Learning in Embedded Platforms Project Development</a></li>
              <li><a href="/edge-fog-computing-iot-project-development">Edge and Fog Computing in IoT Project Development</a></li>
              <li><a href="/industrial-iot-industry-4.0-project-development">Industrial IoT (IIoT) for Industry 4.0 Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECESecureIoTArchitecturesProjectDevelopmentCenter;