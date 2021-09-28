const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")
const app = express()
const userRoute = require("./route/user.js")
const authRoute = require("./route/auth.js")
const postRoute = require("./route/post.js")

dotenv.config()

// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true},()=>{
//     console.log("connected to mongodb successfully")
// })

 mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("Database connected!")).catch(err => console.log(err));

//const post = await new Post.findById(req.params.id)
// can anyone tell me when to use new keyword in the model calling

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)

app.listen(8800,()=>{
    console.log("Backend server is runing successfully!")
})