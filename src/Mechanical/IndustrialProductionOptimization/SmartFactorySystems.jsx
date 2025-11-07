import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Smart Factory Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Smart Factory Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on IoT-enabled manufacturing, AI-driven predictive maintenance, digital twins, collaborative robotics, and cybersecurity for smart factories in automotive, aerospace, electronics, and pharmaceutical industries."
  },
  {
    question: "What types of Smart Factory Systems projects are supported?",
    answer: "We support B.Tech projects (IoT monitoring, robotics basics), M.Tech projects (AI-driven automation, digital twins), and Ph.D. projects (self-learning systems, blockchain-secured manufacturing) for applications in smart factories, logistics, and Industry 4.0/5.0."
  },
  {
    question: "Which tools and technologies are used in Smart Factory Systems projects?",
    answer: "Our stack includes MATLAB, Simulink, Python, Arduino, Raspberry Pi, cloud platforms, blockchain frameworks, AR/VR systems, and digital twin tools for simulation, prototyping, and automation."
  },
  {
    question: "How are Smart Factory Systems projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Industrial Informatics, Automation, and Systems Engineering, focusing on IoT, AI, digital twins, and cybersecurity, aligned with IEEE/IEC standards."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, documentation, and support for IEEE/Scopus/Elsevier journal publications and patents."
  }
];

const MESmartFactorySystemsProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      <Sidebar />
      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Factory IEEE Projects</li>
              <li>Industry 4.0 Project Topics</li>
              <li>IoT-Enabled Manufacturing Systems</li>
              <li>AI Predictive Maintenance Projects</li>
              <li>Digital Twin Student Projects</li>
              <li>Robotics and Automation in Factories</li>
              <li>Blockchain Manufacturing Projects</li>
              <li>Smart Grid Integration in Industries</li>
              <li>Industry 5.0 Student Research</li>
              <li>Narpavi Research Institute Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Smart Factory Systems – Project Development Support</h1>

            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Smart Factory Systems Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on IoT-enabled manufacturing, AI-driven predictive maintenance, digital twins, collaborative robotics, and cybersecurity for Industry 4.0 and 5.0.
              </p>
              <p>
                Our projects leverage MATLAB, Simulink, Python, IoT platforms, and cloud systems to address challenges in automotive, aerospace, electronics, and pharmaceutical industries, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-principles">
              <h2>Core Principles of Smart Factory Systems</h2>
              <ul>
                <li><strong>Interconnectivity:</strong> IoT devices and cloud-based monitoring.</li>
                <li><strong>Automation & Robotics:</strong> Autonomous systems for efficiency.</li>
                <li><strong>Digital Twin Technology:</strong> Real-time simulation of processes.</li>
                <li><strong>Predictive Maintenance:</strong> AI for fault detection and reliability.</li>
                <li><strong>Human–Machine Collaboration:</strong> Cobots and AI decision support.</li>
                <li><strong>Cybersecurity:</strong> Protecting industrial networks from threats.</li>
                <li><strong>Data-Driven Decision Making:</strong> Big data and cloud insights.</li>
                <li><strong>Sustainability:</strong> Green energy and eco-efficient operations.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-subtopics">
              <h2>Extended Subtopics for Student Projects</h2>
              <ul>
                <li>IoT-enabled production line monitoring</li>
                <li>AI-driven predictive maintenance</li>
                <li>Cloud-based manufacturing execution systems (MES)</li>
                <li>Digital twin modeling of factory floors</li>
                <li>Blockchain-secured supply chain records</li>
                <li>Collaborative robots for assembly tasks</li>
                <li>Energy-efficient smart grid integration</li>
                <li>AR/VR-based remote monitoring and training</li>
                <li>Cybersecurity frameworks for industrial systems</li>
                <li>Human-centric smart factory systems (Industry 5.0)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Factory Systems Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational smart factory projects aligned with IEEE topics.</p>
              <ul>
                <li>Select topics on IoT, robotics, or digital twins</li>
                <li>Study Industry 4.0/5.0 principles and IEEE standards</li>
                <li>Simulate models using MATLAB, Simulink, or Python</li>
                <li>Prototype IoT sensors with Arduino/Raspberry Pi</li>
                <li>Compare smart vs. conventional factory setups</li>
              </ul>
              <p>Example: IoT-based production line monitoring using Raspberry Pi.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Factory Systems Project Development</h2>
              <p>For postgraduate students, projects focus on advanced automation challenges.</p>
              <ul>
                <li>Identify inefficiencies in production systems</li>
                <li>Develop AI/ML models for predictive analytics</li>
                <li>Integrate IoT, MES, and robotics</li>
                <li>Validate with digital twin simulations</li>
              </ul>
              <p>Example: AI-driven predictive maintenance for automotive manufacturing.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Smart Factory Systems Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge smart factory research.</p>
              <ul>
                <li>Identify gaps in self-learning systems or cybersecurity</li>
                <li>Develop digital twins or AI-powered robotics</li>
                <li>Test prototypes with industry partners</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Blockchain-secured digital twin for smart factory supply chains.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technology & Industry Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Approach</th>
                      <th>Industry Application</th>
                      <th>Example Use Case</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT + Cloud Platforms</td>
                      <td>Automotive, Electronics</td>
                      <td>Real-time production monitoring</td>
                      <td>Reduced downtime</td>
                    </tr>
                    <tr>
                      <td>AI Predictive Maintenance</td>
                      <td>Aerospace, Heavy Machinery</td>
                      <td>Failure detection in turbines</td>
                      <td>Increased reliability</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Models</td>
                      <td>Pharma, Food Processing</td>
                      <td>Virtual process optimization</td>
                      <td>Cost savings</td>
                    </tr>
                    <tr>
                      <td>Cobots (Collaborative Robots)</td>
                      <td>Automotive, Electronics</td>
                      <td>Human–robot collaboration</td>
                      <td>Faster throughput</td>
                    </tr>
                    <tr>
                      <td>Blockchain in Manufacturing</td>
                      <td>Supply Chain, Logistics</td>
                      <td>Secure product traceability</td>
                      <td>Anti-counterfeit</td>
                    </tr>
                    <tr>
                      <td>AR/VR Training Systems</td>
                      <td>Oil & Gas, Aviation</td>
                      <td>Virtual operator training</td>
                      <td>Safer, cost-effective learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Smart Factory Systems in Action</h2>
              <ul>
                <li><strong>Siemens:</strong> Digital twin solutions for energy-efficient production.</li>
                <li><strong>Bosch:</strong> IoT-powered predictive maintenance in automotive plants.</li>
                <li><strong>Tesla:</strong> Fully automated assembly with robotics & AI.</li>
                <li><strong>Foxconn:</strong> Smart factory system in electronics production.</li>
                <li><strong>GE Aviation:</strong> Predictive maintenance using digital twins.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Smart Factory Monitoring with Cloud Integration (2023)</li>
                <li>AI-Based Predictive Maintenance in Automated Manufacturing Systems (2024)</li>
                <li>Digital Twin Framework for Real-Time Process Optimization (2025)</li>
                <li>Blockchain-Secured Supply Chain in Smart Manufacturing (2024)</li>
                <li>Human–Robot Collaboration for Industry 5.0 Applications (2023)</li>
                <li>Cybersecurity Protocols for Smart Factory Systems (2025)</li>
                <li>AR/VR Training Modules for Industrial Workforce Safety (2024)</li>
                <li>Energy-Efficient Smart Grid Integration in Manufacturing Plants (2023)</li>
                <li>Self-Learning AI Systems for Adaptive Production Lines (2025)</li>
                <li>Scalable Smart Factory Framework Using 5G and Edge Computing (2024)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Industry 5.0 Factories:</strong> Human–robot collaboration with AI ergonomics.</li>
                <li><strong>Self-Optimizing Systems:</strong> Autonomous factories with AI.</li>
                <li><strong>Cybersecure Industrial Networks:</strong> Zero-trust architectures.</li>
                <li><strong>5G & Edge Computing:</strong> Ultra-low-latency communications.</li>
                <li><strong>Green Smart Factories:</strong> Renewable energy and carbon-neutral manufacturing.</li>
                <li><strong>Immersive AR/VR Factories:</strong> Remote operations with digital twins.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Smart Factory Systems project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, Simulink, Python, IoT, and digital twin platforms, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to Industry 4.0 and 5.0 innovations in automotive, aerospace, and electronics.
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
              <li><a href="/industrial-safety-ergonomics-project-development">Industrial Safety & Ergonomics Project Development</a></li>
              <li><a href="/supply-chain-process-optimization-project-development">Supply Chain & Process Optimization Project Development</a></li>
              <li><a href="/lean-manufacturing-techniques-project-development">Lean Manufacturing Techniques Project Development</a></li>
              <li><a href="/industrial-production-optimization-project-development">Industrial & Production Optimization Project Development</a></li>
              <li><a href="/fatigue-fracture-analysis-project-development">Fatigue & Fracture Analysis Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MESmartFactorySystemsProjectDevelopmentCenter;