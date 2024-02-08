import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
         <div className="nav">
         
          <div className="right">
                <a href="/login">LOGIN</a>
                <a href="/register">SIGNUP</a>
          </div>
      </div>
    </>
  )
}

export default Header