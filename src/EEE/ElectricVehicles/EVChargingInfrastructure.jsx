import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the EV Charging Infrastructure Project Development Center offer?",
    answer: "We provide IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students. Services cover charger design, AC/DC charging systems, wireless charging prototypes, smart grid integration, IoT monitoring systems, and publication guidance."
  },
  {
    question: "What types of EV Charging projects are supported?",
    answer: "B.Tech: basic AC/DC chargers and monitoring circuits. M.Tech: fast charging design, smart load management, wireless EV charging. Ph.D: grid-integrated smart charging, vehicle-to-grid (V2G), AI-enabled charging, and SCI/Scopus-indexed publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer: "MATLAB/Simulink, PSCAD, PLECS, IoT platforms (MQTT, AWS IoT, Azure IoT), power electronics hardware (IGBT, MOSFET inverters/converters), FPGA/DSP for charger control, TensorFlow for AI-enabled optimization."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025) on fast charging, wireless charging, bidirectional V2G energy systems, predictive load management, and smart charging platforms."
  },
  {
    question: "What academic support is provided?",
    answer: "End-to-end project support: IEEE topic selection, charger circuit design, IoT-enabled monitoring, smart grid/renewable energy integration, IEEE-compliant technical documentation, and international journal publication mentorship."
  }
];

const EEEEvChargingInfrastructureProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 SEO Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>EV Charging Infrastructure Project Development Center</li>
              <li>AC DC EV Chargers Projects</li>
              <li>Fast EV Charging Research</li>
              <li>Wireless EV Charging Projects</li>
              <li>Smart Grid EV Charging</li>
              <li>Vehicle-to-Grid IEEE Projects</li>
              <li>IoT EV Charging Monitoring</li>
              <li>B.Tech EV Charging Projects</li>
              <li>M.Tech EV Charging Research</li>
              <li>Ph.D. EV Charging Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>
          
          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>EV Charging Infrastructure – Project Development Support</h1>
            
            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>The <strong>EV Charging Infrastructure Project Development Center</strong> at Narpavi Research Institute empowers scholars to design IEEE-aligned (2023–2025) charging solutions that include AC/DC fast chargers, wireless charging systems, V2G architectures, and IoT-monitoring dashboards for smart charging networks.</p>
              <p>Students integrate hardware, power electronics, and AI-based control strategies for future-ready EV charging stations and Industry 4.0 deployments.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of EV Charging Infrastructure</h2>
              <ul>
                <li>Provides efficient and safe charging for EV batteries.</li>
                <li>Enables fast charging, load balancing, and grid integration.</li>
                <li>Seamless integration with IoT and renewable sources.</li>
                <li>Essential for EV fleets, urban transport, and smart cities.</li>
                <li>IEEE 2023–2025 focus areas: wireless charging, V2G, AI load management.</li>
              </ul>
            </section>

            {/* B.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech EV Charging Projects</h2>
              <ul>
                <li>Design of basic AC/DC charging circuits</li>
                <li>Microcontroller-based voltage/current monitoring</li>
                <li>Small-scale charger prototype implementation</li>
              </ul>
              <p>Focus: fundamental EV charger design and lab implementation projects.</p>
            </section>

            {/* M.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech EV Charging Projects</h2>
              <ul>
                <li>Fast DC charger systems and inverter optimization</li>
                <li>IoT-enabled smart charging dashboards</li>
                <li>Wireless EV charging system prototypes</li>
              </ul>
              <p>Focus: industrial-scale and IoT-embedded EV charging aligned to IEEE 2023–2025 standards.</p>
            </section>

            {/* Ph.D Research */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D EV Charging Research</h2>
              <ul>
                <li>Smart grid-integrated EV charging systems</li>
                <li>Bidirectional Vehicle-to-Grid (V2G) energy management</li>
                <li>AI-enabled predictive energy optimization</li>
                <li>High-power wireless EV charging prototypes</li>
              </ul>
              <p>Focus: futuristic scalable EV charging systems, V2G integration, SCI-indexed research outcomes.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative EV Charging Technologies</h2>
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
                      <td>Level 1 AC Charging</td>
                      <td>Residential EVs</td>
                      <td>Simple, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Level 2 AC Charging</td>
                      <td>Public/Fleet EVs</td>
                      <td>Moderately fast charging</td>
                    </tr>
                    <tr>
                      <td>DC Fast Charging</td>
                      <td>EV Stations</td>
                      <td>Rapid charging, low downtime</td>
                    </tr>
                    <tr>
                      <td>Wireless Charging</td>
                      <td>Urban Parking, EV fleets</td>
                      <td>Contactless and convenient</td>
                    </tr>
                    <tr>
                      <td>Smart/Grid-Integrated Charging</td>
                      <td>Smart Factories, Cities</td>
                      <td>Load balancing, V2G ready</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p><strong>Narpavi Research Institute</strong> provides academic and research expertise in EV Charging Infrastructure projects, covering IEEE-topic aligned circuit development, power electronics hardware, IoT-smart grid integration, predictive load balancing, and IEEE/Springer/Elsevier publication mentoring.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item, i)=>(
                  <details key={i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* JSON-LD Schema for SEO */}
              <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context":"https://schema.org",
                     "@type":"FAQPage",
                     "mainEntity": faqs.map(f=>({
                       "@type":"Question",
                       "name":f.question,
                       "acceptedAnswer":{ "@type":"Answer", "text":f.answer }
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
              <li><a href="/power-electronics-project-development">Power Electronics Projects</a></li>
              <li><a href="/industrial-iiot-applications-project-development">Industrial IoT (IIoT) Applications</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">AI/ML Intelligent Control</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EEEEvChargingInfrastructureProjectDevelopmentCenter;
