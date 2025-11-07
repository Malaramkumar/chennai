import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";


const faqs = [
  {
    question: "What services does the Machine Learning in Embedded Platforms Project Development Center offer?",
    answer: "Narpavi Research Institute’s Machine Learning in Embedded Platforms Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in TinyML, FPGA-based ML accelerators, and neuromorphic computing for autonomous vehicles, healthcare, and smart manufacturing."
  },
  {
    question: "What types of Machine Learning in Embedded Platforms projects are supported?",
    answer: "We support B.Tech projects (sensor-based ML, gesture recognition), M.Tech projects (FPGA-accelerated ML, edge AI), and Ph.D. projects (neuromorphic chips, federated learning) for applications in IoT, robotics, and defense."
  },
  {
    question: "Which technologies are used in Machine Learning in Embedded Platforms project development?",
    answer: "Our stack includes TensorFlow Lite, ARM Cortex-M, RISC-V, Xilinx Vivado, STM32, Arduino Nano, and neuromorphic platforms for ML model deployment and hardware acceleration."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like TinyML, FPGA-based ML, and neuromorphic computing, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware prototyping, ML model optimization, validation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEMachineLearningEmbeddedPlatformsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Machine Learning in Embedded Platforms</li>
              <li>TinyML Projects</li>
              <li>FPGA AI Accelerators</li>
              <li>IEEE Embedded AI Projects 2023–2025</li>
              <li>Edge AI Systems</li>
              <li>Neuromorphic Embedded Devices</li>
              <li>Low-Power ML Platforms</li>
              <li>Narpavi Research Institute Embedded AI</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Machine Learning in Embedded Platforms – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Machine Learning in Embedded Platforms – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in TinyML, FPGA-based ML accelerators, and neuromorphic computing for autonomous vehicles, healthcare, and smart manufacturing.
              </p>
              <p>
                With expertise in TensorFlow Lite, ARM Cortex-M, RISC-V, and Xilinx FPGA, we deliver innovative solutions for low-power, real-time, and secure embedded AI systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Machine Learning in Embedded Platforms Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational ML projects like sensor-based data processing and lightweight algorithm deployment, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Sensor-based ML using Arduino Nano or ESP32</li>
                <li>Implementation of lightweight classification/regression models</li>
                <li>Performance analysis for efficiency and accuracy</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical ML implementation, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Machine Learning in Embedded Platforms Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced edge AI and hardware-accelerated ML solutions.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>FPGA-accelerated ML inference using Xilinx Vivado</li>
                <li>Hybrid edge-cloud ML frameworks with TinyML</li>
                <li>Prototyping with ARM Cortex-M or STM32 platforms</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade embedded AI solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Machine Learning in Embedded Platforms Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in neuromorphic computing and federated learning.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of neuromorphic chips or federated learning systems</li>
                <li>Experimental validation with FPGA or ASIC platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative ML methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – ML Technologies vs. Industry Applications</h2>
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
                      <td>TensorFlow Lite for Microcontrollers</td>
                      <td>Smart IoT Devices, Healthcare Wearables</td>
                      <td>On-device ML inference with minimal resources</td>
                      <td>B.Tech/M.Tech</td>
                      <td>TensorFlow Lite, Arduino, ESP32</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Edge AI on ARM Cortex-M & RISC-V</td>
                      <td>Industrial Automation, Robotics</td>
                      <td>Real-time predictive analytics and control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Keil, RISC-V toolchain</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>FPGA-Based ML Accelerators</td>
                      <td>Autonomous Vehicles, Defense Systems</td>
                      <td>High-speed parallel ML computation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Xilinx Vivado, Vitis AI</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>TinyML Frameworks</td>
                      <td>Consumer Electronics, Smart Homes</td>
                      <td>Ultra-low power ML model execution</td>
                      <td>B.Tech/M.Tech</td>
                      <td>TensorFlow Lite, uTensor</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Neuromorphic Embedded Chips</td>
                      <td>Future AI Platforms, Cognitive Robotics</td>
                      <td>Brain-inspired adaptive decision-making</td>
                      <td>Ph.D.</td>
                      <td>Intel Loihi, Synopsys tools</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Machine Learning in Embedded Platforms Project Titles (2023–2025)</h2>
              <ul>
                <li>Lightweight Convolutional Neural Networks on Embedded IoT Devices (2023)</li>
                <li>FPGA-Based Acceleration of TinyML for Real-Time Anomaly Detection (2023)</li>
                <li>Secure Federated Learning for Edge-Embedded Systems (2024)</li>
                <li>Neuromorphic Embedded Platforms for Cognitive IoT Applications (2024)</li>
                <li>Low-Power ML Framework for RISC-V Edge Devices (2025)</li>
                <li>6G-Enabled Machine Learning Embedded Platforms for Smart Cities (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in advanced project development for embedded systems and AI-driven innovations.
              </p>
              <p>
                With unmatched expertise in IEEE-aligned domains, we empower B.Tech, M.Tech, and Ph.D. students to deliver breakthrough research in Machine Learning in Embedded Platforms, ensuring excellence in prototyping, simulation, implementation, and international publications.
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

export default ECEMachineLearningEmbeddedPlatformsProjectDevelopmentCenter;