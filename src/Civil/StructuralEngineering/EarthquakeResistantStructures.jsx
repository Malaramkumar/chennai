import "../CEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Earthquake Resistant Structures Project Development Center offer?",
    answer: "Narpavi Research Institute’s Earthquake Resistant Structures Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on seismic design, base isolation, structural health monitoring, and retrofitting."
  },
  {
    question: "What types of Earthquake Resistant Structures projects are supported?",
    answer: "We support B.Tech projects (basic seismic design and modeling), M.Tech projects (nonlinear analysis and material innovation), and Ph.D. projects (AI-driven seismic prediction and hybrid systems) for earthquake-resistant infrastructure."
  },
  {
    question: "Which tools and technologies are used in Earthquake Resistant Structures projects?",
    answer: "Our stack includes STAAD.Pro, ETABS, ANSYS, MATLAB, OpenSees, IoT sensors, and AI frameworks (TensorFlow, Keras) for seismic analysis and monitoring."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Structural Engineering, focusing on base isolation, smart materials, and IoT-enabled monitoring."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, experimental validation, documentation, and support for IEEE/Scopus/SCI journal publications and patents."
  }
];

const CEEarthquakeResistantStructuresProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <Sidebar />
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Earthquake Resistant Structures projects</li>
              <li>Structural Engineering seismic projects</li>
              <li>Base isolation and damping techniques</li>
              <li>IEEE earthquake engineering projects 2023–2025</li>
              <li>B.Tech M.Tech Ph.D. earthquake project support</li>
              <li>Narpavi Research Institute Civil projects</li>
              <li>Seismic retrofitting project guidance</li>
              <li>Tall building earthquake analysis projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Earthquake Resistant Structures – Project Development Support</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Earthquake Resistant Structures Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on seismic design, base isolation, structural health monitoring, and retrofitting.
              </p>
              <p>
                By integrating advanced modeling, smart materials, AI, and IoT, we deliver innovative solutions for academic excellence and real-world seismic engineering challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Earthquake Resistant Structures Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational seismic design projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify structural vulnerabilities under seismic loads</li>
                <li>Design using base isolation, dampers, and retrofitting techniques</li>
                <li>Model and simulate using STAAD.Pro, ETABS, or ANSYS</li>
                <li>Develop miniaturized prototypes for vibration control</li>
                <li>Validate against seismic codes (IS 1893, Eurocode 8, ASCE 7)</li>
              </ul>
              <p>The style emphasizes practical learning in earthquake-resistant design.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Earthquake Resistant Structures Project Development</h2>
              <p>For postgraduate students, projects involve advanced seismic analysis and material innovation.</p>
              <ul>
                <li>Perform nonlinear time-history and pushover analysis</li>
                <li>Optimize using genetic algorithms or particle swarm optimization</li>
                <li>Evaluate high-performance concrete and smart materials</li>
                <li>Integrate MATLAB, OpenSees, and FEM tools for simulations</li>
                <li>Validate with real earthquake data and case studies</li>
              </ul>
              <p>The style focuses on scalable, innovative seismic solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Earthquake Resistant Structures Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in seismic engineering.</p>
              <ul>
                <li>Explore hybrid systems and smart materials</li>
                <li>Develop AI-based seismic damage prediction models</li>
                <li>Implement performance-based seismic design</li>
                <li>Conduct shake table tests and real-time simulations</li>
                <li>Contribute to IEEE, Scopus, and SCI journal publications</li>
              </ul>
              <p>The style emphasizes innovation, resilience, and publication-ready outcomes.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Approach</th>
                      <th>Application in Industry</th>
                      <th>Benefits in Earthquake Engineering</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Base Isolation Systems</td>
                      <td>High-rise buildings, hospitals, critical structures</td>
                      <td>Reduces seismic forces transmitted to building</td>
                      <td>High installation and maintenance costs</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Energy Dissipation Devices (Dampers)</td>
                      <td>Bridges, towers, industrial plants</td>
                      <td>Absorbs energy, increases stability</td>
                      <td>Complex design and retrofitting needs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Advanced FEM Software (ETABS, ANSYS)</td>
                      <td>Structural design and retrofitting analysis</td>
                      <td>Precise modeling and analysis of seismic loads</td>
                      <td>Requires expertise and computational resources</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Smart Materials (FRP, Shape Memory Alloys)</td>
                      <td>Retrofitting and new construction</td>
                      <td>Lightweight, high strength, self-healing</td>
                      <td>High material costs and limited availability</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled Structural Health Monitoring</td>
                      <td>Real-time seismic monitoring in smart cities</td>
                      <td>Continuous safety assessment and alerts</td>
                      <td>Integration and data reliability issues</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Seismic Response Analysis of High-Rise Buildings Using Base Isolation and Energy Dissipation Devices</li>
                <li>Performance-Based Seismic Design of RCC and Steel Composite Structures</li>
                <li>Application of Smart Materials in Enhancing Earthquake Resistant Structural Performance</li>
                <li>Machine Learning Models for Predicting Seismic Damage in Tall Buildings</li>
                <li>IoT-Enabled Structural Health Monitoring for Bridges in Earthquake-Prone Zones</li>
                <li>Retrofitting of Heritage Structures Using Fiber Reinforced Polymers under Seismic Loads</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized center for academic project development, offering expert guidance to B.Tech, M.Tech, and Ph.D. students in Civil Engineering and interdisciplinary domains. Our institute specializes in IEEE-standard project assistance, advanced modeling, and publication support. With a focus on Earthquake Resistant Structures, we provide students with innovative solutions, ensuring their research aligns with both academic excellence and industrial applications.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Earthquake Resistant Structures</h2>
              <ul>
                <li>AI-driven seismic design and damage prediction</li>
                <li>Smart materials for adaptive structural systems</li>
                <li>IoT and real-time structural health monitoring</li>
                <li>Hybrid energy dissipation systems for mega structures</li>
                <li>Sustainable seismic retrofitting for heritage buildings</li>
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
          <div className="CEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/structural-engineering-project-development">Structural Engineering Project Development</a></li>
              <li><a href="/geotechnical-engineering-project-development">Geotechnical Engineering Project Development</a></li>
              <li><a href="/construction-project-management-project-development">Construction & Project Management Project Development</a></li>
              <li><a href="/remote-sensing-gis-project-development">Remote Sensing & GIS Project Development</a></li>
              <li><a href="/iot-based-health-monitoring-machines-project-development">IoT-based Health Monitoring of Machines Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEEarthquakeResistantStructuresProjectDevelopmentCenter;