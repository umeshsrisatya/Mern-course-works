const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(arr[0]); // Monday
console.log(arr[1]); // Tuesday
console.log(arr[2]); // Wednesday
console.log(arr[3]); // Thursday
console.log(arr[4]); // Friday
console.log(arr[5]); // Saturday
console.log(arr[6]); // Sunday
console.log(arr.length); // 7
console.log(arr[arr.length - 1]); // Sunday
console.log(arr[arr.length - 2]); // Saturday
console.log(arr[arr.length - 3]); // Friday
console.log(arr[arr.length - 4]); // Thursday
console.log(arr[arr.length - 5]); // Wednesday
console.log(arr[arr.length - 6]); // Tuesday
console.log(arr[arr.length - 7]); // Monday
console.log(arr[arr.length - 8]); // undefined

const mixedData = ["Monday", 1, "Tuesday", 2, "Wednesday", 3, "Thursday", 4, "Friday", 5, "Saturday", 6, "Sunday", 7];
for(let i = 0; i < mixedData.length; i++) {
    console.log(`${mixedData[i]} - ${mixedData[++i]}`);
}

// array in arrays
const arrayInArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for(let i = 0; i < arrayInArray.length; i++) {
    for(let j = 0; j < arrayInArray[i].length; j++) {
        console.log(arrayInArray[i][j]);
    }
}

// updating array
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
fruits[1] = "Pineapple";
console.log(fruits);
fruits[10] = "Grapes";
console.log(fruits); 