import "./MEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Thermal Engineering / Heat Transfer Project Development Center offer?",
    answer: "Narpavi Research Institute’s Thermal Engineering / Heat Transfer Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on heat exchangers, nanofluids, CFD modeling, and thermal management for energy systems."
  },
  {
    question: "What types of Thermal Engineering / Heat Transfer projects are supported?",
    answer: "We support B.Tech projects (heat exchanger design, thermal conductivity measurement), M.Tech projects (nanofluid CFD analysis, radiator optimization), and Ph.D. projects (AI-based thermal prediction, solar thermal collectors) for energy and industrial applications."
  },
  {
    question: "Which tools and technologies are used in Thermal Engineering / Heat Transfer projects?",
    answer: "Our stack includes ANSYS, MATLAB, COMSOL Multiphysics, CFD software, and AI frameworks (TensorFlow, Keras) for thermal analysis and optimization."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Mechanical Engineering, focusing on thermal management, energy efficiency, and advanced heat transfer solutions."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, CFD and experimental analysis, AI integration, documentation, and support for IEEE/Scopus/Elsevier/Springer journal publications and patents."
  }
];

const METhermalEngineeringHeatTransferProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      <Sidebar />
      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Thermal Engineering Projects</li>
              <li>Heat Transfer Projects</li>
              <li>CFD Thermal Analysis</li>
              <li>Nanofluid Heat Transfer Projects</li>
              <li>Phase Change Material Projects</li>
              <li>IEEE Thermal Projects 2023–2025</li>
              <li>Renewable Energy Thermal Storage Projects</li>
              <li>Waste Heat Recovery Projects</li>
              <li>Thermal Engineering Ph.D. Projects</li>
              <li>Narpavi Research Institute Mechanical Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Thermal Engineering / Heat Transfer – Project Development Support</h1>

            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Thermal Engineering / Heat Transfer Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on energy conversion, thermal management, and efficiency enhancement.
              </p>
              <p>
                Our projects focus on heat exchangers, cooling systems, renewable energy storage, CFD modeling, nanofluids, and waste heat recovery for applications in power plants, automotive, aerospace, and medical engineering.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Thermal Engineering / Heat Transfer</h2>
              <ul>
                <li><strong>Energy Efficiency</strong>: Improves thermal system performance.</li>
                <li><strong>Industrial Applications</strong>: Enhances boilers, turbines, HVAC, and manufacturing systems.</li>
                <li><strong>Automotive & Aerospace</strong>: Optimizes cooling for engines, batteries, and high-speed systems.</li>
                <li><strong>Sustainability</strong>: Advances renewable energy storage and waste heat recovery.</li>
                <li><strong>Medical Engineering</strong>: Supports thermal imaging and hyperthermia treatments.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Thermal Engineering / Heat Transfer Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational thermal engineering projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn conduction, convection, and radiation basics</li>
                <li>Develop mini-projects (e.g., heat transfer in fins, heat exchanger design, thermal conductivity measurement)</li>
                <li>Use CFD tools for thermal system analysis</li>
                <li>Prepare IEEE-format reports for conferences</li>
              </ul>
              <p>The style emphasizes practical thermal engineering skills.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Thermal Engineering / Heat Transfer Project Development</h2>
              <p>For postgraduate students, projects focus on advanced thermal systems and simulations.</p>
              <ul>
                <li>Design heat exchangers, refrigeration, HVAC, and solar thermal systems</li>
                <li>Integrate CFD and AI for device optimization</li>
                <li>Implement mini-projects (e.g., nanofluid CFD analysis, radiator optimization, PCM thermal storage)</li>
                <li>Publish in IEEE/Scopus-indexed journals</li>
              </ul>
              <p>The style focuses on innovative thermal solutions.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Thermal Engineering / Heat Transfer Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in high-performance thermal models.</p>
              <ul>
                <li>Develop multi-scale, multiphysics CFD models</li>
                <li>Integrate experimental and simulation-based approaches</li>
                <li>Conduct projects (e.g., nanofluid solar collectors, AI-based heat exchanger prediction, battery thermal management)</li>
                <li>Publish in IEEE, Scopus, Elsevier, and Springer journals</li>
              </ul>
              <p>The style emphasizes sustainable and intelligent thermal systems.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Heat Exchangers</td>
                      <td>Power plants, HVAC</td>
                      <td>Improved efficiency</td>
                      <td>Fouling and maintenance</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>Nanofluids</td>
                      <td>Cooling in electronics, EVs</td>
                      <td>High thermal conductivity</td>
                      <td>Cost and stability issues</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Phase Change Materials (PCM)</td>
                      <td>Renewable energy storage</td>
                      <td>Long-term energy retention</td>
                      <td>Low thermal response time</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>CFD Simulation</td>
                      <td>Aerospace, automotive</td>
                      <td>Accurate heat transfer modeling</td>
                      <td>High computational requirements</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI-based Prediction</td>
                      <td>Thermal system design</td>
                      <td>Intelligent optimization</td>
                      <td>Requires AI expertise</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Waste Heat Recovery</td>
                      <td>Manufacturing industries</td>
                      <td>Energy savings, cost reduction</td>
                      <td>System integration complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>CFD Analysis of Nanofluid-Based Heat Exchangers (2023)</li>
                <li>AI-Optimized Thermal Management for Electric Vehicle Batteries (2023)</li>
                <li>PCM-Based Thermal Energy Storage for Renewable Applications (2024)</li>
                <li>Smart Heat Sink Design Using Additive Manufacturing (2024)</li>
                <li>Multi-Scale CFD Modeling of Thermal Flow in Microchannels (2024)</li>
                <li>AI-Assisted Heat Exchanger Fault Detection (2025)</li>
                <li>Thermal Optimization of Solar Power Plants Using Hybrid Models (2025)</li>
                <li>Waste Heat Recovery Framework for Smart Manufacturing (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide customized project assistance in Thermal Engineering / Heat Transfer, offering B.Tech, M.Tech, and Ph.D. level project support, IEEE, Scopus, Elsevier, and Springer-aligned projects, hands-on CFD, ANSYS, MATLAB, and experimental validation, and complete support from project selection to publication assistance. We aim to empower engineering students with world-class research skills and future-ready innovation in thermal engineering.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Thermal Engineering / Heat Transfer</h2>
              <ul>
                <li>AI-driven thermal optimization models</li>
                <li>Advanced nanofluid applications for cooling</li>
                <li>Hybrid CFD-experimental thermal models</li>
                <li>Smart thermal management for electric vehicles</li>
                <li>Sustainable waste heat recovery systems</li>
              </ul>
            </section>

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

          {/* Right: Subpage Links */}
          <div className="MEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/electric-vehicles-project-development">Electric Vehicles Project Development</a></li>
              <li><a href="/environmental-engineering-project-development">Environmental Engineering Project Development</a></li>
              <li><a href="/gis-based-urban-planning-project-development">GIS-Based Urban Planning Project Development</a></li>
              <li><a href="/iot-based-health-monitoring-machines-project-development">IoT-based Health Monitoring of Machines Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default METhermalEngineeringHeatTransferProjectDevelopmentCenter;