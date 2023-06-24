const express=require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors=require("cors");
const path=require("path")
const connection = require("./config/dbConnect");
const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");
const doctorModel = require("./models/doctorModel");
const docRouter = require("./routes/doctorRoutes");
require('dotenv').config()
const app=express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

app.get("/",(req,res)=>{
    res.send("This is Home page")
})

app.use("/api/user",userRouter)
app.use("/api/admin",adminRouter)
app.use("/api/doctor",docRouter );

app.use(express.static(path.join(__dirname,'./frontend/build')))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})
const port=process.env.port;
app.listen(port,async()=>{

    try {
        await connection
        console.log(`Data base is connected`.bgGreen.green)
    } catch (error) {
        console.log(`Data base is not  connected ${error.message}`.bgRed.red)
    }
    console.log(`Server is running over ${port}`.bgCyan.white)
})