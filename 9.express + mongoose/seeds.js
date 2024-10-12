const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
    .connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch((e) => {
        console.log("Mongo Connection Error");
        console.log(e);
    });

Product.insertMany([
    { name: "Apple", price: 100, category: "fruit" },
    { name: "Banana", price: 50, category: "fruit" },
    { name: "Orange", price: 80, category: "fruit" },
    { name: "Potato", price: 30, category: "vegetable" },
    { name: "Onion", price: 40, category: "vegetable" },
    { name: "Tomato", price: 60, category: "vegetable" },
    { name: "Milk", price: 50, category: "dairy" },
    { name: "Cheese", price: 80, category: "dairy" },
    { name: "Butter", price: 30, category: "dairy" },
])
    .then((d) => console.log(d))
    .catch((e) => console.log(e));
