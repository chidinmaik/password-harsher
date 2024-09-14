import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">#Hasher</h2>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#hash">Hash</a></li>
          <li><a href="#encrypt">Encrypt</a></li>
          <li><a href="#decrypt">Decrypt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
