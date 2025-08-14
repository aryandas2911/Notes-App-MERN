import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

connectDB();

const app= express();

app.use("/api/notes", notesRoutes)

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});