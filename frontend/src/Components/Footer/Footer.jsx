import React from 'react'
import './Footer.css'
import logo_img from '../Footer/logo.png'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="content">
            <img src={logo_img} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti incidunt voluptates, omnis vel repudiandae illum sequi non nemo perspiciatis reiciendis blanditiis. Enim quibusdam sequi vitae consequatur, veritatis quasi quisquam.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Footer