import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import Listproduct from '../../Components/ListProduct/Listproduct';
import Navbar from '../../Components/Navbar/Navbar';
import AdminGuard from '../../Gaurds/AdminGaurd';

const Admin = () => {
  return (
    <AdminGuard>
      <Navbar /> {/* Navbar always visible */}
      <div className="admin">
        <Sidebar /> {/* Sidebar fixed */}
        <div className="admin-content">
          <Routes>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="listproduct" element={<Listproduct />} />
            <Route path="" element={<Navigate to="listproduct" replace />} /> {/* default route */}
          </Routes>
        </div>
      </div>
    </AdminGuard>
  );
};

export default Admin;
