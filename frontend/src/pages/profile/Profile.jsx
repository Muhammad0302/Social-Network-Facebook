import React from 'react'
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import ToolBar from '../../components/toolBar/TopBar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
function Profile() {
    return (
        <>
        <ToolBar />
        <div className="profile">
            <Sidebar />
            <div className="profile__right">
                <div className="profile__rightTop">
                    <div className="profile__cover">
                    <img className="profile__CoverImg" src="/assets/post/3.jpeg" alt="" />
                    <img className="profile__userImg" src="/assets/person/7.jpeg" alt="" />
                    </div>
                    <div className="profile__info">
                        <h4 className="profile__infoName">
                         Muhammad Ismail
                        </h4>
                        <span className="profile__infoDesc">
                        Hello, My friends
                        </span>
                    </div>
                </div>
                <div className="profile__rightBottom">
                <Feed />
                <Rightbar profile={true} /> 
                </div>
            </div>

        </div>
    </>
    )
}

export default Profile
