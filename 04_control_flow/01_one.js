// if , else , ifelse condition its call control flow or logic flow 
 
// if can be writen in code Example if(condition){}

// if (true){  // if condition are true then code will be excute

// }
// if(false){   // if condition are false then code will not excute

// }
// comperation oprator ar < , > , <= , >= , == , === , != , !< , !<


// const isUserloggedIn = true
// if( 2 == "2" ){
//     console.log("excuted");
    
// } 
// Result = excute

// const isUserloggedIn = true
// if( 2 === "2" ){
//     console.log("excuted");
    
// }
// // Result = code not excute because 2 is number and "2" is string and === is strictly checking 

// const isUserloggedIn = true
// const temperature = 41

// if( temperature < 50 ){
//     console.log("less then 50");
    
// }else{
//   console.log("temperature is grater then 50");  
// }

// const temperature = 41

// if( temperature === 40 ){
//     console.log("less then 50");
    
// }else{
//   console.log("temperature is grater then 50");  
// }
 
// const score = 200

// if(score){
//   const power = "fly"
//   console.log(`User power: ${power}`);
  
// }

// note: another way to write conditional code but its not best way of code writen in single line 

const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2")

// just talk about Nesting

// if (balance < 500) {
//     console.log("Less than");    
// }else if (balance < 750){
//     console.log("Less than 750");
// }else if (balance < 900){
//     console.log("Less than 900");
// }else {
//     console.log("Less then 1200");
    
// }

// const userLoggedIn = true
// const debitCard = true
// if (userLoggedIn && debitCard && 2==3){  // if any condition are wrong then code will not excute
//     console.log("Allow to buy course");    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggerInFromEmail = true

if (userLoggedIn && debitCard && 2==2){  
    console.log("Allow to buy course");    
}

if (loggedInFromGoogle || loggerInFromEmail) {
    console.log("User logged in");
}