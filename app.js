require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const port=process.env.PORT || 8000;
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser')
const AuthRoutes=require("./Routes/auth");
const UserRoutes=require("./Routes/users");
const PostRoutes=require("./Routes/post");
const CatRoutes=require("./Routes/categories");
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("connected")
})
const corsOptions = {
    origin: "https://strong-donut-16adba.netlify.app/",
    methods: 'GET, POST, PUT, DELETE',
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use("/api/auth",AuthRoutes)
app.use("/api/users",UserRoutes)
app.use("/api/posts",PostRoutes)
app.use("/api/cats",CatRoutes)
app.listen(port,()=>{
    console.log(`listening on ${process.env.PORT}`);
})
