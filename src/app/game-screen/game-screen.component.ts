import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Game } from '../models/game';
import { OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { PlayerService } from '../services/player.service';
import { CardInfoComponent } from '../card-info/card-info.component';
import { Firestore, collection, collectionData, addDoc, doc, docData } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-game-screen',
  imports: [CommonModule, PlayerComponent, CardInfoComponent],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.scss',
})
export class GameScreenComponent implements OnInit, OnDestroy {
  game!: Game;
  cardTaken = false;
  currentCard: string = '';
  private firestore = inject(Firestore);
  private playerservice = inject(PlayerService);

  showDataObs$!: Observable<any>;
  unsubData!: Subscription;


  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.newGame();
      this.route.params.subscribe((element) => {
      let gameId = element["id"];
      let gameDocRef = doc(this.firestore, `games/${gameId}`);
      this.showDataObs$ = docData(gameDocRef);
      this.unsubData = this.showDataObs$.subscribe((data) => {
        console.log(data);
        this.game.currentPlayer = data.currentPlayer;
        this.game.playedCards = data.playedCards;
        this.game.players = data.players;
        this.game.stack = data.stack;
    }) 
    console.log(gameId);
    console.log(this.game);
    });
  }

  ngOnDestroy(){
    this.unsubData.unsubscribe();
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

  nextPlayer() {
    setTimeout(() => {
      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;
    }, 1500);
  }

  async newGame() {
    this.game = new Game(this.playerservice.players);
  }

  calculatePlayedCardPos() {
    return `scale(1) translate(${
      this.game.playedCards.length * 2
    }px, -300px) rotate(${Math.ceil(Math.random() * 360)}deg)`;
  }



  // ngOnInit(){
  //   this.newGame();
  //   this.route.params.subscribe((params) => {
  //     console.log(params.id);
  //   })

  //   this
  //   .firestore
  //   .collection('games')
  //   .doc(HttpParams.id)
  //   .valueChanges(),
  //   .subscribe((game) => {
  //     console.log("Game update", game);
  //   })
  // }



}
