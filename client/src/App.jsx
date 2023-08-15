import React from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { UserContextProvider } from '../UserContext'


const App = () => {
  return (
    
    <BrowserRouter>
    <UserContextProvider >
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
  </UserContextProvider>
    </BrowserRouter>
    
  )
}

export default App
