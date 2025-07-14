import { Link } from 'react-router-dom';
import crabsLogo from '../../../assets/crabs_logo.png';
import './Header.css';

const ExternalLinkIcon = () => (
  <svg 
    className="external-link-icon" 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    style={{ marginLeft: '4px' }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={crabsLogo} alt="C.R.A.B.S Rugby Team Logo" className="logo" />
          <span className="team-name">Butte C.R.A.B.S</span>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/schedule" className="nav-link">Schedule</Link>
        <Link to="/sponsors" className="nav-link">Sponsors</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <a href="https://stores.inksoft.com/CrabShackOrganization/shop/home" 
           className="nav-link" 
           target="_blank"
           title="Crab Shack Organization" 
           rel="noopener noreferrer">CSO<ExternalLinkIcon /></a>
      </nav>
    </header>
  );
};

export default Header; 