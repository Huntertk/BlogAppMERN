import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {

  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(res => {
      res.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, [])
  const username = userInfo?.username

  const logout =  () => {
    fetch('http://localhost:4000/logout', {
      method:"POST",
      credentials:'include',
    })
    setUserInfo({})
  }

  return (
    <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && (
          <>
          <Link to="/create">Create new Post</Link>
          <a onClick={logout}>Logout</a>
          </>
        )
        } 
        {
          !username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )
        }
        </nav>
      </header>
  )
}

export default Header
