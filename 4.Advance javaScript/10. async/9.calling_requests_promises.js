//* THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        if (delay > 4000) {
            reject("Connection Timeout :(");
        } else {
            resolve(`Here is your fake data from ${url}`);
        }
    });
};

//? traditional promise chaining
// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then(() => {
//         console.log("Promise 1 resolved");
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then(() => {
//                 console.log("Promise 2 resolved");
//                 fakeRequestPromise("yelp.com/api/coffee/page3")
//                     .then(() => {
//                         console.log("Promise 3 resolved");
//                     })
//                     .catch(() => {
//                         console.log("Promise 3 rejected");
//                     });
//             })
//             .catch(() => {
//                 console.log("Promise 2 rejected");
//             });
//     })
//     .catch(() => {
//         console.log("Promise 1 rejected");
//     });

// //? promise chaining with return
// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((data) => {
//         console.log("Promise 1 resolved");
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page2");
//     })
//     .then((data) => {
//         console.log("Promise 2 resolved");
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page3");
//     })
//     .then((data) => {
//         console.log("Promise 3 resolved");
//         console.log(data);
//     })
//     .catch(() => {
//         console.log("Promise rejected");
//     });

