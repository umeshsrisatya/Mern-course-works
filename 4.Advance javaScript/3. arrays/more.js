// reference Types and equality Testing
console.log('hi'==='hi') // true
console.log(['hi'] === ['hi']) 
//* false because js checks the reference of the array
//* false because everytime we create an array, it creates a new reference

let nums = [1,2,3]
let numsCopy = nums
console.log(nums === numsCopy) // true because both are pointing to the same reference

let numsCopy2 = [...nums]
console.log(nums === numsCopy2) // false because it is a new reference

// const and arrays
const myArray = [1,2,3] 
myArray.push(4) // allowed because we are not changing the reference of the const
console.log(myArray) // [1,2,3,4]
myArray = [5,6,7] 
//! * ? 
//TODO: error because we are trying to change the reference of the const