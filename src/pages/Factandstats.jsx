import React, { useState, useEffect, useCallback } from "react";
import "./Fact.scss";

const statsGroups = [
  {
    top: [
      {
        value: "\ud83d\udcc8 98%",
        label: "Success Rate",
        desc: "PhD scholars secured admission to top-tier universities with our end-to-end guidance."
      },
      {
        value: "\ud83d\udcda 20:1",
        label: "Scholar-to-Mentor Ratio",
        desc: "Personalized attention and tailored research mentoring for every scholar."
      }
    ],
    bottom: [
      {
        value: "\ud83d\udcb0 \u20b9 1.2 Lakhs",
        label: "Average Scholarship (2023)",
        desc: "We help maximize funding opportunities for research scholars"
      },
      {
        value: "\u2764\ufe0f 84%",
        label: "Client Satisfaction",
        desc: "Our scholars say they\u2019re either \u201cSatisfied\u201d or \u201cHighly Satisfied\u201d with our services."
      }
    ]
  },
  {
    top: [
      {
        value: "\ud83c\udfaf 52%",
        label: "First-Choice Admissions",
        desc: "Over half made it to their top preference."
      },
      {
        value: "\ud83d\udc91 49%",
        label: "Research Direction Improved",
        desc: "Clarity, focus, and refined proposals made possible with expert mentoring"
      }
    ],
    bottom: [
      {
        value: "\ud83d\ude80 46%",
        label: "Proposal Quality Enhanced",
        desc: "Professional editing, research structuring, and academic formatting included."
      },
      {
        value: "\ud83d\udd17 41%",
        label: "Academic/Industry Networks",
        desc: "Because success doesn\u2019t stop at admission \u2014 it\u2019s about connections."
      }
    ]
  },
  {
    top: [
      {
        value: "\ud83c\udf0d 18%",
        label: "Global Collaboration",
        desc: "From Europe to the US, scholars started global conversations."
      }
    ],
    bottom: [
      {
        value: "",
        label: " ",
        desc: ""
      }
    ]
  }
];

const FactsStats = () => {
  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);

  const handleScroll = useCallback((e) => {
    if (locked) return;
    setLocked(true);
    setTimeout(() => setLocked(false), 500);

    if (e.deltaY > 0 && index < statsGroups.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && index > 0) {
      setIndex((prev) => prev - 1);
    }
  }, [index, locked]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  const currentGroup = statsGroups[index];

  return (
    <section className="facts-stats-section">
      <div className="heading-block">
        <h2>Success by Numbers</h2>
        <p>\ud83c\udf93 What Our Scholars Say</p>
      </div>

      <div className="stats-line-block">
        {/* Top Stats */}
        <div className="stat stat-top stat-1">
          <h3>{currentGroup.top[0]?.value}</h3>
          <p>{currentGroup.top[0]?.label}</p>
          <small>{currentGroup.top[0]?.desc}</small>
        </div>
        <div className="stat stat-top stat-2">
          <h3>{currentGroup.top[1]?.value}</h3>
          <p>{currentGroup.top[1]?.label}</p>
          <small>{currentGroup.top[1]?.desc}</small>
        </div>

        {/* Horizontal Line */}
        <div className="horizontal-line"></div>

        {/* Bottom Stats */}
        <div className="stat stat-bottom stat-3">
          <h3>{currentGroup.bottom[0]?.value}</h3>
          <p>{currentGroup.bottom[0]?.label}</p>
          <small>{currentGroup.bottom[0]?.desc}</small>
        </div>
        <div className="stat stat-bottom stat-4">
          <h3>{currentGroup.bottom[1]?.value}</h3>
          <p>{currentGroup.bottom[1]?.label}</p>
          <small>{currentGroup.bottom[1]?.desc}</small>
        </div>

        {/* Hexagon in center-right */}
        <div className="hexagon-container">
          <div className="hexagon">
            <div className="hex-inner">
              <h3>100%</h3>
              <p>
                Placement Rate for the<br />
                Beacom College of Computer<br />
                & Cyber Sciences Graduates
              </p>
              <button>READ FULL REPORT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsStats;