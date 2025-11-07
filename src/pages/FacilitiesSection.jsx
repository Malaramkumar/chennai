import React, { useState, useEffect, useRef } from "react";
import "./FacilitiesSection.scss";
import image1 from "../images/1.jfif";
import image2 from "../images/2.jfif";
import image3 from "../images/3.jfif";
const data = [
  {
    title: "NRI'S",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque sequi quae optio eius sed sint esse. Aliquid nihil nisi sit unde totam facere animi nam hic vel corrupti cum delectus nesciunt mollitia, non cumque minima iusto, perspiciatis ut aspernatur! Aut autem eligendi harum accusantium iste magni quos cumque corporis.",
    image: image1,
  },
  {
    title: "NRI's Research Lab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque sequi quae optio eius sed sint esse. Aliquid nihil nisi sit unde totam facere animi nam hic vel corrupti cum delectus nesciunt mollitia, non cumque minima iusto, perspiciatis ut aspernatur! Aut autem eligendi harum accusantium iste magni quos cumque corporis.",
    image: image2,
  },
  {
    title: "NRI's Innovation Lab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque sequi quae optio eius sed sint esse. Aliquid nihil nisi sit unde totam facere animi nam hic vel corrupti cum delectus nesciunt mollitia, non cumque minima iusto, perspiciatis ut aspernatur! Aut autem eligendi harum accusantium iste magni quos cumque corporis.",
    image: image3,
  },
];

const FacilitiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const offsetTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.clientHeight;

      const progress = Math.min(
        Math.max(scrollTop - offsetTop, 0) / sectionHeight,
        1
      );
      const index = Math.floor(progress * data.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="facilities-section" ref={sectionRef}>
      <div className="content-wrapper">
        {data.map((item, index) => (
          <div
            className={`facility ${index === activeIndex ? "active" : ""}`}
            key={index}
          >
            <div className="text">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
        
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default FacilitiesSection;
