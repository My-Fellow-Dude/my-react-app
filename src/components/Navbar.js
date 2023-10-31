import React, { useState } from 'react';
import './Navbar.css';
import dogLogo from '../assets/dog-logo.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li className="line-break"></li>
          <li>About</li>
          <li className="line-break"></li>
          <li>Contact</li>
        </ul>
        <img src={dogLogo} alt="Dog Logo" className="dog-logo" />
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
