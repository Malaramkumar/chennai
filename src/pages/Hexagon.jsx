import "./Hexagon.scss";
import { useEffect, useRef } from "react";
import download from "../images/101.png";

const Hexagon = () =>{
    const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const translateY = -scrollY * 0.3; 

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <div className="hexagon">
            
        <img
          ref={imageRef}
          src={download}
          loading="lazy"
          alt="Faculty Image"
          className="hex-1"
          style={{
            willChange: "transform",
            transformStyle: "preserve-3d",
            
          }}
        />

        </div>
    );
};
export default Hexagon;