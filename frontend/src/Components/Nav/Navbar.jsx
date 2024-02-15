import React from 'react'
import './Navbar.css'
import logo  from '../Nav/logo2.png'
const Header = () => {
  return (
    <>
         <div className="main-nav">
            <div className="left">
                <img src={logo} alt="" />
            </div>
          <div className="right">
              <a href="/">HOME</a>
              <a href="/users">USERS</a>
              <a href="/profile">PROFILE</a>
              <a href="/newquery"> 
              <button>Create Query</button>
              </a>
          </div>
          
      </div>
    </>
  )
}

export default Header