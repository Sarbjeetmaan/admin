// src/Guards/AdminGuard.jsx
import React, { useEffect, useState } from 'react';

const AdminGuard = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Verify admin via backend
    fetch('https://backend-91e3.onrender.com/admin/dashboard', {
      credentials: 'include', // send cookie
    })
      .then(res => {
        if (!res.ok) throw new Error('Not authorized');
        return res.json();
      })
      .then(() => {
        setAuthorized(true);
      })
      .catch(() => {
        alert('Access denied. Admins only!');
        window.location.href = 'https://project-3v49.vercel.app'; // redirect to user frontend
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!authorized) return null;

  return <>{children}</>;
};

export default AdminGuard;
