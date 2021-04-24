//GET /notes should return the notes.html file.

//GET * should return the index.html file

const router = require("express").Router();
const path = require("path");

//route to notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//route everything else to index.html
//order maters * wildcard should always be last
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
