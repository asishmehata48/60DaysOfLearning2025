const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("Connected to Root Path:");
});


app.get("/apple", (req, res) => {
    res.send("Connected to Apple Path:");
});


app.get("/orange", (req, res) => {
    res.send("Connected to Orange Path:");
});

app.get("*", (req, res) => {
    res.send("This path does not exist.");
});

app.post("/", (req, res) => {
    res.send("You sent a post request");
});

// app.use((req, res) => {
//     console.log(req);
//     console.log("request received.");
//     // let code = "<h1>Fruits<h1/> <ul><li>Apple</li><li>Mango</li><li>Orange</li></ul>"
//     // res.send(code);
// })
