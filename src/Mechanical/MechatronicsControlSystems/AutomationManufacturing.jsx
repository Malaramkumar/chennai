import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Automation in Manufacturing Project Development Center offer?",
    answer: "Narpavi Research Institute’s Automation in Manufacturing Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on industrial robotics, IoT-enabled automation, AI-driven predictive maintenance, digital twin technology, and cybersecure smart factories for Industry 4.0 applications."
  },
  {
    question: "What types of Automation in Manufacturing projects are supported?",
    answer: "We support B.Tech projects (PLC-based automation, robotic prototypes), M.Tech projects (AI-driven process control, IoT integration), and Ph.D. projects (digital twins, blockchain-based automation, cybersecure IIoT) for applications in automotive, aerospace, and smart manufacturing."
  },
  {
    question: "Which tools and technologies are used in Automation in Manufacturing projects?",
    answer: "Our stack includes MATLAB, Simulink, Automation Studio, Proteus, Python, AI frameworks (TensorFlow, Keras), IoT platforms (AWS IoT, ThingSpeak), and hardware like Arduino, Raspberry Pi, PLCs, and SCADA systems for simulation, prototyping, and real-time control."
  },
  {
    question: "How are Automation in Manufacturing projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Industrial Electronics and Automation Science, focusing on smart manufacturing, IoT integration, and Industry 4.0, aligned with IEEE/IEC standards."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, AI/IoT integration, hardware prototyping, documentation, and support for IEEE/Scopus/Elsevier journal publications and patents."
  }
];

const MEAutomationInManufacturingProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      <Sidebar />
      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Automation in Manufacturing IEEE Projects 2023–2025</li>
              <li>Industry 4.0 Automation Projects</li>
              <li>Smart Factory IoT Projects</li>
              <li>AI-Driven Manufacturing Automation</li>
              <li>PLC & SCADA Student Projects</li>
              <li>Predictive Maintenance IEEE Projects</li>
              <li>Digital Twin Automation Projects</li>
              <li>Robotics in Manufacturing Projects</li>
              <li>Ph.D. Automation Projects</li>
              <li>Narpavi Research Institute Industry 4.0 Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Automation in Manufacturing – Project Development Support</h1>

            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Automation in Manufacturing Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on industrial robotics, IoT-enabled automation, AI-driven predictive maintenance, digital twin technology, and cybersecure smart factories.
              </p>
              <p>
                Our projects leverage MATLAB, Automation Studio, Python, AI, and IoT platforms to address challenges in smart manufacturing, production efficiency, and Industry 4.0, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Automation in Manufacturing</h2>
              <ul>
                <li><strong>Efficiency</strong>: Reduces downtime by 25% and improves energy efficiency by 18% (IEEE 2024).</li>
                <li><strong>Precision</strong>: Achieves 30% reduction in production errors via digital twins.</li>
                <li><strong>Cost-Effectiveness</strong>: Minimizes labor and prototyping costs.</li>
                <li><strong>Smart Systems</strong>: IoT and AI enable real-time monitoring and predictive maintenance.</li>
                <li><strong>Industry 4.0</strong>: Drives autonomous and sustainable manufacturing.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Automation in Manufacturing Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational automation projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn industrial automation, robotics, and PLC control</li>
                <li>Simulate automation processes using MATLAB or Automation Studio</li>
                <li>Prototype pick-and-place robots or conveyor systems with Arduino/PLC</li>
                <li>Validate cycle time, accuracy, and throughput</li>
              </ul>
              <p>Example: Arduino-based conveyor belt automation prototype.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Automation in Manufacturing Project Development</h2>
              <p>For postgraduate students, projects focus on advanced automation challenges.</p>
              <ul>
                <li>Develop AI/ML models for predictive maintenance and process scheduling</li>
                <li>Integrate IoT and PLC/SCADA for smart factory automation</li>
                <li>Co-simulate with MATLAB and Python for real-time monitoring</li>
                <li>Benchmark against IEEE/ISO standards for reliability</li>
              </ul>
              <p>Example: IoT-enabled predictive maintenance for robotic assembly.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Automation in Manufacturing Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge automation research.</p>
              <ul>
                <li>Identify gaps in digital twins, blockchain, or cybersecure IIoT</li>
                <li>Develop multi-agent simulations for smart manufacturing</li>
                <li>Implement smart factory prototypes with AI-driven robots</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Digital twin model for autonomous manufacturing optimization.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Advantages</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PLC & SCADA Systems</td>
                      <td>Automotive, Chemical Plants</td>
                      <td>Reliable, real-time monitoring</td>
                      <td>High setup cost</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Industrial Robotics</td>
                      <td>Assembly Lines, Welding</td>
                      <td>Precision, reduced labor costs</td>
                      <td>Complex programming</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Automation</td>
                      <td>Smart Factories</td>
                      <td>Real-time data, efficiency</td>
                      <td>Data security</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI-Based Automation</td>
                      <td>Production Optimization</td>
                      <td>Intelligent decision-making</td>
                      <td>AI training complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Technology</td>
                      <td>Aerospace, Automotive</td>
                      <td>Predictive control, reduced prototypes</td>
                      <td>Data integration</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Blockchain in Manufacturing</td>
                      <td>Supply Chain Automation</td>
                      <td>Transparency, traceability</td>
                      <td>Implementation complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>PLC & SCADA Systems:</strong> Real-time industrial control.</li>
                <li><strong>Industrial Robotics:</strong> Precision in assembly and welding.</li>
                <li><strong>IoT-Enabled Automation:</strong> Real-time monitoring and predictive maintenance.</li>
                <li><strong>AI-Based Automation:</strong> Intelligent process optimization.</li>
                <li><strong>Digital Twin Technology:</strong> Simulation-driven manufacturing.</li>
                <li><strong>Blockchain in Manufacturing:</strong> Transparent supply chain automation.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – AI-Enabled Smart Factory</h2>
              <p>
                A 2024 IEEE study showed an AI-integrated automotive factory reduced downtime by 25%, improved energy efficiency by 18%, and cut production errors by 30% using digital twin technology and IoT-based monitoring.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Smart Factory Automation for Real-Time Production Monitoring (2023)</li>
                <li>AI-Based Predictive Maintenance in Industrial Automation Systems (2023)</li>
                <li>Digital Twin Modeling of Automated Manufacturing Processes (2024)</li>
                <li>PLC-SCADA Integrated Automation for Smart Production Lines (2024)</li>
                <li>Blockchain-Enabled Supply Chain Automation in Manufacturing (2024)</li>
                <li>Autonomous Robotic Assembly Using AI-PID Controllers (2025)</li>
                <li>Smart Conveyor and Material Handling System with IoT Integration (2025)</li>
                <li>Multi-Agent Control Systems for Next-Gen Industry 4.0 Plants (2025)</li>
                <li>Cybersecure Industrial IoT Framework for Smart Factories (2025)</li>
                <li>AI-Assisted Robotic Welding and Quality Control in Manufacturing (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Industry 4.0 & Beyond:</strong> Cyber-physical systems for autonomy.</li>
                <li><strong>Digital Twin Factories:</strong> Predictive modeling for zero defects.</li>
                <li><strong>Collaborative Robots (Cobots):</strong> Safe human-robot collaboration.</li>
                <li><strong>AI-Driven Quality Assurance:</strong> Autonomous error detection.</li>
                <li><strong>Cybersecurity in Smart Manufacturing:</strong> Secure IIoT systems.</li>
                <li><strong>Green Automation:</strong> Energy-efficient, carbon-neutral plants.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Automation in Manufacturing project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, Automation Studio, Python, AI, and IoT, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to smart factories, robotics, and sustainable manufacturing.
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
          <div className="MEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/mechatronics-control-systems-project-development">Mechatronics & Control Systems Project Development</a></li>
              <li><a href="/pid-advanced-control-systems-project-development">PID & Advanced Control Systems Project Development</a></li>
              <li><a href="/automotive-vehicle-engineering-project-development">Automotive & Vehicle Engineering Project Development</a></li>
              <li><a href="/electric-vehicle-design-control-project-development">Electric Vehicle Design & Control Project Development</a></li>
              <li><a href="/hybrid-vehicle-powertrains-project-development">Hybrid Vehicle Powertrains Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEAutomationInManufacturingProjectDevelopmentCenter;