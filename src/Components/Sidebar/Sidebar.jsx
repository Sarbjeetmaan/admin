// src/Components/Sidebar/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaListAlt, FaClipboardList } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const sidebarItems = [
    { path: "/admin/addproduct", label: "Add Product", icon: <FaPlusCircle /> },
    { path: "/admin/listproduct", label: "Product List", icon: <FaListAlt /> },
    { path: "/admin/orders", label: "Orders", icon: <FaClipboardList /> },
  ];

  return (
    <div className="sidebar">
      {sidebarItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <div className={`sidebar-item ${location.pathname === item.path ? "active" : ""}`}>
            <span className="sidebar-icon">{item.icon}</span>
            <p>{item.label}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
