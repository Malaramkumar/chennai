import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Fault Diagnosis of Motors & Generators Project Development Center offer?",
    answer: "Narpavi Research Institute’s Fault Diagnosis of Motors & Generators Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on fault detection, predictive diagnostics, vibration/current monitoring, and intelligent control for motors and generators."
  },
  {
    question: "What types of Fault Diagnosis projects are supported?",
    answer: "We support B.Tech projects (vibration/thermal/current monitoring, IoT-based diagnostics), M.Tech projects (AI/ML-based fault prediction, real-time monitoring), and Ph.D. projects (RUL prediction, advanced diagnostic controllers) for applications in industrial drives and renewable energy systems."
  },
  {
    question: "Which technologies are used in Fault Diagnosis project development?",
    answer: "Our stack includes MATLAB/Simulink, LabVIEW, ANSYS Maxwell, AI frameworks (TensorFlow, PyTorch), IoT platforms (MQTT), FPGA/ARM controllers, and hardware-in-the-loop (HIL) testbeds for fault diagnosis and monitoring."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like predictive fault diagnosis, AI-driven monitoring, and IoT integration, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, algorithm design, simulation with MATLAB/LabVIEW, hardware prototyping, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const EEEFaultDiagnosisMotorsGeneratorsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Fault Diagnosis of Motors & Generators Projects</li>
              <li>IEEE Motor Fault Detection Projects 2023–2025</li>
              <li>B.Tech Predictive Maintenance Projects</li>
              <li>M.Tech AI-Based Fault Diagnosis Research</li>
              <li>Ph.D IoT-Enabled Motor Monitoring</li>
              <li>Smart Industrial Motor Diagnostics</li>
              <li>Vibration Thermal Current Analysis</li>
              <li>Narpavi Research Institute</li>
              <li>Intelligent Fault Detection Systems</li>
              <li>Predictive Maintenance Solutions</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Fault Diagnosis of Motors & Generators – Project Development Support</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Fault Diagnosis of Motors & Generators Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance fault detection and diagnostics aligned with IEEE Transactions (2023–2025). Our projects focus on vibration analysis, thermal monitoring, current signature analysis, and AI/ML-based fault prediction for motors, generators, and industrial drives.
              </p>
              <p>
                By integrating simulations, hardware prototyping, and IoT-based monitoring, we deliver intelligent, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Fault Diagnosis of Motors & Generators Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects in fault diagnosis, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding electrical and mechanical fault types in motors and generators</li>
                <li>Study of IEEE papers (2023–2025) for motor and generator fault diagnosis techniques</li>
                <li>MATLAB/Simulink and LabVIEW simulations for vibration, thermal, and current-based fault scenarios</li>
                <li>Analysis of fault impacts on machine performance and efficiency</li>
                <li>Sensor-based vibration, temperature, and current monitoring on small-scale motors and generators</li>
                <li>Generation of IEEE-style project reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical diagnostics, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Fault Diagnosis of Motors & Generators Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced fault modeling and real-time diagnostics.
              </p>
              <ul>
                <li>Detailed study of IEEE Transactions (2023–2025) on motor and generator fault detection</li>
                <li>AI/ML-based modeling for vibration, thermal, and current signature fault detection</li>
                <li>Simulation of industrial-scale motors and generator systems</li>
                <li>IoT-enabled sensor network implementation for fault diagnosis</li>
                <li>FPGA/ARM-based controllers for adaptive predictive maintenance</li>
                <li>IEEE-compliant report writing and paper submission</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade diagnostic solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Fault Diagnosis of Motors & Generators Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in fault diagnostics.
              </p>
              <ul>
                <li>Review of IEEE Transactions (2023–2025) in motor and generator fault detection and AI integration</li>
                <li>AI, ML, and deep learning algorithms for predictive fault diagnosis</li>
                <li>Real-time IoT-based monitoring systems for motors, generators, and industrial drives</li>
                <li>Laboratory-scale implementation of fault detection systems with HIL testing</li>
                <li>Integration of sensor networks, cloud-based analytics, and predictive maintenance dashboards</li>
                <li>Publication in IEEE journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Fault Diagnosis Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vibration-Based Fault Diagnosis</td>
                      <td>Motors, generators, industrial drives</td>
                      <td>AI-based predictive fault detection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>Thermal & Infrared Analysis</td>
                      <td>Electrical machines and industrial systems</td>
                      <td>Real-time temperature monitoring for early fault detection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>LabVIEW, ANSYS Maxwell</td>
                    </tr>
                    <tr>
                      <td>Current Signature Analysis</td>
                      <td>Motors and generators</td>
                      <td>Rotor/stator fault identification</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, Python</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Condition Monitoring</td>
                      <td>Industry 4.0 smart factories</td>
                      <td>Real-time fault monitoring and cloud-based analytics</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms, Python</td>
                    </tr>
                    <tr>
                      <td>Predictive Maintenance Algorithms</td>
                      <td>Critical industrial machinery</td>
                      <td>ML-based remaining useful life (RUL) prediction</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                    <tr>
                      <td>Advanced Diagnostic Controllers</td>
                      <td>Industrial drives and renewable energy systems</td>
                      <td>Adaptive fault detection and correction</td>
                      <td>Ph.D.</td>
                      <td>FPGA, ARM, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Fault Diagnosis of Motors & Generators Project Development Center, we provide end-to-end support for B.Tech, M.Tech, and Ph.D. scholars worldwide.
              </p>
              <p>
                From IEEE topic selection to hardware prototyping, algorithm development, and publication, Narpavi Research Institute ensures students gain hands-on experience, advanced analytical skills, and international recognition in motor and generator fault diagnosis.
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
              <li><a href="/electrical-machines-project-development">Electrical Machines Project Development</a></li>
              <li><a href="/condition-monitoring-machines-project-development">Condition Monitoring of Machines Project Development</a></li>
              <li><a href="/special-electrical-machines-project-development">Special Electrical Machines Project Development</a></li>
              <li><a href="/iot-eee-project-development">IoT in EEE Project Development</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEFaultDiagnosisMotorsGeneratorsProjectDevelopmentCenter;