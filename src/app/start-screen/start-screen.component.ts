import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerService } from '../services/player.service';

@Component({
  standalone: true,
  selector: 'app-start-screen',
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatInputModule, CommonModule, FormsModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {
  players: string[] = []
  userInput:string = '';
  hidden = false;

  constructor(private router: Router, private playerservice: PlayerService) {
    this.players = this.playerservice.players;
  }

  newGame() {
    this.router.navigate(['/game']);
  }

  validateName(){
    const regEx = /[^A-Z0-9\s]/ig;
    this.userInput = this.userInput.replace(regEx, '');
  }

  addPlayer(){
    if (this.playerservice.players.length > 5 || this.userInput.length === 0) return;



    if (this.playerservice.players.length < 5) {
      if (!this.checkIfPlayerExists()) {
    this.playerservice.players.push(this.userInput.trim());
    this.emptyInput();
      } else {
        this.userInput = 'Player already exists';
      }
    } else {
      this.userInput = 'Maximum of players reached!';
    }
    console.log(this.playerservice);
  }

  checkIfPlayerExists(){
    return this.playerservice.players.some((name: string) => this.userInput === name);
}

emptyInput(){
  this.userInput = ''
}

toggleContainer(){
  this.hidden = !this.hidden;
}
}