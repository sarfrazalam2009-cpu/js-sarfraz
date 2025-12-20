// let myName = "sarfraz   "
// let myChannel = "chai   "

// console.log(myName.truelength);


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sarfraz = function(){
    console.log(`sarfraz is present in all objects`);
    
}

Array.prototype.heySarfraz = function(){
    console.log(`Sarfraz says hello`);
    
}

// heroPower.sarfraz()
myHero.sarfraz()
myHero.heySarfraz()
// heroPower.heySarfraz()

// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User

// Modern Syntex

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);    
}
anotherUsername.trueLength()
"sarfraz".trueLength()
"iceTea".trueLength()

