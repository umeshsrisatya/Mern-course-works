const person = {
    firstName : "Penkey",
    lastName : "Umesh",
    fullNames : function(){
        return `${this.firstName} ${this.lastName}`
    }, 
    fullName : () => {
        // inside arrow function this keyword will refer to the global object
        console.log(this);
        return `${firstName} ${lastName}`
    }
}
console.log(person.fullName()) // undefined undefined