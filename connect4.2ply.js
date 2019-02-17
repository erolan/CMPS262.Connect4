
$("gameboard").mouseover(function(){
  $("cell").css("background-color", "white");
});

var connectfo = (function(){}
console.log("starting connect4.2ply.js");
var grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null];

 var player = "Red";

 function playMove(id) {
   var row = parseInt(id[1], 10);
   var col = parseInt(id[3], 10);
   if (grid[row][col] === null) {
     // make a move
     grid[row][col] = player;
     // change the player
     if (player === "Red") {
       player = "Blue";
     }
     else {
       player = "Red";
     }
     // notify views
     notify();
   }
 }

 function clearGrid() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
      if (grid[row][col]==0) {
                document.getElementById("cell"+row+col).style.backgroundColor="#FFFFFF";
      } else if (grid[row][col]==1) { //1 for yellow
                document.getElementById("cell"+row+col).style.backgroundColor="red";
      } else if (grid[row][col]==2) { //2 for blue
                document.getElementById("cell"+row+col).style.backgroundColor="blue";
       }
    }
  }
}

var tictactoe = (function() {
  console.log("initializing tictactoe.js");
  var grid = [[null, null, null],
              [null, null, null],
              [null, null, null]];

  var player = "X";

  function playMove(id) {
    var row = parseInt(id[1], 10);
    var col = parseInt(id[3], 10);
    if (grid[row][col] === null) {
      // make a move
      grid[row][col] = player;
      // change the player
      if (player === "X") {
        player = "O";
      }
      else {
        player = "X";
      }
      // notify views
      notify();
    }
  }

  function clearGrid() {
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        grid[r][c] = null;
      }
    }
    // notify views
    notify();
  }

  // below we track and notify listeners
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
