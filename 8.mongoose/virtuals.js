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
const personSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    pre: {
        type: Number,
    },
});

personSchema
    .virtual("fullName")
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    })
    .set(function (f) {
        this.firstName = f.substr(0, f.indexOf(" "));
        this.lastName = f.substr(f.indexOf(" ") + 1);
    });
// MIDDLEWARE
personSchema.pre("save", async function () {
    setTimeout(() => {
        console.log("About to save");
        this.pre = this.firstName.length + this.lastName.length;
    }, 5000);
});
personSchema.post("save", async function () {
    console.log("just saved");
});

// model
const Person = mongoose.model("customer", personSchema);
// difference between virtual and methods is that virtuals are not stored in the database
// did instance method stored in the database
// methods are stored in the database and can be used to manipulate the data
// pre and post are used to run the code before and after the method is called 
// those methods are save , update , delete , find , findOne , findOneAndDelete , findOneAndUpdate , insertMany , deleteMany , updateMany ...etc