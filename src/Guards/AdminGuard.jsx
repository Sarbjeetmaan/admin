// src/Guards/AdminGuard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminGuard = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT from login
        if (!token) {
          navigate("/"); // redirect non-logged-in users
          return;
        }

        const res = await fetch("https://backend-91e3.onrender.com/verifyAdmin", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include", // if cookies used
        });

        const data = await res.json();

        if (!data.isAdmin) {
          alert("Access denied. Admins only!");
          navigate("/"); // redirect non-admins
        } else {
          setLoading(false); // admin verified
        }
      } catch (err) {
        console.error(err);
        navigate("/"); // redirect on error
      }
    };

    checkAdmin();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AdminGuard;
