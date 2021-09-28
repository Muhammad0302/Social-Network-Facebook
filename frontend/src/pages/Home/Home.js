import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import ToolBar from '../../components/toolBar/TopBar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import './Home.css'
function Home() {
    return (
        <>
            <ToolBar />
            <div className="Home__container">
                <Sidebar />
                <Feed />
                <Rightbar profile={false} />
            </div>
        </>
    )
}

export default Home
