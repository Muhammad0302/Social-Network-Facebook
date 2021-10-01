import React, { useState,useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import {Posts} from '../../dummyData'
const url = 'http://localhost:8800/api/'
function Feed({username}) {
    const [Posts,setPosts] = useState([])
    useEffect(() => {
        const fetchPost = async ()=>{
            const res = username ?  await axios.get(url+'post/profile/'+username) 
            : await axios.get(url+'post/timeline/614bf03c056a27376dcb9c96')
            setPosts(res.data)           
        }
       fetchPost()
    }, [username])
    return (
        <div className="feed">
           <div className="feed__wrapper">
              <Share />
              {
                  Posts.map(p=>(
                      <Post key={p._id} post={p} />
                  ))
              }
           </div>
        </div>
    )
}

export default Feed
