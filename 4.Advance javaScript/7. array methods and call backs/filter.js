// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const evenNums = nums.filter((nums)=>{
//     return nums%2 === 0;
// })
// const oddNums = nums.filter((nums)=>{
//     return nums%2 !== 0;
// })
// console.log("Even Numbers");
// console.log(evenNums);
// console.log("Odd Numbers");
// console.log(oddNums);
// console.log("number 4")
// console.log(nums.filter((num)=>num === 4));
// movies with years

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
    }
]
movies.filter((m)=>m.score>=87).map((e)=>e.title).forEach((m)=>{
    setTimeout(()=>{
        console.log(m);
    },1000)
})
