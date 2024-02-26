import React from 'react'
import './Footer.css'
import logo from './preview-removebg-preview-modified.png';
// import XIcon from '@mui/icons-material/X';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footer-section">
        <div className="footer">
          <div className="footer-logo-section">
            <img src={logo} alt=''/>
            <h2>Student Query Platform</h2>
          </div>
          <div className="socialmedia-logo-section">
            <XIcon  style={{margin:20,backgroundColor:'white',borderRadius:'50%'}} />
            <LinkedInIcon style={{margin:20,backgroundColor:'white',borderRadius:'50%'}}/>
            <InstagramIcon style={{margin:20,backgroundColor:'white',borderRadius:'50%'}}/>
            <FacebookIcon style={{margin:20,backgroundColor:'white',borderRadius:'50%'}}/>
          </div>
          <div className="copyright-section">
            <h5>copyright @2024</h5>
          </div>
        </div>
      </div>
  )
}

export default Footer