import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Automotive Embedded Systems Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) research areas such as electric vehicles, autonomous driving systems, ADAS, vehicle energy management, FPGA/MCU-based ECUs, and IoT-enabled automotive control."
  },
  {
    question: "What types of projects are supported?",
    answer: "We support B.Tech projects (vehicle control prototypes, ECU design, CAN/LIN implementation), M.Tech projects (EV controllers, AI-assisted ADAS systems, autonomous navigation), and Ph.D. projects (deep learning autonomous driving, predictive energy management, patents, and IEEE publications)."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, Proteus, LabVIEW, Embedded C/C++, ARM Cortex, FPGA, RTOS (FreeRTOS, AUTOSAR), CAN/LIN communication protocols, IoT platforms, TensorFlow and PyTorch for AI in automotive systems."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are referenced from IEEE Transactions (2023–2025) on automotive embedded hardware, autonomous driving, energy management, ADAS, and smart vehicle networking to ensure international technical relevance."
  },
  {
    question: "What academic support is provided?",
    answer: "We offer end-to-end IEEE support: topic selection, embedded programming, ECU prototyping, IoT/AI integration, performance validation, IEEE-style reporting, and international publishing guidance."
  }
];

const EEEAutomotiveEmbeddedSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Automotive Embedded Systems Projects</li>
              <li>IEEE Automotive Research 2023–2025</li>
              <li>B.Tech Vehicle Control Systems</li>
              <li>M.Tech EV Embedded Systems</li>
              <li>Ph.D Autonomous Vehicle Control</li>
              <li>Narpavi Research Institute</li>
              <li>AI Automotive Embedded Systems</li>
              <li>Embedded ADAS Solutions</li>
              <li>Electric Vehicle Control Projects</li>
              <li>Robotics Automotive Embedded Systems</li>
            </ul>
          </div>

          {/* 📑 Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Automotive Embedded Systems – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Automotive Embedded Systems Project Development Center where B.Tech, M.Tech, and Ph.D. scholars explore IEEE-aligned (2023–2025) automotive research in EVs, ADAS, autonomous driving, vehicle energy management, and smart embedded vehicle systems.</p>
              <p>Our center emphasizes practical learning: scholars implement ECU prototypes, AI-assisted control systems, FPGA/ARM/RISC-V controllers, and IoT-enabled automotive data monitoring platforms with IEEE compliance.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Automotive Embedded Projects</h2>
              <ul>
                <li>Introduction to Embedded Vehicle ECUs and control architecture</li>
                <li>Study IEEE papers (2023–2025) in EV/ADAS concepts</li>
                <li>Simulation via MATLAB/Simulink, Proteus</li>
                <li>Microcontroller programming with RTOS for vehicle control</li>
                <li>Prototype CAN/LIN bus implementation in small-scale models</li>
                <li>IEEE-style report preparation & presentations</li>
              </ul>
              <p>Focus: basic ECU programming, embedded vehicle control, and IoT-based monitoring for cars & EVs.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Automotive Embedded Projects</h2>
              <ul>
                <li>IEEE Transactions review (2023–2025) in ADAS & EV systems</li>
                <li>AI-assisted adaptive cruise & autonomous navigation algorithms</li>
                <li>Multi-sensor fusion for LiDAR, radar, vision sensors</li>
                <li>Development of FPGA/ARM-based EV controllers</li>
                <li>IoT-based telemetry for predictive maintenance</li>
                <li>Research outputs in IEEE standard publishing format</li>
              </ul>
              <p>Focus: advanced embedded systems with energy-efficient EV control, ADAS, AI-integration.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Automotive Embedded Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) addressing EV research gaps</li>
                <li>Deep learning-driven autonomous decision-making</li>
                <li>Predictive maintenance algorithms for EV/Hybrid powertrains</li>
                <li>IoT-integrated laboratory and field prototypes with ECUs</li>
                <li>Patents and IEEE journal publications developing new standards</li>
              </ul>
              <p>Focus: innovative ADAS, predictive energy management, autonomous & connected cars with global impact.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Automotive Embedded Technologies</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microcontroller-Based Vehicle Control</td>
                      <td>ECUs, Engine, Braking</td>
                      <td>Real-time low-power sensor interfacing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, ARM Cortex, Proteus</td>
                    </tr>
                    <tr>
                      <td>FPGA-Based Automotive Systems</td>
                      <td>EV Controllers, AVs</td>
                      <td>Parallel high-speed deterministic control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA, Verilog, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Sensor Fusion & ADAS</td>
                      <td>Smart Vehicles</td>
                      <td>LiDAR, Radar, Vision integration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, ROS, Simulink</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Vehicle Control</td>
                      <td>Autonomous / ADAS vehicles</td>
                      <td>Predictive adaptive algorithms</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PyTorch, TensorFlow, ROS</td>
                    </tr>
                    <tr>
                      <td>CAN/LIN/Ethernet Networking</td>
                      <td>Automotive Communication</td>
                      <td>Robust low-latency ECU comms</td>
                      <td>B.Tech/M.Tech</td>
                      <td>AUTOSAR, Vector CAN tools</td>
                    </tr>
                    <tr>
                      <td>EV Powertrain & Energy Management</td>
                      <td>EVs, Hybrids</td>
                      <td>Motor & battery optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Simulink, dSPACE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a global leader in electronics & automotive embedded research. Through our Automotive Embedded Systems Center, we provide scholars worldwide IEEE-standard project guidance, prototyping labs, AI-assisted ECU/ADAS development, and publication mentorship.</p>
              <p>Students achieve practical expertise in intelligent, safe, and energy-efficient embedded vehicle systems bridging academic concepts with real-world automotive deployments.</p>
            </section>

            {/* ❓ FAQs (with Schema) */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
              
              <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity":faqs.map(ff=>({
                      "@type":"Question",
                      "name":ff.question,
                      "acceptedAnswer":{ "@type":"Answer", "text":ff.answer }
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
              <li><a href="/embedded-systems-project-development">Embedded Systems Projects</a></li>
              <li><a href="/real-time-operating-systems-project-development">Real-Time Operating Systems (RTOS)</a></li>
              <li><a href="/fpga-control-applications-project-development">FPGA-Based Control Applications</a></li>
              <li><a href="/iot-embedded-hardware-design-project-development">IoT-Embedded Hardware Design</a></li>
              <li><a href="/embedded-robotics-project-development">Embedded Systems for Robotics</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EEEAutomotiveEmbeddedSystemsProjectDevelopmentCenter;
