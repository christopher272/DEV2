const readline = require('readline-sync');

let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let i = 1; i <= 100 ; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
        fizzBuzzCount++;
    }
    else if (i % 3 === 0) {
        console.log("fizz");
        fizzCount++;
}
    else if (i % 5 === 0){
        console.log("buzz");
        buzzCount++;
}
    else {
        console.log(i);
    }};
console.log("fizz: " + fizzCount);
console.log("buzz: " + buzzCount);
console.log("fizzbuzz: " + fizzBuzzCount);
