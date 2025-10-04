// src/Guards/AdminGuard.jsx
import React, { useEffect } from 'react';

const AdminGuard = ({ children }) => {
  useEffect(() => {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    if (!token || role !== 'admin') {
      alert('Access denied. Admins only!');
      window.location.href = 'https://project-3v49.vercel.app'; // ⬅️ user frontend
    }
  }, []);

  return <>{children}</>;
};

export default AdminGuard;
