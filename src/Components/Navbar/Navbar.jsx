import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedRole = localStorage.getItem('role'); // ✅ check if user is admin or user
    if (token) {
      setIsLoggedIn(true);
      setRole(savedRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/login'); // redirect to login after logout
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-text">Eloc</Link>
      </div>

      <div className="nav-profile">
        {isLoggedIn ? (
          <>
            <FaUserCircle className="profile-icon" />
            <div className="dropdown">
              <p>{role === 'admin' ? 'Admin' : 'User'} Panel</p>
              {role === 'admin' && <Link to="/admin">Go to Admin</Link>}
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
