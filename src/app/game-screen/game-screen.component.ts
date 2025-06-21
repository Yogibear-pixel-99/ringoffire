import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-game-screen',
  imports: [CommonModule],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.scss'
})
export class GameScreenComponent implements OnInit{



  game!: Game;
  cardTaken = false;
  currentCard: string | undefined = "";
  cardPosition: Object = {};

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
    this.game.playedCards.push(this.currentCard);
    }
    }, 1500);
    console.log(this.currentCard);
    console.log(this.game.playedCards);
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  calculatePlayedCardPos(){
    let rot = Math.ceil(Math.random() * 360);
    this.cardPosition = {
      transform: 'translate('+ (50 * 5)+'px, '+ (-200) + 'px) rotate('+(rot)+'deg)'
    }
  }

}
