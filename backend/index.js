const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")
const app = express()
const userRoute = require("./route/user.js")
const authRoute = require("./route/auth.js")
const postRoute = require("./route/post.js")
var cors = require('cors')
// const multer = require("multer");
// const path = require("path");
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

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "public/images");
//     },
//     filename: (req, file, cb) => {
//       cb(null, req.body.name);
//     },
//   });
  
//   const upload = multer({ storage: storage });
//   app.post("/api/upload", upload.single("file"), (req, res) => {
//     try {
//       return res.status(200).json("File uploded successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   });

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)
app.use(cors())

app.listen(8800,()=>{
    console.log("Backend server is runing successfully!")
})