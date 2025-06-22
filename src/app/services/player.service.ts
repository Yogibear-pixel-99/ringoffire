import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: string[] = [];

  constructor() { }

  // setPlayers(data: string[]){
  //   this.players = data;
  // }

  getPlayers(): string[]{
    return this.players;
  }
}
