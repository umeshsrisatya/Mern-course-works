let cats = ["blue", "kitty", "fluffy", "garfield"];
let comboParty = ['rusty', 'wyatt', 'blue', 'kitty'];
let colors =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white','pink'];
let months = ['jan', 'feb', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

let ages =[23,12,75,45,9,18,6,89,45,32,56,78,34];
//* 10. concat() - concat the array
    var dogs = ["bulldog", "poodle", "labrador", "beagle"];
    var animals = cats.concat(dogs);
    console.log(animals);

//* 6.includes() - check if element is present in the array
    console.log(cats.includes('kitty'))

//* 7. indexOf() - find the index of the element
    console.log(cats.indexOf('kitty'))  

//* 11. reverse() - reverse the array
    comboParty.reverse()//reverse the array
    console.log(comboParty)

//* 9. slice() - slice the array
    let rainbow = colors.slice(0,7);
    console.log(rainbow);
    //? if i only provide one argument, it will slice from that index to the end
    let coolColors = colors.slice(-3);
    console.log(coolColors);

//* 5. splice() - add or remove element from the array
//* syntax: splice(startIndex, deleteCount, elements to add)
//* if deleteCount is 0, it will only add the elements at the startIndex
//* if deleteCount is 1, it will remove the element from the startIndex
//* if deleteCount is more than 1, it will remove the elements from the startIndex
    months.splice(2, 0, 'Mar')
    console.log(months)

//* 12. sort() - sort the array
console.log(`before sort : ${ages}`);
console.log(`after sort : ${ages.sort()}`);


// // 8. join() - join the elements of the array
// console.log(names.join(' '))


// // 12. sort() - sort the array
// console.log(names.sort())
// // 13. filter() - filter the array
// console.log(names.filter((ele) => ele.length > 1))
// // 14. map() - map the array
// console.log(names.map((ele) => ele + 'AA'))
// // 15. reduce() - reduce the array
// console.log(names.reduce((acc, ele) => acc + ele))
// // 16. forEach() - loop through the array
// names.forEach((ele) => console.log(ele))
// // 17. find() - find the element in the array
// console.log(names.find((ele) => ele === 'BB'))
// // 18. findIndex() - find the index of the element in the array
// console.log(names.findIndex((ele) => ele === 'BB'))
// // 19. some() - check if some elements are present in the array
// console.log(names.some((ele) => ele === 'BB'))
// // 20. every() - check if every elements are present in the array
// console.log(names.every((ele) => ele === 'BB'))
// // 21. fill() - fill the array with the given value
// console.log(names.fill('AA'))
// // 22. flat() - flat the array
// console.log(names.flat())
// // 23. flatMap() - flat the array and map the array
// console.log(names.flatMap((ele) => ele + 'AA'))
// // 24. copyWithin() - copy the array within the array
// console.log(names.copyWithin(1, 3, 5))
// // 25. keys() - get the keys of the array
// // console.log(names.keys())
// // 26. values() - get the values of the array
// // console.log(names.values())