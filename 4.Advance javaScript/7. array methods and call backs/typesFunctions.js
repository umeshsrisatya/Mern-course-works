// function declaration
function add(a, b) {
    return a + b;
}

//anonymous function
const add = function (a, b) {
    return a + b
}

// arrow function   
const add = (a, b) => {
    return a + b;
};

// arrow function with implicit return 
// only works with one line of code
const add = (a, b) => (
    a + b
);

// one liner with implicit return 
const add = (a, b) => a + b;  
