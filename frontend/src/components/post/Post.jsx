import React,{useState,useEffect} from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
// import {Users} from '../../dummyData'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
function Post({post}) {
  const [like,setLike] = useState(post.likes.length)
  const [isLike,setIsLike] = useState(false)
  const [Users,setUsers] = useState({})
  const url = 'http://localhost:8800/api'
  useEffect(() => {
    const fetchUser = async ()=>{
        const res = await axios.get(`${url}/users?userId=${post.userId}`)
        //  console.log(res.data)
        setUsers(res.data)           
    }
   fetchUser()
}, [post.userId])

  const HandleLike = () =>{
      setLike(isLike ? like - 1 : like + 1)
      setIsLike(!isLike)
  }

    return (
        <div className="post">
           <div className="post__wrapper">
               <div className="post__top">
                   <div className="post_topLeft">
                       {/* <img className="post__profileImg" src={`/assets/${Users.filter((user)=>user.id === post?.userId)[0].profilePicture}`} alt="" /> */}
                       <Link to={`profile/${Users.username}`}>
                       <img className="post__profileImg" src={`/assets/${Users.profilePicture}`} alt="" />
                       </Link>
                       {/* <span className="post__username">{Users.filter((user)=>user.id === post?.userId)[0].username}</span>  */}
                       <span className="post__username">{Users.username}</span> 
                       <span className="post__userDate">{format(post.createdAt)}</span>

                   </div>
                   <div className="post__topRight">
                       <MoreVert />
                   </div>
               </div>
               <div className="post__center">
                   <span className="post__text">{post?.desc}</span>
                   <img className="post__img" src={`/assets/${post.img}`} alt="" />
                    
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
