import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Real-Time Operating Systems (RTOS) Project Development Center offer?",
    answer: "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) areas such as task scheduling, deterministic embedded performance, priority-based multitasking, inter-task communication, AI-optimized scheduling, and real-time monitoring systems."
  },
  {
    question: "What types of RTOS projects are supported?",
    answer: "We support B.Tech projects (FreeRTOS/RTEMS applications, scheduling basics), M.Tech projects (AI-assisted real-time task optimization, robotics automation), and Ph.D. projects (deep learning-enabled RTOS, patented task scheduling frameworks, industrial deployment)."
  },
  {
    question: "Which RTOS tools and platforms are used?",
    answer: "FreeRTOS, RTEMS, VxWorks, ARM Cortex-based systems, FPGA with RTOS controllers, Embedded C/C++, and AI/ML frameworks (TensorFlow, PyTorch) for predictive scheduling and diagnostics."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Our projects reference IEEE Transactions (2023–2025) for RTOS performance, deterministic control, embedded scheduling, event-driven architectures, and IEEE-aligned industrial automation frameworks."
  },
  {
    question: "What academic support is provided?",
    answer: "We provide IEEE topic mentoring, embedded RTOS programming support, hardware prototyping, performance validation, IEEE-style documentation, and assistance for IEEE/Scopus/SCI journal publications."
  }
];

const EEERtosProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar />
      
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left: Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Real-Time Operating Systems Projects</li>
              <li>IEEE RTOS Research 2023–2025</li>
              <li>B.Tech RTOS Applications</li>
              <li>M.Tech Real-Time Embedded Systems</li>
              <li>Ph.D AI-Assisted RTOS Control</li>
              <li>Narpavi Research Institute</li>
              <li>FreeRTOS RTEMS Projects</li>
              <li>Multi-Tasking Embedded Systems</li>
              <li>Industrial Automation RTOS</li>
              <li>Robotics Real-Time Systems</li>
            </ul>
          </div>

          {/* 📑 Center: Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Real-Time Operating Systems (RTOS) – Project Development Support</h1>

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> introduces the RTOS Project Development Center, empowering B.Tech, M.Tech, and Ph.D. scholars in IEEE-aligned (2023–2025) domains of scheduling, multitasking, real-time synchronization, and AI-enhanced embedded performance.
              </p>
              <p>
                Students gain expertise in FreeRTOS, RTEMS, VxWorks, FPGA/ARM prototyping, and predictive diagnostics for industrial automation, IoT devices, robotics, and automotive embedded applications.
              </p>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech RTOS Projects</h2>
              <ul>
                <li>Basics of RTOS architectures and scheduling algorithms</li>
                <li>IEEE research (2023–2025) on embedded multitasking control</li>
                <li>RTOS labs using FreeRTOS, RTEMS, VxWorks</li>
                <li>IoT + microcontroller scheduling prototypes</li>
                <li>Testing for task latency & accuracy</li>
                <li>Prepare IEEE-style reports</li>
              </ul>
              <p>Focus: Learning fundamentals of multitasking and task scheduling performance.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech RTOS Projects</h2>
              <ul>
                <li>Review IEEE Transactions (2023–2025) on real-time automotive controllers</li>
                <li>Develop AI-assisted scheduling and adaptive load balancing</li>
                <li>Concurrent multi-tasking simulations under dynamic conditions</li>
                <li>Embedded ARM and IoT-enabled RTOS applications implementation</li>
                <li>Testing performance & concurrency optimization</li>
                <li>IEEE-compliant publishing</li>
              </ul>
              <p>Focus: Optimized, adaptive, AI-enabled RTOS embedded applications.</p>
            </section>

            {/* Ph.D Cycle */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D RTOS Projects</h2>
              <ul>
                <li>Comprehensive IEEE review on RTOS predictive task frameworks</li>
                <li>Deep learning-driven RTOS scheduling models</li>
                <li>Prototype RTOS-based industrial controllers & robotics</li>
                <li>IoT + FPGA-based real-time task synchronization</li>
                <li>Patents & IEEE journal publications in RTOS optimization</li>
              </ul>
              <p>Focus: Industrial-scale AI-enabled deterministic scheduling with global research impact.</p>
            </section>

            {/* 📊 Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – RTOS Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Task Scheduling Algorithms</td>
                      <td>Robotics, Industrial Automation</td>
                      <td>Priority scheduling, latency reduction</td>
                      <td>B.Tech/M.Tech</td>
                      <td>FreeRTOS, VxWorks</td>
                    </tr>
                    <tr>
                      <td>Multi-Tasking RTOS Integration</td>
                      <td>Automotive ECUs, IoT devices</td>
                      <td>Efficient CPU utilization</td>
                      <td>M.Tech</td>
                      <td>ARM Cortex-M, RTEMS</td>
                    </tr>
                    <tr>
                      <td>Inter-Task Communication</td>
                      <td>Industrial controllers</td>
                      <td>Semaphores, event-driven queues</td>
                      <td>B.Tech/M.Tech</td>
                      <td>FreeRTOS, POSIX APIs</td>
                    </tr>
                    <tr>
                      <td>FreeRTOS & RTEMS Apps</td>
                      <td>IoT and Smart Devices</td>
                      <td>Lightweight kernel + low power</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ESP32, ARM Cortex</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Real-Time Optimization</td>
                      <td>Industrial IoT, Robotics</td>
                      <td>Adaptive scheduling & prediction</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow Lite + FreeRTOS</td>
                    </tr>
                    <tr>
                      <td>Real-Time Monitoring</td>
                      <td>Automotive & Medical Systems</td>
                      <td>Latency diagnostics & profiling</td>
                      <td>Ph.D.</td>
                      <td>RTEMS, Embedded Linux</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute leads globally in IEEE-aligned EEE research. 
                Our Real-Time Operating Systems (RTOS) Center enables project scholars to work on FreeRTOS, VxWorks, and advanced scheduling algorithms, bridging research to industry-ready embedded applications.
              </p>
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
              {/* SEO JSON-LD */}
              <script 
                type="application/ld+json"
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

          {/* 🔗 Right: Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/arm-pic-avr-microcontroller-project-development">ARM/PIC/AVR Microcontrollers</a></li>
              <li><a href="/fpga-control-applications-project-development">FPGA-Based Control Applications</a></li>
              <li><a href="/iot-embedded-hardware-design-project-development">IoT-Embedded Hardware Design</a></li>
              <li><a href="/robotics-automation-project-development">Robotics & Automation</a></li>
              <li><a href="/embedded-systems-project-development">Embedded Systems Projects</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EEERtosProjectDevelopmentCenter;
