import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What is the focus of the Robotic Vision and Sensor Fusion Project Development Center?",
    answer: "The Robotic Vision and Sensor Fusion Project Development Center at Narpavi Research Institute focuses on IEEE-aligned projects (2023–2025) integrating robotic vision and multi-sensor fusion for autonomous, industrial, healthcare, agricultural, and defense robots."
  },
  {
    question: "What types of projects are supported for different academic levels?",
    answer: "B.Tech projects focus on vision-based robots using Raspberry Pi and Arduino, M.Tech projects focus on deep learning, LiDAR-camera fusion, and SLAM, while Ph.D. projects emphasize multi-modal sensor fusion, AI-enhanced SLAM, and human-robot collaborative perception systems."
  },
  {
    question: "Which technologies and tools are used in robotic vision and sensor fusion projects?",
    answer: "Technologies include deep learning (YOLO, Faster R-CNN), SLAM, sensor fusion frameworks, LiDAR, IMU, GPS integration, ROS, MATLAB/Simulink, Gazebo, TensorFlow, and Edge AI platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are designed based on IEEE Transactions and Conferences (2023–2025), ensuring alignment with global robotics research trends in vision, SLAM, AI-driven fusion, and autonomous mobility."
  },
  {
    question: "What academic support is provided?",
    answer: "We offer complete support including topic selection, algorithm development, simulation with ROS/Gazebo/MATLAB, prototype building, IEEE-format documentation, and journal publication in Scopus/SCI/IEEE venues."
  }
];

const ECERoboticVisionSensorFusionProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <Sidebar />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          
          {/* Left: Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Robotic Vision Projects</li>
              <li>Sensor Fusion Projects</li>
              <li>AI Robotics IEEE Projects</li>
              <li>SLAM Robotics Projects</li>
              <li>LiDAR-Camera Fusion Robots</li>
              <li>Autonomous Vehicle Vision Projects</li>
              <li>Deep Learning Robotic Vision</li>
              <li>Multi-Sensor Fusion Robotics</li>
              <li>IEEE Robotics Project Development 2023–2025</li>
              <li>Narpavi Research Institute Robotics</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Robotic Vision and Sensor Fusion – Project Development Center</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> introduces the <em>Excellence in Robotic Vision and Sensor Fusion Project Development</em>, a dedicated center for building intelligent, perception-driven robotic systems. Our projects align with IEEE standards (2023–2025) and support B.Tech, M.Tech, and Ph.D. scholars in creating autonomous robots with advanced perception and decision-making.
              </p>
              <p>
                Robotic vision enables machines to interpret images, detect objects, and recognize environments, while sensor fusion integrates data from multiple sensors such as cameras, LiDAR, IMU, ultrasonic, and GPS. Together, they empower robots for industrial, healthcare, agricultural, and defense applications.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Projects emphasize basic robotic vision and sensor fusion using Raspberry Pi, Arduino, and OpenCV.
              </p>
              <ul>
                <li>IEEE 2023–2025 project selection and literature review</li>
                <li>Line-following robots with vision guidance</li>
                <li>Obstacle-detecting drones using ultrasonic sensors</li>
                <li>IoT-enabled surveillance robots with camera modules</li>
                <li>Documentation in IEEE format</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Advanced robotic vision and fusion strategies using AI and simulation tools.
              </p>
              <ul>
                <li>Deep learning-based object detection (YOLO, Faster R-CNN)</li>
                <li>LiDAR-camera sensor fusion for autonomous vehicles</li>
                <li>SLAM-based navigation and mapping</li>
                <li>Tools: ROS, Gazebo, MATLAB/Simulink, TensorFlow</li>
                <li>Scopus/SCI indexed publication support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Research-driven robotic vision and sensor fusion frameworks for cutting-edge innovation.
              </p>
              <ul>
                <li>Multi-modal sensor fusion frameworks</li>
                <li>AI-enhanced SLAM and real-time mapping</li>
                <li>Vision-based digital twin systems</li>
                <li>Swarm robots with fusion-based collaborative control</li>
                <li>Defense and healthcare robotic vision solutions</li>
                <li>IEEE/SCI journal publication assistance</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deep Learning-Based Vision</td>
                      <td>Autonomous Vehicles, Drones</td>
                      <td>Object detection & environment mapping</td>
                    </tr>
                    <tr>
                      <td>LiDAR & Camera Fusion</td>
                      <td>Smart Robots, Industry 4.0</td>
                      <td>Precise navigation in complex spaces</td>
                    </tr>
                    <tr>
                      <td>IMU & GPS Integration</td>
                      <td>Agricultural Robots, Drones</td>
                      <td>Reliable localization & path tracking</td>
                    </tr>
                    <tr>
                      <td>Multi-Sensor Fusion Frameworks</td>
                      <td>Defense Robotics, Surveillance</td>
                      <td>High accuracy under uncertainty</td>
                    </tr>
                    <tr>
                      <td>Edge AI for Vision Processing</td>
                      <td>Healthcare & Assistive Robots</td>
                      <td>Low-latency decision-making</td>
                    </tr>
                    <tr>
                      <td>3D Vision & SLAM</td>
                      <td>Smart Warehouses, Service Robots</td>
                      <td>Real-time mapping & autonomous mobility</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Deep Learning-Based Robotic Vision for Autonomous Drones (2023)</li>
                <li>LiDAR-Camera Sensor Fusion for Next-Gen Autonomous Vehicles (2023)</li>
                <li>AI-Driven Multi-Sensor Fusion for Robotic Healthcare Assistants (2024)</li>
                <li>SLAM-Enabled Mobile Robots with Vision and IMU Fusion (2024)</li>
                <li>Edge AI for Real-Time Robotic Vision Processing in Smart Factories (2024)</li>
                <li>Multi-Agent Swarm Robotics with Cooperative Sensor Fusion (2025)</li>
                <li>Human-Robot Collaborative Vision and Sensor Fusion Frameworks (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we specialize in robotic vision and sensor fusion project development, providing IEEE-standard academic and industrial solutions. Our projects combine AI, robotics, IoT, and real-time control to deliver world-class robotic innovations.
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

          {/* Right: Related Services */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/ai-powered-robotic-control-systems-project-development">AI-Powered Robotic Control Systems Project Development</a></li>
              <li><a href="/control-in-cyber-physical-systems-project-development">Control in Cyber-Physical Systems Project Development</a></li>
              <li><a href="/adaptive-nonlinear-control-systems-project-development">Adaptive and Nonlinear Control Systems Project Development</a></li>
              <li><a href="/secure-iot-architectures-project-development">Secure IoT Architectures Project Development</a></li>
              <li><a href="/edge-fog-computing-iot-project-development">Edge and Fog Computing in IoT Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECERoboticVisionSensorFusionProjectDevelopmentCenter;
