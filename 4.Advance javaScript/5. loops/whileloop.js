// let count = 0;
// while (count < 10) {
//     console.log('in loop:', count);
//     count++;
// }
// screates an infinite loop
// var code = "baby";
// var choice = prompt("What is the secret code?");
// while(choice !== code) {
//     choice = prompt("What is the secret code?");
// }
// console.log("Congrats! You got the secret code!");

var sentense = prompt("Enter a new sentense");
while(true){
    sentense = prompt(sentense);
    if(sentense === "stop"){
        document.write("You stopped the loop");
        break;
    }
}
console.log("You stopped the loop");
for(let i = 0; i < 1000; i++){
    console.log(i);
    if(i === 100){
        break;
    }
}