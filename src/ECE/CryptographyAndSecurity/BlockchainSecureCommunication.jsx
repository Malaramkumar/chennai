import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What is the role of blockchain in secure communication?",
    answer: "Blockchain ensures decentralized, tamper-proof, and transparent communication, enhancing trust, eliminating single points of failure, and providing immutable audit trails in distributed networks."
  },
  {
    question: "What projects are included in B.Tech blockchain communication?",
    answer: "Fundamental projects include peer-to-peer blockchain for secure file sharing, blockchain-based messaging on IoT devices, and data integrity verification using mini-blockchains on Raspberry Pi."
  },
  {
    question: "What advanced topics are covered in M.Tech blockchain communication?",
    answer: "Projects include blockchain authentication for IoT, energy-efficient consensus for wireless networks, vehicular blockchain security, and smart contract-enabled healthcare data transmission."
  },
  {
    question: "What research areas are emphasized in Ph.D. blockchain communication?",
    answer: "Cutting-edge research focuses on blockchain-integrated secure 5G/6G communications, AI-blockchain intrusion detection, lightweight protocols for embedded devices, and blockchain for satellite/UAV communication."
  },
  {
    question: "Which tools and platforms support blockchain communication projects?",
    answer: "Common tools include Ethereum, Hyperledger Fabric, Raspberry Pi, ARM Cortex Boards, MATLAB, FPGA, Python, and Simulink."
  }
];

const BlockchainSecureCommunicationProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Blockchain in Secure Communication</li>
              <li>Blockchain IoT Security Projects</li>
              <li>Blockchain Vehicular Communication</li>
              <li>Lightweight Blockchain Protocols</li>
              <li>Blockchain in Embedded Systems</li>
              <li>Blockchain-based Healthcare Data Security</li>
              <li>Secure IoT Communication Projects</li>
              <li>B.Tech Blockchain Projects</li>
              <li>M.Tech Blockchain Research</li>
              <li>Ph.D. Blockchain Communication Projects</li>
              <li>IEEE Blockchain Projects</li>
              <li>Narpavi Research Institute Blockchain</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Blockchain in Secure Communication – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> leads research and project development in Blockchain-based secure communication systems for B.Tech, M.Tech, and Ph.D. scholars, aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Our focus includes lightweight blockchain protocols, AI-integration, IoT and 5G applications, and FPGA-based secure communication architectures to ensure industry-ready, research-oriented outcomes.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Blockchain Application</th>
                      <th>Research Focus</th>
                      <th>Industry Use Case</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT Communication</td>
                      <td>Authentication & data privacy</td>
                      <td>Smart homes, IoT healthcare</td>
                      <td>Ethereum, Raspberry Pi</td>
                    </tr>
                    <tr>
                      <td>Vehicular Communication</td>
                      <td>Blockchain-based V2V & V2I security</td>
                      <td>Intelligent transportation systems</td>
                      <td>Hyperledger, ARM Cortex</td>
                    </tr>
                    <tr>
                      <td>Wireless Networks</td>
                      <td>Lightweight consensus algorithms</td>
                      <td>WSN, 5G security</td>
                      <td>MATLAB, FPGA</td>
                    </tr>
                    <tr>
                      <td>Healthcare</td>
                      <td>Blockchain for patient data</td>
                      <td>Secure medical data transfer</td>
                      <td>Ethereum, Python</td>
                    </tr>
                    <tr>
                      <td>UAV/Satellite Systems</td>
                      <td>Blockchain for secure UAV data routing</td>
                      <td>Military, disaster recovery</td>
                      <td>FPGA, Simulink</td>
                    </tr>
                    <tr>
                      <td>Embedded Systems</td>
                      <td>Lightweight blockchain</td>
                      <td>Low-power IoT & wearables</td>
                      <td>Arduino, ARM boards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Blockchain Communication</h2>
              <p>
                Basic blockchain implementations like peer-to-peer secure file sharing, blockchain-based messaging for IoT, and data integrity verification on Raspberry Pi using Python and Ethereum Testnet.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Blockchain Communication</h2>
              <p>
                Advanced blockchain designs such as authentication for IoT, consensus mechanisms for wireless networks, vehicular blockchain security, and smart contract-based healthcare data transmission using Hyperledger and Ethereum.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Blockchain Communication</h2>
              <p>
                Research includes blockchain-secured 5G/6G communication, AI-blockchain intrusion detection frameworks, lightweight blockchain for embedded devices, and blockchain-enabled satellite/UAV secure communications.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Blockchain-Integrated Secure IoT Communication Framework (2023)</li>
                <li>Energy-Efficient Consensus Mechanism for WSN Security (2023)</li>
                <li>Blockchain-Based Vehicular Communication for Smart Cities (2024)</li>
                <li>Secure Healthcare Data Transmission via Blockchain and Smart Contracts (2024)</li>
                <li>Lightweight Blockchain Protocol for Embedded IoT Devices (2025)</li>
                <li>Blockchain-Enabled Secure Satellite Communication Framework (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute specializes in blockchain-enabled secure communication research, providing expert project guidance and IEEE-compatible, research-focused solutions for students and scholars worldwide.
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

export default BlockchainSecureCommunicationProject;
