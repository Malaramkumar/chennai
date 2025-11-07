import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What are IoT-enabled healthcare devices?",
    answer: "IoT-enabled healthcare devices connect medical sensors and devices to cloud platforms, enabling remote patient monitoring, smart diagnostics, and proactive health management."
  },
  {
    question: "What projects do B.Tech students typically work on in IoT healthcare devices?",
    answer: "Projects include smart heart rate monitors, IoT-enabled temperature sensors, and wireless patient alert systems using microcontrollers like Arduino and ESP8266/ESP32 with cloud platforms."
  },
  {
    question: "What advanced topics do M.Tech projects cover?",
    answer: "M.Tech projects focus on secure, scalable, and AI-assisted IoT healthcare systems, cloud dashboards, wearable ECG monitoring, blockchain-enabled secure data management, and predictive analytics."
  },
  {
    question: "What research directions are emphasized at the Ph.D. level?",
    answer: "Ph.D. research includes federated IoT healthcare architectures, AI-driven predictive diagnostics, cyber-physical healthcare systems, and edge computing for real-time monitoring."
  },
  {
    question: "Which technologies support IoT healthcare projects?",
    answer: "Technologies include Arduino, ESP32, cloud platforms (AWS IoT, Azure IoT, Firebase), AI frameworks (TensorFlow, Python), blockchain platforms (Hyperledger, Ethereum), and edge computing tools."
  }
];

const IoTEnabledHealthcareDevicesProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>IoT-enabled Healthcare Devices</li>
              <li>IoT in Medical Devices Projects</li>
              <li>IEEE IoT Healthcare Projects 2023–2025</li>
              <li>Wearable IoT Health Monitoring Systems</li>
              <li>Cloud IoT Healthcare Solutions</li>
              <li>Secure IoT Healthcare with Blockchain</li>
              <li>Edge Computing in IoT Medical Devices</li>
              <li>Ph.D. research in IoT Healthcare</li>
              <li>AI-IoT for Smart Healthcare</li>
              <li>Narpavi Research Institute IoT Biomedical Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>IoT-enabled Healthcare Devices – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> provides comprehensive academic and research support for IoT-enabled healthcare devices projects aligned with IEEE standards (2023–2025), empowering B.Tech, M.Tech, and Ph.D. scholars.
              </p>
              <p>
                Our focus includes wearable sensors, biomedical IoT networks, cloud data analytics, and AI integration, facilitating personalized and accessible healthcare solutions.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wearable IoT Sensors</td>
                      <td>Vital signs monitoring, biomedical sensing</td>
                      <td>Smartwatches, fitness trackers</td>
                      <td>Arduino, ESP32</td>
                    </tr>
                    <tr>
                      <td>IoT Cloud Platforms</td>
                      <td>Data storage, visualization, remote access</td>
                      <td>Telemedicine, remote diagnostics</td>
                      <td>AWS IoT, Azure IoT, Firebase</td>
                    </tr>
                    <tr>
                      <td>AI in IoT Healthcare</td>
                      <td>Predictive health monitoring, anomaly detection</td>
                      <td>Smart diagnostics, chronic disease alerts</td>
                      <td>TensorFlow, Python</td>
                    </tr>
                    <tr>
                      <td>Blockchain in IoT Healthcare</td>
                      <td>Secure data sharing & privacy</td>
                      <td>Hospital record systems</td>
                      <td>Hyperledger, Ethereum</td>
                    </tr>
                    <tr>
                      <td>Edge Computing for IoT Devices</td>
                      <td>Low-latency processing near devices</td>
                      <td>Emergency monitoring systems</td>
                      <td>Raspberry Pi, EdgeX Foundry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in IoT-enabled Healthcare Devices</h2>
              <p>
                Projects focus on building low-cost healthcare IoT prototypes such as heart rate monitors, temperature sensors, and wireless alert devices using Arduino and ESP microcontrollers with cloud platforms like ThingSpeak or Firebase.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in IoT-enabled Healthcare Devices</h2>
              <p>
                Focus on secure, scalable, and AI-assisted healthcare IoT systems, including cloud dashboards, wearable ECG devices, and blockchain-based secure data management with real-time predictive analytics.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in IoT-enabled Healthcare Devices</h2>
              <p>
                Research areas include federated IoT healthcare architectures, AI-driven diagnostics, cyber-physical healthcare systems, and edge computing for real-time health monitoring aligned with IEEE research standards.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Wearable Heart Rate and ECG Monitoring Device (2023)</li>
                <li>Cloud-Based Patient Health Monitoring with IoT and AI Integration (2023)</li>
                <li>Blockchain-Assisted Secure IoT Healthcare Data Transmission (2024)</li>
                <li>Edge Computing Framework for Real-Time IoT-Based Healthcare Systems (2024)</li>
                <li>AI-Powered Predictive Healthcare Using IoT Wearables (2025)</li>
                <li>Federated IoT Architecture for Privacy-Preserved Smart Healthcare (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a trusted leader in biomedical electronics and IoT healthcare research support, empowering students and scholars through innovative projects and IEEE publication guidance.
              </p>
            </section>

            {/* FAQs */}
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

          {/* Right: Related Services */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
                          <ul>
                  <li><Link to="/1-1">AI Biomedical Diagnostics Project</Link></li>
                  <li><Link to="/1-2">Biomedical Signal Acquisition Project</Link></li>
                  <li><Link to="/1-3">Brain Computer Interface Project</Link></li>
                  <li><Link to="/1-4">IoT Enabled Healthcare Devices Project</Link></li>
                  <li><Link to="/1-5">Implantable Medical Electronics Project</Link></li>
                  <li><Link to="/1-6">Wearable Biomedical Devices Project</Link></li>
                </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTEnabledHealthcareDevicesProject;
