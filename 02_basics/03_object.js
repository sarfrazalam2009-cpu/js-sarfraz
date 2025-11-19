// singleton object - made by constuctor 
   // object.create
// literals object

const mySym = Symbol("key1")

const jsUser = {
    name: "Sarfraz",
    [mySym]: "myKey1",
    age: 30,
    location: "Motihari",
    email: "sarfrazalam2009@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Sunday"]
}
console.log(jsUser.email);   // another way to declear object by console 
console.log(jsUser["email"]); // Best way to declear object by console 

console.log(jsUser[mySym]);


jsUser.email = "sarfrz@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "sarfraz@microsoft.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




