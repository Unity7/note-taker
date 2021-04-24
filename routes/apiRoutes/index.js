//GET /api/notes should read the db.json file and return all saved notes as JSON
const router = require("express").Router();
const { writeFile } = require("fs");
const path = require("path");

//require db json file
const db = require("../../db/db.json");
const { createNewNote } = require("../../lib/notes");

//Get route to notes data
router.get("/notes", (req, res) => {
  let results = db;
  res.json(results);
});

//Post route to notes data
router.post("/notes", (req, res) => {
  let newNote = req.body;
  createNewNote(req.body, db);
  res.json(db);
});

module.exports = router;
