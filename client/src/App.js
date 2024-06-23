import React, { useState } from 'react';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";


const App = () => {
  const [view, setView] = useState('register');

  const navigateToLogin = () => {
    setView('login');
  };

  const navigateToDashboard = (role) => {
    if (role === 'admin') {
      setView('adminDashboard');
    } else {
      setView('userDashboard');
    }
  };

  return (
    <div>
      <Routes>
      <Route element={<AdminDashboard/>}path="/AdminDashboard"></Route>
      </Routes>
    </div>
  );
};

export default App;
