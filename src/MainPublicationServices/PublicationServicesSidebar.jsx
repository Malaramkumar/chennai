import { useNavigate } from "react-router-dom";
import "./PublicationServicesSidebar.scss";

const navItems = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'Conference Paper', path: '/publication-services/conference-paper-publication-services' },
  { id: '3', label: 'SCI Journal', path: '/publication-services/SCIJournal' },
  { id: '4', label: 'Scopus Journal', path: '/publication-services/scopus-journal-publication-services' },
  { id: '5', label: 'UGC Care Journal', path: '#' },
  { id: '6', label: 'Review Article', path: '#' },
  { id: '7', label: 'Book ISBN', path: '#' },
];

const Subsidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="PublicationServices-main">
      <header className="PublicationServices-header">
        <div className="PublicationServices-header-left">
          <div className="PublicationServices-logo-container">
            <div className="PublicationServices-logo-box">N</div>
            <div>
              <h1 className="PublicationServices-university-name">Narpavi Research Institute</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="PublicationServices-sidebar">
        <div className="PublicationServices-sidebar-nav">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="PublicationServices-nav-text-item"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="PublicationServices-sidebar-footer">
          <div className="PublicationServices-footer-logo-box">
            <span className="PublicationServices-footer-logo-text">N</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsidebar;
