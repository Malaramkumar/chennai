import "../CEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Foundation Design Project Development Center offer?",
    answer: "Narpavi Research Institute’s Foundation Design Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on foundation design, soil-structure interaction, and IoT-based monitoring."
  },
  {
    question: "What types of Foundation Design projects are supported?",
    answer: "We support B.Tech projects (shallow and deep foundation design), M.Tech projects (advanced FEM and seismic analysis), and Ph.D. projects (AI-driven prediction and sustainable foundations) for safe and durable infrastructure."
  },
  {
    question: "Which tools and technologies are used in Foundation Design projects?",
    answer: "Our stack includes STAAD.Pro, SAFE, PLAXIS, ANSYS, ABAQUS, IoT sensors, and AI frameworks (TensorFlow, Keras) for foundation analysis and monitoring."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Geotechnical Engineering, focusing on finite element modeling, sustainable materials, and IoT monitoring."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, experimental testing, documentation, and support for IEEE/Scopus/SCI journal publications and patents."
  }
];

const CEFoundationDesignProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <Sidebar />
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Foundation Design Projects</li>
              <li>Shallow & Deep Foundations</li>
              <li>Pile-Raft Optimization Projects</li>
              <li>AI-Based Foundation Settlement Prediction</li>
              <li>FEM-Based Foundation Analysis</li>
              <li>Sustainable Foundation Design IEEE 2023–2025</li>
              <li>IoT-Enabled Foundation Monitoring</li>
              <li>Civil Engineering Geotechnical Projects</li>
              <li>Narpavi Research Institute Civil Projects</li>
              <li>Advanced Geotechnical Engineering Research</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Foundation Design – Project Development Support</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Foundation Design Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on foundation engineering and geotechnical analysis.
              </p>
              <p>
                By integrating advanced simulation tools, experimental testing, and IoT/AI technologies, we empower students to design safe, durable, and sustainable foundations for modern infrastructure.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-importance">
              <h2>Importance of Foundation Design</h2>
              <ul>
                <li><strong>Structural Safety</strong>: Ensures stability under diverse loads.</li>
                <li><strong>Settlement Control</strong>: Prevents differential settlement and structural damage.</li>
                <li><strong>Soil-Structure Interaction</strong>: Optimizes design through soil behavior analysis.</li>
                <li><strong>Cost Efficiency</strong>: Reduces material and construction costs.</li>
                <li><strong>Sustainability</strong>: Incorporates eco-friendly materials and techniques.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Foundation Design Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational design projects aligned with IEEE topics.</p>
              <ul>
                <li>Study shallow (spread, mat) and deep (pile, drilled shaft) foundations</li>
                <li>Conduct SPT, cone penetration, and lab soil tests</li>
                <li>Apply IS codes (IS 456, IS 1904, IS  nadrugi.com)</li> 
                <li>Simulate foundation behavior with STAAD.Pro, SAFE, PLAXIS</li>
                <li>Develop mini-projects (e.g., spread footing design, pile load analysis)</li>
                <li>Prepare IEEE-format reports for conferences</li>
              </ul>
              <p>The style emphasizes practical skills and hands-on design experience.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Foundation Design Project Development</h2>
              <p>For postgraduate students, projects focus on advanced modeling and optimization.</p>
              <ul>
                <li>Perform FEM analysis with PLAXIS, ANSYS, ABAQUS</li>
                <li>Evaluate settlement, load distribution, and stress</li>
                <li>Optimize pile groups and raft foundations</li>
                <li>Analyze seismic and wind loads for high-rise and bridge foundations</li>
                <li>Use sustainable materials like geopolymer concrete</li>
                <li>Publish in IEEE/Scopus-indexed journals</li>
              </ul>
              <p>The style focuses on industry-relevant, research-driven solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Foundation Design Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in foundation design.</p>
              <ul>
                <li>Optimize hybrid pile-raft foundation systems</li>
                <li>Use AI for settlement and risk prediction</li>
                <li>Model 3D soil-structure interaction under dynamic loads</li>
                <li>Conduct full-scale load tests with IoT monitoring</li>
                <li>Assess sustainability and carbon footprint</li>
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
                      <th>Benefits in Foundation Design</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Spread & Isolated Footings</td>
                      <td>Residential & low-rise buildings</td>
                      <td>Easy to construct, cost-effective</td>
                      <td>Limited to low-load structures</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>Mat / Raft Foundations</td>
                      <td>High-rise buildings, heavy industrial structures</td>
                      <td>Distributes loads evenly, reduces settlement</td>
                      <td>High material costs</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Pile Foundations</td>
                      <td>Bridges, offshore structures, weak soil sites</td>
                      <td>Transfers loads to deeper strata</td>
                      <td>Complex installation and costs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>FEM Modeling (PLAXIS, ANSYS)</td>
                      <td>Large-scale foundation projects</td>
                      <td>Accurate stress and deformation prediction</td>
                      <td>High computational resources needed</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI-Based Predictive Models</td>
                      <td>Skyscrapers & smart infrastructure</td>
                      <td>Real-time settlement prediction, risk mitigation</td>
                      <td>Requires large datasets</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Sustainable Materials</td>
                      <td>Green construction & infrastructure</td>
                      <td>Reduced environmental impact, cost-effective</td>
                      <td>Variable material quality</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Predictive Analysis of Pile Foundation Settlement (2023)</li>
                <li>Optimization of Raft and Pile-Raft Foundations for High-Rise Buildings (2024)</li>
                <li>IoT-Enabled Monitoring of Deep Foundations in Real-Time (2024)</li>
                <li>FEM-Based Shallow Foundation Design for Urban Structures (2025)</li>
                <li>Sustainable Foundation Design Using Recycled Aggregates and Geopolymer Concrete (2025)</li>
                <li>Comparative Study of Spread vs Combined Footings Using PLAXIS Simulation</li>
                <li>Seismic Analysis of Deep Foundations in Earthquake-Prone Zones</li>
                <li>Smart Foundation Design with IoT-Based Structural Health Monitoring</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide end-to-end support for Geotechnical Engineering projects, including foundation design, soil stabilization, and slope stability. Our services cover B.Tech, M.Tech, and Ph.D. students worldwide, offering IEEE-aligned project guidance, laboratory and field testing assistance, advanced software training (PLAXIS, ANSYS, STAAD.Pro), and research paper preparation and publication support. By integrating software simulations, experimental testing, AI modeling, and sustainable methods, we ensure that students’ foundation design projects are academically rigorous, innovative, and industry-ready.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Foundation Design</h2>
              <ul>
                <li>AI-driven settlement and risk prediction models</li>
                <li>Hybrid pile-raft systems for mega structures</li>
                <li>Eco-friendly foundation materials (geopolymers, recycled aggregates)</li>
                <li>IoT-based real-time foundation monitoring systems</li>
                <li>Optimization of foundation design for cost and sustainability</li>
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
              <li><a href="/geotechnical-engineering-project-development">Geotechnical Engineering Project Development</a></li>
              <li><a href="/structural-engineering-project-development">Structural Engineering Project Development</a></li>
              <li><a href="/soil-stabilization-techniques-project-development">Soil Stabilization Techniques Project Development</a></li>
              <li><a href="/environmental-engineering-project-development">Environmental Engineering Project Development</a></li>
              <li><a href="/iot-based-health-monitoring-machines-project-development">IoT-based Health Monitoring of Machines Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEFoundationDesignProjectDevelopmentCenter;