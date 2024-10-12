//? normal way of writing callback hell
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "indigo";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "violet";
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//? traditional way of writing callback hell
// const delayedColorChange= (color,delay)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = color;
//     }, delay);
// }
// delayedColorChange("red",1000);
// delayedColorChange("orange",2000);  
// delayedColorChange("yellow",3000);
// delayedColorChange("green",4000);

//? imprevised version of callback hell
// const delayedColorChange = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext ? doNext() : console.log("done");
//     }, delay)
// }
// delayedColorChange("red", 1000, () => {
//     delayedColorChange("orange", 1000, () => {
//         delayedColorChange("yellow", 1000, () => {
//             delayedColorChange("green", 1000, () => {
//                 delayedColorChange("blue", 1000, () => {
//                     delayedColorChange("indigo", 1000, () => {
//                         delayedColorChange("violet", 1000, () => {
//                             console.log("done");
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });