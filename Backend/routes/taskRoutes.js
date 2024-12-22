import express from 'express'
import taskController from '../controllers/task.controllers.js'

const taskRoutes = express.Router()


taskRoutes.get("/",taskController.getAllTasks)
taskRoutes.post("/add/",taskController.addTask)
taskRoutes.put("/:id",taskController.updateTask)
taskRoutes.delete("/:id",taskController.deleteTask)


export default taskRoutes;