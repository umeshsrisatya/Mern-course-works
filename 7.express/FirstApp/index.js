const express = require("express");
const app = express();
const PORT = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get("/order", (req, res) => {
    const { qty, type } = req.query;
    console.log(`console we have  ${qty} -  ${type} `);
    res.send(`server we have  ${qty} -  ${type} `);
});

app.post("/order", (req, res) => {
    const { qty, type } = req.body;
    res.send(`server here is your ${qty} -  ${type} order`);
    console.log(` console here is your ${qty} -  ${type} order`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

