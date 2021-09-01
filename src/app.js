// Require the express
// Make sure you have express installed
// Otherwise it will throw an error
const express = require("express");
// The port that server will listen to
const port = process.env.PORT || 3000;
// The app which is using the express function
const app = express();

// Require the route file
// Which exports a default function to load all the routes
const loadRoutes = require("./route");

// Set the view engine to ejs
// Make sure you have ejs installed
// Otherwise it will throw an error
app.set("view engine", "ejs");

// Set all the files from views folder
// This is where are we going to put our EJS files
app.set("views", __dirname + "/views");

// Set all the files from public folder
// This is where are we going to put our html CSS/JS files.
app.use(express.static(__dirname + "/public"));

// This function helps us to load the routes
// Instead of doing it manually
loadRoutes(app);

// Note you should always make the global at last
// Else every endpoint will be messed up
app.get("*", (req, res) => {
    res.status(404).json({
        message: "Error 404",
        error: true
    });
});

app.listen(port, () => {
    console.log(
        `Server is ready\nListening to port: ${port}`
    );
});