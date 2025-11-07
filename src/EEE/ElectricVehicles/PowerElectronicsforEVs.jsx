import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Power Electronics for EVs Project Development Center offer?",
    answer: "We provide IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students focusing on DC-DC converters, inverters, bidirectional converters, charging controllers, wide-bandgap devices, and AI-based power electronics design."
  },
  {
    question: "What types of EV power electronics projects are supported?",
    answer: "B.Tech projects: DC-DC converters, inverter design, motor drive control simulations. M.Tech projects: wide-bandgap SiC/GaN devices, bidirectional converters, high-efficiency inverter designs, integration with BMS. Ph.D: AI-driven converter control, fault-tolerant EV power electronics, high-power propulsion systems, V2G integration."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, PSCAD, PLECS, FPGA/DSP controllers, Arduino/STM32, SiC/GaN wide-bandgap devices, CAN protocols, IoT telemetry, AI frameworks (TensorFlow, PyTorch) for control optimization."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects align with IEEE Transactions (2023–2025) on EV motor drives, wide-bandgap power electronics, fault-tolerant design, regenerative braking, bidirectional converters, and grid integration systems."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide support from IEEE topic identification, circuit design, real-time hardware prototyping, AI-based optimization, to technical writing in IEEE style with Scopus/SCI/IEEE publication guidance."
  }
];

const EEEPowerElectronicsEvsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Sidebar Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Power Electronics for EVs Project Development Center</li>
              <li>EV Inverter Projects</li>
              <li>DC-DC Converter Research for EVs</li>
              <li>Wide-Bandgap Power Electronics</li>
              <li>AI-Based EV Converters</li>
              <li>B.Tech EV Power Electronics Projects</li>
              <li>M.Tech EV Power Electronics Research</li>
              <li>Ph.D. EV Power Electronics Projects</li>
              <li>V2G Power Electronics IEEE Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Power Electronics for EVs – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> provides students with IEEE-aligned (2023–2025) project development in EV power electronics, enabling innovations in converters, inverters, regenerative systems, and AI-optimized drive electronics for electrified transport.</p>
              <p>Power electronics govern the energy exchange between EV batteries, motor drives, and charging systems, playing a pivotal role in EV safety, range, thermal management, and performance optimization.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Power Electronics for EVs</h2>
              <ul>
                <li>Manages battery-to-motor energy conversion efficiently.</li>
                <li>Integrates with motor drives, BMS, chargers, and regenerative braking.</li>
                <li>Enhances EV performance, range, and safety.</li>
                <li>Reduces system power losses.</li>
                <li>IEEE trends (2023–2025): SiC/GaN wide-bandgap devices and AI-based converter optimization.</li>
              </ul>
            </section>

            {/* B.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in EV Power Electronics</h2>
              <ul>
                <li>Basic DC-DC converter circuits</li>
                <li>Inverter and motor drive controller prototypes</li>
                <li>MATLAB/Simulink circuit-level EV simulations</li>
              </ul>
              <p>Focus: learning fundamentals of EV converters and inverter drive optimization.</p>
            </section>

            {/* M.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in EV Power Electronics</h2>
              <ul>
                <li>High-efficiency inverter design with SiC/GaN MOSFETs</li>
                <li>Bidirectional converter design for V2G and regenerative braking</li>
                <li>Integration of converters with BMS and motor controller</li>
                <li>IEEE-aligned optimization strategies and prototyping</li>
              </ul>
              <p>Focus: advanced EV converter/inverter systems and energy optimization with wide-bandgap devices.</p>
            </section>

            {/* Ph.D Projects */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Projects in EV Power Electronics</h2>
              <ul>
                <li>AI-based predictive control of converters</li>
                <li>Fault-tolerant converter topologies for EV propulsion</li>
                <li>High-power system integration with grid interfaces (V2G)</li>
                <li>SCI/Scopus-indexed publications and patents on future EV electronics</li>
              </ul>
              <p>Focus: next-gen fault-tolerant, AI-integrated EV power electronics architectures.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative EV Power Electronics Technologies</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Conventional Silicon MOSFETs</td>
                      <td>Motor Drives, Converters</td>
                      <td>Standard efficiency, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Wide-Bandgap Devices (SiC/GaN)</td>
                      <td>High-performance EVs</td>
                      <td>High efficiency, reduced thermal losses</td>
                    </tr>
                    <tr>
                      <td>DC-DC Converters</td>
                      <td>Battery Management & Charging</td>
                      <td>Voltage regulation, energy efficiency</td>
                    </tr>
                    <tr>
                      <td>Bidirectional Converters</td>
                      <td>EV fleets, V2G</td>
                      <td>Two-way energy flow, regenerative braking</td>
                    </tr>
                    <tr>
                      <td>Inverter + Drive Integration</td>
                      <td>EV Propulsion</td>
                      <td>Efficient torque/speed control</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute advances EV innovation with IEEE-standard guidance in power electronics. From converter & inverter design, wide-bandgap device research, to IoT-enabled optimization and SCI/IEEE publications, we help scholars globally bridge EV research to industrial ecosystems.</p>
            </section>

            {/* ❓ FAQ Section */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item,i)=>(
                  <details key={i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>

              {/* JSON-LD for FAQ SEO */}
              <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context":"https://schema.org",
                     "@type":"FAQPage",
                     "mainEntity": faqs.map(f=>({
                       "@type":"Question",
                       "name":f.question,
                       "acceptedAnswer": { "@type":"Answer","text":f.answer }
                     }))
                  })
                }}
              />
            </section>
          </div>
          
          {/* Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/ev-motor-drive-systems-project-development">EV Motor Drive Systems</a></li>
              <li><a href="/battery-management-systems-project-development">Battery Management Systems (BMS)</a></li>
              <li><a href="/ev-charging-infrastructure-project-development">EV Charging Infrastructure</a></li>
              <li><a href="/hev-project-development">Hybrid Electric Vehicles (HEV)</a></li>
              <li><a href="/regenerative-braking-systems-project-development">Regenerative Braking Systems</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default EEEPowerElectronicsEvsProjectDevelopmentCenter;
