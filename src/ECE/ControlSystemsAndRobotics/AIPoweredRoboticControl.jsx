import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the AI-Powered Robotic Control Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s AI-Powered Robotic Control Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in AI-driven robotic control, reinforcement learning, deep learning, and hybrid control architectures for applications in autonomous vehicles, healthcare, and smart manufacturing."
  },
  {
    question: "What types of AI-Powered Robotic Control Systems projects are supported?",
    answer: "We support B.Tech projects (AI-based obstacle avoidance, gesture-controlled robots), M.Tech projects (reinforcement learning navigation, deep learning robotic vision), and Ph.D. projects (deep reinforcement learning, explainable AI for human-robot collaboration) for applications in industry and healthcare."
  },
  {
    question: "Which technologies are used in AI-Powered Robotic Control Systems project development?",
    answer: "Our stack includes reinforcement learning, deep neural networks, fuzzy logic, ROS, Python, TensorFlow, PyTorch, and hardware platforms like Arduino and Raspberry Pi for AI-driven robotic control."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like deep reinforcement learning, explainable AI, and hybrid control architectures, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, algorithm design, simulation with ROS or MATLAB, hardware implementation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEAIPoweredRoboticControlSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>AI Robotic Control Projects</li>
              <li>Machine Learning Robotics Projects</li>
              <li>Deep Reinforcement Learning Robotics</li>
              <li>IEEE AI Robotics Projects 2023–2025</li>
              <li>Intelligent Robot Navigation</li>
              <li>AI in Humanoid Robots</li>
              <li>Adaptive Robotic Control Systems</li>
              <li>Explainable AI Robotics</li>
              <li>ROS and AI Projects</li>
              <li>Narpavi Research Institute Robotics</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>AI-Powered Robotic Control Systems – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the AI-Powered Robotic Control Systems – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to design intelligent robotic systems aligned with IEEE Transactions (2023–2025). Our projects focus on integrating AI, machine learning, and deep learning for adaptive and autonomous robotic control.
              </p>
              <p>
                With expertise in reinforcement learning, deep neural networks, fuzzy logic, and hybrid AI architectures, we deliver solutions for autonomous vehicles, healthcare robots, and smart manufacturing, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech AI-Powered Robotic Control Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on basic AI-integrated robotic projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>AI-based obstacle avoidance or gesture-controlled robots</li>
                <li>Reinforcement-learning-based line-following robots</li>
                <li>Implementation with Arduino or Raspberry Pi</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical AI robotic system deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech AI-Powered Robotic Control Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced AI control algorithms and real-world robotic applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Reinforcement learning for robotic navigation</li>
                <li>Deep learning for robotic vision and object handling</li>
                <li>ROS, Python, and TensorFlow/PyTorch integration</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade AI robotic solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. AI-Powered Robotic Control Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in AI-driven robotic systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Deep reinforcement learning for adaptive control</li>
                <li>Explainable AI for human-robot collaboration</li>
                <li>Hybrid AI architectures and advanced robotic platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for AI-powered robotics</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – AI-Powered Robotic Control Systems Technologies vs. Industry Applications</h2>
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
                      <td>Reinforcement Learning (RL)</td>
                      <td>Autonomous Vehicles, UAV Systems</td>
                      <td>Self-learning robots for optimized decision-making</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, ROS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Deep Neural Networks (DNNs)</td>
                      <td>Robotic Vision, Object Handling</td>
                      <td>High-accuracy perception and adaptive control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, OpenCV</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Fuzzy Logic Control</td>
                      <td>Smart Manufacturing, Robotics</td>
                      <td>Human-like decision-making in uncertain conditions</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-Driven Path Planning</td>
                      <td>Healthcare Robots, Logistics</td>
                      <td>Efficient navigation in dynamic environments</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ROS, Python, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Hybrid AI Control Architectures</td>
                      <td>Humanoid Robots, Service Robots</td>
                      <td>Real-time adaptability and robustness</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, TensorFlow, PyTorch</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Explainable AI in Robotics</td>
                      <td>Defense, Safety-Critical Systems</td>
                      <td>Transparent and trustworthy AI control decisions</td>
                      <td>Ph.D.</td>
                      <td>Python, XAI Frameworks</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned AI-Powered Robotic Control Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>Deep Reinforcement Learning for Adaptive Robotic Control in Dynamic Environments (2023)</li>
                <li>AI-Powered Object Detection and Grasping for Autonomous Robots (2023)</li>
                <li>Fuzzy-Neural Network Hybrid Control for Industrial Robotics (2024)</li>
                <li>Explainable AI for Safe Human-Robot Interaction Systems (2024)</li>
                <li>Multi-Agent Deep RL for Collaborative Robotic Systems (2025)</li>
                <li>AI-Integrated Robotic Navigation for Smart Healthcare Assistance (2025)</li>
                <li>Cloud-Enabled AI Robotic Control Framework for Industry 4.0 (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we guide students and researchers in developing intelligent robotic systems with AI-driven control frameworks.
              </p>
              <p>
                From fundamental robotic design to advanced AI-based decision-making systems, we provide end-to-end support for project execution, publication, and industry-focused innovation.
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
              <li><a href="/swarm-robotics-multi-agent-systems-project-development">Swarm Robotics and Multi-Agent Systems Project Development</a></li>
              <li><a href="/autonomous-robot-navigation-path-planning-project-development">Autonomous Robot Navigation and Path Planning Project Development</a></li>
              <li><a href="/adaptive-nonlinear-control-systems-project-development">Adaptive and Nonlinear Control Systems Project Development</a></li>
              <li><a href="/machine-learning-embedded-platforms-project-development">Machine Learning in Embedded Platforms Project Development</a></li>
              <li><a href="/iot-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEAIPoweredRoboticControlSystemsProjectDevelopmentCenter;