import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
const faqs = [
  {
    question: "What services does the Hardware-Software Co-Design Project Development Center offer?",
    answer: "Narpavi Research Institute’s Hardware-Software Co-Design Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in FPGA-based embedded systems, SoC architectures, and AI-enabled co-design for IoT, robotics, and automotive applications."
  },
  {
    question: "What types of Hardware-Software Co-Design projects are supported?",
    answer: "We support B.Tech projects (FPGA prototyping, IoT SoC design), M.Tech projects (hardware-software partitioning, RTOS integration), and Ph.D. projects (AI-enabled co-design, 3D SoC optimization) for applications in real-time systems and edge computing."
  },
  {
    question: "Which technologies are used in Hardware-Software Co-Design project development?",
    answer: "Our stack includes VHDL/Verilog, Xilinx Vivado, Cadence, Synopsys, MATLAB/Simulink, and ARM-based platforms for co-design, co-simulation, and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like FPGA-based co-design, low-power SoC architectures, and AI-driven co-design frameworks, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, co-simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const ECEHardwareSoftwareCoDesignProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Hardware-Software Co-Design Projects</li>
              <li>IEEE Hardware-Software Co-Design 2023–2025</li>
              <li>FPGA-Based Co-Design Projects</li>
              <li>SoC Co-Design for AI Applications</li>
              <li>Low-Power Hardware-Software Co-Design</li>
              <li>RTOS Embedded Co-Design Projects</li>
              <li>Co-Simulation for VLSI Projects</li>
              <li>B.Tech Co-Design Projects</li>
              <li>M.Tech Hardware-Software Research</li>
              <li>Ph.D. Co-Design Projects</li>
              <li>Narpavi Research Institute Co-Design Support</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Hardware-Software Co-Design – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Hardware-Software Co-Design – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions for embedded systems, SoC architectures, and AI-enabled hardware acceleration in IoT, robotics, automotive, aerospace, and healthcare applications.
              </p>
              <p>
                With expertise in Xilinx Vivado, Cadence, Synopsys, and ARM-based platforms, we deliver innovative solutions for hardware-software partitioning, co-simulation, and real-time prototyping, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Hardware-Software Co-Design Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational co-design projects like FPGA-based embedded systems or IoT SoC design, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using VHDL/Verilog and C programming for co-simulation</li>
                <li>Hardware prototypes on Xilinx FPGA platforms</li>
                <li>Performance analysis for real-time functionality</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical co-design integration, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Hardware-Software Co-Design Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced hardware-software partitioning and RTOS-based architectures.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Co-simulation of low-power AI devices or robotics systems</li>
                <li>Hardware prototyping with Xilinx Vivado, Cadence, or Synopsys</li>
                <li>Integration with RTOS or AI-enabled SoCs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade co-design solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Hardware-Software Co-Design Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge co-design research for next-generation systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of AI-enabled or 3D SoC architectures</li>
                <li>Experimental validation with heterogeneous computing platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative co-design methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Hardware-Software Co-Design Technologies vs. Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Hardware-Software Co-Design Technology</th>
                      <th>Academic Research Applications</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FPGA-Based Hardware-Software Systems</td>
                      <td>Student projects for real-time systems</td>
                      <td>AI accelerators, autonomous navigation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, VHDL/Verilog</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>SoC Design for Embedded AI</td>
                      <td>Research on processor-IP integration</td>
                      <td>Smartphones, edge AI, and robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Cadence, Synopsys</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Low-Power Co-Design Architectures</td>
                      <td>Power-aware academic simulations</td>
                      <td>Wearables and healthcare electronics</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Co-Design for Real-Time Operating Systems</td>
                      <td>RTOS-based embedded research</td>
                      <td>Automotive control systems, avionics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ARM platforms, Synopsys</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Hardware-Software Co-Simulation</td>
                      <td>B.Tech prototyping with HDL & C coding</td>
                      <td>Chip-level verification and validation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Cadence</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-Enabled Co-Design Frameworks</td>
                      <td>Ph.D. research on AI-accelerated SoC</td>
                      <td>Industry AI frameworks and cloud systems</td>
                      <td>Ph.D.</td>
                      <td>Xilinx Vivado, TensorFlow</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Hardware-Software Co-Design Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Hardware-Software Co-Design for Real-Time Image Processing (2023)</li>
                <li>Low-Power Co-Design Architectures for Embedded AI in IoT Devices (2023)</li>
                <li>Hardware-Software Partitioning for AI-Accelerated SoC Platforms (2024)</li>
                <li>Co-Design of RTOS-Enabled Embedded Systems for Automotive Safety (2024)</li>
                <li>AI-Driven Hardware-Software Co-Design Frameworks for Edge Computing (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides complete project development assistance in Hardware-Software Co-Design across B.Tech, M.Tech, and Ph.D. levels.
              </p>
              <p>
                Specializing in IEEE 2023–2025 aligned topics, our team ensures scholars gain expertise in SoC design, FPGA-based prototyping, RTOS co-integration, and AI-enabled embedded co-design, empowering students worldwide to become pioneers in Hardware-Software Co-Design technologies.
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
              <li><a href="/biomedical-electronics-project-development">Biomedical Electronics Project Development</a></li>
              <li><a href="/communication-systems-project-development">Communication Systems Project Development</a></li>
              <li><a href="/cryptography-security-project-development">Cryptography & Security Project Development</a></li>
              <li><a href="/iot-project-development">IoT Project Development</a></li>
              <li><a href="/signal-processing-project-development">Signal Processing Project Development</a></li>
              <li><a href="/satellite-space-communication-project-development">Satellite & Space Communication Project Development</a></li>
              <li><a href="/vlsi-design-embedded-systems-project-development">VLSI Design & Embedded Systems Project Development</a></li>
              <li><a href="/wireless-sensor-networks-project-development">Wireless Sensor Networks Project Development</a></li>
              <li><a href="/low-power-vlsi-project-development">Low Power VLSI Architectures Project Development</a></li>
              <li><a href="/fpga-system-prototyping-project-development">FPGA-Based System Prototyping Project Development</a></li>
              <li><a href="/vlsi-ai-project-development">VLSI for Artificial Intelligence Applications Project Development</a></li>
              <li><a href="/power-systems-project-development">Power Systems Project Development</a></li>
              <li><a href="/electrical-machines-project-development">Electrical Machines Project Development</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/smart-grid-microgrid-project-development">Smart Grid & Microgrid Project Development</a></li>
              <li><a href="/high-voltage-engineering-project-development">High Voltage Engineering Project Development</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
              <li><a href="/control-systems-project-development">Control Systems Project Development</a></li>
              <li><a href="/industrial-automation-project-development">Industrial Automation Project Development</a></li>
              <li><a href="/electric-vehicles-project-development">Electric Vehicles Project Development</a></li>
              <li><a href="/ai-eee-project-development">Artificial Intelligence in EEE Project Development</a></li>
              <li><a href="/energy-management-systems-project-development">Energy Management Systems Project Development</a></li>
              <li><a href="/iot-eee-project-development">Internet of Things in EEE Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEHardwareSoftwareCoDesignProjectDevelopmentCenter;