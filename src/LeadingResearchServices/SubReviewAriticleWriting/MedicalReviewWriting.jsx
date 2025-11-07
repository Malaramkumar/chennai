import React from "react";
import "./MedicalReviewWriting.scss";
import Side from "../Sidebar"
const faqs = [
  {
    question: "How do I get started with my medical review?",
    answer:
      "Contact us with your research topic or area of interest. We'll provide a detailed scope, quote, and timeline."
  },
  {
    question: "What citation styles do you support?",
    answer:
      "We support Vancouver, AMA, APA, and any journal-specific style you require."
  },
  {
    question: "Do you help with journal submission?",
    answer:
      "Yes, we assist with end-to-end journal submission, including peer-review responses and revision support."
  },
  {
    question: "Are your services confidential?",
    answer:
      "Absolutely. All documents and discussions are protected under strict confidentiality and NDA agreements."
  },
  {
    question: "How long does it take to complete a review?",
    answer:
      "Turnaround time is typically 10–15 business days, depending on complexity and journal guidelines."
  }
];


const MedicalReviewWriting = () => {
  return (
    <div className="medical-review-layout">
        <Side/>
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#intro">Overview</a></li>
          <li><a href="#what-is">What is a Medical Review?</a></li>
          <li><a href="#process">Our Process</a></li>
          <li><a href="#domains">Supported Domains</a></li>
          <li><a href="#journals">Target Journals</a></li>
          <li><a href="#why-narpavi">Why Choose Us</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#contact">Get Started</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="medical-review-wrapper">
          <h1 id="intro">🩺 Literature Review Paper Writing Services for Medical</h1>
          <p className="intro">
            <strong>Evidence-based, journal-ready reviews</strong> for clinical, biomedical, and healthcare research.
          </p>

          <section id="what-is" >
            <h2>🧬 What Is a Medical Literature Review Paper?</h2>
            <p>A medical literature review paper is a comprehensive evaluation of existing clinical research, trials, and scientific studies on a defined medical question. It serves to:</p>
            <ul>
              <li>📚 Summarizes findings on diagnosis, treatment, and drug efficacy</li>
              <li>🧠 Critically assesses strengths, gaps, and bias in existing research</li>
              <li>🔍 Identifies clinical knowledge gaps and future research opportunities</li>
              <li>🩻 Supports evidence-based practice and policymaking</li>
            </ul>

            <h3>Types of Reviews We Support:</h3>
            <ul className="bullet-list" >
              <li> Narrative Review</li>
              <li> Systematic Review (PRISMA-compliant)</li>
              <li> Meta-Analysis</li>
              <li> Scoping Review</li>
              <li> Rapid Review</li>
            </ul>
          </section>

          <section id="process">
            <h2>📋 Our 8-Step Medical Review Writing Process</h2>
            <div className="table-like">
              <div className="row header"><div>Phase</div><div>Activities</div></div>
              <div className="row"><div>1. Topic Selection</div><div>Based on clinical trends and research gaps</div></div>
              <div className="row"><div>2. Scope Definition</div><div>Framed using PICO/PICOS methodology</div></div>
              <div className="row"><div>3. Literature Search</div><div>PubMed, Cochrane, Medline, Scopus, ClinicalTrials.gov</div></div>
              <div className="row"><div>4. Screening & Analysis</div><div>Bias analysis, inclusion/exclusion, quality check</div></div>
              <div className="row"><div>5. Thematic Structuring</div><div>By disease, intervention, outcome</div></div>
              <div className="row"><div>6. Critical Discussion</div><div>Compare findings, synthesize knowledge</div></div>
              <div className="row"><div>7. Formatting</div><div>Vancouver, AMA, APA or journal style</div></div>
              <div className="row"><div>8. QA & Submission</div><div>Turnitin, Grammarly, final proof</div></div>
            </div>
          </section>

          <section id="domains">
            <h2>🏥 Domains We Support in Medical Literature Review Writing</h2>
            <p>Our expert medical writers have academic and clinical experience in:</p>
            <ul className="grid-list">
              <li>🫀 Cardiology, Internal Medicine, Pulmonology</li>
              <li>🧠 Psychiatry, Neurology, Psychology</li>
              <li>🧬 Pharmacology, Biochemistry, Molecular Medicine</li>
              <li>🩻 Oncology, Radiology, Orthopedics</li>
              <li>🧪 Microbiology, Pathology, Immunology</li>
              <li>🧫 Nursing, Clinical Trials, Public Health</li>
            </ul>
            <p>Each article is curated with high-impact, peer-reviewed references from trusted databases.</p>
          </section>

          <section id="journals">
            <h2>📈 Journals We Target</h2>
            <p>We format and write review papers to match the editorial scope of:</p>
            <ul>
              <li>Scopus-indexed: Elsevier, Springer, T&F</li>
              <li>SCI/SCIE: BMJ, Wiley, Nature</li>
              <li>PubMed/MEDLINE listed journals</li>
              <li>Q1/Q2 Open Access medical journals</li>
            </ul>
            <p><strong>Additional Support:</strong> Cover letter writing, submission help, reviewer response handling</p>
          </section>

          <section id="why-narpavi">
            <h2>🚀 Why Choose Narpavi?</h2>
            <ul>
              <li>✅ 100–250+ PubMed/Cochrane references</li>
              <li>🧠 MBBS, MD, PhDs with medical expertise</li>
              <li>🔄 Unlimited revisions until approval</li>
              <li>🌍 Trusted by universities & hospitals worldwide</li>
              <li>⏳ 10–15 business days turnaround</li>
            </ul>
          </section>

          <section id="contact" className="cta-section">
            <h2>📩 Let’s Write Your Next Medical Review</h2>
            <p>
              With Narpavi’s precision-driven writing, your review paper will reflect depth, clarity, and publication readiness.
            </p>
            <button className="cta-button">👉 Start Your Medical Review Paper Today</button>
            <p>📞 Contact us now for a free consultation and custom proposal.</p>
          </section>
           <section id="faq" className="faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Need Help?</h3>
        <ul>
          <li>📧 Email Support</li>
          <li>📞 One-on-One Consultation</li>
          <li>📝 Proposal Drafting</li>
          <li>🎯 Topic Selection Guidance</li>
          <li>⏳ Fast-Track Delivery</li>
        </ul>
      </aside>
    </div>
  );
};

export default MedicalReviewWriting;
