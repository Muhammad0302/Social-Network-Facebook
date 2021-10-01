import React from 'react'
import Online from '../Online/Online'
import './rightbar.css'
import {Users} from '../../dummyData'
import Profile from '../../pages/profile/Profile'
function Rightbar({user}) {
//    console.log(user)
    const Rightbar__home = () =>{
      return (
          <>
              <div className="rightbar__bdContainer">
                <img className="rightbar__bdImg" src="assets/gift.png" alt="" />
                <span className="rightbar__bdText">
                    <b>Pola Foster</b> and <b>three other friends</b> have a birthday today
                </span>
               </div>
               <img className="rightbar__ad" src="assets/ad.png" alt="" />
               <h4 className="rightbar__title">
                   Online Friends
               </h4>
             <ul className="rightbar__friendList">
                {
                    Users.map((user)=>(
                     <Online key={user.id} user={user} />   
                    ))
                }  
             </ul> 
          </>
      )
  }
  const Rightbar__profile = () =>{
    return (
        <>
             <h4 className="rightbar__title">User Information</h4>
             <div className="rightbar__info">
             <div className="rightbar__infoItem">
                 <span className="rightbar__infoKey">City: </span>
                 <span className="rightbar__infoValue">{user.city}</span>
             </div>
             <div className="rightbar__infoItem">
                 <span className="rightbar__infoKey">From: </span>
                 <span className="rightbar__infoValue">{user.from}</span>
             </div>
             <div className="rightbar__infoItem">
                 <span className="rightbar__infoKey">Relationship: </span>
                 <span className="rightbar__infoValue">{user.relationship == 1 ? "Single" : user.relationship == 2 ? "Maried" : "-"}</span>
             </div>
             </div>   
             <h4 className="rightbar__title">User friends</h4>
             <div className="rightbar__followings">
             <div className="rightbar__following">
                 <img src="/assets/person/1.jpeg" className="rightbar__followingImg" alt="" />
                 <span className="rightbar__followingName">Jhon Carter</span>
             </div>
             <div className="rightbar__following">
                 <img src="/assets/person/2.jpeg" className="rightbar__followingImg" alt="" />
                 <span className="rightbar__followingName">Jhon Carter</span>
             </div>
             <div className="rightbar__following">
                 <img src="/assets/person/3.jpeg" className="rightbar__followingImg" alt="" />
                 <span className="rightbar__followingName">Jhon Carter</span>
             </div>
             <div className="rightbar__following">
                 <img src="/assets/person/4.jpeg" className="rightbar__followingImg" alt="" />
                 <span className="rightbar__followingName">Jhon Carter</span>
             </div>
             <div className="rightbar__following">
                 <img src="/assets/person/5.jpeg" className="rightbar__followingImg" alt="" />
                 <span className="rightbar__followingName">Jhon Carter</span>
             </div>
             </div>    
        </>
    )
   }
    return (
        <div className="rightbar">
           <div className="rightbar__wrapper">
             {/* <Rightbar__home /> */}
             {user ? <Rightbar__profile /> : <Rightbar__home /> }
             
           </div>
        </div>
    )
}

export default Rightbar
