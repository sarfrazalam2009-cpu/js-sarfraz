// static prop = static properties
// its usesed when you don't want to give data to another object
class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}
const sarfraz = new User("sarfraz")
// console.log(sarfraz.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId());
