const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
    const { name, type, quantity } = req.query;
    res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    const { name, type, quantity } = req.body;
    res.send(`Here are your ${quantity}- ${type} ${name}s`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
