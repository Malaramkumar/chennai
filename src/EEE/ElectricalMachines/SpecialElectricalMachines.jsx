import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Special Electrical Machines Project Development Center offer?",
    answer: "Narpavi Research Institute’s Special Electrical Machines Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on SRM, BLDC, and PMSM, focusing on motor design, control, and optimization for applications in electric vehicles, robotics, and industrial automation."
  },
  {
    question: "What types of Special Electrical Machines projects are supported?",
    answer: "We support B.Tech projects (SRM/BLDC/PMSM modeling, sensorless control), M.Tech projects (AI-based optimization, torque ripple minimization), and Ph.D. projects (multi-objective optimization, predictive maintenance) for applications in EVs, robotics, and renewable energy systems."
  },
  {
    question: "Which technologies are used in Special Electrical Machines project development?",
    answer: "Our stack includes MATLAB/Simulink, ANSYS Maxwell, LabVIEW, AI frameworks (TensorFlow, PyTorch), IoT platforms, FPGA/ARM controllers, and hardware-in-the-loop (HIL) testbeds for motor design and control."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like torque ripple minimization, sensorless control, and AI-driven motor optimization, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, simulation with MATLAB/ANSYS, hardware prototyping, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

const EEESpecialElectricalMachinesProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Special Electrical Machines Projects</li>
              <li>SRM BLDC PMSM Project Development</li>
              <li>IEEE Electrical Machines Projects 2023–2025</li>
              <li>B.Tech Advanced Motor Projects</li>
              <li>M.Tech Intelligent Drive Research</li>
              <li>Ph.D High-Performance Motor Optimization</li>
              <li>IoT-Based Motor Monitoring</li>
              <li>AI-Controlled Electrical Machines</li>
              <li>Energy-Efficient Electrical Machines</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Special Electrical Machines (SRM, BLDC, PMSM) – Project Development Support</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Special Electrical Machines Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance Switched Reluctance Machines (SRM), Brushless DC (BLDC) motors, and Permanent Magnet Synchronous Machines (PMSM) aligned with IEEE Transactions (2023–2025). Our projects focus on motor design, control strategies, and performance optimization for electric vehicles, robotics, and industrial automation.
              </p>
              <p>
                By combining simulation, hardware prototyping, and AI/IoT-based control, we deliver innovative, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Special Electrical Machines Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects in SRM, BLDC, and PMSM, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding SRM, BLDC, and PMSM construction and operating principles</li>
                <li>Study of IEEE papers (2023–2025) for modern electrical machine design</li>
                <li>MATLAB/Simulink and ANSYS Maxwell simulations for torque-speed characteristics</li>
                <li>Modeling of sensorless control strategies and performance analysis</li>
                <li>Microcontroller-based BLDC or SRM drive implementation</li>
                <li>Generation of IEEE-style project reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical motor design, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Special Electrical Machines Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced modeling, control, and optimization of special electrical machines.
              </p>
              <ul>
                <li>Detailed analysis of IEEE Transactions (2023–2025) on machine design and control</li>
                <li>Multi-objective modeling of SRM, BLDC, and PMSM for industrial and automotive applications</li>
                <li>Integration of AI-based sensorless control and predictive optimization</li>
                <li>FPGA or ARM-based controllers for real-time machine operation</li>
                <li>HIL testing and IoT-enabled performance monitoring</li>
                <li>IEEE-compliant report writing and paper submission</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade motor solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Special Electrical Machines Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in advanced electrical machines.
              </p>
              <ul>
                <li>Comprehensive review of IEEE Transactions (2023–2025) on motor design and AI integration</li>
                <li>AI/ML and metaheuristic-based optimization for torque, efficiency, and thermal management</li>
                <li>Development of intelligent control architectures for SRM, BLDC, and PMSM</li>
                <li>HIL implementation and lab-scale prototypes of advanced motor drives</li>
                <li>Real-time monitoring with IoT-enabled predictive maintenance</li>
                <li>Publication in IEEE journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Special Electrical Machines Technologies vs. Industry Applications</h2>
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
                      <td>Switched Reluctance Machines (SRM)</td>
                      <td>Electric vehicles, robotics, industrial drives</td>
                      <td>Torque ripple minimization and high-speed control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ANSYS Maxwell</td>
                    </tr>
                    <tr>
                      <td>Brushless DC Motors (BLDC)</td>
                      <td>EVs, drones, aerospace, home appliances</td>
                      <td>Efficiency optimization and AI-based control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>Permanent Magnet Synchronous Machines (PMSM)</td>
                      <td>Renewable energy, robotics, industrial automation</td>
                      <td>Multi-objective optimization for torque and energy efficiency</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>Advanced Sensorless Control</td>
                      <td>Motor drive systems</td>
                      <td>Real-time estimation using AI/ML algorithms</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, FPGA</td>
                    </tr>
                    <tr>
                      <td>Multi-Objective Optimization Techniques</td>
                      <td>Automotive and industrial high-performance drives</td>
                      <td>Efficiency, cost, and thermal management</td>
                      <td>Ph.D.</td>
                      <td>Python, MATLAB, GAMS</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Machine Monitoring</td>
                      <td>Industry 4.0 applications</td>
                      <td>Predictive maintenance and real-time diagnostics</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>IoT platforms, MQTT, Python</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized center for Electrical and Electronics Engineering project development. Through the Special Electrical Machines Project Development Center, we provide full support to B.Tech, M.Tech, and Ph.D. students worldwide, enabling IEEE-aligned project execution from topic selection to prototype development and publication.
              </p>
              <p>
                Our institute bridges academia and industry, ensuring students gain hands-on experience, advanced technical knowledge, and global recognition in special electrical machine research.
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
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
              <li><a href="/electric-vehicles-project-development">Electric Vehicles Project Development</a></li>
              <li><a href="/renewable-energy-systems-project-development">Renewable Energy Systems Project Development</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEESpecialElectricalMachinesProjectDevelopmentCenter;