import "./CEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Structural Engineering Project Development Center offer?",
    answer: "Narpavi Research Institute’s Structural Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on structural analysis, earthquake-resistant design, and IoT-based structural health monitoring for safe and sustainable infrastructure."
  },
  {
    question: "What types of Structural Engineering projects are supported?",
    answer: "We support B.Tech projects (basic structural design and modeling), M.Tech projects (advanced FEA and optimization), and Ph.D. projects (IoT and AI-driven structural monitoring) for applications in buildings, bridges, and dams."
  },
  {
    question: "Which tools and technologies are used in Structural Engineering projects?",
    answer: "Our stack includes AutoCAD, STAAD Pro, SAP2000, ETABS, ANSYS, ABAQUS, smart sensors, IoT modules (Wi-Fi/LoRa), and AI frameworks (TensorFlow, Keras) for structural analysis and monitoring."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Civil Engineering and Structural Health Monitoring, focusing on seismic design, smart monitoring, and advanced materials."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, system design, simulation, experimental validation, documentation, and support for IEEE/Scopus/SCI journal publications and patents."
  }
];

const CEStructuralEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <Sidebar />
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Structural Engineering Projects</li>
              <li>Structural Health Monitoring IEEE Projects 2023–2025</li>
              <li>Earthquake Resistant Structures</li>
              <li>Smart Building Design</li>
              <li>Tall Building Analysis Projects</li>
              <li>Bridge Design Optimization</li>
              <li>Structural Engineering B.Tech M.Tech Ph.D.</li>
              <li>Narpavi Research Institute Civil Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Structural Engineering – Project Development Support</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Structural Engineering Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on structural analysis, design, and health monitoring. Our projects focus on creating safe, durable, and sustainable structures like buildings, bridges, and dams.
              </p>
              <p>
                By integrating advanced software simulation, IoT monitoring, and AI analytics, we deliver innovative solutions for academic excellence and real-world infrastructure applications.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Structural Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational structural design projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify structural failure issues or design small-scale models</li>
                <li>Use AutoCAD, STAAD Pro, or SAP2000 for steel, RCC, or composite structures</li>
                <li>Implement physical or virtual models to test load-bearing capacity</li>
                <li>Conduct bending, compression, or shear tests on scaled models</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in structural modeling and load analysis.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Structural Engineering Project Development</h2>
              <p>For postgraduate students, projects involve advanced modeling and structural health assessment.</p>
              <ul>
                <li>Address earthquake-resistant designs or tall building dynamics</li>
                <li>Utilize Finite Element Analysis (FEA) with ANSYS, ETABS, and ABAQUS</li>
                <li>Implement optimized structures with smart sensors for monitoring</li>
                <li>Test using experimental validation and modal analysis</li>
                <li>Publish in IEEE conferences with focus on vibration control and optimization</li>
              </ul>
              <p>The style focuses on advanced structural analysis and smart monitoring.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Structural Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in sustainable structural systems.</p>
              <ul>
                <li>Explore challenges in seismic retrofitting, wind analysis, or bridge durability</li>
                <li>Design IoT-based monitoring and AI-driven predictive frameworks</li>
                <li>Implement real-time structural monitoring with smart sensors</li>
                <li>Validate using IEEE-standard datasets and full-scale experiments</li>
                <li>Contribute to IEEE, Scopus, and SCI journal publications</li>
              </ul>
              <p>The style emphasizes innovation, scalability, and publication-ready outcomes.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Structural Technology / Tool</th>
                      <th>Application</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>STAAD Pro / ETABS / SAP2000</td>
                      <td>RCC and Steel Structures</td>
                      <td>Efficient structural analysis and design</td>
                      <td>Learning curve for complex software</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Finite Element Analysis (FEA)</td>
                      <td>Tall Buildings, Bridges</td>
                      <td>Accurate stress-strain predictions</td>
                      <td>High computational requirements</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Smart Sensors & IoT Monitoring</td>
                      <td>Bridges, Dams, High-rise Buildings</td>
                      <td>Real-time structural health monitoring</td>
                      <td>Integration and data reliability issues</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Seismic Isolation & Dampers</td>
                      <td>Earthquake-resistant structures</td>
                      <td>Improved safety and vibration control</td>
                      <td>High installation and maintenance costs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Advanced Materials (FRP, Composites)</td>
                      <td>Modern Buildings & Retrofits</td>
                      <td>Enhanced strength-to-weight ratio, durability</td>
                      <td>Material cost and standardization</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Seismic-resistant High-Rise Building</h2>
              <p>
                An M.Tech project designed a high-rise building with base isolation and dampers using ETABS and FEA simulations. The project reduced seismic response by 30% and validated the design through model testing, demonstrating IEEE-aligned research standards.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Earthquake-resistant RCC Building Design with Base Isolation</li>
                <li>FEA-based Optimization of Steel-Concrete Composite Bridges</li>
                <li>Structural Health Monitoring of High-rise Buildings using IoT Sensors</li>
                <li>Advanced Material Integration for Seismic Retrofitting</li>
                <li>Wind Load Analysis of Tall Structures using CFD & FEA</li>
                <li>Smart Dampers for Vibration Control in Bridges and Towers</li>
                <li>Hybrid Structural Systems for Sustainable Infrastructure</li>
                <li>Real-time IoT Monitoring for Long-span Bridges</li>
                <li>Optimization of Pre-stressed Concrete Beams for Seismic Loads</li>
                <li>AI-assisted Predictive Maintenance in Structural Engineering</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide end-to-end project development support in Structural Engineering for B.Tech, M.Tech, and Ph.D. students. Our expertise covers software simulation, experimental modeling, smart monitoring, and publication guidance. We focus on IEEE-aligned projects (2023–2025) that enhance academic excellence, industrial relevance, and research publication opportunities.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Structural Engineering</h2>
              <ul>
                <li>AI & Machine Learning for Structural Health Monitoring</li>
                <li>Smart Materials and Adaptive Structures</li>
                <li>IoT-enabled Bridges and Tall Buildings</li>
                <li>Seismic Retrofit Techniques for Historic Structures</li>
                <li>Digital Twin Models for Real-time Structural Assessment</li>
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
              <li><a href="/iot-based-health-monitoring-machines-project-development">IoT-based Health Monitoring of Machines Project Development</a></li>
              <li><a href="/iot-enabled-smart-meters-project-development">IoT-enabled Smart Meters Project Development</a></li>
              <li><a href="/iot-smart-grids-project-development">IoT for Smart Grids Project Development</a></li>
              <li><a href="/data-analytics-energy-savings-project-development">Data Analytics for Energy Savings Project Development</a></li>
              <li><a href="/ai-eee-project-development">Artificial Intelligence in EEE Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEStructuralEngineeringProjectDevelopmentCenter;