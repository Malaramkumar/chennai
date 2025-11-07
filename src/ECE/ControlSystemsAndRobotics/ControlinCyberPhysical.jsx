import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Control in Cyber-Physical Systems Project Development Center offer?",
    answer: "Narpavi Research Institute’s Control in Cyber-Physical Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in CPS control, including Model Predictive Control, AI-augmented control, blockchain-enabled security, and edge computing for applications in smart grids, autonomous vehicles, and smart cities."
  },
  {
    question: "What types of Control in Cyber-Physical Systems projects are supported?",
    answer: "We support B.Tech projects (IoT-integrated smart controllers), M.Tech projects (Model Predictive Control, blockchain-enabled control), and Ph.D. projects (digital twins, AI-enhanced CPS security) for applications in healthcare, Industry 4.0, and smart cities."
  },
  {
    question: "Which technologies are used in Control in Cyber-Physical Systems project development?",
    answer: "Our stack includes Model Predictive Control, AI frameworks (TensorFlow, PyTorch), blockchain platforms (Ethereum, Hyperledger), ROS, MATLAB/Simulink, and edge computing platforms for real-time CPS control."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like blockchain-enabled CPS control, fog/edge computing, and AI-augmented control, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, algorithm design, simulation with ROS or MATLAB, hardware implementation, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECEControlCyberPhysicalSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Cyber-Physical Systems Projects</li>
              <li>IEEE CPS Control Projects</li>
              <li>Secure Control Systems</li>
              <li>CPS with Blockchain Projects</li>
              <li>Smart Grid CPS Control</li>
              <li>AI-Augmented CPS Projects</li>
              <li>Model Predictive Control in CPS</li>
              <li>CPS Project Development 2023–2025</li>
              <li>Resilient Control in CPS</li>
              <li>Narpavi Research Institute CPS Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Control in Cyber-Physical Systems – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Control in Cyber-Physical Systems – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to design intelligent and secure CPS control systems aligned with IEEE Transactions (2023–2025). Our projects focus on real-time control, secure communication, and AI-driven coordination for applications in smart grids, autonomous vehicles, and Industry 4.0.
              </p>
              <p>
                With expertise in Model Predictive Control, AI-augmented control, blockchain, and edge computing, we deliver scalable, reliable solutions for academic and industrial CPS applications.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Control in Cyber-Physical Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on IoT-integrated CPS control projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Smart home energy controllers or automated water systems</li>
                <li>Traffic light controllers using Arduino, Raspberry Pi, or STM32</li>
                <li>Integration with sensors, actuators, and cloud dashboards</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical CPS deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Control in Cyber-Physical Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced CPS control strategies and scalable system design.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Model Predictive Control for smart grids or autonomous systems</li>
                <li>Blockchain-enabled secure control systems</li>
                <li>AI-enhanced feedback systems with ROS and MATLAB/Simulink</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade CPS solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Control in Cyber-Physical Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive CPS control projects with innovative frameworks.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Digital twins for real-time CPS control</li>
                <li>AI-enhanced CPS security and distributed consensus control</li>
                <li>Cyber-attack-resilient CPS architectures</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Hybrid simulations and prototype development</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Control in Cyber-Physical Systems Technologies vs. Industry Applications</h2>
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
                      <td>Model Predictive Control (MPC)</td>
                      <td>Smart Grids, Energy Systems</td>
                      <td>Real-time optimization of resources</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI-Augmented Control Algorithms</td>
                      <td>Autonomous Vehicles, Robotics</td>
                      <td>Intelligent, adaptive decision-making</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, ROS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Blockchain-Enabled CPS Control</td>
                      <td>Secure IoT, Finance Systems</td>
                      <td>Tamper-proof transactions & control validation</td>
                      <td>Ph.D.</td>
                      <td>Ethereum, Hyperledger</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Cloud-Controlled CPS</td>
                      <td>Industry 4.0, Smart Factories</td>
                      <td>Scalable and flexible industrial control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IoT, ROS, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Fog & Edge Computing in CPS</td>
                      <td>Smart Cities, IoT Networks</td>
                      <td>Low-latency and real-time response</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>EdgeX Foundry, ROS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Secure Control Protocols</td>
                      <td>Defense, Critical Infrastructures</td>
                      <td>Reliability, fault tolerance & safety</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, Python, ROS</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Control in Cyber-Physical Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>Blockchain-Enabled Secure Control Mechanisms in Cyber-Physical Systems (2023)</li>
                <li>Fog and Edge-Assisted Real-Time Control for Smart City CPS Networks (2023)</li>
                <li>Model Predictive Control of Energy-Efficient Smart Grids (2024)</li>
                <li>AI-Augmented Control for Autonomous Vehicle Cyber-Physical Systems (2024)</li>
                <li>Distributed Consensus-Based Control for Resilient CPS Architectures (2025)</li>
                <li>Digital Twin-Driven Adaptive Control in Industrial CPS (2025)</li>
                <li>Cyber-Secure Control Framework for Next-Generation Healthcare CPS (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we bridge the gap between control theory, IoT, AI, and real-world CPS applications.
              </p>
              <p>
                Our team assists students and researchers in building secure, scalable, and efficient CPS control solutions for academic projects, IEEE publications, and industrial applications.
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
              <li><a href="/ai-powered-robotic-control-systems-project-development">AI-Powered Robotic Control Systems Project Development</a></li>
              <li><a href="/secure-iot-architectures-project-development">Secure IoT Architectures Project Development</a></li>
              <li><a href="/edge-fog-computing-iot-project-development">Edge and Fog Computing in IoT Project Development</a></li>
              <li><a href="/adaptive-nonlinear-control-systems-project-development">Adaptive and Nonlinear Control Systems Project Development</a></li>
              <li><a href="/iot-enabled-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEControlCyberPhysicalSystemsProjectDevelopmentCenter;