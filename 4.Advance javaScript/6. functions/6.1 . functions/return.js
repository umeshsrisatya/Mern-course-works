function isNumber(a){
    return typeof a === 'number'
}

function average(a,b){
    if(!isNumber(a) || !isNumber(b)){
        return "Invalid Input"
    }
    return (a+b)/2
}

function add(a,b){
    if(!isNumber(a) || !isNumber(b)){
        return "Invalid Input"
    }
    return a+b
}

console.log(average(add(120,1235),12305));  // 7.5
// console.log();  // 1355