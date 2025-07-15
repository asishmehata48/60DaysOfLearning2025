const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Home route
app.get("/", (req, res) => {
    res.render("home");
});

// Example route to trigger an error (optional)
app.get("/error", (req, res) => {
    throw new Error("Something went wrong!");
});

// 404 handler (should come AFTER all other routes)
app.use((req, res) => {
    res.status(404).render("notfound", { url: req.originalUrl });
});

// General error handler (should come last)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render("error", { error: err });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
