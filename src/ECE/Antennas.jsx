
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What is the focus of the Antennas – Project Development Center?",
    answer: "The center emphasizes antenna design and development for 5G/6G, IoT, wearable devices, satellite communications, combining software simulation and hardware prototyping to prepare students for both academic and industrial careers."
  },
  {
    question: "What do B.Tech projects in antennas involve?",
    answer: "B.Tech students select IEEE-aligned topics, design basic antenna structures, simulate parameters, prototype hardware if needed, and test for gain, efficiency, and radiation pattern."
  },
  {
    question: "What is the M.Tech project development cycle?",
    answer: "M.Tech projects involve literature reviews of recent IEEE work, advanced modeling and optimization using MATLAB, CST, and HFSS, integration with IoT and 5G/6G systems, hardware validation, and journal-ready documentation."
  },
  {
    question: "What research areas do Ph.D. projects cover?",
    answer: "Ph.D. candidates conduct original research on reconfigurable, MIMO, and satellite-grade antennas with multi-physics simulations, AI optimization, hardware-software co-design, and experimental validation targeting IEEE publications."
  },
  {
    question: "Which tools are commonly used in antenna projects?",
    answer: "Common tools include CST Microwave Studio, HFSS, MATLAB, and ADS for simulation and prototyping."
  }
];

const AntennasProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopment">
      <Sidebar />
      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">

          <div className="ECEProjectDevelopment-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Antennas Project Development</li>
              <li>Smart Antennas</li>
              <li>Reconfigurable Antenna Design</li>
              <li>MIMO Antennas</li>
              <li>Satellite Communication Antennas</li>
              <li>Miniaturized Antennas</li>
              <li>IoT Antenna Systems</li>
              <li>5G/6G Antenna Technology</li>
              <li>IEEE Aligned Antenna Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          <div className="ECEProjectDevelopment-center">
            <h1>Antennas – Project Development Center</h1>
            <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Research Institute</strong> supports global students and researchers in cutting-edge antenna design and deployment, featuring projects sourced from IEEE Transactions (2023–2025) covering software and hardware dimensions.
              </p>
              <p>
                Our focus covers scalable design and practical validation for applications spanning 5G/6G, IoT, wearable devices, and satellite communications leveraging simulation tools like CST Microwave Studio, HFSS, MATLAB, and ADS.
              </p>
            </section>

            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology vs Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Antenna Technology</th>
                      <th>Industry Applications</th>
                      <th>Best For</th>
                      <th>Simulation/Deployment Tools</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smart Antennas</td>
                      <td>5G/6G Wireless Networks</td>
                      <td>B.Tech/M.Tech</td>
                      <td>CST, HFSS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Reconfigurable Antennas</td>
                      <td>IoT, Wearable Devices</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, HFSS</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Miniaturized Antennas</td>
                      <td>Mobile & Wearable Devices</td>
                      <td>B.Tech</td>
                      <td>CST, ADS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>MIMO Antenna Systems</td>
                      <td>4G/5G, Massive MIMO Networks</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>HFSS, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Satellite Antennas</td>
                      <td>Space & Satellite Communication</td>
                      <td>Ph.D.</td>
                      <td>CST, HFSS, ADS</td>
                      <td>Excellent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Project Development Cycle</h2>
              <p>Training includes topic selection, designing antenna structures, simulation, prototyping, and performance testing for gain, efficiency, and radiation pattern.</p>
            </section>

            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Project Development Cycle</h2>
              <p>Focus on in-depth literature review, advanced simulation, system optimization, IoT/5G/6G integration, hardware validation, and journal-quality documentation.</p>
            </section>

            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>Emphasis on novel antenna designs, multi-physics simulations, AI-based optimization, co-design methodologies, and preparation of prototypes and research publications.</p>
            </section>

            <section className="ECEProjectDevelopment-projectTitles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Reconfigurable Antenna Array for Multi-Band IoT Applications</li>
                <li>Miniaturized Wearable Antenna Design for Health Monitoring</li>
                <li>MIMO Antenna Optimization for 5G Massive Networks Using AI</li>
                <li>Beam-Steering Smart Antennas for Autonomous Vehicles</li>
                <li>Satellite Antenna Design for High Throughput Communication</li>
                <li>Compact Reconfigurable Antenna for IoT Smart Homes</li>
                <li>Energy-Efficient Antenna Arrays for 6G Applications</li>
                <li>AI-Optimized Antenna System for Wireless Sensor Networks</li>
                <li>Antenna Design for Secure Communication in Industrial IoT</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers comprehensive support for antenna projects with focus on IEEE standards, bridging the gap between academic research and industrial application worldwide.
              </p>
            </section>

            <section className="ECEProjectDevelopment-faq">
              <h2>FAQs</h2>
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>

          <div className="ECEProjectDevelopment-right">
            <h3>Related Services</h3>
            <ul>
              <li><a href="/energy-efficient-routing">Energy-Efficient Routing</a></li>
              <li><a href="/adaptive-control">Adaptive Control Systems</a></li>
              <li><a href="/secure-iot">Secure IoT Architectures</a></li>
              <li><a href="/edge-computing">Edge and Fog Computing</a></li>
              <li><a href="/cyber-physical">Control in Cyber-Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AntennasProjectDevelopmentCenter;
