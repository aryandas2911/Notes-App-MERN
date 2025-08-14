import mongoose from "mongoose"

export const connectDB = async () => {
     try {
        await mongoose.connect("mongodb+srv://aryandas2911:223iEHMDG0fG5kmZ@notesapp.jhm2uns.mongodb.net/?retryWrites=true&w=majority&appName=notesapp")
        console.log("MongoDB connected successfully!!")
     } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1); //exit with failure
     }
}