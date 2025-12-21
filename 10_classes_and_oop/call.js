function SerUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function CreateUser(username, email, password){
    SerUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new CreateUser("chai", "chai@fb.com", "123")
console.log(chai);
