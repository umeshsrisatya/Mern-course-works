// setTimeout is a function that takes a callback function and a time in milliseconds as arguments. It waits the specified time and then executes the callback function.

var i = 1;
const id = setInterval(()=>{
    console.log(i*=10);
}, .001);
console.log(id)

