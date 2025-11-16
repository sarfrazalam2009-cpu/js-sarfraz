const name = "sarfraz"
const repoCount = 50

//console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sarfrazalam') // another way of string declear

// Function

// console.log(gameName[0]); //key value pair answer is "s"
// console.log(gameName.__proto__);  //answer is "object"
// console.log(gameName.length);     //answer is "11"
// console.log(gameName.toUpperCase()); // answer is "SARFRAZ"
// console.log(gameName.charAt(3));     // answer is "f"
// console.log(gameName.indexOf('f'));  // answer is "3"



// const newString = gameName.substring(0, 4) // it doesnot read -ve value
// console.log(newString);


// const anotherString = gameName.slice(-10, 4) // it read -ve value 
// console.log(anotherString);

// const newString1 = "   sarfraz   "
// console.log(newString1);
// console.log(newString1.trim());



const url = "https://sarfraz.com/sarfraz%20alam"
console.log(url.replace('%20','-'));
console.log(url.includes('sarfraz'));


const newString3 = "sarfraz-alam-2009"
console.log(newString3.split('-')); // string split into 'Array'

