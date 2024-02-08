import React from 'react'
import Post from '../Post/Post'
import './Home.css'

const Home = () => {
  return (
     <>
         <div className="upper-part">
              <div className="description">
                  <h1>HAVE A QUESTION?</h1>
                  <p>If you have any question you can ask below or enter what you are looking for!</p>

                  <input type="text" placeholder='Type your search terms here..' />
                  <button>search</button>
              </div>
         </div>

         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>


         

     </>
  )
}

export default Home