import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Overvoltage & Surge Protection Project Development Center offer?",
    answer: "Narpavi Research Institute’s Overvoltage & Surge Protection Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on surge protection devices, lightning arresters, transient suppression methods, intelligent protective relays, and AI-assisted monitoring systems."
  },
  {
    question: "What types of projects in Overvoltage & Surge Protection are supported?",
    answer: "We support B.Tech projects (lightning arresters, surge protection circuits, transient testing units), M.Tech projects (AI-assisted surge detection, smart relay algorithms), and Ph.D. projects (deep learning-based protection frameworks, adaptive grid-level surge coordination, and IoT-enabled predictive monitoring for industrial/utility systems)."
  },
  {
    question: "Which tools and technologies are used in Overvoltage Protection projects?",
    answer: "Our toolkit includes MATLAB/Simulink, PSCAD, COMSOL Multiphysics for surge analysis, IoT tools (MQTT, Modbus), FPGA/DSP hardware, and AI frameworks (TensorFlow, PyTorch) for predictive surge and fault detection."
  },
  {
    question: "How are these projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) focusing on surge protective devices, lightning arresters, smart protective relays, predictive detection strategies, and IEEE-compliant protection coordination methods."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide complete support from IEEE topic identification, simulations, hardware prototyping, IoT-enabled real-time monitoring, IEEE-style project documentation, and guidance for IEEE/Scopus/SCI indexed publications."
  }
];

const EEEOvervoltageSurgeProtectionProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Overvoltage Protection Projects</li>
              <li>Surge Protection Research 2023–2025</li>
              <li>IEEE Lightning Arrester Projects</li>
              <li>B.Tech Surge Mitigation</li>
              <li>M.Tech AI-Based Overvoltage Protection</li>
              <li>Ph.D Smart Relays</li>
              <li>Narpavi Research Institute</li>
              <li>Transient Voltage Suppression Projects</li>
              <li>Predictive Surge Detection</li>
              <li>Industrial Protection Systems</li>
            </ul>
          </div>

          {/* 📑 Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Overvoltage & Surge Protection – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Overvoltage & Surge Protection Project Development Center, 
                providing global scholars with IEEE-aligned (2023–2025) insights into transient voltage suppression, lightning surge analysis, 
                coordination of protection devices, and predictive AI-assisted mitigation systems.
              </p>
              <p>
                Scholars gain expertise in designing SPDs, arresters, SCADA-linked protection schemes, surge transient analysis, 
                IoT-fault monitoring, and resilient coordination for smart grids and industrial power systems.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Overvoltage & Surge Protection Projects</h2>
              <ul>
                <li>Basics of surge, transient & overvoltage phenomena</li>
                <li>IEEE publications (2023–2025) on lightning arresters, surge systems</li>
                <li>Simulation using MATLAB/Simulink, PSCAD, COMSOL</li>
                <li>Device evaluation: surge currents, transient spikes</li>
                <li>Prototyping arresters, SPDs, IoT-enabled monitoring</li>
                <li>Prepare IEEE-style technical reports</li>
              </ul>
              <p>Focus: foundation-level transient studies + protection hardware practice.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Overvoltage & Surge Protection Projects</h2>
              <ul>
                <li>Detailed IEEE Transactions survey (2023–2025) in SPD/relay design</li>
                <li>AI/ML-assisted surge prediction + adaptive protective control</li>
                <li>Simulation for transient mitigation & voltage stress reduction</li>
                <li>FPGA/DSP-based smart relay prototypes</li>
                <li>Testing SPDs + arresters under real surge waveforms</li>
                <li>IEEE-compliant reports supporting journal submission</li>
              </ul>
              <p>Focus: advanced design, AI protection coordination, experiments for industry readiness.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Overvoltage & Surge Protection Projects</h2>
              <ul>
                <li>Comprehensive IEEE literature review of surge protection trends</li>
                <li>AI/Deep Learning adaptive surge detection frameworks</li>
                <li>Development of HVDC & Microgrid transient resilience systems</li>
                <li>IoT-enabled lab-scale surge protection + HIL testing</li>
                <li>Patents, IEEE journal publications in smart relays & SPDs</li>
              </ul>
              <p>Focus: groundbreaking industrial surge resilience, predictive & intelligent algorithms.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Overvoltage & Surge Protection vs. Industry Applications</h2>
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
                      <td>Lightning & Surge Arresters</td>
                      <td>Transmission Lines, Substations</td>
                      <td>Transient + Lightning Overvoltage Mitigation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Surge Protective Devices (SPDs)</td>
                      <td>Industrial/Residential Systems</td>
                      <td>Voltage suppression & clamping</td>
                      <td>B.Tech/M.Tech</td>
                      <td>COMSOL, PSIM</td>
                    </tr>
                    <tr>
                      <td>Smart Protective Relays</td>
                      <td>Utility Grids, Industrial Plants</td>
                      <td>Automated trip & transient mitigation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA, DSP, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Transient Suppression Circuits</td>
                      <td>Renewable Integration, Power Electronics</td>
                      <td>Device protection from spikes</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Surge Monitoring</td>
                      <td>Microgrids, Smart Grids</td>
                      <td>Predictive transient anomaly detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow</td>
                    </tr>
                    <tr>
                      <td>Device Coordination & Reliability</td>
                      <td>HVDC, Renewable Grids</td>
                      <td>System-level protection coordination</td>
                      <td>Ph.D.</td>
                      <td>PSCAD, COMSOL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global R&D hub in EEE project development. 
                Our Overvoltage & Surge Protection Center delivers IEEE-centric project guidance across dielectric arresters, surge systems, 
                smart relays, and AI-driven predictive mitigation techniques.
              </p>
              <p>
                From simulations to prototypes and IEEE-publication, we ensure our scholars 
                contribute to both industrial implementation and academic innovation.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((q, index) => (
                  <details key={index}>
                    <summary>{q.question}</summary>
                    <p>{q.answer}</p>
                  </details>
                ))}
              </div>

              {/* JSON-LD SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({
                      "@type": "Question",
                      "name": f.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* 🔗 Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/insulation-materials-techniques-project-development">Insulation Materials & Techniques</a></li>
              <li><a href="/real-time-monitoring-scada-project-development">Real-Time Monitoring & SCADA</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
              <li><a href="/energy-storage-renewable-integration-project-development">Energy Storage Integration</a></li>
              <li><a href="/microgrid-energy-management-project-development">Microgrid Energy Management</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEOvervoltageSurgeProtectionProjectDevelopmentCenter;
