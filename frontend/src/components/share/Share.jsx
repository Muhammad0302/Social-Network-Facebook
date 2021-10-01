import React from 'react'
import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@material-ui/icons'
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";

function Share() {
     const url = 'http://localhost:8800/api/'
     const [file, setFile] = useState(null);
    // const desc = useRef();
    // const { user } = useContext(AuthContext);
    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const newPost = {
    //       userId: user._id,
    //       desc: desc.current.value,
    //     };
    //     if (file) {
    //       const data = new FormData();
    //       const fileName = Date.now() + file.name;
    //       data.append("name", fileName);
    //       data.append("file", file);
    //       newPost.img = fileName;
    //       console.log(newPost);
    //       try {
    //         await axios.post(url+"upload", data);
    //       } catch (err) {}
    //     }
    //     try {
    //       await axios.post("/posts", newPost);
    //       window.location.reload();
    //     } catch (err) {}
    //   };

    return (
        <div className="share">
           <div className="share__wrapper">
               <div className="share__top">
                <img className="share__profileImage" src="/assets/person/1.jpeg" alt="" />
                <input type="text" placeholder="What's in your mind Ismail?" className="share__input" /> 
               </div>
               <hr className="share__hr" />
               {/* <form className="share__bottom" onSubmit={submitHandler}> */}
               <form className="share__bottom">
                 <div className="share__options">
                 <label htmlFor="file" className="share__option">
                     <PermMedia htmlColor="tomato" className="share__icon" />
                     <span className="share__optionText">Photo or video</span>
                     <input
                        style={{ display: "none" }}
                        type="file"
                        id="file"
                        accept=".png,.jpeg,.jpg"
                        onChange={(e) => setFile(e.target.files[0])}
                    />    
                 </label>
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
                  
                  <button type="submit" className="share__button">Share</button>
                 </div> 
               </form>
           </div>
        </div>
    )
}

export default Share
