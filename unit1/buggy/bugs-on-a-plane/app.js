var form = document.myForm

var submit = form.submit.value

var query = document.querySelector;
form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    var firstName = form.fName.value;
    var lastName = form.lName.value;
    var age = form.ages.value;
    var gender = form.genders.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked) {
        diet.push("vegan");
    }
    if (form.gluten.checked) {
        diet.push("gluten");
    }
    if (form.paleo.checked) {
        diet.push("paleo");
    }
    console.log("hi")
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})
