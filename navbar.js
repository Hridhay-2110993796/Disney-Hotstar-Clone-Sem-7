import React from 'react';
import './Navbar.css'; // Add necessary CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Hotstar Logo" />
      </div>
      <ul className="navbar__menu">
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </nav>
  );
};

export default Navbar;