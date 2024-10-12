// reduce method
// reduce method is used to reduce the array to a single value
// it takes a callback function as an argument and an initial sum value
// the callback function takes 4 arguments,
//  the total, the current value, the current index, and the array
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((total, currentValue) => {
    return total + currentValue;
})
var prices = [9.99, 1.50, 19.99, 49.99, 30.50];
var total = prices.reduce((total, priceOfProduct) => total + priceOfProduct);
console.log(total);
// reduce method can also be used to find the maximum value in an array
var max = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10];
var maximum = max.reduce((maxi, ele) => {
    if (ele > maxi) {
        return ele; //this ele stores in maxi
    }
})
// the result always stores in the first argument of the callback function
//  which is also called as accumulator
console.log(maximum);

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})
console.log(highestRated);

