import React from 'react'
import './Users.css'
import pic from '../Users/my_img.jpeg'

const Users = () => {
  return (
    <>
        <div className="user-box">
               
                <img src={pic} alt="" />
                <h2>anshul bansal</h2>
                <div className="row-box">
                       <div className="box1">
                         <h1>106</h1>
                         <p>Followers</p>
                       </div>
                       <div className="box1">
                         <h1>78</h1>
                         <p>Followings</p>
                       </div>
                       <div className="box1">
                         <h1>12</h1>
                         <p>Post</p>
                       </div>
                </div>
                <button>Show More</button>
        </div>

    </>
  )
}

export default Users