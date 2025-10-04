import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import Sidebar from './Components/Sidebar/Sidebar';
// import other user pages if any

const App = () => {
  return (
    <>
      <Navbar />
       <Sidebar/>
      <Routes>
        {/* Admin panel */}
        <Route path="/admin/*" element={<Admin />} />

        {/* Default route: redirect to admin panel or user page */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </>
  );
};

export default App;
