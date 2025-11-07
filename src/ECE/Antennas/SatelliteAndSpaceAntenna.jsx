import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
const faqs = [
  {
    question: "What are Satellite and Space Antenna Technologies?",
    answer: "These technologies involve designing deployable, phased array, reflector, and MIMO antennas for satellite and deep-space communication, enabling global connectivity and space exploration."
  },
  {
    question: "What do B.Tech projects focus on in this area?",
    answer: "Students work on fundamental antenna designs including patch arrays, horn antennas, and reflectors for applications such as CubeSats, GPS, and weather satellites."
  },
  {
    question: "What advanced topics are covered in M.Tech projects?",
    answer: "M.Tech projects include phased array antennas, reconfigurable designs, beam-steering for LEO and GEO satellites, compact deployable antennas, and dual-band systems."
  },
  {
    question: "What research areas do Ph.D. projects cover?",
    answer: "Ph.D. researchers explore high-gain deployable reflectors, AI-optimized phased arrays, satellite-to-ground MIMO, and deep-space communication architectures."
  },
  {
    question: "What tools are commonly used for these projects?",
    answer: "Common tools include HFSS, CST, link budget analysis software, and hardware prototyping platforms."
  }
];

const SatelliteSpaceAntennaTechProject = () => {
  return (
    <div className="ECEProjectDevelopment">
      <Sidebar />
      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">

          <div className="ECEProjectDevelopment-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Satellite and Space Antenna Technologies</li>
              <li>Patch and Reflector Antennas</li>
              <li>Phased Array Antennas</li>
              <li>Deployable Antennas</li>
              <li>MIMO Satellite Antennas</li>
              <li>Deep-Space Antennas</li>
              <li>CubeSat Antenna Design</li>
              <li>Satellite Communication Systems</li>
              <li>AI-Optimized Antenna Arrays</li>
              <li>Earth Observation Satellites</li>
              <li>Telemetry and Space Communications</li>
              <li>IEEE Satellite Antenna Research</li>
              <li>Nano Space Research Institute</li>
            </ul>
          </div>

          <div className="ECEProjectDevelopment-center">
            <h1>Satellite and Space Antenna Technologies – Project Development Center</h1>
            <section className="ECEProjectDevelopment-intro">
              <p>
                The Satellite and Space Antenna Technologies – Project Development Center at Narpavi Research Institute focuses on advancing satellite and space antenna systems aligned with IEEE standards (2023–2025), supporting global research and development.
              </p>
              <p>
                Our expertise includes deployable antennas, phased array designs, MIMO architectures, and antenna systems for deep-space communication, equipping students for cutting-edge aerospace projects.
              </p>
            </section>

            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology & Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Satellite Antenna Type</th>
                      <th>Core Feature</th>
                      <th>Industry Applications</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Patch and Reflector Antennas</td>
                      <td>High gain, compact design</td>
                      <td>Weather satellites, GPS, CubeSats</td>
                      <td>Reliable space-ground communication</td>
                    </tr>
                    <tr>
                      <td>Phased Array Antennas</td>
                      <td>Beam steering and frequency agility</td>
                      <td>LEO, MEO, GEO satellites</td>
                      <td>Flexible coverage and adaptive connectivity</td>
                    </tr>
                    <tr>
                      <td>Deployable Antennas</td>
                      <td>Foldable, lightweight structures</td>
                      <td>CubeSats, space missions</td>
                      <td>Compact and efficient deployment</td>
                    </tr>
                    <tr>
                      <td>MIMO Satellite Antennas</td>
                      <td>Multi-channel communication</td>
                      <td>Broadband satellites</td>
                      <td>High capacity and low latency</td>
                    </tr>
                    <tr>
                      <td>Deep-Space Antennas</td>
                      <td>Extremely high gain and low noise</td>
                      <td>Mars missions, planetary communication</td>
                      <td>Enables long-distance communication</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopment-btech">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Focuses on fundamental antenna designs suitable for CubeSats, GPS, and weather satellites using HFSS, CST, and related simulation tools.
              </p>
            </section>

            <section className="ECEProjectDevelopment-mtech">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Engages in phased array and deployable antenna designs, beam steering mechanisms, and compact dual-band systems, emphasizing prototype development and validation.
              </p>
            </section>

            <section className="ECEProjectDevelopment-phd">
              <h2>Ph.D. Project Cycle</h2>
              <p>
                Advanced research involving AI optimization, satellite-to-ground MIMO, and deep-space communication antenna architectures with access to high-end facilities and publication guidance.
              </p>
            </section>

            <section className="ECEProjectDevelopment-projects">
              <h2>IEEE Project Titles (2023–2025)</h2>
              <ul>
                <li>Compact Patch Antennas for CubeSat Missions</li>
                <li>Phased Array Antennas for LEO Satellite Communication</li>
                <li>Deployable Antenna Designs for Nanosatellites</li>
                <li>Massive MIMO Architectures for Broadband Satellites</li>
                <li>Deep-Space Antenna Systems for Mars Missions</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                The institute excels at mentoring students in satellite and space antenna design, combining theoretical insights with practical prototyping to foster industry-ready innovations aligned with IEEE standards.
              </p>
            </section>

            <section className="ECEProjectDevelopment-faqs">
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
              <li><a href="/edge-computing">Edge Computing</a></li>
              <li><a href="/cyber-physical">Cyber-Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SatelliteSpaceAntennaTechProject;
