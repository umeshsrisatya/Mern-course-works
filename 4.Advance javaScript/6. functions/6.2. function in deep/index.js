//? example 1
// var totalEggs = 0;
// function collectEggs(){
//     totalEggs = 6;
// }
// console.log(totalEggs);  // 0
// collectEggs();
// console.log(totalEggs);  // 6
//?example 2
// var bird = 'Scarlet Macaw';
// function birdWatch(){
//     let bird = 'Great Blue Heron';
//     console.log(bird); // Great Blue Heron
// }
// console.log(bird); // Scarlet Macaw
// birdWatch();
// console.log(bird); // Scarlet Macaw
//? example 3
// var k;
// function blockScope(n){
//     var k = 12;
// }
// blockScope(10);
// console.log(k);
//? example 4
// function bankRobbery(){
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
//     function cryForHelp(){
//         let color = 'purple';
//         function inner(){
//             for(let hero of heroes){
//                 console.log(`Please help us, ${hero.toUpperCase()}`);
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// bankRobbery(); // Please help us, SPIDERMAN
                // Please help us, WOLVERINE
                // Please help us, BLACK PANTHER
                // Please help us, BATWOMAN      
//? example 5                
// function expressions
// const square = function(x){
//     return x*x;
// }
// console.log(square(4));
// square(5); // 25