// for loop with break statement...

// const selectedTea = [];
// const allTeas = ['orange', 'green' ,'chai', 'masala tea', 'dark tea']
// let arrayLen = allTeas.length;
// for(let i=0 ; i<arrayLen; i++){
//     if(allTeas[i].toLowerCase() === 'chai')
//         break;
//     selectedTea.push(allTeas[i])
// }
// console.log("Seleted Tea", selectedTea)



//  for loop with continue statement..

// let allCities = ['mumbai', 'delhi', 'goa', 'pune', 'indore', 'bhopal']
// let visitedCities = [];
// for(let i=0; i<allCities.length; i++){
//     if(allCities[i].toLowerCase() === 'goa') continue;
//     visitedCities.push(allCities[i])
// }
// console.log("visited cities = ",visitedCities)


// for of loop...

// let num = [1,2,3,4,5]
// let smallNum = [];
// for(let value of num){
//     if(value == 4) break;
//     smallNum.push(value)
// }
// console.log("small values are ", smallNum)


// for in loop...

// let cityPopulations = [];
// const cityP  = {"mumbai":2122, "bhopal":4534534, 'pune':43452, 'delhi':4534534, 'goa':5655, 'ujjain':234234 }
// for(const key in cityP){
//     if(key.toLowerCase() === 'goa') break;
//     cityPopulations[key] = cityP[key]
// }
// console.log("City Population ==", cityPopulations)



// forEach loop...

const favoriteTea = []
let allTeas = ['green tea', 'orange tea', 'blue tea', 'chai', 'black tea', 'yellow tea']
allTeas.forEach((value ,key, arr)=>{
    // console.log(key, value)
    if(value.toLowerCase() === 'chai') return;
    favoriteTea.push(value)
})
console.log("Favoite Tea ", favoriteTea)