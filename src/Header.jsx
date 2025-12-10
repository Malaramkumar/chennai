import React from "react";
import "./Header.scss";
import logo from "./images/narpavi_logo_1.png";

const Header = () => {
  return (
    <header className="zenith-header">
      <div className="header-inner">

        {/* Logo + Text */}
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo-icon" />
          <span className="logo-text">Narpavi Research Institute</span>
        </div>

        {/* Contact Details */}
        <nav>
          <ul className="contact-links">
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><a href="tel:+919123456789">+91 91234 56789</a></li>
            <li><a href="mailto:narpavitech@gmail.com">narpavitech@gmail.com</a></li>
          </ul>
        </nav>

        {/* Store Button */}
        {/* <button className="store-btn">aaa</button> */}

      </div>
    </header>
  );
};

export default Header;
