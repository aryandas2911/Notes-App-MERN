const express= require ("express");
const notesRoutes= require("./routes/notesRoutes.js")

const app= express();

app.use("/api/notes", notesRoutes)

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});