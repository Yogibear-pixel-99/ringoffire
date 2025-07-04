export class Game {
  public players: string[] = [];
  public stack: string[] = [];
  public playedCards: {
    name: string;
    transform: string;
  }[] = [];
  public currentPlayer: number = 0;
  public cardTaken = false;
  public currentCard: string = '';

  constructor(players: string[]) {
    for (let i = 1; i < 14; i++) {
      this.stack.push(`hearts_${i}`);
      this.stack.push(`diamonds_${i}`);
      this.stack.push(`clubs_${i}`);
      this.stack.push(`ace_${i}`);
    }

    this.shuffle(this.stack);
    this.players = players;
  }

  private shuffle(array: string[]) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  public toJson() {
    return {
      players: this.players,
      stack: this.stack,
      playedCards: this.playedCards,
      currentPlayer: this.currentPlayer,
      cardTaken: this.cardTaken,
      currentCard: this.currentCard,
    };
  }
}
