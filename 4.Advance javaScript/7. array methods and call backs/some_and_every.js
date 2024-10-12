// some and every in js 
// const exams = [90, 80, 92, 77, 88, 96, 40, 81, 68, 64, 65]
// console.log(exams.some(score => score >= 99))

const movies = [
    {
        title: "bahubali",
        score: 87,
        year: 2015
    }, {
        title: "bahubali 2",
        score: 95,
        year: 2017
    }, {
        title: "kgf",
        score: 87,
        year: 2018
    }, {
        title: "kgf 2",
        score: 91,
        year: 2021
    }, {
        title: "master",
        score: 45,
        year: 2021
    }, {
        title: "vakeel saab",
        score: 70,
        year: 2021
    }, {
        title: "arjun reddy",
        score: 85,
        year: 2017
    }, {
        title: "saaho",
        score: 60,
        year: 2019
    }, {
        title: "radhe shayam",
        score: 50,
        year: 2021
    },{
        title: "premam",
        score: 90,
        year: 2015
    }, {
        title:"akkada ammayi ikkada abbayi",
        score: 70,
        year: 1996
    }
]

// some check any of the one 
// every check all of them
console.log("is any movie released before 2000",movies.some(m=>m.year<2000))
console.log("every movies in my collection had released after 2k",movies.every(m=>m.year> 2000))
