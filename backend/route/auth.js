const router = require("express").Router()
const User = require("../models/User.js")
const bcrypt = require("bcrypt")

// REGISTER
router.post("/register",async(req,res)=>{
   try{
    //securing password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password,salt)
    const newUser = new User({
       username: req.body.username,
       email: req.body.email,
       password: hashPassword
   }) 
   const user =  await newUser.save()
   res.status(200).json(user)
  }catch(error){
      console.log("error while registering user"+error)
  } 
})

// login
router.post("/login",async(req,res)=>{
    try{
      const user = await User.findOne({email: req.body.email})
      !user && res.status(404).json("User not found")
      const validPassword = await bcrypt.compare(req.body.password,user.password)
      !validPassword && res.status(404).json("The password is invalid")
      res.status(200).json("User login successfully")
   }catch(error){
       console.log("error while registering user"+error)
   } 
 })
 

module.exports = router
