document.querySelector("input").addEventListener("keydown", function (event) {
    console.log(event.key); // key name
    console.log(event.code); // key code
});
//* .key is used to get the key name and .code is used to get the key code.
// event is a object which has many properties and methods which can be used 
// to get the information about the event that has been occurred on the element by addEventListener
// keydown event is used to get the key name and key code

// document.querySelector("input").addEventListener("keyup", function (event) {
//     console.log(event.key);
// });
// window object event is used for game development, key press event, etc.
window.addEventListener("keydown", function (event) {
    // console.log(event.code); // key code
    switch (event.code) {
        case "ArrowUp":
            console.log("move front");
            break;
        case "ArrowDown":
            console.log("move back");
            break;
        case "ArrowLeft":
            console.log("turn left");
            break;
        case "ArrowRight":
            console.log("turn right");
            break;
    }
});
