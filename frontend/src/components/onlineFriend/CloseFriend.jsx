import React from 'react'
import './closeFriend.css'
function CloseFriend({user}) {
    return (
        <div>
         <li className="sidebar__friendListItem">
         <img className="sidebar__friendListImg" src={`assets/${user.profilePicture}`} alt="" />
         <span className="sideBar__friendName">{user.username}</span>
        </li>
        </div>
    )
}

export default CloseFriend
