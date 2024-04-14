const readline = (require("readline-sync"))
var name = "chopherst"
var upper = name.toUpperCase()
var double = upper.concat(name)
console.log(double)

var middle = Math.floor(name.length/2)
console.log(middle)

var returnFirstHalf = double.slice(0, middle)
console.log(returnFirstHalf)
var secondHalf = name.slice(middle)
var split = name.toUpperCase().slice(0,middle).concat(secondHalf)
console.log(split)