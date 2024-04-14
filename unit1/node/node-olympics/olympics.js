const readline = require('readline-sync')

//# **Preliminaries**

//1. Write a for loop that prints to the console the numbers 0 through 9.

//    for (let i = 0; i <= 9; i++) {
//        console.log(i)
//}


//2. Write a for loop that prints to the console 9 through 0.

//    for ( let i = 9; i >= 0; i--) {
//        console.log(i) }

//3. Write a for loop that prints these fruits to the console.

//const fruit = ["banana", "orange", "apple", "kiwi"]
//    for (let i = 0; i < fruit.length; i++) {
//        console.log(fruit[i])}

//# **Bronze Medal**

//1. Write a for loop that will push the numbers 0 through 9 to an array.
//    let arr = []
//    for (let i = 0; i <= 9; i++) {
//        arr.push(i)}
//    console.log(arr)

//2. Write a for loop that prints to the console only even numbers 0 through 100.

 //   for (let i = 0; i <= 100; i++) {
 //       if (i % 2 === 0) {
 //           console.log(i)}}

//3. Write a for loop that will push every other fruit to an array.
//const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
//const otherFruit =[]
//for (let i = 0; i < fruit.length; i++ ){
//    if (i % 2 === 0) {
//        otherFruit.push(fruit[i])
//    }}
//console.log(otherFruit)
const names = []
const occupations = []
const peopleArray = [
    {
    name: "Harrison Ford",
    occupation: "Actor"
    },
    {
    name: "Justin Bieber",
    occupation: "Singer"
    },
    {
    name: "Vladimir Putin",
    occupation: "Politician"
    },
    {
    name: "Oprah",
    occupation: "Entertainer"
    }
]
//Write a loop that will print out all the names of the people of the people array

//    for (let i = 0; i < peopleArray.length; i++)
//    {console.log(peopleArray[i].name)}

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.

//    for (let i = 0; i < peopleArray.length; i++){
//        names.push(peopleArray[i].name)
//        occupations.push(peopleArray[i].occupation)
//    }
    
//Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

    for (let i = 0; i < peopleArray.length; i++){
        if (i % 2===0){
            names.push(peopleArray[i].name)
        }
        if (i % 2!=0){
            occupations.push(peopleArray[i].occupation)
        }
    }

//Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.
    console.log(names)
    console.log(occupations)