import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'

const LoginPage = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

    const login = async(e) => {
      e.preventDefault()
       const res = await fetch('http://localhost:4000/login',{
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers:{
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
      if(res.ok){
        setRedirect(true)
      }else{
        alert("Wrong Credentials")
      }
    }

    if(redirect){
      return <Navigate to="/" />
    }
  return (
    <form onSubmit={login} className='login'>
        <h1>Login</h1>
      <input 
      type="text" 
      placeholder='username' 
      value={username} 
      onChange={(e) => setUserName(e.target.value)}
      />

      <input 
      type="password" 
      placeholder='password' 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login</button>
    </form>
  )
}

export default LoginPage
