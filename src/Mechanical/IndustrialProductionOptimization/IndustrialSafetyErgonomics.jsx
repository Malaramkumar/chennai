import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Industrial Safety & Ergonomics Project Development Center offer?",
    answer: "Narpavi Research Institute’s Industrial Safety & Ergonomics Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on IoT-enabled safety systems, AI-driven risk assessment, ergonomic design, wearable technologies, and digital twins for manufacturing, automotive, construction, and aerospace applications."
  },
  {
    question: "What types of Industrial Safety & Ergonomics projects are supported?",
    answer: "We support B.Tech projects (IoT safety monitoring, ergonomic CAD), M.Tech projects (AI risk prediction, wearable tech), and Ph.D. projects (digital twins, cybersecure safety systems) for applications in smart factories, construction, and heavy industries."
  },
  {
    question: "Which tools and technologies are used in Industrial Safety & Ergonomics projects?",
    answer: "Our stack includes MATLAB, CATIA, Python, Arduino, Raspberry Pi, IoT sensors, AR/VR platforms, and digital twin systems for simulation, prototyping, and safety analysis."
  },
  {
    question: "How are Industrial Safety & Ergonomics projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Industrial Informatics, Automation, and Safety, focusing on IoT, AI, and ergonomic design, aligned with IEEE/ISO/OSHA standards."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, documentation, and support for IEEE/Scopus/Elsevier journal publications and patents."
  }
];

const MEIndustrialSafetyErgonomicsProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      <Sidebar />
      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Industrial Safety IEEE Projects</li>
              <li>Ergonomics-Based Design Projects</li>
              <li>IoT in Workplace Safety</li>
              <li>Wearable Safety Monitoring Systems</li>
              <li>AI Accident Prediction Projects</li>
              <li>Exoskeleton Student Projects</li>
              <li>Ergonomic Workstation CAD Models</li>
              <li>Digital Twin Safety Simulation IEEE Projects</li>
              <li>Industrial Safety Automation</li>
              <li>Narpavi Research Institute Safety Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Industrial Safety & Ergonomics – Project Development Support</h1>

            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Industrial Safety & Ergonomics Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on IoT-enabled safety systems, AI-driven risk assessment, ergonomic design, wearable technologies, and digital twins.
              </p>
              <p>
                Our projects leverage MATLAB, CATIA, Python, IoT platforms, and AR/VR systems to address safety and ergonomics challenges in manufacturing, automotive, construction, and aerospace industries, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-principles">
              <h2>Core Principles of Industrial Safety & Ergonomics</h2>
              <ul>
                <li><strong>Workplace Safety Monitoring:</strong> IoT sensors for real-time hazard tracking.</li>
                <li><strong>Ergonomic Design:</strong> Optimizing tools and workflows to reduce fatigue.</li>
                <li><strong>Automation & Robotics Safety:</strong> Collaborative robot safety protocols.</li>
                <li><strong>Wearable Technology:</strong> Smart helmets, exoskeletons, health monitors.</li>
                <li><strong>Risk Assessment Models:</strong> AI-based hazard detection and prevention.</li>
                <li><strong>Industrial Hygiene:</strong> Monitoring air quality, noise, and chemicals.</li>
                <li><strong>Human–Machine Interaction:</strong> Intuitive, safe interfaces.</li>
                <li><strong>Regulatory Compliance:</strong> Adhering to ISO 45001, OSHA, and IEC standards.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-subtopics">
              <h2>Extended Subtopics for Student Projects</h2>
              <ul>
                <li>IoT-enabled workplace safety systems</li>
                <li>Wearable health monitoring devices for workers</li>
                <li>Exoskeleton design for musculoskeletal strain reduction</li>
                <li>AI-powered accident prediction and risk analysis</li>
                <li>Ergonomic workstation design using CAD/CAE</li>
                <li>Digital twin for safety hazard simulation</li>
                <li>Smart helmets with AR/VR safety guidance</li>
                <li>Robotics and cobot safety integration</li>
                <li>Human-factor engineering in automated lines</li>
                <li>Green ergonomics for sustainable workplaces</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Industrial Safety & Ergonomics Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational safety and ergonomics projects aligned with IEEE topics.</p>
              <ul>
                <li>Select topics on ergonomic design or IoT safety devices</li>
                <li>Study ergonomics principles and safety regulations</li>
                <li>Simulate risk models using MATLAB or CATIA</li>
                <li>Prototype IoT sensors on Arduino/Raspberry Pi</li>
                <li>Compare ergonomic vs. conventional setups</li>
              </ul>
              <p>Example: IoT-based gas detection system for workplace safety.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Industrial Safety & Ergonomics Project Development</h2>
              <p>For postgraduate students, projects focus on advanced safety and ergonomics challenges.</p>
              <ul>
                <li>Identify specific industrial safety issues</li>
                <li>Develop AI/ML models for risk prediction</li>
                <li>Prototype smart PPE with IoT integration</li>
                <li>Validate with IEEE/ISO standards</li>
              </ul>
              <p>Example: AI-powered accident prediction for construction sites.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Industrial Safety & Ergonomics Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge safety research.</p>
              <ul>
                <li>Identify gaps in AI-driven or cybersecure safety systems</li>
                <li>Develop digital twins or bio-inspired safety models</li>
                <li>Test prototypes with industrial partners</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Digital twin for hazard simulation in smart factories.</p>
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
                      <td>IoT Sensors & Wearables</td>
                      <td>Manufacturing, Mining</td>
                      <td>Smart helmets, gas sensors</td>
                      <td>Real-time worker safety</td>
                    </tr>
                    <tr>
                      <td>AI Risk Prediction Models</td>
                      <td>Oil & Gas, Construction</td>
                      <td>Hazard detection in drilling</td>
                      <td>Accident prevention</td>
                    </tr>
                    <tr>
                      <td>Exoskeletons</td>
                      <td>Automotive, Aerospace</td>
                      <td>Worker support in lifting tasks</td>
                      <td>Reduced fatigue, injury prevention</td>
                    </tr>
                    <tr>
                      <td>Ergonomic CAD Design</td>
                      <td>Industrial Equipment</td>
                      <td>Ergonomic tools & seating</td>
                      <td>Better posture, reduced strain</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Simulation</td>
                      <td>Smart Factories</td>
                      <td>Virtual safety drill simulation</td>
                      <td>Predictive hazard management</td>
                    </tr>
                    <tr>
                      <td>AR/VR Training</td>
                      <td>Heavy Industries, Aviation</td>
                      <td>Virtual safety training</td>
                      <td>Immersive, cost-effective learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Safety & Ergonomics in Action</h2>
              <ul>
                <li><strong>Toyota:</strong> Ergonomic design + exoskeletons in vehicle assembly.</li>
                <li><strong>Shell:</strong> AI-driven safety monitoring for oil & gas rigs.</li>
                <li><strong>Bosch:</strong> IoT safety sensors in Industry 4.0 factories.</li>
                <li><strong>Airbus:</strong> AR/VR training for aircraft assembly safety.</li>
                <li><strong>TATA Steel:</strong> IoT-based safety helmets in hazardous zones.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Based Real-Time Industrial Worker Safety Monitoring System (2023)</li>
                <li>AI-Powered Predictive Accident Detection in Smart Factories (2024)</li>
                <li>Exoskeleton Design for Reducing Musculoskeletal Disorders (2025)</li>
                <li>Digital Twin Models for Hazard Simulation in Industry 4.0 (2024)</li>
                <li>AR/VR-Based Industrial Safety Training Platform (2023)</li>
                <li>Blockchain-Secured Safety Compliance Record System (2025)</li>
                <li>Ergonomic Design of Assembly Workstations Using CAD/CAE (2024)</li>
                <li>Smart Helmet with IoT Sensors & AR Guidance for Construction Sites (2023)</li>
                <li>Machine Learning Models for Industrial Risk Forecasting (2025)</li>
                <li>Collaborative Robot Safety Framework with AI Monitoring (2024)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Cybersecure IoT Safety Systems:</strong> Next-gen smart factories.</li>
                <li><strong>AI-Driven Ergonomics:</strong> Real-time posture correction.</li>
                <li><strong>Green Ergonomics:</strong> Sustainable, eco-friendly workplaces.</li>
                <li><strong>Digital Twin Safety Drills:</strong> Predictive hazard management.</li>
                <li><strong>Exoskeletons & Wearables:</strong> Mainstream industrial adoption.</li>
                <li><strong>Collaborative Robotics Safety:</strong> Advanced HMI design.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Industrial Safety & Ergonomics project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, CATIA, Python, IoT, and AR/VR systems, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to safer and more efficient workplaces in manufacturing, automotive, and construction industries.
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
              <li><a href="/supply-chain-process-optimization-project-development">Supply Chain & Process Optimization Project Development</a></li>
              <li><a href="/lean-manufacturing-techniques-project-development">Lean Manufacturing Techniques Project Development</a></li>
              <li><a href="/industrial-production-optimization-project-development">Industrial & Production Optimization Project Development</a></li>
              <li><a href="/fatigue-fracture-analysis-project-development">Fatigue & Fracture Analysis Project Development</a></li>
              <li><a href="/nanomaterials-mechanical-systems-project-development">Nanomaterials in Mechanical Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEIndustrialSafetyErgonomicsProjectDevelopmentCenter;