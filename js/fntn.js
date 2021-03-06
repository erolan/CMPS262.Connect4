$( document ).ready(function() {
    console.log( "document load ready!" );
    $('h2').hide("fast");
});


function addDiscToBoard(color, x_pos, y_pos) {
    board[y_pos][x_pos] = color;
    console.log(color,y_pos,x_pos);
}

function printBoard() {
    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            if (board[y][x] !== 0) {
                var cell = $("tr:eq(" + y + ")").find('td').eq(x);
                cell.children('button').addClass(board[y][x]);
            }
        }
    }
}

// fntn to swap players
function changePlayer() {
    if (currentPlayer === 'black') {
        currentPlayer = 'red';
        rturns++
        console.log(rturns);
    } else {
        currentPlayer = 'black';
        bturns++
        console.log(bturns);
    }
    $('#player').removeClass().addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
}

// function that sends the token to the bottom every click
function dropToBottom(x_pos, y_pos) {
    for (var y = 5; y > y_pos; y--) {
        if (board[y][x_pos] === 0) {
            return y;
        }
    }
    return y_pos;
}

// checks if row is full
function rowIsntFull(x_pos, y_pos) {
    var value = board[y_pos][x_pos];
    return value === 0 ? false : true;
}

function gameIsDraw() {
    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            if (board[y][x] === 0) {
                return false;
            }
        }
    }
    return true;
}


function hWin() {
    var currentValue = null,
        previousValue = 0,
        count = 0;
    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            currentValue = board[y][x];
            if (currentValue === previousValue && currentValue !== 0) {
                count += 1;
            } else {
                // Reset the count if you find a gap.
                count = 0;
            }
            if (count === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
        }
        count = 0;
        previousValue = 0;
    }
    return false;
}


function vWin() {
    var currentValue = null,
        previousValue = 0,
        count = 0;
    for (var x = 0; x <= 6; x++) {
        for (var y = 0; y <= 5; y++) {
            currentValue = board[y][x];
            if (currentValue === previousValue && currentValue !== 0) {
                count += 1;
            } else {
                // Reset the count if you find a gap.
                count = 0;
            }
            if (count === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
        }
        count = 0;
        previousValue = 0;
    }
    return false;
}


function dWin() {
    var x = null,
        y = null,
        xtemp = null,
        ytemp = null,
        currentValue = null,
        previousValue = 0,
        count = 0;
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (xtemp <= 6 && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                count += 1;
            } else {
                count = 0;
            }
            if (count === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
            xtemp++;
            ytemp++;
        }
        count = 0;
        previousValue = 0;
    }
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (0 <= xtemp && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                count += 1;
            } else {
                // Reset the count if you find a gap.
                count = 0;
            }
            if (count === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
            xtemp--;
            ytemp++;
        }
        count = 0;
        previousValue = 0;
    }
    for (y = 0; y <= 5; y++) {
        xtemp = 0;
        ytemp = y;

        while (xtemp <= 6 && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                count += 1;
            } else {
                count = 0;
            }
            if (count === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
            xtemp++;
            ytemp++;
        }
        count = 0;
        previousValue = 0;
    }

    for (y = 0; y <= 5; y++) {
        xtemp = 6;
        ytemp = y;

        while (0 <= xtemp && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                count += 1;
            } else {
                count = 0;
            }
            if (count === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
            xtemp--;
            ytemp++;
        }
        count = 0;
        previousValue = 0;
    }
    return false;
}

( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );

function begin() {
    config.blackPlayerName = prompt("PLAYER ONE Name (Black Pieces)", config.blackPlayerName) || config.blackPlayerName;
    config.redPlayerName = prompt("PLAYER TWO Name (Red Pieces)", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerPrefix);
    $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
    $('h2').show("slow");
    $('#start').hide("fast");
    $('.blueTable').hide("fast");
    $('.tablegrid button').click(function(e) {
        var y_pos = $('.tablegrid tr').index($(this).closest('tr'));
        var x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
        y_pos = dropToBottom(x_pos, y_pos);
        if (rowIsntFull(x_pos, y_pos)) {
            alert(config.takenMsg);
            return;
        }
        addDiscToBoard(currentPlayer, x_pos, y_pos);
        printBoard();
        // Check for Win
        if (vWin() || hWin() || dWin()) {
            $('.tablegrid button').unbind('click');
            $('.prefix').text(config.winPrefix);
            $('.play-again').show("slow");
            $('.blueTable').show("fast");
            return;
        } else if (gameIsDraw()) {
            $('.tablegrid button').unbind('click');
            $('.message').text(config.drawMsg);
            $('#start').hide("slow");
            $('.blueTable').show("fast");
            $('.play-again').show("slow");
            return;
        }
        changePlayer();
    });
    $('.play-again').click(function(e) {
        location.reload();
    });
};

$(document).bind("mobileinit", function(){
  $.mobile.touchOverflowEnabled = true;
});
