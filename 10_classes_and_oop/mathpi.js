// Math.PI values dosenot change

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const chai = {
    name: 'gingger chai',
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bana");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// changing property of object 
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)){
    if (typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }
    
    
}
