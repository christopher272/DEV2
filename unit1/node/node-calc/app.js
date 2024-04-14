const readline = require("readline-sync")
const add = (a,b) => a+=b
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b
options = ["add","sub","mul","div"]
var num1 = (readline.questionInt("Enter first number: "))
var num2 = (readline.questionInt("Enter second number: "))
var operation = (readline.question(options, "Enter operation: "
))


if(operation == "add"){
    console.log("The result is "+add(+num1,+num2))
}
else if(operation == "sub"){
    console.log("The result is "+sub(num1,num2))
}
else if(operation == "mul"){
    console.log("The result is "+mul(num1,num2))
}
else if(operation == "div"){
    console.log("The result is "+div(num1,num2))
}