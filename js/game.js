class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Turn = true;
    this.boardArray = ["-","-","-","-","-","-","-","-","-"]
  }
  winCheck() {
    var winsArray = [];
    winsArray.push([this.boardArray[0], this.boardArray[1], this.boardArray[2]]);
    winsArray.push([this.boardArray[3], this.boardArray[4], this.boardArray[5]]);
    winsArray.push([this.boardArray[6], this.boardArray[7], this.boardArray[8]]);
    winsArray.push([this.boardArray[0], this.boardArray[3], this.boardArray[6]]);
    winsArray.push([this.boardArray[1], this.boardArray[4], this.boardArray[7]]);
    winsArray.push([this.boardArray[2], this.boardArray[5], this.boardArray[8]]);
    winsArray.push([this.boardArray[0], this.boardArray[4], this.boardArray[8]]);
    winsArray.push([this.boardArray[2], this.boardArray[4], this.boardArray[6]]);
    for (var i = 0; i < winsArray.length; i++) {
      if (winsArray[i].every(value => value === this.player1.token)) {
        this.player1Turn = false;
        this.player1.increaseWins();
        this.resetGameBoard();
        return `player1`;
      } else if (winsArray[i].every(value => value === this.player2.token)) {
        this.player1Turn = true;
        this.player2.increaseWins();
        this.resetGameBoard();
        return `player2`;
      };
    };
    if (!this.boardArray.includes('-')) {
      this.resetGameBoard();
      return `tie`;
    }
  };
  resetGameBoard() {
  this.boardArray = ["-","-","-","-","-","-","-","-","-"];
  };
}
