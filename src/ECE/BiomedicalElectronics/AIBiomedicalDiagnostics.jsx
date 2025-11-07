import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is the role of AI in biomedical diagnostics?",
    answer: "AI enables faster, accurate, and automated disease detection by processing biomedical data such as medical images, biosignals, and patient records to support clinical decision-making."
  },
  {
    question: "What topics do B.Tech projects in AI biomedical diagnostics cover?",
    answer: "Fundamental AI applications like tumor detection using image processing, anomaly classification in ECG/EEG, and diabetes prediction using machine learning, implemented via MATLAB and Python."
  },
  {
    question: "What advanced research areas do M.Tech projects focus on?",
    answer: "Advanced algorithm design, deep learning for cancer detection, MRI/CT image segmentation, and multimodal biomedical data fusion, with emphasis on model optimization and clinical applicability."
  },
  {
    question: "What are the Ph.D. research directions in AI biomedical diagnostics?",
    answer: "Innovations include novel AI architectures, explainable AI for transparent diagnostics, federated learning, multi-omics analysis, and predictive diagnostics integrated with IoT-enabled healthcare systems."
  },
  {
    question: "Which tools and platforms support AI biomedical diagnostic projects?",
    answer: "Tools include TensorFlow, PyTorch, MATLAB, Python, R, Arduino, Raspberry Pi, and explainable AI frameworks like LIME and SHAP."
  }
];

const AIBiomedicalDiagnosticsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>AI in Biomedical Diagnostics</li>
              <li>Artificial Intelligence in Healthcare Projects</li>
              <li>Deep Learning in Medical Imaging</li>
              <li>IEEE AI Biomedical Projects 2023–2025</li>
              <li>Machine Learning for Disease Prediction</li>
              <li>Ph.D. research in Biomedical AI</li>
              <li>Explainable AI in Healthcare</li>
              <li>Narpavi Research Institute biomedical AI support</li>
              <li>AI-based wearable diagnostic devices</li>
              <li>AI-enabled personalized medicine</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>AI in Biomedical Diagnostics – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> leads in AI-powered biomedical diagnostics research and project development aligned with IEEE standards (2023–2025), providing end-to-end support for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                Our projects incorporate machine learning, deep learning, and signal processing applied to medical imaging, pathology, genomics, and wearable healthcare, empowering real-time disease prediction and diagnostic imaging interpretation.
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
                      <td>Medical Image AI</td>
                      <td>Deep learning for MRI/CT/X-ray analysis</td>
                      <td>Radiology, cancer diagnostics</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Signal-Based AI</td>
                      <td>ECG, EEG, EMG anomaly detection</td>
                      <td>Cardiology, neurology</td>
                      <td>MATLAB, Python</td>
                    </tr>
                    <tr>
                      <td>Genomic AI</td>
                      <td>Multi-omics integration, AI-driven gene prediction</td>
                      <td>Precision medicine</td>
                      <td>R, Scikit-learn</td>
                    </tr>
                    <tr>
                      <td>AI in Wearables</td>
                      <td>Real-time health monitoring & anomaly detection</td>
                      <td>IoT-enabled healthcare devices</td>
                      <td>Arduino, Raspberry Pi</td>
                    </tr>
                    <tr>
                      <td>Explainable AI in Diagnostics</td>
                      <td>Transparent and ethical AI models</td>
                      <td>Clinical decision support</td>
                      <td>LIME, SHAP, XAI tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in AI Biomedical Diagnostics</h2>
              <p>
                Focus on fundamental AI applications such as tumor detection, ECG/EEG anomaly classification, and diabetes prediction using machine learning with MATLAB and Python.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in AI Biomedical Diagnostics</h2>
              <p>
                Advanced design in AI algorithms, deep learning-based cancer detection, medical image segmentation, and multimodal biomedical data fusion ensuring accuracy and clinical relevance.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in AI Biomedical Diagnostics</h2>
              <p>
                Focus on novel AI architectures, explainable AI, federated learning, multi-omics analysis, and predictive diagnostics integrated with IoT-enabled healthcare aligned with IEEE publication standards.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Enabled Tumor Detection from MRI Scans Using Deep Learning (2023)</li>
                <li>Machine Learning-Based ECG Anomaly Classification for Cardiac Diagnostics (2023)</li>
                <li>Explainable AI Framework for Clinical Decision Support Systems (2024)</li>
                <li>IoT-Integrated AI Diagnostics for Real-Time Patient Monitoring (2024)</li>
                <li>Federated Learning for Privacy-Preserved Biomedical Diagnostics (2025)</li>
                <li>Multimodal AI-Driven Diagnostic System for Personalized Medicine (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in biomedical AI research support, guiding students and researchers through innovative AI diagnostics projects designed for prime IEEE, Scopus, and SCI journal publications.
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

export default AIBiomedicalDiagnosticsProject;
