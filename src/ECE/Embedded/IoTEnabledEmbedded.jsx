import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the IoT-enabled Embedded Devices Project Development Center offer?",
    answer: "Narpavi Research Institute’s IoT-enabled Embedded Devices Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in Wi-Fi/BLE microcontrollers, LoRa/NB-IoT modules, and AI-integrated IoT devices for smart healthcare, industrial automation, and agriculture."
  },
  {
    question: "What types of IoT-enabled Embedded Devices projects are supported?",
    answer: "We support B.Tech projects (Wi-Fi/BLE sensor integration, mobile app interfacing), M.Tech projects (multi-protocol gateways, secure cloud integration), and Ph.D. projects (blockchain-enabled IoT security, 6G-integrated IoT) for applications in smart cities, healthcare, and robotics."
  },
  {
    question: "Which technologies are used in IoT-enabled Embedded Devices project development?",
    answer: "Our stack includes ESP32, ARM Cortex-M, LoRaWAN, NB-IoT, FreeRTOS, TensorFlow Lite, and tools like Keil, IAR Embedded Workbench, and Xilinx Vivado for IoT hardware and software integration."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like energy-efficient IoT, secure gateways, and AI-driven IoT devices, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware prototyping, software integration, validation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEIoTEnabledEmbeddedDevicesProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>IoT-enabled Embedded Devices</li>
              <li>Embedded IoT Projects</li>
              <li>IoT Gateways and Edge Devices</li>
              <li>IEEE IoT Projects 2023–2025</li>
              <li>Secure IoT Embedded Systems</li>
              <li>AI IoT Devices</li>
              <li>Low-Power IoT Development</li>
              <li>Narpavi Research Institute IoT Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>IoT-enabled Embedded Devices – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the IoT-enabled Embedded Devices – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in Wi-Fi/BLE microcontrollers, LoRa/NB-IoT modules, and AI-integrated IoT devices for smart healthcare, industrial automation, and agriculture.
              </p>
              <p>
                With expertise in ESP32, ARM Cortex-M, LoRaWAN, and TensorFlow Lite, we deliver innovative solutions for secure, scalable, and low-power IoT systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech IoT-enabled Embedded Devices Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational IoT projects like sensor integration and mobile app interfacing, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Wi-Fi/BLE integration using ESP32 or ARM Cortex-M</li>
                <li>Real-time sensor data collection and processing</li>
                <li>Mobile app interfacing for IoT control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IoT implementation, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IoT-enabled Embedded Devices Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced IoT architectures and secure cloud integration.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Design of multi-protocol IoT gateways with NB-IoT or LoRaWAN</li>
                <li>Secure cloud integration for IoT data analytics</li>
                <li>Prototyping with advanced embedded hardware boards</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IoT solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. IoT-enabled Embedded Devices Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in blockchain-enabled IoT and 6G-integrated systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of blockchain or AI/ML-based IoT platforms</li>
                <li>Experimental validation with FPGA or embedded hardware</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative IoT methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IoT Technologies vs. Industry Applications</h2>
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
                      <td>Wi-Fi & BLE Integrated Microcontrollers</td>
                      <td>Smart Homes, Wearables, Healthcare IoT</td>
                      <td>Energy-efficient connectivity and data transfer</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ESP32, Arduino, Keil</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>LoRa & NB-IoT Modules</td>
                      <td>Agriculture, Logistics, Rural IoT Networks</td>
                      <td>Long-range low-power communication</td>
                      <td>B.Tech/M.Tech</td>
                      <td>LoRaWAN, NB-IoT modules, STM32</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Embedded IoT Gateways</td>
                      <td>Industrial Automation, Smart Cities</td>
                      <td>Edge-level data aggregation and processing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Raspberry Pi, FreeRTOS, AWS IoT</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>IoT Security Frameworks</td>
                      <td>Defense, Financial Systems, Healthcare</td>
                      <td>Secured data transmission and authentication</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ARM TrustZone, OpenSSL</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI-Integrated IoT Devices</td>
                      <td>Smart Healthcare, Robotics, Intelligent Cars</td>
                      <td>Intelligent real-time analytics and automation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow Lite, NVIDIA Jetson</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned IoT-enabled Embedded Devices Project Titles (2023–2025)</h2>
              <ul>
                <li>Energy-Efficient IoT Devices for Smart Healthcare Monitoring (2023)</li>
                <li>LoRaWAN-Enabled Embedded Systems for Precision Agriculture (2023)</li>
                <li>Secure IoT Gateways Using ARM Cortex-M and Cryptographic Extensions (2024)</li>
                <li>AI-Driven IoT Devices for Real-Time Industrial Automation (2024)</li>
                <li>Blockchain-Enabled IoT Security Framework for Embedded Devices (2025)</li>
                <li>6G-Integrated IoT Devices for Ultra-Low Latency Applications (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in academic and industrial project development support.
              </p>
              <p>
                Specializing in IEEE-aligned IoT, embedded systems, and advanced technology domains, we ensure that every IoT-enabled Embedded Devices project—whether B.Tech, M.Tech, or Ph.D.—meets international research benchmarks while offering real-world industrial applications.
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

export default ECEIoTEnabledEmbeddedDevicesProjectDevelopmentCenter;