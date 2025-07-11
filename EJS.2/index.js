const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res) => {
    res.send("Hello There");
});

app.get("/ig/:username", (req,res) => {
    let username = req.params.username;
    console.log(username);
    res.render("instagram.ejs", {username});
});

app.listen(port, () => {
    console.log( `listening on port ${port}`)
});