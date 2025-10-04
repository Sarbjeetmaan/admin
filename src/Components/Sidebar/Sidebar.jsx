// src/Components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/admin/addproduct' className="sidebar-link">
        <div className="sidebar-item">
          <FaPlusCircle className="sidebar-icon" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to='/admin/listproduct' className="sidebar-link">
        <div className="sidebar-item">
          <FaListAlt className="sidebar-icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
