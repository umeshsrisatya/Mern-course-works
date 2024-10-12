// console.log('************destructuring');
// const names = ['Penkey', 'Umesh Sri Satya Ambica Prasad'];
// const [first, ...last] = names;
// console.log(`Your name is ${first} . ${last}`);

// const scores = ["Raju", "Divya", "Ravi", "Suresh", "Ramesh", "Mahesh"];
// const highScore = scores[0];
// const secondHighScore = scores[1];
// const [gold, silver, bronze, ...everyoneElse] = scores;
// console.log(`gold medal goes to ${gold}`);
// console.log(`silver medal goes to ${silver}`);
// console.log(`bronze medal goes to ${bronze}`);
// console.log(`thanks to ${everyoneElse} for participating `);

// object destructuring
// const user = {
//   email: "umeshsrisatya@gmail.com",
//   password: "Umesh@2000",
//   username: "umesh",
//   firstName: "Umesh",
//   lastName: "Penkey",
//   born: 2000,
// died: 2010,
//   bio: "I am a web developer",
//   city: "Hyderabad",
//   state: "Telangana",
//   country: "India",
// };
// const { firstName, lastName, died: deathYear = "Na" } = user;
// console.log(`Your name is  ${lastName[0].toUpperCase()} . ${firstName}  `);
// console.log(
//   `${deathYear > 2020 || deathYear === "Na" ? "Still alive" : `You died in ${deathYear}`}`
// );

// params destructuring
// params destructing is
// example 1
// function fullName({ firstName = "please provide firstname to user", lastName ="N/A"}) {
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName(user)); // "Umesh Sri"

// example 2
const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984,
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013,
    },
    {
        title: "13 Going on 30",
        score: 70,
        year: 2004,
    },
    {
        title: "Stand by Me",
        score: 85,
        year: 1986,
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995,
    },
];

// const goodMovies = movies.filter(({ score }) => score >= 80);

// const arr = movies.map(({ title, year, score }) => `${title}  ${year} is rated as ${score} `)

