import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Embedded Systems for Robotics Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. students working on IEEE-aligned (2023–2025) projects such as microcontroller/FPGA-based robotics, AI-assisted robotic planning, sensor fusion, real-time embedded control, and IoT-enabled robotics integration."
  },
  {
    question: "What types of robotics projects are supported?",
    answer: "We support B.Tech projects (robotic prototypes with microcontrollers, sensors, actuators), M.Tech projects (AI-assisted path planning, multi-sensor fusion, obstacle avoidance), and Ph.D. projects (deep-learning robotics, autonomous decision-making, patents, and IEEE publications)."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "Arduino, ESP32, ARM Cortex, FPGA boards, MATLAB/Simulink, Proteus, ROS (Robot Operating System), IoT platforms (MQTT, ThingSpeak), TensorFlow/PyTorch for AI-assisted robotics applications."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "We reference IEEE Transactions (2023–2025) for robotics embedded systems, real-time control, AI-assisted decision-making, and IoT/FPGA-based autonomous systems. All projects prepare IEEE-format documentation."
  },
  {
    question: "What academic support is provided?",
    answer: "We assist with IEEE topic selection, embedded hardware coding, AI and IoT integration, prototyping, real-time robotics control implementation, IEEE-style report preparation, and guidance for IEEE/Scopus/SCI publications."
  }
];

const EEEEmbeddedRoboticsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Embedded Systems Robotics Projects</li>
              <li>IEEE Robotics Research 2023–2025</li>
              <li>B.Tech Robotic Embedded Systems</li>
              <li>M.Tech AI Robotics Control</li>
              <li>Ph.D Autonomous Embedded Systems</li>
              <li>Narpavi Research Institute</li>
              <li>IoT Robotics Systems</li>
              <li>Sensor Fusion Embedded Projects</li>
              <li>Real-Time Robotics Control</li>
              <li>Industrial Robotics Embedded Solutions</li>
            </ul>
          </div>

          {/* 📑 Center Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Embedded Systems for Robotics – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> introduces the Embedded Systems for Robotics Project Development Center, 
                offering scholars IEEE-aligned (2023–2025) practical training and research opportunities in robotics automation, 
                sensor fusion, FPGA-based motion control, AI-assisted embedded systems, and autonomous robotics.
              </p>
              <p>
                Students design robotic prototypes, implement real-time controllers, integrate IoT, and develop AI-based motion planning for drones, humanoids, industrial & service robots.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Robotics Embedded Projects</h2>
              <ul>
                <li>Microcontroller programming for robotic systems</li>
                <li>IEEE (2023–2025) robotics embedded research</li>
                <li>Simulation in MATLAB/Simulink & Proteus</li>
                <li>Prototypes with sensors, actuators, controllers</li>
                <li>Testing for motion control accuracy & obstacle avoidance</li>
                <li>Reports in IEEE format & technical evaluation</li>
              </ul>
              <p>Focus: fundamental embedded robotics development & hardware control basics.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Robotics Embedded Projects</h2>
              <ul>
                <li>Literature review of IEEE Transactions robotics studies (2023–2025)</li>
                <li>AI-assisted path planning and predictive control</li>
                <li>Multi-sensor fusion algorithms for adaptive robotics</li>
                <li>Embedded system integration with robots/drones</li>
                <li>Test performance in real-time tasks with AI-based monitoring</li>
                <li>Publish IEEE-conformant robotics reports</li>
              </ul>
              <p>Focus: advanced robotics automation, AI + embedded system design, experimental validations.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Robotics Embedded Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) robotics research gaps</li>
                <li>AI/Deep learning models for robotic motion & environmental adaptability</li>
                <li>IoT-embedded controllers for real-time robotics</li>
                <li>Experimental robotics prototypes with sensor fusion, adaptive motion control</li>
                <li>Patents + IEEE journal publications</li>
              </ul>
              <p>Focus: next-gen robotics research → intelligent, autonomous, and adaptive robotic systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Robotics Embedded Systems vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microcontroller Control</td>
                      <td>Industrial & Mobile Robots</td>
                      <td>Low-power real-time motion</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino IDE, C/C++</td>
                    </tr>
                    <tr>
                      <td>FPGA Robotics Systems</td>
                      <td>Drones, Automation</td>
                      <td>High-speed deterministic control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>VHDL, Verilog, Xilinx</td>
                    </tr>
                    <tr>
                      <td>Sensor Integration</td>
                      <td>Autonomous Systems</td>
                      <td>Multi-sensor data fusion</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Motion Planning</td>
                      <td>Autonomous Vehicles, Humanoids</td>
                      <td>Path optimization, adaptive behavior</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch + ROS</td>
                    </tr>
                    <tr>
                      <td>IoT Robotics Systems</td>
                      <td>Smart Factories, Industry IoT</td>
                      <td>IoT monitoring + cloud robotics</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms</td>
                    </tr>
                    <tr>
                      <td>Embedded Vision & Control</td>
                      <td>Inspection Robots, Navigation</td>
                      <td>Image processing + object detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OpenCV, Embedded Python</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a globally recognized hub for IEEE-driven robotics research. This center provides end-to-end support in AI, embedded hardware, real-time robotics, IoT integration, and IEEE publication guidance for scholars worldwide.</p>
              <p>Our scholars achieve academic excellence and industrial relevance, implementing adaptive robotic controllers, robotic IoT integration, and autonomous embedded systems.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item, i) => (
                  <details key={i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>

              {/* SEO JSON-LD */}
              <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity":faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer":{
                        "@type":"Answer",
                        "text":f.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* 🔗 Right Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/arm-pic-avr-microcontroller-project-development">ARM/PIC/AVR Microcontroller Projects</a></li>
              <li><a href="/fpga-control-applications-project-development">FPGA-Based Control Applications</a></li>
              <li><a href="/iot-embedded-hardware-design-project-development">IoT-Embedded Hardware Design</a></li>
              <li><a href="/real-time-operating-systems-project-development">Real-Time Operating Systems (RTOS)</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Projects</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEEEmbeddedRoboticsProjectDevelopmentCenter;
