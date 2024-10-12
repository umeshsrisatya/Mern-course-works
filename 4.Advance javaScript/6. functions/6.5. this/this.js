// this is used inside of an object to refer to the object itself
const cat = { //cat object 
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){ //function inside of the object called as method 
        console.log("this is ", this); 
        // this keyword inside of this method refers to cat object
    }
}
const meow2 = cat.meow; //function reference
cat.meow(); 
meow2(); 
window.meow2(); //window object