// array for games
// const subreddits = ['soccer', 'popheads', 'cringe', 'books', 'television'];
// document.write('You visited the following subreddits:<br>');
// // for looop
// // for(let i = 0; i < games.length; i++){
// //     document.write(`You visited reddit.com/r/${games[i]}<br>`);
// // }
// // for of loop
// for(let subreddit of subreddits){
//     document.write(`You visited reddit.com/r/${subreddit}<br>`);
// }

// example 2 with 2d matrix
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];
for(let row of seatingChart){
    for(let student of row){
        document.write(student + ' ');
    }
    document.write('<br>');
}