import { useNavigate } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi"; 

import "./Subsidebar.scss";

const navItems = [
  { id: '0', label: 'Home', path: '/' },
  { id: '1', label: 'We refer Guide', path: '/refer-guide' },
  { id: '2', label: 'PhD Topic Selection', path: '/phd-topic-selection' },
  { id: '3', label: 'PhD Application', path: '/phd-application' },
  { id: '4', label: 'Proposal', path: '/phd-proposal' },
  { id: '5', label: 'University Selection', path: '/universi  ty-selection' },
];

const Subsidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="main">

      <header className="nri-header">
        <div className="nri-header-inner">

          {/* LEFT — LOGO + INSTITUTE NAME */}
          <div className="nri-header-left">
            <div className="nri-logo-container">
              <div className="nri-logo-box">N</div>
              <h1 className="nri-university-name">Narpavi Research Institute</h1>
            </div>
          </div>

          {/* CENTER — CONTACT DETAILS */}
          <nav className="nri-header-center">
            <ul className="nri-contact-links">
              <li> <FiPhone className="nri-icon" /> <a href="tel:+919876543210">+91 98765 43210</a></li>
              <li> <FiPhone className="nri-icon" /> <a href="tel:+919123456789">+91 91234 56789</a></li>
              <li> <FiMail className="nri-icon" /> <a href="mailto:narpavitech@gmail.com">narpavitech@gmail.com</a></li>
            </ul>
          </nav>
          {/* RIGHT — BUTTON */}
          {/* <div className="nri-header-right">
            <button className="nri-store-btn">aaa</button>
          </div> */}
        </div>
      </header>
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-nav">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="nav-text-item"
              onClick={() => navigate(item.path)}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="footer-logo-box">
            <span className="footer-logo-text">N</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Subsidebar;
