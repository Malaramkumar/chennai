import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the EV Motor Drive Systems Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on EV propulsion, BLDC/PMSM/IM/SRM drives, inverter design, regenerative braking integration, AI-based predictive control, and IEEE/Scopus/SCI publication guidance."
  },
  {
    question: "What types of EV Motor Drive projects are supported?",
    answer: "B.Tech projects include basic motor speed regulation, BLDC/PMSM drive simulations, and microcontroller-based EV drive prototypes. M.Tech projects involve inverter design, regenerative braking, BLDC/PMSM optimization. Ph.D. research addresses AI/ML-based drive control, multi-motor coordination, torque prediction, and EV ecosystem optimization."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, PSCAD, PLECS, DSP/FPGA controllers, Arduino/STM32 microcontrollers, IoT-based EV telemetry, AI frameworks (TensorFlow, PyTorch), and hardware-in-the-loop (HIL) testing setups."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are aligned with IEEE Transactions (2023–2025), focusing on electric drives, predictive algorithms, motor control stability, AI-enhanced traction optimization, and integration with EV battery management systems."
  },
  {
    question: "What academic support is provided?",
    answer: "We offer assistance in IEEE topic finalization, simulations, real-time inverter/drive lab setups, optimization algorithm design, IEEE-format technical reports, and SCI/Scopus/IEEE-indexed publishing."
  }
];

const EeeEvMotorDriveSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🚀 SEO Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>EV Motor Drive Systems Project Development Center</li>
              <li>BLDC Motor Drive Projects</li>
              <li>PMSM Drives for EVs</li>
              <li>EV Propulsion System Projects</li>
              <li>Electric Vehicle Motor Control</li>
              <li>B.Tech EV Motor Projects</li>
              <li>M.Tech EV Drive Research</li>
              <li>Ph.D. EV Motor Drive Projects</li>
              <li>IEEE EV Motor Drives 2023–2025</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>EV Motor Drive Systems – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> hosts the EV Motor Drive Systems Project Development Center, equipping researchers with IEEE-aligned (2023–2025) projects in electric propulsion drives like BLDC, PMSM, induction, and switched reluctance machines.</p>
              <p>We enable students to explore energy-efficient designs, inverter optimization, torque control, and AI-assisted predictive algorithms for future-ready EVs.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of EV Motor Drive Systems</h2>
              <ul>
                <li>Provides efficient electric propulsion systems.</li>
                <li>Supports torque/speed control & regenerative braking.</li>
                <li>Integrates with BMS and advanced power electronics.</li>
                <li>Widely applied in EV cars, buses, two-wheelers, drones.</li>
                <li>IEEE 2023–2025 research: AI-based predictive drive & smart motor solutions.</li>
              </ul>
            </section>

            {/* B.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech EV Motor Drive Projects</h2>
              <ul>
                <li>BLDC motor speed regulation via microcontrollers</li>
                <li>MATLAB/Simulink models of PMSM drives</li>
                <li>Inverter basics and regenerative braking simulation</li>
              </ul>
              <p>Focus: foundations of EV motor drives and hands-on prototyping.</p>
            </section>

            {/* M.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech EV Motor Drive Projects</h2>
              <ul>
                <li>Optimization of BLDC/PMSM inverter control</li>
                <li>Integration of regenerative braking with BMS</li>
                <li>Real-time drive simulations with FPGA/DSP boards</li>
                <li>IEEE-style reporting & hardware-based case studies</li>
              </ul>
              <p>Focus: advanced optimization, EV drive algorithms, IoT-linked telemetry.</p>
            </section>

            {/* Ph.D Projects */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D EV Motor Drive Research</h2>
              <ul>
                <li>AI/ML drive controllers for predictive torque and speed</li>
                <li>Multi-motor EV powertrain coordination</li>
                <li>Cloud/edge-assisted EV telemetry for predictive analytics</li>
                <li>Digital twin-based predictive motor drive systems</li>
              </ul>
              <p>Focus: global IEEE-level research in intelligent and resilient EV motor drives for next-gen mobility.</p>
            </section>

            {/* 📊 Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – EV Drive Technologies vs Applications</h2>
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
                      <td>DC Motor Drives</td>
                      <td>Small EVs, Scooters</td>
                      <td>Low-cost, simple to control</td>
                    </tr>
                    <tr>
                      <td>BLDC Drives</td>
                      <td>EV cars, drones</td>
                      <td>High efficiency, compact design</td>
                    </tr>
                    <tr>
                      <td>PMSM Drives</td>
                      <td>Buses, Industrial EVs</td>
                      <td>High torque, precise control</td>
                    </tr>
                    <tr>
                      <td>Induction Drives</td>
                      <td>Tesla EVs</td>
                      <td>Robust, scalable, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Switched Reluctance Drives</td>
                      <td>EVs, Industrial Utility</td>
                      <td>Reliable, simple build, cost-effective</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a leading global center for EV innovation. Through the EV Motor Drive Systems Project Development Center, we provide IEEE-standard support for BLDC/PMSM/IM/SRM projects, from MATLAB simulations to hardware-in-the-loop, inverter integration, and global publication guidance.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,i)=>(
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* JSON-LD FAQ Schema */}
              <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer":{"@type":"Answer","text":f.answer}
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
              <li><a href="/power-electronics-project-development">Power Electronics Projects</a></li>
              <li><a href="/automotive-embedded-systems-project-development">Automotive Embedded Systems</a></li>
              <li><a href="/adaptive-robust-control-project-development">Adaptive & Robust Control</a></li>
              <li><a href="/optimal-control-systems-project-development">Optimal Control Systems</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">AI/ML Intelligent Control</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
};

export default EeeEvMotorDriveSystemsProjectDevelopmentCenter;
