// *************** let study Memory ******************* 
// there are 2 type of memory
   // 1. Stack 2 . Heap
// 1. Stack => Stack Store "Primitive Datatype"
// 2. Heap => Heap Store "Non Primitive Datatype"  
// Stack Memory used then it Provide "Copy Value" 
// Heap Memory used then it Provide "Original Value" 

// const { useInsertionEffect } = require("react");

// Stack Memory Example

// let myYoutubename = "sarfrazyoutubechannel.com"

// let anothername = myYoutubename
// anothername = "sarfrazwithchai"

// console.log(myYoutubename);
// console.log(anothername);

//answer is myYoutubename = sarfrazyoutubechannel.com
//          anothername = sarfrazwithchai  


// Heap Memory Example 

let userOne = {
    email: "sarfraz@goole.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sarfrazalam@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);


// Answer is userOne.email = sarfrazalam@gmail.com
//           userTwo.email = sarfrazalam@gmail.com  