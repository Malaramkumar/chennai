import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Autonomous Vehicles & Drones Project Development Center offer?",
    answer: "Narpavi Research Institute’s Autonomous Vehicles & Drones Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on autonomous navigation, drone delivery systems, AI-driven decision-making, and IoT-enabled fleet management for industries like transportation, logistics, and smart cities."
  },
  {
    question: "What types of Autonomous Vehicles & Drones projects are supported?",
    answer: "We support B.Tech projects (basic autonomous navigation, drone prototyping), M.Tech projects (AI-driven navigation, IoT integration), and Ph.D. projects (swarm robotics, digital twins) for applications in urban mobility, logistics, and defense."
  },
  {
    question: "Which tools and technologies are used in Autonomous Vehicles & Drones projects?",
    answer: "Our stack includes MATLAB, Simulink, ROS, Gazebo, Python, AI frameworks (TensorFlow, Keras), Raspberry Pi, Arduino, and IoT platforms like AWS IoT for simulation, prototyping, and real-time control."
  },
  {
    question: "How are Autonomous Vehicles & Drones projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Robotics and Autonomous Systems, focusing on AI-driven navigation, sensor fusion, and IoT-enabled autonomous systems."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, AI/IoT integration, hardware prototyping, documentation, and support for IEEE/Scopus/Elsevier journal publications and patents."
  }
];

const MEAutonomousVehiclesDronesProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      <Sidebar />
      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Autonomous Vehicle IEEE Projects 2023–2025</li>
              <li>Drone Navigation Projects</li>
              <li>IoT-Enabled UAV Systems</li>
              <li>AI for Autonomous Driving</li>
              <li>Smart City Autonomous Projects</li>
              <li>Multi-Drone Coordination IEEE Projects</li>
              <li>Machine Vision in Autonomous Vehicles</li>
              <li>Self-Driving Car Simulation Projects</li>
              <li>Ph.D. Drone Research Projects</li>
              <li>Narpavi Research Institute Autonomous Systems</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Autonomous Vehicles & Drones – Project Development Support</h1>

            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Autonomous Vehicles & Drones Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on autonomous navigation, drone delivery systems, AI-driven decision-making, and IoT-enabled fleet management.
              </p>
              <p>
                Our projects leverage MATLAB, ROS, Python, Raspberry Pi, and IoT platforms to address challenges in transportation, logistics, surveillance, and smart cities, ensuring high-impact research and industrial relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Autonomous Vehicles & Drones</h2>
              <ul>
                <li><strong>Safety</strong>: Reduces human error in transportation and surveillance.</li>
                <li><strong>Efficiency</strong>: Optimizes logistics and traffic management (IEEE 2023–2025).</li>
                <li><strong>Autonomy</strong>: Enables self-driving cars and UAVs for independent operations.</li>
                <li><strong>IoT Integration</strong>: Supports real-time monitoring and fleet management.</li>
                <li><strong>Smart Cities</strong>: Enhances urban mobility and disaster response.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Autonomous Vehicles & Drones Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational autonomous systems projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn autonomous navigation and drone aerodynamics</li>
                <li>Simulate using MATLAB, Simulink, or ROS</li>
                <li>Prototype mini drones or vehicles with Raspberry Pi/Arduino</li>
                <li>Validate obstacle avoidance and path planning</li>
              </ul>
              <p>Example: Arduino-based autonomous drone with GPS navigation.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Autonomous Vehicles & Drones Project Development</h2>
              <p>For postgraduate students, projects focus on advanced autonomous systems and IoT integration.</p>
              <ul>
                <li>Develop ML-based perception for object recognition</li>
                <li>Integrate IoT for cloud-based fleet management</li>
                <li>Co-simulate with ROS, Gazebo, and MATLAB</li>
                <li>Benchmark for IEEE/ISO-compliant navigation and safety</li>
              </ul>
              <p>Example: AI-driven autonomous vehicle for urban traffic management.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Autonomous Vehicles & Drones Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge autonomous systems research.</p>
              <ul>
                <li>Identify gaps in multi-drone coordination or V2X communication</li>
                <li>Model with deep reinforcement learning and digital twins</li>
                <li>Implement large-scale autonomous vehicle/drone prototypes</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Swarm robotics framework for multi-drone coordination in disaster relief.</p>
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
                      <td>LIDAR & Sensor Fusion</td>
                      <td>Self-Driving Cars, UAVs</td>
                      <td>High-accuracy navigation & mapping</td>
                      <td>High sensor cost</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Vision</td>
                      <td>Autonomous Decision-Making</td>
                      <td>Real-time object detection</td>
                      <td>Computational complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Control</td>
                      <td>Fleet Management, Logistics</td>
                      <td>Remote monitoring & scheduling</td>
                      <td>Network latency</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Swarm Robotics</td>
                      <td>Military, Disaster Relief</td>
                      <td>Coordinated multi-agent operations</td>
                      <td>Coordination complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Digital Twins</td>
                      <td>Smart Cities, Transportation</td>
                      <td>Virtual testing & optimization</td>
                      <td>Data integration</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>LIDAR & Sensor Fusion:</strong> High-accuracy navigation for vehicles and drones.</li>
                <li><strong>AI & Machine Vision:</strong> Real-time perception and decision-making.</li>
                <li><strong>IoT-Enabled Control:</strong> Remote monitoring for fleet management.</li>
                <li><strong>Swarm Robotics:</strong> Multi-agent coordination for complex tasks.</li>
                <li><strong>Digital Twins:</strong> Virtual simulation for autonomous system optimization.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Drone Delivery Systems</h2>
              <p>
                IEEE research (2023–2025) highlights that autonomous drones for last-mile delivery reduce delivery time by 60% and lower operational costs. Autonomous cars in urban environments improve traffic efficiency and safety, showcasing the potential of autonomous systems.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Driven Autonomous Drone for Real-Time Surveillance (2023)</li>
                <li>IoT-Enabled Autonomous Vehicle with Cloud Fleet Management (2023)</li>
                <li>Deep Reinforcement Learning for Self-Driving Car Navigation (2024)</li>
                <li>Multi-Drone Coordination System Using Swarm Intelligence (2024)</li>
                <li>LIDAR and Camera Fusion for Autonomous Road Safety (2024)</li>
                <li>Blockchain-Secured Communication for Autonomous Vehicles (2025)</li>
                <li>Digital Twin Simulation of Autonomous Drones in Smart Cities (2025)</li>
                <li>Energy-Efficient Path Planning for UAVs Using AI (2025)</li>
                <li>ROS-Based Autonomous Delivery Robot for Urban Environments (2025)</li>
                <li>Cybersecurity Framework for IoT-Connected Autonomous Vehicles (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Urban Mobility:</strong> Autonomous cars reducing congestion and accidents.</li>
                <li><strong>Logistics & Delivery:</strong> Drones revolutionizing last-mile delivery.</li>
                <li><strong>Defense & Disaster Relief:</strong> UAVs for surveillance and rescue.</li>
                <li><strong>Smart Cities:</strong> IoT and AI for intelligent transportation.</li>
                <li><strong>Next-Gen Autonomy:</strong> Swarm-based autonomous systems with AI.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Autonomous Vehicles & Drones project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, ROS, Python, AI, and IoT, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to cutting-edge solutions in transportation, logistics, and smart cities.
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
              <li><a href="/manufacturing-production-engineering-project-development">Manufacturing & Production Engineering Project Development</a></li>
              <li><a href="/finite-element-analysis-project-development">Finite Element Analysis (FEA) Project Development</a></li>
              <li><a href="/cad-modeling-simulation-project-development">CAD Modeling & Simulation Project Development</a></li>
              <li><a href="/robotics-mechatronics-project-development">Robotics & Mechatronics Project Development</a></li>
              <li><a href="/iot-based-mechatronics-project-development">IoT-based Mechatronics Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEAutonomousVehiclesDronesProjectDevelopmentCenter;