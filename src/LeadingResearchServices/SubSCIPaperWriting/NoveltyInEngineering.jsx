import React from "react";
import "./TrendingEngineeringTopicsForScopus.scss";
import Side from "../Sidebar";

const NoveltyInEngineering = () => {
  return (
    <div className="engscopus-layout">
      {/* Left Sidebar */}
      <div className="engscopus-left-sidebar">
        <Side />
      </div>

      {/* Main Content */}
      <div className="engscopus-main-content">
        <h1>🚀 How to Set Up a Strong Novelty for SCI Manuscripts – Engineering Focus</h1>

        <section>
          <h2>Why Novelty Matters in SCI Engineering Papers</h2>
          <p>
            A manuscript without clear novelty is often desk-rejected. For engineering manuscripts,
            novelty goes beyond proposing new ideas—it must demonstrate technical originality,
            application value, and scientific advancement.
          </p>
          <blockquote>
            Common reviewer rejection comment:
            <br />
            <em>“The work lacks sufficient novelty and contribution to merit publication.”</em>
          </blockquote>
        </section>

        <section>
          <h2>🔍 1. Define Your Novelty Early — Before You Start Writing</h2>
          <ul>
            <li>What engineering problem am I solving that hasn’t been addressed effectively?</li>
            <li>Does my method improve accuracy, cost, efficiency, or safety?</li>
            <li>Is my design, model, or algorithm new or significantly improved?</li>
            <li>Have I combined known approaches in a new application domain?</li>
          </ul>
        </section>

        <section>
          <h2>🧠 2. Types of Novelty in Engineering Research</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Novelty Type</th>
                  <th>Example in Engineering</th>
                  <th>SCI Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New Method / Algorithm</td>
                  <td>A new AI-based fault detection algorithm</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>System Design Innovation</td>
                  <td>A hybrid cooling system for solar panels</td>
                  <td>Medium-High</td>
                </tr>
                <tr>
                  <td>Improved Performance</td>
                  <td>20% more efficiency than past designs</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Novel Application</td>
                  <td>Applying FEA to bamboo-composite bridges</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Integration of Tech</td>
                  <td>Combining IoT + Blockchain in automation</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>First-in-field Data</td>
                  <td>Field testing a system under real loads</td>
                  <td>High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>✍️ 3. How to Clearly Present Novelty in Your SCI Paper</h2>
          <ul>
            <li>
              <strong>Title:</strong> Include words like “novel,” “new,” “first,” “enhanced,”
              “integrated” to signal originality.
              <br />
              <em>Example:</em> “A Novel IoT-Based Predictive Maintenance System for Smart Factories
              Using Deep Learning”
            </li>
            <li>
              <strong>Abstract:</strong> Start with a brief research gap. State your core contribution
              explicitly. Quantify the improvement if possible.
              <br />
              <em>Example:</em> “Unlike conventional methods, the proposed model reduces detection
              latency by 37%...”
            </li>
            <li>
              <strong>Introduction:</strong> Critically review the state of the art (3–5 recent SCI
              papers), highlight limitations, and state: “To address these gaps, this paper
              proposes...”
            </li>
          </ul>
        </section>

        <section>
          <h2>🧪 4. Use a Comparison Table to Show Novelty</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Study</th>
                  <th>Method Used</th>
                  <th>Accuracy (%)</th>
                  <th>Power Usage</th>
                  <th>Limitation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smith et al. (2023)</td>
                  <td>SVM-based classifier</td>
                  <td>85.3</td>
                  <td>High</td>
                  <td>Slow on embedded systems</td>
                </tr>
                <tr>
                  <td>This Work (2025)</td>
                  <td>Optimized CNN with pruning</td>
                  <td>92.1</td>
                  <td>Low</td>
                  <td>Real-time edge compatible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>🧭 5. Tools & Techniques to Support Novelty Claims</h2>
          <ul>
            <li>
              <strong>Literature Maps:</strong> Visualize where your research sits in existing
              knowledge.
            </li>
            <li>
              <strong>Performance Benchmarking:</strong> Compare accuracy, speed, cost, emissions.
            </li>
            <li>
              <strong>Ablation Studies (AI/ML):</strong> Show the impact of each component by removing
              them.
            </li>
          </ul>
        </section>

        <section>
          <h2>🧰 6. Avoid These Common Mistakes</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Mistake</th>
                  <th>Why It Fails</th>
                  <th>Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Generic improvements (e.g., “better model”)</td>
                  <td>Lacks quantitative proof</td>
                  <td>Use metrics, benchmarks</td>
                </tr>
                <tr>
                  <td>Citing outdated work only</td>
                  <td>Doesn’t establish true novelty</td>
                  <td>Include 3–5 references from last 2 years</td>
                </tr>
                <tr>
                  <td>No technical depth</td>
                  <td>Seems superficial or vague</td>
                  <td>Provide equations, simulations, models</td>
                </tr>
                <tr>
                  <td>Repeating published ideas</td>
                  <td>Plagiarism / self-plagiarism risks</td>
                  <td>Use originality check tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>📑 7. Where to Emphasize Novelty</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Section</th>
                  <th>What to Include</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abstract</td>
                  <td>Summary of novelty, numerical results</td>
                </tr>
                <tr>
                  <td>Introduction</td>
                  <td>Clear statement of novelty and contribution</td>
                </tr>
                <tr>
                  <td>Results</td>
                  <td>Side-by-side comparison with existing methods</td>
                </tr>
                <tr>
                  <td>Discussion</td>
                  <td>Why your results matter and what makes them unique</td>
                </tr>
                <tr>
                  <td>Conclusion</td>
                  <td>Reinforce novelty and suggest future work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <p className="conclusion">
          In engineering research, novelty means more than being “new”—it must be justified,
          quantified, and clearly articulated. By integrating structured novelty claims into your SCI
          manuscript, your research will stand out and meet editorial expectations.
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="engscopus-right-sidebar"></div>
    </div>
  );
};

export default NoveltyInEngineering;
