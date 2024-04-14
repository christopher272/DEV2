const readline = require ('readline-sync');


class Player {
constructor(name) {
    this.name = String(name);
    this.totalCoins = 0;
    this.status = "Small";
    this.hasStar = false;
    }
    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";        
        } else if (this.status === "Small") {
            this.status = "Dead";
        }
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Coins: ${this.totalCoins}
        Star: ${this.hasStar}
        `);
    }
}

const player = new Player("mario");
player.print();

    let timer =  setInterval(randomrange, 1000);

    function randomrange() {
      let result = Math.floor(Math.random() * 3);

    if (result === 0) {
        player.gotHit()
        player.print()
        if (player.status === "dead"){
            clearInterval(timer)
        }
    } else if (result === 1) {
        player.gotPowerup()
        player.print();
    } else {
        player.addCoin()
        player.print();
    } }

    