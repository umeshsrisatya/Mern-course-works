// //try catch 
// try{
//     console.log("enter try block")
//     console.log(hello)
//     console.log("exit try block")
// }
// catch(error){
//     console.log("error")
// }

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch(e) {
        console.warn(e)
        console.log("Please pass a string")
    }
}