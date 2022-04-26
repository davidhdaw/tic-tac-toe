//Global variables
var player1 = new Player("player1", "⭕");
var player2 = new Player("player2", "❌");
var thisGame = new Game(player1, player2);
//selectors
var board = document.querySelector('.game-board');
var displayPlayer = document.querySelector('.display-player');
var p1Wins = document.querySelector('.p1-wins');
var p2Wins = document.querySelector('.p2-wins');
//event listeners
board.addEventListener('click', selectCell);

//actual functions
function selectCell(event) {
  var cellID = eval(event.target.id);
  var cellNum = parseInt(event.target.id.substring(4));
  if (event.target.classList.contains('cells') && thisGame.player1Turn && thisGame.boardArray[cellNum] === "-") {
    cellID.innerText = player1.token;
    thisGame.boardArray[cellNum] = player1.token;
    thisGame.player1Turn = false;
    displayPlayer.innerHTML = `<h2>It's ❌'s turn</h2>`
    var gameStatus = thisGame.winCheck();
    endGame(gameStatus);
    return;
  } else if (event.target.classList.contains('cells') && thisGame.boardArray[cellNum] === "-") {
    cellID.innerText = player2.token;
    thisGame.boardArray[cellNum] = player2.token;
    thisGame.player1Turn = true;
    displayPlayer.innerHTML = `<h2>It's ⭕'s turn</h2>`
    var gameStatus = thisGame.winCheck();
    endGame(gameStatus);
    return;
  }
};

function endGame(gameStatus) {
  if (gameStatus === `player1`) {
    displayPlayer.innerHTML = `<h1>Player 1 wins! Dag!</h1>`;
    displayWins();
    board.classList.add('hidden')
    setTimeout(resetBoardInDOM, 2500);
  } else if (gameStatus === `player2`) {
    displayPlayer.innerHTML = `<h1>Player 2 wins! Frig!</h1>`;
    displayWins();
    board.classList.add('hidden')
    setTimeout(resetBoardInDOM, 2500);
  } else if (gameStatus === `tie`) {
    displayPlayer.innerHTML = `<h1>heck dang it's a tie</h1>`;
    board.classList.add('hidden')
    setTimeout(resetBoardInDOM, 2500);
  };
};

function displayWins() {
  p1Wins.innerText = `${thisGame.player1.wins} Wins`;
  p2Wins.innerText = `${thisGame.player2.wins} Wins`;
};

function resetBoardInDOM() {
  board.innerHTML = `
  <div class="cells" id="cell0">
  </div>
  <div class="cells" id="cell1">
  </div>
  <div class="cells" id="cell2">
  </div>
  <div class="cells" id="cell3">
  </div>
  <div class="cells" id="cell4">
  </div>
  <div class="cells" id="cell5">
  </div>
  <div class="cells" id="cell6">
  </div>
  <div class="cells" id="cell7">
  </div>
  <div class="cells" id="cell8">
  </div>
  `;
  board.classList.remove('hidden')
  if (thisGame.player1Turn) {
    displayPlayer.innerHTML = `<h2>It's ⭕'s turn</h2>`
  } else {
    displayPlayer.innerHTML = `<h2>It's ❌'s turn</h2>`
  }
}
