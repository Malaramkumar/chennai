import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Insulation Materials & Techniques Project Development Center offer?",
    answer: "Narpavi Research Institute’s Insulation Materials & Techniques Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) research on dielectric materials, high-voltage insulation, thermal-resistant composites, and predictive insulation performance systems."
  },
  {
    question: "What types of insulation projects are supported?",
    answer: "We support B.Tech projects (dielectric testing, thermal stress evaluation, insulation resistance), M.Tech projects (AI-assisted insulation modeling, nanocomposite system design), and Ph.D. projects (deep learning predictive diagnostics, high-durability composite solutions, and industrial standardization)."
  },
  {
    question: "Which tools are used in insulation system research?",
    answer: "Our toolkit includes MATLAB/Simulink, COMSOL Multiphysics, ANSYS, PSIM, IoT monitoring platforms, and AI frameworks (TensorFlow, PyTorch) for predictive diagnostics and insulation performance modeling."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025), focusing on dielectric materials, composite insulation, predictive diagnostics, partial discharge management, and industrial high-voltage insulation standards."
  },
  {
    question: "What academic support is provided?",
    answer: "We assist in IEEE topic selection, simulation and laboratory testing, insulation design optimization, technical documentation, and IEEE/Scopus/SCI publication of innovative research outcomes."
  }
];

const EEEInsulationMaterialsTechniquesProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Column */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Insulation Materials Projects</li>
              <li>High Voltage Insulation Techniques</li>
              <li>IEEE Insulation Research 2023–2025</li>
              <li>B.Tech Dielectric Testing Projects</li>
              <li>M.Tech Composite Insulation Systems</li>
              <li>Ph.D AI-Based Insulation Diagnostics</li>
              <li>Narpavi Research Institute</li>
              <li>Thermal-Resistant Insulation</li>
              <li>Partial Discharge Analysis</li>
              <li>Electrical Equipment Safety</li>
            </ul>
          </div>

          {/* 📑 Center Column */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Insulation Materials & Techniques – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> introduces the Insulation Materials & Techniques Project Development Center, 
                enabling B.Tech, M.Tech, and Ph.D. scholars to pursue IEEE-aligned (2023–2025) research on dielectric materials, 
                polymeric composites, nanocomposites, predictive degradation diagnostics, and advanced layering techniques.
              </p>
              <p>
                Scholars gain hands-on expertise through computational simulations, laboratory testing, IoT-enabled insulation monitoring, 
                and AI-based predictive performance evaluation for industrial and academic excellence.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Insulation Materials & Techniques Projects</h2>
              <ul>
                <li>Introduction to dielectric materials & insulation principles</li>
                <li>IEEE papers (2023–2025) on insulation composites & techniques</li>
                <li>Simulation in MATLAB, COMSOL Multiphysics, ANSYS</li>
                <li>Test dielectric strength, thermal stress endurance</li>
                <li>Lab-scale setups for breakdown voltage & partial discharge</li>
                <li>Generate IEEE-format project reports</li>
              </ul>
              <p>Focus: basics of insulation design and real-world HV reliability practice.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Insulation Materials & Techniques Projects</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) reviews on dielectric & HV materials</li>
                <li>AI/ML-supported diagnostics for insulation performance</li>
                <li>Multi-objective analysis: dielectric strength, thermal stability</li>
                <li>Nanocomposite insulation design & validation</li>
                <li>IoT-enabled monitoring of insulation health in lab conditions</li>
                <li>Publication-ready IEEE-aligned reports</li>
              </ul>
              <p>Focus: optimization, predictive diagnostics, material science innovations.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Insulation Materials & Techniques Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) of advanced HV insulation</li>
                <li>Deep learning-based predictive degradation modeling</li>
                <li>Development of nanocomposite & cryogenic insulation systems</li>
                <li>Experimental insulation monitoring with HIL setups</li>
                <li>Patents and publications in IEEE leading journals</li>
                <li>Contributions to global HV insulation standards</li>
              </ul>
              <p>Focus: pioneering insulation technologies, durability, AI diagnostics, and standards research.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Insulation Technologies vs. Industry Applications</h2>
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
                      <td>Polymeric & Composite Insulation Materials</td>
                      <td>Transformers, Cables, Generators</td>
                      <td>High-dielectric & eco-friendly composites</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, COMSOL</td>
                    </tr>
                    <tr>
                      <td>High-Temperature Insulation</td>
                      <td>HV Machines, Power Electronics</td>
                      <td>Thermal stress reliability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Nanocomposite Insulation</td>
                      <td>HVDC, Industrial Machinery</td>
                      <td>Dielectric performance, longevity</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, PSIM</td>
                    </tr>
                    <tr>
                      <td>Cryogenic Insulation</td>
                      <td>Superconductors, LNG Facilities</td>
                      <td>Low-temp dielectric stability</td>
                      <td>Ph.D.</td>
                      <td>ANSYS, Multiphysics</td>
                    </tr>
                    <tr>
                      <td>Condition Monitoring & AI Prediction</td>
                      <td>Motors, HV Transformers</td>
                      <td>Degradation prediction, fault prevention</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, IoT Frameworks</td>
                    </tr>
                    <tr>
                      <td>Advanced Coating Techniques</td>
                      <td>Switchgear, HV Equipment</td>
                      <td>Surface insulation, corona resistance</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Material Testing Labs, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an internationally recognized hub for EEE innovation. 
                Through the Insulation Materials & Techniques Project Development Center, we train students 
                from material design through diagnostics, prototyping, patents, and IEEE publications.
              </p>
              <p>
                Scholars gain hands-on expertise with AI-based predictive diagnostics, IoT-enabled monitoring, and material science validation techniques.
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
              
              {/* Schema for FAQ SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
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
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage & Renewable Integration</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
              <li><a href="/real-time-monitoring-scada-project-development">Real-Time Monitoring & SCADA</a></li>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
              <li><a href="/grid-integration-of-renewables-project-development">Grid Integration of Renewables</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EEEInsulationMaterialsTechniquesProjectDevelopmentCenter;
