var names = ['A', 'B', 'C', 'D', 'E'];
console.log(names);
// array methods ==> push, pop, shift, unshift
// PUSH AND POP IS FASTER THAN SHIFT AND UNSHIFT 
// PUSH AND POP IS O(1) AND SHIFT AND UNSHIFT IS O(N)
// PUSH and POP works like stack and SHIFT and UNSHIFT works like queue

// 1. push() - add element at the end of the array
names.push('AA')
console.log(names)
// 2. pop() - remove element from the end of the array
console.log(names.pop())
// 3. shift() - remove element from the start of the array
console.log(names.shift())
// 4. unshift() - add element at the start of the array
names.unshift('AA')
console.log(names)