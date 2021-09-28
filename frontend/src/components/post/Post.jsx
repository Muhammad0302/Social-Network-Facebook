import React,{useState} from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
import {Users} from '../../dummyData'
function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLike,setIsLike] = useState(false)

  const HandleLike = () =>{
      setLike(isLike ? like - 1 : like + 1)
      setIsLike(!isLike)
  }
    return (
        <div className="post">
           <div className="post__wrapper">
               <div className="post__top">
                   <div className="post_topLeft">
                       <img className="post__profileImg" src={`/assets/${Users.filter((user)=>user.id === post?.userId)[0].profilePicture}`} alt="" />
                       <span className="post__username">{Users.filter((user)=>user.id === post?.userId)[0].username}</span> 
                       <span className="post__userDate">{post.date}</span>

                   </div>
                   <div className="post__topRight">
                       <MoreVert />
                   </div>
               </div>
               <div className="post__center">
                   <span className="post__text">{post?.desc}</span>
                   <img className="post__img" src={`/assets/${post.photo}`} alt="" />
                    
               </div>
               <div className="post__bottom">
                   <div className="post__bottomLeft">
                     <img onClick={HandleLike} className="post__likeIcon" src="/assets/like.png" alt="" />
                     <img onClick={HandleLike} className="post__likeIcon" src="/assets/heart.png" alt="" />                   
                     <span className="post__likeController">{like} people like it</span>
                   </div>
                   <div className="post__bottomRight">
                    <span className="post__commentText">{post.comment} comments</span>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Post
