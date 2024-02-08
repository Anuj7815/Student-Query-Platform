import React from 'react'
import './Post.css'
import image from '../Post/query.png'
import {Avatar} from '@mui/material'

const Post = () => {
  return (
    <>
      <div className="box">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="right-section">
          <p className='query'>In the given picture, please solve the error in this code</p>
          <div className="solution-box">
              <button>Gave Solution</button>
          </div>
          <div className="profile">
                 <div className="profile-image">
                     <Avatar/>
                 </div>
                 <div className="user-name">
                      <a href="">anshul_bansal</a>
                 </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post