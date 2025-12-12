import "./Animation.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Animations Project Development Center offer?",
    answer: "Narpavi Research Institute’s Animations Project Development Center supports B.Tech, M.Tech, and Ph.D. students in creating IEEE-aligned (2023–2025) animation projects, including 2D/3D animations, AR/VR simulations, and AI-powered animation systems."
  },
  {
    question: "What types of animation projects are supported?",
    answer: "We support B.Tech projects (2D storytelling, educational animations), M.Tech projects (real-time simulations, AR/VR apps), and Ph.D. projects (AI-driven avatars, biomechanical modeling) for education, healthcare, and simulations."
  },
  {
    question: "Which technologies are used in animation project development?",
    answer: "Our technology stack includes Unity, Blender, Maya, Unreal Engine, Adobe After Effects, OpenGL, and AI tools like TensorFlow for creating scalable and innovative animations."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering topics like real-time rendering, AI animation, and XR simulations, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, animation development, rendering, documentation, and publication assistance for IEEE/SCI journals."
  }
];

const AnimationsProjectDevelopmentCenter = () => {
  return (
    <div className="AnimationsProjectDevelopmentCenter">
      <Sidebar />
      <div className="AnimationsProjectDevelopmentCenter-main">
        <div className="AnimationsProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="AnimationsProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Animations – Project Development Center</li>
              <li>IEEE Animation Project Topics 2023–2025</li>
              <li>Unity Animation Projects for B.Tech M.Tech Ph.D.</li>
              <li>Blender 3D Animation Projects</li>
              <li>OpenGL Shader Projects</li>
              <li>AI-based Animation Generation</li>
              <li>Real-Time 3D Animation IEEE Projects</li>
              <li>AR/VR Animation Project Development</li>
              <li>Narpavi Research Institute Animation Services</li>
              <li>IEEE Academic Animation Development Center</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="AnimationsProjectDevelopmentCenter-center">
            <h1>Animations – Project Development Center</h1>

            <section className="AnimationsProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> - Project Development Center at Narpavi Research Institute provides an elite platform for students and scholars to explore, develop, and showcase high-quality animation-based academic projects aligned with recent innovations published in IEEE Transactions (2023–2025). Our center offers technical and creative guidance in developing 2D/3D animations, motion graphics, interactive animations, AR/VR simulations, and AI-powered animation systems.
              </p>
              <p>
               With the rising integration of animation across education, entertainment, healthcare, defense, marketing, and simulations, the Animations – Project Development Center bridges the gap between technical innovation and visual storytelling. Every project we deliver is benchmarked to IEEE quality, ensuring global academic relevance and industry scalability.
              </p>
              <p>
                We empower B.Tech, M.Tech, and Ph.D. candidates with cutting-edge tools like Unity, Blender, Maya, Unreal Engine, Adobe After Effects, and OpenGL—providing complete project development, simulation, and IEEE-format documentation support.
              </p>
            </section>

            <section className="AnimationsProjectDevelopmentCenter-btech">
              <h2>B.Tech Animation Project Development</h2>
              <p>
                For undergraduate students, our center focuses on visual simulations, 2D/3D animations, or educational explainer videos aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Blender, Adobe Animate, or OpenGL</li>
                <li>Features like 2D storytelling or interactive modules</li>
                <li>Storyboard creation and audio syncing</li>
                <li>Documentation and presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, creative design, and academic-ready output.
              </p>
            </section>

            <section className="AnimationsProjectDevelopmentCenter-mtech">
              <h2>M.Tech Animation Project Development</h2>
              <p>
                For postgraduate students, we develop advanced animation projects like real-time simulations, AR animations, or game-based learning modules, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with Unity 3D, Unreal Engine, or OpenGL</li>
                <li>Features like cloth simulation or inverse kinematics</li>
                <li>GPU-based rendering and testing</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on scalable, real-time, and professional-grade animations.
              </p>
            </section>

            <section className="AnimationsProjectDevelopmentCenter-phd">
              <h2>Ph.D. Animation Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering animation research in AI-driven avatars, biomechanical modeling, and XR simulations.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced AI or physics-based animation design</li>
                <li>Integration with AR/VR or deep learning models</li>
                <li>Validation with real-world or simulated datasets</li>
                <li>Publication assistance for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research-driven design, and publication-ready outcomes.
              </p>
            </section>

            <section className="AnimationsProjectDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="AnimationsProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Animation Technology</th>
                      <th>Core Use Case in Industry</th>
                      <th>Academic Level</th>
                      <th>Primary Tools</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Adobe Animate / After Effects</td><td>2D Animation, Motion Graphics</td><td>B.Tech</td><td>Adobe CC Suite</td><td>Medium</td></tr>
                    <tr><td>Blender + Python</td><td>3D Modeling & Basic Game Animation</td><td>B.Tech & M.Tech</td><td>Blender, Python scripting</td><td>High</td></tr>
                    <tr><td>Unity 3D + C#</td><td>Interactive Animation, AR/VR Apps</td><td>M.Tech & Ph.D.</td><td>Unity, Visual Studio, XR Toolkit</td><td>Very High</td></tr>
                    <tr><td>Unreal Engine 5</td><td>Photorealistic Real-Time Simulations</td><td>M.Tech & Ph.D.</td><td>Unreal, Blueprints, Metahuman Creator</td><td>Expert</td></tr>
                    <tr><td>OpenGL + GLSL Shaders</td><td>Custom Graphics & GPU Rendering</td><td>M.Tech & Ph.D.</td><td>OpenGL, Visual C++, GLSL</td><td>Expert</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="AnimationsProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Animation Project Titles (2023–2025)</h2>
              <ul>
                <li>Real-Time Virtual Reality Animation for Interactive Learning Environments – 2023</li>
                <li>Deep Learning-Based Facial Animation Generator for Emotion Recognition – 2024</li>
                <li>Augmented Reality Animation for Industrial Training Simulation – 2025</li>
                <li>OpenGL-Based 3D Cloth and Fluid Simulation for Physics Education – 2023</li>
                <li>AI-Driven Lip-Sync Animation Using Audio2Face Model – 2024</li>
                <li>Digital Twin Animation for Smart City Visualization Using Unity – 2025</li>
                <li>Gamified Animation of Traffic Control Systems for Urban Simulation – 2023</li>
                <li>Gesture-Based Avatar Animation for Virtual Teaching Assistants – 2024</li>
                <li>Unreal Engine-Based Multi-User Animation Interaction for Remote Collaboration – 2025</li>
                <li>Motion-Captured Character Animation for Psychological Studies – 2023</li>
              </ul>
            </section>

            <section className="AnimationsProjectDevelopmentCenter-excellence">
              <h2>Excellence in Animations Project Development</h2>
              <p>
                Narpavi Research Institute’s Animations – Project Development Center integrates cutting-edge IEEE research with hands-on animation development, fostering scalable and innovative visual solutions.
              </p>
              <p>
                Our global mentorship ensures students excel in creating impactful animations for academia and industry, from educational modules to advanced AR/VR simulations.
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
          <div className="AnimationsProjectDevelopmentCenter-right">
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

export default AnimationsProjectDevelopmentCenter;