// this is Object Literal
// const user = {
//     username: "sarfraz",
//     loginCount: 8,
//     singnedIn: true
// }

const user = {
    username: "sarfraz",
    loginCount: 8,
    singnedIn: true,
   getUserDetails:function(){
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    //console.log(this);
    
    
   }
    
}



//console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);

//Constructor Function - new keyword is use for new exicution
// when we use new keyword then Empty object generate
// const promiseOne = new promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("sarfraz", 12, true)
const userTwo = new User("chai", 15, false)
console.log(userOne);
console.log(userOne.constructor);

console.log(userTwo);
