// src/Pages/Admin/Admin.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct'; // ✅ fixed import
import Navbar from '../../Components/Navbar/Navbar';
import AdminGuard from '../../Guards/AdminGuard';

const Admin = () => {
  return (
    <AdminGuard>
      <Navbar /> {/* Navbar visible */}
      <div className="admin">
        <Sidebar /> {/* Sidebar fixed */}
        <div className="admin-content">
          <Routes>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="listproduct" element={<ListProduct />} />
            {/* ✅ default route so /admin doesn’t look blank */}
            <Route index element={<h2>Welcome to Admin Dashboard</h2>} />
          </Routes>
        </div>
      </div>
    </AdminGuard>
  );
};

export default Admin;
