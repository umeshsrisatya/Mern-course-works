console.log("Hello from args.js");
console.log(process.argv);
// process.argv is an array that contains the command line arguments passed to the script.
//  The first element is the path to Node, the second element is the path to the script, 
// and the subsequent elements are the arguments passed to the script.
process.cwd();
// process.cwd() returns the current working directory of the Node.js process.
const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there, ${arg}`);
}
// slice method is used to remove the first two elements of the process.argv array,
//  which are the path to Node and the path to the script,
//  and then loop through the remaining elements to print a greeting message 
