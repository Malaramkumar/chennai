import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWordpress } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Homepage</h4>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </div>

        <div className="footer-column">
          <h4>Get Support</h4>
          <a href="#">Support</a>
          <a href="#">Support</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">aaaa</a>
          <a href="#">aaaa</a>
          <a href="#">aaaa</a>
        </div>

        <div className="footer-column">
          <h4>services</h4>
          <a href="#">Plans</a>
          <a href="#">Features</a>
          <a href="#">About </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <h3 className="logo1">Narpavi</h3>
          <p>© 2025 Narpavi Inc. All rights reserved.</p>
          {/* <a href="#">Legal information</a>
          <p>Narpavi and WordPress® are registered trademarks.</p> */}

          <div className="social-icons">
            <FaWordpress />
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* <div className="footer-lang">
          Details
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
