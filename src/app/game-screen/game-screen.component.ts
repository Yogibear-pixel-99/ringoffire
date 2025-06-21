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

  ngOnInit(){
    this.newGame();
  }

  takeCard(){
    this.cardTaken = true;
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

}
