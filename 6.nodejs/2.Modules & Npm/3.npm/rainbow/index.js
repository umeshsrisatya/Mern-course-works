var colors = require("colors");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U"
}).rainbow); // rainbow is a method from the colors module
