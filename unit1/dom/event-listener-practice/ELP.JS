var square = document.getElementById("square")

square.addEventListener("mousedown", function(){ 
    square.style.backgroundColor = "red"
})

window.addEventListener("keypress", event => {
    switch (event.key) {
        case "b": 
            square.style.backgroundColor = "blue"
            break;
        case "o":
            square.style.backgroundColor = "orange"
            break;
        case "r":
            square.style.backgroundColor = "red"
            break;
        case "y":
            square.style.backgroundColor = "yellow"
            break;
        case "g":
            square.style.backgroundColor = "green"
            break;
}});
function setBackgroundColor(color) {
    square.style.backgroundColor = color;
}


square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow" 
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})


window.addEventListener("wheel", function(){
    square.style.backgroundColor = "orange"
})

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})
square.addEventListener("mouseout", function(){
    square.style.backgroundColor = "black"
})


