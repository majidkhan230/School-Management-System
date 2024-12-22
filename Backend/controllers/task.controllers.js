import taskModel from "../models/task.model.js"

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
    console.log(taskData)
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
    const id  = req.params.id
    // console.log(id)
    try {
        const task = await taskModel.findByIdAndUpdate(id,req.body)
res.status(201).send({
    message:"task sucessfully updated",
    data: task
})
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error: error.message
        })
    }
    

}
async function deleteTask(req,res){
    const id  = req.params.id
    console.log(id)
    try {
   const task =  await taskModel.findByIdAndDelete(id)
res.status(201).send({
    message:"task sucessfully deleted",
    data: task
})
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error: error.message
        })
    }
}


const taskController = {getAllTasks,addTask,updateTask,deleteTask}


export default taskController;