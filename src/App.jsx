import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/User/Login/Login';
import Register from './pages/User/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Student from './pages/Student/Student';
import CreateStudent from './pages/Student/CreateStudent';
import EditStudent from './pages/Student/EditStudent';
import EditCourse from './pages/Course/EditCourse';
import CreateCourse from './pages/Course/CreateCourse';
import Course from './pages/Course/Course';
import Videos from './pages/Video/Videos';
import SingleVideos from './pages/Video/SingleVideos';
import './App.css';
import CreateVideo from './pages/Video/CreateVideo';
import AddStuCourse from './pages/Student/AddStuCourse';

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
          <Route path="/" element={location.pathname === '/' ? <Navigate to="/dashboard" /> : <Navigate to={location.pathname} />} />
          <Route path="/student/create" element={<CreateStudent />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/edit/:id" element={<EditCourse />} /> 
          <Route path="/video/create/:id" element={<CreateVideo />} />    
          <Route path="/video" element={<Videos />} />    
          <Route path="/video/:id" element={<SingleVideos />} />
          <Route path="/student-course/:id" element={<AddStuCourse />} />

          
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </>
      )}
      {/* <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/login"} />} /> */}
    </Routes>
  );
}

export default App;
