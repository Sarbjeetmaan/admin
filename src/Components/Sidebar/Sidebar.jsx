import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <FaPlusCircle className="sidebar-icon" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to='listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <FaListAlt className="sidebar-icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
