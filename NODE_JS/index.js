// console.log("Hello from node js amit agut...")

// let c = 100;
// console.log(`C vaue is = ${c}`)
// console.log()


//  TYPES OF MODULES 
// const fs = require("fs")    // BUILT IN MODULE
// let c = fs.readFileSync('./node.txt', 'utf-8')
// console.log(c)


// function wrapper(require, exports, modules, __dirname, __filename){
    // node js internally wrap code in this function...
// }


// fs.writeFileSync('copyfile.txt', "Hi amit thi-----------------s is writting operation...", 'utf-8')
// let anotherFleContent = fs.readFileSync('copyfile.txt', 'utf-8')
// console.log(anotherFleContent)


// fs.mkdirSync("games/test", {recursive:true})   // create directory + ies....


// and in case of delete game you have to delete one by one all dir. you can't delete sub dir of games.
// fs.rmdirSync("games/test");   // remove directory


// fs.unlinkSync("./tttt.txt")  //  delete the file


// Blocking and Non Blocking Code Execution in Node JS
// console.log("Reading in Synch way Start...")
// let fileContent = fs.readFileSync("copyfile.txt", 'utf-8')  // this is Blocking code...
// console.log(fileContent)
// console.log("File-1 readding stop")



// NON BLOCKING WAY TO READY THE FILE.....
// console.log("Reading in Async way...file-2")
// let result2 = fs.readFile('copyfile.txt', 'utf-8', function(err, data){
//     if(err) console.log("Error to read start....")
//     else console.log("Data == ", data)
// })
// console.log("File-2 readding stop")


// const fs = require('fs').promises; // Import the promise-based version of fs

// console.log("S T A R T ======")
// async function readFileAsync(filePath) {
//   try {
//     const data = await fs.readFile(filePath, { encoding: 'utf8' });
//     console.log('File content:', data);
//     return data;
//   } catch (error) {
//     console.error('Error reading file:', error);
//     throw error; // Re-throw the error for further handling if needed
//   }
// }

// Example usage:
// readFileAsync('copyfile.txt')
//   .then(content => {
//     // You can perform further actions with the file content here
//     console.log('File reading completed successfully.');
//   })
//   .catch(error => {
//     console.error('An error occurred during file reading:', error);
//   });
// console.log("S T O P ======")
