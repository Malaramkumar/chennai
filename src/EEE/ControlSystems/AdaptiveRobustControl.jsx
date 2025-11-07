import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Adaptive & Robust Control Project Development Center offer?",
    answer: "We provide project support for B.Tech, M.Tech, and Ph.D. students worldwide in IEEE-aligned (2023–2025) areas such as adaptive control, H∞ robust control, sliding mode controllers, fuzzy adaptive systems, and AI-based predictive controllers. Services include simulation assistance, hardware prototyping, algorithm design, and IEEE publication guidance."
  },
  {
    question: "What types of Adaptive & Robust Control projects are supported?",
    answer: "We support B.Tech projects (adaptive PID, MRAC, simple robust controllers), M.Tech projects (H∞ control, sliding mode adaptive control, fuzzy adaptive controllers), and Ph.D. projects (hybrid adaptive-robust designs, nonlinear AI/ML adaptive control for real-world autonomous and industrial systems)."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "MATLAB/Simulink, LabVIEW, Arduino/PIC/ARM microcontrollers, FPGA for real-time adaptive-robust control, Python with TensorFlow/PyTorch for AI-based adaptive strategies, and HIL (Hardware-in-the-loop) test setups."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025) on adaptive systems, robust nonlinear control, predictive optimization, sliding mode, fuzzy adaptive control, and applications in aerospace, smart grids, and process industries."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide full-cycle support including project ideation, simulation, real-time hardware implementation, performance validation, IEEE report preparation, and publication in IEEE/Scopus/SCI-indexed journals."
  }
];

const EEEAdaptiveRobustControlProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Adaptive & Robust Control Project Development Center</li>
              <li>Adaptive Control Projects for B.Tech</li>
              <li>Robust Control Systems Projects for M.Tech</li>
              <li>Ph.D. Research in Adaptive Control</li>
              <li>Sliding Mode Control Projects</li>
              <li>H∞ Control Projects IEEE</li>
              <li>Adaptive Control IEEE 2023–2025 Projects</li>
              <li>Robust Control in Aerospace Systems</li>
              <li>Adaptive Fuzzy Control Research</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Adaptive & Robust Control – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> drives innovation in Adaptive & Robust Control – Project Development Center, 
                enabling students and researchers to implement IEEE-aligned (2023–2025) solutions in adaptive self-tuning controllers, 
                robust H∞ systems, sliding mode, fuzzy adaptive, and hybrid AI-based frameworks for real-time applications.
              </p>
              <p>
                Students learn simulation (MATLAB/Simulink), hardware prototyping with microcontrollers/FPGA, and AI-assisted predictive algorithms for aerospace, EVs, smart grids, robotics, and biomedical systems.
              </p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Adaptive & Robust Control</h2>
              <ul>
                <li>Ensures stability in uncertain and nonlinear environments.</li>
                <li>Widely used in aerospace and defense systems.</li>
                <li>Vital for renewable integration (wind/solar) and smart grids.</li>
                <li>Improves reliability in industrial automation and process control.</li>
                <li>IEEE (2023–2025) emphasizes AI-driven adaptive controllers.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Adaptive & Robust Control</h2>
              <ul>
                <li>PID with adaptive tuning in MATLAB/Simulink</li>
                <li>Model Reference Adaptive Control (MRAC)</li>
                <li>Introduction to simple robust controllers</li>
                <li>Microcontroller-based adaptive PID prototypes</li>
              </ul>
              <p>Focus: Foundations of adaptive-robust control and IEEE-guided simulations.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Adaptive & Robust Control</h2>
              <ul>
                <li>H∞ robust controller design for uncertain plants</li>
                <li>Sliding mode adaptive systems for nonlinear robotics</li>
                <li>Fuzzy adaptive controllers with AI optimization</li>
                <li>Hardware-in-the-loop adaptive control validation</li>
              </ul>
              <p>Focus: advanced real-time industrial-level adaptive-robust algorithms with AI integration.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Projects in Adaptive & Robust Control</h2>
              <ul>
                <li>Hybrid adaptive-robust nonlinear methods</li>
                <li>AI/ML-based predictive robust control frameworks</li>
                <li>Autonomous vehicles and resilient renewable integration research</li>
                <li>Patents & IEEE/SCI journal publishing</li>
              </ul>
              <p>Focus: groundbreaking theoretical and applied contributions to adaptive and robust control aligned with IEEE standards.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Adaptive & Robust Control vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Control Type</th>
                      <th>Industry Application</th>
                      <th>Key Advantages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Adaptive Control</td>
                      <td>Aerospace, EVs, Renewables</td>
                      <td>Real-time self-tuning, adaptation</td>
                    </tr>
                    <tr>
                      <td>Robust H∞ Control</td>
                      <td>Smart Grids, Robotics</td>
                      <td>Stability under uncertainties</td>
                    </tr>
                    <tr>
                      <td>Sliding Mode Control</td>
                      <td>Autonomous Vehicles</td>
                      <td>High resilience to disturbances</td>
                    </tr>
                    <tr>
                      <td>Adaptive Neural/Fuzzy</td>
                      <td>Biomedical, Industry 4.0</td>
                      <td>Intelligent, self-learning</td>
                    </tr>
                    <tr>
                      <td>Robust Predictive Control</td>
                      <td>Process, Chemical Plants</td>
                      <td>Predictive robustness under variations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute empowers global scholars in Adaptive & Robust Control through simulation, real-time prototyping, AI-driven optimization, and IEEE-standard publications. 
                Our mentorship bridges academic excellence with industrial deployment of robust, adaptive, and intelligent controllers.
              </p>
            </section>

            {/* FAQuestions */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, idx)=>(
                  <details key={idx}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* SEO JSON-LD Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context":"https://schema.org",
                      "@type":"FAQPage",
                      "mainEntity":faqs.map(ff=>({
                        "@type":"Question",
                        "name":ff.question,
                        "acceptedAnswer":{
                          "@type":"Answer",
                          "text":ff.answer
                        }
                      }))
                  })
                }}
              />
            </section>
          </div>

          {/* 🔗 Right Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/pid-advanced-controllers-project-development">PID & Advanced Controllers</a></li>
              <li><a href="/real-time-operating-systems-project-development">Real-Time Operating Systems (RTOS)</a></li>
              <li><a href="/fpga-control-applications-project-development">FPGA-Based Control Applications</a></li>
              <li><a href="/automotive-embedded-systems-project-development">Automotive Embedded Systems</a></li>
              <li><a href="/embedded-robotics-project-development">Embedded Systems for Robotics</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEEAdaptiveRobustControlProjectDevelopmentCenter;
