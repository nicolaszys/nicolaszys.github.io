class Player {
    constructor(name, health, bullet) {
        this.name = name;
        this.health = health;
        this.bullet = bullet;
    }
}
var player1;
var player2;
var myGame;

function startGame () {

    player1 = new Player("Billy", 3,0);
    player2 = new Player("Joe", 3,0);
    myGame = new Game (player1,player2);
    console.log('debut du tour!');

    setInterval (function() {
        console.log('evaluate');
        myGame.evaluate();
    }, 2000);


    document.onkeydown = function(event) {
        switch (event.keyCode) {
            case 65:
                myGame.setPlayerAction(1, 'load');
            break;
            case 83:
                myGame.setPlayerAction(1, 'shot');
            break;
            case 68:
                myGame.setPlayerAction(1,'shield');
            break;
    
            case 74:
                myGame.setPlayerAction(2, 'load');
            break;
            case 75:
                myGame.setPlayerAction(2, 'shot');
            break;
            case 76:
                myGame.setPlayerAction(2,'shield');
            break;            
        }
    };
}



