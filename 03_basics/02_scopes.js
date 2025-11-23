// {} -> is scope 
// Note : in a scope value are block scope
// outside of scope is globle scope

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

// Nestet Scope -> in nestest scope child scope is take variable from its parents scope

function one(){
    const username = "sarfraz"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); answer is Error
    
    two()
}
one()

if(true){
    const username = "Alam"

    if(username === "Alam"){

        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website); its show Error bcoz its out of scope
    
}
// console.log(username);  its show Error bcoz its out of scope


// ********************* interesting ****************************

// one way of function declearation
// when we consol using in top of function then program will return the value
console.log(addone(5));

function addone(num){
    return num + 1

}

// another way of function declearation 
// when we consol using in top of the function then program will return the Error bcoz we hold the value in a variable
console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}


