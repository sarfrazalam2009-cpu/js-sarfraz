class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

//     get password (){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value.toUpperCase()

//     }

get email(){
    return this._email.toUpperCase()
}
set email(value){
    this._email = value
}


get password(){
    return `${this._password}sarfraz`
}
set password(value){
    this._password = value
}
}
const sarfraz = new User("s@arfraz.ai", "abc")
console.log(sarfraz.password);
console.log(sarfraz.email);
