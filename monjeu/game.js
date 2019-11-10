// ANIMATION DE TIR

var $player1Load = document.querySelector(".animations1 .loadImage");
var $player1Shot = document.querySelector(".animations1 .shotImage");
var $player1Shield = document.querySelector(".animations1 .shieldImage");

var $player2Load = document.querySelector(".animations2 .loadImage");
var $player2Shot = document.querySelector(".animations2 .shotImage");
var $player2Shield = document.querySelector(".animations2 .shieldImage");

//ANIMATION D"UNIT

var $player1vie1 = document.querySelector(".unit1 .vie1");
var $player1vie2 = document.querySelector(".unit1 .vie2");
var $player1vie3 = document.querySelector(".unit1 .vie3");

var $player1bullet1 = document.querySelector(".unit1 .bullet1");
var $player1bullet2 = document.querySelector(".unit1 .bullet2");
var $player1bullet3 = document.querySelector(".unit1 .bullet3");

var $player2vie1 = document.querySelector(".unit2 .vie1");
var $player2vie2 = document.querySelector(".unit2 .vie2");
var $player2vie3 = document.querySelector(".unit2 .vie3");

var $player2bullet1 = document.querySelector(".unit2 .bullet1");
var $player2bullet2 = document.querySelector(".unit2 .bullet2");
var $player2bullet3 = document.querySelector(".unit2 .bullet3");


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

        //EVALUATE LES ANIMATIONS PISTOLET,RECHARGE,TONNEAU

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

        //EVALUATE LE NOMBRE DE BALLES ET VIES RESTANT CHACUN
            //PLAYER1

                //VIE
        if(this.player1.health ===3)  {
            $player1vie1.classList.remove('transparency');
            $player1vie2.classList.remove('transparency');
            $player1vie3.classList.remove('transparency');
        }
        else if(this.player1.health ===2)  {
            $player1vie1.classList.remove('transparency');
            $player1vie2.classList.remove('transparency');
        }
        else if(this.player1.health ===1)  {
            $player1vie1.classList.remove('transparency');
        }
        else if (this.player1.health ===0) {

        }
                //BULLET
        if(this.player1.bullet ===1) {
            $player1bullet1.classList.remove('transparency');
        }
        
        else if (this.player1.bullet ===2) {
            $player1bullet1.classList.remove('transparency');
            $player1bullet2.classList.remove('transparency');
        }

        else if(this.player1.bullet ===3) {
            $player1bullet1.classList.remove('transparency');
            $player1bullet2.classList.remove('transparency');
            $player1bullet3.classList.remove('transparency');
        }

        //EVALUATE LE NOMBRE DE BALLES ET VIES RESTANT CHACUN
            //PLAYER2
                //VIE
        if(this.player2.health ===3)  {
            $player2vie1.classList.remove('transparency');
            $player2vie2.classList.remove('transparency');
            $player2vie3.classList.remove('transparency');
        }
        else if(this.player2.health ===2)  {
            $player2vie1.classList.remove('transparency');
            $player2vie2.classList.remove('transparency');
        }
        else if(this.player2.health ===1)  {
            $player2vie1.classList.remove('transparency');
        }
        else if (this.player2.health ===0) {

        }
                //BULLET
        if(this.player2.bullet ===1) {
            $player2bullet1.classList.remove('transparency');
        }
        
        else if (this.player2.bullet ===2) {
            $player2bullet1.classList.remove('transparency');
            $player2bullet2.classList.remove('transparency');
        }

        else if(this.player2.bullet ===3) {
            $player2bullet1.classList.remove('transparency');
            $player2bullet2.classList.remove('transparency');
            $player2bullet3.classList.remove('transparency');
        }

        this.showScore();
        this.player1Action = '';
        this.player2Action = '';
        this.endGame();
    }
}

