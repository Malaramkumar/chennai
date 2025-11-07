import React from "react";
import aaa from "./images/1.jfif"

const FlipCardApp = () => {
  const cards = [
    {
      frontImage: aaa,
      frontTitle: "Title 1",
      backHeading: "Heading 1",
      backParagraph: "Paragraph for card 1",
    },
    {
      frontImage: "https://via.placeholder.com/250x250.png?text=Image+2",
      frontTitle: "Title 2",
      backHeading: "Heading 2",
      backParagraph: "Paragraph for card 2",
    },
    {
      frontImage: "https://via.placeholder.com/250x250.png?text=Image+3",
      frontTitle: "Title 3",
      backHeading: "Heading 3",
      backParagraph: "Paragraph for card 3",
    },
    {
      frontImage: "https://via.placeholder.com/250x250.png?text=Image+4",
      frontTitle: "Title 4",
      backHeading: "Heading 4",
      backParagraph: "Paragraph for card 4",
    },
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between", // equal space between boxes
    padding: "20px",
    gap: "20px", // gap between cards
  };

  const cardStyle = {
    backgroundColor: "transparent",
    width: "calc((100% - 60px) / 4)", // 4 equal cards with 20px gaps
    height: "350px",
    perspective: "1000px",
    cursor: "pointer",
  };

  const innerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  };

  const frontBackStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const frontStyle = {
    ...frontBackStyle,
    backgroundColor: "#fff",
    color: "#000",
  };

  const backStyle = {
    ...frontBackStyle,
    backgroundColor: "#2980b9",
    color: "#fff",
    transform: "rotateY(180deg)",
    padding: "20px",
  };

  const imgStyle = {
    width: "100%",
    height: "70%",
    objectFit: "cover",
  };

  const titleStyle = {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const backHeadingStyle = {
    fontSize: "1.4rem",
    marginBottom: "10px",
  };

  const backParagraphStyle = {
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.firstChild.style.transform = "rotateY(180deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.firstChild.style.transform = "rotateY(0deg)";
          }}
        >
          <div style={innerStyle}>
            <div style={frontStyle}>
              <img src={card.frontImage} alt={card.frontTitle} style={imgStyle} />
              <h3 style={titleStyle}>{card.frontTitle}</h3>
            </div>
            <div style={backStyle}>
              <h3 style={backHeadingStyle}>{card.backHeading}</h3>
              <p style={backParagraphStyle}>{card.backParagraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCardApp;
