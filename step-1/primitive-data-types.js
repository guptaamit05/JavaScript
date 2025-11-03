//Number
let age = 32;
console.log(age)

const Age = new Number(34)
console.log(Age)

//String
let firstName = "John Doe";
console.log(firstName)

const FirstName = new String("Jane Smith")
console.log(FirstName)

//Boolean
let isLoggedIn = true;
console.log(isLoggedIn)

const IsLoggedIn = new Boolean(false)
console.log(IsLoggedIn)

//Undefined
let middleName;
console.log(middleName)

// const MiddleName = new undefined
// console.log(MiddleName)

//Null
//let lastName = null;
// console.log(lastName)

//const LastName = new null
//Symbol
let uniqueId = Symbol("id");
console.log(uniqueId)
console.log(uniqueId.valueOf())

// const UniqueId = new Symbol("identity")
// console.log(UniqueId)

let name = "Harish"
console.log(name)

//BigInt
let bigIntNumber = 9007199254741991n;
console.log(bigIntNumber)

const BigIntNumber = BigInt("9007199254741992")
console.log(BigIntNumber)


let s1 = Symbol("amit")
let s2 = Symbol("amit")

console.log(s1 == s1.valueOf())