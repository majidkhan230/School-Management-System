import connectDB from "./db/config.js";
import app from "./index.js";
import dotenv from "dotenv"



dotenv.config()


const PORT = process.env.PORT || 8000 


app.listen(PORT,()=>{
    console.log(`server is sucessfully started on ${PORT}`)
    connectDB();
})