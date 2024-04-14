var Header = document.getElementById("header").innerHTML = "JavaScript made this!!!";
var Theme = document.getElementById("theme-drop-down");
var Clear = document.getElementById("clear-button");
var Left = document.getElementsByClassName("message left");
var Right = document.getElementsByClassName("message right");
var Messages = document.getElementsByClassName("messages");
;
//for (let p = 0; p < Right.length; p++);


Theme.addEventListener("change", function(){
    
    if (Theme.value == "theme-one"){
        for (let i = 0; i < Left.length; i++){
        Right[i].style.backgroundColor = "lightblue";
        Right[i].style.color = "black";
        Left[i].style.backgroundColor = "burlywood";
        Left[i].style.color = "black";
    }
    }
    else if (Theme.value == "theme-two"){
        for(let i = 0; i < Left.length; i++){
        Right[i].style.backgroundColor = "red";
        Right[i].style.color = "white";
        Left[i].style.backgroundColor = "black";
        Left[i].style.color = "white";   
        }
        
    }

console.log(Theme.value)
})
for (let c = 0; c < Left.length; c++);
for (let d = 0; d < Right.length; d++);
Clear.addEventListener("click", function remove(){{
    Messages[0].innerHTML = "";
    console.log("clear")
}})


//left messages//
    Left[0].innerHTML = "you are in a 5*5 room with 15 spiders"
    Left[1].innerHTML = "the room is 5 feet wide"
    Right[0].innerHTML = "i cast fireball"
    Right[1].innerHTML = "i didnt ask how big the room is i said i cast fireball"
