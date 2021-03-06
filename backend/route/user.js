const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User.js")

//update user
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
     if(req.body.password){
         try{
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt)
         }catch(error){
             res.status(500).json(error)
         }
     }
     try{
          const user = await User.findByIdAndUpdate(req.params.id,{$set: req.body})
          res.status(200).json("Account has been updated successfully")
     }catch(error){
        res.status(500).json(error)
     }
    }else{
        return res.status(403).json("You can update only your account!")
    }
})

//delete user
router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
     try{
 
        //  await User.deleteOne({_id: req.params.id})  
 
        await User.findByIdAndDelete(req.params.id)
         return res.status(200).json("Account has been deleted successfully")
     }catch(error){
        return res.status(500).json(error)
     }
    }else{
        return res.status(403).json("You can't delete only this data!")
    }
})

//get a user
router.get("/",async(req,res)=>{
    // Point to be noted
    const userId = req.query.userId;
    const username = req.query.username
     try{
         const user = userId ? await User.findById(userId)
         : await User.findOne({username: username})
         //You will get all document except these two attributes password/updatedAt
          const {password,updatedAt, ...other} = user._doc
      
         return res.status(200).json(other)
     }catch(error){
        return res.status(500).json(error)
     }
})


//follow user
router.put("/:id/follow",async(req,res)=>{
    if(req.body.userId !=req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
               await user.updateOne({$push: {followers: req.body.userId}})
               await currentUser.updateOne({$push: {followings: req.params.id}})
               res.status(200).json("User has been followed")
            }else{
                res.status(403).json("You already follow this User")
            }
        }catch(err){
            return res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't follow yourself")
    }
})

//unfollow user
router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId !=req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
               await user.updateOne({$pull: {followers: req.body.userId}})
               await currentUser.updateOne({$pull: {followings: req.params.id}})
               res.status(200).json("User has been unfollowed")
            }else{
                res.status(403).json("You don't  follow this user")
            }
        }catch(err){
            return res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't unfollow yourself")
    }
})


// router.get("/",(req,res)=>{
//     res.send("hey it's user route")
// })

module.exports = router
