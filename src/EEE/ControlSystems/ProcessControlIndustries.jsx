import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Process Control in Industries Project Development Center offer?",
    answer: "We provide B.Tech, M.Tech, and Ph.D. scholars IEEE-aligned (2023–2025) support in simulations, prototyping, and publications on PID, MPC, adaptive, fuzzy, and AI/ML process control methods. Services include project guidance, hardware implementation, real-time integration with SCADA/IIoT, and IEEE documentation."
  },
  {
    question: "What types of process control projects are supported?",
    answer: "We support B.Tech projects (PID controllers, fuzzy regulation, Arduino/PLC-based prototypes), M.Tech projects (MPC, adaptive process control, IoT/SCADA integration), and Ph.D. projects (AI/ML-driven process control, digital twins, Industry 4.0 automation with IEEE/SCI publications)."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "MATLAB/Simulink, LabVIEW, Proteus, PLC/SCADA systems, Arduino, Raspberry Pi, Python, IIoT protocols (Modbus, OPC-UA, MQTT), and AI/ML frameworks (TensorFlow, PyTorch)."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are aligned to IEEE Transactions (2023–2025) on industrial automation, process optimization, adaptive/robust control, secure IIoT integration, and AI-based predictive control for Industry 4.0."
  },
  {
    question: "What academic support is provided?",
    answer: "We guide students with IEEE project ideation, simulation and prototyping, controller design, IIoT/SCADA integration, technical documentation, and submission to IEEE, Scopus, and SCI-indexed journals."
  }
];

const EEEProcessControlIndustriesProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Process Control in Industries Project Development Center</li>
              <li>Industrial Automation Projects</li>
              <li>Process Control IEEE Projects</li>
              <li>PID Control Projects</li>
              <li>Model Predictive Control Research</li>
              <li>Adaptive Process Control Projects</li>
              <li>IIoT Process Automation Projects</li>
              <li>Ph.D. Research in Process Control</li>
              <li>Industry 4.0 Process Control Systems</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Process Control in Industries – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Process Control in Industries Project Development Center, supporting B.Tech, M.Tech, and Ph.D. researchers in IEEE-aligned (2023–2025) projects. The focus lies in optimal automation, safety, adaptive control, and AI-driven IIoT smart automation.</p>
              <p>Process control forms the foundation of modern industry — spanning chemical plants, oil & gas, pharmaceuticals, power systems, and smart manufacturing.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Process Control in Industries</h2>
              <ul>
                <li>Ensures safety and reliability in critical industrial operations.</li>
                <li>Improves production efficiency, reduces costs, and optimizes energy.</li>
                <li>Seamlessly integrates with Industrial IoT (IIoT) and Industry 4.0 frameworks.</li>
                <li>Enables real-time monitoring and predictive maintenance strategies.</li>
                <li>Highlighted IEEE research (2023–2025) in AI/ML industrial process control.</li>
              </ul>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Process Control Projects</h2>
              <ul>
                <li>MATLAB simulations for PID-based process setups</li>
                <li>PLC/Arduino-based prototypes for temperature/pressure control</li>
                <li>Fuzzy controllers for small-scale industry case studies</li>
                <li>Reports prepared in IEEE format</li>
              </ul>
              <p>Focus: fundamental PID & fuzzy control in hands-on industrial setups.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Process Control Projects</h2>
              <ul>
                <li>Model Predictive Control (MPC) with MATLAB + Simulink prototyping</li>
                <li>Adaptive controllers for dynamic industrial applications</li>
                <li>IoT-based process monitoring dashboards integrated with SCADA</li>
                <li>Prototyping projects with OPC-UA, Modbus communication</li>
              </ul>
              <p>Focus: advanced MPC/Adaptive AI-powered process optimization integrated into Industry 4.0.</p>
            </section>

            {/* Ph.D Cycle */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Process Control Projects</h2>
              <ul>
                <li>AI/ML-driven process control frameworks for predictive optimization</li>
                <li>Digital twin-based research for power & chemical plant simulations</li>
                <li>Cyber-secure automation integration for Industry 4.0 factories</li>
                <li>SCI/IEEE-indexed publications and patents</li>
              </ul>
              <p>Focus: innovative contributions for resilient, intelligent, and autonomous process industries.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Process Control Techniques & Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technique</th>
                      <th>Industry Application</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PID Control</td>
                      <td>Chemical Plants, Refineries</td>
                      <td>Simple, effective, widely used</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Power & Pharma Plants</td>
                      <td>Predictive optimization, constraint handling</td>
                    </tr>
                    <tr>
                      <td>Adaptive Control</td>
                      <td>Automotive, Aerospace</td>
                      <td>Self-tunes to variations</td>
                    </tr>
                    <tr>
                      <td>Fuzzy Logic Control</td>
                      <td>Food, Robotics</td>
                      <td>Handles uncertainty, human-like reasoning</td>
                    </tr>
                    <tr>
                      <td>AI/ML-based Control</td>
                      <td>Smart Factories, Industry 4.0</td>
                      <td>Predictive, adaptive, intelligent automation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute offers complete IEEE-compliant support for process control system projects. We empower scholars to implement, validate, optimize, and publish impactful process automation solutions – bridging academia and industrial needs globally.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,idx)=>(
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* JSON-LD Schema.org FAQ SEO */}
              <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context":"https://schema.org",
                      "@type":"FAQPage",
                      "mainEntity": faqs.map(f=>({
                        "@type":"Question",
                        "name": f.question,
                        "acceptedAnswer": {
                          "@type":"Answer",
                          "text": f.answer
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
              <li><a href="/adaptive-robust-control-project-development">Adaptive & Robust Control</a></li>
              <li><a href="/optimal-control-systems-project-development">Optimal Control Systems</a></li>
              <li><a href="/real-time-operating-systems-project-development">RTOS in Control Systems</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">Intelligent Control with AI/ML</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEEProcessControlIndustriesProjectDevelopmentCenter;
