import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone : true,
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  constructor(private router: Router){ }

  newGame(){
    this.router.navigate(["/game"]);
    
  }

}
