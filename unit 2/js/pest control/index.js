const form = document.pestsCaught
const result = document.getElementById("total")


form.addEventListener("submit", function(event) {
    event.preventDefault()

    var goombaTotal = (form.goomba.value * 5)
    var bobOmbTotal = (form.bobOmb.value * 7)
    var cheepCheepTotal = (form.cheepCheep.value * 11) 
    var total = +goombaTotal + +bobOmbTotal + +cheepCheepTotal
    console.log(goombaTotal, bobOmbTotal, cheepCheepTotal)

    result.innerText =( "Princess peach owes you " + total + " coins!")
})