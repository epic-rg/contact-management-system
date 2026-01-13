import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected!");
        
    } 

    catch(error){
        console.error("MongoDB was not able to connect:", error.message);
        process.exit(1);         
    }
}

export default connectDB;