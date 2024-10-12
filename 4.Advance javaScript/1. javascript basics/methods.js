var name = "umesh"
console.log(name.toUpperCase()) // methods without arguments 
// output: UMESH
console.log(name.toLowerCase()) // methods without arguments
// output: umesh
console.log(name.trim()) // methods without arguments
// output: umesh
console.log(name.slice(0, 3)) // methods with arguments
// output: ume
console.log(name.indexOf("m")) // methods with arguments
// output: 1
console.log(name.replace("u", "U")) // methods with arguments
// output: Umesh
console.log(name.repeat(3)) // methods with arguments
// output: umeshumeshumesh
console.log(name.charAt(2)) // methods with arguments
// output: m
console.log(name.concat(" kumar")) // methods with arguments
// output: umesh kumar
console.log(name.includes("m")) // methods with arguments
// output: true
console.log(name.split("")) // methods with arguments
// output: [ 'u', 'm', 'e', 's', 'h' ]
console.log(name.startsWith("u")) // methods with arguments
// output: true
console.log(name.endsWith("h")) // methods with arguments
// output: true
// differeces between indexOf and charAt
// is that indexOf returns the index of the first occurrence of the character in the string
