import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Hybrid Electric Vehicles (HEV) Project Development Center offer?",
    answer: "We provide IEEE-aligned (2023–2025) support for B.Tech, M.Tech, and Ph.D. projects on hybrid propulsion systems, energy management strategies, motor-generator integration, regenerative braking, power electronics, and publication in IEEE/Scopus/SCI journals."
  },
  {
    question: "What types of HEV projects are supported?",
    answer: "B.Tech projects: basic HEV drive models, MATLAB simulations, hybrid prototypes with microcontrollers. M.Tech projects: energy management optimization, regenerative braking, hybrid control algorithms. Ph.D projects: AI/ML predictive HEV management, multi-motor hybrids, advanced powertrain optimization, and patents/publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, PSCAD, PLECS, embedded microcontrollers (Arduino, STM32), DSP/FPGA controllers, power electronics circuits, CAN-bus communication, IoT integration, AI/ML libraries (TensorFlow, PyTorch)."
  },
  {
    question: "How are HEV projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025) on automotive hybrid drives, predictive energy management, HEV powertrain optimization, adaptive control algorithms, and regenerative integration."
  },
  {
    question: "What academic support is provided?",
    answer: "We offer guidance in IEEE topic selection, embedded drive hardware/simulation, control algorithm validation, real-time energy management integration, IEEE-format technical writing, and support for international publications."
  }
];

const EeeHevProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Keywords List */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Hybrid Electric Vehicles Project Development Center</li>
              <li>HEV IEEE Projects</li>
              <li>Hybrid Propulsion System Projects</li>
              <li>Energy Management HEV Research</li>
              <li>Regenerative Braking HEV Projects</li>
              <li>Parallel & Series Hybrid Vehicles</li>
              <li>B.Tech HEV Projects</li>
              <li>M.Tech HEV Research</li>
              <li>Ph.D. HEV Projects</li>
              <li>AI-Based HEV Systems</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>
          
          {/* 📑 Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Hybrid Electric Vehicles (HEV) – Project Development Support</h1>

            {/* Introduction */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> runs the HEV Project Development Center, aligned with IEEE 2023–2025 standards. Students design IEEE-standardized hybrid propulsion projects combining ICE with electric drives for fuel efficiency and reduced emissions.</p>
              <p>Research covers energy management, regenerative technology, motor-generator integration, control systems, and AI-powered optimization for Automotive 4.0 mobility.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of HEV Research</h2>
              <ul>
                <li>Improves fuel efficiency and reduces carbon emissions.</li>
                <li>Integrates electric drive with ICE efficiently.</li>
                <li>Enables regenerative braking and hybrid energy optimization.</li>
                <li>Applicable in passenger vehicles, buses, fleet vehicles.</li>
                <li>IEEE 2023–2025 scope: AI-driven hybrid management & predictive optimization.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech HEV Projects</h2>
              <ul>
                <li>Basic HEV drive and control strategy simulations</li>
                <li>MATLAB/Simulink hybrid propulsion prototypes</li>
                <li>Microcontroller-based hybrid engine controller</li>
              </ul>
              <p>Focus: fundamental understanding of hybrid drives & lab-scale prototyping.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech HEV Projects</h2>
              <ul>
                <li>Energy management for hybrid powertrains</li>
                <li>Integration of regenerative braking with HEV control</li>
                <li>Optimization of HEV algorithms for real-time driving cycles</li>
              </ul>
              <p>Focus: advanced optimization, multi-source integration, IEEE-standardized algorithms.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D HEV Research</h2>
              <ul>
                <li>AI/ML algorithms for predictive hybrid energy management</li>
                <li>Multi-motor propulsion coordination</li>
                <li>HEV optimization with smart grids and V2X interfaces</li>
                <li>SCI/Scopus publications and patent-ready HEV innovations</li>
              </ul>
              <p>Focus: next-generation HEV research tackling predictive energy systems, autonomy, and efficiency standardization.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Conventional vs HEVs</h2>
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
                      <td>Conventional ICE</td>
                      <td>Passenger Vehicles</td>
                      <td>Affordable, widely available</td>
                    </tr>
                    <tr>
                      <td>Parallel Hybrid</td>
                      <td>Passenger Cars, Buses</td>
                      <td>Improved fuel efficiency, simple design</td>
                    </tr>
                    <tr>
                      <td>Series Hybrid</td>
                      <td>Commercial Vehicles</td>
                      <td>Electric-only mode, simplified ICE</td>
                    </tr>
                    <tr>
                      <td>Plug-in Hybrid (PHEV)</td>
                      <td>Passenger EVs & Fleets</td>
                      <td>Extended electric range with ICE backup</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced HEVs</td>
                      <td>Future Smart Cars</td>
                      <td>Optimized energy via predictive AI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute continues to lead in EV & HEV systems research. Through the HEV Project Development Center, we provide total support: hybrid control simulation, hardware prototyping, smart grid integration, and IEEE-standard research dissemination.</p>
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

              {/* JSON-LD structured data for SEO */}
              <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type": "FAQPage",
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
          
          {/* 🔗 Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/ev-motor-drive-systems-project-development">EV Motor Drive Systems</a></li>
              <li><a href="/battery-management-systems-project-development">Battery Management Systems (BMS)</a></li>
              <li><a href="/ev-charging-infrastructure-project-development">EV Charging Infrastructure</a></li>
              <li><a href="/automotive-embedded-systems-project-development">Automotive Embedded Systems</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">AI/ML Intelligent Control</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
};

export default EeeHevProjectDevelopmentCenter;
