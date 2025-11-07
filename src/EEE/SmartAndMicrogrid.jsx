import "./EEEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Smart Grid & Microgrid Project Development Center offer?",
    answer: "Narpavi Research Institute’s Smart Grid & Microgrid Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in smart energy management, renewable integration, and AI-driven grid intelligence for applications in smart cities, rural electrification, and industrial power systems."
  },
  {
    question: "What types of smart grid and microgrid projects are supported?",
    answer: "We support B.Tech projects (smart meters, microgrid prototypes), M.Tech projects (hybrid microgrids, blockchain energy trading), and Ph.D. projects (AI-based forecasting, cyber-secure grids) for applications in smart grids, decentralized energy, and EV integration."
  },
  {
    question: "Which technologies are used in smart grid and microgrid project development?",
    answer: "Our stack includes MATLAB/Simulink, PSCAD, OpenDSS, and IoT platforms like AWS IoT and Raspberry Pi for advanced smart grid simulations and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like smart meters, blockchain energy trading, and AI-driven load forecasting, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEESmartGridMicrogridProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Grid IEEE Projects 2023–2025</li>
              <li>Microgrid IEEE Projects</li>
              <li>Smart Energy Management Systems</li>
              <li>Blockchain in Smart Grid IEEE Projects</li>
              <li>IoT Smart Grid IEEE Research</li>
              <li>B.Tech Smart Grid Projects</li>
              <li>M.Tech Microgrid Projects</li>
              <li>Ph.D. Smart Energy IEEE Thesis</li>
              <li>AI in Smart Grid Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Smart Grid & Microgrid – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Smart Grid & Microgrid – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in smart energy management, renewable integration, and AI-driven grid intelligence.
              </p>
              <p>
                With expertise in MATLAB/Simulink, PSCAD, and IoT platforms, we deliver innovative solutions for smart cities, rural electrification, and industrial power systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Grid & Microgrid Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational smart grid and microgrid projects like smart meters or microgrid prototypes, aligned with IEEE topics.
              </p>
              <ul>
                <li>Fundamentals of smart grids and problem definition from IEEE-based topics (2023–2025)</li>
                <li>Modeling using MATLAB/Simulink, PSCAD, or OpenDSS</li>
                <li>Hardware prototypes of smart meters or microgrid systems</li>
                <li>Performance analysis for energy efficiency and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical smart grid systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Grid & Microgrid Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced smart grid and microgrid applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of hybrid microgrids or blockchain-based energy trading</li>
                <li>Hardware-in-the-loop testing with IoT/edge computing</li>
                <li>Integration with renewable energy or smart cities</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade smart grid solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Smart Grid & Microgrid Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in smart grids with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of cyber-physical grids or V2G systems</li>
                <li>Experimental validation for AI-driven forecasting or blockchain trading</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative grid designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Smart Grid & Microgrid Technologies vs. Applications</h2>
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
                      <td>Smart Meters & AMI</td>
                      <td>Real-Time Billing, Energy Monitoring</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, OpenDSS</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Microgrid Design & Control</td>
                      <td>Campus Power, Rural Electrification</td>
                      <td>B.Tech/M.Tech</td>
                      <td>PSCAD, GridLab-D</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Renewable Energy Integration</td>
                      <td>Solar-Wind Hybrid Grids, Smart Cities</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, HOMER</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI/ML for Load Forecasting</td>
                      <td>Smart Energy Management, Grid Balancing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Blockchain for Energy Trading</td>
                      <td>Peer-to-Peer Renewable Trading</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Hyperledger, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Energy Storage with Smart Control</td>
                      <td>EV Charging, Battery-Supercapacitor Grids</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PLECS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>IoT & Edge Computing in Smart Grids</td>
                      <td>Real-Time Monitoring, Fault Detection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>AWS IoT, Raspberry Pi</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Cybersecurity in Smart Grids</td>
                      <td>Grid Protection, Data Security</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, Wireshark</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Smart Grid & Microgrid Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Smart Energy Management for Smart Grids (2023)</li>
                <li>Blockchain-Based Peer-to-Peer Energy Trading in Microgrids (2024)</li>
                <li>AI-Driven Load Forecasting for Renewable-Integrated Smart Grids (2025)</li>
                <li>Cybersecurity Framework for Next-Generation Smart Grids (2024)</li>
                <li>Vehicle-to-Grid (V2G) Energy Sharing in Smart Cities (2025)</li>
                <li>Smart Meter Data Analytics for Energy Demand Response (2023)</li>
                <li>Hybrid Renewable Microgrid Design with Energy Storage (2024)</li>
                <li>Resilient Smart Grid Operation under Extreme Weather Events (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute plays a leading role in developing Smart Grid & Microgrid solutions for academic and industrial applications. Through the Smart Grid & Microgrid – Project Development Center, the institute provides simulation facilities, prototyping support, domain expertise, and IEEE publication assistance.
              </p>
              <p>
                By aligning projects with IEEE Transactions (2023–2025), the institute empowers scholars to design sustainable and resilient power networks for the future.
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
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEESmartGridMicrogridProjectDevelopmentCenter;