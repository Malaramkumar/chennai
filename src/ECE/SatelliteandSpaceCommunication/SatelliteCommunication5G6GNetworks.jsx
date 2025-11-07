import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What is the significance of Satellite Communication in 5G/6G networks?",
    answer: "It enables global connectivity with ultra-low latency and high-speed data transfer by integrating satellites into 5G/6G infrastructures, extending coverage to remote and oceanic areas."
  },
  {
    question: "What B.Tech projects focus on satellite communication for 5G/6G?",
    answer: "Fundamentals such as LEO satellite communication, satellite backhaul simulation, smart antenna beam-switching, and network slicing for satellite-assisted IoT using MATLAB, NS3, Python, and GNURadio."
  },
  {
    question: "What advanced research do M.Tech projects undertake?",
    answer: "Satellite-terrestrial integration, QoS-aware resource allocation, AI/ML beamforming, handover optimization, and channel modeling for mmWave satellite links using CST, Ansys HFSS, NS3, and OPNET."
  },
  {
    question: "What are the Ph.D. research themes in satellite 5G/6G?",
    answer: "Non-Terrestrial Network architectures, LEO mega-constellation models, terahertz-band satellite systems, and quantum key distribution over satellite 6G networks aligned with IEEE publications."
  },
  {
    question: "Which tools and platforms support research in satellite 5G/6G communication?",
    answer: "Tools like MATLAB, NS3, Python, GNURadio, CST, Ansys HFSS, OPNET, TensorFlow, and Qiskit are widely used for modeling, simulation, and AI/quantum experimentation."
  }
];

const SatelliteCommunication5G6GProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Satellite Communication for 5G Networks</li>
              <li>Satellite Communication for 6G Networks</li>
              <li>Non-Terrestrial Networks Research</li>
              <li>LEO Satellite Communication Projects</li>
              <li>Beamforming in Satellite 5G</li>
              <li>AI in Satellite Communication</li>
              <li>Terahertz Satellite Links</li>
              <li>Quantum-Secure 6G Communication</li>
              <li>Satellite IoT Integration</li>
              <li>Satellite 5G/6G Project Ideas</li>
              <li>IEEE Satellite Communication Projects</li>
              <li>Narpavi Research Institute Space Communication</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Satellite Communication for 5G/6G Networks – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> specializes in advanced satellite communication research for next-generation 5G/6G networks, focusing on NTN architectures, LEO constellations, beamforming, and quantum-secure communication.
              </p>
              <p>
                We support B.Tech, M.Tech, and Ph.D. scholars with hands-on training and research assistance for hardware implementation, simulations, and IEEE-standard publications in this dynamic field.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Satellite-5G Integration</td>
                      <td>Backhaul, coverage extension</td>
                      <td>Rural broadband, disaster recovery</td>
                      <td>NS3, MATLAB</td>
                    </tr>
                    <tr>
                      <td>LEO Constellations</td>
                      <td>Low-latency global internet</td>
                      <td>Starlink, OneWeb, Amazon Kuiper</td>
                      <td>Python, GNURadio</td>
                    </tr>
                    <tr>
                      <td>AI-Driven Beamforming</td>
                      <td>Adaptive satellite antennas</td>
                      <td>5G/6G network operators</td>
                      <td>TensorFlow, CST</td>
                    </tr>
                    <tr>
                      <td>mmWave/THz Links</td>
                      <td>High-speed satellite data transfer</td>
                      <td>Future 6G services</td>
                      <td>MATLAB, HFSS</td>
                    </tr>
                    <tr>
                      <td>NTN in 6G</td>
                      <td>Hybrid terrestrial-satellite</td>
                      <td>Smart cities, IoT ecosystems</td>
                      <td>NS3, OPNET</td>
                    </tr>
                    <tr>
                      <td>QKD Over Satellites</td>
                      <td>Quantum-secure communication</td>
                      <td>Defense, finance, healthcare</td>
                      <td>MATLAB, Qiskit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Satellite 5G/6G</h2>
              <p>
                Fundamentals of LEO satellite communication for 5G, satellite backhaul simulation, beam-switching antennas, and network slicing demonstrations using MATLAB, NS3, Python, and GNURadio.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Satellite 5G/6G</h2>
              <p>
                Advanced satellite-terrestrial integration, QoS-aware resource allocation, AI/ML beamforming and handover optimization, and channel modeling for mmWave satellite links using MATLAB, CST, Ansys HFSS, NS3, and OPNET.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Satellite 5G/6G</h2>
              <p>
                Research on NTN architectures beyond 5G, LEO mega-constellation communications, terahertz-band satellite systems, and quantum key distribution over satellite-based 6G networks aligned with IEEE publication standards.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Simulation of LEO Satellite Backhaul for Rural 5G Networks (2023)</li>
                <li>AI-Based Beamforming Optimization for Satellite–5G Communication (2023)</li>
                <li>Resource Allocation Models for Non-Terrestrial 5G Networks (2024)</li>
                <li>Terahertz Band Satellite Links for 6G Systems (2024)</li>
                <li>Quantum Key Distribution over Satellite-Enabled 6G Networks (2025)</li>
                <li>Satellite-Assisted IoT Connectivity Using Non-Terrestrial Networks (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers expert guidance in satellite communication for 5G/6G networks, focusing on latest architectures, AI-driven optimizations, and quantum-secure technologies, supporting students to produce IEEE-standard research and publications.
              </p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, index) => (
                  <details key={index}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right: Related Services */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/energy-efficient-routing-wsn-project-development">Energy-Efficient Routing in WSN Project Development</a></li>
              <li><a href="/adaptive-nonlinear-control-systems-project-development">Adaptive and Nonlinear Control Systems Project Development</a></li>
              <li><a href="/secure-iot-architectures-project-development">Secure IoT Architectures Project Development</a></li>
              <li><a href="/edge-fog-computing-iot-project-development">Edge and Fog Computing in IoT Project Development</a></li>
              <li><a href="/control-in-cyber-physical-systems-project-development">Control in Cyber-Physical Systems Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatelliteCommunication5G6GProject;
