import express, { urlencoded } from "express"
import cors from "cors"

const app = express();


app.use(cors())
app.use(express.json())




app.get("/",(req,res)=>{
    res.status(200).send("welcome to home of LMS")
})





export default app;