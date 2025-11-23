const user = {
    username: "sarfraz",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMassage()
// user.username = "alam"
// user.welcomeMassage()

// console.log(this); // answer is null

// function chai() {
    
//    console.log(this);
    
// }
// chai()

// this is a way of arrow declearation

const chai = () => {
    let username = "sarfrazaa"
    console.log(this);
    

}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// when we return object
const addTwo = (num1, num2) => ({username: "sarfrazalam"})

console.log(addTwo(3, 4));
