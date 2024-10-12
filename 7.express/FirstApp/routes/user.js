const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ data: "Here is your data from db" });
});

router.post("/", (req, res) => {
    res.send({ data: "User created in db" });
});

router.put("/", (req, res) => {
    res.send({ data: "User updated in db" });
});

router.delete("/", (req, res) => {
    res.send({ data: "User deleted in db" });
});

module.exports = router;
