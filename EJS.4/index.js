const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 3000;

app.get("/", (req, res) => {
    const user = {
        username: "Asish",
        isLoggedIn: true
    };
    res.render("home", { user });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
