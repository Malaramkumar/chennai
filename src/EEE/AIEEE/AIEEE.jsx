import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Artificial Intelligence in EEE Project Development Center offer?",
    answer: "Narpavi Research Institute’s Artificial Intelligence in EEE Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in AI-powered power systems, smart grids, renewable energy forecasting, and industrial automation."
  },
  {
    question: "What types of AI in EEE projects are supported?",
    answer: "We support B.Tech projects (AI-based load prediction, IoT devices), M.Tech projects (deep learning for fault diagnosis, smart grid automation), and Ph.D. projects (federated learning, AI-driven cybersecurity) for EEE applications."
  },
  {
    question: "Which technologies are used in AI in EEE project development?",
    answer: "Our stack includes TensorFlow, PyTorch, MATLAB/Simulink, Arduino, ESP32, and FPGA for advanced AI model development and EEE system integration."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like AI in smart grids, renewable energy forecasting, and predictive maintenance, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEArtificialIntelligenceProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Artificial Intelligence in EEE IEEE Projects</li>
              <li>AI in Power Systems IEEE Projects</li>
              <li>Deep Learning in EEE IEEE Projects</li>
              <li>Smart Grid AI IEEE Projects</li>
              <li>Predictive Maintenance IEEE Projects</li>
              <li>AI for Renewable Energy IEEE Projects</li>
              <li>B.Tech AI EEE Projects</li>
              <li>M.Tech AI EEE Projects</li>
              <li>Ph.D. AI EEE Projects</li>
              <li>IEEE AI Publications</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Artificial Intelligence in EEE – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Artificial Intelligence in EEE – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) AI-powered solutions for power systems, smart grids, renewable energy, and industrial automation.
              </p>
              <p>
                With expertise in TensorFlow, PyTorch, MATLAB/Simulink, and IoT platforms, we deliver innovative solutions for load forecasting, predictive maintenance, and AI-driven control, ensuring academic rigor and industrial applicability.
              </p>
            </section>

          

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – AI Technologies vs. Applications in EEE</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>AI Technology in EEE</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Machine Learning for Power Systems</td>
                      <td>Load Forecasting, Energy Optimization</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Python, MATLAB/Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Deep Learning in Fault Diagnosis</td>
                      <td>Predictive Maintenance, Fault Classification</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Reinforcement Learning in Control Systems</td>
                      <td>Adaptive Control, Smart Automation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>AI in Renewable Energy</td>
                      <td>Solar & Wind Forecasting</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI in Smart Grids</td>
                      <td>Demand Response, Energy Theft Detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Natural Language Processing (NLP) in EEE</td>
                      <td>Human-Machine Interfaces</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>NLTK, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI-Enabled Industrial Automation</td>
                      <td>Robotic Process Automation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, TensorFlow</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>AI in Electric Vehicles (EV)</td>
                      <td>BMS Optimization, Autonomous Driving</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB/Simulink</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>IoT + AI in EEE</td>
                      <td>Smart Energy Management</td>
                      <td>B.Tech/M.Tech</td>
                      <td>AWS IoT, Arduino</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned AI in EEE Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Load Forecasting for Smart Grids (2023)</li>
                <li>Deep Learning Models for Fault Diagnosis in Electrical Machines (2024)</li>
                <li>Reinforcement Learning Control for Renewable Energy Integration (2025)</li>
                <li>AI-Enabled Smart Energy Management in Microgrids (2023)</li>
                <li>Predictive Maintenance of Motors using AI and IoT (2024)</li>
                <li>AI-Powered Cybersecurity Solutions for Smart Grids (2025)</li>
                <li>Hybrid AI Models for Renewable Energy Forecasting (2023)</li>
                <li>AI-Driven Autonomous Electric Vehicle Energy Optimization (2024)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides AI-driven EEE project development support for B.Tech, M.Tech, and Ph.D. scholars. The AI in EEE – Project Development Center offers expertise in machine learning, deep learning, IoT integration, control systems, renewable energy forecasting, and smart grid optimization.
              </p>
              <p>
                The institute ensures that every project is aligned with IEEE standards, making them publication-ready for IEEE Transactions and conferences.
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
              <li><a href="/cryptography-security-project-development">Cryptography & Security Project Development</a></li>
              <li><a href="/iot-project-development">IoT Project Development</a></li>
           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEArtificialIntelligenceProjectDevelopmentCenter;