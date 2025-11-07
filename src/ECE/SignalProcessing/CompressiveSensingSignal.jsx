import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Compressive Sensing in Signal Processing Project Development Center offer?",
    answer: "Narpavi Research Institute’s Compressive Sensing in Signal Processing Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in sparse signal recovery, basis pursuit, orthogonal matching pursuit, IoT sensor networks, and FPGA/DSP-based implementations for medical imaging, radar, and smart city applications."
  },
  {
    question: "What types of Compressive Sensing in Signal Processing projects are supported?",
    answer: "We support B.Tech projects (sparse signal reconstruction, image compression), M.Tech projects (biomedical imaging, radar signal processing), and Ph.D. projects (AI-driven CS, multi-modal signal reconstruction) for applications in MRI/CT scans, IoT, and embedded systems."
  },
  {
    question: "Which technologies are used in Compressive Sensing in Signal Processing project development?",
    answer: "Our stack includes MATLAB, Python, VHDL/Verilog for FPGA, Arduino, and DSP platforms for simulation, algorithm optimization, and real-time compressive sensing processing."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like sparse signal recovery, FPGA-based CS for MRI, and AI-driven CS, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const ECECompressiveSensingSignalProcessingProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Compressive Sensing Projects</li>
              <li>Sparse Signal Recovery IEEE Projects</li>
              <li>Medical Imaging CS Research</li>
              <li>IoT Sensor Networks CS</li>
              <li>FPGA Compressive Sensing</li>
              <li>Signal Processing IEEE Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Compressive Sensing in Signal Processing – Project Development Support</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Compressive Sensing in Signal Processing – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in sparse signal recovery, basis pursuit, orthogonal matching pursuit, and FPGA/DSP-based implementations for medical imaging, IoT sensor networks, and radar applications.
              </p>
              <p>
                With expertise in MATLAB, Python, VHDL/Verilog, Arduino, and DSP platforms, we deliver innovative solutions for advanced compressive sensing, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Compressive Sensing in Signal Processing Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects like sparse signal reconstruction and image compression, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Sparse signal reconstruction and image compression using MATLAB or Python</li>
                <li>Simple sensor applications for compressive sensing</li>
                <li>Arduino-based CS prototypes</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical signal processing, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Compressive Sensing in Signal Processing Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced domains like biomedical imaging and radar signal processing.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Compressive sensing for biomedical imaging (MRI/CT)</li>
                <li>Radar signal processing using orthogonal matching pursuit</li>
                <li>IoT sensor networks with CS optimization</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade CS solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Compressive Sensing in Signal Processing Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in hybrid AI-CS methods and multi-modal signal reconstruction.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Hybrid AI-CS methods for biomedical imaging</li>
                <li>Large-scale sensor networks with CS optimization</li>
                <li>Multi-modal signal reconstruction for IoT applications</li>
                <li>Hardware-software co-design for CS-enabled systems</li>
                <li>Publication support for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Compressive Sensing Technologies vs. Industry Applications</h2>
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
                      <td>Sparse Signal Recovery Algorithms</td>
                      <td>Medical Imaging (MRI, CT Scans)</td>
                      <td>Reduced data acquisition time and cost</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Basis Pursuit and L1 Minimization</td>
                      <td>Wireless Sensor Networks</td>
                      <td>Efficient data reconstruction</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Orthogonal Matching Pursuit (OMP)</td>
                      <td>Radar and Sonar Signal Processing</td>
                      <td>Accurate signal recovery in noisy environments</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Compressive Sensing in IoT</td>
                      <td>Smart City Sensors</td>
                      <td>Low-power data acquisition</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Arduino, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Hardware-Accelerated CS (FPGA/DSP)</td>
                      <td>Embedded Signal Processing Devices</td>
                      <td>Real-time CS processing with low latency</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>VHDL/Verilog, DSP platforms</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Compressive Sensing in Signal Processing Project Titles (2023–2025)</h2>
              <ul>
                <li>Sparse Signal Recovery for Real-Time EEG Monitoring Using Compressive Sensing (2023)</li>
                <li>FPGA-Based Compressive Sensing for MRI Acceleration (2023)</li>
                <li>Orthogonal Matching Pursuit for Radar Target Detection (2024)</li>
                <li>Compressive Sensing Enabled IoT Sensor Network for Smart Cities (2024)</li>
                <li>AI-Driven Sparse Signal Reconstruction for Multi-Modal Biomedical Imaging (2025)</li>
                <li>Real-Time Hardware Implementation of Compressive Sensing Algorithms for Embedded Systems (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides global students and scholars with cutting-edge support in Compressive Sensing in Signal Processing, ensuring B.Tech, M.Tech, and Ph.D. projects meet IEEE standards.
              </p>
              <p>
                Our mentorship integrates software simulations, hardware design, and real-world applications, promoting academic and industrial excellence.
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
              <li><a href="/signal-processing-project-development">Signal Processing Project Development</a></li>
              <li><a href="/biomedical-signal-processing-project-development">Biomedical Signal Processing Project Development</a></li>
              <li><a href="/digital-image-video-signal-processing-project-development">Digital Image and Video Signal Processing Project Development</a></li>
              <li><a href="/iot-embedded-devices-project-development">IoT-enabled Embedded Devices Project Development</a></li>
              <li><a href="/fpga-system-prototyping-project-development">FPGA-Based System Prototyping Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECECompressiveSensingSignalProcessingProjectDevelopmentCenter;