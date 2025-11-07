import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";

const navItems = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'PhD Topic Selection', path: '#' },
  { id: '3', label: 'PhD Application', path: '#' },
  { id: '4', label: 'Proposal', path: '#' },
  { id: '5', label: 'University Selection', path: '#' },
];

const Subsidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <header className="nri-header">
        <div className="nri-header-left">
          <div className="nri-logo-container">
            <div className="nri-logo-box">N</div>
            <div>
              <h1 className="nri-university-name">Narpavi Research Institute</h1>
            </div>
          </div>
        </div>
      </header>

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
