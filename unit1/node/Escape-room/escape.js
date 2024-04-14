const readline = require("readline-sync")
var inventory = []
var health =["alive"]
var status = ["trapped"]
var name = readline.question("what is your name?  ")
console.log("Okay "+ name + " you woke up in a stone room lit by the fireplace in the north corner. You have three options for actions.")
while (health.length > 0 && status.length == 1){
    if (inventory.length >= 0){
console.log(" You can try to find the Key(k). You can stick your hand in the Hole near the fireplace(h). Or you can Open the door(d). ")
var result = readline.keyIn("What do you do?", {hideEchoBack: true , mask: '',limit: 'k,h,d'})}

if (result == "d" && inventory.length ===0 ) {
    console.log("The door is locked")    
}
else if (result == "d" && inventory.length > 0 ){
    console.log("You escaped the room")
    status.pop()
}
else if (result == "k" && inventory.length ===0) {
    inventory.push("key")
    console.log("congradulations you found the key.")
}
else if (result == "k" && inventory.length > 0) {
    console.log("you already found the key.")
}
if (result == "h") {
    console.log("you unfortunately have died")
    health.pop()
}







}