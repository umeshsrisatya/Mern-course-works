// console.log('************spread operator');
// spread operator
// it is used to unpack elements of an array
// it is used to unpack elements of an object
// it is used to copy an array
// it is used to copy an object
// it is used to merge two arrays
// it is used to merge two objects
// it is used to pass an array as an argument to a function
// it is used to pass an object as an argument to a function

// spread spreading one source of information into another source of information
// spreading arrays and objects into functions
// spreading arrays and objects into array literals
// spreading arrays and objects into object literals  
// spreading objects into array literals
// spreading objects into object literals
// spreading arrays into object literals

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Math.max(array); // NaN
Math.max(...array); // 10

// arrays
var cats = ['Blue', 'Scout', 'Rocket'];
var dogs = ['Rusty', 'Wyatt'];
var allPets = [...cats, ...dogs];

// objects
var feline = {legs: 4, family: 'Felidae'};
var canine = {family: 'Caninae', furry: true};
var catDog = {...feline, ...canine, family : 'umesh'}; 
console.log(catDog); // {legs: 4, family: "umesh", furry: true}

// array into a object
// index of the array will be the key of the object
//  and the value of the array will be the value of the object

const dataFormForm ={
    email: 'umeshsrisatya@gmail.com',
    password: 'Umesh@2000',
    username: 'umesh'
}
const newUser = {...dataFormForm, id: 1, isAdmin: false};
