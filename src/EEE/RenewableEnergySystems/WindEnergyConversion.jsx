import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";


const faqs = [
  {
    question: "What services does the Wind Energy Conversion Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Wind Energy Conversion Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in designing, modeling, and implementing IEEE-aligned (2023–2025) projects on wind turbine systems, energy conversion techniques, intelligent control, and grid integration strategies."
  },
  {
    question: "What types of Wind Energy projects are supported?",
    answer: "We support B.Tech projects (wind turbine design, simulation, IoT monitoring), M.Tech projects (AI-based turbine control, hybrid wind–solar systems), and Ph.D. projects (predictive maintenance, adaptive control, grid integration) for industrial, commercial, and utility-scale applications."
  },
  {
    question: "Which technologies are used in Wind Energy project development?",
    answer: "Our stack includes MATLAB/Simulink, PSIM, ANSYS, AI frameworks (TensorFlow, PyTorch), IoT platforms (MQTT), FPGA/DSP controllers, and HIL (hardware-in-the-loop) testbeds for turbine design and performance optimization."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering topics like turbine blade optimization, generator dynamics, smart converters, AI-assisted control, and hybrid renewable integration to ensure both academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We provide guidance starting from IEEE topic selection, simulation, hardware prototyping, real-time testing, IEEE-compliant documentation, and support for IEEE/Scopus/SCI indexed journal publications."
  }
];

const EEEWindEnergyConversionSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Wind Energy Projects</li>
              <li>IEEE Renewable Energy Projects 2023–2025</li>
              <li>B.Tech Wind Turbine Projects</li>
              <li>M.Tech AI-Based Wind Control</li>
              <li>Ph.D Hybrid Wind-Solar Systems</li>
              <li>IoT-Based Wind Monitoring</li>
              <li>Narpavi Research Institute</li>
              <li>High-Efficiency Wind Turbine Research</li>
              <li>Smart Grid Wind Integration</li>
              <li>Adaptive MPPT Wind Systems</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Wind Energy Conversion Systems – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Wind Energy Conversion Systems (WECS) Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance high-efficiency wind turbines, grid integration technologies, and hybrid renewable systems aligned with IEEE research (2023–2025).</p>
              <p>Our projects emphasize practical learning by combining simulation tools, hardware prototyping, IoT-enabled monitoring, AI-assisted control, and predictive maintenance for real-world renewable energy applications.</p>
            </section>

            {/* B.Tech Section */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Wind Energy Project Development</h2>
              <p>For undergraduate students, the cycle focuses on foundational knowledge and basic implementation.</p>
              <ul>
                <li>Understanding wind turbine design, generator types, and converters</li>
                <li>Study of IEEE publications (2023–2025) on WECS</li>
                <li>Simulation using MATLAB/Simulink, PSIM, and ANSYS</li>
                <li>Performance analysis (efficiency, torque, energy output)</li>
                <li>FPGA/Microcontroller prototypes for small-scale turbines</li>
                <li>IoT-based monitoring and data acquisition</li>
                <li>IEEE-style reports and project documentation</li>
              </ul>
              <p>The emphasis is on foundational design, real-time monitoring, and academic outputs.</p>
            </section>

            {/* M.Tech Section */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Wind Energy Project Development</h2>
              <p>For postgraduates, projects involve advanced modeling, AI-assisted control, and hybridization.</p>
              <ul>
                <li>Literature review of IEEE Transactions (2023–2025) on WECS</li>
                <li>AI/ML-assisted turbine control and predictive maintenance</li>
                <li>Adaptive MPPT and hybrid energy management</li>
                <li>Multi-objective torque control, efficiency optimization</li>
                <li>FPGA/DSP based real-time prototyping with IoT monitoring</li>
                <li>Utility-scale and microgrid testing scenarios</li>
                <li>IEEE-compliant papers and implementation validation</li>
              </ul>
              <p>The focus is on optimization and advanced research-driven solutions.</p>
            </section>

            {/* Ph.D Section */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Wind Energy Project Development</h2>
              <p>For doctoral researchers, the objective is groundbreaking contributions to hybrid renewable energy.</p>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) on turbine design, hybrid integration</li>
                <li>AI/ML/Deep learning adaptive energy management</li>
                <li>Hybrid wind-solar system development with predictive optimization</li>
                <li>HIL validation and lab-scale turbine prototyping</li>
                <li>IoT-enabled predictive analytics and real-time efficiency monitoring</li>
                <li>Patents, IEEE journal papers, and contribution to standards</li>
              </ul>
              <p>The emphasis is on innovation, patents, and international recognition.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Wind Energy Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Horizontal Axis Wind Turbines (HAWT)</td>
                      <td>Utility-scale wind farms, industrial power</td>
                      <td>Blade design optimization, efficiency improvement</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ANSYS</td>
                    </tr>
                    <tr>
                      <td>Vertical Axis Wind Turbines (VAWT)</td>
                      <td>Urban/small-scale applications</td>
                      <td>Compact design, low-noise adaptive control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>Wind Turbine Generator Systems</td>
                      <td>Grid-tied WECS plants</td>
                      <td>Permanent magnet, synchronous & induction machine optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Assisted Wind Control</td>
                      <td>Smart grids, automation</td>
                      <td>Load adaptation, predictive maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Monitoring & Diagnostics</td>
                      <td>Onshore/offshore wind farms</td>
                      <td>Real-time tracking, predictive fault detection</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, Python IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Hybrid Wind-Solar Systems</td>
                      <td>Microgrids, remote areas</td>
                      <td>Integrated storage, hybrid load balancing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PVSyst</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Wind Energy Conversion Systems Project Development Center, we provide comprehensive support to scholars worldwide.</p>
              <p>Our expertise spans IEEE topic selection, algorithm development, hardware prototyping, and publication guidance, ensuring students gain hands-on experience and global recognition.</p>
            </section>

            {/* FAQs */}
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

          {/* Right: Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/solar-photovoltaic-systems-project-development">Solar Photovoltaic Systems Project Development</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
              <li><a href="/hybrid-energy-storage-project-development">Hybrid Energy Storage Project Development</a></li>
              <li><a href="/iot-eee-project-development">IoT in EEE Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEWindEnergyConversionSystemsProjectDevelopmentCenter;
