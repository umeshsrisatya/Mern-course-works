const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const PORT = 3000;
const app = express();
const path = require("path");
var methodOverride = require("method-override");
const categories = ["fruit", "vegetable", "dairy"];

// Middleware setup
app.use(methodOverride("_method")); // Allows for PUT and DELETE methods in forms
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(express.json()); // Parses JSON bodies
app.set("view engine", "ejs"); // Sets EJS as the templating engine
app.use(express.static(path.join(__dirname, "public"))); // Serves static files
app.set("views", path.join(__dirname, "views")); // Sets the views directory

// MongoDB connection
mongoose
    .connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch((e) => {
        console.log("Mongo Connection Error");
        console.log(e);
    });

// Route to display all products
app.get("/products", async (req, res) => {
    const allProducts = await Product.find({});
    res.render("Products/allProducts.ejs", { products: allProducts });
});

// Route to display form to create a new product
app.get("/products/newForm", (req, res) => {
    res.render("Products/newForm", { categories });
});

// Route to handle form submission and save new product to the database
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

// Route to view a single product
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    res.render("Products/productDetails.ejs", { product: foundProduct });
});

// Route to display form to edit a product
app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    res.render("Products/updateProduct.ejs", { product: foundProduct, categories });
});

// Route to handle form submission and update a product in the database
app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${updatedProduct._id}`);
});

// Route to handle product deletion
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
});

app.get("/products", async (req, res) => {
    const { category } = req.query;
    const products = await Product.find({ category });
    res.render("Products/allProducts.ejs", { products, category });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
