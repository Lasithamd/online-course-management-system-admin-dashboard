import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/User/Login/Login';
import Register from './pages/User/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Student from './pages/Student/Student';
import CreateStudent from './pages/Student/CreateStudent';
import EditStudent from './pages/Student/EditStudent';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('stu-login');
    setAuth(!!token); // Simplifies the auth check
  }, []);

  return (
 
      <Routes>
        {auth ? (
          <>
           
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/edit/:id" element={<EditStudent />} />           
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/student/create" element={<CreateStudent />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </>
        )}
        <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/login"} />} />
      </Routes>
  
  );
}

export default App;
