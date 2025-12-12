import "./MobileAppDev.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Mobile App Development Center offer?",
    answer: "Narpavi Research Institute’s Mobile App Development Center supports B.Tech, M.Tech, and Ph.D. students in creating IEEE-aligned (2023–2025) mobile applications for Android, iOS, and hybrid platforms, focusing on scalability, real-time engagement, and research-driven solutions."
  },
  {
    question: "What types of mobile app projects are supported?",
    answer: "We support B.Tech projects (e-commerce, attendance apps), M.Tech projects (AI-driven, cloud-connected apps), and Ph.D. projects (blockchain, edge AI apps) for industries like healthcare, agriculture, and smart cities."
  },
  {
    question: "Which technologies are used in mobile app development?",
    answer: "Our stack includes Java/Kotlin, Swift, Flutter, React Native, Xamarin, Ionic, Firebase, TensorFlow Lite, and tools like Android Studio, Xcode, and MongoDB for robust mobile solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering topics like edge AI, secure mobile computing, and real-time systems, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, app development, testing, deployment, documentation, and assistance for IEEE/SCI journal submissions."
  }
];

const MobileAppDevelopmentCenter = () => {
  return (
    <div className="MobileAppDevelopmentCenter">
      <Sidebar />
      <div className="MobileAppDevelopmentCenter-main">
        <div className="MobileAppDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="MobileAppDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Mobile App Development – Project Development Center</li>
              <li>IEEE 2023–2025 Mobile App Project Topics</li>
              <li>Mobile Application Development for B.Tech M.Tech Ph.D.</li>
              <li>Flutter Firebase Mobile Apps</li>
              <li>AI-based Mobile Applications</li>
              <li>Android Development Projects</li>
              <li>Cross-Platform Mobile App Projects</li>
              <li>Real-Time Mobile Computing IEEE Projects</li>
              <li>Secure Mobile Apps with Blockchain</li>
              <li>Narpavi Research Institute Mobile App Project Services</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="MobileAppDevelopmentCenter-center">
            <h1>Mobile App Development – Project Development Center</h1>

            <section className="MobileAppDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> provides an elite platform for students and scholars to explore, develop, and showcase high-quality animation-based academic projects aligned with recent innovations published in IEEE Transactions (2023–2025). Our center offers technical and creative guidance in developing 2D/3D animations, motion graphics, interactive animations, AR/VR simulations, and AI-powered animation systems.
              </p>
              <p>
               With the rising integration of animation across education, entertainment, healthcare, defense, marketing, and simulations, the Animations – Project Development Center bridges the gap between technical innovation and visual storytelling. Every project we deliver is benchmarked to IEEE quality, ensuring global academic relevance and industry scalability.
              </p>
              <p>
                We empower B.Tech, M.Tech, and Ph.D. candidates with cutting-edge tools like Unity, Blender, Maya, Unreal Engine, Adobe After Effects, and OpenGL—providing complete project development, simulation, and IEEE-format documentation support.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-btech">
              <h2>B.Tech Mobile App Project Development</h2>
              <p>
                For undergraduate students, our center focuses on functionally rich, single-purpose mobile apps like attendance management or e-commerce prototypes, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Java/XML or Flutter/Dart</li>
                <li>Features like login, SQLite database, GPS, or camera access</li>
                <li>Play Store upload simulation and testing</li>
                <li>Documentation and presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, user-friendly design, and academic-ready output.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-mtech">
              <h2>M.Tech Mobile App Project Development</h2>
              <p>
                For postgraduate students, we develop advanced mobile apps with cloud connectivity, AI modules, and secure data handling, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>REST API integration and Firebase Authentication</li>
                <li>Development with Flutter, React Native, or Swift</li>
                <li>CI/CD deployment with analytics tracking</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on scalable, cloud-integrated, and professional-grade applications.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-phd">
              <h2>Ph.D. Mobile App Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering mobile app research in AI-powered healthcare, blockchain-based security, and real-time systems.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced ML model execution on edge devices</li>
                <li>Integration with blockchain or real-time APIs</li>
                <li>Validation with real-world or clinical datasets</li>
                <li>Publication assistance for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, scalability, and publication-ready outcomes.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="MobileAppDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Mobile Technology Stack</th>
                      <th>Industry Applications</th>
                      <th>Suitable For</th>
                      <th>Tools & Frameworks</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Android (Java/Kotlin)</td><td>Native Android apps, small businesses</td><td>B.Tech Projects</td><td>Android Studio, SQLite, Firebase</td><td>High</td></tr>
                    <tr><td>Flutter (Dart)</td><td>Cross-platform apps, startups</td><td>B.Tech & M.Tech</td><td>Flutter SDK, Firebase, GetX, Riverpod</td><td>Very High</td></tr>
                    <tr><td>React Native + Node.js</td><td>Business & e-commerce apps</td><td>M.Tech Projects</td><td>React Native CLI, Axios, MongoDB Atlas</td><td>High</td></tr>
                    <tr><td>Swift (iOS) + CoreML</td><td>iOS applications with ML integration</td><td>M.Tech & Ph.D.</td><td>Xcode, CoreML, ARKit</td><td>Excellent</td></tr>
                    <tr><td>Flutter + TensorFlow Lite</td><td>AI/ML-powered mobile applications</td><td>Ph.D. Research</td><td>Flutter, TensorFlow Lite, Firebase ML Kit</td><td>Excellent</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MobileAppDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Mobile App Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Powered Mobile Application for Diabetic Retinopathy Detection Using TensorFlow Lite – 2023</li>
                <li>Secure Mobile Payment System Using Blockchain and Biometric Verification – 2024</li>
                <li>Edge-Enabled Mobile App for Traffic Congestion Monitoring Using Federated Learning – 2025</li>
                <li>Mobile Health Monitoring Application Using Flutter and Firebase Realtime Database – 2023</li>
                <li>Smart Agriculture App with IoT Integration and MQTT Protocol – 2024</li>
                <li>Emotion Recognition Mobile App Using On-Device CNN – 2023</li>
                <li>Location-Based Emergency Alert System Using Google Maps API – 2025</li>
                <li>Student Performance Analytics Mobile App Using Firebase Cloud Functions – 2024</li>
                <li>Flutter-Based Cross-Platform App for Smart Waste Segregation Awareness – 2025</li>
                <li>Dynamic Task Manager Mobile App with Cloud Synchronization – 2023</li>
              </ul>
            </section>

            <section className="MobileAppDevelopmentCenter-excellence">
              <h2>Excellence in Mobile App Development</h2>
              <p>
                Narpavi Research Institute’s Mobile App Development – Project Development Center integrates cutting-edge IEEE research with hands-on project development, fostering scalable and innovative mobile solutions.
              </p>
              <p>
                Our global mentorship ensures students excel in creating impactful apps for academia and industry, from healthcare monitoring to smart city solutions.
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
          <div className="MobileAppDevelopmentCenter-right">
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

export default MobileAppDevelopmentCenter;