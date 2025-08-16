import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      {/* Placeholder routes for future pages */}
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/settings" element={<div>Settings</div>} />
    </Routes>
  );
}

export default App;
