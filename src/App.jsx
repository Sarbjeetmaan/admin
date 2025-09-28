// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import './App.css'; // make sure App.css is imported

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
