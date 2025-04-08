import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddChild from './components/AddChild';
import HomePage from './pages/HomePage';
import LoginSignup from './components/LoginSignup';
import ParentDashboard from './components/ParentDashboard';
import React from 'react';
import StudentDashboard from './components/StudentDashboard';
import VanDriverDashboard from './components/VanDriverDashboard';
import ViewChildDetails from './components/ViewChildDetails';

const App = () => {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/register" element={<LoginSignup/>} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/van-driver-dashboard" element={<VanDriverDashboard />} />
        <Route path="/add-child" element={<AddChild />} />
        <Route path="/view-child-details" element={<ViewChildDetails />} />
      </Routes>
    
    </Router>
  );
};

export default App;