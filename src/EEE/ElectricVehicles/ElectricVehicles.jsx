import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Electric Vehicles Project Development Center offer?",
    answer: "Narpavi Research Institute’s Electric Vehicles Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in EV motor drives, battery management systems, wireless charging, and V2G integration for electric vehicle applications."
  },
  {
    question: "What types of electric vehicle projects are supported?",
    answer: "We support B.Tech projects (motor control, IoT charging stations), M.Tech projects (BMS, V2G systems), and Ph.D. projects (AI-enabled BMS, autonomous EVs) for applications in EV traction and smart energy systems."
  },
  {
    question: "Which technologies are used in electric vehicle project development?",
    answer: "Our stack includes MATLAB/Simulink, LabVIEW, Arduino, FPGA, and IoT platforms for advanced EV design, simulation, and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like BLDC motor control, wireless charging, and AI-driven EV diagnostics, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEElectricVehiclesProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Electric Vehicle IEEE Projects</li>
              <li>EV IEEE Projects</li>
              <li>Battery Management System IEEE Projects</li>
              <li>BLDC Motor IEEE Projects</li>
              <li>PMSM IEEE Projects</li>
              <li>Vehicle-to-Grid IEEE Projects</li>
              <li>Wireless Charging IEEE Projects</li>
              <li>Renewable EV Charging IEEE Projects</li>
              <li>B.Tech EV Projects</li>
              <li>M.Tech EV Projects</li>
              <li>Ph.D. EV Projects</li>
              <li>IEEE EV Publications</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Electric Vehicles (EV) – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Electric Vehicles (EV) – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in EV motor drives, battery management, power electronics, and smart charging systems.
              </p>
              <p>
                With expertise in MATLAB/Simulink, LabVIEW, and IoT platforms, we deliver innovative solutions for EV traction, renewable-powered charging, and AI-driven diagnostics, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Electric Vehicles Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational EV projects like motor control or IoT-enabled charging stations, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using MATLAB/Simulink or Arduino-based systems</li>
                <li>Hardware prototypes for BLDC/PMSM motor control or charging stations</li>
                <li>Performance analysis for efficiency and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical EV systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Electric Vehicles Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced EV technologies and industrial applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of BMS, V2G systems, or wireless charging</li>
                <li>Hardware prototyping with FPGA or LabVIEW</li>
                <li>Integration with smart grids or renewable energy systems</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade EV solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Electric Vehicles Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in EV technologies with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of AI-enabled BMS or V2G systems</li>
                <li>Experimental validation for autonomous EVs or solid-state batteries</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative EV designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Electric Vehicles Technologies vs. Applications</h2>
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
                      <td>Electric Motor Drives (BLDC, PMSM, IM)</td>
                      <td>EV Traction Systems, Electric Buses</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Arduino</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Battery Management Systems (BMS)</td>
                      <td>SOC Estimation, Thermal Management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Power Electronics in EVs</td>
                      <td>DC-DC Converters, Inverters</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSpice</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Wireless Charging Systems</td>
                      <td>Inductive Charging, Dynamic Charging</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Smart Charging & V2G</td>
                      <td>Vehicle-to-Grid, Demand Response</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, IoT Platforms</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Renewable Energy Powered EVs</td>
                      <td>Solar-Powered EV Charging</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Raspberry Pi</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI & IoT in EVs</td>
                      <td>Predictive Maintenance, Fleet Management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, AWS IoT</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Lightweight Materials & Design</td>
                      <td>Energy Efficiency, EV Prototyping</td>
                      <td>B.Tech/M.Tech</td>
                      <td>AutoCAD, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Autonomous & Connected EVs</td>
                      <td>ADAS, Self-Driving Cars</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, MATLAB/Simulink</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Electric Vehicles Project Titles (2023–2025)</h2>
              <ul>
                <li>BLDC Motor Drive Control for Low-Cost Electric Vehicles (2023)</li>
                <li>AI-Based Battery Management System for Electric Vehicles (2024)</li>
                <li>IoT-Enabled Smart Charging Station with Renewable Energy (2025)</li>
                <li>Vehicle-to-Grid (V2G) Integration for Energy Optimization (2024)</li>
                <li>Wireless Power Transfer System for Electric Vehicle Charging (2025)</li>
                <li>Multi-Level Inverter for Electric Vehicle Traction Drive (2023)</li>
                <li>Predictive Maintenance of Electric Vehicles using AI and IoT (2024)</li>
                <li>Solar-Powered Electric Vehicle Charging Infrastructure (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers world-class research support in Electric Vehicle (EV) projects for B.Tech, M.Tech, and Ph.D. scholars. The EV Project Development Center provides simulation support, battery testing, motor drive design, power electronics hardware, and IEEE-standard guidance.
              </p>
              <p>
                With expertise in EV traction, BMS, AI-enabled EV control, and V2G systems, the institute helps students and researchers create cutting-edge projects recognized by IEEE Transactions.
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
              <li><a href="/cryptography-security-project-development">Cryptography & Security Project Development</a></li>
              <li><a href="/iot-project-development">IoT Project Development</a></li>
              <li><a href="/signal-processing-project-development">Signal Processing Project Development</a></li>
              <li><a href="/satellite-space-communication-project-development">Satellite & Space Communication Project Development</a></li>
              <li><a href="/vlsi-design-embedded-systems-project-development">VLSI Design & Embedded Systems Project Development</a></li>
              <li><a href="/wireless-sensor-networks-project-development">Wireless Sensor Networks Project Development</a></li>
              <li><a href="/power-systems-project-development">Power Systems Project Development</a></li>
              <li><a href="/electrical-machines-project-development">Electrical Machines Project Development</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/smart-grid-microgrid-project-development">Smart Grid & Microgrid Project Development</a></li>
              <li><a href="/high-voltage-engineering-project-development">High Voltage Engineering Project Development</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
              <li><a href="/control-systems-project-development">Control Systems Project Development</a></li>
              <li><a href="/industrial-automation-project-development">Industrial Automation Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEElectricVehiclesProjectDevelopmentCenter;