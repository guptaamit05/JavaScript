// let teaFlavors = [];
// let teaFlavors = ['green tea', 'orange tea', 'ginger tea', 'flavored tea']

// let [firstTea="Default Value"] = teaFlavors;  // if array empty we will get default value..
// console.log(firstTea)

// let firstValue = teaFlavors?.[0] ? teaFlavors[0] : "Default Value"   // Another way to get first value if exist..
// console.log(firstValue)

// let firstV = teaFlavors.length > 0 ? teaFlavors[0] : "Default Value"
// console.log(firstV)




// const cities = ['london', 'USA', "UK", "China", "Japan"]
// const cities = null
// let thirdValue = cities?.[2] || "Default Value ";    // Get the 3rd value from an array...
// let thirdValueSecond = cities[2] || "Default Value ";

// console.log(thirdValue)
// console.log(thirdValueSecond)  // will throw an TypeError: Cannot read properties of null (reading '2'): 



// Change the 2nd element of an array to new value...
// const teaTypes = ['orange', 'black', 'green', 'lemon']
// teaTypes[1] = 'ginger tea';
// console.log(teaTypes)


// insert a new element in existing array using PUSH METHOD.
// let visitedCities = ['mumbai', 'chennai', 'kerala', 'goa']
// visitedCities.push("Berlin")
// console.log(visitedCities)



// remove last element from an array...
// let ap = [];
// let teaOrders = [1,2,3,4,5]
// delete ap[ap.length]
// console.log(ap)

// teaOrders.pop()
// console.log(teaOrders)



// popularTea array create a soft copy of it.  (SOFT COPY)
// const popularTea = ['ginger', 'green' ,'orange']
// const copyPopularTea = popularTea;  // soft copy of array....
// // const copyPopularTea = [...popularTea]  // Shallow/HARD Copy of an array....
// console.log(popularTea, copyPopularTea)
// popularTea.pop();
// console.log(popularTea, copyPopularTea)



// HARD COPY OF ARRAY
// const popularCountry = ['mumbai', 'goa', 'kerala', 'brajil']
// console.log("original = ", popularCountry)
// const hardCopy = [...popularCountry]       // HARD COPY OF ARRAY...
// const hardCopy2 = popularCountry.slice()   // creating HARD COPY...
// console.log(hardCopy,hardCopy2)


// MERGE TWO ARRAY..
// let cities = ['mumbai', 'goa']
// let anotherCities = ['kerala', 'indore']
// let allCities = [...cities, ...anotherCities]
// console.log(allCities)



//  Vaue exist in array or not...
// let citilist = ['A', "B", "C"]
// let city = "CS"
// let isExist = false;
// if(citilist.includes(city)){
//     isExist = true;
// }
// console.log(isExist)
