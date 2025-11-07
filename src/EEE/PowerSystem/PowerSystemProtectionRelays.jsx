import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Power System Protection & Relays Project Development Center offer?",
    answer: "Narpavi Research Institute’s Power System Protection & Relays Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in power system protection, relay coordination, and grid stability for applications in substations, smart grids, and renewable energy systems."
  },
  {
    question: "What types of Power System Protection & Relays projects are supported?",
    answer: "We support B.Tech projects (overcurrent, differential relays), M.Tech projects (adaptive protection, IEC 61850 automation), and Ph.D. projects (AI-based relaying, cyber-physical security) for applications in power utilities and smart grids."
  },
  {
    question: "Which technologies are used in Power System Protection & Relays project development?",
    answer: "Our stack includes MATLAB/Simulink, ETAP, PSCAD, FPGA/ARM controllers, AI frameworks (TensorFlow, PyTorch), and IEC 61850 protocols for relay design and protection studies."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions on Power Delivery and Smart Grid (2023–2025), covering areas like adaptive protection, wide-area monitoring, and AI-driven relaying, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, algorithm design, simulation with MATLAB/ETAP, hardware-in-the-loop testing, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const EEEPowerSystemProtectionRelaysProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Power System Protection and Relays Projects</li>
              <li>Digital Relays Project Center</li>
              <li>Adaptive Protection Project Guidance</li>
              <li>Narpavi Research Institute EEE Projects</li>
              <li>IEEE Power System Projects 2023–2025</li>
              <li>Ph.D. Research in Relay Protection</li>
              <li>Smart Grid Protection Project Support</li>
              <li>AI-Based Relay Design Projects</li>
              <li>Power System Relay Coordination IEEE Papers</li>
              <li>EEE Project Development Center</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Power System Protection & Relays – Project Development Support</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Power System Protection & Relays Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to advance power system protection aligned with IEEE Transactions (2023–2025). Our projects focus on reliability, safety, and resilience in modern power systems, addressing renewable integration, smart grids, and distributed generation.
              </p>
              <p>
                By blending simulation tools, hardware prototypes, and AI-driven fault detection, we deliver innovative, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Power System Protection & Relays Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational protection and relay coordination projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding protection principles: overcurrent, differential, distance, and directional relays</li>
                <li>Introduction to IEEE papers (2023–2025) on modern protection techniques</li>
                <li>Using MATLAB/Simulink, ETAP, and PSCAD for relay coordination studies</li>
                <li>Designing protection schemes for feeders, transformers, and generators</li>
                <li>Interfacing microcontroller-based relays for fault simulation</li>
                <li>Creating IEEE-style reports and technical documentation</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical protection system design, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Power System Protection & Relays Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced relay technologies and grid automation.
              </p>
              <ul>
                <li>Critical study of IEEE Transactions on Power Delivery and Smart Grid (2023–2025)</li>
                <li>Selecting industry-relevant issues like relay coordination in renewable-heavy grids</li>
                <li>Implementing adaptive, distance, and differential protection schemes</li>
                <li>Incorporating Wide Area Monitoring Systems (WAMS) and Phasor Measurement Units (PMUs)</li>
                <li>FPGA/ARM-based relay implementation and hardware-in-the-loop (HIL) testing</li>
                <li>Paper publication in IEEE/Springer indexed journals</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade protection solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Power System Protection & Relays Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in power system protection.
              </p>
              <ul>
                <li>Comprehensive study of IEEE Transactions (2023–2025) on adaptive and intelligent protection</li>
                <li>Development of novel protection algorithms using optimization, AI, and deep learning</li>
                <li>Multi-objective protection strategy modeling for interconnected grids</li>
                <li>Real-time implementation using advanced digital relays</li>
                <li>Large-scale testing on smart grid and microgrid platforms</li>
                <li>Publishing in IEEE/Elsevier/Springer journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Power System Protection & Relays Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Industrial Applications</th>
                      <th>Current Industry Adoption (2023–2025)</th>
                      <th>Research Potential</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Digital Relays & Microprocessor-based Protection</td>
                      <td>Substations, Transmission Networks</td>
                      <td>Widely adopted</td>
                      <td>Enhancements in communication and AI-based decision-making</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ETAP, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Wide-Area Protection Systems (WAPS)</td>
                      <td>National Grids & Smart Grids</td>
                      <td>Growing rapidly</td>
                      <td>IEEE transactions emphasize system-wide stability monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PMU data tools, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Adaptive Protection Schemes</td>
                      <td>Renewable Integration, Microgrids</td>
                      <td>Emerging</td>
                      <td>Strong potential for adaptive algorithms and ML integration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, ROS</td>
                    </tr>
                    <tr>
                      <td>IEC 61850 Based Substation Automation</td>
                      <td>Power Utilities & Smart Cities</td>
                      <td>Increasing</td>
                      <td>Need for standardization and global interoperability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>IEC 61850 tools, MATLAB</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning in Relaying</td>
                      <td>Industrial Plants, Smart Grids</td>
                      <td>Early adoption</td>
                      <td>High research potential for intelligent, self-learning relays</td>
                      <td>Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in EEE project development services. With expertise in Power System Protection & Relays, we support B.Tech, M.Tech, and Ph.D. students in creating impactful IEEE-standard projects.
              </p>
              <p>
                Our institute bridges the gap between academic research and industrial applications by offering professional mentorship, advanced lab facilities, simulation support, and publication assistance.
              </p>
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
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/power-systems-project-development">Power Systems Project Development</a></li>
              <li><a href="/smart-grid-microgrid-project-development">Smart Grid & Microgrid Project Development</a></li>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/load-flow-analysis-project-development">Load Flow Analysis Project Development</a></li>
              <li><a href="/iot-eee-project-development">IoT in EEE Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEPowerSystemProtectionRelaysProjectDevelopmentCenter;