import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Autonomous Robot Navigation and Path Planning Project Development Center offer?",
    answer: "Narpavi Research Institute’s Autonomous Robot Navigation and Path Planning Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in autonomous navigation, SLAM, path planning, and multi-robot coordination for applications in robotics, UAVs, and warehouse automation."
  },
  {
    question: "What types of Autonomous Robot Navigation and Path Planning projects are supported?",
    answer: "We support B.Tech projects (line-following robots, obstacle avoidance), M.Tech projects (SLAM-based navigation, AI-assisted path planning), and Ph.D. projects (AI-driven swarm robotics, adaptive navigation) for applications in autonomous vehicles, industrial robots, and smart systems."
  },
  {
    question: "Which technologies are used in Autonomous Robot Navigation and Path Planning project development?",
    answer: "Our stack includes SLAM, path planning algorithms (A*, RRT), sensor integration (LIDAR, IMU, Camera), ROS, MATLAB/Simulink, and deep learning frameworks like TensorFlow and PyTorch for autonomous robotic systems."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like SLAM-based navigation, deep learning for path planning, and multi-robot coordination, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, hardware-software integration, algorithm development, simulation with ROS or MATLAB, hardware validation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEAutonomousRobotNavigationPathPlanningProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Autonomous Robot Navigation Projects</li>
              <li>Path Planning Robotics 2023–2025</li>
              <li>SLAM Robotics Projects</li>
              <li>Multi-Robot Coordination</li>
              <li>Deep Learning Navigation Robots</li>
              <li>ROS Projects for Students</li>
              <li>Narpavi Research Institute Robotics</li>
              <li>IEEE Robotics Project Support</li>
              <li>UAV Navigation Algorithms</li>
              <li>Industrial Mobile Robots</li>
              <li>Obstacle Avoidance Robot</li>
              <li>Academic Robotics Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Autonomous Robot Navigation and Path Planning – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Autonomous Robot Navigation and Path Planning – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to design intelligent robotic systems aligned with IEEE Transactions (2023–2025). Our projects focus on autonomous navigation, path planning, and multi-robot coordination for robotics, UAVs, and industrial applications.
              </p>
              <p>
                With expertise in SLAM, path planning algorithms, sensor integration, ROS, and deep learning, we deliver solutions for dynamic environments, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Autonomous Robot Navigation and Path Planning Project Development</h2>
              <p>
                For undergraduate students, our center focuses on basic autonomous navigation projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Line-following robots or obstacle-avoiding mobile robots</li>
                <li>Sensor interfacing and microcontroller programming</li>
                <li>Basic path planning techniques (e.g., A*)</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical robotic system deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Autonomous Robot Navigation and Path Planning Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced navigation and path planning systems with SLAM and AI.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>SLAM-based navigation for mobile robots</li>
                <li>AI-assisted obstacle avoidance and path optimization</li>
                <li>Multi-robot coordination and ROS-based simulation</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade robotic solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Autonomous Robot Navigation and Path Planning Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in AI-driven navigation and swarm robotics.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>AI-driven path planning for dynamic environments</li>
                <li>Swarm robotics for coordinated navigation</li>
                <li>High-fidelity simulations and hardware validation</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for autonomous navigation</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Autonomous Robot Navigation and Path Planning Technologies vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SLAM (Simultaneous Localization & Mapping)</td>
                      <td>Robotics, Autonomous Vehicles</td>
                      <td>Real-time environment mapping and navigation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, Gmapping, Cartographer</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Path Planning Algorithms (A*, RRT)</td>
                      <td>UAVs, Mobile Robots</td>
                      <td>Efficient route optimization and collision avoidance</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ROS, MATLAB, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Sensor Integration (LIDAR, IMU, Camera)</td>
                      <td>Autonomous Systems, Industrial Robots</td>
                      <td>Accurate positioning and obstacle detection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, ROS, OpenCV</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>ROS (Robot Operating System)</td>
                      <td>Research and Industry Robotics</td>
                      <td>Middleware support for modular robotic software</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, ROS2</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Multi-Robot Coordination</td>
                      <td>Swarm Robotics, Warehouse Automation</td>
                      <td>Collaborative navigation and task allocation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, Python, MQTT</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Deep Learning-Based Navigation</td>
                      <td>Smart Vehicles, Service Robots</td>
                      <td>Adaptive behavior in unstructured environments</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, ROS</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Autonomous Robot Navigation and Path Planning Project Titles (2023–2025)</h2>
              <ul>
                <li>SLAM-Based Navigation for Autonomous Mobile Robots in Dynamic Environments (2023)</li>
                <li>Deep Reinforcement Learning for Multi-Robot Path Planning (2023)</li>
                <li>Real-Time Obstacle Avoidance Using LIDAR and Vision Sensors (2024)</li>
                <li>Autonomous UAV Navigation Using Sensor Fusion Techniques (2024)</li>
                <li>AI-Powered Path Planning for Industrial Service Robots (2025)</li>
                <li>Swarm Robotics Coordination for Warehouse Automation (2025)</li>
                <li>ROS-Based Autonomous Robot Simulation and Hardware Integration (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, based in India, provides global support for Autonomous Robot Navigation and Path Planning projects at all academic levels.
              </p>
              <p>
                We offer hardware-software integration, AI-driven navigation algorithms, sensor fusion expertise, and IEEE-standard project documentation. Students gain practical skills, academic recognition, and industrial exposure.
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
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/adaptive-nonlinear-control-systems-project-development">Adaptive and Nonlinear Control Systems Project Development</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
              <li><a href="/iot-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
              <li><a href="/machine-learning-embedded-platforms-project-development">Machine Learning in Embedded Platforms Project Development</a></li>
              <li><a href="/industrial-automation-project-development">Industrial Automation Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEAutonomousRobotNavigationPathPlanningProjectDevelopmentCenter;