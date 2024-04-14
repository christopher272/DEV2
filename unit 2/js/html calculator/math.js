const mult =  document["multiplication"]
const add = document["addition"]
const sub = document["subtraction"]

add.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = add.num1.value
    const num2 = add.num2.value

    const result = +num1 + +num2
    const h3 = document.createElement("h3")
    h3.textContent = `The result is ${result}`
    document.getElementsByClassName("plus")[0].appendChild(h3)
    
})

sub.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = sub.num1.value
    const num2 = sub.num2.value

    const result = num1 - num2
    const h3 = document.createElement("h3")
    h3.textContent = `The result is ${result}`
    document.getElementsByClassName("minus")[0].appendChild(h3)
    
})


mult.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = mult.num1.value
    const num2 = mult.num2.value

    const result = num1 * num2
    const h3 = document.createElement("h3")
    h3.textContent = `The result is ${result}`
    document.getElementsByClassName("times")[0].appendChild(h3)
    
})