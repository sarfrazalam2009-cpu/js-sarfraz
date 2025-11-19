//const tinderUser = new Object() // this is singleton object 
const tinderUser = {} // this is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sarfraz"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// given a object 
const regularUser = {
    email: "sarfrazalam2009@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sarfraz",
            lastname: "alam",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// combining of object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const onj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


// when the value come from database then syntex will be used like that

const users = [
    {
        id: 1,
        email: "sarfrazalam@gmail.com"
    },
    {
        id: 1,
        email: "sarfrazalam@gmail.com"
    },
    {
        id: 1,
        email: "sarfrazalam@gmail.com"
    },
    {
        id: 1,
        email: "sarfrazalam@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // its giver user all keys
// console.log(Object.values(tinderUser)); // its gives user all value in array formate 
// console.log(Object.entries(tinderUser)); // its convert all key value into array


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //when you want to check user have a Porpertise 
// its give answer in a boolen like True or false


// D=structuring of Object Importent Toppic its usesfull

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "sarfraz"
}

//course.courseInstructor - its another way to construct 

const {courseInstructor} = course
console.log(courseInstructor);








