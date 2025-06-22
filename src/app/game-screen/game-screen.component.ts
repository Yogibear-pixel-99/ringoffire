import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { OnInit } from '@angular/core';
import { PlayerComponent } from "../player/player.component";

@Component({
  standalone: true,
  selector: 'app-game-screen',
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.scss'
})
export class GameScreenComponent implements OnInit{



  game!: Game;
  cardTaken = false;
  currentCard: string | undefined = "";

  ngOnInit(){
    this.newGame();
  }

  takeCard(){
    if (this.game.stack.length === 0 || this.cardTaken) return;
    this.currentCard = this.game.stack.pop() || undefined;
    
    this.cardTaken = true;
    setTimeout(() => {
      this.cardTaken = false
      if (this.currentCard !== undefined) {
    this.game.playedCards.push({
      name : this.currentCard,
      transform: this.calculatePlayedCardPos()
    });
          console.log(this.currentCard);
    console.log(this.game.playedCards);
    }
    }, 1500);

  }



  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  calculatePlayedCardPos(){
   return `scale(1) translate(${this.game.playedCards.length * 2}px, -300px) rotate(${Math.ceil(Math.random() * 360)}deg)`
}

}