// {} -> is scope 
// Note : in a scope value are block scope
// outside of scope is globle scope

const { forwardRef } = require("react");

// if (true){
//     let a = 10 // answer a is not define
//     const b = 20 // answer b is not define 
//     var c = 30 // answet c = 30 thats is Error because in scope answer will be not define 
// }
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
    
// }
// console.log(a);

// answer is INNER: 10 -> that is Block Scope Because its is under the scope
// answer is 300 -> that is Globel scope Because it is outside of the scope 

// Nestet Scope


