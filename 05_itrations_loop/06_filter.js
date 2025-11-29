
// Filter Operator  : it can pass true value only

//  const coding = ["js", "ruby", "c++", "java", "python"]


//  const value  = coding.forEach( (item) =>  {
//     // console.log(item);
//     return item
    
//  } )

//  console.log(value);
// note: forEach doesn't return values its show undefine in answer

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// const newNums = myNumber.filter( (num) => num > 4 )
// console.log(newNums); 


// 1st way to write code 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// const newNums = myNumber.filter( (num) =>  {
//    return num > 4
//  note: if you open a scop in filter then return is compalsary to use 
//        if you not use return then answer will be blank array
// } )
// console.log(newNums);


// 2nd way to write same code both are correct
// const newNums = []

// myNumber.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


// Example 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'History', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Non-Fiction', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Science', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'Fiction', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'History', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1991, edition: 1989},
    
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'
 } )

console.log(userBooks);


