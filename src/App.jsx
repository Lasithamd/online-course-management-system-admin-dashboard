import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/User/Login/Login'
import Register from './pages/User/Register/Register.jsx'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
function App() {
    const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('stu-login');
    console.log(token);
    
    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }

  }, [])
  const Auth=()=>{
    return(
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    )
    
      }
  return (
    <>
    {
      auth ? <Auth /> : <Login />  
    }
    </>
   
    )
}

export default App
