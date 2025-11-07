import "./EEEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Control Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Control Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in classical, modern, and AI-assisted control systems for applications in smart grids, electric vehicles, and industrial automation."
  },
  {
    question: "What types of control systems projects are supported?",
    answer: "We support B.Tech projects (PID controllers, motor control), M.Tech projects (robust control, smart grid applications), and Ph.D. projects (AI-driven adaptive control, distributed control) for EEE applications in power systems and robotics."
  },
  {
    question: "Which technologies are used in control systems project development?",
    answer: "Our stack includes MATLAB/Simulink, PSCAD, LabVIEW, and embedded platforms like Arduino and FPGA for advanced control system design and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like model predictive control, fuzzy logic control, and adaptive control for smart grids, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware-in-the-loop testing, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEControlSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Control Systems IEEE Projects</li>
              <li>Adaptive Control IEEE Projects</li>
              <li>Robust Control IEEE Projects</li>
              <li>Fuzzy Logic IEEE Projects</li>
              <li>PID Control IEEE Projects</li>
              <li>Digital Control IEEE Projects</li>
              <li>Model Predictive Control IEEE Projects</li>
              <li>B.Tech Control IEEE Projects</li>
              <li>M.Tech Control IEEE Projects</li>
              <li>Ph.D. Control IEEE Thesis</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Control Systems – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Control Systems – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in classical, modern, and AI-assisted control systems for smart grids, electric vehicles, and industrial automation.
              </p>
              <p>
                With expertise in MATLAB/Simulink, PSCAD, and embedded platforms, we deliver innovative solutions for power system stability, intelligent robotics, and process optimization, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Control Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational control systems projects like PID controllers or motor speed control, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using MATLAB/Simulink or microcontroller-based systems</li>
                <li>Hardware prototypes for motor control or temperature regulation</li>
                <li>Performance analysis for stability and efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical control systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Control Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced control techniques and industrial applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of robust, adaptive, or nonlinear control systems</li>
                <li>Hardware-in-the-loop testing with embedded platforms</li>
                <li>Integration with smart grids or EV drive systems</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade control solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Control Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in control systems with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of AI-driven or distributed control</li>
                <li>Experimental validation for predictive or fault-tolerant control</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative control designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Control Systems Technologies vs. Applications</h2>
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
                      <td>Classical Control (PID, Lead-Lag)</td>
                      <td>Motor Drives, Process Control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Arduino</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Modern Control (State-Space)</td>
                      <td>Smart Grid, Power Systems Stability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Adaptive Control Systems</td>
                      <td>EV Powertrain, Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Robust & Nonlinear Control</td>
                      <td>High Voltage Power Electronics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Digital Control & Embedded Control</td>
                      <td>Microcontroller-Based Controllers</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, FPGA, Keil</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Smart Energy Forecasting, Electric Drives</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, Python</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Fuzzy & Neural Control</td>
                      <td>AI-Assisted Automation, Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Distributed Control Systems (DCS)</td>
                      <td>Industrial Automation, Power Plants</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>LabVIEW, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Control in Renewable Integration</td>
                      <td>Solar-Wind Power Management</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Control Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>MATLAB/FPGA-Based PID Controller for Power Electronics Converters (2023)</li>
                <li>Adaptive Control of Electric Vehicle Drive Systems (2024)</li>
                <li>AI-Enhanced Model Predictive Control for Smart Grid Load Balancing (2025)</li>
                <li>Fuzzy Logic-Based Control of Renewable Energy Integration (2023)</li>
                <li>Robust Nonlinear Control for High Voltage Engineering Applications (2024)</li>
                <li>Cloud-Enabled Distributed Control for Industrial Automation (2025)</li>
                <li>Intelligent Multi-Agent Control in Smart Microgrids (2024)</li>
                <li>Digital Twin-Based Predictive Control for Manufacturing Systems (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides specialized Control Systems research support for EEE projects at B.Tech, M.Tech, and Ph.D. levels. The institute offers MATLAB/Simulink-based design, hardware-in-the-loop (HIL) testing, and IEEE publication guidance.
              </p>
              <p>
                Through the Control Systems – Project Development Center, students and scholars gain access to industry-grade tools and IEEE-aligned project mentoring, ensuring global recognition of their research outputs.
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEControlSystemsProjectDevelopmentCenter;