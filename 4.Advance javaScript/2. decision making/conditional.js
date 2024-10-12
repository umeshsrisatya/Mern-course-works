// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const day_of_week = days[Math.floor(Math.random() * days.length)];

// if (day_of_week === 'Monday') {
//   console.log('It is Monday');
// } else if (day_of_week === 'Tuesday') {
//   console.log('It is Tuesday');
// } else if (day_of_week === 'Wednesday') {
//     console.log('It is Wednesday');
// }else if (day_of_week === 'Thursday') {
//     console.log('It is Thursday');
// }else if (day_of_week === 'Friday') {
//     console.log('It is Friday');
// }else if (day_of_week === 'Saturday') {
//     console.log('It is Saturday');
// }

// // 0-5 - Free
// // 5-10 - Child $10
// // 10-65 - Adult $20
// // 65+ - Senior $10
// const age = Math.floor(Math.random() * 100);
// if (age < 5) {
//   console.log('You are a baby. You get in for free');
// } else if (age < 10) {
//   console.log('You are a child. You pay $10');
// } else if (age < 65) {
//   console.log('You are an adult. You pay $20');
// } else {
//   console.log('You are a senior. You pay $10');
// }

// nesting conditionals
const password = prompt("Enter your password");
if (password.length >= 8) {
  if (password.indexOf(" ") == -1) {
    console.log("Valid Password");
  } else {
    console.warn("Password should not contain spaces");
  }
} else {
  console.error("Password is too short and it should contain atleast 8 characters");
} 