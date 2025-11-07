import "../EEEProjectDevelopmentCenter.scss";  
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";  

const faqs = [
  {
    question: "What services does the Distributed Control Systems (DCS) Project Development Center offer?",
    answer: "We guide B.Tech, M.Tech, and Ph.D. students through IEEE-aligned (2023–2025) projects in DCS, covering simulation, hardware setup, communication integration, AI/ML-based DCS, and publication support."
  },
  {
    question: "What types of DCS projects are supported?",
    answer: "B.Tech projects include mini-DCS setups like water treatment, process plant simulations, and small-scale automation. M.Tech projects involve industrial communication protocols (Profibus, Modbus, OPC) and IoT-enabled DCS. Ph.D. projects focus on AI-integrated DCS, cyber-physical architectures, Industry 4.0 compliance, patents, and IEEE/SCI publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "MATLAB/Simulink, LabVIEW, PLC/DCS trainers, Wonderware/Emerson DeltaV SCADA software, Modbus/Profibus/OPC networking, edge IoT devices, and Python AI/ML frameworks such as TensorFlow & PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are aligned with IEEE Transactions (2023–2025) on industrial communication, distributed multi-loop process automation, AI for predictive DCS monitoring, and Industry 4.0 IoT-DCS integrations."
  },
  {
    question: "What academic support is provided?",
    answer: "End-to-end guidance is provided: topic selection, simulations, hardware prototyping, industrial communication networking, analysis, IEEE-style documentation, and Scopus/SCI publication support."
  }
];

const EEEDcsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Distributed Control Systems Project Development Center</li>
              <li>DCS Projects IEEE</li>
              <li>Industrial Automation with DCS</li>
              <li>Process Automation DCS Projects</li>
              <li>Smart Factory DCS Projects</li>
              <li>IoT-DCS Integration Projects</li>
              <li>AI in Distributed Control Systems</li>
              <li>Industrial Control IEEE Projects</li>
              <li>Industry 4.0 DCS Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Distributed Control Systems (DCS) – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Distributed Control Systems (DCS) Project Development Center, guiding scholars worldwide in developing IEEE-aligned (2023–2025) projects on process automation, multi-loop control, IIoT-enabled DCS, and cyber-secure Industry 4.0 DCS systems.</p>
              <p>DCS is widely deployed in power plants, chemical refineries, energy industries, and smart factories where fault tolerance, scalability, and reliability are non-negotiable.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Distributed Control Systems</h2>
              <ul>
                <li>Provides hierarchical and decentralized control in complex plants.</li>
                <li>Ensures safety, reliability, and fault tolerance in large operations.</li>
                <li>Highly flexible & modular for process industries.</li>
                <li>Supports seamless integration with IoT, SCADA, and smart grid protocols.</li>
                <li>Key enabler for Industry 4.0 compliant automation.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech DCS Projects</h2>
              <ul>
                <li>Mini-DCS implementations for industrial plant simulations</li>
                <li>Water treatment and chemical process control DCS systems</li>
                <li>SCADA-integrated small automation projects</li>
              </ul>
              <p>Focus: understanding basic multi-loop automation and small-scale industrial reliability models.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech DCS Projects</h2>
              <ul>
                <li>IoT-based DCS monitoring for smart grids or factories</li>
                <li>Design of modular DCS with Profibus, Modbus, and OPC protocols</li>
                <li>Integration of SCADA with distributed control infrastructure</li>
                <li>Simulation of resilient industrial operations</li>
              </ul>
              <p>Focus: advanced DCS process control with IoT and industrial networking aligned to IEEE standards.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D DCS Projects</h2>
              <ul>
                <li>AI/ML augmented predictive DCS architectures</li>
                <li>Cyber-secure, fault-tolerant DCS for Industry 4.0</li>
                <li>Digital twin-enabled DCS systems</li>
                <li>Patent filings and IEEE/SCI-compliant journal papers</li>
              </ul>
              <p>Focus: futuristic cyber-physical DCS enabling resilient, scalable, and intelligent industrial control systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – DCS vs Other Systems</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Traditional PLC Systems</td>
                      <td>Small-scale automation</td>
                      <td>Low cost, simple logic</td>
                    </tr>
                    <tr>
                      <td>Distributed Control Systems</td>
                      <td>Power Plants, Refineries</td>
                      <td>Scalable, reliable, fault-tolerant</td>
                    </tr>
                    <tr>
                      <td>SCADA Systems</td>
                      <td>Utilities & Infrastructure</td>
                      <td>Remote supervisory monitoring</td>
                    </tr>
                    <tr>
                      <td>IoT-Integrated DCS</td>
                      <td>Smart Factories</td>
                      <td>Cloud connectivity + analytics</td>
                    </tr>
                    <tr>
                      <td>AI/ML-based DCS</td>
                      <td>Future Automation Research</td>
                      <td>Predictive, self-learning optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute supports students and researchers worldwide with end-to-end solutions in Distributed Control Systems projects — from modeling, protocol integration, simulation, to IEEE-quality publication. We ensure every scholar contributes impactful solutions to industrial automation fields.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item,idx)=>(
                  <details key={idx}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>

              {/* FAQ Schema */}
              <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context":"https://schema.org",
                      "@type":"FAQPage",
                      "mainEntity":faqs.map(f=>({
                        "@type":"Question",
                        "name":f.question,
                        "acceptedAnswer":{ "@type":"Answer", "text":f.answer }
                      }))
                  })
                }} 
              />
            </section>
          </div>

          {/* 🔗 Right Column */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/plc-scada-systems-project-development">PLC & SCADA Systems</a></li>
              <li><a href="/process-control-in-industries-project-development">Process Control in Industries</a></li>
              <li><a href="/real-time-monitoring-scada-project-development">Real-Time Monitoring & SCADA</a></li>
              <li><a href="/adaptive-robust-control-project-development">Adaptive & Robust Control</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">Intelligent Control using AI/ML</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEEDcsProjectDevelopmentCenter;
