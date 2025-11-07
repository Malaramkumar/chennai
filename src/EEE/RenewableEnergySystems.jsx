import "./EEEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Renewable Energy Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Renewable Energy Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in solar, wind, fuel cell, and hybrid energy systems for applications in smart grids, rural electrification, and green mobility."
  },
  {
    question: "What types of renewable energy projects are supported?",
    answer: "We support B.Tech projects (solar PV MPPT, wind converters), M.Tech projects (hybrid microgrids, energy storage), and Ph.D. projects (AI-based forecasting, V2G integration) for applications in smart cities, industrial power, and sustainable transport."
  },
  {
    question: "Which technologies are used in renewable energy project development?",
    answer: "Our stack includes MATLAB/Simulink, HOMER, PVSyst, and embedded platforms like Arduino and Raspberry Pi for advanced renewable energy simulations and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like solar PV MPPT, hybrid microgrids, and AI-driven forecasting, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEERenewableEnergySystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Renewable Energy IEEE Projects 2023–2025</li>
              <li>Solar PV IEEE Projects</li>
              <li>Wind Energy IEEE Research</li>
              <li>Hybrid Renewable Microgrid IEEE Projects</li>
              <li>B.Tech Renewable Energy Projects</li>
              <li>M.Tech Sustainable Energy IEEE Projects</li>
              <li>Ph.D. Renewable Energy Thesis</li>
              <li>Hydrogen Fuel Cell IEEE Projects</li>
              <li>AI in Renewable Systems</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Renewable Energy Systems – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Renewable Energy Systems – Project Development Center, a dedicated hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in solar, wind, fuel cell, and hybrid energy systems.
              </p>
              <p>
                With expertise in MATLAB/Simulink, HOMER, and embedded platforms, we deliver innovative solutions for smart grids, rural electrification, and green mobility, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Renewable Energy Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational renewable energy projects like solar PV MPPT or wind energy converters, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>MATLAB/Simulink-based modeling of PV or wind systems</li>
                <li>Hardware prototypes of solar charge controllers or hybrid systems</li>
                <li>Performance analysis for efficiency and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical renewable energy systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Renewable Energy Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced renewable energy systems and industrial applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of hybrid microgrids or energy storage systems</li>
                <li>Hardware-in-the-loop testing with embedded platforms</li>
                <li>Integration with smart grids or EVs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade renewable energy solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Renewable Energy Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in renewable energy with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of hybrid grids or V2G systems</li>
                <li>Experimental validation for AI-driven forecasting or hydrogen storage</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative renewable designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Renewable Energy Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Domain</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Solar PV with MPPT</td>
                      <td>Rooftop Solar, EV Charging Stations</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PVSyst</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Wind Energy Conversion Systems</td>
                      <td>Offshore & Onshore Wind Farms</td>
                      <td>B.Tech/M.Tech</td>
                      <td>HOMER, MATLAB/Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Hybrid Renewable Microgrids</td>
                      <td>Rural Electrification, Smart Cities</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, GridLab-D</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Fuel Cell & Hydrogen Systems</td>
                      <td>Green Mobility, Power Backup</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Energy Storage Integration</td>
                      <td>Grid Stabilization, Battery Management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>HOMER, MATLAB/Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI & IoT for Renewable Forecasting</td>
                      <td>Smart Grids, Predictive Maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, AWS IoT</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>V2G (Vehicle-to-Grid) Integration</td>
                      <td>Electric Vehicles, Smart Grid Services</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PLECS</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Renewable Energy Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based MPPT Techniques for Solar PV Systems (2023)</li>
                <li>Smart Microgrid Design with Solar-Wind Hybrid Systems (2024)</li>
                <li>Hydrogen Fuel Cell Integration for Green Transportation (2025)</li>
                <li>Blockchain-Enabled Renewable Energy Trading in Smart Grids (2024)</li>
                <li>IoT-Based Monitoring and Control of Hybrid Energy Systems (2023)</li>
                <li>Vehicle-to-Grid (V2G) Integration for Smart Cities (2025)</li>
                <li>Energy Storage Optimization using AI-Enabled Controllers (2024)</li>
                <li>Predictive Renewable Forecasting with Machine Learning Models (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute leads innovation in Renewable Energy Systems research and project development. Through its Renewable Energy Systems – Project Development Center, the institute provides world-class simulation labs, prototyping facilities, domain expertise, and IEEE publication support.
              </p>
              <p>
                By aligning every project with IEEE Transactions (2023–2025), the institute ensures scholars create impactful renewable energy solutions for global challenges.
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
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/biomedical-electronics-project-development">Biomedical Electronics Project Development</a></li>
              <li><a href="/communication-systems-project-development">Communication Systems Project Development</a></li>
              <li><a href="/control-systems-robotics-project-development">Control Systems & Robotics Project Development</a></li>
              <li><a href="/cryptography-security-project-development">Cryptography & Security Project Development</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
              <li><a href="/iot-project-development">IoT Project Development</a></li>
              <li><a href="/signal-processing-project-development">Signal Processing Project Development</a></li>
              <li><a href="/satellite-space-communication-project-development">Satellite & Space Communication Project Development</a></li>
              <li><a href="/vlsi-design-embedded-systems-project-development">VLSI Design & Embedded Systems Project Development</a></li>
              <li><a href="/wireless-sensor-networks-project-development">Wireless Sensor Networks Project Development</a></li>
              <li><a href="/power-systems-project-development">Power Systems Project Development</a></li>
              <li><a href="/electrical-machines-project-development">Electrical Machines Project Development</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEERenewableEnergySystemsProjectDevelopmentCenter;