$("tablegrid").hover(function() {
    $("cell").css("background-color", "white");
});

//A function used to add token on the slected column
function pickColumn(col) {
    if (player == 1) {
        grid[5][col] = 1;
        player = 2;
        document.getElementById("colorTurn").innerHTML = "Red Turn";
    } else {
        grid[5][col] = 2;
        player = 1;
        document.getElementById("colorTurn").innerHTML = "Blue Turn";
    }

    connectFour.clearGrid();
}


var connectFour = (function() {
    console.log("starting connect4.2ply.js");
    var grid = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ];

    var player = "Red";

    function playMove(id) {
        var row = parseInt(id[1], 10);
        var col = parseInt(id[6], 10);
        if (grid[row][col] === null) {
            // make a move
            grid[row][col] = player;
            // change the player
            if (player === "Red") {
                player = "Blue";
            } else {
                player = "Red";
            }
            // notify views
            notify();
        }
    }

    function clearGrid() {
        for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 7; col++) {
                if (grid[row][col] == 0) {
                    document.getElementById("cell" + row + col).style.backgroundColor = "#FFFFFF";
                } else if (grid[row][col] == 1) { //1 for red
                    document.getElementById("cell" + row + col).style.backgroundColor = "red";
                } else if (grid[row][col] == 2) { //2 for blue
                    document.getElementById("cell" + row + col).style.backgroundColor = "blue";
                }
            }
        }
        notify();
    }

    // update listeners
    var listeners = [];

    function addListener(cb) {
        // cb will be called when the grid changes
        listeners.push(cb);
    }

    function notify() {
            // notify views
            for (var i = 0; i < listeners.length; i++) {
                var cb = listeners[i];
                cb(grid);
            }
        }
        // the following functions are available inside the tictactoe module
    return {
        playMove: playMove,
        addListener: addListener,
        clearGrid: clearGrid
    };
})();
