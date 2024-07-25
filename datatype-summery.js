//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

//  Reference (Non primitive)

//  Array, Objects, Functions

const car = ["bmw","maruti","ferrari"];

let myObj={
    name: "ashik",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj);