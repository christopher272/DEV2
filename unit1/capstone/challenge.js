function largestNum(num1, num2, num3){
    //return the largest number
    if (num1 > num2 && num1 > num3){
        return num1
    }
    else if (num2 > num1 && num2 > num3){
        return num2 
    }
    else {
        return num3
    }
}

console.log(largestNum(8,5,13)) // 13
console.log(largestNum(-5,22, 7)) // 22


console.log(Math.max(1,2,3))
