import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What are antennas for IoT and wearable devices?",
    answer: "These are compact, flexible, and energy-efficient antennas designed for smartwatches, fitness trackers, biomedical implants, RFID tags, and smart home applications."
  },
  {
    question: "What topics do B.Tech projects cover in this domain?",
    answer: "Basic designs of low-profile patch antennas, monopole antennas for IoT nodes, and textile antennas for wearables using CST, HFSS, and ADS."
  },
  {
    question: "What advanced areas are explored in M.Tech projects?",
    answer: "M.Tech projects focus on flexible and reconfigurable antennas, multi-band designs, and machine learning-based optimization for medical and consumer wearable applications."
  },
  {
    question: "What are the research focuses in Ph.D. projects?",
    answer: "Research includes biocompatible substrates, energy harvesting antennas, WBAN-optimized designs, and AI-driven antenna performance optimization."
  },
  {
    question: "Which tools are commonly used for antenna design in IoT and wearables?",
    answer: "Common tools include CST, HFSS, ADS, along with ML frameworks for optimization."
  }
];

const AntennasIoTWearableDevicesProject = () => {
  return (
    <div className="ECEProjectDevelopment">
      <Sidebar />
      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">
          <div className="ECEProjectDevelopment-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Antennas for IoT and Wearable Devices</li>
              <li>Textile/Fabric Antennas</li>
              <li>Implantable Antennas</li>
              <li>Reconfigurable Wearable Antennas</li>
              <li>RFID/Tag Antennas</li>
              <li>WBAN Optimized Antennas</li>
              <li>Flexible Antenna Design</li>
              <li>Biocompatible Materials</li>
              <li>IoT Antenna Miniaturization</li>
              <li>Wearable Antenna Optimization</li>
              <li>IEEE Wearable Antenna Projects</li>
              <li>Nano Research Institute IoT Antennas</li>
            </ul>
          </div>
          <div className="ECEProjectDevelopment-center">
            <h1>Antennas for IoT and Wearable Devices – Project Development Center</h1>
            <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Institute</strong> provides end-to-end support in designing compact, flexible, and high-performance antennas for IoT and wearable applications aligned with IEEE standards (2023 – 2025).
              </p>
              <p>
                Our focus lies in miniaturization, energy efficiency, multi-band operation, and integration of biocompatible materials for real-world wearable and biomedical devices.
              </p>
            </section>
            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology & Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Antenna Type</th>
                      <th>Core Feature</th>
                      <th>Industry Applications</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Textile/Fabric Antennas</td>
                      <td>Flexible, washable</td>
                      <td>Smart Clothing, Fitness Devices</td>
                      <td>Lightweight, user-friendly communication</td>
                    </tr>
                    <tr>
                      <td>Implantable Antennas</td>
                      <td>Biocompatible materials</td>
                      <td>Biomedical Implants</td>
                      <td>Safe data transfer inside the body</td>
                    </tr>
                    <tr>
                      <td>Reconfigurable Wearable Antennas</td>
                      <td>Dynamic frequency and pattern adjustment</td>
                      <td>Smartwatches, AR/VR</td>
                      <td>Adaptive connectivity for varying environments</td>
                    </tr>
                    <tr>
                      <td>RFID/Tag Antennas</td>
                      <td>Miniaturized and low cost</td>
                      <td>Smart homes, Logistics</td>
                      <td>Reliable short-range communication</td>
                    </tr>
                    <tr>
                      <td>WBAN Optimized Antennas</td>
                      <td>Body-centric design</td>
                      <td>Healthcare, Sports Analytics</td>
                      <td>Efficient communication within personal networks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Cycle</h2>
              <p>
                Students learn antenna design concepts and prototype low-profile patch, monopole, and textile antennas using CST, HFSS, and ADS.
              </p>
            </section>
            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Cycle</h2>
              <p>
                Advanced antenna designs including flexible, reconfigurable, and multi-band models with a focus on wearable and biomedical applications, using ML for optimization and practical prototyping.
              </p>
            </section>
            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Cycle</h2>
              <p>
                Research advances on biocompatible antennas, energy harvesting, WBAN communication, and AI-driven optimization techniques, supported by state-of-the-art facilities for prototyping and validation.
              </p>
            </section>
            <section className="ECEProjectDevelopment-projects">
              <h2>IEEE Project Titles (2023 - 2025)</h2>
              <ul>
                <li>Flexible Textile Antennas for Smart Clothing</li>
                <li>Biocompatible Implantable Antenna Design</li>
                <li>Reconfigurable Antennas for Wearable Devices</li>
                <li>RFID Tag Antennas for Smart Logistics</li>
                <li>WBAN Optimized Antennas for Healthcare Monitoring</li>
              </ul>
            </section>
            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Institute</h2>
              <p>
                Narpavi Institute offers premier support for IoT and wearable antenna design, fostering innovation and real-world applications aligned with IEEE standards and industry needs.
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

export default AntennasIoTWearableDevicesProject;
