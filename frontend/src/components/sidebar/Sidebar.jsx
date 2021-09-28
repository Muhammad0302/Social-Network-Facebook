import React from 'react'
import './sidebar.css'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from "@material-ui/icons";
import CloseFriend from '../onlineFriend/CloseFriend';
import {Users} from '../../dummyData'
function Sidebar() {
    return (
        <div className="sidebar">
             <div className="sidebar__wrapper">
                 <ul className="sidebar__list">
                     <li className="sidebar__listItem">
                        <RssFeed className="sidebar__icon" />
                        <span className="sidebar__listItemText">Feed</span>
                     </li>
                     <li className="sidebar__listItem">
                        <Chat className="sidebar__icon" />
                        <span className="sidebar__listItemText">Chats</span>
                     </li>
                     <li className="sidebar__listItem">
                        <PlayCircleFilledOutlined className="sidebar__icon" />
                        <span className="sidebar__listItemText">Videos</span>
                     </li>
                     <li className="sidebar__listItem">
                        <Group className="sidebar__icon" />
                        <span className="sidebar__listItemText">Groups</span>
                     </li>
                     <li className="sidebar__listItem">
                        <Bookmark className="sidebar__icon" />
                        <span className="sidebar__listItemText">Bookmarks</span>
                     </li>
                     <li className="sidebar__listItem">
                        <HelpOutline className="sidebar__icon" />
                        <span className="sidebar__listItemText">Questions</span>
                     </li>
                     <li className="sidebar__listItem">
                        <WorkOutline className="sidebar__icon" />
                        <span className="sidebar__listItemText">Jobs</span>
                     </li>
                     <li className="sidebar__listItem">
                        <Event className="sidebar__icon" />
                        <span className="sidebar__listItemText">Events</span>
                     </li>
                     <li className="sidebar__listItem">
                        <School className="sidebar__icon" />
                        <span className="sidebar__listItemText">Coures</span>
                     </li>
                 </ul>
                 <button className="sidebar__button">Show More</button>
                 <hr className="sidebar__hr" />
                 <ul className="sidebar__friendList">
                     {
                       Users.map((user)=>(
                        <CloseFriend key={user.id} user={user} />
                       ))
                     }
                  
                 </ul>
             </div>
        </div>
    )
}

export default Sidebar
