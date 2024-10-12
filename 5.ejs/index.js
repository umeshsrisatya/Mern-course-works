const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// HOME PAGE
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

// SUBREDDIT PAGE
app.get("/:sub", (req, res) => {
    const { sub } = req.params;
    const data = redditData[sub];
    if (data) {
        res.render("reddits", { ...data });
    } else {
        res.status(404).send("Subreddit not found");
    }
});

// RANDOM PAGE
app.get("/random", (req, res) => {
    res.render("random", { randomNum: Math.floor(Math.random() * 100) + 1 });
});

// LOOP IN EJS
const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston", "Duke", "Daisy"];
app.get("/cats", (req, res) => {
    res.render("loop", { arr: cats });
});

// Start the server
app.listen(900, () => {
    console.log("Server is running on port 900");
});