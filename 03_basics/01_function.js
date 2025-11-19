// Function

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("F");
    console.log("R");
    console.log("A");
    console.log("Z");
    
}
// sayMyName()

// function addTwoNumbers(number1, number2){   // (number1, number2) is parameter 
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(3, 4) // (3, 4) is argument 
// // answer is 7
// addTwoNumbers(3, "4") 
// // answer is 37 because jave script consider all no. in string
// addTwoNumbers(3, "a")  
// // answer is 3a
// addTwoNumbers(3, null)  
// // answer is show only 3

// // Note : when youe make a function defination then its call parameters
// // note : when your call a funtion then the value are passes in function its call argument 

// const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

function addTwoNumbers(number1, number2){   

    // let result = number1 + number2
    // return result  // after result given data doesnot print 

    return number1 + number2

    
}
const result = addTwoNumbers(3, 5)
// console.log("Result:", result);


// function loginUserMessage(username){
//     return  `${username} just logged in`
// }

// console.log(loginUserMessage("sarfraz"))
// answer is sarfraz because we give a loginUserMessage 
// when we does not declear value of  loginUserMessage then its answer will show undefine  


// when user doesnot pass a value then the answer will print undefine so first we check user is definer 
// a value or not for checking of this processes 
// we use if/else conditions

function loginUserMessage(username){
    if(username === undefined){   // username === undefined is also writen by !username
        console.log("Please enter a username");
        return
        
    }
    return  `${username} just logged in`
}

console.log(loginUserMessage())


//Note : if you doesnot whant to check ki user are passing value or not 
// then you will declear ther value first then answer are not showing undefined 
// example : pass the value first on username = "sarfraz"
