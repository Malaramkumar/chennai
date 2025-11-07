import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What are Smart Antennas for 5G/6G Applications?",
    answer: "Smart antennas are advanced antenna systems that utilize beamforming, MIMO, reconfigurability, and AI-based optimization to provide reliable, high-capacity, and energy-efficient communication for 5G and upcoming 6G networks."
  },
  {
    question: "What is the focus of B.Tech projects in smart antennas?",
    answer: "B.Tech projects focus on foundational training in antenna design, simulation, and implementation using HFSS, CST, and MATLAB, with hands-on prototyping of beamforming and array pattern antennas."
  },
  {
    question: "What are the key aspects of M.Tech projects in this domain?",
    answer: "M.Tech students work on advanced algorithm integration, adaptive beam management, hybrid antenna designs, IoT integration, and hardware-software co-design for real-time validation."
  },
  {
    question: "What research are Ph.D. students engaged in at this center?",
    answer: "Ph.D. research emphasizes AI-driven smart antennas, metasurfaces, cognitive spectrum utilization, and development of novel system architectures with IEEE-standard publications and collaborations."
  },
  {
    question: "Which tools and platforms are used for smart antenna development?",
    answer: "The tools commonly used include HFSS, CST, MATLAB for simulation, and AI frameworks for optimization of antenna systems."
  }
];

const SmartAntennas5G6GProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Antennas 5G/6G</li>
              <li>Beamforming Antennas</li>
              <li>Adaptive Smart Antennas</li>
              <li>Massive MIMO</li>
              <li>AI-driven Antenna Optimization</li>
              <li>Hybrid Antenna Architectures</li>
              <li>Reconfigurable Antennas</li>
              <li>5G Antenna Design</li>
              <li>6G Antenna Technology</li>
              <li>IEEE Antenna Projects</li>
              <li>Nanosatellite and Aerospace Antennas</li>
              <li>Nano Research Institute Smart Antennas</li>
            </ul>
          </div>

          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Smart Antennas for 5G/6G Applications – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> nurtures innovation in smart antenna systems for 5G and 6G networks, providing research and development guidance aligned with IEEE trends (2023-2025).</p>
              <p>The center emphasizes hands-on prototyping, AI optimization, and comprehensive simulation methodologies for beamforming, massive MIMO, and adaptable antenna architectures.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology & Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Core Feature</th>
                      <th>Industry Application</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Beamforming Antennas</td>
                      <td>Directional Transmission</td>
                      <td>5G Mobile Networks</td>
                      <td>Enhanced Coverage & Speed</td>
                    </tr>
                    <tr>
                      <td>Adaptive Smart Antennas</td>
                      <td>Real-time Reconfiguration</td>
                      <td>IoT, Vehicular Communication</td>
                      <td>Reliable Low Latency</td>
                    </tr>
                    <tr>
                      <td>Massive MIMO</td>
                      <td>Spatial Multiplexing</td>
                      <td>Urban and Rural 5G/6G Deployments</td>
                      <td>Higher Capacity</td>
                    </tr>
                    <tr>
                      <td>AI-Driven Antennas</td>
                      <td>Optimization</td>
                      <td>Industry 4.0, Cognitive Networks</td>
                      <td>Optimal Resource Utilization</td>
                    </tr>
                    <tr>
                      <td>Hybrid Architectures</td>
                      <td>Multi-standard Adaptability</td>
                      <td>Defense, Aerospace</td>
                      <td>Flexible Connectivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech-cycle">
              <h2>B.Tech Project Cycle</h2>
              <p>Students learn antenna fundamentals, simulation, and prototype design, focusing on beamforming and array patterns with HFSS, CST, and MATLAB.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech-cycle">
              <h2>M.Tech Project Cycle</h2>
              <p>Advanced multidisciplinary projects integrating AI, adaptive beamforming, hybrid antenna designs, and IoT connectivity with co-design and real-time testing focus.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd-cycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>Research cutting-edge AI-based antenna optimization, metasurfaces, and cognitive spectrum sharing architectures with IEEE publication mentorship and collaborative opportunities.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Compact Beamforming Antennas for Urban 5G Networks</li>
                <li>AI-Optimized Adaptive Antenna Arrays for Vehicle Communications</li>
                <li>Massive MIMO System Design for Enhanced Spectral Efficiency</li>
                <li>Reconfigurable Metasurface-based Antennas for 6G Applications</li>
                <li>Hybrid Antenna Architectures for Multi-band Communication Systems</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Dedicated to advancing smart antenna research for next-gen networks, Narpavi Research Institute equips students with expert guidance in simulation, prototyping, and IEEE-standard publications.</p>
            </section>

            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>

          <div className="ECEProjectDevelopmentCenter-right">
            <h3>Related Services</h3>
            <ul>
              <li><a href="/energy-efficient-routing">Energy-Efficient Routing</a></li>
              <li><a href="/adaptive-control">Adaptive Control</a></li>
              <li><a href="/iot-security">IoT Security</a></li>
              <li><a href="/edge-computing">Edge Computing</a></li>
              <li><a href="/cyber-physical-systems">Cyber-Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmartAntennas5G6GProject;