import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
const faqs = [
  {
    question: "What are CubeSats and Nanosatellites?",
    answer: "CubeSats and Nanosatellites are small, modular satellites enabling cost-effective and rapid space missions, used for Earth observation, communication, navigation, and defense."
  },
  {
    question: "What do B.Tech projects in CubeSat and Nanosatellite Technologies focus on?",
    answer: "They focus on basic communication modules using SDR, Earth imaging payloads, low-power IoT sensors for nanosatellites, and design of CubeSat ground stations."
  },
  {
    question: "What advanced topics are covered in M.Tech projects?",
    answer: "Advanced projects include inter-CubeSat communication protocols, nanosatellite IoT relay systems, AI-enabled data compression on payloads, and adaptive attitude control."
  },
  {
    question: "What are the research directions for Ph.D. scholars?",
    answer: "Researches include CubeSat constellations for global IoT, deep learning for payload optimization, swarm intelligence for satellite coordination, and quantum communication experiments."
  },
  {
    question: "What tools and platforms are used in CubeSat and Nanosatellite projects?",
    answer: "Common tools are MATLAB, Python, GNURadio, STK, Simulink, Ansys HFSS, CST, TensorFlow, PyTorch, and Qiskit."
  }
];

const CubeSatNanosatelliteProject = () => {
  return (
    <div className="ECEProjectCenter">
      <Sidebar />
      <div className="ECEProjectCenter-main">
        <div className="ECEProjectCenter-grid">
          <div className="ECEProjectCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>CubeSat and Nanosatellite Technologies</li>
              <li>CubeSat Design and Communication</li>
              <li>Nanosatellite IoT Applications</li>
              <li>Inter-Satellite Links</li>
              <li>AI in CubeSat Payloads</li>
              <li>Swarm Intelligence for Satellites</li>
              <li>Quantum Communication via CubeSats</li>
              <li>Satellite IoT Networks</li>
              <li>LEO Satellite Constellations</li>
              <li>IEEE CubeSat Projects</li>
              <li>Nanosatellite Research Projects</li>
              <li>NanoSatellites for Disaster Management</li>
            </ul>
          </div>

          <div className="ECEProjectCenter-center">
            <h1>CubeSat and Nanosatellite Technologies – Project Development Center</h1>
            <section className="ECEProjectCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> leads academic and research guidance in CubeSat and Nanosatellite technologies, focusing on rapid development and deployment of modular satellites supporting IoT and next-gen 5G/6G connectivity.
              </p>
              <p>
                Projects encompass varied domains such as payload design, intersatellite communication, AI-powered onboard processing, and quantum communication experimentations aligned with IEEE standards (2023–2025).
              </p>
            </section>

            <section className="ECEProjectCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Application</th>
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CubeSat Design</td>
                      <td>Low-cost modular satellites</td>
                      <td>Education, research, commercial</td>
                      <td>STK, CAD</td>
                    </tr>
                    <tr>
                      <td>Nanosatellite IoT</td>
                      <td>IoT data relay via satellite</td>
                      <td>Agriculture, maritime, logistics</td>
                      <td>GNURadio, Python</td>
                    </tr>
                    <tr>
                      <td>Inter-Satellite Links</td>
                      <td>Networking between CubeSats</td>
                      <td>Mega-constellations</td>
                      <td>MATLAB, CST</td>
                    </tr>
                    <tr>
                      <td>Onboard AI</td>
                      <td>AI-driven payload data processing</td>
                      <td>Real-time Earth observation</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Swarm Intelligence</td>
                      <td>Coordination algorithms</td>
                      <td>Satellite swarms, defense</td>
                      <td>MATLAB, NS3</td>
                    </tr>
                    <tr>
                      <td>Quantum Experiments</td>
                      <td>Quantum communication research</td>
                      <td>Secure satellite comms</td>
                      <td>Qiskit, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section className="ECEProjectCenter-btech">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Projects include SDR based communication modules, miniature Earth imaging, IoT nanosatellite sensors, and satellite ground station design using tools like MATLAB, Python, GNURadio, and STK.
              </p>
            </section>
            
            <section className="ECEProjectCenter-mtech">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Focus on advanced communication protocols, AI-based payloads, adaptive control systems, and nanosatellite IoT data relay using Simulink, Ansys HFSS, CST, and MATLAB.
              </p>
            </section>
            
            <section className="ECEProjectCenter-phd">
              <h2>Ph.D. Research Cycle</h2>
              <p>
                Research domains include CubeSat constellations, swarm intelligence, AI payload optimization, and quantum satellite communication, targeting IEEE journals.
              </p>
            </section>

            <section className="ECEProjectCenter-projects">
              <h2>IEEE-Style Project Titles (2023-2025)</h2>
              <ul>
                <li>Design of CubeSat Ground Station with SDR Integration (2023)</li>
                <li>IoT Data Relay using Nanosatellite Constellations (2023)</li>
                <li>AI-Driven Payload Optimization for CubeSats (2024)</li>
                <li>Swarm Intelligence Algorithms for Satellite Coordination (2024)</li>
                <li>Quantum Communication Experiments via CubeSats (2025)</li>
                <li>Satellite IoT Networks for Global Coverage (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers world-class research mentorship and project guidance in CubeSat and Nano satellite technologies, enabling students and researchers worldwide to deliver innovative, IEEE-standard aligned projects and publications.
              </p>
            </section>

            <section className="ECEProjectCenter-faq">
              <h2>FAQs</h2>
              {faqs.map((faq, index) => (
                <details key={index}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>

          <div className="ECEProjectCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/energy-efficient-routing-wsn">Energy-Efficient Routing in WSN</a></li>
              <li><a href="/adaptive-nonlinear-control">Adaptive Nonlinear Control Systems</a></li>
              <li><a href="/secure-iot-architectures">Secure IoT Architectures</a></li>
              <li><a href="/edge-fog-computing">Edge and Fog Computing</a></li>
              <li><a href="/control-cyber-physical">Control in Cyber-Physical Systems</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeSatNanosatelliteProject;
