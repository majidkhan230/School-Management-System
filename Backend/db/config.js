import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGDB_URI)
        console.log("Connected to MongDB sucessfully")
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDB
