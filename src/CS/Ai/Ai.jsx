import "./Ai.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the AI Project Development Center offer?",
    answer: "Narpavi Research Institute’s AI Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) AI projects, focusing on machine learning, deep learning, NLP, and computer vision for real-world applications."
  },
  {
    question: "What types of AI projects are supported?",
    answer: "We support B.Tech projects (image classification, chatbots), M.Tech projects (edge AI, healthcare analytics), and Ph.D. projects (explainable AI, generative models) across domains like healthcare, smart cities, and cybersecurity."
  },
  {
    question: "Which technologies are used in AI project development?",
    answer: "Our stack includes TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV, HuggingFace, YOLO, BERT, and cloud platforms like AWS, GCP, and Azure for scalable AI solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like neural networks, pattern analysis, and AI ethics, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, algorithm implementation, dataset preparation, result analysis, documentation, and IEEE/SCI journal publication support."
  }
];

const ArtificialIntelligenceProjectDevelopmentCenter = () => {
  return (
    <div className="ArtificialIntelligenceProjectDevelopmentCenter">
      <Sidebar />
      <div className="ArtificialIntelligenceProjectDevelopmentCenter-main">
        <div className="ArtificialIntelligenceProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ArtificialIntelligenceProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Artificial Intelligence – Project Development Center</li>
              <li>AI IEEE Projects 2023–2025</li>
              <li>B.Tech M.Tech Ph.D. AI Projects</li>
              <li>Deep Learning IEEE Project Titles</li>
              <li>Computer Vision Research Support</li>
              <li>NLP Project Development Center</li>
              <li>GAN Project Development</li>
              <li>AI-based Smart System Projects</li>
              <li>Transformer NLP IEEE Projects</li>
              <li>Narpavi Research Institute AI Services</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ArtificialIntelligenceProjectDevelopmentCenter-center">
            <h1>Artificial Intelligence – Project Development Center</h1>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Artificial Intelligence – Project Development Center, a global hub empowering B.Tech, M.Tech, and Ph.D. students to develop innovative, IEEE-aligned (2023–2025) AI projects using machine learning, deep learning, NLP, and computer vision.
              </p>
              <p>
                Through expert mentorship and advanced tools, we enable students to create scalable AI solutions for real-world applications in healthcare, education, smart cities, and cybersecurity.
              </p>
            </section>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-btech">
              <h2>B.Tech AI Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational AI applications like spam email classification or image recognition, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Python, Scikit-learn, or OpenCV</li>
                <li>Features like CNNs, NLP, or chatbots</li>
                <li>Dataset acquisition and confusion matrix analysis</li>
                <li>Documentation and presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, interpretable models, and academic-ready output.
              </p>
            </section>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-mtech">
              <h2>M.Tech AI Project Development</h2>
              <p>
                For postgraduate students, we develop advanced AI projects in hybrid neural architectures, edge AI, or healthcare analytics, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with TensorFlow, PyTorch, or YOLO</li>
                <li>Features like LSTM, GANs, or BERT models</li>
                <li>Benchmarking on Kaggle or cloud deployment</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on scalable, research-driven, and professional-grade AI solutions.
              </p>
            </section>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-phd">
              <h2>Ph.D. AI Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering AI research in explainable AI, generative models, multimodal learning, and ethical AI systems.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced algorithm design with transformers or GANs</li>
                <li>Integration with cloud platforms or edge devices</li>
                <li>Validation with real-world or synthetic datasets</li>
                <li>Publication assistance for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="ArtificialIntelligenceProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>AI Technology / Model</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Decision Trees / SVM</td><td>Fraud detection, Medical diagnosis</td><td>B.Tech</td><td>Scikit-learn, Python</td><td>Medium</td></tr>
                    <tr><td>CNN (Convolutional Neural Net)</td><td>Image recognition, Medical imaging</td><td>B.Tech/M.Tech</td><td>TensorFlow, Keras</td><td>High</td></tr>
                    <tr><td>RNN / LSTM</td><td>Text generation, Speech recognition</td><td>M.Tech</td><td>PyTorch, TensorFlow</td><td>High</td></tr>
                    <tr><td>YOLO / SSD</td><td>Object detection in video surveillance</td><td>M.Tech/Ph.D.</td><td>Darknet, OpenCV, Keras</td><td>Very High</td></tr>
                    <tr><td>GAN / Diffusion Models</td><td>Synthetic data, Face generation</td><td>Ph.D.</td><td>PyTorch, Stable Diffusion</td><td>Expert</td></tr>
                    <tr><td>Transformer / BERT / GPT</td><td>NLP, Translation, Chatbots</td><td>Ph.D.</td><td>HuggingFace, Transformers</td><td>Expert</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned AI Project Titles (2023–2025)</h2>
              <ul>
                <li>Deep Learning-Based Smart Agriculture System for Crop Disease Detection – 2023</li>
                <li>Transformer-Based Multilingual Text Summarization using BERT – 2024</li>
                <li>Generative Adversarial Network for Synthetic Medical Imaging – 2025</li>
                <li>YOLOv8-Based Real-Time Traffic Violation Detection Framework – 2023</li>
                <li>Ethical AI Framework for Emotion Recognition using Federated Learning – 2024</li>
                <li>Zero-Shot Learning Model for Rare Object Classification – 2025</li>
                <li>AI-Driven Energy Optimization System for Smart Homes – 2023</li>
                <li>Explainable AI for Intrusion Detection in 5G Networks – 2024</li>
                <li>Reinforcement Learning for Multi-Agent Robotic Control – 2025</li>
                <li>Deepfake Video Detection Using Multi-Modal Attention Networks – 2024</li>
              </ul>
            </section>

            <section className="ArtificialIntelligenceProjectDevelopmentCenter-excellence">
              <h2>Excellence in AI Project Development</h2>
              <p>
                Narpavi Research Institute’s Artificial Intelligence – Project Development Center integrates cutting-edge IEEE research with hands-on AI project development, fostering scalable and innovative solutions.
              </p>
              <p>
                Our global mentorship ensures students excel in creating impactful AI systems for academia and industry, from healthcare analytics to smart city applications.
              </p>
            </section>

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

          {/* Right: Subpage Links */}
          <div className="ArtificialIntelligenceProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
           <ul class="department-links">
  <li><a href="/department/static-web-application">Static Web Application</a></li>
  <li><a href="/department/dynamic-web-applications">Dynamic Web Applications</a></li>
  <li><a href="/department/mobile-app">Mobile App Development</a></li>
  <li><a href="/department/animations-project">Animations Project</a></li>
  <li><a href="/department/ai-project">AI Project</a></li>
  <li><a href="/department/data-science">Data Science</a></li>
  <li><a href="/department/big-data">Big Data</a></li>
  <li><a href="/department/blockchain">Blockchain</a></li>
  <li><a href="/department/devops">DevOps</a></li>
  <li><a href="/department/networking">Networking</a></li>
  <li><a href="/department/image-processing">Image Processing</a></li>
  <li><a href="/department/nlp">Natural Language Processing (NLP)</a></li>
  <li><a href="/department/cloud-computing">Cloud Computing</a></li>
  <li><a href="/department/cybersecurity">Cybersecurity</a></li>
</ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligenceProjectDevelopmentCenter;