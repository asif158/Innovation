import { useState } from 'react'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [token, setToken] = useState(null)

  const handleLogin = (loginToken) => {
    setToken(loginToken)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/login"
          element={() =>
            token ? redirect('/') : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/"
          index
          render={() => (token ? <Home token={token} /> : redirect('/login'))}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
