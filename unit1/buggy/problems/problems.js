const readline=require("readline-sync")




function largest(numbers) {


    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Test data
console.log(largest([6, 13, 250, 3])); // Output: 250
console.log(largest([3, 5, 2, 8, 1])); // Output: 8
console.log(largest([-13, 40, 3, 0, 19, 22])); // Output: 40



function lettersWithStrings(words, character) {
    return words.filter(word => word.includes(character));
}

// Test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")); // Output: ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")); // Output: ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")); // Output: []


function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}

// Test data
console.log(isDivisible(4, 2)); // Output: true
console.log(isDivisible(9, 3)); // Output: true
console.log(isDivisible(15, 4)); // Output: false
