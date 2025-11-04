// console.log("Hello from node js amit agut...")

// let c = 100;
// console.log(`C vaue is = ${c}`)
// console.log()


//  TYPES OF MODULES 
const fs = require("fs")    // BUILT IN MODULE
// let c = fs.readFileSync('./node.txt', 'utf-8')
// console.log(c)


// function wrapper(require, exports, modules, __dirname, __filename){

// }



// fs.writeFileSync('copyfile.txt', "Hi amit thi-----------------s is writting operation...", 'utf-8')
// let anotherFleContent = fs.readFileSync('copyfile.txt', 'utf-8')
// console.log(anotherFleContent)


fs.mkdirSync("games/test", {recursive:true})   // create directory + ies....

// and in case of delete game you have to delete one by one all dir. you can't delete sub dir of games.
fs.rmdirSync("games/test");   // remove directory

fs.unlinkSync("./tttt.txt")  //  delete the file