// Immediately Invoked Function Expressions (IIFE)

// Option-1 normal way of function declearation
function chai(){
    console.log(`DB CONNECTED`);
    
}
chai();

// Option-2 
(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
    
})();  // its importent to end the code by ";"

// Option-3 Function Declear by IIFE Method where wo use Arrow methods

(() => {
    console.log(`DB CONNECTED TWO`); 
})();

//Option-4 in this option we also declear a variables

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
} )('Sarfraz')