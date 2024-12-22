import express from 'express'
import taskController from '../controllers/task.controllers.js'

const taskRoutes = express.Router()


taskRoutes.get("/",taskController.getAllTasks)
taskRoutes.post("/add/",taskController.addTask)
taskRoutes.put("/update/:id",taskController.updateTask)
taskRoutes.delete("/delete/:id",taskController.deleteTask)


export default taskRoutes;