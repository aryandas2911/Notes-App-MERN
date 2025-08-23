import mongoose, { Model, Mongoose, Schema } from "mongoose";

const noteSchema= new Schema({
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

