import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const express= require("express");

const router= express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router


