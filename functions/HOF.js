
const makeTea = prm => prm;

const processTeaOrfer = (fn, args) =>{

    return fn("Gray Tea");
}

let result = processTeaOrfer(makeTea)  // HOC  function 
console.log(result)



// HOC 

// function outer(){
//     let count = 0;
//     return function fun(){
//         count++;
//         return count;
//     }
// }

// let r = outer();
// console.log(r())
// console.log(r())