import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
const faqs = [
  {
    question: "What are MIMO Antenna Systems?",
    answer: "MIMO (Multiple-Input Multiple-Output) antenna systems use multiple antennas at both transmitter and receiver to improve capacity, coverage, and interference resilience in wireless networks."
  },
  {
    question: "What do B.Tech projects focus on in MIMO antenna systems?",
    answer: "Fundamentals such as designing 2x2 and 4x4 MIMO arrays, basic channel modeling, and simulation with CST and HFSS, preparing students for telecom and IoT applications."
  },
  {
    question: "What advanced topics are covered in M.Tech MIMO antenna projects?",
    answer: "Advanced beamforming algorithms, mutual coupling reduction, frequency reconfigurable designs, compact smartphone MIMO, vehicular communication, and mmWave/THz MIMO optimization."
  },
  {
    question: "What research do Ph.D. students undertake in MIMO antenna systems?",
    answer: "Research includes massive MIMO, hybrid beamforming, reconfigurable intelligent surfaces (RIS), AI-driven adaptive antennas, and contributions to next-generation wireless standards."
  },
  {
    question: "Which tools are typically used in MIMO antenna research?",
    answer: "Tools include CST, HFSS, MATLAB, simulation platforms, and AI frameworks for design and optimization."
  }
];

const MimoAntennaSystemsProject = () => {
  return (
    <div className="ECEProjectDevelopment">
      <Sidebar />
      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">

          <div className="ECEProjectDevelopment-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>MIMO Antenna Systems</li>
              <li>Massive MIMO</li>
              <li>Beamforming Antennas</li>
              <li>Hybrid Beamforming</li>
              <li>Reconfigurable Intelligent Surfaces (RIS)</li>
              <li>mmWave MIMO</li>
              <li>Terahertz Band Antennas</li>
              <li>AI-Optimized Antennas</li>
              <li>Wireless 5G/6G Networks</li>
              <li>IEEE Antenna Research</li>
              <li>Nano Antenna Research Institute</li>
            </ul>
          </div>

          <div className="ECEProjectDevelopment-center">
            <h1>MIMO Antenna Systems – Project Development Center</h1>
            <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Institute</strong> empowers innovative research in MIMO antenna systems for high-capacity, interference-resilient wireless networks including 5G, 6G, and IoT applications aligned with IEEE standards (2023-2025).
              </p>
              <p>
                Our center supports academic and industrial excellence through simulation, hardware prototyping, and AI-enabled optimization of MIMO architectures.
              </p>
            </section>

            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology & Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
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
                      <td>2x2 / 4x4 MIMO</td>
                      <td>Basic multiplexing and diversity</td>
                      <td>Smartphones, Wi-Fi Routers</td>
                      <td>Improved connectivity and throughput</td>
                    </tr>
                    <tr>
                      <td>Massive MIMO (64+ elements)</td>
                      <td>High spectral efficiency</td>
                      <td>5G/6G Base Stations</td>
                      <td>Ultra-high capacity and reduced interference</td>
                    </tr>
                    <tr>
                      <td>Beamforming MIMO</td>
                      <td>Directional signal steering</td>
                      <td>Smart Cities, Vehicular Networks</td>
                      <td>Strong coverage and reliability</td>
                    </tr>
                    <tr>
                      <td>AI-Driven MIMO</td>
                      <td>Intelligent antenna optimization</td>
                      <td>Industry 4.0, Cognitive Networks</td>
                      <td>Optimal resource utilization</td>
                    </tr>
                    <tr>
                      <td>RIS-assisted MIMO</td>
                      <td>Reconfigurable metasurface control</td>
                      <td>Defense, Aerospace</td>
                      <td>Flexible connectivity and cost savings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Focus on fundamental MIMO array design, channel modeling, and prototyping of 2x2 and 4x4 systems using CST and HFSS.
              </p>
            </section>

            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Engage in advanced beamforming, mutual coupling reduction, and frequency-reconfigurable MIMO designs targeting smartphone and vehicular applications.
              </p>
            </section>

            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>
                Research massive MIMO, hybrid beamforming, RIS technology, and AI-based adaptive antenna systems with IEEE publication guidance.
              </p>
            </section>

            <section className="ECEProjectDevelopment-projectTitles">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Advanced Beamforming for 5G Massive MIMO Systems</li>
                <li>Compact MIMO Antenna Arrays for IoT Devices</li>
                <li>RIS-Based Reconfigurable MIMO Architectures</li>
                <li>AI-Optimized Adaptive Antenna Systems</li>
                <li>Millimeter-Wave MIMO Design for 6G Networks</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Institute</h2>
              <p>
                Narpavi Institute offers expert mentorship and research support in MIMO antenna systems, enabling students and researchers to excel in next-generation wireless technologies and produce IEEE-compliant publications.
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
              <li><a href="/adaptive-control">Adaptive Control</a></li>
              <li><a href="/iot-security">IoT Security</a></li>
              <li><a href="/edge-computing">Edge Computing</a></li>
              <li><a href="/cyber-physical">Cyber-Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MimoAntennaSystemsProject;
