import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What is Post-Quantum Cryptography (PQC)?",
    answer: "PQC comprises quantum-resistant encryption algorithms designed to secure communications against attacks from quantum computers, ensuring robust security for IoT, embedded devices, and communication protocols."
  },
  {
    question: "What topics do B.Tech PQC projects cover?",
    answer: "Foundation-level work includes PQC-based secure chat on IoT devices, lattice-based cryptography on FPGA/Arduino, and hash-based PQC for secure sensor communications."
  },
  {
    question: "What advanced areas are targeted in M.Tech PQC projects?",
    answer: "Advanced designs include hardware acceleration of lattice-based cryptography on FPGA, PQC-enabled VPNs, lightweight PQC protocols for WSN, and hybrid classical-PQC schemes."
  },
  {
    question: "What research directions are emphasized in Ph.D. PQC projects?",
    answer: "Leading-edge research covers AI-optimized PQC for constrained devices, secure 5G/6G communications using lattice PQC, side-channel resistance in PQC hardware, and blockchain-enabled secure systems."
  },
  {
    question: "Which tools and platforms support PQC projects?",
    answer: "Tools include FPGA boards, MATLAB, Python, Raspberry Pi, ARM Cortex, Open Quantum Safe libraries, TensorFlow, and Hyperledger."
  }
];

const PostQuantumCryptographyProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Post-Quantum Cryptography in Electronics</li>
              <li>Quantum-Safe Cryptography Projects</li>
              <li>Lattice-Based PQC</li>
              <li>Hash-Based PQC</li>
              <li>Post-Quantum Cryptography IoT</li>
              <li>FPGA PQC Implementation</li>
              <li>Secure Communication PQC Projects</li>
              <li>PQC Wireless Sensor Networks</li>
              <li>Hybrid PQC Protocols</li>
              <li>B.Tech PQC Projects</li>
              <li>M.Tech PQC Research</li>
              <li>Ph.D. Post-Quantum Cryptography</li>
              <li>IEEE PQC Projects</li>
              <li>Narpavi Research Institute PQC</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Post-Quantum Cryptography in Electronics – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> mentors B.Tech, M.Tech, and Ph.D. students in Post-Quantum Cryptography research and implementation, focusing on quantum-resistant encryption techniques aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Our projects develop hardware-friendly, low-power cryptographic modules to secure IoT and embedded devices resistant to quantum attacks from Shor’s and Grover’s algorithms.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Post-Quantum Algorithm</th>
                      <th>Research Focus</th>
                      <th>Industry Application</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lattice-Based PQC</td>
                      <td>Hardware-friendly cryptography</td>
                      <td>IoT, Embedded Devices</td>
                      <td>FPGA, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Hash-Based PQC</td>
                      <td>Signature schemes</td>
                      <td>Secure firmware updates</td>
                      <td>Python, Raspberry Pi</td>
                    </tr>
                    <tr>
                      <td>Code-Based PQC</td>
                      <td>Secure communications</td>
                      <td>Satellite & military communication</td>
                      <td>ARM Cortex, Simulink</td>
                    </tr>
                    <tr>
                      <td>Multivariate PQC</td>
                      <td>Lightweight encryption</td>
                      <td>Healthcare IoT, wearable devices</td>
                      <td>Arduino, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Hybrid Cryptography</td>
                      <td>PQC + classical schemes</td>
                      <td>Transitional systems for industry</td>
                      <td>OQS Library, Hyperledger</td>
                    </tr>
                    <tr>
                      <td>AI-Integrated PQC</td>
                      <td>Adaptive cryptographic models</td>
                      <td>Intelligent cyber-physical systems</td>
                      <td>TensorFlow, FPGA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Post-Quantum Cryptography</h2>
              <p>
                Foundation projects include PQC-based secure chat apps on IoT devices, FPGA/Arduino lattice cryptography, and secure sensor data communication using hash-based PQC algorithms.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Post-Quantum Cryptography</h2>
              <p>
                Advanced cryptographic hardware/software designs such as PQC-enabled VPNs, FPGA lattice cryptography acceleration, lightweight WSN protocols, and hybrid cryptosystems.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Post-Quantum Cryptography</h2>
              <p>
                Cutting-edge research on AI-optimized PQC for constrained devices, secure 5G/6G communication, side-channel resistant hardware, and blockchain-integrated secure distributed systems.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Implementation of Lattice-Based Post-Quantum Cryptography (2023)</li>
                <li>Lightweight Post-Quantum Cryptography Protocol for IoT Devices (2023)</li>
                <li>Hybrid Cryptographic Framework for Quantum-Safe Embedded Systems (2024)</li>
                <li>AI-Optimized Post-Quantum Encryption for Resource-Constrained Devices (2024)</li>
                <li>PQC-Enabled Secure 5G/6G Communication Protocol (2025)</li>
                <li>Post-Quantum Blockchain Framework for Secure IoT Networks (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides world-class support in Post-Quantum Cryptography, overseeing hardware-efficient PQC designs, secure IoT integration, and quantum-resistant protocols, ensuring IEEE-standard compliance and research excellence.
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

export default PostQuantumCryptographyProject;
