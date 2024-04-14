const readline = require("readline-sync")


function sortNumbers(numbers) {
    return numbers.sort(function(a, b) {
        return  a - b 
    })
    }
  //  numbers = [
//        86, 23, 42, 51, 9, 15, 37, 64, 78, 3, 92, 57, 10, 69, 31, 47, 82, 28, 55, 61];
   // console.log(sortNumbers(numbers));



    function convertToUpperCase(strings) {
        return strings.map(function(e) {
            return e.toUpperCase()  
        })
    }
    const strings = ["this", "is", "a", "test", "of", "the", "map", "function"];
    console.log(convertToUpperCase(strings));



    // Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
    return numbers.filter(function(e){
    return (e %2==0)
    })
}

console.log(filterEvenNumbers(numbers));  // Output: [2, 4, 6]