import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the IoT-Embedded Hardware Design Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) areas such as IoT hardware design, embedded programming, sensor integration, wireless communication, AI-assisted analytics, and secure cloud integration."
  },
  {
    question: "What types of IoT-Embedded Hardware projects are supported?",
    answer: "We support B.Tech projects (microcontroller-based IoT prototypes with sensors/actuators), M.Tech projects (AI-enabled IoT analytics, secure communication, embedded prototyping), and Ph.D. projects (deep learning-driven IoT designs, scalable IoT architectures, publications & patents)."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "Microcontrollers (ARM/PIC/AVR/ESP32), Proteus, Arduino IDE, Embedded C/C++, MATLAB/Simulink, IoT platforms (MQTT, AWS IoT, ThingSpeak), PCB design tools, and AI frameworks like TensorFlow & PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects follow IEEE Transactions (2023–2025) addressing IoT hardware, embedded architectures, wireless protocols (LoRa, Zigbee, Bluetooth, 5G), secure data communication, edge analytics, and industrial IoT benchmarks."
  },
  {
    question: "What academic support is provided?",
    answer: "Full support: IEEE topic identification, embedded firmware coding, IoT prototyping, real-time testing with sensors & wireless modules, IEEE-style projects reports, and publishing guidance for IEEE/Scopus/SCI Journals."
  }
];

const EEEIoTEmbeddedHardwareDesignProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>IoT Embedded Hardware Projects</li>
              <li>IEEE IoT Research 2023–2025</li>
              <li>B.Tech IoT Devices</li>
              <li>M.Tech Smart IoT Systems</li>
              <li>Ph.D AI-Assisted IoT Hardware</li>
              <li>Narpavi Research Institute</li>
              <li>Sensor Integration IoT Projects</li>
              <li>Embedded IoT Design</li>
              <li>Cloud-Based IoT Monitoring</li>
              <li>Industrial IoT Prototyping</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>IoT-Embedded Hardware Design – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the IoT-Embedded Hardware Design Project Development Center, 
                preparing scholars worldwide for IEEE-aligned (2023–2025) research in embedded IoT architectures, wireless sensor platforms, 
                communication protocols, and AI-driven device analytics.
              </p>
              <p>
                Our scholars design IoT-enabled prototypes, integrate sensors/actuators with microcontrollers, develop firmware, 
                simulate embedded designs, and implement cloud-based IoT platforms for real-time monitoring and automation applications.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech IoT-Embedded Hardware Projects</h2>
              <ul>
                <li>Understand IoT embedded architectures & system design</li>
                <li>Study IEEE (2023–2025) IoT system innovations</li>
                <li>Firmware programming in C/C++, Python, MicroPython</li>
                <li>Prototyping with Arduino/ESP32, Proteus, Tinkercad</li>
                <li>IoT-enabled prototypes with cloud dashboards</li>
                <li>IEEE-style reports and technical presentations</li>
              </ul>
              <p>Focus: foundations in IoT firmware coding, hardware interfacing, and device-cloud integration.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IoT-Embedded Hardware Projects</h2>
              <ul>
                <li>Survey IEEE Transactions (2023–2025) for IoT integration</li>
                <li>AI-assisted IoT analytics and anomaly detection</li>
                <li>Simulation for wireless protocols & secure comms</li>
                <li>Advanced prototyping with microcontroller + IoT platforms</li>
                <li>IoT cloud platforms for industrial & healthcare deployment</li>
                <li>Research contributions validated under IEEE standards</li>
              </ul>
              <p>Focus: advanced embedded programming, secure IoT deployment, AI-driven real-time analytics.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D IoT-Embedded Hardware Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) in IoT hardware</li>
                <li>Advanced algorithms for predictive analytics on IoT edge devices</li>
                <li>Deep learning for industrial automation and hardware security</li>
                <li>IoT-enabled laboratory prototypes with wireless + cloud</li>
                <li>Experimental setup for predictive maintenance with real-time sensors</li>
                <li>Patents, IEEE journals, and standard contributions</li>
              </ul>
              <p>Focus: innovation & patents in edge computing, AI-based IoT systems, scalable & secure architectures.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IoT-Embedded Hardware vs. Applications</h2>
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
                      <td>IoT-Embedded Sensor Integration</td>
                      <td>Smart Homes, Healthcare, Industry</td>
                      <td>Real-time data, accuracy optimization</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino IDE, Proteus</td>
                    </tr>
                    <tr>
                      <td>Microcontroller IoT Hardware</td>
                      <td>Robotics & Automation</td>
                      <td>Low-power modular designs</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ESP32, PIC, ARM Cortex</td>
                    </tr>
                    <tr>
                      <td>Wireless Communication Protocols</td>
                      <td>Smart Cities, Industry IoT</td>
                      <td>ZigBee, LoRa, 5G integration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, NS-3</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Embedded Analytics</td>
                      <td>Manufacturing, Predictive Maintenance</td>
                      <td>Edge AI, anomaly detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow Lite, PyTorch</td>
                    </tr>
                    <tr>
                      <td>IoT PCB Prototyping</td>
                      <td>IoT Wearables/Smart Energy</td>
                      <td>Compact modular hardware</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Altium, KiCAD</td>
                    </tr>
                    <tr>
                      <td>Cloud-Based IoT Integration</td>
                      <td>Infrastructure & Remote Monitoring</td>
                      <td>Secure cloud data transfer</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>AWS IoT, Azure, ThingSpeak</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an internationally recognized hub for IoT-embedded systems research. 
                Through this Project Development Center, we help scholars gain IEEE-topic relevance, embedded hardware prototyping expertise,
                and IoT cloud integration techniques — preparing them for global research visibility and industrial collaborations.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((q, idx) => (
                  <details key={idx}>
                    <summary>{q.question}</summary>
                    <p>{q.answer}</p>
                  </details>
                ))}
              </div>

              {/* FAQ Schema SEO */}
              <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity":faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer": { "@type":"Answer","text":f.answer }
                    }))
                  })
                }} 
              />
            </section>
          </div>

          {/* 🔗 Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/arm-pic-avr-microcontroller-project-development">ARM/PIC/AVR Microcontroller Projects</a></li>
              <li><a href="/fpga-control-applications-project-development">FPGA-Based Control Applications</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
              <li><a href="/robotics-automation-project-development">Robotics & Automation</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Projects</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
};

export default EEEIoTEmbeddedHardwareDesignProjectDevelopmentCenter;
