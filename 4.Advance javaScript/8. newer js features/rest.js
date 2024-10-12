// rest collecting the arguments into an array

// The arguments object
// function sumAll(){
//     return arguments.reduce((total, el) => total + el);
// }
// const array = [1, 2, 3, 4, 5];
// console.log(sumAll(...array)); // error

// function sumAll(...nums){
//     nums.reduce((total,el)=>total+el);
// }
// console.log(sumAll(1,2,3,4,5)); // 115


function raceResults(gold,silver,...everyElse){
    console.log(`gold goes to ${gold}`);
    console.log(`silver goes to ${silver}`);
    console.log(`and thanks to everyone ${everyElse}`);
}
console.log(raceResults('umesh','srisatya','srikanth','srihari','mahesh')); // gold goes to umesh, silver goes to srisatya, everyElse goes to srikanth,srihari,srikanth