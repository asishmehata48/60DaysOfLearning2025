const express = require("express");
const app = express();
const port = 3000;

app.get("/register", (req,res) => {
    let {user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register" , (req,res) =>{
    const { user, password } = req.body;
    res.send(`standard POST response. `);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});