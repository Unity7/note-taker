const fs = require("fs");
const path = require("path");
//require db json file
const db = require("../db/db.json");

function createNewNote(body, notes) {
  const note = body;
  note.id = db.length.toString();
  db.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(db),
    null,
    2
  );

  return db;
}

module.exports = {
  createNewNote,
};
