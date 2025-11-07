import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";  

const faqs = [
  {
    question: "What services does the Robotic Process Automation (RPA) Project Development Center offer?",
    answer: "We provide B.Tech, M.Tech, and Ph.D. scholars IEEE-aligned (2023–2025) support in creating RPA workflows, AI-enabled bots, task automation, ERP/CRM integration, cloud-based automation systems, and support for IEEE/Scopus/SCI publications."
  },
  {
    question: "What types of RPA projects are supported?",
    answer: "B.Tech projects focus on simple bots (data entry, invoice processing, report generation). M.Tech projects integrate AI/ML-enabled RPA with ERP/CRM or cloud. Ph.D. projects explore cognitive RPA, multi-agent workflows, hybrid human-AI systems, and secure industrial RPA frameworks."
  },
  {
    question: "Which tools and platforms are used?",
    answer: "UiPath, Automation Anywhere, Blue Prism, Python, TensorFlow/PyTorch, cloud RPA platforms, ERP/CRM integrations (SAP, Salesforce), and APIs for automation workflows."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer: "Projects follow IEEE-aligned (2023–2025) topics on intelligent automation, secure RPA ecosystems, AI-based bots, and Industry 4.0 digital transformation strategies."
  },
  {
    question: "What academic support is provided?",
    answer: "End-to-end project guidance: IEEE topic selection, RPA tool training, AI integration, real workflow prototyping, IEEE-style documentation, and journal publication support."
  }
];

const EEERpaProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      <Sidebar/>
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* 🔑 Left Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Robotic Process Automation Project Development Center</li>
              <li>RPA IEEE Projects</li>
              <li>Industrial Automation with RPA</li>
              <li>Business Process Automation Projects</li>
              <li>AI-Enabled RPA Projects</li>
              <li>Cloud RPA for Industry</li>
              <li>Cognitive RPA Research Projects</li>
              <li>RPA B.Tech Projects</li>
              <li>RPA M.Tech Projects</li>
              <li>Ph.D. RPA Projects</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* 📑 Center Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Robotic Process Automation (RPA) – Project Development Support</h1>
            
            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                The <strong>RPA Project Development Center at Narpavi Research Institute</strong> provides researchers with 
                IEEE-aligned (2023–2025) project guidance in automating workflows, building smart bots, and optimizing processes using RPA tools integrated with AI/ML. 
              </p>
              <p>
                Scholars explore industry-relevant projects for finance, healthcare, IT, supply chains, and smart factories, contributing to the digital workforce evolution.
              </p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Robotic Process Automation</h2>
              <ul>
                <li>Automates repetitive, rule-based business processes.</li>
                <li>Reduces errors and improves operational efficiency.</li>
                <li>Integrates with ERP, CRM, and manufacturing systems.</li>
                <li>Provides scalable, digital workforce automation.</li>
                <li>Combines with AI/ML for intelligent decision-making automation.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech RPA Projects</h2>
              <ul>
                <li>Invoice processing bots using RPA tools</li>
                <li>Data entry and reporting automation</li>
                <li>Email management bots</li>
                <li>Basic task automation aligned with IEEE research</li>
              </ul>
              <p>Focus: hands-on introduction to RPA development with real-world use cases.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech RPA Projects</h2>
              <ul>
                <li>AI/ML-enhanced RPA bots for predictive decision-making</li>
                <li>Cloud-hosted RPA workflows for enterprise systems</li>
                <li>ERP/CRM integrated automation aligned with IEEE trends</li>
                <li>Secure industrial RPA implementations</li>
              </ul>
              <p>Focus: advanced ML-enabled RPA solutions integrating with industrial and enterprise systems.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D RPA Projects</h2>
              <ul>
                <li>Cognitive RPA with self-learning bots</li>
                <li>Human-AI hybrid collaborative automation</li>
                <li>Multi-agent robotic automation frameworks</li>
                <li>Patents & IEEE/SCI publications on advanced RPA</li>
              </ul>
              <p>Focus: pioneering intelligent RPA systems for Industry 4.0 digital transformation & securing automation pipelines.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technologies – RPA vs Industrial Automation</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Traditional Automation (PLC)</td>
                      <td>Manufacturing Plants</td>
                      <td>Hardware-driven control</td>
                    </tr>
                    <tr>
                      <td>Robotic Process Automation</td>
                      <td>Finance, IT, Logistics</td>
                      <td>Fast, cost-effective digital automation</td>
                    </tr>
                    <tr>
                      <td>AI-Enabled RPA</td>
                      <td>Healthcare, Banking</td>
                      <td>Smart decision-driven automation</td>
                    </tr>
                    <tr>
                      <td>Cloud-based RPA</td>
                      <td>IT/Enterprise Systems</td>
                      <td>Scalable, flexible, remote automation</td>
                    </tr>
                    <tr>
                      <td>Cognitive RPA</td>
                      <td>Industry 4.0, Smart Factories</td>
                      <td>Adaptive bots with self-learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>  

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>At Narpavi Research Institute, we offer advanced RPA training and project guidance, tool-based automation, AI-integration, and IEEE-aligned mentorship. We bridge academic and industrial automation, ensuring global research and real-world deployments.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item,idx)=>(
                  <details key={idx}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
              
              {/* FAQ JSON-LD Schema */}
              <script type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context":"https://schema.org",
                      "@type":"FAQPage",
                      "mainEntity": faqs.map(f=>({
                        "@type":"Question",
                        "name": f.question,
                        "acceptedAnswer": {
                          "@type":"Answer",
                          "text": f.answer
                        }
                      }))
                  })
                }}
              />
            </section>
          </div>

          {/* 🔗 Right Related Services */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/plc-scada-systems-project-development">PLC & SCADA Systems</a></li>
              <li><a href="/process-control-in-industries-project-development">Process Control in Industries</a></li>
              <li><a href="/intelligent-control-ai-ml-project-development">Intelligent Control using AI/ML</a></li>
              <li><a href="/industrial-automation-project-development">Industrial Automation Projects</a></li>
              <li><a href="/cybersecurity-smart-grids-project-development">Cybersecurity in Smart Grids</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
};

export default EEERpaProjectDevelopmentCenter;
