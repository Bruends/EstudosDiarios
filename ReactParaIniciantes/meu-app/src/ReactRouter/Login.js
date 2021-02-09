import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  function handleLogin(){
   navigate('/contatos')
  }

  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
