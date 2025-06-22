import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-start-screen',
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatInputModule, CommonModule, FormsModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {
  newPlayers: string[] = [];
  userInput:string = '';
  hidden = false;

  constructor(private router: Router) {}

  newGame() {
    this.router.navigate(['/game']);
  }

  validateName(){
    const regEx = /[^A-Z0-9\s]/ig;
    this.userInput = this.userInput.replace(regEx, '');
  }

  addPlayer(){
    console.log(this.checkIfPlayerExists())

    if (this.newPlayers.length < 5) {
      if (!this.checkIfPlayerExists()) {
    this.newPlayers.push(this.userInput.trim());
    this.emptyInput();
      } else {
        this.userInput = 'Player already exists';
      }
    } else {
      this.userInput = 'Maximum of players reached!';
    }
  }

  checkIfPlayerExists(){
    return this.newPlayers.some((name) => this.userInput === name);
}

emptyInput(){
  this.userInput = ''
}

toggleContainer(){
  this.hidden = !this.hidden;
}
}