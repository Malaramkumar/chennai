import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Control Systems & Robotics Project Development Center offer?",
    answer: "Narpavi Research Institute’s Control Systems & Robotics Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in control systems and robotics, focusing on intelligent automation, mechatronics, and AI-driven solutions for industries like manufacturing, logistics, and healthcare."
  },
  {
    question: "What types of control systems and robotics projects are supported?",
    answer: "We support B.Tech projects (PID controllers, robotic arms), M.Tech projects (MPC, AI-based path planning), and Ph.D. projects (swarm robotics, nonlinear control) for applications in industrial automation, autonomous vehicles, and medical robotics."
  },
  {
    question: "Which technologies are used in control systems and robotics project development?",
    answer: "Our stack includes MATLAB, Simulink, ROS, Python, Arduino, Raspberry Pi, FPGA, and Gazebo for advanced control and robotic solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like adaptive control, swarm robotics, and AI-driven automation, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, algorithm design, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const ECEControlSystemsRoboticsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Control Systems Project Development</li>
              <li>Robotics IEEE Projects 2023–2025</li>
              <li>Autonomous Robots Project Support</li>
              <li>Narpavi Research Institute Robotics</li>
              <li>B.Tech M.Tech Ph.D. Robotics Projects</li>
              <li>India Robotics Project Center</li>
              <li>IEEE Control Systems Projects</li>
              <li>ROS-Based Robotics Projects</li>
              <li>UAV Control IEEE Topics</li>
              <li>Industrial Automation Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Control Systems & Robotics – Project Development Center</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Control Systems & Robotics – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. students to excel in intelligent automation, mechatronics, and robotic control solutions. Our projects are aligned with IEEE Transactions (2023–2025) to ensure cutting-edge innovation.
              </p>
              <p>
                Through expert mentorship and advanced tools like MATLAB, Simulink, ROS, and FPGA platforms, we deliver end-to-end project solutions for industries like manufacturing, logistics, and healthcare, bridging academic rigor with real-world applications.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table – Control Systems & Robotics</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
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
                      <td>PID & Fuzzy Logic Controllers</td>
                      <td>Industrial Process Automation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Energy & Power Grid Systems</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, LabVIEW</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Artificial Neural Networks for Control</td>
                      <td>Autonomous Vehicles & Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Computer Vision & Sensor Fusion</td>
                      <td>Manufacturing Quality Control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>OpenCV, ROS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled Robotic Control</td>
                      <td>Smart Factories & Industry 4.0</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Mosquitto, AWS IoT</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>UAV Swarm Coordination</td>
                      <td>Disaster Management & Surveillance</td>
                      <td>Ph.D.</td>
                      <td>ROS, Gazebo</td>
                      <td>Expert</td>
                    </tr>
                    <tr>
                      <td>ROS (Robot Operating System) Integration</td>
                      <td>Academic Research & Prototyping</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, Gazebo</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Haptic Feedback Control</td>
                      <td>Medical Robotics & Surgery Assistance</td>
                      <td>Ph.D.</td>
                      <td>ROS, MATLAB</td>
                      <td>Expert</td>
                    </tr>
                    <tr>
                      <td>Embedded Control Systems</td>
                      <td>Consumer Electronics & Automation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, STM32</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-assisted Path Planning</td>
                      <td>Logistics, Warehousing & Delivery Drones</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, TensorFlow</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

              <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Control Systems & Robotics Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational control systems and robotics projects like PID controllers or robotic arms, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using MATLAB, Simulink, or Python</li>
                <li>Features like basic control algorithms or sensor integration</li>
                <li>Hardware implementation with Arduino or Raspberry Pi</li>
                <li>Documentation and IEEE-format presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical automation systems, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Control Systems & Robotics Project Development</h2>
              <p>
                For postgraduate students, we develop advanced control systems and robotics projects like MPC or AI-based path planning, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with MPC, ANN, or ROS frameworks</li>
                <li>Features like real-time control or autonomous navigation</li>
                <li>Integration with industrial applications like smart factories</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade automation solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Control Systems & Robotics Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering research in swarm robotics, nonlinear control, and AI-driven automation.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced system design with ROS or FPGA</li>
                <li>Validation with real-world testbeds</li>
                <li>Integration with IoT or cloud platforms</li>
                <li>Publication and patent filing assistance</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Control Systems & Robotics Project Titles (2023–2025)</h2>
              <ul>
                <li>Adaptive PID Controller for Autonomous Mobile Robots</li>
                <li>Deep Reinforcement Learning for Robotic Arm Precision Control</li>
                <li>UAV Swarm Coordination Using Model Predictive Control</li>
                <li>AI-based Path Planning for Automated Warehouse Robots</li>
                <li>IoT-Enabled Predictive Maintenance in Robotic Manufacturing</li>
                <li>Vision-Guided Object Recognition for Industrial Robots</li>
                <li>Multi-Sensor Fusion for Autonomous Vehicle Navigation</li>
                <li>Haptic Feedback-Controlled Surgical Robotic Systems</li>
                <li>Real-Time Gesture-Controlled Robot Using Computer Vision</li>
                <li>Fuzzy Logic-Based Temperature and Pressure Control in Smart Factories</li>
                <li>ROS-Based Multi-Robot Collaboration Framework</li>
                <li>FPGA Implementation of Real-Time Control Systems</li>
                <li>AI-Driven Load Balancing in Distributed Robotic Networks</li>
                <li>Energy Optimization in Robotic Systems via AI-Assisted Control</li>
                <li>Control System Fault Detection Using Machine Learning</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a leading India-based global research and project development center offering B.Tech, M.Tech, and Ph.D. support in Control Systems, Robotics, and various engineering disciplines. Specializing in IEEE-standard compliance, advanced prototyping, and real-time industry solutions, our institute bridges the gap between academic research and industrial application.
              </p>
              <p>
                With domain experts, state-of-the-art labs, and direct alignment with IEEE Transactions (2023–2025), we ensure every project delivers innovation, quality, and real-world impact.
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
              <li><a href="/biomedical-electronics-project-development">Biomedical Electronics Project Development</a></li>
              <li><a href="/communication-systems-project-development">Communication Systems Project Development</a></li>
              <li><a href="/natural-language-processing-project-development">Natural Language Processing Project Development</a></li>
              <li><a href="/image-processing-project-development">Image Processing Project Development</a></li>
              <li><a href="/devops-project-development">DevOps Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEControlSystemsRoboticsProjectDevelopmentCenter;