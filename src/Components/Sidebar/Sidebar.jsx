// src/Components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link to="addproduct" style={{ textDecoration: 'none' }}>
        <div className={`sidebar-item ${location.pathname.endsWith('addproduct') ? 'active' : ''}`}>
          <FaPlusCircle className="sidebar-icon" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to="listproduct" style={{ textDecoration: 'none' }}>
        <div className={`sidebar-item ${location.pathname.endsWith('listproduct') ? 'active' : ''}`}>
          <FaListAlt className="sidebar-icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
