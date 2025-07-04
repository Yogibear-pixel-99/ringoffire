export interface GameInt {
  currentPlayer: number;
  playedCards: { name: string; transform: string }[];
  players: string[];
  stack: string[];
}
