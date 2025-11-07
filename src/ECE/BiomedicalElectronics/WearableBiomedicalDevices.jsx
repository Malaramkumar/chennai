import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What are the key applications of wearable biomedical devices?",
    answer: "Applications include fitness and wellness tracking, cardiac monitoring, neurological monitoring, diabetes management, rehabilitation, and sleep monitoring."
  },
  {
    question: "What devices and parameters are commonly involved in wearable healthcare projects?",
    answer: "Examples are smartwatches and fitness bands tracking heart rate and SpO₂, ECG patches for cardiac signals, EEG headbands for brain activity, continuous glucose monitors, smart exoskeletons, and sleep trackers."
  },
  {
    question: "Which technologies are used for wearable biomedical device projects?",
    answer: "B.Tech projects use Arduino, Raspberry Pi, ESP32, Bluetooth Low Energy (BLE), and IoT dashboards; M.Tech projects include MATLAB, TensorFlow, LabVIEW, Android SDK, and KiCad."
  },
  {
    question: "What advanced research areas are explored for Ph.D. wearable biomedical projects?",
    answer: "Research includes flexible/stretchable electronics, AI-driven multi-sensor fusion, brain-computer interfaces, energy harvesting, and blockchain-enabled secure health data management."
  },
  {
    question: "How does Narpavi Research Institute support wearable biomedical device projects?",
    answer: "We offer comprehensive development support—from hardware design and signal processing to AI analytics and IEEE publication guidance—bridging engineering and healthcare disciplines."
  }
];

const WearableBiomedicalDevicesProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Wearable Biomedical Device Projects</li>
              <li>Smart Health Monitoring IEEE Projects</li>
              <li>IoT Wearable Devices for Healthcare</li>
              <li>AI-Driven Wearable Health Systems</li>
              <li>Smartwatch ECG IEEE Projects</li>
              <li>Flexible Biomedical Electronics</li>
              <li>Brain-Computer Interface Wearables</li>
              <li>Secure Wearable IoT Devices</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Wearable Biomedical Devices – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> fosters innovation in wearable biomedical devices focused on non-invasive monitoring, continuous diagnostics, and personalized healthcare aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Our projects span wearable biosensors, physiological monitoring, smart textiles, and AI-driven wearable analytics to improve healthcare accessibility and outcomes.
              </p>
            </section>
            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Applications of Wearable Biomedical Devices</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>Device Example</th>
                      <th>Measured Parameters</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fitness &amp; Wellness</td>
                      <td>Smartwatches, Fitness Bands</td>
                      <td>Heart rate, steps, calories, SpO₂</td>
                      <td>Lifestyle monitoring</td>
                    </tr>
                    <tr>
                      <td>Cardiac Monitoring</td>
                      <td>ECG Patch, Smart ECG T-shirt</td>
                      <td>ECG signals, arrhythmia detection</td>
                      <td>Early heart disease detection</td>
                    </tr>
                    <tr>
                      <td>Neurological Monitoring</td>
                      <td>EEG Headbands</td>
                      <td>Brain wave activity</td>
                      <td>Stress, epilepsy, cognitive studies</td>
                    </tr>
                    <tr>
                      <td>Diabetes Management</td>
                      <td>Continuous Glucose Monitor (CGM)</td>
                      <td>Glucose levels</td>
                      <td>Real-time glucose tracking</td>
                    </tr>
                    <tr>
                      <td>Rehabilitation</td>
                      <td>Smart Exoskeletons</td>
                      <td>Motion, muscle activity (EMG)</td>
                      <td>Mobility restoration</td>
                    </tr>
                    <tr>
                      <td>Sleep Monitoring</td>
                      <td>Smart Rings, Headbands</td>
                      <td>Sleep cycles, oxygen levels</td>
                      <td>Sleep quality improvement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Projects focus on basic wearable health monitoring systems using Arduino, Raspberry Pi, ESP32, BLE, and IoT dashboards. Examples include ECG and heart rate monitors, wearable SpO₂ trackers, smart wristbands, and fall detection devices.
              </p>
            </section>
            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Emphasis on advanced biomedical signal acquisition and AI-enhanced wearable analytics using MATLAB, TensorFlow, LabVIEW, Android SDK, and KiCad. Sample projects include smart ECG monitors, EEG-based stress devices, AI-powered smartwatches, and smart textile wearables.
              </p>
            </section>
            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Cutting-edge research involves flexible electronics, AI multi-sensor fusion, brain-computer interfaces, self-powered medical devices, and blockchain-secured wearable data management targeting high-level IEEE publications.
              </p>
            </section>
            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Smart Wristband for Real-Time Heart and SpO₂ Monitoring (2023)</li>
                <li>EEG-Based Wearable Device for Stress and Cognitive Monitoring (2023)</li>
                <li>Cloud-Integrated Smart ECG Monitoring Patch (2024)</li>
                <li>AI-Driven Smartwatch for Early Detection of Arrhythmia (2024)</li>
                <li>Flexible Textile-Based Wearable Electronics for Healthcare (2024)</li>
                <li>Self-Powered Wearable Medical Sensor with Energy Harvesting (2025)</li>
                <li>Blockchain-Enabled Secure Data Transmission in Wearable Devices (2025)</li>
                <li>BCI-Integrated Wearable Device for Assistive Healthcare (2025)</li>
              </ul>
            </section>
            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides comprehensive development and publication support in wearable biomedical devices, bridging healthcare and engineering to deliver innovative solutions for students, researchers, and professionals.
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

export default WearableBiomedicalDevicesProject;
