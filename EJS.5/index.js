const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    const user = {
        name: "AD",
        isLoggedIn: true,
        role: "admin"
    };

    const notifications = [
        { message: "New message from Steve", type: "info" },
        { message: "Your post got 5 likes", type: "success" },
        { message: "System maintenance tonight", type: "warning" }
    ];

    res.render("home", {
        user,
        notifications
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
