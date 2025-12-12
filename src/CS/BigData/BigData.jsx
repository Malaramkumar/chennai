import "./BigData.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";

const faqs = [
  {
    question: "What services does the Big Data Project Development Center offer?",
    answer: "Narpavi Research Institute’s Big Data Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) Big Data projects, focusing on real-time analytics, machine learning, and distributed architectures."
  },
  {
    question: "What types of Big Data projects are supported?",
    answer: "We support B.Tech projects (sentiment analysis, predictive models), M.Tech projects (real-time analytics, edge computing), and Ph.D. projects (federated learning, scalable data pipelines) for industries like healthcare, smart cities, and finance."
  },
  {
    question: "Which technologies are used in Big Data project development?",
    answer: "Our stack includes Apache Hadoop, Spark, Kafka, NoSQL databases (MongoDB, Cassandra), cloud platforms (AWS, Azure, GCP), and AI tools like TensorFlow for scalable data solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025), covering areas like stream processing, privacy-preserving analytics, and AI-driven Big Data, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer: "We offer end-to-end guidance, including topic selection, architecture design, implementation, testing, documentation, and IEEE/SCI journal publication support."
  }
];

const BigDataProjectDevelopmentCenter = () => {
  return (
    <div className="BigDataProjectDevelopmentCenter">
      <Sidebar />
      <div className="BigDataProjectDevelopmentCenter-main">
        <div className="BigDataProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="BigDataProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Big Data Project Development</li>
              <li>Narpavi Technology</li>
              <li>Narpavi Research Institute</li>
              <li>IEEE Big Data Projects 2023–2025</li>
              <li>B.Tech Big Data Projects</li>
              <li>M.Tech Big Data Projects</li>
              <li>Ph.D. Big Data Research</li>
              <li>Hadoop Projects</li>
              <li>Apache Spark Projects</li>
              <li>NoSQL Big Data Applications</li>
              <li>Cloud Big Data Solutions</li>
              <li>Industry 4.0 Data Analytics</li>
              <li>Real-Time Big Data Processing</li>
              <li>AI in Big Data</li>
              <li>IEEE Big Data Paper Support</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="BigDataProjectDevelopmentCenter-center">
            <h1>Big Data – Project Development Center</h1>

            <section className="BigDataProjectDevelopmentCenter-intro">
              <p>
             <strong> Big Data – Project Development Center</strong> is at the forefront of innovation, guiding aspiring engineers and researchers toward excellence in data-driven solutions. At Narpavi Research Institute, we support B.Tech, M.Tech, and Ph.D. students from across the globe in crafting impactful projects that integrate both software and hardware dimensions of Big Data. Our specialized training and mentorship are rooted in IEEE Transactions topics from 2023 to 2025, ensuring that every project aligns with the most recent technological trends.
              </p>
              <p>
                With data growing at an unprecedented scale, Big Data – Project Development Center plays a pivotal role in bridging academic learning with industrial needs. Our expertise covers real-time analytics, machine learning integration, and large-scale distributed architectures, allowing students to transform theoretical concepts into industry-ready solutions. Whether the objective is developing a sentiment analysis engine for e-commerce or deploying predictive maintenance systems for manufacturing, our approach ensures that each project is both technically advanced and practically relevant.
              </p>
              <p>
                Through structured guidance, advanced tools, and IEEE-aligned methodologies, Big Data – Project Development Center helps students not only complete their academic requirements but also gain skills that propel them into successful careers. By combining cutting-edge technologies such as Apache Hadoop, Apache Spark, Apache Kafka, NoSQL databases, and Cloud Big Data platforms, we prepare students to tackle real-world problems with confidence.
              </p>
            </section>

            <section className="BigDataProjectDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="BigDataProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Big Data Technology Domain</th>
                      <th>Relevant Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Hadoop Ecosystem</td><td>Enterprise Data Warehousing, Financial Risk Analytics</td><td>B.Tech</td><td>Hadoop, HDFS, MapReduce</td><td>Medium</td></tr>
                    <tr><td>Spark with MLlib</td><td>Real-Time Fraud Detection, IoT Analytics</td><td>B.Tech/M.Tech</td><td>Apache Spark, MLlib</td><td>High</td></tr>
                    <tr><td>NoSQL Databases</td><td>Social Media Data Analysis, E-commerce Personalization</td><td>B.Tech/M.Tech</td><td>MongoDB, Cassandra</td><td>High</td></tr>
                    <tr><td>Data Lakes & Pipelines</td><td>Healthcare Data Integration, Genomics</td><td>M.Tech/Ph.D.</td><td>AWS S3, Azure Data Lake</td><td>Very High</td></tr>
                    <tr><td>Stream Processing</td><td>Real-Time Sensor Data Monitoring, Smart Cities</td><td>M.Tech/Ph.D.</td><td>Apache Kafka, Flink</td><td>Very High</td></tr>
                    <tr><td>Cloud Big Data Services</td><td>Scalable Business Intelligence, Retail Forecasting</td><td>M.Tech/Ph.D.</td><td>AWS, Azure, GCP</td><td>Expert</td></tr>
                    <tr><td>Deep Learning for Big Data</td><td>Autonomous Systems, NLP</td><td>Ph.D.</td><td>TensorFlow, PyTorch</td><td>Expert</td></tr>
                    <tr><td>Privacy-Preserving Big Data</td><td>Secure Healthcare Records, Government Compliance</td><td>Ph.D.</td><td>Federated Learning, Differential Privacy</td><td>Expert</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

              <section className="BigDataProjectDevelopmentCenter-btech">
              <h2>B.Tech Big Data Project Development</h2>
              <p>
                For undergraduate students, our center focuses on practical Big Data projects like sentiment analysis or predictive modeling, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Hadoop, Spark, or NoSQL databases</li>
                <li>Features like data ingestion, processing, and visualization</li>
                <li>Testing and validation with real-world datasets</li>
                <li>Documentation and presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, scalable architectures, and academic-ready output.
              </p>
            </section>

            <section className="BigDataProjectDevelopmentCenter-mtech">
              <h2>M.Tech Big Data Project Development</h2>
              <p>
                For postgraduate students, we develop advanced Big Data projects in real-time analytics, edge computing, and privacy-preserving systems, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with Apache Flink, Spark, or TensorFlow</li>
                <li>Features like scalable pipelines or federated learning</li>
                <li>Benchmarking and cloud-based deployment</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade solutions.
              </p>
            </section>

            <section className="BigDataProjectDevelopmentCenter-phd">
              <h2>Ph.D. Big Data Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering Big Data research in distributed systems, AI-driven analytics, and privacy-preserving frameworks.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced algorithm design with Hadoop or Kafka</li>
                <li>Integration with AI, IoT, or blockchain</li>
                <li>Validation with large-scale or real-world datasets</li>
                <li>Publication assistance for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="BigDataProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Big Data Project Titles (2023–2025)</h2>
              <ul>
                <li>Real-Time Anomaly Detection in IoT-Enabled Smart Cities Using Federated Learning – 2023</li>
                <li>Privacy-Preserving Patient Data Analytics for Cloud-Based Healthcare Systems – 2023</li>
                <li>Scalable Distributed Stream Processing for Financial Fraud Detection – 2024</li>
                <li>Energy-Efficient Big Data Processing for Autonomous Vehicles – 2024</li>
                <li>Real-Time Disaster Prediction and Response System Using Big Data Analytics – 2025</li>
                <li>Multi-Modal Big Data Integration for Precision Agriculture – 2025</li>
              </ul>
            </section>

            <section className="BigDataProjectDevelopmentCenter-excellence">
              <h2>Excellence in Big Data Project Development</h2>
              <p>
                Narpavi Research Institute’s Big Data – Project Development Center integrates cutting-edge IEEE research with hands-on project development, fostering scalable and innovative data-driven solutions.
              </p>
              <p>
                Our global mentorship ensures students excel in creating impactful Big Data systems for academia and industry, from real-time analytics to privacy-preserving frameworks.
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

          {/* Right: Subpage Links */}
          <div className="BigDataProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
           <ul class="department-links">
  <li><a href="/department/static-web-application">Static Web Application</a></li>
  <li><a href="/department/dynamic-web-applications">Dynamic Web Applications</a></li>
  <li><a href="/department/mobile-app">Mobile App Development</a></li>
  <li><a href="/department/animations-project">Animations Project</a></li>
  <li><a href="/department/ai-project">AI Project</a></li>
  <li><a href="/department/data-science">Data Science</a></li>
  <li><a href="/department/big-data">Big Data</a></li>
  <li><a href="/department/blockchain">Blockchain</a></li>
  <li><a href="/department/devops">DevOps</a></li>
  <li><a href="/department/networking">Networking</a></li>
  <li><a href="/department/image-processing">Image Processing</a></li>
  <li><a href="/department/nlp">Natural Language Processing (NLP)</a></li>
  <li><a href="/department/cloud-computing">Cloud Computing</a></li>
  <li><a href="/department/cybersecurity">Cybersecurity</a></li>
</ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDataProjectDevelopmentCenter;