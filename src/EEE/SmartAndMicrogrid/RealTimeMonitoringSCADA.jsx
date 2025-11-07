import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Real-Time Monitoring & SCADA Project Development Center offer?",
    answer: "Narpavi Research Institute’s Real-Time Monitoring & SCADA Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned projects (2023–2025) on SCADA system design, IoT-enabled monitoring, predictive fault detection, and intelligent control for smart grids and microgrids."
  },
  {
    question: "What types of SCADA and Monitoring projects are supported?",
    answer: "We support B.Tech projects (IoT-enabled SCADA dashboards and sensors), M.Tech projects (AI-based predictive fault detection, cloud-integrated SCADA), and Ph.D. projects (deep learning-based intelligent SCADA security, HIL testing, patents) for industrial, commercial, and smart grid applications."
  },
  {
    question: "Which technologies are used in SCADA and monitoring project development?",
    answer: "We use MATLAB/Simulink, LabVIEW, Python, PSIM, FPGA/DSP controllers, IoT protocols (MQTT, Modbus, Zigbee), cloud platforms, as well as TensorFlow and PyTorch for predictive monitoring and adaptive control algorithms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025), focusing on SCADA design, IoT security, predictive monitoring systems, adaptive AI-assisted fault detection, and standards for reliable industrial automation."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We provide full IEEE-topic mentoring, system simulation & modeling, IoT-secure prototyping, hardware validation, technical report documentation, and guidance for IEEE/Scopus/SCI publications."
  }
];

const EEERealtimeMonitoringSCADAProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Column: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Real-Time Monitoring Projects</li>
              <li>SCADA System Projects</li>
              <li>IEEE Smart Grid Projects 2023–2025</li>
              <li>B.Tech SCADA Control Projects</li>
              <li>M.Tech AI-Based Monitoring</li>
              <li>Ph.D IoT-Enabled SCADA Systems</li>
              <li>Narpavi Research Institute</li>
              <li>Predictive Fault Detection Research</li>
              <li>Industrial SCADA Systems</li>
              <li>Smart Grid Monitoring Projects</li>
            </ul>
          </div>

          {/* 📑 Center Column: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Real-Time Monitoring & SCADA – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Real-Time Monitoring & SCADA Project Development Center, helping scholars develop IEEE-aligned (2023–2025) solutions in real-time monitoring, predictive fault detection, SCADA dashboards, IoT sensors, and automated control.</p>
              <p>Students gain both theoretical and hands-on expertise in SCADA modeling, FPGA/IoT prototyping, predictive analytics, cloud-enabled monitoring, and AI-assisted adaptive control strategies.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Real-Time Monitoring & SCADA Project Development</h2>
              <ul>
                <li>Concepts of SCADA architecture, IoT-enabled sensing, real-time monitoring</li>
                <li>IEEE studies (2023–2025) in automation, predictive maintenance</li>
                <li>Simulations: MATLAB/Simulink, LabVIEW, Python</li>
                <li>Performance analysis of monitoring, efficiency, fault detection</li>
                <li>Prototyping microcontroller/FPGA-based SCADA dashboards</li>
                <li>IoT-enabled adaptive monitoring demos</li>
                <li>IEEE-style reports and technical documentation</li>
              </ul>
              <p>Focus: basics of SCADA systems, IoT integration, hands-on student prototypes.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Real-Time Monitoring & SCADA Project Development</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) review of SCADA, AI-enabled monitoring</li>
                <li>AI/ML algorithms for predictive fault detection</li>
                <li>Multi-objective simulations: efficiency, reliability, automation</li>
                <li>FPGA/DSP SCADA prototypes with IoT integration</li>
                <li>Cloud-based monitoring dashboards for real-time reliability</li>
                <li>Research outputs formatted for IEEE publication</li>
              </ul>
              <p>Focus: advanced AI algorithms, simulations, and scalable validation for industrial applications.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Real-Time Monitoring & SCADA Project Development</h2>
              <ul>
                <li>Comprehensive IEEE reviews (2023–2025) for predictive SCADA monitoring</li>
                <li>Deep-learning adaptive fault prediction algorithms</li>
                <li>Blockchain & cybersecurity integration into SCADA frameworks</li>
                <li>IoT-enabled, HIL-tested real-time SCADA prototypes</li>
                <li>Industrial-standard resilient SCADA architecture design</li>
                <li>Patents, IEEE journals, and practical implementation standards</li>
              </ul>
              <p>Focus: cutting-edge predictive monitoring, secure resilient SCADA standards.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – SCADA Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SCADA System Design</td>
                      <td>Industrial/Utility Grids</td>
                      <td>Real-time acquisition & supervisory control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>Microgrids, Smart Campuses</td>
                      <td>Remote monitoring & analytics</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MQTT, Zigbee, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Predictive Fault Detection</td>
                      <td>Industrial SCADA</td>
                      <td>Anomaly detection & reliability boost</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Cloud-Based SCADA</td>
                      <td>Utility & Commercial Grids</td>
                      <td>Centralized analytics & remote secure access</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS, Azure IoT, Python</td>
                    </tr>
                    <tr>
                      <td>Adaptive Control & Automation</td>
                      <td>Industrial Plants</td>
                      <td>Load balancing & optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA/DSP, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Cybersecurity Integration</td>
                      <td>Utility Microgrids</td>
                      <td>Secure, encrypted SCADA channels</td>
                      <td>Ph.D.</td>
                      <td>Python (CryptoLibs), IoT Security Frameworks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an international hub for EEE project development. 
                Through the Real-Time Monitoring & SCADA Project Development Center, we train scholars in IEEE-based innovation, 
                SCADA dashboarding, AI-assisted monitoring, predictive analytics, and resilient control systems.
              </p>
              <p>
                Scholars gain end-to-end expertise in designing reliable and intelligent SCADA solutions ready for academic publishing 
                and industrial scaling.
              </p>
            </section>

            {/* ❓ FAQs */}
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
              
              {/* SEO Schema */}
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

          {/* 🔗 Right Column: Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
              <li><a href="/smart-metering-demand-response-project-development">Smart Metering & Demand Response</a></li>
              <li><a href="/grid-integration-of-renewables-project-development">Grid Integration of Renewables</a></li>
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage with Renewables</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EEERealtimeMonitoringSCADAProjectDevelopmentCenter;
