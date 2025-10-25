// src/Pages/Admin/Admin.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/Listproduct';
import Navbar from '../../Components/Navbar/Navbar';
import AdminOrders from "./AdminOrders";


const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="admin">
        <Sidebar />
        <div className="admin-content">
          <Routes>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="listproduct" element={<ListProduct />} />
            <Route path="/orders" element={<AdminOrders />} />
            {/* ✅ default route so /admin doesn’t look blank */}
            <Route index element={<h2>Welcome to Admin Dashboard</h2>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
