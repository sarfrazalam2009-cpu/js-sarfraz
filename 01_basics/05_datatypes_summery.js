// there 2 types of datatype
   // 1. Primitive
   // 2. Non Primitive / Reference


// 1. Primitive datatype :- This is call by value datatype . all data are provided by refrence of data . 
// all changes are done in copy formet.
// There are 7 types of Primitve : String, Number, Boolean, null, undefined, symbol, Bigint


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail; // that give undifined result

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); 

const bigNumber = 3455547589658544n


// 2. Non Primitive :- Array, Objects. Functions


const heros = ["shatiman" ,"nagaarjun", "hulk", "thor"] //Array

let myObj = {
    name: "Sarfraz",
    age: "30",
}  // Object

const myFunction = function(){
console.log("Hello world");

}

