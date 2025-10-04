// src/Guards/AdminGuard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminGuard = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch('https://backend-91e3.onrender.com/verifyAdmin', {
          method: 'GET',
          credentials: 'include', // important to send cookies
        });
        const data = await res.json();
        if (!data.isAdmin) {
          window.location.href = 'https://project-3v49.vercel.app'; // redirect to user frontend
        } else {
          setLoading(false);
        }
      } catch (err) {
        window.location.href = 'https://project-3v49.vercel.app';
      }
    };

    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AdminGuard;
