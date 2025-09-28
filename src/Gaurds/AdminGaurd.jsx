import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      alert('Access denied. Admins only!');
      navigate('/'); // redirect to homepage or login
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AdminGuard;
