const readline = require("readline-sync")

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]


e=0
for (var i = 0; i < officeItems.length; i++) {
    
    if (officeItems[i] == "computer") {e++}}
    console.log("computer is stated "+ e +" times")


    var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 17) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road.")
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road.")
    }}






