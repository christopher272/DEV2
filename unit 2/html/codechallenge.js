const people = [ "John", "Adam", "Amber" ]
function peopleElements(arr) {
    const newPeople = people.map(people => { 
        return`<h1>${people}</h1>`
        
    } 
    )
    return newPeople
}

console.log(peopleElements(people))

//Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]