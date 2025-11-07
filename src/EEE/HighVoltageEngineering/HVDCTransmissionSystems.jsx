import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the HVDC Transmission Systems Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) domains such as HVDC converters, stability analysis, power flow optimization, and multi-terminal HVDC systems integration."
  },
  {
    question: "What types of HVDC projects are supported?",
    answer: "We support B.Tech projects (basic LCC and VSC modeling, voltage regulation experiments), M.Tech projects (AI-assisted predictive control, renewable integration, multi-terminal optimization), and Ph.D. projects (deep learning HVDC predictive frameworks, IoT-enabled HVDC real-time monitoring, innovation and patents)."
  },
  {
    question: "Which tools are used for HVDC research?",
    answer: "We use MATLAB/Simulink, PSCAD, PLECS for HVDC system simulations; FPGA/DSP for hardware prototypes; IoT-based monitoring systems; and AI frameworks like TensorFlow/PyTorch for predictive analysis."
  },
  {
    question: "How are HVDC projects aligned with IEEE standards?",
    answer: "Projects use IEEE Transactions (2023–2025) as foundation, focusing on HVDC converters, stability, predictive control, renewable coordination, and standard-compliant multi-terminal systems."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide IEEE topic mentoring, extensive simulation, hardware prototyping support, AI and IoT-based monitoring, IEEE format reports, and publication support for IEEE/Scopus/SCI journals."
  }
];

const EEEHVDCTransmissionSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Left Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>HVDC Transmission Projects</li>
              <li>IEEE HVDC Research 2023–2025</li>
              <li>B.Tech HVDC System Design</li>
              <li>M.Tech Multi-Terminal HVDC Projects</li>
              <li>Ph.D AI-Based HVDC Control</li>
              <li>Narpavi Research Institute</li>
              <li>VSC & LCC HVDC Converters</li>
              <li>Predictive Control HVDC Systems</li>
              <li>IoT-Based HVDC Monitoring</li>
              <li>Renewable Energy HVDC Integration</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>HVDC Transmission Systems – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the HVDC Transmission Systems Project Development Center, an IEEE-aligned (2023–2025) initiative supporting B.Tech, M.Tech, and Ph.D. scholars in converter design, stability analysis, renewable integration, and predictive HVDC control.
              </p>
              <p>
                Students gain practical expertise with advanced HVDC converters, LCC/VSC simulation, IoT-enabled monitoring, deep-learning predictive frameworks, and real-time laboratory validation.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech HVDC Transmission Projects</h2>
              <ul>
                <li>Basics of HVDC, LCC, VSC converter technologies</li>
                <li>Study of IEEE publications on HVDC links & system dynamics</li>
                <li>Simulation with MATLAB/Simulink, PSCAD, PLECS</li>
                <li>AC/DC withstand, voltage regulation, power flow modeling</li>
                <li>Lab-scale LCC or VSC prototypes for HVDC converters</li>
                <li>Testing response under varying load & fault conditions</li>
                <li>IEEE-style academic reports</li>
              </ul>
              <p>Focus: basics of HVDC equipment & control understanding.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech HVDC Transmission Projects</h2>
              <ul>
                <li>IEEE Transactions review (2023–2025) for state-of-art HVDC converters</li>
                <li>AI/ML-assisted predictive controls for HVDC stability</li>
                <li>Multi-objective simulations for system efficiency & reliability</li>
                <li>Hardware-in-loop LCC/VSC converter experimentation</li>
                <li>IoT-enabled diagnostics in HVDC test labs</li>
                <li>IEEE-style publications & validation outputs</li>
              </ul>
              <p>Focus: predictive optimization, renewable integration with multi-terminal stability.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. HVDC Transmission Projects</h2>
              <ul>
                <li>IEEE literature analysis (2023–2025) of advanced HVDC research</li>
                <li>Deep Learning-based predictive stability & control algorithms</li>
                <li>Development of multi-terminal HVDC networks integrated with RES</li>
                <li>IoT-based real-time monitoring with lab-scale validation</li>
                <li>Patents & IEEE Journal Publications</li>
                <li>Industrial collaboration & global standards contributions</li>
              </ul>
              <p>Focus: ground-breaking AI-supported predictive HVDC controls, patents & publications.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – HVDC Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LCC Converters</td>
                      <td>Long-distance HVDC</td>
                      <td>Efficient conversion, low harmonics</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>VSC Converters</td>
                      <td>Renewable + Smart Grids</td>
                      <td>Reactive support, bidirectional flow</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/PLECS</td>
                    </tr>
                    <tr>
                      <td>Multi-Terminal Networks</td>
                      <td>Offshore Wind, Interconnected grids</td>
                      <td>Optimal flows & fault analysis</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, Simulink</td>
                    </tr>
                    <tr>
                      <td>HVDC System Stability</td>
                      <td>Transmission + Microgrids</td>
                      <td>Voltage regulation & damping</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Predictive Control</td>
                      <td>Smart Grids, Industrial HVDC</td>
                      <td>Fault prediction & adaptive voltage control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>HVDC substations</td>
                      <td>Real-time anomaly detections</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is globally known as a leader in Electrical and Electronics Engineering project development.
                Through the HVDC Transmission Systems Project Development Center, we help scholars contribute to IEEE-impact research,
                leveraging simulation labs, AI-assisted design methods, and experimental validation frameworks.
              </p>
              <p>
                Our scholars gain academic and industrial recognition by bridging IEEE domains into practical hardware-ready HVDC systems.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* SEO Schema for FAQ */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({
                      "@type": "Question",
                      "name": f.question,
                      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
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
              <li><a href="/gas-insulated-substations-project-development">Gas Insulated Substations (GIS)</a></li>
              <li><a href="/high-voltage-testing-equipment-project-development">High Voltage Testing of Equipment</a></li>
              <li><a href="/insulation-materials-techniques-project-development">Insulation Materials & Techniques</a></li>
              <li><a href="/overvoltage-surge-protection-project-development">Overvoltage & Surge Protection</a></li>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EEEHVDCTransmissionSystemsProjectDevelopmentCenter;
