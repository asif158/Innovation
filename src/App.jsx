import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [token])

  const handleLogin = () => {
    setToken(localStorage.getItem('token'))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

const PrivateRoute = () => {
  const token = localStorage.getItem('token')

  return token ? <Home token={token} /> : <Navigate to="/login" replace />
}

export default App
