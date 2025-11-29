// reduce 
// note: accumulator = its take intial value in firt loop , in second loop its take 1st loop value 
// currentvalue = its taken value of array 

const array1 = [1, 2, 3, 4];
 const initialValue = 0;
 const sumWirhIntial = array1.reduce(
   (accumulator, currentValue) => accumulator + currentValue,initialValue
 );
console.log(sumWirhIntial);

// Expected output: 10

// Example:
// Here accumulator = acc , currentValue = currval
// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {   
//     return acc + currval
// }, 0)

// console.log(myTotal);
// Expected Output: 6


// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
// console.log(myTotal);
// if we give intialValue = 0
//Expected Output: 
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)
// console.log(myTotal);
// if we give intialValue = 3
// Expected Output:
// acc: 3 and currval: 1
// acc: 4 and currval: 2
// acc: 6 and currval: 3
// 9

/*********** using Arrow Functions ********/

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);
// Expected Output: 6

/************* using Array   *****************/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "phyton course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 9999,
    },
    {
        itemName: "data science course",
        price: 9999,
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);
// Expected Output: 23996
