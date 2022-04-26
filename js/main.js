//Global variables
var player1 = new Player("player1", "O");
var player2 = new Player("player2", "X");
var thisGame = new Game(player1, player2);
//selectors
var board = document.querySelector('.game-board');
var cell0 = document.querySelector('#cell0');
//event listeners
board.addEventListener('click', selectCell);

//actual functions
//Change innertext to player 1 symbol
//Change that index position in the game to player 1 symbol

//check for wins

function selectCell(event) {
  if (event.target.classList.contains('cells') && thisGame.Player1Turn) {
    var cellID = eval(event.target.id);
    var cellNum = parseInt(event.target.id.substring(4));
    cellID.innerText = player1.token;
    thisGame.boardArray[cellNum] = player1.token;
    thisGame.Player1Turn = false;
    thisGame.winCheck();
    return;
  } else if (event.target.classList.contains('cells')) {
    var cellID = eval(event.target.id);
    var cellNum = parseInt(event.target.id.substring(4));
    cellID.innerText = player2.token;
    thisGame.boardArray[cellNum] = player2.token;
    thisGame.Player1Turn = true;
    thisGame.winCheck();
    return;
  }
};
