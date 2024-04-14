const readline = require("readline-sync")
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
var orangeInd = fruit.indexOf("orange")
fruit.push(orangeInd)
var vegLength =vegetables.length
vegetables.push(vegLength)
var food = fruit.concat(vegetables)
var remove = food.splice(4,2)
food.reverse()
var foods =food.join()

console.log(fruit)
console.log(vegetables)
console.log(orangeInd)
console.log(vegLength)
console.log(food)
console.log(foods)
