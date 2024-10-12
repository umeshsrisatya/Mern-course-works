function bodyMassIndex(weight,height){
    return weight/(height*height);
}
var bmi = bodyMassIndex(68, 1.75);
console.log("Your bmi is :"+bmi);