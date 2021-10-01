import React from 'react'
import './online.css'
function Online({user}) {
    // console.log(user)
    return (
        <div>
                 <li className="rightbar__friend">
                  <div className="rightbar__piContainer">
                      <img className="rightbar__profileImg" src={`assets/${user.profilePicture}`} alt="" />
                      <span className="rightbar__online"></span>
                  </div>
                   <span className="rightbar_username">{user.username}</span>
                  </li> 
        </div>
    )
}

export default Online
