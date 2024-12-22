import taskModel from "../models/task.model"

async function getAllTasks(req,res){
    try {
        const allTasks = await taskModel.find()
res.status(200).send({
    message:"OK",
    data: allTasks
})
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error: error.message
        })
    }
}
async function addTask(req,res){
    const taskData  = req.body
    try {
        const allTasks = await taskModel.create(taskData)
res.status(201).send({
    message:"task sucessfully created",
    data: taskData
})
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error: error.message
        })
    }
}
async function updateTask(req,res){

}
async function deleteTask(req,res){
}


const taskController = {getAllTasks,addTask,updateTask,deleteTask}


export default taskController;