console.log("Hello World");
// * js follows Read Eval Print Loop (REPL) model
// Read: read the code
// Eval: evaluate the code
// Print: print the result
// Loop: loop back to the start
console.warn("This is a warning message");
console.error("This is an error message");
// console.clear();
const userInput = '123';
console.log(`User input is: ${parseInt(userInput)+1}`);
// types of console methods
// console.log()
console.log("Hello World");
// console.warn()
console.warn("This is a warning message");
// console.error()
console.error("This is an error message");
// console.clear()
console.clear()
// console.time()
console.time("Time taken");
// console.table()
// * is used for displaying json and array data in tabular format
console.table({name: "John", age: 20, city: "New York"});
// console.count()
for (let i = 0; i < 5; i++) {
    console.count("Count");
}
// console.group()
console.group("Group");
// console.groupEnd()
console.groupEnd();
// console.groupCollapsed()
// console.trace()
// console.assert()
// console.dir()
// console.profile()
