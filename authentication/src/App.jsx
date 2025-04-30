import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Logout from './pages/Logout'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Welcome to Authentication App</h1>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/singup" element={<Singup/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>

    </Routes>
    </>
    
  )
}

export default App
