import "./EEEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Embedded Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Embedded Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in microcontroller systems, FPGA-based control, and IoT-enabled embedded platforms for applications in smart grids, EVs, and industrial automation."
  },
  {
    question: "What types of embedded systems projects are supported?",
    answer: "We support B.Tech projects (Arduino-based energy monitoring, motor control), M.Tech projects (FPGA-based power control, RTOS applications), and Ph.D. projects (AI-integrated embedded systems, cyber-physical security) for EEE applications in smart grids and EVs."
  },
  {
    question: "Which technologies are used in embedded systems project development?",
    answer: "Our stack includes MATLAB/Simulink, VHDL/Verilog, Xilinx, Arduino, Raspberry Pi, and RTOS frameworks for advanced embedded design and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like embedded control in power electronics, IoT for smart grids, and FPGA-based motor drives, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEEmbeddedSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Embedded Systems IEEE Projects</li>
              <li>FPGA IEEE Projects</li>
              <li>IoT Embedded IEEE Projects</li>
              <li>Real-Time Systems IEEE Projects</li>
              <li>B.Tech Embedded IEEE Projects</li>
              <li>M.Tech FPGA IEEE Projects</li>
              <li>Ph.D. Embedded IEEE Thesis</li>
              <li>Industrial Automation Embedded IEEE Projects</li>
              <li>EV Embedded Systems IEEE Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Embedded Systems – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Embedded Systems – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in embedded hardware and software for smart grids, electric vehicles, and industrial automation.
              </p>
              <p>
                With expertise in MATLAB/Simulink, VHDL/Verilog, and IoT platforms, we deliver innovative solutions for power electronics control, renewable integration, and intelligent automation, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Embedded Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational embedded systems projects like Arduino-based energy monitoring or motor control, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using Arduino, PIC, ARM, or Raspberry Pi</li>
                <li>Hardware prototypes for energy monitoring or power factor correction</li>
                <li>Performance analysis for efficiency and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical embedded systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Embedded Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced embedded solutions and industrial applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of FPGA-based controllers or RTOS applications</li>
                <li>Hardware prototyping with VHDL/Verilog or Xilinx</li>
                <li>Integration with smart grids or EV systems</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade embedded solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Embedded Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in embedded systems with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of AI-integrated or cyber-secure systems</li>
                <li>Experimental validation for FPGA-based control or IoT devices</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative embedded designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Embedded Systems Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Domain</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microcontroller & Microprocessor Systems</td>
                      <td>Smart Meters, Power Converters</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, ARM, Keil</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>FPGA-Based Embedded Design</td>
                      <td>Power Electronics Control, Signal Processing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>VHDL, Verilog, Xilinx</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Real-Time Operating Systems (RTOS)</td>
                      <td>EV Control, Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FreeRTOS, MATLAB/Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Embedded Control in Power Electronics</td>
                      <td>DC-DC Converters, Inverters</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Keil</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Embedded Systems in Renewable Energy</td>
                      <td>Solar/Wind Integration</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Raspberry Pi, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Embedded Platforms</td>
                      <td>Smart Grid, Smart Homes</td>
                      <td>B.Tech/M.Tech</td>
                      <td>AWS IoT, Raspberry Pi</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Embedded Machine Learning</td>
                      <td>Predictive Maintenance, Fault Detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow Lite, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Low-Power Embedded Systems</td>
                      <td>Battery-Operated Devices, Smart Sensors</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, MSP430</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Embedded Systems in Electric Vehicles</td>
                      <td>BMS, Motor Control, V2G</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ARM, MATLAB/Simulink</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Embedded Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Embedded Energy Monitoring for Smart Grids (2023)</li>
                <li>FPGA-Based Real-Time Controller for Power Electronics Converters (2024)</li>
                <li>Low-Power Embedded Machine Learning System for Predictive Maintenance (2025)</li>
                <li>Embedded Battery Management System for Electric Vehicles (2023)</li>
                <li>ARM Cortex-Based Renewable Energy Integration Controller (2024)</li>
                <li>Embedded RTOS for Industrial Automation and Process Control (2025)</li>
                <li>Cyber-Physical Embedded Security for Smart Grids (2024)</li>
                <li>FPGA-Assisted Motor Drive Control in Electric Vehicles (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides advanced support in Embedded Systems research for EEE applications, including microcontroller programming, FPGA design, IoT integration, simulation labs, and hardware prototyping. Through the Embedded Systems – Project Development Center, scholars receive hands-on development, experimental testing, and IEEE publication support.
              </p>
              <p>
                By aligning projects with IEEE Transactions (2023–2025), the institute ensures their work is globally recognized in smart grids, EVs, and industrial automation.
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
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/biomedical-electronics-project-development">Biomedical Electronics Project Development</a></li>
              <li><a href="/communication-systems-project-development">Communication Systems Project Development</a></li>
              <li><a href="/control-systems-robotics-project-development">Control Systems & Robotics Project Development</a></li>
              <li><a href="/cryptography-security-project-development">Cryptography & Security Project Development</a></li>
              <li><a href="/iot-project-development">IoT Project Development</a></li>
              <li><a href="/signal-processing-project-development">Signal Processing Project Development</a></li>
              <li><a href="/satellite-space-communication-project-development">Satellite & Space Communication Project Development</a></li>
              <li><a href="/vlsi-design-embedded-systems-project-development">VLSI Design & Embedded Systems Project Development</a></li>
              <li><a href="/wireless-sensor-networks-project-development">Wireless Sensor Networks Project Development</a></li>
              <li><a href="/power-systems-project-development">Power Systems Project Development</a></li>
              <li><a href="/electrical-machines-project-development">Electrical Machines Project Development</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/smart-grid-microgrid-project-development">Smart Grid & Microgrid Project Development</a></li>
              <li><a href="/high-voltage-engineering-project-development">High Voltage Engineering Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEEmbeddedSystemsProjectDevelopmentCenter;