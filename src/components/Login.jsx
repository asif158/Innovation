import { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import '../../public/styles/Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: 'kminchelle',
          password: '0lelplR',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('login id and password are:', username, password)
      console.log('response:', response)

      if (response.status === 200) {
        console.log('Login successful. Response:', response.data)
        const loginToken = response.data.data.token
        console.log('Login Token:', loginToken)
        onLogin(loginToken)
      } else {
        console.error('Login failed. Unexpected status:', response.status)
      }
    } catch (error) {
      console.error('Login failed:', error.message)
    }
  }
  return (
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
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func,
}

export default Login
