import "./MEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Automotive & Vehicle Engineering Project Development Center offer?",
    answer: "Narpavi Research Institute’s Automotive & Vehicle Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on electric vehicles, hybrid powertrains, autonomous driving, smart grid integration, and emission control for sustainable mobility and smart city applications."
  },
  {
    question: "What types of Automotive & Vehicle Engineering projects are supported?",
    answer: "We support B.Tech projects (EV prototypes, vehicle dynamics), M.Tech projects (AI-driven powertrains, hybrid optimization), and Ph.D. projects (autonomous vehicles, digital twins, V2G systems) for applications in green transport, smart cities, and automotive innovation."
  },
  {
    question: "Which tools and technologies are used in Automotive & Vehicle Engineering projects?",
    answer: "Our stack includes MATLAB, Simulink, ADAMS, ANSYS, Python, AI frameworks (TensorFlow, Keras), IoT platforms (AWS IoT, ThingSpeak), and hardware like Arduino, Raspberry Pi, and EV motor drives for simulation, prototyping, and real-time control."
  },
  {
    question: "How are Automotive & Vehicle Engineering projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Vehicular Technology and Sustainable Energy, focusing on EV powertrains, autonomous driving, and smart grid integration."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, AI/IoT integration, hardware prototyping, documentation, and support for IEEE/Scopus/Elsevier journal publications and patents."
  }
];

const MEAutomotiveVehicleEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      <Sidebar />
      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Automotive IEEE Projects 2023–2025</li>
              <li>Electric Vehicle Projects for Students</li>
              <li>Hybrid Vehicle IEEE Projects</li>
              <li>Vehicle Dynamics MATLAB Projects</li>
              <li>AI in Automotive Engineering</li>
              <li>Smart Grid EV Integration</li>
              <li>Emission Control Projects</li>
              <li>Autonomous Vehicle IEEE Projects</li>
              <li>IoT-Based Automotive Projects</li>
              <li>Narpavi Research Institute Automotive Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Automotive & Vehicle Engineering – Project Development Support</h1>

            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Automotive & Vehicle Engineering Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on electric vehicles, hybrid powertrains, autonomous driving, smart grid integration, and emission control.
              </p>
              <p>
                Our projects leverage MATLAB, ANSYS, Python, AI, and IoT platforms to address challenges in sustainable mobility, smart cities, and automotive innovation, ensuring high-impact research and industry relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Automotive & Vehicle Engineering</h2>
              <ul>
                <li><strong>Electrification</strong>: Zero-emission EVs for sustainable transport.</li>
                <li><strong>Efficiency</strong>: Hybrid vehicles achieve 20–25% better fuel economy (IEEE 2023–2025).</li>
                <li><strong>Smart Mobility</strong>: AI-driven autonomous driving and safety systems.</li>
                <li><strong>Grid Integration</strong>: V2G systems for energy-efficient EV charging.</li>
                <li><strong>Green Policies</strong>: Emission control for regulatory compliance.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Automotive & Vehicle Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational automotive projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn vehicle mechanics, EV systems, and control strategies</li>
                <li>Simulate vehicle dynamics with MATLAB or ADAMS</li>
                <li>Prototype EV systems with Arduino or Raspberry Pi</li>
                <li>Validate performance under conventional vs. smart controls</li>
              </ul>
              <p>Example: Arduino-based EV motor control prototype.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Automotive & Vehicle Engineering Project Development</h2>
              <p>For postgraduate students, projects focus on advanced automotive challenges.</p>
              <ul>
                <li>Develop AI models for powertrain optimization and vehicle control</li>
                <li>Integrate IoT for real-time vehicle performance monitoring</li>
                <li>Co-simulate with MATLAB, Python, and IoT dashboards</li>
                <li>Benchmark for IEEE/SAE/ISO-compliant safety and efficiency</li>
              </ul>
              <p>Example: AI-driven hybrid powertrain for fuel efficiency optimization.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Automotive & Vehicle Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge automotive research.</p>
              <ul>
                <li>Identify gaps in autonomous driving or EV-grid integration</li>
                <li>Model digital twins and reinforcement learning for vehicles</li>
                <li>Implement EV or autonomous vehicle prototypes</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Digital twin framework for autonomous vehicle testing.</p>
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
                      <td>Electric Vehicle Powertrains</td>
                      <td>EVs, Green Transport</td>
                      <td>Zero emissions, high efficiency</td>
                      <td>Battery range limitations</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Hybrid Vehicle Systems</td>
                      <td>Passenger & Commercial Vehicles</td>
                      <td>Extended range, fuel economy</td>
                      <td>Complex integration</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>AI in Vehicle Dynamics</td>
                      <td>Autonomous Vehicles, Driver Assistance</td>
                      <td>Safety, predictive control</td>
                      <td>Computational complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Emission Control Technologies</td>
                      <td>Automotive Industry</td>
                      <td>Cleaner transport, compliance</td>
                      <td>Cost of implementation</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Smart Grid EV Integration</td>
                      <td>EV Charging Hubs, Smart Cities</td>
                      <td>Efficient charging, V2G systems</td>
                      <td>Grid infrastructure upgrades</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>Electric Vehicle Powertrains:</strong> Zero-emission systems for green transport.</li>
                <li><strong>Hybrid Vehicle Systems:</strong> Fuel-efficient designs for extended range.</li>
                <li><strong>AI in Vehicle Dynamics:</strong> Autonomous driving and safety systems.</li>
                <li><strong>Emission Control Technologies:</strong> Cleaner transport solutions.</li>
                <li><strong>Smart Grid EV Integration:</strong> Efficient charging and V2G systems.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Electric Vehicles & Smart Cities</h2>
              <p>
                IEEE studies (2023–2025) highlight that EVs integrated with smart grids reduce peak demand by 30% through AI-enabled charging and V2G systems. Hybrid vehicles achieve 20–25% better fuel efficiency, ensuring sustainable transport and urban energy stability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Based Electric Vehicle Energy Monitoring System (2023)</li>
                <li>AI-Driven Hybrid Powertrain Optimization for Fuel Efficiency (2023)</li>
                <li>Vehicle Dynamics Simulation Using MATLAB/Simulink (2024)</li>
                <li>Reinforcement Learning for Autonomous Vehicle Navigation (2024)</li>
                <li>Blockchain-Enabled EV Charging and Billing Platform (2024)</li>
                <li>Digital Twin Framework for Next-Generation Vehicle Testing (2025)</li>
                <li>Emission Control Strategies Using Smart Catalytic Systems (2025)</li>
                <li>Multi-Agent Systems for Connected & Autonomous Vehicles (2025)</li>
                <li>Predictive Maintenance in Vehicles Using AI and IoT Sensors (2025)</li>
                <li>V2G-Based EV Charging Infrastructure with Renewable Integration (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Electrification:</strong> EVs with advanced battery and grid integration.</li>
                <li><strong>Autonomous Driving:</strong> AI-driven self-driving and safety systems.</li>
                <li><strong>Green Transport:</strong> Hybrid vehicles and fuel-efficient designs.</li>
                <li><strong>Smart Cities:</strong> EV charging hubs and V2G systems.</li>
                <li><strong>Policy & Regulation:</strong> Emission norms for clean mobility.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Automotive & Vehicle Engineering project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, ANSYS, Python, AI, and IoT, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to sustainable mobility solutions in smart cities, autonomous driving, and green transport.
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
              <li><a href="/smart-grid-integration-project-development">Smart Grid Integration for Automotive & Vehicle Engineering</a></li>
              <li><a href="/renewable-energy-thermal-mechanical-systems-project-development">Renewable Energy / Thermal & Mechanical Systems Project Development</a></li>
              <li><a href="/solar-pv-thermal-systems-project-development">Solar PV & Thermal Systems Project Development</a></li>
              <li><a href="/wind-turbine-design-optimization-project-development">Wind Turbine Design & Optimization Project Development</a></li>
              <li><a href="/embedded-control-systems-project-development">Embedded Control Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEAutomotiveVehicleEngineeringProjectDevelopmentCenter;