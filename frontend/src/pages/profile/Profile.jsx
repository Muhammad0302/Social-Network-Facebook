import React, { useState,useEffect } from 'react'
import './profile.css'
import axios from 'axios'
import { useParams } from 'react-router'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import ToolBar from '../../components/toolBar/TopBar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
function Profile() {
    const username = useParams().username
    // console.log(username)
    const [Users,setUsers] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const url = 'http://localhost:8800/api'
    useEffect(() => {
      const fetchUser = async ()=>{
          const res = await axios.get(`${url}/users?username=${username}`)
            // console.log(res.data)
          setUsers(res.data)           
      }
     fetchUser()
    }, [])
    return (
        <>
        <ToolBar />
        <div className="profile">
            <Sidebar />
            <div className="profile__right">
                <div className="profile__rightTop">
                    <div className="profile__cover">
                    <img className="profile__CoverImg" src={"/assets/" + Users.coverPicture} alt="" />
                    <img className="profile__userImg" src={`/assets/${Users.profilePicture}`} alt="" />
                    </div>
                    <div className="profile__info">
                        <h4 className="profile__infoName">
                         {Users.username}
                        </h4>
                        <span className="profile__infoDesc">
                        {Users.desc}
                        </span>
                    </div>
                </div>
                <div className="profile__rightBottom">
                <Feed username={username} />
                <Rightbar user={Users} /> 
                </div>
            </div>

        </div>
    </>
    )
}

export default Profile
