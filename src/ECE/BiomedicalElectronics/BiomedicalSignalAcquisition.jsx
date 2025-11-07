import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What are the typical biomedical signals acquired and processed in projects?",
    answer: "Signals include ECG, EEG, EMG, PPG, GSR, SpO₂, and blood pressure, acquired via electrodes or optical sensors for medical analysis."
  },
  {
    question: "Which signal processing techniques are commonly applied?",
    answer: "Techniques include filtering, R-peak detection, FFT, wavelet transforms, machine learning models, normalization, feature extraction, and AI-driven predictive modeling."
  },
  {
    question: "What project platforms and tools are used for biomedical signal acquisition?",
    answer: "B.Tech utilizes Arduino, Raspberry Pi, MATLAB, Proteus, LabVIEW; M.Tech employs MATLAB Simulink, TensorFlow, Python, LabVIEW, COMSOL for advanced systems."
  },
  {
    question: "What advanced areas do Ph.D. projects focus on in biomedical signal processing?",
    answer: "Ph.D. research explores AI-driven signal processing, secure data transmission via blockchain, multimodal fusion for diagnosis, edge computing for real-time monitoring, and advanced noise cancellation."
  },
  {
    question: "How does Narpavi Research Institute support biomedical signal acquisition projects?",
    answer: "The institute offers end-to-end guidance including hardware integration, signal preprocessing, AI modeling, and IEEE-standard publication support."
  }
];

const BiomedicalSignalAcquisitionProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Biomedical Signal Processing Projects</li>
              <li>ECG EEG EMG Signal Projects</li>
              <li>AI in Biomedical Signal Processing</li>
              <li>IoT Biomedical Signal Acquisition</li>
              <li>Real-Time Healthcare Monitoring Projects</li>
              <li>Blockchain in Biomedical Data</li>
              <li>Wearable Biomedical Signal Devices</li>
              <li>IEEE Biomedical Signal Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Biomedical Signal Acquisition and Processing – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> empowers students and researchers to develop biomedical signal acquisition and processing projects aligned with IEEE standards (2023–2025), focusing on capturing and analyzing physiological signals for healthcare applications.
              </p>
              <p>
                Emphasis is placed on signal acquisition systems, noise reduction, real-time processing, and AI-driven analytics to enhance healthcare monitoring technologies.
              </p>
            </section>
            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Biomedical Signal Acquisition & Processing</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Signal Type</th>
                      <th>Acquisition Method</th>
                      <th>Processing Technique</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ECG (Electrocardiogram)</td>
                      <td>Electrodes on chest/limbs</td>
                      <td>Filtering, R-peak detection, HRV</td>
                      <td>Heart disease detection, arrhythmia</td>
                    </tr>
                    <tr>
                      <td>EEG (Electroencephalogram)</td>
                      <td>Scalp electrodes</td>
                      <td>FFT, wavelet transform, ML models</td>
                      <td>Brain activity, epilepsy monitoring</td>
                    </tr>
                    <tr>
                      <td>EMG (Electromyogram)</td>
                      <td>Surface/intramuscular electrodes</td>
                      <td>Signal rectification, envelope detection</td>
                      <td>Muscle activity, prosthetic control</td>
                    </tr>
                    <tr>
                      <td>PPG (Photoplethysmogram)</td>
                      <td>Optical sensors (IR, LED)</td>
                      <td>Filtering, peak detection, HR analysis</td>
                      <td>Wearable pulse oximeters, fitness</td>
                    </tr>
                    <tr>
                      <td>GSR (Galvanic Skin Response)</td>
                      <td>Electrodes on fingers</td>
                      <td>Normalization, feature extraction</td>
                      <td>Stress analysis, emotion recognition</td>
                    </tr>
                    <tr>
                      <td>SpO₂ & BP Signals</td>
                      <td>Optical & pressure sensors</td>
                      <td>AI-driven predictive modeling</td>
                      <td>Oxygen monitoring, hypertension care</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Basic signal acquisition and simple processing projects such as ECG noise removal, EEG stress detection, wearable PPG sensors, and EMG muscle monitoring using Arduino, Raspberry Pi, MATLAB, Proteus, and LabVIEW.
              </p>
            </section>
            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Advanced AI-integrated signal processing including seizure prediction, ECG classification, prosthetic control, and multisensor cardiovascular monitoring using MATLAB Simulink, TensorFlow, Python, and COMSOL.
              </p>
            </section>
            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Innovations in AI-driven signal processing, blockchain-secured data transmission, multimodal fusion, real-time edge computing, and advanced noise cancellation targeting top IEEE and Elsevier journals.
              </p>
            </section>
            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>ECG Signal Noise Cancellation using Adaptive Filters (2023)</li>
                <li>IoT-Enabled PPG Monitoring System for Remote Healthcare (2023)</li>
                <li>Deep Learning-Based EEG Epileptic Seizure Prediction (2024)</li>
                <li>EMG-Based Prosthetic Arm with Cloud Integration (2024)</li>
                <li>Secure Blockchain-Enabled ECG Data Transmission (2024)</li>
                <li>AI-Driven Stress Detection using Multimodal Biomedical Signals (2025)</li>
                <li>Edge Computing-Based Real-Time EEG Processing for Brain Monitoring (2025)</li>
                <li>Multisensor Fusion for Cardiovascular and Neurological Disease Diagnosis (2025)</li>
              </ul>
            </section>
            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides end-to-end project guidance in biomedical signal acquisition and processing, empowering healthcare innovation through expert hardware integration, AI modeling, and publication support.
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

export default BiomedicalSignalAcquisitionProject;
