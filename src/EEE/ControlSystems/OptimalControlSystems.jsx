import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Optimal Control Systems Project Development Center offer?",
    answer: "We provide B.Tech, M.Tech, and Ph.D. students end-to-end support for IEEE-aligned (2023–2025) projects in LQR, MPC, dynamic programming, Pontryagin’s principle, and AI-based optimal control, covering simulations, prototyping, algorithm design, and IEEE publication."
  },
  {
    question: "What types of projects are supported?",
    answer: "B.Tech projects include fundamentals such as LQR-based designs, real-time robotic optimization, and small-scale embedded prototypes. M.Tech projects focus on MPC, energy-efficient EV control, and renewable grid integration. Ph.D. projects explore AI-integrated optimal control, nonlinear strategies, and patents in IEEE/Scopus/SCI publishing."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "Mathematical modeling and simulation via MATLAB/Simulink, PSCAD, Python with SciPy/CVX, hardware-in-loop testing, microcontroller integration (ARM, Arduino), and AI frameworks (TensorFlow, PyTorch)."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are mapped with IEEE Transactions (2023–2025) focusing on trajectory control, smart grids, AI-based optimization, robotics path planning, EV energy optimization, and resilient industrial automation."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide IEEE topic mentoring, algorithm design, system simulation, HIL testing, technical documentation, and international publication assistance."
  }
];

const EEEOptimalControlSystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* 🔑 Left – Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Optimal Control Systems Project Development Center</li>
              <li>LQR Projects for B.Tech</li>
              <li>MPC Control Projects M.Tech</li>
              <li>Ph.D. Research in Optimal Control</li>
              <li>Dynamic Programming Control Projects</li>
              <li>IEEE Optimal Control 2023–2025</li>
              <li>Aerospace Optimal Control Projects</li>
              <li>Renewable Energy Optimization Control</li>
              <li>AI-based Optimal Control Research</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Optimal Control Systems – Project Development Support</h1>
            
            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Optimal Control Systems Project Development Center, offering global researchers IEEE-aligned (2023–2025) support in formulating optimization-based control strategies to minimize cost, maximize efficiency, and ensure stability across advanced industrial and academic systems.</p>
              <p>Our scholars focus on smart grids, aerospace trajectory optimization, robotics, EV drives, and Industry 4.0 systems bridging rigorous mathematical theory with real-world implementations.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Optimal Control Systems</h2>
              <ul>
                <li>Ensures maximum efficiency with minimal energy use.</li>
                <li>Guides aerospace trajectory optimization and robotics motion planning.</li>
                <li>Critical for renewable MPPT optimization and EV powertrain efficiency.</li>
                <li>Supports predictive algorithms for smart manufacturing and process control.</li>
                <li>Aligns with IEEE 2023–2025 emerging AI-driven control strategies.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Optimal Control Systems</h2>
              <ul>
                <li>MATLAB-based Linear Quadratic Regulator (LQR) simulations</li>
                <li>Robotic path optimization demonstrations</li>
                <li>Basic real-time optimal algorithms with microcontrollers</li>
                <li>IEEE-style documentation & presentations</li>
              </ul>
              <p>Focus: fundamentals of optimal control and MATLAB-based academic learning.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Optimal Control Systems</h2>
              <ul>
                <li>Model Predictive Control (MPC) development and validation</li>
                <li>Renewable energy optimal management (microgrids, MPPT)</li>
                <li>EV charging optimization & power scheduling</li>
                <li>Embedded hardware-in-loop testing for industrial process optimization</li>
              </ul>
              <p>Focus: advanced MPC, renewable & EV energy systems optimization, industry-ready experiments.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Projects in Optimal Control Systems</h2>
              <ul>
                <li>Hybrid nonlinear AI-based optimal control strategies</li>
                <li>Dynamic programming & Pontryagin’s minimum principle research</li>
                <li>Novel algorithms for autonomous navigation and smart cities</li>
                <li>Publications in SCI/Scopus journals</li>
              </ul>
              <p>Focus: groundbreaking integration of AI/ML with optimal control theory for real-time scalable systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Optimal Control Methods vs Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Industry Application</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Linear Quadratic Regulator (LQR)</td>
                      <td>Aerospace, Robotics</td>
                      <td>Minimum energy cost, stable response</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Process industries, Smart Grids</td>
                      <td>Predictive optimization, constraints handling</td>
                    </tr>
                    <tr>
                      <td>Dynamic Programming</td>
                      <td>Renewable integration, EV charging</td>
                      <td>Long-term multi-step optimization</td>
                    </tr>
                    <tr>
                      <td>Pontryagin’s Minimum Principle</td>
                      <td>Aerospace trajectories</td>
                      <td>Precise trajectory + resource efficiency</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced Optimal Control</td>
                      <td>Smart factories, Industry 4.0</td>
                      <td>Adaptive, intelligent predictive decisions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is globally renowned for IEEE-standard control systems R&D. Through our Optimal Control Systems Development Center, we provide scholars across B.Tech, M.Tech, and Ph.D. levels comprehensive support from simulation, prototyping, optimization, to IEEE publication, ensuring academic + industrial excellence.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx) => (
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* SEO Schema FAQs */}
              <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity": faqs.map(f=>({
                      "@type":"Question",
                      "name": f.question,
                      "acceptedAnswer": {
                        "@type":"Answer",
                        "text": f.answer
                      }
                    }))
                  })
              }}/>
            </section>
          </div>

          {/* 🔗 Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/adaptive-robust-control-project-development">Adaptive & Robust Control</a></li>
              <li><a href="/pid-advanced-controllers-project-development">PID & Advanced Controllers</a></li>
              <li><a href="/hvdc-transmission-systems-project-development">HVDC Transmission Systems</a></li>
              <li><a href="/embedded-robotics-project-development">Embedded Systems for Robotics</a></li>
              <li><a href="/automotive-embedded-systems-project-development">Automotive Embedded Systems</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
};

export default EEEOptimalControlSystemsProjectDevelopmentCenter;
