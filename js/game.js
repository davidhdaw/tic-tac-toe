class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.Player1Turn = true;
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
        return `Player 1 wins! Dag!`
      } else if (winsArray[i].every(value => value === this.player2.token)) {
        return `Player 2 wins! Frig!`
      };
    };
    if (!this.boardArray.includes('-')) {
      return `heck dang it's a tie`
    }
  };
  resetGameBoard() {
  this.boardArray = ["-","-","-","-","-","-","-","-","-"];
  };
}
