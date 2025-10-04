import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import Sidebar from './Components/Sidebar/Sidebar';


const App = () => {
  return (
    <>
      <Navbar />
       
      <Routes>
      
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </>
  );
};

export default App;
