import "../EEEProjectDevelopmentCenter.scss";  
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";  

const faqs = [
  {
    question: "What services does the Predictive Maintenance Systems Project Development Center offer?",
    answer: "We provide B.Tech, M.Tech, and Ph.D. students IEEE-aligned (2023–2025) support for predictive maintenance projects integrating IIoT sensors, AI/ML models, condition-based monitoring, and cloud-enabled industrial analytics."
  },
  {
    question: "What types of projects are supported?",
    answer: "B.Tech projects include vibration monitoring, motor fault detection, Arduino/PLC-based alert systems. M.Tech projects cover AI/ML predictive models, IoT-enabled dashboards, and real-time condition-based maintenance. Ph.D. research focuses on deep learning-driven predictive frameworks, digital twins, smart asset management, and IEEE/SCI publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "Arduino, Raspberry Pi, PLCs, MATLAB/Simulink, LabVIEW, IoT protocols (MQTT, OPC-UA), cloud services (AWS IoT, Azure, ThingSpeak), AI frameworks (TensorFlow, PyTorch), and predictive analytics systems (Python SciKit-Learn)."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Our projects follow IEEE Transactions (2023–2025) on predictive analytics, condition-based monitoring, deep learning-driven maintenance, and Industry 4.0 predictive maintenance strategies."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide full-cycle support from IEEE topic selection, AI/ML algorithm development, IoT hardware integration, performance evaluation, IEEE-style report formatting, to Scopus/SCI-indexed publication guidance."
  }
];

const EEEPredictiveMaintenanceProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🚀 Left Column – Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Predictive Maintenance Systems Project Development Center</li>
              <li>Industrial Maintenance AI/ML Projects</li>
              <li>IoT-Based Predictive Maintenance</li>
              <li>Smart Factory Maintenance Projects</li>
              <li>Condition-Based Maintenance Projects</li>
              <li>Predictive Analytics IEEE Projects</li>
              <li>Motor Health Monitoring Projects</li>
              <li>B.Tech Predictive Maintenance Projects</li>
              <li>M.Tech Predictive Maintenance Projects</li>
              <li>Ph.D. Predictive Maintenance Research</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center – Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Predictive Maintenance Systems – Project Development Support</h1>
            
            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> introduces the Predictive Maintenance Systems Project Development Center, offering IEEE-aligned (2023–2025) research on data-driven industrial maintenance strategies. Students develop intelligent, IIoT-enabled, and AI-driven predictive systems to reduce downtime and optimize asset life.</p>
              <p>Predictive maintenance leverages sensors, analytics, and machine learning to forecast failures, providing smarter, safer, and cost-efficient operations across industries.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Predictive Maintenance Systems</h2>
              <ul>
                <li>Reduces downtime and maintenance costs.</li>
                <li>Improves equipment reliability and operational life.</li>
                <li>Integrates IIoT, cloud platforms, and ML algorithms.</li>
                <li>Applicable to aerospace, automotive, energy, and manufacturing.</li>
                <li>IEEE focus (2023–2025) on predictive analytics & Industry 4.0 maintenance.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Predictive Maintenance Projects</h2>
              <ul>
                <li>Motor vibration and temperature monitoring</li>
                <li>Arduino/PLC-based real-time maintenance alerts</li>
                <li>IoT-based dashboards for equipment health</li>
                <li>IEEE-guided reporting and analysis</li>
              </ul>
              <p>Focus: foundations of IoT + predictive maintenance simulation and hardware prototyping.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Predictive Maintenance Projects</h2>
              <ul>
                <li>ML-driven predictive health analytics</li>
                <li>IoT-enabled real-time condition monitoring dashboards</li>
                <li>Edge and cloud integration for predictive maintenance</li>
                <li>Smart factory predictive frameworks aligned with IEEE trends</li>
              </ul>
              <p>Focus: advanced AI/ML models, cloud-edge integration, real-time predictive analysis.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Predictive Maintenance Projects</h2>
              <ul>
                <li>Deep learning predictive models for industrial assets</li>
                <li>Digital twin integration for smart factories</li>
                <li>Blockchain-secured predictive maintenance frameworks</li>
                <li>IEEE/SCI journal and patent contributions</li>
              </ul>
              <p>Focus: pioneering predictive maintenance models for Industry 4.0-scale industrial systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Maintenance Strategies – Technologies & Benefits</h2>
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
                      <td>Reactive Maintenance</td>
                      <td>Manufacturing, Utilities</td>
                      <td>Repair after failure, costly downtime</td>
                    </tr>
                    <tr>
                      <td>Preventive Maintenance</td>
                      <td>Process Industries</td>
                      <td>Scheduled checks, moderate downtime</td>
                    </tr>
                    <tr>
                      <td>Predictive Maintenance</td>
                      <td>Automotive, Aviation, Energy</td>
                      <td>Failure prediction, cost-saving, higher uptime</td>
                    </tr>
                    <tr>
                      <td>Condition-Based Maintenance</td>
                      <td>Factories, Power Plants</td>
                      <td>Real-time sensor monitoring</td>
                    </tr>
                    <tr>
                      <td>Cloud-Enabled Predictive Maintenance</td>
                      <td>Smart Factories, IIoT</td>
                      <td>Remote monitoring, analytics, optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>  

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides end-to-end IEEE-compliant project development in predictive maintenance systems. From IoT sensor integration, AI-driven algorithms, digital twin prototyping, to journal publication, we ensure global-quality academic + industrial excellence.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,idx)=>(
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* JSON-LD for SEO */}
              <script 
                type="application/ld+json"
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

          {/* 🔗 Right Column Links */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/industrial-iiot-applications-project-development">Industrial IoT (IIoT) Applications</a></li>
              <li><a href="/process-control-in-industries-project-development">Process Control in Industries</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">Intelligent Control using AI/ML</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
              <li><a href="/plc-scada-systems-project-development">PLC & SCADA Systems</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
};

export default EEEPredictiveMaintenanceProjectDevelopmentCenter;
