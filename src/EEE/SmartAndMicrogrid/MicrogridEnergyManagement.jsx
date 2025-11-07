import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Microgrid Energy Management Project Development Center offer?",
    answer: "Narpavi Research Institute’s Microgrid Energy Management Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on microgrid energy management, distributed generation, predictive control, renewable integration, and AI-based optimization."
  },
  {
    question: "What types of Microgrid Energy Management projects are supported?",
    answer: "We support B.Tech projects (basic microgrid design, IoT-enabled monitoring), M.Tech projects (predictive load scheduling, AI/ML-based optimization), and Ph.D. projects (real-time adaptive control, distributed generation scheduling, HIL-tested experimental platforms)."
  },
  {
    question: "Which technologies are used in Microgrid project development?",
    answer: "Our stack includes MATLAB/Simulink, HOMER Pro, PSIM, IoT platforms (MQTT, SCADA), AI frameworks (TensorFlow, PyTorch), and FPGA/DSP-based controllers for real-time microgrid management development."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "All projects reference IEEE Transactions (2023–2025) on microgrid planning, distributed generation, adaptive control, renewable scheduling, and intelligent demand response for ensuring industry-relevant academic research."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer complete guidance including IEEE topic selection, simulations, hardware prototyping, IoT integration, IEEE-format documentation, and journal publications in IEEE/Scopus/SCI-indexed outlets."
  }
];

const EEEMicrogridEnergyManagementProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Microgrid Energy Management Projects</li>
              <li>IEEE Microgrid Projects 2023–2025</li>
              <li>B.Tech Microgrid Control Projects</li>
              <li>M.Tech AI-Based Microgrid Optimization</li>
              <li>Ph.D Predictive Load Management</li>
              <li>IoT-Based Microgrid Monitoring</li>
              <li>Narpavi Research Institute</li>
              <li>Distributed Generation Coordination</li>
              <li>Grid-Connected Microgrid Research</li>
              <li>Smart Microgrid Systems</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Microgrid Energy Management – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Microgrid Energy Management Project Development Center, a global hub for scholars to explore IEEE-aligned (2023–2025) domains in distributed generation scheduling, renewable integration, storage coordination, and predictive AI-assisted optimization.</p>
              <p>Students gain expertise in microgrid control, IoT-based monitoring, FPGA-based prototyping, load scheduling, and demand-side energy dispatch with real-time performance validation.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Microgrid Energy Management Project Development</h2>
              <ul>
                <li>Introduction to microgrid architecture, distributed generation, and storage</li>
                <li>Review IEEE topics (2023–2025) on microgrid control</li>
                <li>Simulations in MATLAB/Simulink, HOMER Pro, PSIM</li>
                <li>Performance analysis for stability, efficiency, and optimal dispatch</li>
                <li>FPGA/Microcontroller-based prototypes for microgrid controls</li>
                <li>IoT-enabled real-time load scheduling systems</li>
                <li>IEEE-style academic report preparation</li>
              </ul>
              <p>Focus: foundation building, simulation practice, experimental exposure.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Microgrid Energy Management Project Development</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) on microgrid control, distributed scheduling</li>
                <li>AI/ML predictive load optimization algorithms</li>
                <li>Multi-objective performance simulations for resilience and quality</li>
                <li>FPGA/DSP-based microgrid controllers with IoT integration</li>
                <li>Testing for both grid-connected and islanded modes</li>
                <li>Research paper writing aligned with IEEE standards</li>
              </ul>
              <p>Focus: advanced modeling, optimization strategies, and IEEE publications.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Microgrid Energy Management Project Development</h2>
              <ul>
                <li>Comprehensive IEEE Reviews (2023–2025) on predictive optimization & control</li>
                <li>Deep learning-based adaptive energy dispatch algorithms</li>
                <li>Hybrid microgrid development: integration of renewables & storage</li>
                <li>HIL simulations and lab-scale microgrid testbeds</li>
                <li>Predictive stability assessments with IoT-enabled monitoring</li>
                <li>Patents, IEEE publications, and global contributions</li>
              </ul>
              <p>Focus: innovation, predictive microgrid management, and global-level research impact.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Microgrid Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI-Based Microgrid Energy Management</td>
                      <td>Industrial campuses, commercial microgrids</td>
                      <td>Predictive load optimization & adaptive control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Distributed Generation Scheduling</td>
                      <td>Solar, wind, hybrid microgrids</td>
                      <td>Efficient dispatch, reliability</td>
                      <td>B.Tech/M.Tech</td>
                      <td>HOMER Pro, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>Energy Storage Coordination</td>
                      <td>Off-grid/remote microgrids</td>
                      <td>Peak shaving, stability enhancement</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled SCADA Monitoring</td>
                      <td>Smart campuses, industrial microgrids</td>
                      <td>Real-time diagnostics, predictive control</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Demand Response & Load Prioritization</td>
                      <td>Industrial/commercial microgrids</td>
                      <td>Adaptive scheduling, cost reduction</td>
                      <td>M.Tech</td>
                      <td>Python, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Grid-Connected & Islanded Control</td>
                      <td>Utility, smart remote microgrids</td>
                      <td>Seamless transitions, stability</td>
                      <td>Ph.D.</td>
                      <td>PSIM, MATLAB/Simulink</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in EEE research and development support. 
                Through the Microgrid Energy Management Project Development Center, we provide worldwide support on IEEE topics, algorithm design, prototyping, and academic publishing.
              </p>
              <p>
                Scholars gain practical lab exposure, learning advanced techniques for predictive microgrid control, 
                renewable integration, and international-level publishing opportunities.
              </p>
            </section>

            {/* FAQs */}
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

          {/* Right: Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/smart-metering-demand-response-project-development">Smart Metering & Demand Response</a></li>
              <li><a href="/grid-integration-of-renewables-project-development">Grid Integration of Renewables</a></li>
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage with Renewables</a></li>
              <li><a href="/hybrid-renewable-energy-systems-project-development">Hybrid Renewable Energy Systems</a></li>
              <li><a href="/iot-eee-project-development">IoT in EEE Project Development</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EEEMicrogridEnergyManagementProjectDevelopmentCenter;
