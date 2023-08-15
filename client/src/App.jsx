import React from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
