const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    { id: uuidv4(), username: "Todd", comment: "lol that is so funny!" },
    { id: uuidv4(), username: "Skyler", comment: "I like to go birdwatching with my dog" },
    { id: uuidv4(), username: "Sk8erBoi", comment: "Plz delete your account, Todd" },
    { id: uuidv4(), username: "onlysayswoof", comment: "woof woof woof" },
];
//⇨ To show all the comments
///⇨
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
    console.log(uuidv4()); // ⇨
});

// To create a new comment form page is displayed
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

// To post a new comment and redirect to the comments page
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() });
    res.redirect("/comments");
});

// To show a specific comment
app.get("/comments/:id", (req, res) => {
    const foundComment = comments.find((com) => com.id === req.params.id);
    if (foundComment) {
        res.render("comments/show", { comment: foundComment });
    } else {
        res.status(404).send("Comment not found");
    }
});

// patch
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params; // there is only one id which is given in query
    const newComment = req.body.comment;
    const foundComment = comments.find((com) => com.id === id);
    foundComment.comment = newComment;
    res.redirect("/comments"); // it will print all comments
});

// to edit a comment
app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((com) => com.id === id);
    res.render("comments/edit", { comment });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// commonJS syntax to export the app object
// const app = require("./app");
// module.exports = app;
// es6 syntax to export the app object
// import express from "express";
// export default app;
