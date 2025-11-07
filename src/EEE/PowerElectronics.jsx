import "./EEEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Power Electronics Project Development Center offer?",
    answer: "Narpavi Research Institute’s Power Electronics Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in power converters, inverters, and AI-driven control systems for applications in renewable energy, electric vehicles, and smart grids."
  },
  {
    question: "What types of power electronics projects are supported?",
    answer: "We support B.Tech projects (DC–DC converters, single-phase inverters), M.Tech projects (multilevel inverters, SiC/GaN devices), and Ph.D. projects (AI-controlled converters, solid-state transformers) for applications in EVs, aerospace, and industrial automation."
  },
  {
    question: "Which technologies are used in power electronics project development?",
    answer: "Our stack includes MATLAB/Simulink, PSIM, PLECS, and embedded platforms like Arduino and Raspberry Pi for advanced power electronics simulations and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like multilevel inverters, wireless power transfer, and AI-driven control, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEPowerElectronicsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Power Electronics IEEE Projects 2023–2025</li>
              <li>DC–DC Converter Projects</li>
              <li>Multilevel Inverter IEEE Research</li>
              <li>B.Tech Power Electronics Projects</li>
              <li>M.Tech Renewable Energy Power Electronics</li>
              <li>Ph.D. IEEE Thesis Power Electronics</li>
              <li>Solid-State Drive Projects</li>
              <li>Wide Bandgap Device IEEE Projects</li>
              <li>AI in Power Electronics</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Power Electronics – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Power Electronics</strong> – Project Development Center is a specialized hub dedicated to the research, design, and development of power electronic converters, drives, and control systems. With the rapid advancements in renewable energy, electric vehicles, industrial automation, and smart grids, power electronics has become the backbone of modern electrical engineering.
              </p>
              <p>
                The Power Electronics – Project Development Center provides end-to-end support for B.Tech, M.Tech, and Ph.D. level research projects, ensuring IEEE-standard alignment in simulation, prototyping, testing, and IEEE publication assistance. Researchers and students benefit from expertise in DC–DC converters, multilevel inverters, solid-state drives, renewable integration, and AI-based control systems.
              </p>
              <p>
                Aligned with IEEE Transactions on Power Electronics, IEEE Transactions on Industrial Electronics, and IEEE Transactions on Energy Conversion (2023–2025), the Power Electronics – Project Development Center ensures projects meet both academic and industrial standards.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Power Electronics Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational power electronics projects like DC–DC converters or single-phase inverters, aligned with IEEE topics.
              </p>
              <ul>
                <li>Literature review and problem definition from IEEE-based topics (2023–2025)</li>
                <li>Simulation using MATLAB/Simulink, PSIM, or PLECS</li>
                <li>Hardware prototypes of converters or motor drives</li>
                <li>Performance analysis for efficiency and switching optimization</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical power electronics systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Power Electronics Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced converter topologies and industrial applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of multilevel inverters or SiC/GaN devices</li>
                <li>Hardware-in-the-loop testing with embedded platforms</li>
                <li>Integration with renewable energy or EVs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade power electronics solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Power Electronics Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in power electronics with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of hybrid converter systems</li>
                <li>Experimental validation for solid-state transformers or EV charging</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative converter designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Power Electronics Technologies vs. Applications</h2>
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
                      <td>DC–DC Converters</td>
                      <td>Solar PV Systems, EV Battery Charging</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSIM</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Multilevel Inverters</td>
                      <td>Renewable Energy, HVDC Transmission</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PLECS, MATLAB/Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Solid-State Drives</td>
                      <td>Industrial Automation, Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSIM, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Power Factor Correction (PFC)</td>
                      <td>Data Centers, Smart Appliances</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PLECS</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-Controlled Converters</td>
                      <td>Smart Manufacturing, EV Propulsion</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Wireless Power Transfer</td>
                      <td>EV Charging, Biomedical Implants</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, PSIM</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Wide Bandgap Devices (SiC/GaN)</td>
                      <td>High-Efficiency Converters, Aerospace</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PLECS, MATLAB/Simulink</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Power Electronics Project Titles (2023–2025)</h2>
              <ul>
                <li>Design and Control of Multilevel Inverters for Grid-Connected PV Systems (2023)</li>
                <li>AI-Based Predictive Control of DC–DC Converters in EV Charging Stations (2024)</li>
                <li>High-Efficiency SiC-Based DC–AC Converters for Aerospace Applications (2025)</li>
                <li>Wireless Power Transfer System for Dynamic EV Charging (2023)</li>
                <li>Solid-State Transformer Design for Smart Grid Applications (2024)</li>
                <li>Fault-Tolerant Multilevel Inverter for Industrial Drives (2025)</li>
                <li>GaN-Based Converters for High-Frequency Power Applications (2024)</li>
                <li>Adaptive Neuro-Fuzzy Control of Bidirectional Converters in Energy Storage Systems (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a premier research support organization offering IEEE-standard project development and publication services. Through its Power Electronics – Project Development Center, the institute provides simulation labs, prototyping facilities, and domain experts to support B.Tech, M.Tech, and Ph.D. scholars.
              </p>
              <p>
                By aligning every project with IEEE Transactions (2023–2025), Narpavi Research Institute ensures innovation, quality, and global publication standards.
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEPowerElectronicsProjectDevelopmentCenter;