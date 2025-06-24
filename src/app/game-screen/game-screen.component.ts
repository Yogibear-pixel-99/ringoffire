import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { PlayerService } from '../services/player.service';
import { CardInfoComponent } from "../card-info/card-info.component";

@Component({
  standalone: true,
  selector: 'app-game-screen',
  imports: [CommonModule, PlayerComponent, CardInfoComponent],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.scss',
})
export class GameScreenComponent implements OnInit {
  game!: Game;
  cardTaken = false;
  currentCard: string = '';

  constructor(private playerservice: PlayerService) {}

  ngOnInit() {
    this.newGame();
  }

  takeCard() {
    if (this.game.stack.length === 0 || this.cardTaken) return;
    if (this.game.stack.length > 0) {
    this.currentCard = this.game.stack.pop() || '';
    }
    this.cardTaken = true;
    setTimeout(() => {
      this.cardTaken = false;
      if (this.currentCard !== undefined) {
        this.game.playedCards.push({
          name: this.currentCard,
          transform: this.calculatePlayedCardPos(),
        });
      }
    }, 1500);
  }

  nextPlayer(){
    setTimeout(() => {
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
  }, 1500);
}

  newGame() {
    this.game = new Game(this.playerservice.players);
  }

  calculatePlayedCardPos() {
    return `scale(1) translate(${
      this.game.playedCards.length * 2
    }px, -300px) rotate(${Math.ceil(Math.random() * 360)}deg)`;
  }
}
