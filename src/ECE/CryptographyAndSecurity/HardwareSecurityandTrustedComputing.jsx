import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
const faqs = [
  {
    question: "What is Hardware Security and Trusted Computing?",
    answer: "It addresses protection of digital systems against tampering, unauthorized access, and hardware-level threats using secure hardware modules like TPM, PUFs, and TEEs."
  },
  {
    question: "What do B.Tech projects in hardware security focus on?",
    answer: "Introductory secure hardware implementations such as FPGA-based password authentication, hardware firewalls for IoT, and trusted boot mechanisms using tools like Arduino, Raspberry Pi, and FPGA kits."
  },
  {
    question: "What advanced topics are covered in M.Tech hardware security projects?",
    answer: "Practical secure systems including TPMs, FPGA-based AES/RSA processors, Trusted Execution Environments, and tamper-resistant architectures using Vivado, Quartus, Verilog, VHDL, and ARM-based boards."
  },
  {
    question: "What research areas do Ph.D. projects explore in this domain?",
    answer: "PUF-based authentication, AI-driven hardware intrusion detection, post-quantum secure design, and federated trusted computing across IoT and cloud, aiming at IEEE Transactions and symposiums."
  },
  {
    question: "Which tools and platforms are used for hardware security projects?",
    answer: "Common tools include ARM TrustZone, TPM chips, FPGA, ASIC prototyping, Cadence, Mentor Graphics, Python, MATLAB, and FPGA-SoC platforms."
  }
];

const HardwareSecurityTrustedComputingProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Hardware Security Projects in ECE</li>
              <li>Trusted Computing IEEE Projects 2023–2025</li>
              <li>FPGA Security Projects</li>
              <li>Cryptographic Hardware Design</li>
              <li>PUF-Based Authentication Research</li>
              <li>Tamper-Resistant Hardware Systems</li>
              <li>ARM TrustZone Security Projects</li>
              <li>Post-Quantum Hardware Security</li>
              <li>B.Tech Hardware Security Projects</li>
              <li>Ph.D. Research in Trusted Computing</li>
              <li>Narpavi Research Institute Security Support</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Hardware Security and Trusted Computing – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> provides advanced research and project support in Hardware Security and Trusted Computing for B.Tech, M.Tech, and Ph.D. scholars, aligned with IEEE standards (2023–2025).
              </p>
              <p>
                We focus on secure hardware modules, FPGA/ASIC-based design, tamper-resistant architectures, and trusted computing frameworks to address modern cybersecurity needs in IoT and embedded systems.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>Research Focus</th>
                      <th>Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trusted Computing</td>
                      <td>TPMs, TEEs, secure boot</td>
                      <td>Cloud servers, IoT, banking systems</td>
                      <td>ARM TrustZone, TPM chips</td>
                    </tr>
                    <tr>
                      <td>PUF-Based Security</td>
                      <td>Unique hardware signatures</td>
                      <td>Device authentication, IoT</td>
                      <td>FPGA, ASIC</td>
                    </tr>
                    <tr>
                      <td>Cryptographic Hardware</td>
                      <td>FPGA/ASIC crypto engines</td>
                      <td>Secure embedded devices</td>
                      <td>Verilog, VHDL, Xilinx Vivado</td>
                    </tr>
                    <tr>
                      <td>Side-Channel Resistance</td>
                      <td>Attack-prevention designs</td>
                      <td>Smart cards, secure processors</td>
                      <td>Cadence, Mentor Graphics</td>
                    </tr>
                    <tr>
                      <td>Tamper-Resistant Systems</td>
                      <td>Physical attack protection</td>
                      <td>Military, aerospace</td>
                      <td>ASIC prototyping, FPGA</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced Security</td>
                      <td>ML-based intrusion prevention</td>
                      <td>Smart IoT devices, edge computing</td>
                      <td>Python, MATLAB, FPGA-SoC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Hardware Security</h2>
              <p>
                Introductory projects such as FPGA-based password authentication, hardware firewalls for IoT, and trusted boot mechanisms with platforms like Arduino, Raspberry Pi, Xilinx, and Altera FPGA kits.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Hardware Security</h2>
              <p>
                Practical implementations including hardware TPMs, FPGA AES/RSA processors, TEEs for embedded systems, and tamper-resistant architectures with Vivado, Quartus, Verilog, VHDL, and ARM boards.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Hardware Security & Trusted Computing</h2>
              <p>
                Cutting-edge research on PUF authentication, AI-driven intrusion detection, post-quantum hardware security, and federated trusted computing for IoT/cloud aligned with IEEE publications.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Trusted Platform Module for Secure IoT Devices (2023)</li>
                <li>PUF-Based Authentication System for Embedded Hardware (2023)</li>
                <li>FPGA Implementation of RSA with Side-Channel Attack Resistance (2024)</li>
                <li>Trusted Execution Environment for ARM-Based Embedded Devices (2024)</li>
                <li>AI-Enhanced Intrusion Detection in Hardware Security Systems (2025)</li>
                <li>Post-Quantum Cryptographic Hardware Accelerator Using FPGA (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers expert guidance in hardware security and trusted computing, training students and researchers to design secure, resilient hardware systems aligned with industry and IEEE standards.
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

export default HardwareSecurityTrustedComputingProject;
