import React, { useState } from 'react';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      {view === 'register' && <Register navigateToLogin={navigateToLogin} />}
      {view === 'login' && <Login navigateToDashboard={navigateToDashboard} />}
      {view === 'adminDashboard' && <AdminDashboard />}
      {view === 'userDashboard' && <UserDashboard />}
    </div>
  );
};

export default App;
