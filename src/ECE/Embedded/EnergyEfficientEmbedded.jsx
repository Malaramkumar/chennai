import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Energy-Efficient Embedded Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Energy-Efficient Embedded Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in low-power microcontrollers, energy-harvesting systems, and AI-driven power management for IoT, healthcare, and smart manufacturing."
  },
  {
    question: "What types of Energy-Efficient Embedded Systems projects are supported?",
    answer: "We support B.Tech projects (solar-powered IoT, low-power sensor networks), M.Tech projects (DVFS-integrated processors, FPGA-based energy optimization), and Ph.D. projects (neuromorphic low-power architectures, 6G IoT energy management) for applications in smart cities, robotics, and environmental monitoring."
  },
  {
    question: "Which technologies are used in Energy-Efficient Embedded Systems project development?",
    answer: "Our stack includes ARM Cortex-M, RISC-V, Xilinx Vivado, STM32, FreeRTOS, energy-harvesting modules, and AI-driven power management frameworks for low-power embedded solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like DVFS, energy-harvesting systems, and neuromorphic architectures, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware prototyping, software optimization, validation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEEnergyEfficientEmbeddedSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Energy-Efficient Embedded Systems</li>
              <li>Low Power Embedded Projects</li>
              <li>IoT Energy Optimization</li>
              <li>IEEE Embedded Systems Projects 2023–2025</li>
              <li>Energy Harvesting Devices</li>
              <li>DVFS Embedded Platforms</li>
              <li>Neuromorphic Low-Power Architectures</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Energy-Efficient Embedded Systems – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Energy-Efficient Embedded Systems – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in low-power microcontrollers, energy-harvesting systems, and AI-driven power management for IoT, healthcare, and smart manufacturing.
              </p>
              <p>
                With expertise in ARM Cortex-M, RISC-V, DVFS, and energy-harvesting technologies, we deliver innovative solutions for sustainable, high-performance embedded systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Energy-Efficient Embedded Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational energy-efficient projects like solar-powered IoT and low-power sensor networks, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Solar-powered embedded systems using microcontrollers</li>
                <li>Low-power sensor network design for IoT applications</li>
                <li>Performance analysis for energy efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical energy optimization, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Energy-Efficient Embedded Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced energy-efficient architectures and power-aware scheduling.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>FPGA-based energy-efficient designs with DVFS integration</li>
                <li>AI-driven power management for IoT gateways</li>
                <li>Prototyping with ARM Cortex-M or RISC-V platforms</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade energy-efficient solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Energy-Efficient Embedded Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in neuromorphic architectures and 6G IoT energy management.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of ultra-low-power SoC or neuromorphic designs</li>
                <li>Experimental validation with FPGA or ASIC platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative energy-efficient methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Energy-Efficient Technologies vs. Industry Applications</h2>
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
                      <td>Dynamic Voltage and Frequency Scaling (DVFS)</td>
                      <td>Mobile Devices, IoT Systems</td>
                      <td>Adaptive power control for longer battery life</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ARM Cortex-M, Keil, FreeRTOS</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Low-Power Microcontrollers (ARM, RISC-V)</td>
                      <td>Consumer Electronics, Healthcare</td>
                      <td>Energy-optimized computation at the edge</td>
                      <td>B.Tech/M.Tech</td>
                      <td>STM32, RISC-V toolchain</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Energy-Harvesting Embedded Systems</td>
                      <td>Smart Homes, Environmental Monitoring</td>
                      <td>Self-sustaining operation using renewable energy</td>
                      <td>B.Tech/M.Tech/Ph.D.</td>
                      <td>TI MSP430, Energy harvesting modules</td>
                      <td>Medium to High</td>
                    </tr>
                    <tr>
                      <td>Power-Gated SoC Architectures</td>
                      <td>Automotive Electronics, Robotics</td>
                      <td>Reduced leakage power in idle states</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Xilinx Vivado, Synopsys tools</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI-Driven Power Management</td>
                      <td>Industrial IoT, Smart Factories</td>
                      <td>Intelligent workload balancing for energy savings</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow Lite, NVIDIA Jetson</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Energy-Efficient Embedded Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>DVFS-Based Low-Power Embedded IoT Platforms for Smart Cities (2023)</li>
                <li>Energy-Harvesting Wireless Sensor Networks for Environmental Monitoring (2023)</li>
                <li>FPGA-Optimized Energy-Aware Scheduling for Embedded Robotics (2024)</li>
                <li>AI-Driven Power Management in RISC-V Embedded Devices (2024)</li>
                <li>Neuromorphic Low-Power Embedded Architectures for Edge Intelligence (2025)</li>
                <li>Sustainable Embedded Systems for 6G IoT Applications (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a trusted partner in advanced embedded systems research and development.
              </p>
              <p>
                By offering comprehensive support for B.Tech, M.Tech, and Ph.D. scholars, we ensure groundbreaking results in Energy-Efficient Embedded Systems, delivering sustainable, globally competitive, and industry-ready solutions.
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

export default ECEEnergyEfficientEmbeddedSystemsProjectDevelopmentCenter;