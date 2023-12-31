import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import '../../public/styles/Login.css'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    // e.preventDefault()
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          // username: 'kminchelle',
          // password: '0lelplR',
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        // console.log('Login successful. Response:', response.data)
        localStorage.setItem('token', response?.data?.token)
        navigate('/')
      } else {
        console.error('Login failed. Unexpected status:', response.status)
      }
    } catch (error) {
      console.error('Login failed:', error.message)
    }
  }
  return (
    <div className="login-form">
      <div id="login-form">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func,
}

export default Login
