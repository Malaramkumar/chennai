import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Human-Machine Interface (HMI) Project Development Center offer?",
    answer: "We provide IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. in HMI-based automation, including real-time monitoring dashboards, PLC/SCADA integration, IoT-enabled HMI systems, AR/VR-based interfaces, and international publication assistance."
  },
  {
    question: "What types of HMI projects are supported?",
    answer: "B.Tech: PLC-based touchscreen HMIs, factory dashboards, sensor monitoring interfaces. M.Tech: IoT-enabled graphical HMIs, SCADA-integrated dashboards, predictive analytics visualization. Ph.D: AI/ML-driven HMI systems, AR/VR-enabled HMI, adaptive operator interfaces with SCI/Scopus indexed publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "WinCC, FactoryTalk, Ignition, Wonderware, LabVIEW, MATLAB/Simulink, Node-RED, MQTT/OPC-UA for IIoT connectivity, AR/VR HMI frameworks, cloud dashboards, TensorFlow/PyTorch for adaptive AI-integrated HMIs."
  },
  {
    question: "How are HMI projects aligned with IEEE standards?",
    answer: "All projects align with IEEE Transactions (2023–2025) on industrial automation, human-centered design, smart factory visualization, IIoT control, and AI-enhanced user interfaces."
  },
  {
    question: "What academic support is provided?",
    answer: "Services include IEEE topic selection, PLC-HMI/SCADA integration, IoT dashboard prototyping, predictive analytics visualization, IEEE-style documentation, and international publication guidance."
  }
];

const EEEHmiProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 SEO Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Human-Machine Interface Project Development Center</li>
              <li>HMI IEEE Projects</li>
              <li>Industrial Automation HMI Projects</li>
              <li>PLC HMI Projects</li>
              <li>SCADA HMI Projects</li>
              <li>IoT-Based HMI Projects</li>
              <li>Smart Factory HMI Research</li>
              <li>AR/VR HMI Projects</li>
              <li>B.Tech HMI Projects</li>
              <li>M.Tech HMI Projects</li>
              <li>Ph.D. HMI Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Human-Machine Interface (HMI) – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> offers a dedicated HMI Project Development Center for IEEE-aligned (2023–2025) projects focused on designing intuitive, interactive, and advanced operator interfaces for industrial automation.</p>
              <p>HMI bridges operators and automation systems (PLC, SCADA, IIoT), enabling real-time visualization, predictive decision-making, and efficiency in Industry 4.0 environments.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of HMI Systems</h2>
              <ul>
                <li>Provides real-time monitoring and visualization of processes.</li>
                <li>Improves safety, usability, and operational efficiency.</li>
                <li>Seamless integration with PLC, SCADA, and IIoT platforms.</li>
                <li>Enhances productivity in predictive, digitally-enabled factories.</li>
                <li>IEEE research trend (2023–2025): AI-driven HMI and AR/VR integration.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech HMI Projects</h2>
              <ul>
                <li>PLC touchscreen-based interfaces</li>
                <li>Sensor monitoring dashboards</li>
                <li>Basic IoT-based HMI for energy/logistics</li>
              </ul>
              <p>Focus: fundamental projects that combine PLC/SCADA with basic HMI integrations.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech HMI Projects</h2>
              <ul>
                <li>Graphical HMI with SCADA dashboards</li>
                <li>IoT-based predictive maintenance panels</li>
                <li>AI-driven visualization systems</li>
              </ul>
              <p>Focus: advanced IoT/IIoT HMI dashboards, predictive insight integration, real-time SCADA systems.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D HMI Projects</h2>
              <ul>
                <li>AI-powered adaptive operator interfaces</li>
                <li>AR/VR-based HMI for smart factories or robotics</li>
                <li>Next-gen HMI for Industry 4.0/cyber-physical systems</li>
                <li>IEEE/Scopus/SCI indexed publications</li>
              </ul>
              <p>Focus: pioneering research on operator-centric intelligent HMI frameworks, user adaptability, and industrial resilience.</p>
            </section>

            {/* 📊 Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – HMI Technologies vs Applications</h2>
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
                      <td>Traditional Panels</td>
                      <td>Small Industries</td>
                      <td>Simple local control</td>
                    </tr>
                    <tr>
                      <td>PLC-based HMI</td>
                      <td>Process Plants</td>
                      <td>Direct PLC integration</td>
                    </tr>
                    <tr>
                      <td>SCADA HMIs</td>
                      <td>Power, Water Treatment</td>
                      <td>Centralized monitoring</td>
                    </tr>
                    <tr>
                      <td>Touch/Graphical HMIs</td>
                      <td>Smart Factories</td>
                      <td>Interactive and user-friendly</td>
                    </tr>
                    <tr>
                      <td>Web/Cloud HMI</td>
                      <td>IIoT, Industry 4.0</td>
                      <td>Remote monitoring and analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute empowers students to design and deploy world-class HMI projects. We provide support in PLC-HMI/SCADA integration, IoT dashboards, AR/VR-based systems, and global IEEE publication training — equipping scholars to serve Industry 4.0-ready smart enterprises.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f,idx)=>(
                  <details key={idx}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>

              {/* JSON-LD Schema */}
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

          {/* 🔗 Right Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/plc-scada-systems-project-development">PLC & SCADA Systems</a></li>
              <li><a href="/industrial-iiot-applications-project-development">Industrial IoT (IIoT) Applications</a></li>
              <li><a href="/process-control-in-industries-project-development">Process Control in Industries</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">Intelligent Control using AI/ML</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default EEEHmiProjectDevelopmentCenter;
