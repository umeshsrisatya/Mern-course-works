// object
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 59
};

// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }

// iteratins over object keys
// for(let names of Object.keys(testScores)){
//     console.log(`name : ${names}`)
// }

// iteratins over object values
// for(let scores of Object.values(testScores)){
//     console.log(`scores : ${scores}`)
// }

// iteratins over object entries
// for(let entry of Object.entries(testScores)){
//     console.log(`name : ${entry[0]} and scores : ${entry[1]}`)
// }

// destructuring object entries
// for(let [name, score] of Object.entries(testScores)){
//     console.log(`${name} scored ${score}`)
// }

// average score
let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}
total = total/scores.length;
console.log(`average score is : ${total}`);