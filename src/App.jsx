import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {

  // ✅ Capture token from URL once on app load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const role = params.get('role');

    if (token && role) {
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Clean URL so token is not visible
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </>
  );
};

export default App;
