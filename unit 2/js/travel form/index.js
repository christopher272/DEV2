const form = document.travel

form.addEventListener('submit', function(event) {
    event.preventDefault()
var firstName = form.fName.value 
var lastName = form.lName.value
var Age = form.age.value
var sex = form.gender.value
var whereto = form.destination.value
const diets = []

    for (let i = 0; i <form.diet.length; i++){
        if (form.diet[i].checked) {
            diets.push(form.diet[i].value) 
        }
    }



    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + Age + "\nGender: " + sex + "\nTravel Location: " + whereto + "\nDietary restrictions: " + diets);
})