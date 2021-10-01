import React from 'react'
import './toolBar.css'

//when You are importing icons like below from mui then there is no need to mention
// icons. Remove Icon word from each icon importing

import {Search,Person,Chat,Notifications} from '@material-ui/icons';
import {Link} from 'react-router-dom'
// import Search from '@material-ui/icons/Search';
// import PersonIcon from '@material-ui/icons/Person';
function TopBar() {
    return (
        <div className="topBar__container">
           <div className="topBar__left">
               <Link to="/" style={{textDecoration: 'none'}}>
               <div className="topbar__log">Social Network</div>
               </Link>
            </div>
            <div className="topBar__center">
                <div className="topBar__searchbar">
                <Search className="topBar__searchIcon" />
                <input type="text" placeholder="Search for friend, post or video" className="topBar__searchInput" />

                </div>
            </div>
            <div className="topBar__right">
                <div className="topBar__links">
                 <span className="topBar__link">Home</span>
                 <span className="topBar__link">Timeline</span>
                </div>
                <div className="topBar__icons">
                  
                    <div className="topBar__iconItem">
                    <Person />
                    <span className="topBar__iconBadge">1</span>
                    </div>

                    <div className="topBar__iconItem">
                    <Chat />
                    <span className="topBar__iconBadge">2</span>
                    </div>
                      
                    <div className="topBar__iconItem">
                    <Notifications />
                    <span className="topBar__iconBadge">1</span>
                    </div>
                            
                </div>
            </div> 
            <img src="/assets/person/1.jpeg" alt="account pic"  className="
            topBar__img"/>            
        </div>
    )
}

export default TopBar
