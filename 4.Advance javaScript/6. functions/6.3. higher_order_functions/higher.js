// higher order functions
function func(){
  console.log("I am a function");
}
function callTwice(func) {
  func();
  func();
}

// function callTenTimes(f){
//   for(let i = 0; i < 10; i++){
//     f();
//   }
// }

// const rollDie = function(){
//     const roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// // callTwice(rollDie)
// callTenTimes(rollDie)

// number to the power 4
// function square(num){
//   return num*num;
// }

// function power4(num, sq){
//   return sq(num)*sq(num);
// }

// console.log(power4(3,square))
