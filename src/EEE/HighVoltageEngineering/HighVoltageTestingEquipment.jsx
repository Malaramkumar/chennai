import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the High Voltage Testing of Equipment Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) research on dielectric testing, withstand voltage analysis, partial discharge diagnostics, AI-assisted monitoring, and predictive high voltage testing systems."
  },
  {
    question: "What types of projects are supported?",
    answer: "We support B.Tech projects (dielectric testing, AC/DC withstand, impulse simulation), M.Tech projects (advanced PD analysis, AI-assisted fault detection), and Ph.D. projects (predictive testing frameworks, IoT-based HV monitoring, patents and IEEE publications)."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, PSCAD, COMSOL Multiphysics, LabVIEW, IoT platforms, FPGA/DSP-based controllers, and AI/ML frameworks such as TensorFlow and PyTorch for predictive analysis."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025) on dielectric testing, withstand/impulse diagnostics, PD monitoring, condition analysis, and standard-compliant HV equipment testing methodologies."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We support IEEE topic selection, high voltage lab testing setups, AI-based analysis, technical documentation in IEEE format, and publication guidance for IEEE/Scopus/SCI journals."
  }
];

const EEEHighVoltageTestingEquipmentProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>High Voltage Testing Projects</li>
              <li>IEEE HV Equipment Testing 2023–2025</li>
              <li>B.Tech Dielectric Testing Projects</li>
              <li>M.Tech Partial Discharge Analysis</li>
              <li>Ph.D AI-Based HV Monitoring</li>
              <li>Narpavi Research Institute</li>
              <li>AC/DC Withstand Voltage Projects</li>
              <li>Impulse Testing Research</li>
              <li>IoT-Based HV Equipment Monitoring</li>
              <li>Industrial HV Test Systems</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>High Voltage Testing of Equipment – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the High Voltage Testing of Equipment Project Development Center, supporting global scholars in IEEE-aligned (2023–2025) testing, diagnostic, and predictive analysis of high voltage systems.</p>
              <p>This center trains students in AC/DC withstand tests, impulse testing, PD diagnostics, and real-time IoT/AI-based HV monitoring for transformers, switchgear, HVDC links, and renewable-integrated systems.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech High Voltage Testing Projects</h2>
              <ul>
                <li>Basics of HV insulation and test methodologies</li>
                <li>IEEE (2023–2025) publications on dielectric testing & PD techniques</li>
                <li>Simulations with MATLAB/Simulink, PSCAD, COMSOL</li>
                <li>Lab-scale AC/DC withstand and impulse testing setups</li>
                <li>Partial discharge measurement & safety protocols</li>
                <li>Preparation of IEEE-style technical reports</li>
              </ul>
              <p>Focus: foundational knowledge, dielectric strength analysis, and safety-compliant testing.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech High Voltage Testing Projects</h2>
              <ul>
                <li>Review of IEEE Transactions (2023–2025) on HV testing and diagnostics</li>
                <li>AI/ML-assisted predictive fault detection & insulation diagnostics</li>
                <li>Multi-objective simulations for reliability & optimization</li>
                <li>IoT-enabled lab setups for AC/DC & impulse testing</li>
                <li>Advanced PD detection for predictive maintenance</li>
                <li>IEEE-compliant reporting & publications</li>
              </ul>
              <p>Focus: predictive analytics, AI/IoT-based HV testing automation, and practical validation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. High Voltage Testing Projects</h2>
              <ul>
                <li>Comprehensive IEEE reviews (2023–2025) on HV testing & PD monitoring</li>
                <li>Deep learning-driven predictive insulation testing frameworks</li>
                <li>IoT-enabled real-time condition monitoring for HVDC/smart grids</li>
                <li>Experimental HIL lab-scale validation for impulse and withstand testing</li>
                <li>Patents & publications in IEEE journals on advanced PD algorithms</li>
              </ul>
              <p>Focus: pioneering AI-driven testing, predictive maintenance, and industrial standards contribution.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – HV Testing Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AC & DC Withstand Testing</td>
                      <td>Transformers, Switchgear, Cables</td>
                      <td>HV stress endurance validation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Impulse Testing</td>
                      <td>Transmission Lines, Substations</td>
                      <td>Lightning & surges simulation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>PSCAD, COMSOL</td>
                    </tr>
                    <tr>
                      <td>Partial Discharge Measurement</td>
                      <td>Transformers, GIS</td>
                      <td>Fault prediction & insulation health</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>LabVIEW, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Insulation Resistance Testing</td>
                      <td>HVDC, Machines</td>
                      <td>Dielectric reliability assessment</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ANSYS, COMSOL</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled HV Monitoring</td>
                      <td>Smart Grids, Utilities</td>
                      <td>Real-time condition evaluation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>IoT Platforms, MQTT</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Test Analysis</td>
                      <td>Industrial HV Systems</td>
                      <td>Predictive fault mitigation</td>
                      <td>Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized center of excellence in Electrical and Electronics Engineering. 
                Through the High Voltage Testing of Equipment Project Development Center, we empower scholars to develop IEEE-standard simulations, 
                laboratory testing frameworks, IoT/AI-based monitoring, and world-class project publications.
              </p>
              <p>
                We ensure scholars gain both hands-on and research expertise in reliable and safe HV testing methods relevant worldwide.
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
              
              {/* Schema for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
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
              <li><a href="/overvoltage-surge-protection-project-development">Overvoltage & Surge Protection</a></li>
              <li><a href="/insulation-materials-techniques-project-development">Insulation Materials & Techniques</a></li>
              <li><a href="/real-time-monitoring-scada-project-development">Real-Time Monitoring & SCADA</a></li>
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage & Renewables</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EEEHighVoltageTestingEquipmentProjectDevelopmentCenter;
