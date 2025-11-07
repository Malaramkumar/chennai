import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grid.scss';
import anna from "../images/anna.png";
import a2 from "../images/annamalai.png";
import bu from "../images/bu.png";
import vit from "../images/vit.png";
import srm from "../images/srm.png";
import sathyabama from "../images/sathyabama.png";
import saveetha from "../images/saveetha.png";
import sastra from "../images/sastra.png";
import bharathidasan from "../images/bharathidasan.png";
import madurai_kamaraj from "../images/madurai_kamaraj.png";
import more from "../images/more_college.png";

const newsItems = [
  { image: anna, link: '/phd-admission-in-anna-university-chennai',alt:"PhD Admission in Anna University", name: 'PhD Admission in Anna University' },
  { image: a2, link: '/annamalai-university', alt: 'PhD Admission in Annamalai University', name: 'PhD Admission in Annamalai University' },
  { image: bu, link: '/bharathiar-university', alt: 'PhD Admission in Bharathiar University' , name: 'PhD Admission in Bharathiar University' },
  { image: vit, link: '/vit-university', alt: 'PhD Admission in VIT University', name: 'PhD Admission in VIT University' },
  { image: srm, link: '/srm-university', alt: 'PhD Admission in SRM University', name: 'PhD Admission in SRM University' },
  { image: sathyabama, link: '/sathyabama-university', alt: 'PhD Admission in Sathyabama University' , name: 'PhD Admission in Sathyabama University' },
  { image: saveetha, link: '/saveetha-university', alt: 'PhD Admission in Saveetha University' , name: 'PhD Admission in Saveetha University' },
  { image: sastra, link: '/sastra-university', alt: 'PhD Admission in SASTRA University', name: 'PhD Admission in SASTRA University' },
  { image: bharathidasan, link: '/bharathidasan-university', alt: 'PhD Admission in Bharathidasan University', name: 'PhD Admission in Bharathidasan University' },
  { image: madurai_kamaraj, link: '/madurai-kamaraj-university', alt: 'PhD Admission in Madurai Kamaraj University', name: 'PhD Admission in Madurai Kamaraj University' },
  { image: more, link: '/college', alt: 'More Colleges', name: 'More Colleges' },
];

const NewsCarousel = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const combinedItems = [...newsItems, ...newsItems]; // Looping

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollSpeed = 2;
    const interval = setInterval(() => {
      if (!paused) {
        el.scrollLeft += scrollSpeed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
    }, 16);

    const handleWheel = (e) => {
      if (el.contains(e.target)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      clearInterval(interval);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [paused]);

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h1>PhD Admission Assistance in Chennai</h1>
        <p>“One-stop solution for your PhD dreams.”</p>
      </div>

      <div
        className="carousel-container"
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {combinedItems.map((item, index) => (
          <div
            className="carousel-card"
            key={index}
            onClick={() => handleNavigate(item.link)}
          >
            <img src={item.image} alt={item.name} className="carousel-image" />
            <div className="tooltip">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
