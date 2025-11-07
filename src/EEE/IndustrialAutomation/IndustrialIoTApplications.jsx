import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Industrial IoT (IIoT) Applications Project Development Center offer?",
    answer: "We provide B.Tech, M.Tech, and Ph.D. scholars IEEE-aligned (2023–2025) support in IIoT system design, sensor integration, cloud/edge computing, predictive maintenance, and secure Industry 4.0 automation. Services include hardware prototyping, simulations, Industry 4.0 protocol integration, and IEEE/SCI journal publication."
  },
  {
    question: "What types of IIoT projects are supported?",
    answer: "B.Tech: basic IIoT dashboards, sensor-to-cloud monitoring, IoT-enabled energy meters. M.Tech: AI/ML-driven predictive maintenance, edge computing, smart factory automation. Ph.D: blockchain-secure IIoT architectures, autonomous IIoT operation frameworks, industrial-scale research with IEEE/SCI publication."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "IoT modules (ESP32, Raspberry Pi, ARM Cortex), MQTT/CoAP/OPC-UA protocols, PLC-SCADA integration, cloud platforms (AWS IoT, Azure IoT Hub, ThingSpeak), Edge platforms (NVIDIA Jetson, Intel Edge), MATLAB/Simulink, and AI libraries like TensorFlow and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Our projects follow IEEE Transactions (2023–2025) on IIoT security, edge/cloud computing, digital twins, AI-driven IIoT, and Industry 4.0 frameworks for automation, predictive analytics, and process optimization."
  },
  {
    question: "What academic support is provided?",
    answer: "We offer complete IEEE, Scopus, and SCI publishing support, research topic selection, hardware/software design, IIoT protocol integration, and global mentoring to ensure impactful academic and industrial outcomes."
  }
];

const EEEIndustrialIiotApplicationsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Column */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Industrial IoT Applications Project Development Center</li>
              <li>IIoT IEEE Projects</li>
              <li>Smart Factory IIoT Projects</li>
              <li>IoT in Industrial Automation</li>
              <li>Cloud IIoT Projects</li>
              <li>Edge Computing IIoT Projects</li>
              <li>AI in IIoT Research</li>
              <li>Blockchain for IIoT</li>
              <li>IIoT B.Tech Projects</li>
              <li>IIoT M.Tech Projects</li>
              <li>Ph.D. IIoT Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center Column */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Industrial IoT (IIoT) Applications – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> leads the Industrial IoT (IIoT) Applications Project Development Center,
                enabling students and researchers to design IEEE-aligned (2023–2025) IIoT projects integrating 
                smart sensors, cloud-edge infrastructures, and data-driven predictive systems.
              </p>
              <p>
                IIoT empowers industries with real-time monitoring, AI-enhanced predictive maintenance, and secure, 
                scalable automation for Industry 4.0 factories and smart enterprises.
              </p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of IIoT Applications</h2>
              <ul>
                <li>Real-time data monitoring & analytics in industries.</li>
                <li>Enables predictive maintenance & failure prevention.</li>
                <li>Integration with edge & cloud computing platforms.</li>
                <li>Remote access and control of machines & processes.</li>
                <li>Boosts productivity while ensuring safety & cost-efficiency.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech IIoT Projects</h2>
              <ul>
                <li>Sensor-to-cloud data integration (temperature, vibration, etc.)</li>
                <li>IoT-based smart dashboards for factory monitoring</li>
                <li>Energy monitoring & efficiency analysis using IIoT devices</li>
                <li>IEEE-style technical documentation</li>
              </ul>
              <p>Focus: foundations of IIoT hardware-software design and data visualization.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IIoT Projects</h2>
              <ul>
                <li>AI/ML-based predictive maintenance for machines</li>
                <li>Edge Computing with IIoT for real-time decision making</li>
                <li>SCADA/PLC integration with IIoT cloud platforms</li>
                <li>IEEE-compliant reports aligned with Industry 4.0</li>
              </ul>
              <p>Focus: advanced integration of IIoT with AI, edge computing, and secure industrial prototyping.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D IIoT Projects</h2>
              <ul>
                <li>Secure architectures in IIoT using blockchain</li>
                <li>Autonomous decision-making IIoT-driven industries</li>
                <li>Large-scale IIoT deployment frameworks</li>
                <li>Research patents and IEEE/SCI/Scopus publications</li>
              </ul>
              <p>Focus: pioneering autonomous, secure, and blockchain-enabled IIoT structures for Industry 4.0.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technologies – Traditional vs IIoT Systems</h2>
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
                      <td>Traditional SCADA</td>
                      <td>Process Industries</td>
                      <td>Centralized monitoring</td>
                    </tr>
                    <tr>
                      <td>IIoT-Based Monitoring</td>
                      <td>Manufacturing & Logistics</td>
                      <td>Real-time distributed data</td>
                    </tr>
                    <tr>
                      <td>Edge + IIoT</td>
                      <td>Energy & Power Plants</td>
                      <td>Low-latency, faster decisions</td>
                    </tr>
                    <tr>
                      <td>Cloud IIoT Platforms</td>
                      <td>Smart Factories, IT systems</td>
                      <td>Scalable, analytics-enabled</td>
                    </tr>
                    <tr>
                      <td>AI-Driven IIoT</td>
                      <td>Robotics, Automotive</td>
                      <td>Predictive, self-optimizing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers world-class IEEE-standard project support in Industrial IoT Applications. 
                Our guidance covers hardware design, cloud & edge integration, AI/ML algorithm development, IIoT cybersecurity,
                and global research publication assistance.
              </p>
            </section>

            {/* ❓FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx)=>(
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* SEO FAQ JSON-LD */}
              <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity":faqs.map(f=>({
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
              <li><a href="/plc-scada-systems-project-development">PLC & SCADA Systems</a></li>
              <li><a href="/distributed-control-systems-project-development">Distributed Control Systems (DCS)</a></li>
              <li><a href="/process-control-in-industries-project-development">Process Control in Industries</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">Intelligent Control using AI/ML</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EEEIndustrialIiotApplicationsProjectDevelopmentCenter;
