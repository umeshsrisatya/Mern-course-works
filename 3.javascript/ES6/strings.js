var greeting = "hello ";
var interaction = " how was your day";

var name = prompt("Enter your name");

console.log(greeting + name + interaction);

// var tweet  = prompt("Write the tweet here to post on twiter");
// console.log("you tweet contains "+tweet.length+" letters(max 140 allowed):"+ tweet.slice(0,141));

var name = prompt("enter your name :");
var initial = name.slice(0, 1);
console.log(initial.toUpperCase() + name.slice(1, name.length));
