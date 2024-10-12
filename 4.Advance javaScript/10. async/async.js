// async makes the function return a promise
// await makes the function wait for the promise to resolve
//? example 1
// async function test(){
//     console.log("before promise");
//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("inside promise");
//             resolve();
//         }, 6000);
//     })
//     console.log("after promise");
// }
// test();

//? example 2
// function walkDog() {
//     const isWalked = false;
//     return new Promise((resolve, reject) => {
//         if (isWalked) {
//             resolve("Dog has been walked");
//         } else {
//             reject("Dog has not been walked");
//         }
//     });
// }

// function cleanKitchen() {
//     const isCleaned = true;
//     return new Promise((resolve, reject) => {
//         if (isCleaned) {
//             resolve("Kitchen has been cleaned");
//         } else {
//             reject("Kitchen has not been cleaned");
//         }
//     });
// }

// function takeOutTrash() {
//     const isTakenOut = true;
//     return new Promise((resolve, reject) => {
//         if (isTakenOut) {
//             resolve("Trash has been taken out");
//         } else {
//             reject("Trash has not been taken out");
//         }
//     });
// }

// async function doAllTasks() {
//     try {
//         const dog = await walkDog();
//         console.log( dog );

//         const kitchen = await cleanKitchen();
//         console.log(kitchen);

//         const trash = await takeOutTrash();
//         console.log(trash);

//         console.log("All tasks have been completed");
//     } catch (err) {
//         console.log("first make the task is done");
//         console.warn(err);
//     }
// }

// doAllTasks();

// return new Promise is no need if  we declare a function with async key word
// async function hello() {
//     return "La la la";
// }
// hello().then((data) => {
//     console.log("PROMISE RESOLVED WITH : ", data);
// });
//? example 3
// async function getOut(i) {
//     if (i == 1) {
//         return "get into my house";
//     }
//     throw "get out of my house";
// }
// getOut(1)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });
//? example 4
// const login = async (username, password) => {
//     if (!username || !password) {
//         throw "Missing Credintials";
//     }
//     if (password == "umesh@2003") {
//         return "welcome Umesh";
//     }
//     throw "Enter a Valid Password";
// };

// login("umesh", "umesh@2003")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

