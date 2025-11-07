import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Software Defined Radio (SDR) Project Development Center offer?",
    answer: "Narpavi Research Institute’s Software Defined Radio (SDR) Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in GNU Radio, FPGA-based SDR, AI-driven SDR, and cloud SDR for 5G/6G, IoT, and defense applications."
  },
  {
    question: "What types of Software Defined Radio (SDR) projects are supported?",
    answer: "We support B.Tech projects (FM/AM signal processing, spectrum sensing), M.Tech projects (dynamic spectrum access, FPGA-based SDR), and Ph.D. projects (AI-driven cognitive radio, quantum-safe SDR) for telecom, IoT, and smart city applications."
  },
  {
    question: "Which technologies are used in Software Defined Radio (SDR) project development?",
    answer: "Our stack includes GNU Radio, MATLAB/Simulink, VHDL/Verilog for FPGA, USRP hardware, and AI frameworks like TensorFlow for simulation, prototyping, and performance analysis."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like cognitive radio, FPGA-based SDR, and cloud SDR, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, FPGA prototyping, hardware integration, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECESoftwareDefinedRadioProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Software Defined Radio (SDR) Projects</li>
              <li>SDR for B.Tech Students</li>
              <li>FPGA-Based SDR Research</li>
              <li>Cognitive Radio SDR Projects</li>
              <li>IEEE SDR Topics 2023–2025</li>
              <li>Cloud-Based SDR Systems</li>
              <li>SDR with GNU Radio</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Software Defined Radio (SDR) – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Software Defined Radio (SDR) – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in GNU Radio, FPGA-based SDR, AI-driven SDR, and cloud SDR for 5G/6G, IoT, and defense applications.
              </p>
              <p>
                With expertise in GNU Radio, MATLAB, FPGA prototyping, and AI-driven frameworks, we deliver innovative solutions for flexible, programmable, and multi-standard wireless communication systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Software Defined Radio (SDR) Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects like FM/AM signal processing and spectrum sensing, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>SDR prototype development using GNU Radio or MATLAB</li>
                <li>Modulation/demodulation techniques for wireless sensor networks</li>
                <li>Performance analysis for spectrum efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical SDR implementation, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Software Defined Radio (SDR) Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced SDR applications like dynamic spectrum access and FPGA-based implementations.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Dynamic spectrum access using GNU Radio or USRP</li>
                <li>FPGA-based SDR for 5G/6G testbeds</li>
                <li>Secure wireless communication protocols</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade SDR solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Software Defined Radio (SDR) Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in cognitive radio and AI-driven SDR.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of cognitive radio networks or cloud SDR</li>
                <li>AI-driven spectrum optimization using TensorFlow</li>
                <li>Experimental validation with FPGA or USRP platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative SDR methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – SDR Technologies vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SDR with GNU Radio</td>
                      <td>Academic Research, Prototyping</td>
                      <td>Flexible open-source platform for experimentation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>GNU Radio, USRP</td>
                      <td>Low to Medium</td>
                    </tr>
                    <tr>
                      <td>SDR with MATLAB/Simulink</td>
                      <td>Telecom, IoT, Cognitive Radio</td>
                      <td>Advanced modeling, testing, and simulation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>FPGA-based SDR</td>
                      <td>5G/6G Infrastructure, Defense</td>
                      <td>High-speed, real-time adaptability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>VHDL/Verilog, Xilinx Vivado</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>SDR with Machine Learning</td>
                      <td>Cognitive Radio, Smart IoT Systems</td>
                      <td>AI-based adaptive communication</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, GNU Radio</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Cloud SDR</td>
                      <td>Virtualized Networks, Remote Access</td>
                      <td>Scalable, low-cost, global accessibility</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Cloud platforms, GNU Radio</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Software Defined Radio (SDR) Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Real-Time SDR for 5G Massive MIMO Systems (2023)</li>
                <li>Cognitive Radio Spectrum Sensing Using Machine Learning in SDR Platforms (2023)</li>
                <li>Cloud-Enabled Virtualized SDR for Next-Generation IoT (2024)</li>
                <li>AI-Enhanced SDR for Ultra-Low Latency 6G Applications (2024)</li>
                <li>Quantum-Safe Encryption for Secure SDR-Based Communication (2025)</li>
                <li>Hybrid SDR-Edge Framework for Smart City Communication Infrastructure (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers specialized expertise in Software Defined Radio (SDR) projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                We support end-to-end project cycles including simulation, FPGA prototyping, hardware integration, and IEEE publication, ensuring global scholars achieve high-quality outcomes aligned with current industry and academic demands.
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
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
              <li><a href="/control-systems-project-development">Control Systems Project Development</a></li>
              <li><a href="/industrial-automation-project-development">Industrial Automation Project Development</a></li>
              <li><a href="/electric-vehicles-project-development">Electric Vehicles Project Development</a></li>
              <li><a href="/ai-eee-project-development">Artificial Intelligence in EEE Project Development</a></li>
              <li><a href="/energy-management-systems-project-development">Energy Management Systems Project Development</a></li>
              <li><a href="/iot-eee-project-development">Internet of Things in EEE Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECESoftwareDefinedRadioProjectDevelopmentCenter;
