import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <div className="navbar">
      <div className='logo-container'>
        <img src="dein-logo-pfad.png" alt="Dein Logo" />
      </div>

      <div className='links'>
        <Link
          to="/"
          className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        
        <Link
          to="/stundenplaene"
          className={`nav-link ${currentPath === '/stundenplaene' ? 'active' : ''}`}
        >
          Stundenplan
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
