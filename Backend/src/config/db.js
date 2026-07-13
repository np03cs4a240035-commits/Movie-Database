
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});

const   dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL) 
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        process.exit();
    }
}

export default dbConnection;