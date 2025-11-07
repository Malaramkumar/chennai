import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the PID and Advanced Controllers Project Development Center offer?",
    answer: "We provide B.Tech, M.Tech, and Ph.D. students guidance on IEEE-aligned (2023–2025) projects related to PID controllers, adaptive controllers, MPC, sliding mode, and intelligent AI/ML-based controllers. Services include simulation, hardware prototyping, algorithm design, and IEEE publication support."
  },
  {
    question: "What types of PID and Advanced Controller projects are supported?",
    answer: "We support B.Tech projects (PID tuning, microcontroller-based implementations), M.Tech projects (adaptive PID, MPC, intelligent controllers), and Ph.D. projects (nonlinear robust control, predictive AI-based controllers, patents, and IEEE/Scopus/SCI research papers)."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "MATLAB/Simulink, LabVIEW, Arduino/ARM/PIC microcontrollers, FPGA boards, Python with TensorFlow/PyTorch for intelligent control, and real-time hardware-in-loop (HIL) setups."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects reference IEEE Transactions (2023–2025) focusing on modern control, adaptive/robust controllers, AI integration, and control-oriented research with industrial validation."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide complete support from topic selection, simulation, algorithm/hardware development, to IEEE-style documentation, patents, and submission to leading conferences/journals."
  }
];

const EEEPidAdvancedControllersProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>PID and Advanced Controllers Project Development Center</li>
              <li>PID Controller Projects for B.Tech</li>
              <li>Advanced Controllers for M.Tech</li>
              <li>Ph.D. Research in PID Controllers</li>
              <li>Adaptive and Robust Control Projects</li>
              <li>IEEE 2023–2025 PID Controller Projects</li>
              <li>Intelligent Control Systems Research</li>
              <li>Control System Projects with MATLAB</li>
              <li>Sliding Mode Controller Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>PID and Advanced Controllers – Project Development Support</h1>
            
            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
               <strong>Narpavi Research Institute</strong> leads the PID and Advanced Controllers Project Development Center – offering B.Tech, M.Tech, and Ph.D. students IEEE-aligned (2023–2025) projects in PID, adaptive controllers, MPC, sliding mode controllers, and intelligent AI/ML-based controllers.
              </p>
              <p>
               Our students gain skills in simulation, algorithm design, real-world hardware prototyping, and predictive intelligent control for broad applications in process industries, robotics, EVs, renewable integration, and cyber-physical systems.
              </p>
            </section>

            {/* Why Important */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of PID and Advanced Controllers</h2>
              <ul>
                <li>Ensures accurate control and stability in process industries.</li>
                <li>Improves energy efficiency and lowers operating costs.</li>
                <li>Integrates seamlessly with AI/ML-based intelligent controllers.</li>
                <li>Crucial for robotics, electric drives, smart manufacturing, and Industry 4.0.</li>
                <li>Aligned with IEEE research focus (2023–2025) on modern control systems.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech PID & Advanced Controllers Projects</h2>
              <ul>
                <li>Basic PID tuning using MATLAB/Simulink</li>
                <li>Microcontroller-based PID prototypes</li>
                <li>Industrial case applications like HVAC/Process systems</li>
                <li>IEEE-guided simulations & reports</li>
              </ul>
              <p>Focus: fundamentals of PID and control system hardware practice.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech PID & Advanced Controllers Projects</h2>
              <ul>
                <li>Adaptive PID and fractional-order PID projects</li>
                <li>Implementation of MPC and predictive control strategies</li>
                <li>Hybrid AI-assisted controllers with optimization algorithms</li>
                <li>Case studies in smart grids, robotics, and EV drives</li>
              </ul>
              <p>Focus: advanced and hybrid controller simulations validated with prototypes and IEEE publication.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D PID & Advanced Controllers Projects</h2>
              <ul>
                <li>Robust nonlinear & intelligent controller design</li>
                <li>Deep learning integration for adaptive process control</li>
                <li>Cyber-physical applications in autonomous vehicles & Industry 4.0</li>
                <li>Patents, IEEE/SCI journal papers, and industrial-scale demo systems</li>
              </ul>
              <p>Focus: pioneering industry-defining controller architectures with AI/ML support and global publication impact.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Controllers vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Controller Type</th>
                      <th>Industry Application</th>
                      <th>Benefits Achieved</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PID Controllers</td>
                      <td>Process, HVAC, Power plants</td>
                      <td>Stable, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Adaptive Controllers</td>
                      <td>Aerospace, Renewable energy</td>
                      <td>Self-tuning, robust vs. variations</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Controllers</td>
                      <td>Automotive, Robotics, Chem Plants</td>
                      <td>Optimized performance, handles constraints</td>
                    </tr>
                    <tr>
                      <td>Sliding Mode Controllers</td>
                      <td>EVs, Robotics, Nonlinear Systems</td>
                      <td>Noise-resistant, robust</td>
                    </tr>
                    <tr>
                      <td>Intelligent AI/ML Controllers</td>
                      <td>Smart Grids, Industry 4.0</td>
                      <td>Predictive, adaptive, self-learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a global leader in Control Engineering projects. With our expertise, scholars worldwide receive IEEE-standard project guidance, simulation-to-prototype training, and publication mentorship in PID and Advanced Controllers.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,idx)=>(
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* JSON-LD Schema.org for FAQ SEO */}
              <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type":"FAQPage",
                    "mainEntity": faqs.map(f=>({
                      "@type":"Question",
                      "name": f.question,
                      "acceptedAnswer": { "@type":"Answer", "text": f.answer }
                    }))
                  })
                }} 
              />
            </section>
          </div>

          {/* Right Column – Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/power-electronics-project-development">Power Electronics Projects</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Projects</a></li>
              <li><a href="/robotics-automation-project-development">Robotics & Automation Projects</a></li>
              <li><a href="/fpga-control-applications-project-development">FPGA-Based Control Applications</a></li>
              <li><a href="/real-time-operating-systems-project-development">Real-Time Operating Systems (RTOS)</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEEPidAdvancedControllersProjectDevelopmentCenter;
