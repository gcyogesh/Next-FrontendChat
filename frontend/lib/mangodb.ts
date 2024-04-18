import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const mongoURI = process.env.MANGODB_URI 
        if (!mongoURI) {
            throw new Error('MongoDB URI is not provided.');
        }
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

    } catch (err) {
        console.log("Error connecting to MongoDB", err);
    }
}
