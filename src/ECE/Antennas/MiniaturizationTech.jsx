import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What are antenna miniaturization techniques?",
    answer: "Methods to reduce antenna size while maintaining performance, such as using fractal geometries, metamaterials, dielectric loading, slotting, and substrate integrated techniques."
  },
  {
    question: "What do B.Tech projects focus on in antenna miniaturization?",
    answer: "Fundamental designs of compact monopole, microstrip, and slot antennas using CST, HFSS, and MATLAB, emphasizing dielectric selection and patch modification."
  },
  {
    question: "What advanced topics are covered in M.Tech antenna miniaturization projects?",
    answer: "Designs involving fractal and metamaterial-inspired antennas, multi-band compact antennas, and optimization for biomedical and wearable applications."
  },
  {
    question: "What are the research areas in Ph.D. antenna miniaturization projects?",
    answer: "Exploration of metasurface integration, dielectric resonator miniaturization, machine learning optimization, and CubeSat-ready antenna designs with IEEE publication support."
  },
  {
    question: "Which tools and platforms are used for antenna miniaturization projects?",
    answer: "Common tools include CST, HFSS, MATLAB, CAD software, and optimization frameworks."
  }
];

const AntennaMiniaturizationProject = () => {
  return (
    <div className="ECEProjectDevelopment">
      <Sidebar />
      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">

          <div className="ECEProjectDevelopment-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Antenna Miniaturization Techniques</li>
              <li>Fractal Antenna Design</li>
              <li>Metamaterial Antennas</li>
              <li>Dielectric Loading Methods</li>
              <li>Slot Antenna Design</li>
              <li>Substrate Integrated Antennas</li>
              <li>Compact Antennas for IoT</li>
              <li>Biomedical Antennas</li>
              <li>CubeSat Antennas</li>
              <li>Wireless Communication Antennas</li>
              <li>IEEE Antenna Projects</li>
              <li>Nano Research Institute Antenna Labs</li>
            </ul>
          </div>

          <div className="ECEProjectDevelopment-center">
            <h1>Antenna Miniaturization Techniques – Project Development Center</h1>
            <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Research Institute</strong> fosters innovation in antenna miniaturization, guiding students through compact, efficient design techniques vital for modern IoT, biomedical, and satellite communication systems.
              </p>
              <p>
                Our projects focus on the latest IEEE research trends (2023–2025) and provide hands-on training from simulation to prototype development.
              </p>
            </section>

            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology – Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Technique</th>
                      <th>Core Concept</th>
                      <th>Industry Application</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fractal Geometry</td>
                      <td>Self-similar compact design</td>
                      <td>IoT, Wearables</td>
                      <td>Size reduction with multiband capability</td>
                    </tr>
                    <tr>
                      <td>Metamaterial Antennas</td>
                      <td>Engineered negative-index materials</td>
                      <td>5G/6G devices, CubeSats</td>
                      <td>High performance in compact form</td>
                    </tr>
                    <tr>
                      <td>Dielectric Loading</td>
                      <td>High permittivity materials</td>
                      <td>Biomedical implants, RFID</td>
                      <td>Miniaturization with trade-off in efficiency</td>
                    </tr>
                    <tr>
                      <td>Slot Antennas</td>
                      <td>Introducing slots in patch antennas</td>
                      <td>Smartphones, Wireless Systems</td>
                      <td>Size reduction and bandwidth enhancement</td>
                    </tr>
                    <tr>
                      <td>Substrate Integrated</td>
                      <td>Embedded antenna structures</td>
                      <td>Satellite communication, Aerospace</td>
                      <td>Lightweight and space-saving solutions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Project Cycle</h2>
              <p>Design and simulation of compact antennas using CST, HFSS, and MATLAB with emphasis on dielectric selection and patch modifications for miniaturization.</p>
            </section>

            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Project Cycle</h2>
              <p>Advanced antenna designs employing fractal geometries, metamaterials, and multiband optimization for biomedical and wearable applications.</p>
            </section>

            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>Cutting-edge research on metasurface antennas, dielectric resonators, machine learning optimized designs, and CubeSat-ready antennas with IEEE journal support.</p>
            </section>

            <section className="ECEProjectDevelopment-projectTitles">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Fractal Geometry Antenna for IoT Applications</li>
                <li>Metamaterial Inspired Compact Antenna Design</li>
                <li>Dielectric Loading Techniques in Biomedical Antennas</li>
                <li>Slot Antenna Miniaturization for Smartphones</li>
                <li>Substrate Integrated Antennas for Aerospace Communication</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute provides specialized mentorship and research support in antenna miniaturization techniques, fostering innovations that meet industry standards and publication goals.</p>
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

export default AntennaMiniaturizationProject;
