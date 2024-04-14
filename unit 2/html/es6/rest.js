const readline = require('readline-sync');

function collectAnimals(...animals) {
    return animals;
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]
//console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

function combineFruit(fruits, sweets, vegetables) {
    return {
    fruits: [...fruits],
    sweets: [...sweets],
    vegetables: [...vegetables]
    };
}

//console.log(combineFruit(
//    ["apple", "pear"],
//    ["cake", "pie"], 
//    ["carrot"]
//));



/*       { fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
    }*/

    function parseSentence({location, duration}){
        return `We're going to have a good time in ${location} for ${duration}`
    }
    
    //console.log(parseSentence({
      //  location: "Burly Idaho",
        //duration: "2 weeks"
 //   }));


    function returnFirst(items){
        const [firstItem] = items;
        return firstItem
    }
  //  console.log(returnFirst(["apple", "banana", "orange"]))

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

//console.log(returnFavorites(favoriteActivities))


function combineAnimals(...arr) {
    return [].concat(...arr);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

//console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const product = (...numbers) => 
    numbers.reduce((acc, number) => 
       acc * number, 1)

  //  console.log(product(1, 2, 3, 4, 5))
    
    const unshift = (array, ...items) =>
    [...items, ...array];
 //   console.log(unshift(["a", "b", "c"], "x", "y", "z"));
    
    const populatePeople = (names) =>
        names.map(name =>{
            const [firstName, lastName] = name.split(" ");
            return {
                firstName: firstName,
                lastName: lastName
            }
        })
    
    
    console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
    //[
    //  {firstName: "Frank", lastName: "Peterson"},
    //  {firstName: "Suzy", lastName: "Degual"},
    //  {firstName: "Liza", lastName: "Jones"},
    //]