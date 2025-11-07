import "../EEEProjectDevelopmentCenter.scss";  
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Nonlinear Control Systems Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) domains of nonlinear modeling, Lyapunov stability analysis, sliding mode, feedback linearization, backstepping, and AI-assisted nonlinear controllers."
  },
  {
    question: "What types of nonlinear control projects are supported?",
    answer: "We support B.Tech projects (MATLAB-based simulations, robotic arms, inverted pendulum control), M.Tech projects (sliding mode, fuzzy control of renewable systems, FPGA-based implementations), and Ph.D. projects (AI-augmented nonlinear strategies, adaptive systems, patents, SCI-indexed IEEE publications)."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "MATLAB/Simulink, PSCAD, Python (SciPy), FPGA/ARM microcontrollers, LabVIEW, COMSOL, TensorFlow/PyTorch for intelligent control solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "All projects integrate IEEE Transactions (2023–2025) in nonlinear dynamics, AI-based adaptive controllers, stability control, aerospace robotics, smart EV control, and Industry 4.0 implementations."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide support with topic selection, algorithm development, nonlinear modeling, adaptive hardware prototypes, IEEE-style reports, and IEEE/Scopus/SCI publication guidance."
  }
];

const EEENonlinearControlSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Nonlinear Control Systems Project Development Center</li>
              <li>Sliding Mode Control Projects</li>
              <li>Feedback Linearization Research</li>
              <li>Adaptive Nonlinear Control M.Tech Projects</li>
              <li>Ph.D. Research in Nonlinear Control</li>
              <li>AI-based Nonlinear Control IEEE 2023–2025</li>
              <li>Fuzzy Nonlinear Control Projects</li>
              <li>Lyapunov Stability Analysis Projects</li>
              <li>Smart Grid Nonlinear Control</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Nonlinear Control Systems – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> drives the Nonlinear Control Systems Project Development Center, providing IEEE-aligned (2023–2025) research opportunities in nonlinear modeling, advanced control algorithms, and intelligent adaptive strategies for robotics, aerospace, EVs, power electronics, and biomedical systems.</p>
              <p>Researchers gain advanced training in modeling nonlinear dynamics, stability proofs, FPGA/MCU implementations, AI-augmented controllers, and real-time robotic/industrial systems validation.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Nonlinear Control Systems</h2>
              <ul>
                <li>Captures realistic system behavior beyond linear approximations.</li>
                <li>Critical for robotics, drones, autonomous navigation, and biomedical devices.</li>
                <li>Applied in renewable systems with nonlinear dynamics (solar, wind, fuel cells).</li>
                <li>Essential for EV stability, power electronics, and aerospace controls.</li>
                <li>IEEE (2023–2025) focuses on AI-assisted nonlinear adaptive methods.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Nonlinear Control Projects</h2>
              <ul>
                <li>MATLAB/Simulink nonlinear simulations (robotic arm, pendulum)</li>
                <li>Basic feedback linearization techniques</li>
                <li>Microcontroller-based motion control</li>
                <li>IEEE-guided academic reports</li>
              </ul>
              <p>Focus: grounding in nonlinear control simulation and small-scale verification.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Nonlinear Control Projects</h2>
              <ul>
                <li>Sliding Mode Control (SMC) for power electronics</li>
                <li>Fuzzy nonlinear controllers for renewables</li>
                <li>AI-assisted hybrid adaptive nonlinear control</li>
                <li>FPGA/ARM-based real-time nonlinear control prototypes</li>
              </ul>
              <p>Focus: advanced adaptive nonlinear methods validated in HIL systems.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Nonlinear Control Projects</h2>
              <ul>
                <li>Nonlinear Lyapunov-based robust architectures</li>
                <li>AI/ML-driven adaptive nonlinear strategies</li>
                <li>Autonomous vehicle nonlinear stability research</li>
                <li>Patents and IEEE/SCI publications</li>
              </ul>
              <p>Focus: pioneering nonlinear stability methods for smart robotics, aerospace, and Industry 4.0 systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Nonlinear Control Technologies vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Nonlinear Technique</th>
                      <th>Industry Application</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Feedback Linearization</td>
                      <td>Robotics, Drones</td>
                      <td>Simplifies nonlinear dynamics for easier design</td>
                    </tr>
                    <tr>
                      <td>Sliding Mode Control (SMC)</td>
                      <td>Power Electronics, EVs</td>
                      <td>Robust against uncertainties</td>
                    </tr>
                    <tr>
                      <td>Lyapunov Control</td>
                      <td>Aerospace, Biomedical</td>
                      <td>Guarantees stability</td>
                    </tr>
                    <tr>
                      <td>Backstepping Technique</td>
                      <td>Energy Systems, EVs</td>
                      <td>Stepwise design for enhanced safety</td>
                    </tr>
                    <tr>
                      <td>Fuzzy/Neural Nonlinear</td>
                      <td>Industry 4.0, Robotics</td>
                      <td>Self-learning, adaptive performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute offers global-standard guidance in Nonlinear Control Systems. By supporting B.Tech, M.Tech, and Ph.D. researchers with simulations, hardware prototyping, and IEEE publishing mentorship, we ensure strong academic + industrial impact in nonlinear robust adaptive control research.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item,idx)=>(
                  <details key={idx}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
              {/* FAQ SEO Schema */}
              <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    mainEntity: faqs.map(f=>({
                      "@type":"Question",
                      "name":f.question,
                      "acceptedAnswer":{ "@type":"Answer", "text":f.answer }
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
              <li><a href="/adaptive-robust-control-project-development">Adaptive & Robust Control</a></li>
              <li><a href="/pid-advanced-controllers-project-development">PID & Advanced Controllers</a></li>
              <li><a href="/optimal-control-systems-project-development">Optimal Control Systems</a></li>
              <li><a href="/embedded-robotics-project-development">Embedded Systems for Robotics</a></li>
              <li><a href="/automotive-embedded-systems-project-development">Automotive Embedded Systems</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
};

export default EEENonlinearControlSystemsProjectDevelopmentCenter;
