import "../EEEProjectDevelopmentCenter.scss";  
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";  

const faqs = [
  {
    question: "What services does the Regenerative Braking Systems Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. scholars with IEEE-aligned (2023–2025) project guidance in regenerative braking, including control algorithm design, motor-inverter integration, energy storage optimization, AI-based braking systems, and IEEE/Scopus/SCI publications."
  },
  {
    question: "What types of regenerative braking projects are supported?",
    answer: "B.Tech projects: small EV regenerative braking simulations, motor-inverter energy recovery prototypes. M.Tech projects: adaptive braking strategies, multi-motor regenerative braking, optimization algorithms. Ph.D projects: AI/ML-driven braking control, predictive braking energy recovery, hybrid braking integration, publications, and patents."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, PSCAD, PLECS, embedded controllers (Arduino, STM32, DSP, FPGA), CAN bus integration, LabVIEW dashboards, IoT modules for data collection, TensorFlow/PyTorch for AI-enhanced braking control."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects align with IEEE Transactions (2023–2025) on vehicular energy recovery systems, adaptive braking strategies, drive-train performance, power electronics integration, and AI/IoT-enabled regenerative braking prototypes."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide end-to-end support for simulations, hardware integration, system optimization, technical documentation in IEEE format, and international publication guidance in Springer/Elsevier/SCI-indexed journals."
  }
];

const EEERegenerativeBrakingSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Regenerative Braking Systems Project Development Center</li>
              <li>EV Braking Energy Recovery Projects</li>
              <li>AI-Based Regenerative Braking Research</li>
              <li>Multi-Motor EV Braking Projects</li>
              <li>Hybrid Braking Systems IEEE</li>
              <li>B.Tech Regenerative Braking Projects</li>
              <li>M.Tech EV Braking Research</li>
              <li>Ph.D. EV Braking Projects</li>
              <li>Energy Recovery Systems EV</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>
          
          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Regenerative Braking Systems – Project Development Support</h1>
            
            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> hosts the Regenerative Braking Systems Project Development Center, where students explore IEEE-aligned (2023–2025) innovations in braking energy recovery, algorithms, and battery-supercapacitor energy storage systems.</p>
              <p>By combining electric drives, control strategies, and AI-enabled optimization, students gain real-world experience in EV braking efficiency, range extension, and predictive braking safety systems.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Regenerative Braking Systems</h2>
              <ul>
                <li>Recovers vehicle kinetic energy to extend range.</li>
                <li>Integrates seamlessly with motors, batteries, and inverters.</li>
                <li>Reduces wear on brake systems, enhancing lifespan.</li>
                <li>Crucial for electric cars, buses, and fleet vehicles.</li>
                <li>IEEE trends (2023–2025): adaptive and AI-driven regenerative braking in multi-motor vehicles.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Regenerative Braking Projects</h2>
              <ul>
                <li>Basic regenerative braking model in MATLAB/Simulink</li>
                <li>Small EV braking energy recovery prototype with Arduino</li>
                <li>Simple battery charging integration from motor inverter</li>
              </ul>
              <p>Focus: foundations of EV braking recovery design & fundamental control testing.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Regenerative Braking Projects</h2>
              <ul>
                <li>Multi-motor regenerative braking system simulations</li>
                <li>Adaptive control algorithms for regenerative energy optimization</li>
                <li>Integration of regenerative braking with hybrid drive-train and BMS</li>
              </ul>
              <p>Focus: advanced controller design, power electronics integration, IEEE-guided performance validation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Regenerative Braking Projects</h2>
              <ul>
                <li>AI/ML predictive regenerative braking models</li>
                <li>Vehicle-wide hybrid braking optimization algorithms</li>
                <li>Adaptive braking safety with sensor fusion</li>
                <li>Patents & IEEE/SCI publications in EV braking research</li>
              </ul>
              <p>Focus: cutting-edge braking optimization with AI, digital twins, IoT, and Industry 4.0 mobility systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Braking Technologies – Conventional vs EV Systems</h2>
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
                      <td>Mechanical Friction Braking</td>
                      <td>Conventional Vehicles</td>
                      <td>Reliable, but energy wasted</td>
                    </tr>
                    <tr>
                      <td>Single-Motor Regenerative Braking</td>
                      <td>Cars, Scooters</td>
                      <td>Moderate efficiency recovery</td>
                    </tr>
                    <tr>
                      <td>Multi-Motor Regenerative Braking</td>
                      <td>EV Buses, Commercial EVs</td>
                      <td>High efficiency, balanced braking</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced Regenerative Braking</td>
                      <td>Smart EVs</td>
                      <td>Adaptive, predictive braking recovery</td>
                    </tr>
                    <tr>
                      <td>Hybrid (Regen+Friction)</td>
                      <td>Passenger & Fleet EVs</td>
                      <td>Optimal safety + energy recovery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute supports scholars in regenerative braking projects across simulation, inverter-battery energy recovery integration, AI-enhanced braking control, and IEEE-quality publications. We ensure innovations lead to future-ready EV energy recovery solutions globally.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, i)=>(
                  <details key={i}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* JSON-LD SEO Schema */}
              <script type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity": faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer":{ "@type":"Answer","text":f.answer }
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
              <li><a href="/ev-motor-drive-systems-project-development">EV Motor Drive Systems</a></li>
              <li><a href="/battery-management-systems-project-development">Battery Management Systems</a></li>
              <li><a href="/hev-project-development">Hybrid Electric Vehicles (HEV)</a></li>
              <li><a href="/ev-charging-infrastructure-project-development">EV Charging Infrastructure</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">AI/ML in Intelligent Control</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default EEERegenerativeBrakingSystemsProjectDevelopmentCenter;
