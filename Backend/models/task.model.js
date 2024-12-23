import mongoose, { Schema } from "mongoose";

const taskSchema  = new Schema({
    title:{
        type:String,
    },
    description:{
        type:String
    },
    date:{
        type:Date
    }

},{timestamps:true})

const taskModel = mongoose.model('task',taskSchema)

export default taskModel