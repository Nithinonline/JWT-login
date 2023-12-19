const express= require("express")
const connectDB = require("./DB/connect")
const cors=require("cors")
const notFound=require("./Middlewares/notfound")
const task = require("./routes/items1")
require ("dotenv").config()
const cookieParser= require("cookie-parser")

const errorHandlerMiddleware= require("./Middlewares/errorHandlerMiddleware")
const app= express()

require("express-async-errors")

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use("/demo", task)

app.use(notFound)
app.use(errorHandlerMiddleware)




const start=async()=>{ 
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(9000,()=>{
            console.log("server is running in 9000");
        })

    }
    catch(error){
console.log(error);
    }
}
start()