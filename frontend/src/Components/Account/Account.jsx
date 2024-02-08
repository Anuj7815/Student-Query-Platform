import React from 'react'
import './Account.css'
import pic from '../Account/my_img.jpeg'
import Post from '../Post/Post'

const Account = () => {
    return (
        <>
            
            <div className="profile-background">
                <div className="left-profile">
                    <img src={pic} alt="" />
                    <div className="profile-name">
                        <h2>Anshul Bansal</h2>

                    </div>
                </div>
                <div className="right-profile">
                        <button>Log Out</button>
                        <div className="details">
                              <div className="page">
                                  <h1>9999</h1>
                                  <br />
                                  <p>Followers</p>
                              </div>
                              <div className="page">
                                  <h1>10</h1>
                                  <br />
                                  <p>Followings</p>
                              </div>
                              <div className="page">
                                  <h1>164</h1>
                                  <br />
                                  <p>Post</p>
                              </div>
                        </div>
                </div>
            </div>
            <Post/>
            <Post/>

        </>
    )
}

export default Account