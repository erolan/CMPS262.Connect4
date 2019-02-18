$(document).ready(function() {

    config.blackPlayerName = prompt("Player 1 Name (Black Pieces)", config.blackPlayerName) || config.blackPlayerName;
    config.redPlayerName = prompt("Player 2 Name (Red Pieces)", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerPrefix);
    $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);


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
            return;

        } else if (gameIsDraw()) {
            $('.tablegrid button').unbind('click');
            $('.message').text(config.drawMsg);
            $('.play-again').show("slow");
            return;
        }

        changePlayer();
    });

    $('.play-again').click(function(e) {
        location.reload();
    });
});
