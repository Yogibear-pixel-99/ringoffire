import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: string[] = [];

  constructor() { }

  getPlayers(): string[]{
    return this.players;
  }
}
