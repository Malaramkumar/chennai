import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Electric Vehicle Charging in Microgrids Project Development Center offer?",
    answer: "Narpavi Research Institute’s EV Charging in Microgrids Center supports B.Tech, M.Tech, and Ph.D. scholars in IEEE-aligned (2023–2025) projects on smart charging stations, microgrid integration, V2G frameworks, predictive load optimization, and renewable energy-based EV charging."
  },
  {
    question: "What types of EV charging projects are supported?",
    answer: "We support B.Tech projects (basic smart EV chargers and IoT-based charging monitoring), M.Tech projects (AI-assisted charging optimization and V2G integration), and Ph.D. projects (deep learning predictive charging, intelligent microgrid-V2G systems with renewable coordination)."
  },
  {
    question: "Which technologies are used in EV charging development?",
    answer: "Our stack includes MATLAB/Simulink, HOMER Pro, PSIM, Python, AI/ML frameworks (TensorFlow, PyTorch), FPGA/DSP prototyping, IoT protocols (MQTT, Modbus), and HIL (Hardware-in-the-loop) testing for EV-microgrid charging solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "All projects reference IEEE Transactions (2023–2025) covering EV charging optimization, V2G standards, secure communication protocols, renewable integration, and scalable grid-interfacing charging solutions."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We provide IEEE topic identification, charging system simulation & hardware prototyping, IoT integration, V2G testing, IEEE-style report documentation, and guidance for Scopus/SCI/IEEE publications."
  }
];

const EEEEVChargingMicrogridsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Column */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Electric Vehicle Charging Projects</li>
              <li>IEEE EV Charging Projects 2023–2025</li>
              <li>B.Tech Microgrid EV Projects</li>
              <li>M.Tech AI-Based EV Charging</li>
              <li>Ph.D V2G Microgrid Systems</li>
              <li>IoT-Based EV Monitoring</li>
              <li>Narpavi Research Institute</li>
              <li>Smart Charging Research</li>
              <li>Renewable Integrated EV Charging</li>
              <li>Predictive Load Management</li>
            </ul>
          </div>

          {/* 📑 Center Column */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>EV Charging in Microgrids – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the EV Charging in Microgrids Project Development Center, offering global scholars IEEE-aligned (2023–2025) research opportunities in smart EV charging, renewable integration, V2G frameworks, and predictive load optimization.</p>
              <p>Students gain hands-on experience with AI-optimized charging, IoT-enabled monitoring, simulation, hardware prototypes, and real-time adaptive charging management in microgrids.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech EV Charging in Microgrids Projects</h2>
              <ul>
                <li>Basics of EV charging systems and microgrid integration</li>
                <li>Study of IEEE papers (2023–2025) on V2G and smart charging</li>
                <li>Simulations with MATLAB, HOMER Pro, PSIM</li>
                <li>Performance testing for load management and charging efficiency</li>
                <li>FPGA/Microcontroller prototypes for small-scale smart chargers</li>
                <li>IoT-enabled chargers with real-time monitoring</li>
                <li>IEEE-style reports & presentations</li>
              </ul>
              <p>Focus: fundamentals, IoT-augmented smart chargers, student prototypes.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech EV Charging in Microgrids Projects</h2>
              <ul>
                <li>Literature review of IEEE Transactions (2023–2025) for EV-V2G research</li>
                <li>AI/ML-assisted predictive scheduling for energy-aware charging</li>
                <li>Simulations for efficiency, stability, and renewable integration</li>
                <li>FPGA/DSP charging prototyping with IoT dashboards</li>
                <li>Testing charging infrastructure for microgrid-scale deployment</li>
                <li>IEEE research outputs aligned with industry use cases</li>
              </ul>
              <p>Focus: predictive optimization, hybrid microgrids, experimental validation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. EV Charging in Microgrids Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) on V2G, predictive load management</li>
                <li>Deep learning architectures for adaptive EV charging</li>
                <li>Developing V2G predictive optimization frameworks</li>
                <li>IoT-enabled HIL-tested real-time charging systems</li>
                <li>Contributions toward IEEE/industry EV-charging standards</li>
                <li>Patents & IEEE journals</li>
              </ul>
              <p>Focus: innovative EV charging solutions with global impact and custom standardization.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – EV Charging in Microgrids vs. Industry Applications</h2>
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
                      <td>Smart EV Charging Algorithms</td>
                      <td>Microgrids, EV stations</td>
                      <td>Load balancing, peak shaving</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>Vehicle-to-Grid (V2G)</td>
                      <td>Renewables & Microgrids</td>
                      <td>Bidirectional flow, grid stability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, HOMER Pro</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled EV Chargers</td>
                      <td>Smart campuses, industries</td>
                      <td>Real-time monitoring, predictive load</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Renewable-Integrated Charging</td>
                      <td>Solar-Wind Microgrids</td>
                      <td>Efficient sustainable fueling</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>HOMER Pro, PSIM</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Based Load Forecasting</td>
                      <td>Industrial/Commercial</td>
                      <td>Predictive schedules</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Secure Communication Protocols</td>
                      <td>Utility-linked chargers</td>
                      <td>Encrypted and resilient comms</td>
                      <td>Ph.D.</td>
                      <td>Python (Crypto), IoT-sec frameworks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About Section */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a global leader in Electrical and Electronics Engineering project development. Through the EV Charging in Microgrids Project Development Center, we support global scholars from IEEE mentoring to prototyping and IEEE/SCI publishing guidance.</p>
              <p>Our scholars develop intelligent, scalable, and industry-ready systems connecting EVs, V2G, and renewable energies with microgrids.</p>
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
              
              {/* FAQ Schema for SEO */}
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

          {/* 🔗 Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
              <li><a href="/grid-integration-of-renewables-project-development">Grid Integration of Renewables</a></li>
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage with Renewables</a></li>
              <li><a href="/smart-metering-demand-response-project-development">Smart Metering & Demand Response</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EEEEVChargingMicrogridsProjectDevelopmentCenter;
