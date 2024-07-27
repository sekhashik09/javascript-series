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
console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++++++++++
//

//             memory

//  stack (Primitive)  ,   heap (Non Primitive)
let myname="ashik"
let nickname=myname
nickname='billa'
console.log(nickname);
console.log(typeof nickname);


let userOne={
    name: "sekh",
    num: 8967665685
}

let userTwo=userOne

userTwo.name="billa"

console.log( userOne);
console.log(userTwo);