// src/Components/Navbar/Navbar.jsx
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const handleLogout = async () => {
    await fetch('https://backend-91e3.onrender.com/logout', {
      method: 'POST',
      credentials: 'include'
    });
    window.location.href = 'https://project-3v49.vercel.app';
  };

  return (
    <div className="navbar">
      <div className="nav-logo">ELOC</div>
      <div className="nav-profile">
        <FaUserCircle className="profile-icon" />
        <div className="dropdown">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
