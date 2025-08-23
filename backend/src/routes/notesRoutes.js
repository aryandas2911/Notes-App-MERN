import { createNote, deleteNote, getAllNotes, getNotebyId, updateNote } from "../controllers/notesController.js";
import express from "express";

const router= express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNotebyId);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router


