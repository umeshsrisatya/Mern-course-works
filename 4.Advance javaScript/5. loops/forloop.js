// for loops
for (let i = 0; i <= 11; i++) {
    console.log('in loop:', i);
}

// even numbers 1 - 20
for (let i = 2; i <= 20; i += 2) {
    console.log('in loop:', i);
}

// numbers from 100 - 0
for (let i = 100; i >= 0; i -= 1) {
    console.log('in loop:', i);
}
// infinite loop
// for (let i = 0; i < 100; i--) {
//     console.log('in loop:', i);
// }

// looping in arrays
const animals = ['lion', 'tiger', 'bear'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// loping in large array of animals
const animals_in_jungle = ['lion', 'tiger', 'bear', 'elephant', 'deer', 'monkey', 'fox', 'wolf', 'rabbit', 'snake', 'crocodile', 'hippopotamus', 'rhinoceros', 'giraffe', 'zebra', 'cheetah', 'hyena', 'leopard', 'jackal', 'wild boar', 'wild cat', 'wild dog', 'wild goat', 'wild horse', 'wild pig', 'wild rabbit', 'wild sheep', 'wild turkey', 'wild wolf', 'wild yak', 'wild zebra'];
for (let i = 0; i < animals_in_jungle.length; i++) {
    console.log(animals_in_jungle[i]);
}

// nesting for loop
var str = "hello";
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
        console.log(str[i], str[j]);
    }
}