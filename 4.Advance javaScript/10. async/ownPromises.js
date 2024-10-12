//* creating our own promises
// new Promise((resolve, reject)=>{
//     resolve("I have resolved")
//     reject("I have rejected")
// })
// var i = 0;
// function makePromiseRequest(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (i == 10) {
//                 reject("I have rejected the promise request because i is 10");
//             }
//             i++;
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }

// makePromiseRequest("grey", 1000)
//     .then(() => {
//         return makePromiseRequest("blue", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("green", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("purple", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("orange", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("black", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("white", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("yellow", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("red", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("pink", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("brown", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("cyan", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("magenta", 1000);
//     })
//     .then(() => {
//         return makePromiseRequest("lime", 1000);
//     })
//     .catch((err) => {
//         document.write(err);
//     });

// await and async
var i = 0;
function makePromiseRequest(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            i++;
            resolve(`${i}th color is ${color}`);
            document.querySelector(`.${color}`).style.backgroundColor = color;
        }, delay);
    });
}
async function rainbow() {
    const v = await makePromiseRequest("violet", 1000);
    console.log(v);
    const i = await makePromiseRequest("indigo", 1000);
    console.log(i);
    const b = await makePromiseRequest("blue", 1000);
    console.log(b);
    const g = await makePromiseRequest("green", 1000);
    console.log(g);
    const y = await makePromiseRequest("yellow", 1000);
    console.log(y);
    const o = await makePromiseRequest("orange", 1000);
    console.log(o);
    const r = await makePromiseRequest("red", 1000);
    console.log(r);
    // return "end of rainbow";
}

// rainbow().then((data) => {
//     console.log(data);
// });

async function printRainbow() {
    await rainbow();
    console.log("end of rainbow");
}
printRainbow();
