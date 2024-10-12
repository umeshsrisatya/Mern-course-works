//forEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const alphaNumeric = ['a1', 'b2', 'c3', 'd4', 'e5']

// function print(element){
//     console.log(element)
// }

// numbers.forEach(print)
// console.log("ForEach loop")
// alphaNumeric.forEach(function(el){
//     console.log(el)
// }) 
// console.log("For loop")
// for(let i = 0; i < alphaNumeric.length; i++){
//     console.log(alphaNumeric[i])
// }
// console.log("For of loop")
// for(let ele of alphaNumeric){
//     console.log(ele)
// }

// numbers from 1- 20
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log("Even numbers")
// number.forEach(function (e) {
//     if (e % 2 === 0) {
//         console.log(e)
//     }
// })

const movies = [
    {
        title: 'Goodfellas',
        score: 98
    },
    {
        title: 'The Godfather',
        score: 100
    },
    {
        title: 'The Dark Knight',
        score: 95
    },
    {
        title: 'Shawshank Redemption',
        score: 90
    },
    {
        title: 'The Godfather Part II',
        score: 95
    }
]
movies.forEach(function (movie) {
    console.log(`${movie.title} -${movie.score}/100`);
})