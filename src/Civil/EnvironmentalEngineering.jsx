import "./CEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Environmental Engineering Project Development Center offer?",
    answer: "Narpavi Research Institute’s Environmental Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on water treatment, pollution monitoring, waste-to-energy systems, and sustainable urban development."
  },
  {
    question: "What types of Environmental Engineering projects are supported?",
    answer: "We support B.Tech projects (water quality and waste management), M.Tech projects (smart monitoring and advanced treatment), and Ph.D. projects (AI-driven climate resilience and green infrastructure) for sustainable environmental solutions."
  },
  {
    question: "Which tools and technologies are used in Environmental Engineering projects?",
    answer: "Our stack includes MATLAB, EPANET, ArcGIS, SWMM, IoT sensors (pH, turbidity), AI frameworks (TensorFlow, Keras), and bioreactors for environmental monitoring and treatment."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Environmental Engineering and Sustainability, focusing on smart water management, AI-driven pollution control, and green infrastructure."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, experimental validation, documentation, and support for IEEE/Scopus/SCI journal publications and patents."
  }
];

const CEEnvironmentalEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <Sidebar />
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Environmental Engineering Projects</li>
              <li>Water Treatment IEEE Projects 2023–2025</li>
              <li>Waste Management Projects</li>
              <li>Pollution Monitoring Projects</li>
              <li>IoT in Environmental Engineering</li>
              <li>AI in Climate Change Projects</li>
              <li>Sustainable Development Civil Projects</li>
              <li>Narpavi Research Institute Civil Projects</li>
              <li>Waste-to-Energy IEEE Projects</li>
              <li>Green Infrastructure Research</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Environmental Engineering – Project Development Support</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Environmental Engineering Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on pollution control, water treatment, waste management, and sustainable urban development.
              </p>
              <p>
                By integrating IoT sensors, AI analytics, blockchain, and renewable technologies, we deliver innovative solutions for academic excellence and real-world environmental challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Environmental Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational environmental projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify issues like water pollution or plastic waste management</li>
                <li>Design simple filter models or biogas digesters</li>
                <li>Conduct lab experiments on water quality or soil analysis</li>
                <li>Test chemical and biological properties of treated samples</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in environmental sustainability.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Environmental Engineering Project Development</h2>
              <p>For postgraduate students, projects involve smart monitoring and advanced treatment technologies.</p>
              <ul>
                <li>Address urban wastewater treatment or industrial pollution</li>
                <li>Use MATLAB, EPANET, ArcGIS, and IoT sensor systems</li>
                <li>Implement pilot-scale treatment units or sensor networks</li>
                <li>Test air, water, and soil quality with AI-based predictions</li>
                <li>Publish in IEEE conferences with focus on sustainable solutions</li>
              </ul>
              <p>The style focuses on scalable, smart environmental systems.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Environmental Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in sustainable environmental systems.</p>
              <ul>
                <li>Explore challenges in climate adaptation or zero-emission systems</li>
                <li>Design AI, IoT, and blockchain-based environmental frameworks</li>
                <li>Implement advanced modeling and real-world pilot projects</li>
                <li>Validate using big data and long-term impact assessments</li>
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
                      <th>Environmental Technology / Tool</th>
                      <th>Application</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT-based Sensors</td>
                      <td>Air & water quality monitoring</td>
                      <td>Real-time data, adaptive control</td>
                      <td>Sensor calibration and data privacy</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>EPANET & SWMM</td>
                      <td>Water distribution & wastewater management</td>
                      <td>Optimized design and operation</td>
                      <td>Complex model setup and calibration</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>GIS & Remote Sensing</td>
                      <td>Pollution mapping & urban planning</td>
                      <td>Accurate spatial analysis</td>
                      <td>Data resolution and processing needs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Bioreactors & Anaerobic Digesters</td>
                      <td>Waste-to-energy and sewage treatment</td>
                      <td>Renewable energy, eco-friendly solution</td>
                      <td>High setup costs and maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning Models</td>
                      <td>Pollution prediction & climate modeling</td>
                      <td>Data-driven forecasting, efficient decisions</td>
                      <td>Data quality and computational complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Membrane & Nano-filtration Tech</td>
                      <td>Advanced water treatment</td>
                      <td>High efficiency, compact design</td>
                      <td>Membrane fouling and cost</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Green Infrastructure Systems</td>
                      <td>Urban sustainability & flood management</td>
                      <td>Climate resilience, eco-friendly development</td>
                      <td>Integration with existing urban systems</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – IoT-enabled Smart Water Monitoring</h2>
              <p>
                A M.Tech project developed at Narpavi Research Institute used IoT-based water quality sensors integrated with cloud computing and AI models to monitor pH, turbidity, dissolved oxygen, and heavy metal concentrations in real-time. The system helped reduce contamination detection time by 60%, proving its practical impact on sustainable water resource management.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-enabled Real-time Water Quality Monitoring System</li>
                <li>AI-driven Prediction of Air Pollution and Health Impacts</li>
                <li>Waste-to-Energy Conversion Using Smart Bioreactor Systems</li>
                <li>GIS-based Flood Risk Mapping for Climate Resilient Cities</li>
                <li>Nano-filtration Techniques for Advanced Wastewater Treatment</li>
                <li>Blockchain-based Waste Management Tracking Systems</li>
                <li>Smart Biodegradable Materials for Plastic Waste Reduction</li>
                <li>AI and Big Data Analytics for Climate Change Adaptation</li>
                <li>Solar-powered Membrane Desalination Units</li>
                <li>Green Infrastructure Design for Sustainable Urban Development</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide world-class Environmental Engineering project support for B.Tech, M.Tech, and Ph.D. students across the globe. Our expertise spans water and wastewater treatment, renewable waste management, pollution monitoring, AI-based environmental modeling, and sustainable city planning. We ensure all projects are aligned with IEEE transactions (2023–2025), maintaining both academic rigor and industrial applicability.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Environmental Engineering</h2>
              <ul>
                <li>AI-driven climate resilience modeling</li>
                <li>Blockchain in circular waste economy</li>
                <li>Smart bioreactors for waste-to-energy</li>
                <li>Digital twin models for urban sustainability</li>
                <li>Green hydrogen from wastewater treatment plants</li>
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
              <li><a href="/geotechnical-engineering-project-development">Geotechnical Engineering Project Development</a></li>
              <li><a href="/structural-engineering-project-development">Structural Engineering Project Development</a></li>
              <li><a href="/iot-based-health-monitoring-machines-project-development">IoT-based Health Monitoring of Machines Project Development</a></li>
              <li><a href="/ai-eee-project-development">Artificial Intelligence in EEE Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEEnvironmentalEngineeringProjectDevelopmentCenter;