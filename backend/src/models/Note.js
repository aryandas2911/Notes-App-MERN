import mongoose, { Mongoose } from "mongoose";

const noteSchema= new Mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},{timestamps:true})

export const Note= mongoose.model("Note",noteSchema)

