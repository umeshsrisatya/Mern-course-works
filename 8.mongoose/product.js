const mongoose = require("mongoose");
// syntax : moongoose.connect("mongodb://localhost:27017/dbname", { useNewUrlParser: true })
mongoose
    .connect("mongodb://localhost:27017/Product")
    .then(() => {
        console.log("Connection open");
    })
    .catch((e) => {
        console.log("error occured");
        console.log(e);
    });
// we mention new in schema to create a new schema object
// without new it will not create a new object and will throw an error
const productSchema = mongoose.Schema({
    name: { type: String, maxlength: 20, required: true, uppercase: true },
    price: { type: Number, required: true, min: [0, "Price must be positive "], max: 1000 },
    quantity: {
        online: {
            type: Number,
            default: 0,
        },
        ofline: {
            type: Number,
            default: 0,
        },
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
});

productSchema.methods.greetCustomer = function () {
    console.log("Umesh You Have ordered-", this.name);
};

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
};

productSchema.methods.inSale = function () {
    if (this.onSale) {
        console.log(`${this.name} is on sale`);
    } else {
        console.log(`${this.name} is not on sale`);
    }
};

productSchema.methods.addCategory = function (cat) {
    this.categories.pop(cat);
    return this.save();
    // this.save() used to save the changes in the database ,
    // if we dont use this.save() the changes will not be saved in the database
    // with out this.save() the changes will be saved in the object but not in the database
    // this.save() returns a promise so we can use await with it
};

productSchema.statics.fireSale = function () {
    //this refers to the model itself and not the instance of the model 
    return this.updateMany({}, { onSale: true, price: 100 }, { runValidators: true });
};
const Product = mongoose.model("Product", productSchema);

// const findProduct = async function () {
//     try {
//         const foundProduct = await Product.findOne({ name: "Car" });
//         await foundProduct.toggleOnSale();
//         await foundProduct.inSale();
//         // await foundProduct.addCategory("Outdoor");
//     } catch (e) {
//         console.log("Oh no error!!!!!!");
//     }
// };
// findProduct();

// if we want to insert a property which is not mentioned in schema it will not throw an error
// instead it will ignore that property and insert the remaining properties into the collection

// Product.insertMany([
//     { name: "Bike", price: 100, quantity: { online: 10, ofline: 20 }, onSale: true, categories: ["vehicle", "transport"] },
//     { name: "Car", price: 1000, quantity: { online: 10, ofline: 20 }, onSale: true, categories: ["vehicle", "transport"] },
//     { name: "Truck", price: 10000, quantity: { online: 10, ofline: 20 }, onSale: true, categories: ["vehicle", "transport"] },
//     {name: "Bicycle", price: 10, quantity: { online: 10, ofline: 20 }, onSale: true, categories: ["vehicle", "transport"] },
// ])
//     .then((data) => {
//         console.log("the data has been inserted");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Error has been occured");
//         console.log(err);
//     });

Product.fireSale()
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
