
// function makeMysteryFunction(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("Congrats! I'm a good function");
//             console.log("YOU WIN A MILLION DOLLARS");
//         }
//     }else{
//         return function(){
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//         }
//     }
// }
// const mystery = makeMysteryFunction();
// mystery(); // Congrats! I'm a good function
// YOU WIN A MILLION DOLLARS


function makeBetweenFunction(min, max){
    return function(num){
        return num >=min && num <= max;
    }
}
// const isPassed = makeBetweenFunction(35, 100);
// const childMarks = [23,12,35,45,67,89,90,100,101];
// for(let marks of childMarks){
//     console.log(`i have scored:=> ${marks} marks and result is (true:pass,false:fail):=> ${isPassed(marks)}`);
// }

// seperate persons based on their ages
const isChild = makeBetweenFunction(0, 18);
const isAdult = makeBetweenFunction(19, 60);
const isSenior = makeBetweenFunction(61, 100);
const ages = [12, 18, 19, 20, 45, 60, 61, 100, 101];
for(let age of ages){
    if(isChild(age)){
        console.log(`You are a child and your age is ${age}`);
    }else if(isAdult(age)){
        console.log(`You are an adult and your age is ${age}`);
    }else if(isSenior(age)){
        console.log(`You are a senior and your age is ${age}`);
    }else{
        console.log(`You are an alien and your age is ${age}`);
    }
}