import React from 'react'
import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@material-ui/icons'
function Share() {
    return (
        <div className="share">
           <div className="share__wrapper">
               <div className="share__top">
                <img className="share__profileImage" src="/assets/person/1.jpeg" alt="" />
                <input type="text" placeholder="What's in your mind Ismail?" className="share__input" /> 
               </div>
               <hr className="share__hr" />
               <div className="share__bottom">
                 <div className="share__options">
                 <div className="share__option">
                     <PermMedia htmlColor="tomato" className="share__icon" />
                     <span className="share__optionText">Photo or video</span>
                 </div>
                 <div className="share__option">
                     <Label htmlColor="blue" className="share__icon" />
                     <span className="share__optionText">Tag</span>
                 </div>
                 <div className="share__option">
                     <Room htmlColor="green" className="share__icon" />
                     <span className="share__optionText">Location</span>
                 </div>
                 <div className="share__option">
                     <EmojiEmotions htmlColor="goldenrod" className="share__icon" />
                     <span className="share__optionText">Feelings</span>
                 </div>
                  
                  <button className="share__button">Share</button>
                 </div> 
               </div>
           </div>
        </div>
    )
}

export default Share
