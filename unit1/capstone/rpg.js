const readline = require("readline-sync")
const baddiesOptions = [ {
    monster: 'Dire Wolf',
    health: 25,
    maxDamage: 6,
    loot:" wolf pelt"
    },
    {
    monster: 'Chimera',
    health: 40,
    maxDamage: 9,
    loot:"chimera wing"
    },
    {
    monster: 'Gorgon',
    health: 35,
    maxDamage: 8,
    loot:"gorgon eye"
    },
    {
    monster: 'Mimic',
    health: 30,
    maxDamage: 7,
    loot: "shimmering chestplate"
    },
    {
    monster: 'Banshee',
    health: 20,
    maxDamage: 5,
    loot: "banshee essence"
    }
];

console.log("Welcome, brave adventurer, to the mystical realm of Eldoria in the enchanted year of 1985! As you step into the pixelated world of console RPG, prepare yourself for a journey filled with daring quests, treacherous monsters, and more nostalgia than your favorite mixtape!");
console.log("In this text-based adventure, your fate is in your hands as you navigate through the commands and face the challenges that await you. Sharpen your sword, and get ready for a journey that will transport you back to the golden age of pixels and potions.");
console.log("Are you ready to embark on a quest of epic proportions? The console awaits your command, oh valiant player! May your code be bug-free and your adventures legendary!")
const name = readline.question("what is your name? ")
let playerHealth = 50
let maxHealth = 50
let playerInventory = ["longsword",]
let playing = 1
let encounters = 0
console.log("hello " + name)
while (playerHealth > 0 && playing ===1) {
    console.log(encounters)
    if (encounters === 3){

        console.log("you have encountered 3 monsters and have won the game")
        playing =0
    }

    let input = readline.keyIn('What will you do? (Press "p" to print out your stats, "w" for walk, "q" for quit): ', { limit: "pwq" });
    if (input === 'p'){
        console.log("your name is " + name)
        console.log("your health is " + playerHealth)
        console.log('Player Inventory:');
for (const item of playerInventory) {
        console.log(`- ${item}`);
}
    }
    else if (input === 'q'){
        console.log("goodbye")
        console.log("you encountered " + encounters + " enemies")
        playing = 0
    }
    else if (input === 'w'){
        console.log("you walk for 25 minutes")
        let random = Math.floor(Math.random()*3)+1
        if (random === 2){
        let encounterPicker = baddiesOptions[Math.floor(Math.random()*baddiesOptions.length)] 
        let encounter = {
            monster: encounterPicker.monster,
            health: encounterPicker.health,
            maxDamage: encounterPicker.maxDamage,
            loot: encounterPicker.loot
            }
            console.log("you encountered an "+ encounter.monster +"!")
            console.log("this "+ encounter.monster + " has " + encounter.health + " health and deals a maximum of  " + encounter.maxDamage + " damage!")
        let action = readline.keyIn('What will you do? (Press "a" to attack, "r" to try and get away): ', { limit: "ar" });
            if (action === 'a'){
                while (playerHealth >= 0 && encounter.health >= 0){
                    let damage = Math.floor(Math.random()*encounter.maxDamage)+1
                    encounter.health = encounter.health - damage
                    console.log("you deal " + damage + " damage to the " + encounter.monster)
                    let monsterDamage = Math.floor(Math.random()*encounter.maxDamage)+1
                    playerHealth = playerHealth - monsterDamage
                    console.log("the " + encounter.monster + " deals " + monsterDamage + " damage to you")
                    console.log("your remaining health = " + playerHealth)
                    if (encounter.health <= 0) {
                        console.log("you got a "+ encounter.loot+ "from the "+encounter.monster+"." )
                        playerInventory.push(encounter.loot)
                        let maxHealing = maxHealth - playerHealth
                        let healing = Math.floor(Math.random()*maxHealing)+1
                        playerHealth = playerHealth + healing
                        encounters = encounters + 1
                        console.log("you also got " + healing +" health back")
                    }
            }
        }
            else if (action === 'r'){
                let escape = Math.floor(Math.random()*2)+1
                if (escape === 1){
                    console.log("you got away safely!")
                }
                else if (escape === 2) {
                    console.log("unfortunately the " + encounter.monster + " saw you and blocked your escape route")
                    while (playerHealth > 0 && encounter.health > 0){
                        let damage = Math.floor(Math.random()*encounter.maxDamage)+1
                        encounter.health = encounter.health - damage
                        console.log("you deal " + damage + " damage to the " + encounter.monster)
                        let monsterDamage = Math.floor(Math.random()*encounter.maxDamage)+1
                        playerHealth = playerHealth - monsterDamage
                        console.log("the " + encounter.monster + " deals " + monsterDamage + " damage to you")
                        console.log("your remaining health = " + playerHealth)
                        if (encounter.health <= 0) {
                            console.log("you defeated the "+encounter.monster+" and got "+ encounter.loot+ "from the "+encounter.monster+"." )
                            playerInventory.push(encounter.loot)
                            let maxHealing = maxHealth - playerHealth
                            let healing = Math.floor(Math.random()*maxHealing)+1
                            playerHealth = playerHealth + healing
                            encounters = encounters + 1
                            console.log("you also got " + healing +" health back")
                        }
                    
                }
                }
            }
    }
}
    if (playerHealth <= 0){
        console.log("Alas, brave adventurer, your journey has come to an end. The monsters of Eldoria have proven to be too formidable, and the echoes of your valiant efforts shall linger in the halls of virtual legend. May your next respawn be filled with better loot and wiser choices. Farewell, fallen hero.")
        console.log("Your final score = " + encounters)
        console.log('your final Inventory:');
for (const item of playerInventory) {
    console.log(`- ${item}`);
        
    }
}}