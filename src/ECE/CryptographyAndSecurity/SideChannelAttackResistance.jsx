import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What is Side-Channel Attack (SCA) Resistance in Hardware?",
    answer: "It involves protecting hardware devices against attacks that exploit power consumption, electromagnetic emissions, timing, or acoustic signals to extract sensitive data like cryptographic keys."
  },
  {
    question: "What B.Tech projects focus on in SCA resistance?",
    answer: "Introductory work includes power analysis attack demonstrations, timing attack evaluations, simple masking on AES hardware, and IoT device protection against basic side-channel attacks using Arduino, Raspberry Pi, MATLAB, and Python."
  },
  {
    question: "What advanced techniques are explored in M.Tech SCA resistance projects?",
    answer: "Projects cover DPA-resistant FPGA AES encryption, lightweight masking for IoT, EM side-channel countermeasures, and AI-driven leakage detection using FPGA, MATLAB, Python, Cadence, and Synopsys."
  },
  {
    question: "What cutting-edge research is pursued in Ph.D. SCA resistance?",
    answer: "Ph.D. research includes PQC-resistant hardware, machine learning-assisted countermeasures, secure hardware accelerators for IoT/5G/6G, and leakage-resilient FPGA/ASIC design methodologies."
  },
  {
    question: "Which tools and platforms are used for SCA resistance projects?",
    answer: "Tools include FPGA boards, MATLAB, Python, Cadence, Synopsys, EM probes, TensorFlow, and OQS libraries for post-quantum cryptography."
  }
];

const SideChannelAttackResistanceProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Side-Channel Attack Resistance in Hardware</li>
              <li>Power Analysis Attack Mitigation</li>
              <li>Electromagnetic SCA Countermeasures</li>
              <li>Timing Attack Resistance in Embedded Devices</li>
              <li>AI-Based SCA Detection</li>
              <li>Post-Quantum SCA-Resistant Hardware</li>
              <li>DPA-Resistant FPGA Design</li>
              <li>Leakage-Resilient VLSI</li>
              <li>Hardware Security Projects IEEE</li>
              <li>Cryptographic Hardware Research</li>
              <li>IoT Device Hardware Security</li>
              <li>FPGA Security Projects</li>
              <li>Narpavi Research Institute Hardware Security</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Side-Channel Attack Resistance in Hardware – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> provides specialized training and research mentorship in side-channel attack resistance, focusing on power analysis, electromagnetic and timing attacks, and AI-driven countermeasures aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Our projects support B.Tech, M.Tech, and Ph.D. students in developing robust hardware security solutions to protect embedded devices, IoT systems, and cryptographic processors.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Countermeasure Technique</th>
                      <th>Research Focus</th>
                      <th>Industry Application</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Power Analysis Resistance</td>
                      <td>Masking, noise injection</td>
                      <td>IoT devices, smart cards</td>
                      <td>FPGA, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Timing Attack Resistance</td>
                      <td>Randomized clocking</td>
                      <td>Embedded processors</td>
                      <td>Python, Cadence</td>
                    </tr>
                    <tr>
                      <td>Electromagnetic SCA Protection</td>
                      <td>Shielding, EM balancing</td>
                      <td>Secure IoT, defense hardware</td>
                      <td>EM Probes, FPGA</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted SCA Detection</td>
                      <td>ML-based anomaly detection</td>
                      <td>Cloud-connected devices</td>
                      <td>TensorFlow, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Post-Quantum Hardware Security</td>
                      <td>PQC-resistant hardware</td>
                      <td>5G/6G, data centers</td>
                      <td>FPGA, OQS library</td>
                    </tr>
                    <tr>
                      <td>ASIC/FPGA Secure Design</td>
                      <td>Leakage-aware VLSI</td>
                      <td>Industry-grade chips</td>
                      <td>Synopsys, Cadence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in SCA Resistance</h2>
              <p>
                Introduction-level projects include power analysis demonstrations, timing attack assessments, simple AES masking, and IoT device protection with platforms like Arduino, Raspberry Pi, MATLAB, and Python.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in SCA Resistance</h2>
              <p>
                Advanced projects focus on DPA-resistant FPGA AES cryptography, lightweight masking, EM attack countermeasures, and AI-based leakage detection using FPGA, MATLAB, Python, Cadence, and Synopsys.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in SCA Resistance</h2>
              <p>
                Cutting-edge research areas include post-quantum cryptographic hardware, machine learning-assisted countermeasures, secure hardware accelerators, and leakage-resilient FPGA/ASIC designs.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Power Analysis Attack Demonstration on AES Hardware (2023)</li>
                <li>FPGA-Based DPA-Resistant AES Cryptographic Engine (2023)</li>
                <li>AI-Driven Side-Channel Leakage Detection for IoT Devices (2024)</li>
                <li>Electromagnetic Shielding Techniques for Secure Embedded Systems (2024)</li>
                <li>Post-Quantum Cryptographic Hardware with SCA Resistance (2025)</li>
                <li>Machine Learning-Assisted Countermeasures Against Side-Channel Attacks (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers comprehensive mentorship and training in side-channel attack resistance, ensuring students develop future-ready hardware security solutions aligned with IEEE research standards.
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

export default SideChannelAttackResistanceProject;
