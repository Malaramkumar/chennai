import "../CEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Pavement Analysis & Design Project Development Center offer?",
    answer: "Narpavi Research Institute’s Pavement Analysis & Design Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on pavement design, material optimization, and smart monitoring."
  },
  {
    question: "What types of Pavement Analysis & Design projects are supported?",
    answer: "We support B.Tech projects (basic pavement design and testing), M.Tech projects (mechanistic-empirical design and material optimization), and Ph.D. projects (AI-driven performance prediction and smart pavement systems) for resilient infrastructure."
  },
  {
    question: "Which tools and technologies are used in Pavement Analysis & Design projects?",
    answer: "Our stack includes KENPAVE, AASHTOWare Pavement ME, ABAQUS, MATLAB, and IoT sensors for pavement design and monitoring."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Transportation Engineering, focusing on mechanistic-empirical design, sustainable materials, and IoT monitoring."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, experimental testing, documentation, and support for IEEE/Scopus/SCI journal publications and patents."
  }
];

const CEPavementAnalysisDesignProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <Sidebar />
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Pavement Analysis & Design Projects</li>
              <li>Flexible and Rigid Pavements IEEE 2023–2025</li>
              <li>Smart Pavement Monitoring IoT</li>
              <li>AI-Based Pavement Performance Prediction</li>
              <li>Sustainable Asphalt & Concrete Pavements</li>
              <li>Recycled Material Pavements</li>
              <li>B.Tech M.Tech Ph.D. Transportation Projects</li>
              <li>Narpavi Research Institute Transportation Projects</li>
              <li>Mechanistic-Empirical Pavement Design</li>
              <li>Climate-Resilient Road Design</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Pavement Analysis & Design – Project Development Support</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Pavement Analysis & Design Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on durable, sustainable, and smart pavement systems.
              </p>
              <p>
                By integrating mechanistic-empirical design, advanced materials, IoT monitoring, and AI-driven analytics, we empower students to create solutions for resilient road infrastructure.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-importance">
              <h2>Importance of Pavement Analysis & Design</h2>
              <ul>
                <li><strong>Durability & Safety</strong>: Ensures pavements withstand traffic and environmental stress.</li>
                <li><strong>Cost-Effectiveness</strong>: Reduces construction and maintenance costs.</li>
                <li><strong>Sustainability</strong>: Incorporates recycled materials and eco-friendly solutions.</li>
                <li><strong>Performance Evaluation</strong>: Predicts rutting, fatigue, and roughness.</li>
                <li><strong>Smart Infrastructure Integration</strong>: Enables real-time pavement health monitoring.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Pavement Analysis & Design Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational pavement design projects aligned with IEEE topics.</p>
              <ul>
                <li>Study flexible, rigid, and composite pavements</li>
                <li>Conduct CBR, aggregate grading, and bitumen tests</li>
                <li>Apply IRC, AASHTO, and IS codes for design</li>
                <li>Simulate pavements with KENPAVE, AASHTOWare, and MATLAB</li>
                <li>Develop mini-projects (e.g., rural road pavement design, recycled material analysis)</li>
                <li>Prepare IEEE-format reports for conferences</li>
              </ul>
              <p>The style emphasizes practical skills and hands-on design experience.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Pavement Analysis & Design Project Development</h2>
              <p>For postgraduate students, projects focus on advanced design and material optimization.</p>
              <ul>
                <li>Perform mechanistic-empirical pavement design</li>
                <li>Optimize materials with polymer-modified bitumen, recycled aggregates, and geopolymer concrete</li>
                <li>Predict fatigue, rutting, and roughness</li>
                <li>Model pavements with KENPAVE, AASHTOWare, and ABAQUS</li>
                <li>Conduct field validation experiments</li>
                <li>Publish in IEEE/Scopus-indexed journals</li>
              </ul>
              <p>The style focuses on industry-relevant, research-driven solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Pavement Analysis & Design Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in pavement engineering.</p>
              <ul>
                <li>Develop smart pavement systems with IoT sensors</li>
                <li>Use AI/ML for pavement performance prediction</li>
                <li>Design climate-resilient pavements</li>
                <li>Optimize sustainable materials like recycled aggregates and geopolymer concrete</li>
                <li>Simulate 3D traffic and environmental effects</li>
                <li>Publish in IEEE, Elsevier, and Scopus-indexed journals</li>
              </ul>
              <p>The style emphasizes innovation and global contributions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Method</th>
                      <th>Industry Application</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Flexible Pavements</td>
                      <td>Urban roads, highways</td>
                      <td>Easy maintenance, cost-effective</td>
                      <td>Susceptible to rutting and fatigue</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>Rigid Pavements</td>
                      <td>Expressways, airport runways</td>
                      <td>High durability, long service life</td>
                      <td>High initial cost</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Mechanistic-Empirical Design</td>
                      <td>National highways & urban infrastructure</td>
                      <td>Accurate stress-strain analysis & life prediction</td>
                      <td>Complex modeling requirements</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Recycled Material Pavements</td>
                      <td>Sustainable infrastructure</td>
                      <td>Eco-friendly, cost reduction</td>
                      <td>Variable material quality</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Pavement Monitoring</td>
                      <td>Smart roads & highways</td>
                      <td>Real-time condition assessment, proactive maintenance</td>
                      <td>Sensor integration complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI-Based Pavement Performance Prediction</td>
                      <td>Smart cities & highways</td>
                      <td>Predicts distress patterns, optimized maintenance</td>
                      <td>Requires large datasets</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Real-Time Pavement Health Monitoring System (2023)</li>
                <li>AI-Based Fatigue and Rutting Prediction for Asphalt Pavements (2024)</li>
                <li>Mechanistic-Empirical Design of Flexible Pavements Using Recycled Materials (2024)</li>
                <li>Climate-Resilient Concrete Pavement Design for Expressways (2025)</li>
                <li>Sustainable Pavement Design Using Geopolymer Concrete and Fly Ash (2025)</li>
                <li>Comparative Study of Asphalt vs Concrete Pavements under Heavy Traffic Loading</li>
                <li>Smart Pavement Deflection Monitoring Using Embedded Sensors</li>
                <li>Machine Learning Models for Predictive Maintenance of Urban Pavements</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides end-to-end guidance for Transportation Engineering projects, specializing in Pavement Analysis & Design. Our services include B.Tech, M.Tech, and Ph.D. students worldwide, offering IEEE-aligned project topics and research methodology, advanced simulation and modeling tools (KENPAVE, AASHTOWare, ABAQUS), laboratory testing and field experiment support, and research paper writing and international publication guidance. By combining software simulation, experimental validation, AI modeling, and sustainable material usage, we ensure students’ pavement design projects are innovative, publication-ready, and globally relevant.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Pavement Analysis & Design</h2>
              <ul>
                <li>AI-driven pavement performance prediction and maintenance scheduling</li>
                <li>IoT-enabled real-time pavement health monitoring systems</li>
                <li>Sustainable pavements using recycled and industrial by-products</li>
                <li>Climate-resilient pavement designs for extreme weather conditions</li>
                <li>3D modeling of pavement behavior under dynamic traffic loads</li>
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
              <li><a href="/transportation-engineering-project-development">Transportation Engineering Project Development</a></li>
              <li><a href="/environmental-engineering-project-development">Environmental Engineering Project Development</a></li>
              <li><a href="/geotechnical-engineering-project-development">Geotechnical Engineering Project Development</a></li>
              <li><a href="/smart-traffic-management-systems-project-development">Smart Traffic Management Systems Project Development</a></li>
              <li><a href="/iot-based-health-monitoring-machines-project-development">IoT-based Health Monitoring of Machines Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEPavementAnalysisDesignProjectDevelopmentCenter;