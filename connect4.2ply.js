
$("grid").mouseover(function(){
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
