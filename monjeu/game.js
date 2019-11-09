var $player1Load = document.querySelector(".animations1 .loadImage");
var $player1Shot = document.querySelector(".animations1 .shotImage");
var $player1Shield = document.querySelector(".animations1 .shieldImage");
var $player2Load = document.querySelector(".animations2 .loadImage");
var $player2Shot = document.querySelector(".animations2 .shotImage");
var $player2Shield = document.querySelector(".animations2 .shieldImage");


class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Action = '';
        this.player2Action = '';
    }

    setPlayerAction (player, action) {
        if (player === 1) {
            this.player1Action = action;
        }
        else {
            this.player2Action = action;
        }
    }

    showScore () {
        console.log(this.player1);
        console.log(this.player2);
    }

    endGame () {
        if (this.player1.health === 0 && this.player2.health > 0){
            console.log(`${this.player2.name} est le sheriff`);
        }
        if  (this.player2.health === 0 && this.player1.health > 0) {
            console.log(`${this.player1.name} est le sheriff`);
        }
        if (this.player1.health === 0 && this.player2.health === 0)
            console.log("You're both dead, stupid sheriff");
    }

    evaluate () {

        if(this.player1Action === 'load'){
            $player1Load.classList.remove('hidden');
            setTimeout(() => $player1Load.classList.add('hidden'),1000);
        }

        if(this.player1Action === 'shot'){
            $player1Shot.classList.remove('hidden');
            setTimeout(() => $player1Shot.classList.add('hidden'),1000);
        }

        if(this.player1Action === 'shield'){
            $player1Shield.classList.remove('hidden');
            setTimeout(() => $player1Shield.classList.add('hidden'),1000);
        }

        if(this.player2Action === 'load'){
            $player2Load.classList.remove('hidden');
            setTimeout(() => $player2Load.classList.add('hidden'),1000);
        }

        if(this.player2Action === 'shot'){
            $player2Shot.classList.remove('hidden');
            setTimeout(() => $player2Shot.classList.add('hidden'),1000);
        }

        if(this.player2Action === 'shield'){
            $player2Shield.classList.remove('hidden');
            setTimeout(() => $player2Shield.classList.add('hidden'),1000);
        }

        if(this.player1.health > 0 && this.player2.health > 0) {

    // SI LES DEUX TIRS AVEC OU SANS BALLES (GOOD)
            if (this.player1Action === 'shot' && this.player2Action === 'shot') {
                if(this.player1.bullet > 0 && this.player2.bullet > 0) {
                    this.player1.bullet -= 1;
                    this.player2.bullet -= 1;
                    this.player1.health -= 1;  
                    this.player2.health -= 1; 
                }
                else if (this.player1.bullet === 0 && this.player2.bullet > 0) {
                    this.player2.bullet -= 1;
                    this.player1.health -= 1;  
                } 
                else if (this.player1.bullet > 0 && this.player2.bullet === 0) {
                    this.player1.bullet -= 1;
                    this.player2.health -= 1;  
                }
            }

    // SI PLAYER1 TIRE MEME AVEC OU SANS BALLES (GOOD)
            if (this.player1Action === 'shot' && this.player2Action === 'load') {
                if(this.player1.bullet > 0 && this.player2.bullet < 3) {
                    this.player1.bullet -= 1;
                    this.player2.bullet += 1;
                    this.player2.health -= 1;
                }

                else if(this.player1.bullet > 0 && this.player2.bullet === 3) {
                    this.player1.bullet -= 1;
                    this.player2.health -= 1;
                }

                else if(this.player1.bullet === 0 && this.player2.bullet < 3){
                    this.player2.bullet += 1;
                }

                else if(this.player1.bullet === 0 && this.player2.bullet === 3){
                }
            }
    // SI PLAYER1 load alors qu'il a deja 3 balles, 
    // ET SI PLAYER2 shoat alors qu'il a pas de 3 balles (GOOD)

            if (this.player1Action === 'load' && this.player2Action === 'shot'){
                if(this.player1.bullet < 3 && this.player2.bullet > 0) {
                    this.player2.bullet -= 1;
                    this.player1.bullet += 1;
                    this.player1.health -= 1;
                }
                else if(this.player1.bullet === 3 && this.player2.bullet > 0){
                    this.player2.bullet -= 1;
                    this.player1.health -= 1;
                }
                else if(this.player1.bullet < 3 && this.player2.bullet === 0){
                    this.player1.bullet += 1;
                }

                else if(this.player1.bullet === 0 && this.player2.bullet === 3){
                }
            }

    // SI PLAYER1 TIRE AVEC OU SANS BALLES (GOOD)

            if (this.player1Action === 'shot' && this.player2Action === 'shield') {
                
                if(this.player1.bullet > 0) {
                this.player1.bullet -= 1;
                }
                else if(this.player1.bullet === 0){
                    //ANIMATION
                }
            }

    // SI PLAYER2 TIRE AVEC OU SANS BALLES (GOOD)
        
            if (this.player1Action === 'shield' && this.player2Action === 'shot'){
                if(this.player2.bullet > 0) {
                    this.player2.bullet -= 1;
                    }
                    if(this.player2.bullet === 0){
                        //ANIMATION 
                    }
            }

    //Si UN ou les DEUX rechargent alors qu'ils ont deja toutes leur balles (GOOD)

            if (this.player1Action === 'load' && this.player2Action === 'load'){
                if(this.player1.bullet < 3 && this.player2.bullet < 3) {
                    this.player1.bullet += 1;
                    this.player2.bullet += 1;
                }
                else if (this.player1.bullet === 3 && this.player2.bullet < 3){
                    this.player2.bullet += 1;
                }
                else if (this.player2.bullet < 3 && this.player2.bullet === 3){
                    this.player1.bullet += 1;
                }
            }

    // Si Player1 load alors que déjà 3 balles (GOOD)

    if (this.player1Action === 'load' && this.player2Action === 'shield'){
        if(this.player1.bullet < 3) {
            this.player1.bullet += 1;
        }
    }        
    // Si Player2 load alors que déjà 3 balles (GOOD)

            if (this.player1Action === 'shield' && this.player2Action === 'load'){
                if(this.player2.bullet < 3) {
                    this.player2.bullet += 1;
                }
            }

    //Aucun cas particulier (GOOD)

            if (this.player1Action === 'shield' && this.player2Action === 'shield'){       
            }

            this.showScore();
            this.player1Action = '';
            this.player2Action = '';
            this.endGame();
        }
    }
}
