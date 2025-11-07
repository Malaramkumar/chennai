import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Gas Insulated Substations (GIS) Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. students working on IEEE-aligned (2023–2025) projects in compact GIS design, SF6 insulation optimization, partial discharge monitoring, and renewable energy integration into GIS systems."
  },
  {
    question: "What types of GIS projects are supported?",
    answer: "We support B.Tech projects (basic GIS layouts, PD monitoring, insulation studies), M.Tech projects (AI-assisted predictive maintenance, IoT-enabled GIS monitoring), and Ph.D. projects (smart GIS grids with renewable integration, patents, and IEEE publications)."
  },
  {
    question: "Which tools and technologies are used for GIS projects?",
    answer: "We use MATLAB/Simulink, PSCAD, COMSOL Multiphysics, IoT platforms, FPGA/DSP-based controllers, and AI/ML frameworks (TensorFlow, PyTorch) for GIS simulation, monitoring, and diagnostics."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects comply with IEEE Transactions (2023–2025), focusing on compact GIS, SF6 gas management, partial discharge monitoring, AI-assisted diagnostics, and IEEE-standard substation integration with smart grids."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide guidance in IEEE topic selection, GIS modeling, partial discharge testing, AI-based diagnostics, IEEE report preparation, and research publication in IEEE/Scopus/SCI indexed journals."
  }
];

const EEEGISProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Left Column */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Gas Insulated Substation Projects</li>
              <li>IEEE GIS Research 2023–2025</li>
              <li>B.Tech Compact GIS Projects</li>
              <li>M.Tech AI-Based GIS Monitoring</li>
              <li>Ph.D SF6 Insulation Studies</li>
              <li>Narpavi Research Institute</li>
              <li>Partial Discharge GIS Projects</li>
              <li>IoT-Based Substation Monitoring</li>
              <li>High Voltage GIS Design</li>
              <li>Smart Grid GIS Integration</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Gas Insulated Substations (GIS) – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Gas Insulated Substations (GIS) Project Development Center, 
                where B.Tech, M.Tech, and Ph.D. students explore IEEE-aligned (2023–2025) domains including compact GIS design, partial discharge monitoring, insulation optimization, and smart renewable-energy integration.
              </p>
              <p>
                Our scholars gain expertise in GIS modeling, insulation testing, AI-assisted predictive maintenance, IoT-enabled monitoring, and laboratory validation of GIS systems.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech GIS Project Development</h2>
              <ul>
                <li>Understanding GIS architecture, layouts, and insulation concepts</li>
                <li>Study of IEEE publications (2023–2025) on GIS reliability & PD analysis</li>
                <li>Simulation with MATLAB/Simulink, PSCAD, COMSOL Multiphysics</li>
                <li>Testing insulation performance and PD measurement</li>
                <li>IoT-enabled GIS data acquisition (gas levels, PD signals)</li>
                <li>IEEE-formatted reports & project evaluation</li>
              </ul>
              <p>Focus: basic GIS design, PD evaluation & hands-on experimentation.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech GIS Project Development</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) review of GIS diagnostics & compact designs</li>
                <li>AI/ML algorithms for predictive GIS maintenance</li>
                <li>IoT-based GIS performance monitoring & environmental safety</li>
                <li>Advanced insulation & PD diagnostics with lab-scale GIS prototypes</li>
                <li>Testing substation reliability & renewable grid integration</li>
                <li>IEEE-compliant research outputs</li>
              </ul>
              <p>Focus: predictive fault diagnostics, reliability optimization, renewable coordination.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. GIS Project Development</h2>
              <ul>
                <li>Critical IEEE review (2023–2025) on SF6 insulation & PD smart grids</li>
                <li>Deep learning-based PD detection & predictive maintenance</li>
                <li>Development of smart GIS models w/ renewable integration</li>
                <li>Real-time IoT-based monitoring of GIS health</li>
                <li>HIL testing of GIS prototypes</li>
                <li>Patents & IEEE journal publications</li>
              </ul>
              <p>Focus: pioneering GIS research, patents, and industry-standard methodologies.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – GIS Technologies vs. Applications</h2>
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
                      <td>Compact GIS Design & Layout</td>
                      <td>Urban/Industrial Substations</td>
                      <td>Space optimization & reliability</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>SF6 Insulation & Gas Management</td>
                      <td>High Voltage Substations</td>
                      <td>Dielectric performance & leakage mitigation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, ANSYS</td>
                    </tr>
                    <tr>
                      <td>Partial Discharge (PD) Monitoring</td>
                      <td>GIS, Transformers</td>
                      <td>Predictive insulation monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>LabVIEW, MATLAB</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Diagnostics</td>
                      <td>Utility Substations</td>
                      <td>Smart predictive maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Smart Grid Integration</td>
                      <td>Microgrids, Urban Networks</td>
                      <td>Optimal power flow w/ RES</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, MATLAB</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>GIS substations, HVDC</td>
                      <td>Real-time PD & gas-level monitoring</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is renowned for global EEE project innovation. 
                Through the GIS Project Development Center, we train scholars on compact GIS modeling, SF6 insulation management, 
                PD anomaly detection, AI-driven predictive maintenance, and renewable integration.
              </p>
              <p>
                Our research guidance ensures scholars achieve IEEE-level outcomes in publications, prototypes, and industrial-class GIS reliability standards.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx) => (
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* JSON-LD Schema */}
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

          {/* 🔗 Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/high-voltage-testing-equipment-project-development">High Voltage Testing of Equipment</a></li>
              <li><a href="/insulation-materials-techniques-project-development">Insulation Materials & Techniques</a></li>
              <li><a href="/overvoltage-surge-protection-project-development">Overvoltage & Surge Protection</a></li>
              <li><a href="/real-time-monitoring-scada-project-development">Real-Time Monitoring & SCADA</a></li>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EEEGISProjectDevelopmentCenter;
