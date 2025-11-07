import "./EEEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";


const faqs = [
  {
    question: "What services does the Electrical Machines Project Development Center offer?",
    answer: "Narpavi Research Institute’s Electrical Machines Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in motor design, control strategies, and energy-efficient systems for applications in electric vehicles, smart manufacturing, and renewable energy."
  },
  {
    question: "What types of electrical machines projects are supported?",
    answer: "We support B.Tech projects (induction motor analysis, BLDC drives), M.Tech projects (PMSM design, advanced control), and Ph.D. projects (AI-driven motor control, fault-tolerant drives) for applications in EVs, aerospace, and industrial automation."
  },
  {
    question: "Which technologies are used in electrical machines project development?",
    answer: "Our stack includes MATLAB/Simulink, ANSYS Maxwell, Motor-CAD, and embedded platforms like Arduino and Raspberry Pi for advanced electrical machine simulations and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like energy-efficient motors, fault-tolerant systems, and AI-driven control, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEElectricalMachinesProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Electrical Machines IEEE Projects 2023–2025</li>
              <li>Electrical Machines Project Development</li>
              <li>B.Tech Electrical Machines Projects</li>
              <li>M.Tech Motor Drive Research</li>
              <li>Ph.D. Electrical Machines IEEE Thesis Support</li>
              <li>Energy-Efficient Motor IEEE Projects</li>
              <li>Fault-Tolerant Motor Drives Research</li>
              <li>Permanent Magnet Motor IEEE Projects</li>
              <li>AI in Electrical Machines</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Electrical Machines – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Electrical Machines – Project Development Center, a dedicated hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in motor design, control strategies, and energy-efficient systems.
              </p>
              <p>
                With expertise in MATLAB/Simulink, ANSYS Maxwell, and embedded platforms, we deliver innovative solutions for electric vehicles, smart manufacturing, and renewable energy, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Electrical Machines Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational electrical machines projects like DC motor analysis or BLDC drives, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem identification and literature review from IEEE-based topics (2023–2025)</li>
                <li>Simulation using MATLAB/Simulink, ANSYS Maxwell, or Motor-CAD</li>
                <li>Prototype models of DC motors or induction machines</li>
                <li>Performance analysis for loss minimization and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical machine systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Electrical Machines Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced machine design and control strategies.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Finite element analysis and advanced control algorithms (FOC, DTC)</li>
                <li>Hardware-in-the-loop testing with embedded platforms</li>
                <li>Integration with renewable systems or EVs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade machine solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Electrical Machines Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in electrical machines with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and hybrid optimization techniques</li>
                <li>Experimental validation for high-speed or fault-tolerant systems</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative motor designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Electrical Machines Technologies vs. Applications</h2>
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
                      <td>Induction & Synchronous Machines</td>
                      <td>Power Plants, Industrial Drives</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ANSYS Maxwell</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Permanent Magnet Synchronous Motors</td>
                      <td>Electric Vehicles, Aerospace</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Motor-CAD, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Switched Reluctance Motors</td>
                      <td>Renewable Energy, High-performance Drives</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Brushless DC Machines</td>
                      <td>Consumer Appliances, Wind Energy</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Motor-CAD</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-Controlled Drives</td>
                      <td>Smart Factories, Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Fault-Tolerant Machines</td>
                      <td>Railways, Aviation, Military</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, Simulink</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Energy-Efficient Motor Design</td>
                      <td>EV Industry, Industrial Automation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Motor-CAD, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Electrical Machines Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Fault Diagnosis in Induction Machines for Smart Manufacturing (2023)</li>
                <li>Design and Optimization of Permanent Magnet Synchronous Motor for EV Applications (2024)</li>
                <li>Energy-Efficient Brushless DC Motor Drives with IoT Integration (2025)</li>
                <li>Direct Torque Control of Switched Reluctance Motors using Fuzzy Logic (2023)</li>
                <li>Finite Element Analysis of High-Speed Induction Motors for Aerospace Applications (2024)</li>
                <li>AI-Enhanced Predictive Maintenance of Electrical Machines in Industry 4.0 (2025)</li>
                <li>Sensorless Control of PMSM Drives using Deep Learning Algorithms (2024)</li>
                <li>Design and Testing of Fault-Tolerant Motor Drives for Railway Applications (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized research support center that provides academic and industrial project development services across multiple EEE domains. With expertise in Electrical Machines, the institute offers simulation labs, hardware facilities, domain experts, and IEEE-aligned methodologies to support students and researchers.
              </p>
              <p>
                With access to IEEE Transactions (2023–2025), we ensure every project meets international research and industry relevance.
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEElectricalMachinesProjectDevelopmentCenter;