let firstName = "John Doe";
firstName = "Jane Smith";

console.log(firstName); // Output: Jane Smith


const user="Tapan Kumar"
try{
 user = "Pawan das"
 console.log(user)
}catch(e){
    if(e instanceof TypeError){
    console.log("You cannot change the value of a constant variable.")
    }
}


let teaTypes = ["Green Tea", "Black Tea", "Oolong Tea"];
teaTypes.push("White Tea");
console.log(teaTypes); // Output: ["Green Tea", "Black Tea", "Oolong Tea", "White Tea"]


