// map
const texts = ['umesh', 'greeshma', 'vikas', 'tarun'];
const capitals = texts.map(function(e){
    return e.toUpperCase();
})
console.log(capitals)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// numbers.map(function(e){
//     return e*2;
// })
// console.log(numbers)

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
const titles = movies.map(function (movie) {
    return movie.title.toLowerCase();
})
console.log(titles)

