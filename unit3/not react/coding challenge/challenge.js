function solution(arr) {
    const nonNegatives = []; 
    const negIndices = []; 
    

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            negIndices.push(i);
        } else {
            nonNegatives.push({ value: arr[i], index: i });
        }
    }
    
    nonNegatives.sort((a, b) => a.value - b.value);
    
    let result = [];
    let nonNegIndex = 0;
    let negIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (negIndices.includes(i)) {
            result.push(-1);
        } else {
            result.push(nonNegatives[nonNegIndex].value);
            nonNegIndex++;
        }
    }
    
    return result;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([5, 3, 1])); 
console.log(solution([-1, -1, -1, -1])); 
console.log(solution([100, -1, 50, -1, 75]));




function countVowels(str) {
    const vowelRegex = /[aeiou]/gi;
    

    const vowels = str.match(vowelRegex);
    

    return vowels ? vowels.length : 0;
}

console.log(countVowels("Hello")); // Output: 2
console.log(countVowels("This is a test sentence.")); // Output: 7
console.log(countVowels("")); // Output: 0


function findSumOfTwo(numbers, target){

    for (let i = 0 ; i< numbers.length ; i++){
        for (let j = i+1 ; j< numbers.length ; j++){
            if (numbers[i] + numbers[j] === target){
                return [numbers[i], numbers[j]]
            }
        }
    }


}


console.log(findSumOfTwo([2,4,7,11,15], 26)) // [2, 7]