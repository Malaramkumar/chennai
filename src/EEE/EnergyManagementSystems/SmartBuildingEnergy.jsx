import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Smart Building Energy Management Project Development Center offer?",
    answer: "We offer IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students in HVAC optimization, lighting control, predictive energy analytics, IoT-based monitoring, and publication assistance in IEEE/Scopus/SCI journals."
  },
  {
    question: "What kinds of projects are supported?",
    answer: "B.Tech: AI models for HVAC and lighting simulations with Arduino/Raspberry Pi integration. M.Tech: Hybrid CNN-LSTM, RL-driven control with IoT-enabled embedded systems. Ph.D: GANs, Transformers, RL-DL hybrids for multi-building and smart city energy optimization, with IEEE/SCI publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "MATLAB/Simulink, Python (TensorFlow, PyTorch, Scikit-learn), Arduino, Raspberry Pi, IoT sensors, SCADA/BACnet systems, AWS/Azure cloud platforms for real-time analytics."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects align with IEEE Transactions on Smart Grid, Sustainable Energy, and Industrial Electronics (2023–2025), implementing hybrid AI models for HVAC, lighting, occupancy-based forecasting, and smart building IoT frameworks."
  },
  {
    question: "What academic support is provided?",
    answer: "We guide students through IEEE topic selection, AI/ML/DL model development, simulation+hardware integration, validation with real-time metrics, IEEE-format reporting, and Scopus/SCI publication."
  }
];

const EEESmartBuildingEnergyManagementProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Keywords Sidebar */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Building Energy Management projects</li>
              <li>AI building energy optimization</li>
              <li>HVAC control AI projects</li>
              <li>IoT smart building energy projects</li>
              <li>IEEE 2023–2025 smart building projects</li>
              <li>B.Tech smart building AI projects</li>
              <li>M.Tech AI energy optimization projects</li>
              <li>Ph.D. research in smart building energy</li>
              <li>Deep learning smart building energy projects</li>
              <li>Narpavi Research Institute project center</li>
            </ul>
          </div>

          {/* 📑 Content Center */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Smart Building Energy Management – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>The <strong>Smart Building Energy Management Project Development Center</strong> at Narpavi Research Institute helps students implement IEEE-aligned (2023–2025) projects for intelligent energy control. Projects cover HVAC, lighting, appliances, IoT sensor integration, predictive AI, and cloud analytics to minimize waste while maintaining comfort.</p>
            </section>

            {/* Global Context */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Global Trends & Industry Context</h2>
              <ul>
                <li><strong>Building Automation:</strong> AI optimizes HVAC & lighting, saving energy while reducing operational costs.</li>
                <li><strong>Occupancy-Adaptive Control:</strong> AI adjusts energy use based on real-time occupancy behavior.</li>
                <li><strong>IEEE 2023–2025 Alignment:</strong> Projects reflect IEEE Smart Grid and Sustainable Energy research on predictive optimization.</li>
              </ul>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology – Smart Building Approaches</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead><tr><th>Technology</th><th>Application</th><th>AI/Control Technique</th><th>Benefits</th></tr></thead>
                  <tbody>
                    <tr><td>Rule-Based Automation</td><td>Conventional Buildings</td><td>Logic Control</td><td>Static, less adaptive</td></tr>
                    <tr><td>Machine Learning</td><td>Smart Buildings</td><td>Regression, DTs</td><td>Predictive, moderate efficiency</td></tr>
                    <tr><td>Deep Learning</td><td>Smart IoT Buildings</td><td>RNN, LSTM</td><td>Real-time, adaptive, accurate</td></tr>
                    <tr><td>Hybrid AI + IoT</td><td>Smart Cities</td><td>RL + DL</td><td>Max savings, predictive control</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Building Projects</h2>
              <ul>
                <li>IEEE review of AI-based HVAC & lighting optimization</li>
                <li>Smart meter and IoT dataset collection</li>
                <li>Decision Trees, SVM, simple RNN models</li>
                <li>Arduino/Raspberry Pi sensor-based system (optional)</li>
              </ul>
              <p>Focus: practical exposure to AI-driven building energy savings with simulations and prototypes.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Building Projects</h2>
              <ul>
                <li>Hybrid CNN-LSTM algorithms for demand prediction</li>
                <li>Reinforcement Learning for adaptive scheduling</li>
                <li>IoT-sensor integration for HVAC/lighting automation</li>
                <li>Benchmarking vs classical systems (traditional BMS)</li>
              </ul>
              <p>Focus: advanced hybrid AI for building energy optimization, IEEE-ready prototypes.</p>
            </section>

            {/* Ph.D Cycle */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Smart Building Research</h2>
              <ul>
                <li>Novel GAN/Transformer/RL-DL hybrid architectures</li>
                <li>Multi-building & city-scale energy optimization</li>
                <li>Cloud simulation & embedded experimentation</li>
                <li>SCI/Scopus-indexed publications + smart building collaborations</li>
              </ul>
              <p>Focus: frontier AI-enabled predictive building energy management research scalable to smart cities.</p>
            </section>

            {/* Case Studies */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Case Studies & Applications</h2>
              <ul>
                <li><strong>HVAC Optimization:</strong> AI reduced usage by ~20% with comfort preserved.</li>
                <li><strong>IoT Lighting Control:</strong> DL predicted occupancy, saving 18% energy in pilot studies.</li>
                <li><strong>Multi-Building:</strong> AI coordinated loads across campuses for optimal distribution.</li>
              </ul>
            </section>

            {/* IEEE Titles */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based HVAC Energy Optimization (2023)</li>
                <li>Deep Learning Lighting Control Systems (2024)</li>
                <li>RL for Building Scheduling (2024)</li>
                <li>Hybrid AI Models for Multi-Building Coordination (2025)</li>
                <li>Predictive Analytics in Smart Building Management (2025)</li>
                <li>IoT-DL Integration for Energy Optimization (2025)</li>
                <li>LSTM Networks for Real-Time Building Prediction (2024)</li>
                <li>Commercial Energy Efficiency Optimization (2023)</li>
                <li>AI-Driven Demand Response in Buildings (2025)</li>
                <li>RL+DL Smart Building Management System (2024)</li>
              </ul>
            </section>

            {/* Future Scope */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Future Research & Scope</h2>
              <ul>
                <li>Integration into IoT-enabled smart city ecosystems.</li>
                <li>Self-adaptive comfort + energy-aware control strategies.</li>
                <li>Multi-campus and regional-level optimization studies.</li>
                <li>Advanced occupant comfort prediction + energy modeling.</li>
              </ul>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p><strong>Narpavi Research Institute</strong> is a global leader in IEEE-aligned smart building energy research. We provide complete guidance in AI-based building optimization, integrating simulations, IoT hardware, predictive models, and international publication to meet academic + industrial needs.</p>
            </section>

            {/* FAQ Section */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f,idx)=>(
                  <details key={idx}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* Schema FAQ SEO */}
              <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                 __html: JSON.stringify({
                   "@context":"https://schema.org",
                   "@type":"FAQPage",
                   "mainEntity": faqs.map(f=>({
                     "@type":"Question",
                     "name": f.question,
                     "acceptedAnswer": { "@type":"Answer", "text": f.answer }
                   }))
                 })
                }}
              />
            </section>
          </div>

          {/* 🔗 Related Centers */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/ai-energy-optimization-project-development">AI-based Energy Optimization</a></li>
              <li><a href="/dl-renewable-systems-project-development">Deep Learning in Renewable Systems</a></li>
              <li><a href="/ai-smart-grids-project-development">AI in Smart Grids</a></li>
              <li><a href="/predictive-maintenance-systems-project-development">Predictive Maintenance Systems</a></li>
              <li><a href="/ml-fault-detection-project-development">ML for Fault Detection</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEESmartBuildingEnergyManagementProjectDevelopmentCenter;
