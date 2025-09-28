import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import Listproduct from '../../Components/ListProduct/Listproduct';
import AdminGuard from '../../Gaurds/AdminGaurd'; // 👈 import your guard

export const Admin = () => {
  return (
    <AdminGuard> {/* 👈 Wrap everything inside AdminGuard */}
      <div className="admin">
        <Sidebar />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<Listproduct />} />
        </Routes>
      </div>
    </AdminGuard>
  );
};

export default Admin;
