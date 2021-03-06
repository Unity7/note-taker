// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//------------------------------- Require Section -------------------------------//
const express = require("express");

const fs = require("fs");

//provides utilities for working with file and directory paths. It ultimately makes working with our file system a little more predictable
const path = require("path");

//create an instance of the express module and name it app
const app = express();

//set the port for the server. Process.env.PORT will be the dynamic port # when deploymed remotely; otherwise use 3001 for local port.
const PORT = process.env.PORT || 3001;

//import Routes directories. Program will automatically read the index.js file in these directories
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//require db json file
const db = require("./db/db.json");
//------------------------------- End of Require Section -------------------------------//
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//------------------------------- Middleware Section -------------------------------//
//middleware function mounted to server
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

//middleware to make static files available
app.use(express.static("public"));

//for /api use apiRoutes
//for / index use htmlRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//
//
//------------------------------- End of Middleware Section -------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
