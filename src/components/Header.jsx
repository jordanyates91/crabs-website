import { Link } from 'react-router-dom';
import crabsLogo from '../../assets/crabs_logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={crabsLogo} alt="C.R.A.B.S Rugby Team Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/schedule" className="nav-link">Schedule</Link>
        <a href="https://www.facebook.com/ButteCRABSRugby" 
           className="nav-link" 
           target="_blank" 
           rel="noopener noreferrer">Facebook</a>
        <a href="https://stores.inksoft.com/CrabShackOrganization/shop/home" 
           className="nav-link" 
           target="_blank"
           title="Crab Shack Organization" 
           rel="noopener noreferrer">CSO</a>
      </nav>
    </header>
  );
};

export default Header; 