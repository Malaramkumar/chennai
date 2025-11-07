import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What are Antenna Systems for Space Applications?",
    answer: "These are specialized antennas designed for satellite communication, GNSS, CubeSats, and deep-space missions, focusing on reliability and high performance in harsh environments."
  },
  {
    question: "What do B.Tech projects in antenna systems cover?",
    answer: "Projects focus on microstrip patch antennas for satellites, compact antennas for CubeSats, and circularly polarized antennas for GNSS, using tools like HFSS, CST Microwave Studio, and MATLAB."
  },
  {
    question: "What advanced research is pursued in M.Tech antenna projects?",
    answer: "Research includes phased array antennas, reconfigurable antennas for 5G satellite communication, high-gain antennas for inter-satellite links, and dielectric resonator antennas using HFSS, CST, FEKO, and MATLAB."
  },
  {
    question: "What topics are focused on in Ph.D. antenna research?",
    answer: "Ph.D. research includes AI-optimized antenna designs, metamaterial antennas for miniaturization, reconfigurable phased arrays, and deployable antennas for nanosatellites aiming for IEEE journal publications."
  },
  {
    question: "Which tools and platforms are commonly used for antenna design projects?",
    answer: "Tools include HFSS, CST Microwave Studio, FEKO, MATLAB, CAD tools, and AI frameworks for simulation, optimization, and prototyping."
  }
];

const AntennaSystemsSpaceApplicationsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Satellite Antenna Projects</li>
              <li>CubeSat Antenna Design</li>
              <li>Phased Array Antenna Research</li>
              <li>AI in Antenna Systems</li>
              <li>GNSS Antenna Projects</li>
              <li>Metamaterial Antenna Design</li>
              <li>Reconfigurable Antennas for Space</li>
              <li>IEEE Antenna Research Papers</li>
              <li>Space Communication Antenna Projects</li>
              <li>Narpavi Research Institute Antenna Guidance</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Antenna Systems for Space Applications – Project Development Center</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> specializes in antenna system design and research for space applications, supporting projects aligned with IEEE standards (2023–2025) across satellite communication, GNSS, and CubeSat domains.
              </p>
              <p>
                Our expertise includes miniaturized, high-gain, reconfigurable, and AI-driven antennas suited for modern aerospace and telecommunication needs.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Antenna Type</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microstrip Patch</td>
                      <td>Low-profile satellite antennas</td>
                      <td>CubeSats, GNSS</td>
                      <td>HFSS, CST</td>
                    </tr>
                    <tr>
                      <td>Phased Array</td>
                      <td>Beam steering and adaptive coverage</td>
                      <td>5G/6G satellites, space missions</td>
                      <td>HFSS, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Dielectric Resonator</td>
                      <td>High efficiency</td>
                      <td>Deep-space communication</td>
                      <td>FEKO, CST</td>
                    </tr>
                    <tr>
                      <td>Metamaterial Antennas</td>
                      <td>Miniaturization and high gain</td>
                      <td>CubeSats, IoT satellites</td>
                      <td>CST, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Reconfigurable Antennas</td>
                      <td>Frequency agility</td>
                      <td>Defense, space telecom</td>
                      <td>HFSS, AI frameworks</td>
                    </tr>
                    <tr>
                      <td>Deployable Antennas</td>
                      <td>Lightweight and compact</td>
                      <td>Nanosatellites</td>
                      <td>CAD tools, CST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Design and simulation of microstrip patch antennas for satellite links, compact CubeSat antenna design, and circularly polarized GNSS antennas using HFSS, CST, and MATLAB.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Advanced antenna designs including phased array antennas, reconfigurable antennas for 5G satellite communication, high-gain inter-satellite links, and dielectric resonator antennas using HFSS, CST, FEKO, and MATLAB.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Research on AI-optimized antenna design for deep-space, metamaterial-based miniaturized antennas, adaptive phased arrays, and deployable nanosatellite antennas with publication goals in IEEE journals.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Compact Microstrip Antenna for CubeSat GNSS Applications (2023)</li>
                <li>High-Gain Phased Array Antenna for Inter-Satellite Links (2023)</li>
                <li>Reconfigurable Antenna Design for 5G/6G Satellite Networks (2024)</li>
                <li>AI-Driven Antenna Optimization for Deep-Space Communication (2024)</li>
                <li>Metamaterial Antenna for Miniaturized Satellite Systems (2025)</li>
                <li>Deployable Lightweight Antenna for Nanosatellite Missions (2025)</li>
              </ul>
            </section>
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides expert mentorship and project guidance in antenna systems, focusing on design, simulation, and innovative solutions aligned with global aerospace research and IEEE standards.
              </p>
            </section>
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
                    "mainEntity": faqs.map((faq) => ({
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

export default AntennaSystemsSpaceApplicationsProject;
