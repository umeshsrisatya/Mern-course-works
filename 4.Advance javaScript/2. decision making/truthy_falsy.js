const userInput = prompt("Enter Something");
if (userInput==""||userInput == '0' || NaN || null || undefined || userInput == 'false') {
    console.log("Falsy");
} else {
    console.log("Truthy");
}   
// * falsy values: 0, '', NaN, null, undefined, false
// * truthy values: all values other than falsy values