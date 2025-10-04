import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import Listproduct from '../../Components/ListProduct/Listproduct';
import AdminGuard from '../../Guards/AdminGuard';
import './Admin.css';

const Admin = () => {
  return (
    <AdminGuard>
      <Navbar />
      <div className="admin">
        <Sidebar />
        <div className="admin-content">
          <Routes>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="listproduct" element={<Listproduct />} />
            <Route path="" element={<Navigate to="listproduct" replace />} />
          </Routes>
        </div>
      </div>
    </AdminGuard>
  );
};

export default Admin;
