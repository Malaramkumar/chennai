import React from "react";
import { useNavigate } from "react-router-dom";
import "./Design.scss";

const Design = () => {
  const navigate = useNavigate();

  const boxes = [
    { title: "Ranmars Corp", desc: "Description about Ranmars Corp", path: "/service1" },
    { title: "Narpavitech Chennai", desc: "Description about Narpavitech Chennai", path: "/service2" },
    { title: "Narpavitech Mumbai", desc: "Description about Narpavitech Mumbai", path: "/service3" },
    { title: "iBridge", desc: "Description about iBridge", path: "/service4" },
  ];

  return (
    <div className="home-container">
      <div className="box-grid">
        {boxes.map((item, index) => (
          <div
            key={index}
            className="flip-box"
            onClick={() => navigate(item.path)}
          >
            <div className="flip-box-inner">
              {/* Front side */}
              <div className="flip-box-front">
                <h2>{item.title}</h2>
              </div>
            
              {/* Back side */}
              <div className="flip-box-back">
                <p>{item.desc}</p>
                <button className="visit-btn">Visit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
