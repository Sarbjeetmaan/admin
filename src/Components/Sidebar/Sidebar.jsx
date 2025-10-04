import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Relative links to /admin/* */}
      <Link to='addproduct' className="sidebar-link">
        <div className="sidebar-item">
          <FaPlusCircle className="sidebar-icon" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to='listproduct' className="sidebar-link">
        <div className="sidebar-item">
          <FaListAlt className="sidebar-icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
