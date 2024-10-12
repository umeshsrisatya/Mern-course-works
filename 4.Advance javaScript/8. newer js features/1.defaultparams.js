//************default parameters are evaluated at call time 
//***********and it should be used at the end of the parameter list

// default params example 1
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// default params example 2
// function getTable(num, upto =10){
//     for (let i = 1; i <= upto; i++) {
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }

// default params example 3
// function greet(person, msg = 'Hey there', punc = '!') {
//     console.log(`${msg}, ${person} ${punc}`);
// }
