// js to create variables to be used in game.
var config = {
        blackPlayerName: "PLAYER ONE",
        redPlayerName: "PLAYER TWO",
        startingPlayer: "black",
        takenMsg: "This row is full, choose another.",
        drawMsg: "This game is a draw.",
        playerPrefix: "Current Player is: ",
        winPrefix: "The winner is: ",
        countToWin: 4,
    };


var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];


var currentPlayer = config.startingPlayer;
