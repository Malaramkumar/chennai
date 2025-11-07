import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Partial Discharge Analysis Project Development Center offer?",
    answer: "Narpavi Research Institute’s Partial Discharge Analysis Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on PD detection, insulation diagnostics, predictive maintenance, and condition monitoring of high-voltage systems."
  },
  {
    question: "What types of PD projects are supported?",
    answer: "We support B.Tech projects (PD detection basics, insulation diagnostics, lab-scale testing), M.Tech projects (AI-based PD signal analysis, IoT-enabled monitoring), and Ph.D. projects (deep learning PD diagnostics, predictive maintenance frameworks, patents, and IEEE publications)."
  },
  {
    question: "Which tools are used in PD research?",
    answer: "MATLAB/Simulink, COMSOL Multiphysics, PSCAD, LabVIEW, IoT platforms (MQTT), and AI/ML frameworks (TensorFlow, PyTorch) are employed for PD detection, modeling, and predictive diagnostics."
  },
  {
    question: "How are PD projects aligned with IEEE standards?",
    answer: "Projects follow IEEE Transactions (2023–2025) guidelines in PD detection, insulation degradation monitoring, AI-based predictive diagnostics, and utility-scale reliability testing."
  },
  {
    question: "What academic support is provided?",
    answer: "We guide students through IEEE topic selection, PD algorithm development, insulation testing, result validation, IEEE-style report writing, and publishing in IEEE, Scopus, and SCI journals."
  }
];

const EEEPartialDischargeAnalysisProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Partial Discharge Analysis Projects</li>
              <li>IEEE PD Research 2023–2025</li>
              <li>B.Tech PD Detection Projects</li>
              <li>M.Tech AI-Based PD Analysis</li>
              <li>Ph.D IoT PD Monitoring</li>
              <li>Narpavi Research Institute</li>
              <li>High Voltage Insulation Diagnostics</li>
              <li>Predictive Maintenance PD Systems</li>
              <li>Transformers PD Analysis</li>
              <li>GIS Partial Discharge Monitoring</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Partial Discharge Analysis – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Partial Discharge Analysis Project Development Center, focused on IEEE-aligned (2023–2025) project areas including PD detection, insulation diagnostics, predictive maintenance, and condition monitoring for high-voltage systems.</p>
              <p>Students gain expertise in PD testing setups, AI-assisted insulation diagnostics, IoT-enabled monitoring, and predictive maintenance of transformers, GIS, and high-voltage transmission networks.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Partial Discharge Projects</h2>
              <ul>
                <li>Understanding PD basics, insulation degradation, and HV testing</li>
                <li>IEEE papers (2023–2025) on PD detection techniques</li>
                <li>Simulation using MATLAB/Simulink, PSCAD, COMSOL</li>
                <li>Lab experiments with PD sensors (ultrasonic, HF, EM)</li>
                <li>Testing transformers, switchgear & GIS models</li>
                <li>IEEE-style reports</li>
              </ul>
              <p>Focus: foundational PD detection concepts and lab-based training.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Partial Discharge Projects</h2>
              <ul>
                <li>IEEE Transactions review (2023–2025) of advanced PD diagnostics</li>
                <li>Signal processing & AI/ML algorithms for PD analysis</li>
                <li>Simulation of PD patterns with predictive maintenance objectives</li>
                <li>IoT-enabled remote PD monitoring </li>
                <li>Prototype testing for transformers/GIS</li>
                <li>IEEE-format research outputs & journals</li>
              </ul>
              <p>Focus: predictive PD analysis with AI/IoT-based diagnostic monitoring.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Partial Discharge Projects</h2>
              <ul>
                <li>Comprehensive IEEE review of insulation diagnostics</li>
                <li>Deep learning-driven PD predictive models</li>
                <li>IoT-enabled monitoring of HVDC, GIS, Smart Grids</li>
                <li>HIL testing with PD monitoring for reliability validation</li>
                <li>Patents & IEEE journal publications</li>
              </ul>
              <p>Focus: ground-breaking predictive diagnostic frameworks, IEEE journals, patents.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – PD Analysis Technologies vs. Applications</h2>
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
                      <td>Electrical PD Detection Techniques</td>
                      <td>Transformers, Switchgear</td>
                      <td>Fault location & insulation degradation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Ultrasonic & EM Sensing</td>
                      <td>HV equipment, Machines</td>
                      <td>Non-invasive PD field testing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>LabVIEW, COMSOL</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Signal Analysis</td>
                      <td>Smart Grids, Industry Plants</td>
                      <td>Anomaly detection, insulation health</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>High-Frequency PD Detection</td>
                      <td>GIS, HVDC Lines</td>
                      <td>High-resolution predictive detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled PD Monitoring</td>
                      <td>Utilities, Renewable Grids</td>
                      <td>Remote monitoring & data logging</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Frameworks</td>
                    </tr>
                    <tr>
                      <td>Dielectric & Insulation Diagnostic Tools</td>
                      <td>Transformers, Cables</td>
                      <td>Insulation life expectancy & PD assessment</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, Multiphysics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an international hub for EEE research and development. 
                Through our Partial Discharge Analysis Project Development Center, we train scholars in signal processing, insulation diagnostics, 
                IoT-based monitoring, predictive AI models, and IEEE-standard validation methods.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item, i) => (
                  <details key={i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>

              {/* FAQ Schema for SEO */}
              <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity":faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer":{ "@type":"Answer","text":f.answer }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* 🔗 Right Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/high-voltage-testing-equipment-project-development">High Voltage Testing of Equipment</a></li>
              <li><a href="/insulation-materials-techniques-project-development">Insulation Materials & Techniques</a></li>
              <li><a href="/overvoltage-surge-protection-project-development">Overvoltage & Surge Protection</a></li>
              <li><a href="/gas-insulated-substations-project-development">Gas Insulated Substations (GIS)</a></li>
              <li><a href="/hvdc-transmission-systems-project-development">HVDC Transmission Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEEPartialDischargeAnalysisProjectDevelopmentCenter;
