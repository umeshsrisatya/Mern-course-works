const square = (x) => x * x;
const add = (a, b) => a + b;
const PI = 3.14159;

// by default module.exports is an empty object
//? exporting in different ways
//? way 1
// module.exports.square = square;
// module.exports.add = add;
// module.exports.PI = PI;
//? way 2
// module.exports.cube = (x) => x * x * x;
//? way 3
// module.exports = { square, add, PI };
//? way 4
module.exports = { square, add, PI };
