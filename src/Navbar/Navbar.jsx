import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from './logo.png';

function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <div className="navbar">
      <div className='logo-container'>
        <img src={logo} alt="Dein Logo" />
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
        <Link
          to="/notiz"
          className={`nav-link ${currentPath === '/notiz' ? 'active' : ''}`}
        >
          Notizen
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
