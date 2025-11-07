import './ReferGuide.scss';
import Subsidebar from "../pages/Subsidebar"

const faqs = [
  {
    question: "Can I change my PhD supervisor later?",
    answer: "While possible, changing supervisors can delay your progress. It's best to choose wisely at the start.",
  },
  {
    question: "Should I choose a guide from the same university?",
    answer: "Preferably yes, as it simplifies coordination, but you may also consider approved external guides.",
  },
  {
    question: "How do I verify if a guide is approved?",
    answer: "Check the official university research supervisor list or contact the research department.",
  },
];

  const keywords = [
    "PhD guide selection",
    "Choose PhD supervisor",
    "PhD supervisor Tamil Nadu",
    "Supervisor selection guide for PhD",
    "PhD admission Tamil Nadu",
    "Best PhD guide in Anna University",
  ];

const ReferGuide = () => {
  return (
    <div className="refer-guide fade-in">
      <Subsidebar/>
      <div className="referhero-section">
        <h1>🎓 How to Choose the Right PhD Guide</h1>
        <p>
          Your PhD supervisor will shape your research journey, publications, and future academic success.
          Here's how to make the right choice.
        </p>
      </div>

      <div className="refersection-card">
        <h2>📌 Why PhD Guide Selection Matters</h2>
        <ul>
          <li>✅ Refine your PhD research topic</li>
          <li>✅ Get timely mentorship and feedback</li>
          <li>✅ Receive guidance for publishing and conferences</li>
          <li>✅ Navigate the PhD admission and coursework smoothly</li>
        </ul>
      </div>

      <div className="refersection-card">
        <h2>🔍 Key Factors to Consider</h2>

        <div className="factor">
          <h3>🔬 Research Alignment</h3>
          <p>
            Match your research interest with the supervisor’s area. Explore faculty publications and projects,
            especially if applying to universities like Anna University.
          </p>
        </div>

        <div className="factor">
          <h3>⏰ Availability & Workload</h3>
          <p>
            Prefer guides with bandwidth for you. Too many scholars under one guide may slow down your progress.
          </p>
        </div>

        <div className="factor">
          <h3>🌐 Reputation & Network</h3>
          <p>
            A well-connected guide can link you to conferences, joint research, and even post-doctoral pathways.
          </p>
        </div>

        <div className="factor">
          <h3>💬 Communication Style</h3>
          <p>
            Some guides are hands-on; others let you work independently. Choose a style that suits your workflow.
          </p>
        </div>

        <div className="factor">
          <h3>👨‍🎓 Student Feedback</h3>
          <p>Talk to their current and past scholars. Ask:</p>
          <ul>
            <li>Are they supportive?</li>
            <li>Do they help with paper publications?</li>
            <li>Do they handle delays/conflicts professionally?</li>
          </ul>
        </div>
      </div>

      <div className="refersection-card warning">
        <h2>⚠️ Mistakes to Avoid</h2>
        <ul>
          <li>❌ Choosing only based on designation</li>
          <li>❌ Selecting a guide outside your research interest</li>
          <li>❌ Skipping availability checks</li>
          <li>❌ Ignoring poor feedback or lack of publications</li>
        </ul>
        <p>
          Most universities (e.g., Bharathiar, Madras, Annamalai, Periyar) list approved guides. Always verify status before finalizing.
        </p>
      </div>

      <div className="refersection-card highlight">
        <h2>🤝 How Narpavi Research Institute Helps</h2>
        <p>
          We guide PhD aspirants in choosing supervisors, finalizing domains, drafting proposals,
          and navigating the full admission process with confidence.
        </p>
      </div>
      <section className="referconclusion-section">
  <h2>Make an Informed Choice</h2>
  <p>
    Most universities such as <strong>Bharathiar University</strong>, <strong>Madras University</strong>, 
    <strong> Periyar University</strong>, and <strong>Annamalai University</strong> maintain an official list of recognized PhD 
    research supervisors. Always verify your guide’s approval status before initiating your application process.
  </p>
  <p>
    Your PhD guide selection can <strong>make or break your doctoral journey</strong>. Take the time to research, connect, and 
    choose wisely. Whether you're pursuing PhD admission in Tamil Nadu or elsewhere, let this supervisor selection guide support 
    your decision-making.
  </p>
  <div className="refernarpavi-highlight">
    <h3>How Narpavi Research Institute Supports You</h3>
    <p>
      At <strong>Narpavi Research Institute</strong>, we support every PhD aspirant with end-to-end guidance — from choosing the right guide, 
      finalizing your research domain, to preparing your proposal and navigating the admission process. Our goal is to make your PhD 
      journey <span className="highlight">smooth, strategic, and successful</span>.
    </p>
  </div>
</section>
       <section className="referfaq-section">
        <h2>FAQs on Choosing a PhD Supervisor</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* JSON-LD FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
        
      </section>
       <aside className="keyword-sidebar">
      <h3>🔑 Suggested Keywords</h3>
      <ul>
        {keywords.map((keyword, idx) => (
          <li key={idx}>🔹 {keyword}</li>
        ))}
      </ul>
    </aside>
    </div>
  );
};

export default ReferGuide;
