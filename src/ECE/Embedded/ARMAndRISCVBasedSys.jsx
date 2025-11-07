import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the ARM & RISC-V Based System Development Project Development Center offer?",
    answer: "Narpavi Research Institute’s ARM & RISC-V Based System Development Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in ARM Cortex programming, RISC-V FPGA prototyping, and hybrid architectures for IoT, robotics, and medical electronics."
  },
  {
    question: "What types of ARM & RISC-V Based System Development projects are supported?",
    answer: "We support B.Tech projects (ARM microcontroller programming, peripheral interfacing), M.Tech projects (hybrid ARM-RISC-V systems, AI-accelerated platforms), and Ph.D. projects (RISC-V extensions, energy-aware SoC designs) for applications in IoT, aerospace, and automotive industries."
  },
  {
    question: "Which technologies are used in ARM & RISC-V Based System Development projects?",
    answer: "Our stack includes ARM Cortex-M/A processors, RISC-V cores, Xilinx Vivado, Keil, IAR Embedded Workbench, and FreeRTOS for hardware prototyping and software integration."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like low-power ARM architectures, RISC-V FPGA prototyping, and secure hybrid systems, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware prototyping, software integration, validation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEARMRISCVSystemDevelopmentProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ARM & RISC-V Based System Development</li>
              <li>ARM Cortex Projects</li>
              <li>RISC-V FPGA Prototyping</li>
              <li>Embedded System Development Support</li>
              <li>IEEE ARM Projects 2023–2025</li>
              <li>ARM-RISC-V Hybrid Architectures</li>
              <li>Narpavi Research Institute ARM Projects</li>
              <li>Secure Embedded Systems Development</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>ARM & RISC-V Based System Development – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the ARM & RISC-V Based System Development – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in ARM Cortex programming, RISC-V FPGA prototyping, and hybrid architectures for IoT, robotics, and medical electronics.
              </p>
              <p>
                With expertise in ARM Cortex-M/A processors, RISC-V cores, and tools like Xilinx Vivado and Keil, we deliver innovative solutions for flexible and efficient embedded systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech ARM & RISC-V Based System Development Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects like ARM microcontroller programming or RISC-V core prototyping, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>ARM Cortex-M programming for real-time data processing</li>
                <li>RISC-V core implementation on FPGA platforms</li>
                <li>Peripheral interfacing and performance analysis</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical processor design, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech ARM & RISC-V Based System Development Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced hybrid ARM-RISC-V systems and AI-accelerated platforms.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Design of hybrid ARM-RISC-V architectures for IoT or robotics</li>
                <li>RTOS integration for real-time performance</li>
                <li>Prototyping with FPGA or ARM-based development boards</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade embedded solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. ARM & RISC-V Based System Development Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in RISC-V extensions and energy-aware SoC designs.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of RISC-V extensions for AI/ML acceleration</li>
                <li>Experimental validation with FPGA or custom SoC platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative processor designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – ARM & RISC-V Technologies vs. Industry Applications</h2>
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
                      <td>ARM Cortex-M Microcontrollers</td>
                      <td>IoT Devices, Wearables, Smart Sensors</td>
                      <td>Energy-efficient real-time processing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Keil, IAR Embedded Workbench</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>ARM Cortex-A High-Performance Cores</td>
                      <td>Smartphones, Automotive Infotainment</td>
                      <td>High performance with low latency</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ARM DS-5, Linux</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>RISC-V Customizable ISA</td>
                      <td>Aerospace, Defense, Research Labs</td>
                      <td>Open-source flexibility and cost-effectiveness</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>RISC-V toolchain, Vivado</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>ARM + RISC-V Hybrid Architectures</td>
                      <td>Industrial Automation, Robotics</td>
                      <td>Optimized balance of efficiency and customization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Vivado, ARM tools</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>FPGA-based RISC-V Implementations</td>
                      <td>Prototyping and Advanced Research</td>
                      <td>Rapid design validation and adaptability</td>
                      <td>B.Tech/M.Tech/Ph.D.</td>
                      <td>Xilinx Vivado, Quartus</td>
                      <td>Medium to High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned ARM & RISC-V Based System Development Project Titles (2023–2025)</h2>
              <ul>
                <li>Low-Power ARM Cortex-M Architectures for IoT-Enabled Edge Devices (2023)</li>
                <li>FPGA Prototyping of RISC-V Processors for Secure Embedded Applications (2024)</li>
                <li>Hybrid ARM-RISC-V SoC for AI-Accelerated Real-Time Systems (2024)</li>
                <li>Energy-Aware ARM & RISC-V Architectures for Medical Electronics (2025)</li>
                <li>Secure IoT Framework Using ARM TrustZone and RISC-V Cryptographic Extensions (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an India-based global center of excellence in academic and industrial research support.
              </p>
              <p>
                By specializing in ARM & RISC-V Based System Development and integrating domain expertise, advanced laboratories, and current IEEE Transactions (2023–2025), we ensure that every project achieves international recognition and industry applicability.
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

export default ECEARMRISCVSystemDevelopmentProjectDevelopmentCenter;