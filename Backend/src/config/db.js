
import mongoose from 'mongoose';
import dotenv from 'dotenv';
    
const dbConnection = async (path = "./.env") => {
    dotenv.config({ path });

    console.log("Mongo URL:", process.env.MONGODB_URL);

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit();
    }
};

export default dbConnection;