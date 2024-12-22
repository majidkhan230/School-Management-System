import express, { urlencoded } from "express"
import cors from "cors"
import taskRoutes from "./routes/taskRoutes.js";

const app = express();


app.use(cors())
app.use(express.json())




app.get("/",(req,res)=>{
    res.status(200).send("welcome to home of LMS")
})

app.use('/tasks',taskRoutes)



export default app;