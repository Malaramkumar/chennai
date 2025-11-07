import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the FPGA-Based Control Applications Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects covering FPGA-based digital controllers, high-speed DSP, real-time process optimization, AI-assisted adaptive control, and IoT-enabled FPGA monitoring."
  },
  {
    question: "What types of FPGA-based projects are supported?",
    answer: "We support B.Tech projects (HDL programming, FPGA prototypes with sensors/actuators), M.Tech projects (AI-optimized FPGA controllers, parallel processing, DSP applications), and Ph.D. projects (deep learning-based FPGA architectures, smart industry automation, patents and IEEE publications)."
  },
  {
    question: "Which tools are used in FPGA projects?",
    answer: "We use VHDL/Verilog, Xilinx Vivado, Intel Quartus, MATLAB/Simulink, ModelSim, IoT monitoring platforms, and AI frameworks (TensorFlow, PyTorch) for FPGA-based adaptive control."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "All projects reference IEEE Transactions (2023–2025) covering FPGA digital controllers, DSP applications, high-speed processing, AI/IoT-based FPGA solutions, aligning academic research with industrial deployment standards."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide end-to-end IEEE project mentoring, HDL programming guidance, FPGA prototyping, real-time validation in labs, IEEE-formatted technical reporting, and research publication in IEEE/Scopus/SCI journals."
  }
];

const EEEFpgaControlApplicationsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Left - Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>FPGA Control Projects</li>
              <li>IEEE FPGA Research 2023–2025</li>
              <li>B.Tech FPGA Applications</li>
              <li>M.Tech Real-Time FPGA Control</li>
              <li>Ph.D AI FPGA Systems</li>
              <li>Narpavi Research Institute</li>
              <li>VHDL Verilog FPGA Projects</li>
              <li>DSP FPGA Solutions</li>
              <li>Industrial FPGA Automation</li>
              <li>Robotics FPGA Control</li>
            </ul>
          </div>

          {/* 📑 Center - Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>FPGA-Based Control Applications – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the FPGA-Based Control Applications Project Development Center, providing scholars with IEEE-aligned (2023–2025) research opportunities in FPGA digital controllers, DSP, parallel control, and real-time adaptive systems.</p>
              <p>Students gain skills in HDL design, FPGA prototyping, AI-assisted controllers, IoT-enabled monitoring, and industry-grade performance validation.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech FPGA Control Applications Projects</h2>
              <ul>
                <li>Understanding FPGA hardware, HDL basics, and digital controllers</li>
                <li>Review IEEE (2023–2025) FPGA-based automation publications</li>
                <li>Simulation in VHDL/Verilog using ModelSim, Quartus, or Xilinx</li>
                <li>Build FPGA prototypes with actuators/sensors for control loops</li>
                <li>Testing performance: latency, throughput, and control accuracy</li>
                <li>Prepare IEEE-aligned reports</li>
              </ul>
              <p>Focus: fundamentals of FPGA development and embedded hardware integration.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech FPGA Control Applications Projects</h2>
              <ul>
                <li>IEEE Transactions review (2023–2025) for FPGA DSP and real-time systems</li>
                <li>AI/ML-assisted adaptive FPGA control algorithms</li>
                <li>Simulation of performance vs. latency using MATLAB + HDL co-simulation</li>
                <li>IoT-enabled FPGA monitoring with fault prediction</li>
                <li>Experimental FPGA prototypes for industrial control validation</li>
                <li>Research outputs formatted for IEEE Publications</li>
              </ul>
              <p>Focus: advanced optimization, AI-assisted design, and renewable/industrial integrations.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. FPGA Control Applications Projects</h2>
              <ul>
                <li>Review IEEE Transactions 2023–2025 for evolving FPGA research</li>
                <li>Deep learning/AI-driven FPGA predictive frameworks</li>
                <li>FPGA-based smart industrial automation architectures</li>
                <li>Testing FPGA prototypes with IoT-enabled sensors and HIL setups</li>
                <li>Patents, IEEE papers, and contributions to FPGA standards</li>
              </ul>
              <p>Focus: pioneering FPGA-optimized smart system architectures with industrial collaboration.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – FPGA Control Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FPGA Digital Controllers</td>
                      <td>Automation, Robotics</td>
                      <td>High-speed parallel control, low latency</td>
                      <td>B.Tech/M.Tech</td>
                      <td>VHDL, Quartus, Xilinx Vivado</td>
                    </tr>
                    <tr>
                      <td>FPGA DSP Applications</td>
                      <td>Signal Processing, Comms</td>
                      <td>Real-time filtering + hardware acceleration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, ModelSim</td>
                    </tr>
                    <tr>
                      <td>HDL Programming</td>
                      <td>Embedded Systems</td>
                      <td>Timing optimization & simulation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Verilog/VHDL, Quartus</td>
                    </tr>
                    <tr>
                      <td>Real-Time Control</td>
                      <td>Motor Drives, Robotics</td>
                      <td>Deterministic response, adaptive control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA Dev Kits, Simulink HDL Coder</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted FPGA Control</td>
                      <td>Smart Manufacturing, IoT</td>
                      <td>Machine learning optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch + VHDL APIs</td>
                    </tr>
                    <tr>
                      <td>IoT Monitoring with FPGA</td>
                      <td>Smart Grid, Industries</td>
                      <td>Remote anomaly detection</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Middleware</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is recognized worldwide for project innovation in EEE. Our FPGA-Based Control Applications Center trains students in HDL design, FPGA prototyping, IoT-enabled systems, and predictive AI-based designs for IEEE-standard research, patents, and industrial deployments.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* FAQ Schema */}
              <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity":faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer": { "@type":"Answer","text":f.answer }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* 🔗 Right - Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/arm-pic-avr-microcontroller-project-development">ARM / PIC / AVR Microcontroller Projects</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Projects</a></li>
              <li><a href="/power-electronics-project-development">Power Electronics Project Development</a></li>
              <li><a href="/robotics-automation-project-development">Robotics & Automation Projects</a></li>
              <li><a href="/iot-eee-project-development">IoT in EEE Projects</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EEEFpgaControlApplicationsProjectDevelopmentCenter;
