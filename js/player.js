class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    };
  increaseWins() {
    this.wins++;
    localStorage.setItem(this.id, this.wins);
  };
}
