import React, { useEffect } from 'react'
import './Allusers.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Action/User'
import Loader from '../Loader/Loader'
import Users from "../Users/Users"



const Allusers = () => {

  const dispatch = useDispatch();
  const { loading, users } = useSelector(state => (state.allUsers));

  

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  return (

    loading ? <Loader /> : (
      <>
        <div className="search-box">
          <input
            type='text'
            placeholder='Search for a User' 
            // value={searchTerm}
            // onChange={(e)=>setSearchTerm(e.target.value)}
            />
          
        </div>

        <div className="main-box">

          {
            users ? users.map((user) => (
              <Users
                userId={user._id}
                name={user.name}
                avator={user.avatar.url}
                followers={user.followers.length}
                followings={user.following.length}
                post={user.posts.length}
              />
            )) :
              <h2>No Users Yet</h2>
          }
        </div>
      </>
    )
  )
}

export default Allusers